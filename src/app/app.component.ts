// Main Class
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Html Tag used to embbed Component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Task Tracker';
}
