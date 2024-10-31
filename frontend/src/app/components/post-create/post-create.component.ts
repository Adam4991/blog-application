import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog-service.service';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [CommonModule ,FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent implements OnInit{
  postForm: FormGroup;

  constructor(private blogService: BlogService, private router: Router, private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required]
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

  createPost(): void {
    if (this.postForm.valid) {
      const post = this.postForm.value;
      this.blogService.createPost(post).subscribe(() => {
        this.router.navigate(['/posts']);
      });
    } else {
      alert('Please fill in all required fields');
    }
  }

}
