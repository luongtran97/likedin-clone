import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss'
})
export class DiscoverComponent {
  items:string[]=[
    "E-Comerce Platforms",
    "CRM Software",
    "Human Resources Management System",
    "Recruiting Software",
    "Help Desk Software",
    "Social Networking Software",
    "Desktop Publishing Software",
    "Project Management Software",
    "Sales Intelligence Software"
  ]
}
