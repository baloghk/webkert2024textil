import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {delay, Observable, of, pipe, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy{

  hide = true;

  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;
  loading: boolean = false;
  notloading: boolean = true;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  async login() {
    if (this.email.value != null && this.password.value != null) {
      this.authService.login(this.email.value, this.password.value).then(cred => {
        this.notloading = false;
        this.loading = true;
        of(null)
        .pipe(delay(2000))
            .subscribe(() => this.router.navigateByUrl('/main'))
      }).catch(error => {
        window.alert(error);
      })
    } else {
      window.alert("Mindkét mező kitöltése kötelező!")
    }
  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }
}
