export class CurrentUser  {
    public   displayName: string;
    public  roles:string[];
    public  userKind:string;
    public email:string;
 
   constructor (email:string, userKind:string, displayName:string){
      this.email = email;
      this.userKind = userKind;
      this.displayName = displayName;
     this.roles = [];
 
   }  
 }