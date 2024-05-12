import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {delay, of} from "rxjs";
import {UserFireStore} from "../../models/UserFireStore";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl('')
  });

  hide : boolean = true;
  hide2 : boolean = true;
  loading : boolean = false;
  notloading : boolean = true;


  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
      if(this.signupForm.get('password')?.value === this.signupForm.get('rePassword')?.value){
        this.authService.signup(<string>this.signupForm.get('email')?.value,<string>this.signupForm.get('password')?.value)
            .then(cred => {
                const user: UserFireStore = {
                    id: cred.user?.uid as string,
                    email: this.signupForm.get('email')?.value!,
                };
                this.userService
                    .create(user)
                    .then((_) => {
                        console.log('User added successfully.');
                    })
                    .catch((error) => {
                        alert("Nemjo")
                        console.error(error);
                    });
                this.notloading = false;
                this.loading = true;
                of(null)
                    .pipe(delay(2000))
                    .subscribe(() => this.router.navigateByUrl('/main'))
            }).catch(error => {
          window.alert(error);
        });
      }
      else{
        window.alert("A két jelszó nem egyezik!");
      }
    }
}
