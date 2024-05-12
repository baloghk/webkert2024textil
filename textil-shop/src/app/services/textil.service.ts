import { Injectable } from '@angular/core';
import {TextilFireStore} from "../models/TextilFireStore";
import {AngularFirestore, DocumentReference} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {Textil} from "../models/Textil";
import {collection, collectionData} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class TextilService {

  constructor(private fs: AngularFirestore) { }

  loadTextils(){
      return this.fs.collection<TextilFireStore>('Textils').valueChanges()

  }

}
