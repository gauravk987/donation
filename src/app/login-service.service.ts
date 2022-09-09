import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

   rootURL = 'http://127.0.0.1:8000/';
   getUsers() {
    

    return this.http.get(this.rootURL);
  
}

createUser(student: any){  
  return this.http.post(this.rootURL+"login_user", student);  
}  
}
