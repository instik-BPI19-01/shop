import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { User } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  public authForm!: FormGroup;
  public regForm!: FormGroup;
  error: boolean = false;

  get authLogin() {
    return this.authForm.get('login')
  }
  get authPassword() {
    return this.authForm.get('password')
  }

  get regLogin() {
    return this.regForm.get('login')
  }
  get regPassword() {
    return this.regForm.get('password')
  }
  get regPasswordConfirmation() {
    return this.regForm.get('passwordConfirmation')
  }

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private message: NzMessageService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.buildForms();
  }

  submitAuth(): void {
    const userData: User = {
      username: this.authLogin?.value,
      password: this.authPassword?.value
    }

    if (this.authForm.valid) {
      this.authForm.reset();

      this.authService.login(userData).subscribe({
        next: data => {
          localStorage.setItem('token', data.token);
          this.createMessage('success', 'Вы вошли в аккаунт!');
          this.router.navigate(['/']);
        },
        error: err => {
          this.createMessage('error', 'Неверный логин или пароль!');
        }        
      })
    }
  }

  submitReg(): void {
    const userData: User = {
      username: this.regLogin?.value,
      password: this.regPassword?.value
    }

    if (this.regForm.valid) {
      this.regForm.reset();

      this.authService.registerNewUser(userData).subscribe({
        next: data => {
          localStorage.setItem('token', data.token);
          this.createMessage('success', 'Регистрация прошла успешно!');
          this.router.navigate(['/']);          
        },
        error: err => {
          this.createMessage('error', 'Ошибка регистрации!');
        }        
      })
    }
    
  }

  buildForms(): void {
    this.authForm = this.formBuilder.group({
      login: ['', [
        Validators.required
      ]],
      password: [null, [
        Validators.required, Validators.minLength(8)
      ]]      
    });

    this.regForm = this.formBuilder.group({
      login: ['', [
        Validators.required
      ]],
      password: [null, [
        Validators.required, Validators.minLength(8)
      ]],
      passwordConfirmation: [null, [
        Validators.required, this.confirmationValidator
      ]]
    });
  }

  confirmationValidator = (control: FormControl): {[key: string]: boolean} => {
    if (!control.value) {
      return {required: true};
    }
    if (control.value !== this.regPassword?.value) {
      return {confirm: true, passwordDontMatch: true};
    }
    return {};
  };

  createMessage(type: string, text: string): void {
    this.message.create(type, text);
  }
}
