import { Component } from '@angular/core';
import { BlogserviceService } from '../services/blogservice.service';
import { Validators, FormArray, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {
submitted=false
postform:any
id:any
constructor(private serviceblog:BlogserviceService,private router:Router,private route:ActivatedRoute){}


ngOnInit(){
  this.postform = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    categorie: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
   
  })
  this.getonpost()
}


getonpost() {
  this.id = this.route.snapshot.params['id']
  this.serviceblog.getpostyid(this.id).subscribe((response) => {
    this.postform?.patchValue(response);
  }, (Error) => {
    console.log('error')
  })
}

update() {
  this.submitted=true
      if(this.postform?.invalid){
        return
       }
  this.serviceblog.updatepost(this.id, this.postform?.value).subscribe((Response) => {
    alert('post updated success !!')
    this.router.navigateByUrl('/post')
  }, (Error) => {
    console.log('error')
  })
}

}
