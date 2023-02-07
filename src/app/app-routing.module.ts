import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  {path:'',redirectTo:'post',pathMatch:'full'},
  {path:'addpost',component:AddPostComponent},
  {path:'post/:id',component:UpdatePostComponent},
  {path:'post',component:ListPostComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
