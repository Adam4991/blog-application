import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'http://localhost:8086/api';

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllPosts`);
  }

  getPostById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getPostById/${id}`);
  }

  createPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/createPost`, post);
  }

  updatePost(id: string, post: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/updatePost/${id}`, post);
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/deletePost/${id}`);
  }
}
