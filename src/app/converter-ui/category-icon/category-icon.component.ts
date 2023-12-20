import { Component } from '@angular/core';

@Component({
  selector: 'app-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrl: './category-icon.component.css'
})
export class CategoryIconComponent {
  icon: string;

  constructor() {
    this.icon = 'straighten';
  }

}
