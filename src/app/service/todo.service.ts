import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  firestoreCollection : AngularFirestoreCollection

  constructor(private firestore: AngularFirestore) {
    this.firestoreCollection= firestore.collection('todos');
  }
  addTodo(title: string) {
    return this.firestoreCollection.add({title, isCompleted: false})
  }

  updateStatus(id: string, newStatus: boolean) {
    return this.firestoreCollection.doc(id).update({isCompleted:newStatus})
  }
  deleteTask(id: string) {
    return this.firestoreCollection.doc(id).delete();
  }
}
