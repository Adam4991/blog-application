import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-update',
  standalone: true,
  imports: [CommonModule ,FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './post-update.component.html',
  styleUrl: './post-update.component.css'
})
export class PostUpdateComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.blogService.getPostById(id).subscribe(data => {
          this.postForm = this.fb.group({
            title: [data.title, Validators.required],
            content: [data.content, Validators.required],
            author: [data.author, Validators.required]
          });
        });
      }
    });
  }

  get titleControl() {
    return this.postForm.get('title')!;
  }

  get contentControl() {
    return this.postForm.get('content')!;
  }

  get authorControl() {
    return this.postForm.get('author')!;
  }

  updatePost(): void {
    if (this.postForm.valid) {
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id) {
          this.blogService.updatePost(id, this.postForm.value).subscribe(() => {
            this.router.navigate(['/post', id]);
          });
        }
      });
    } else {
      alert('Please fill in all required fields');
    }
  }

  get postId() {
    return this.route.snapshot.paramMap.get('id');
  }
}
