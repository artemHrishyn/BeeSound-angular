import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/main-block/header/header.component';
import { FooterComponent } from './components/main-block/footer/footer.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@Component({
  selector: 'bsa-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BeeSound-angular';
}
