import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {UserFireStore} from "../models/UserFireStore";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Users';

  constructor(private afs: AngularFirestore) { }

  create(user: UserFireStore) {
    return this.afs.collection<UserFireStore>(this.collectionName).doc(user.id).set(user);
  }

  getAll() {
    return this.afs.collection<UserFireStore>(this.collectionName).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<UserFireStore>(this.collectionName).doc(id).valueChanges();
  }

  update(user: UserFireStore) {
    return this.afs.collection<UserFireStore>(this.collectionName).doc(user.id).set(user);
  }

  delete(id: string) {
    return this.afs.collection<UserFireStore>(this.collectionName).doc(id).delete();
  }
}
