import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";
import {UserFireStore} from "../../models/UserFireStore";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  kys?: any;

  editForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl('')
  });

  constructor(private us: UserService, private as: AuthService, private router: Router){
  }
  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string);
    this.us.getAll().subscribe(u => {
      u.forEach(i => {
        if (user.email == i.email){
          this.kys = i
          return
        }
      })
    })
  }

  onDelete(){
    this.us.delete(this.kys.id)
        .then((_) => {
          alert("Sikeres törlés.")
          this.as.logout()
          this.as.deleteUser()
          this.router.navigateByUrl('/login')
        })
        .catch((error) => {
          alert("Hiba történt a fiókod törlésekor!")
        });
  }




}
