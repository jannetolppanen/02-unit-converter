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
  ngOnInit(): void {
    this.parentForm.get('categoryValue')?.valueChanges.subscribe((value) => {
      switch (value) {
        case 'Weight':
          this.icon = 'scale';
          break;
        case 'Temperature':
          this.icon = 'device_thermostat';
          break;
        case 'Currency':
          this.icon = 'payments';
          break;
        case 'Distance':
          this.icon = 'straighten';
          break;
        default:
          this.icon = 'scale';
          break;
      }
    });
  }

}
