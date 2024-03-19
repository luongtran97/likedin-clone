import { Component } from '@angular/core';
import { CarouselComponent } from 'app/components/carousel/carousel.component';
import { ColleaguesComponent } from 'app/components/colleagues/colleagues.component';
import { ConnectComponent } from 'app/components/connect/connect.component';
import { DiscoverComponent } from 'app/components/discover/discover.component';
import { PostJobComponent } from 'app/components/post-job/post-job.component';
import { SelectionComponent } from 'app/components/selection/selection.component';
import { WelcomeComponent } from 'app/components/welcome/welcome.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WelcomeComponent,
    SelectionComponent,
    PostJobComponent,
    DiscoverComponent, 
    CarouselComponent,
    ConnectComponent,
    ColleaguesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
