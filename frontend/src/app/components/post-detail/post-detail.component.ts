import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {
  post: any;

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.getPostById(id!).subscribe(data => {
      this.post = data;
    });
  }

  deletePost(): void {
    if (confirm('Are you sure you want to delete this post?')) {
      const id = this.route.snapshot.paramMap.get('id');
      this.blogService.deletePost(id!).subscribe(() => {
        alert('Post deleted successfully');
        this.router.navigate(['/posts']);
      });
    }
  }

}
