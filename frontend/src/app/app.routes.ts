import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostUpdateComponent } from './components/post-update/post-update.component';

export const routes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'posts', component: PostListComponent },
    { path: 'post/:id', component: PostDetailComponent },
    { path: 'create', component: PostCreateComponent },
    { path: 'update/:id', component: PostUpdateComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
