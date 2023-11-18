import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from '../../pages/users/models';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Output()
  toggleSidebar = new EventEmitter();

  public authUser$: Observable<User | null>

  constructor( public authService: AuthService) {
    this.authUser$ = this.authService.authUser$;
  }

  get fullName$(): Observable<string> {
    return this.authUser$.pipe(
      map((user) => `${user?.name} ${user?.lastName}`)
    )
  }
}
