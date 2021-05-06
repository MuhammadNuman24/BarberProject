import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import{Observable, of} from 'rxjs';
import {map , tap} from 'rxjs/operators';
import { CurrentUser } from '../Models/CurrentUser';
import { UserResult } from '../Models/UserResults';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private accessToken : string | null = null;
  private  currentuser : CurrentUser |null= null;
   constructor( private httpClient: HttpClient) { }
   public loginUser(email:string , password: string): Observable<CurrentUser> {
 
     return this.httpClient 
     .post<UserResult>(
       '/api/users/login' ,
        {email, password  ,Kind :'employee'})
        .pipe (
          tap (userResult =>
          { 
            this.accessToken = userResult.accessToken;
           localStorage.refreshToken = userResult.refreshToken;
           }),
           map (userResult =>{
             const currentuser= new CurrentUser(userResult.email , userResult.userKind ,userResult.displayName);
             return currentuser;
           }),
           tap (currentuser =>{
             this.currentuser = currentuser
           }),
     );
      }
      public getCurrentUser (): CurrentUser |  null {
        return this.currentuser ;
     };
      public getaccessToken ():string | null {
        return this.accessToken; 
      }
    }
