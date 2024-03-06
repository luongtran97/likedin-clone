import {  HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 private iconConfigs:{name:string,path:string}[]=[
    {name:'article-icon',path:'assets/images/article.svg'},
    {name:'people-icon',path:'assets/images/people.svg'},
    {name:'play-icon',path:'assets/images/play-button.svg'},
    {name:'job-icon',path:'assets/images/job.svg'},
    {name:'app-icon',path:'assets/images/app.svg'},
  ]
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.iconConfigs.forEach(icon => this.registerIcon(icon.name,icon.path))
  }
 private registerIcon(iconName:string, iconPath:string):void{
    this.matIconRegistry.addSvgIcon(iconName,this.domSanitizer.bypassSecurityTrustResourceUrl(iconPath))
  }
}
