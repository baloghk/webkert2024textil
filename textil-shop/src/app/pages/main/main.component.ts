import {Component, OnInit} from '@angular/core';
import {TextilService} from "../../services/textil.service";
import {AuthService} from "../../services/auth.service";
import {TextilFireStore} from "../../models/TextilFireStore";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{

  constructor(private textilService: TextilService, private auth: AuthService,
              private fs: AngularFirestore, private _snackBar: MatSnackBar) { }

  panelOpenState = false;
  email: string = "";
  textils: any[] = [];
  sortedtextils: TextilFireStore[] = [];

  sortDirection: 'asc' | 'desc' = 'asc';
  limit: number = 10;

  ngOnInit(): void {
    this.textilService.loadTextils().subscribe(textil => {
      this.textils = textil;
      this.sorting();
    })
  }

  openSnackBar() {
    this._snackBar.open("A rendezés sikeresen megtörtént!", "Értettem!");
  }


  sorting(): void {
    this.sortedtextils = [...this.textils];

    this.sortedtextils.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.textilPrice - b.textilPrice;
      } else {
        return b.textilPrice - a.textilPrice;
      }
    });

    this.sortedtextils = this.sortedtextils.slice(0, this.limit);
  }


  protected readonly String = String;
}
