import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { FavoriteComponent } from '../favorite/favorite.component';
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
  goToFavoriteMovies(): void {
    this.dialog.open(FavoriteComponent, {
      width: '700px',
    });
  }
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
