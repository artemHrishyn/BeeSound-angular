import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoToUrlService } from '../../services/go-to-url.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bsa-login-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Input() isLogin: boolean = false;
  @Output() closeLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() imgLogin: string = '';
  @Output() returnImgLogin: EventEmitter<string> = new EventEmitter<string>();

  public loginData: FormGroup;
  
  constructor(private goToUrlService: GoToUrlService) {
    this.loginData = new FormGroup({
      login: new FormControl("", Validators.required),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8), // Минимальная длина пароля
        Validators.pattern(/[a-z]/), // Хотя бы одна строчная буква
        Validators.pattern(/[A-Z]/), // Хотя бы одна заглавная буква
        Validators.pattern(/[0-9]/), // Хотя бы одна цифра
        Validators.pattern(/[!@#$%^&*()\-=_+[\]{}|\\,.<>/?~]/) // Хотя бы один специальный символ
      ])
    })
  }
  SignOut() {
    this.goToUrlService.goToUrl('');
    this.isLogin = !this.isLogin
    this.closeLogin.emit(this.isLogin);
  }
  
   onSubmit(form: FormGroup) {
     if (form.valid) {
       if (form.value.login == 'admin' && form.value.password == 'adminA1.')
       {
        this.goToUrlService.goToUrl('admin');
         this.imgLogin = 'open';
         this.closeLogin.emit(this.isLogin);
         this.returnImgLogin.emit(this.imgLogin);
       }
       else {
         form.reset();
       }
    }
  }
}
