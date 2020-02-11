import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  async signOut($event: MouseEvent) {
    $event.preventDefault()
    await this.afAuth.auth.signOut()
    this.router.navigate([""])
  }
}
