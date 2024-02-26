import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../../login-form/login-form.component';
import { GoToUrlService } from '../../../services/go-to-url.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'bsa-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LoginFormComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss',
    './media.scss'
  ]
})
export class HeaderComponent implements OnInit {
  public isLogin: boolean = false;
  public userImg: string = '../../../../assets/images/icon/user-closed.png';

  public menuShow: boolean = true;
  public menu: boolean = false;

  constructor(
    private goToUrlService: GoToUrlService
  ){}
  
  ngOnInit() {
    this.menu = window.innerWidth < 1700;
    this.menuShow = ( this.menu == true)? !this.menuShow :  this.menuShow;
  }

  public getImagePath(): string {

    let user: string = '';

    this.userImg = (this.isLogin == false)? 'closed': 'open';
    user = `../../../../assets/images/icon/user-${this.userImg}.png`;
    return user;
  }
  public toggleUserOpen(): void {
    if(this.userImg !== '../../../../assets/images/icon/user-open.png'){
      this.isLogin = !this.isLogin;
    }
    else{
      this.goToUrl('admin');
    }
  }
  
  public showMenu(): void{
    this.menuShow = !this.menuShow;
  }
  
  public returnLogin() {
    this.isLogin = false;
    this.userImg = `../../../../assets/images/icon/user-closed.png`;
  }
  
  public returnImage(image: string) {
    this.userImg = `../../../../assets/images/icon/user-${image}.png`;
  }
  
  public goToUrl(value: string) {
    this.isLogin = false;
    this.goToUrlService.goToUrl(value);
  }
}
