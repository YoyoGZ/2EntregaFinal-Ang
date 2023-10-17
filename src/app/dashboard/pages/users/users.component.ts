import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userName = '';

  users: User[] = [
    {
      id: 1,
    name:'Martin',
    lastName: 'Solveig',
    email: 'martin@email.com'
    },
    {
      id: 2,
      name: 'Bob',
      lastName: 'Sinclair',
      email: 'BobSinc@email.com'
    },
    {
      id: 3,
      name: 'Armin',
      lastName: 'Van Buren',
      email: 'arminV@email.com'
    }

  ]

  constructor(
    private matDialog: MatDialog
  ) {}

  openUsersDialog(): void {
    this.matDialog
    .open(UsersDialogComponent)
    .afterClosed()
    .subscribe({
      next: (v) =>{
        console.log('VALOR ',v);

        if (!!v) {
          this.users = [
          ... this.users,
          { ...v,
            id: new Date().getTime(),
          },
        ];
      }
     },
    });
  }

  onEditUser (user: User): void {
    this.matDialog.open(UsersDialogComponent, {
      data:user,
    }).afterClosed().subscribe({
      next: (v) => {
        if (!!v) {
          const arrayNuevo = [...this.users];

          const indiceToEdit = arrayNuevo.findIndex((u) => u.id === user.id);
          arrayNuevo[indiceToEdit] = {... arrayNuevo[indiceToEdit], ...v};
          this.users = [...arrayNuevo];
        }
      }
    })
  }

  onDeleteUser(userId: number): void {
    if (confirm('Está seguro de borrar ?')){
      this.users = this.users.filter((u) => u.id !== userId);
    }
  }
}
