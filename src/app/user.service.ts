import { Injectable } from '@angular/core';
import { User } from './user';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UserService{

constructor(private http:HttpClient){}

    getUsers():Observable<User[]>{
        return this.http.get<User[]>("http://localhost:3000/users");
    }

    putUser(user : User) : Observable<User>{
      const httpOptions ={
          headers: new HttpHeaders({
         'Content-Type' :'application/json'
         })};
         
      return this.http.put<User>('http://localhost:3000/users/'+ user.tp_id, user,httpOptions);
    }

    
/*     getUserIds(): Observable<string[] | any>{
        return this.getUsers().pipe(map(users => users.map(user => user.tp_id)));
    } 

    getUser(id:string):Observable<User>{
        return this.http.get<User>("http://localhost:3000/users/"+id)
        .pipe(map(users => users[0]));
    }  */
      
   


}