import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username : string = "";
  password : string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.username = 'superadmin';
    this.password = '12345';
  }

  checkLoginAuth(){
    if (this.username=="superadmin" && this.password=="12345"){
      alert("anda dapat masuk");
      this.router.navigateByUrl('/home', {state:{userRole : 'superadmin'}});
    } else if(this.username=='admin' && this.password=='12345') {
      this.router.navigateByUrl('/home', {state:{userRole : 'admin'}});
    } else {
      alert("kredensial anda salah");
    }
  }

}
