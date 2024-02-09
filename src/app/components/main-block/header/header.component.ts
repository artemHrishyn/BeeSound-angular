import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bsa-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss',
    './media.scss'
  ]
})
export class HeaderComponent implements OnInit {
  private userOpen: boolean = false;
  public userImg: string = '';

  public menuShow: boolean = true;
  public menu: boolean = false;

  
  ngOnInit() {
    this.menu = window.innerWidth < 1700;
    this.menuShow = ( this.menu == true)? !this.menuShow :  this.menuShow;
  }

  public getImagePath(): string {

    let user: string = '';

    this.userImg = (this.userOpen == false)? 'closed': 'open';
    user = `../../../../assets/images/icon/user-${this.userImg}.png`;
    return user;
  }
  public toggleUserOpen(): void {
    this.userOpen = !this.userOpen;
  }
  
  public showMenu(): void{
    this.menuShow = !this.menuShow;
  }
}
