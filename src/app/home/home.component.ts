import { Component } from '@angular/core';
import { SelectionComponent } from 'app/components/selection/selection.component';
import { WelcomeComponent } from 'app/components/welcome/welcome.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent,SelectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
