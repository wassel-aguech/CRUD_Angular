import { Component } from '@angular/core';
import { BlogserviceService } from '../services/blogservice.service';
import { Validators, FormArray, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  postform:any;
  submitted=false
    constructor(private serviceblog:BlogserviceService,private router:Router){}
    
    
    ngOnInit(){
      this.postform = new FormGroup({
        titre: new FormControl('', [Validators.required, Validators.minLength(3)]),
        description: new FormControl('', Validators.required),
        categorie: new FormControl('', Validators.required),
        date: new FormControl('', Validators.required),
       
      })
    }

  
    onsubmit() {
      this.submitted=true
      if(this.postform?.invalid){
        return
       }
      this.serviceblog.register(this.postform?.value)
        .subscribe(
          Response =>alert('post added successfuly'),
          error => console.log('error!!', error),
        )
        this.router.navigate(['/post']);
    }
 
}
