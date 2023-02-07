import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogserviceService } from '../services/blogservice.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {
listposts:any
namepost:any
  constructor(private serviceblog:BlogserviceService,private router:Router){}
  ngOnInit() {
    this.listpost();
  }


  listpost() {
    this.serviceblog.getallpost().subscribe((response: any) => {
      this.listposts = response
    }, (error) => {
      console.log(error);
    })
  }


  delete(id: any) {
    this.serviceblog.deletepost(id).subscribe((response: any) => {
      alert('delete succsess')
      this.listpost();
    }, (error) => {
      console.log(error);

    })
  }
  gotoupdate(id: any) {
    this.router.navigate(['/post', id])
  }
}
