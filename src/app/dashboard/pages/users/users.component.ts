import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userName = '';
  users$: Observable<User[]>

  constructor(
    private matDialog: MatDialog,
    private userService: UsersService,
  ) {this.users$ = this.userService.getUsers()};
    
  addUser(): void {
    this.matDialog.open(UsersDialogComponent).afterClosed().subscribe({
      next: (v) => {
        if (!!v) {
          this.users$ = this.userService.createUser(v);
        }
      },
    })
  };

  onEditUser (user: User): void {
    this.matDialog.open(UsersDialogComponent, {
      data: user,
    }).afterClosed().subscribe({
      next: (v) => {
        if (!!v) {
          this.users$ = this.userService.updateteUser(user.id, v)
        }
      },
    })
  };

  onDeleteUser(userId: number): void {
    if (confirm('Está seguro de borrar?? ')) {
      this.users$ = this.userService.deleteUser(userId)
    }
  }
}
