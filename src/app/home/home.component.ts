import { Component } from '@angular/core';
import { PostJobComponent } from 'app/components/post-job/post-job.component';
import { SelectionComponent } from 'app/components/selection/selection.component';
import { WelcomeComponent } from 'app/components/welcome/welcome.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent,SelectionComponent,PostJobComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
