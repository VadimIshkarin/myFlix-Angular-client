import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public router: Router,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}
  //
  //
  //Favorite movies
  ngOnInit(): void {}

  //
  //
  goToProfile(): void {
    this.dialog.open(ProfileComponent, {
      width: '500px',
    });
  }
  logOut(): void {
    localStorage.clear();
    this.router.navigate(['welcome']);
  }
}
