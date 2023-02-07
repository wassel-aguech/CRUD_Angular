import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {



  
  url = 'http://localhost:3000/posts';

  constructor( private http : HttpClient ) { }


register(postData : any){
 return this.http.post(this.url , postData)
}

getallpost(){
  return this.http.get(this.url)
}

deletepost(id:any){
  return this.http.delete(this.url +'/'+id)
}

getpostyid(id: any) {
  return this.http.get(this.url + '/' + id)


}
updatepost(id: any, data: any) {
  return this.http.put(this.url +'/'+ id, data)
}

}


