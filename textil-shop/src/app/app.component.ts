import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'textil-web';
  userActive?: firebase.default.User | null;


  constructor(private router: Router, private auth: AuthService){
  }

  ngOnInit(){
    this.auth.isUserLoggedIn().subscribe(user => {
      this.userActive = user;
      localStorage.setItem('user',JSON.stringify(this.userActive));
    }, error => {
      console.error(error);
      localStorage.setItem('user',JSON.stringify('null'));
    });
  }

  logout(_?: boolean){
    this.auth.logout().then(() =>{
      this.router.navigateByUrl('/login');
    }).catch(error =>{
      console.log(error);
    });
  }

  close(sidenav: MatSidenav, logout?: boolean){
    sidenav.close();
    if(logout === true){
      this.logout()
    }
  }

  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }
}

