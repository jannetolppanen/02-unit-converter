import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrl: './category-icon.component.css'
})
export class CategoryIconComponent {
  @Input() parentForm!: FormGroup;
  icon: string;


  constructor() {
    this.icon = 'straighten';
  }

}
