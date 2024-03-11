import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MatIconRegistry} from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'likedin';
   iconConfigs:{name:string,path:string}[]=[
    {name:'article-icon',path:'assets/images/article.svg'},
    {name:'people-icon',path:'assets/images/people.svg'},
    {name:'play-icon',path:'assets/images/play-button.svg'},
    {name:'job-icon',path:'assets/images/job.svg'},
    {name:'app-icon',path:'assets/images/app.svg'},
    {name:'logo',path:'assets/images/logo.svg'},
    {name:'down-icon',path:'assets/images/down.svg'},
    {name:'welcome-icon',path:'assets/images/welcome.svg'},
    {name:'google-icon',path:'assets/images/google.svg'},
    {name:'up-icon',path:'assets/images/up-icon.svg'},
  ]
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.iconConfigs.forEach(icon => this.registerIcon(icon.name,icon.path))
  }
 private registerIcon(iconName:string, iconPath:string):void{
    this.matIconRegistry.addSvgIcon(iconName,this.domSanitizer.bypassSecurityTrustResourceUrl(iconPath))
  }
}
