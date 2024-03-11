import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.scss'
})
export class SelectionComponent {
  showMore: boolean
  showCount:number = 11
  items:string[] =[
    "Engineering",
    "Business Development",
    "Healthcare",
    "Finance",
    "Adminstrative Assistant",
    "Retail Associate",
    "Customer Service",
    "Operation",
    "Infomation Technology",
    "Marketing",
    "Human Resources",
    "Healthcare Service",
    "Sales",
    "Program and Project Management",
    "Accounting",
    "Arts and Desgin",
    "Comunity and Social Services",
    "Consulting",
    "Education",
    "Entrepreneurship",
    "Legal",
    "Media Comunications",
    "Military and Protective Services",
    "Product Management",
    "Purchasing",
    "Quality Assurance",
    "Real Estate",
    "Rearch",
    "Support",
    "Adminitrative"
  ]
  constructor(){
    this.showMore = true
  }

  toggleShowMore(){
    this.showMore =!this.showMore
  }
}
