import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string = '';
  isAuth: boolean = false;

  constructor(private message: NzMessageService,
    private authService: AuthService) {}

  ngOnInit(): void {    
    this.isAuth = this.authService.isAuthentication();

    if (this.isAuth) {
      this.authService.getUserInfo().subscribe(data => 
        this.username = data.username);
    }
  }

  logout(): void {
    this.authService.logout();
    this.isAuth = this.authService.isAuthentication();
    this.createMessage('error', 'Вы вышли из аккаунта!')
  }

  createMessage(type: string, text: string): void {
    this.message.create(type, text);
  }
}
