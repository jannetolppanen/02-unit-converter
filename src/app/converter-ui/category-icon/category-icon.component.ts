import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionEngineService } from '../../shared/conversion-engine.service';

@Component({
  selector: 'app-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrl: './category-icon.component.css'
})
export class CategoryIconComponent {
  @Input() parentForm!: FormGroup;
  icon: string;


  constructor(private conversionEngineService: ConversionEngineService) {
    this.icon = 'scale';
  }

  ngOnInit(): void {
    this.parentForm.get('categoryValue')?.valueChanges.subscribe((value) => {
      this.icon = this.conversionEngineService.findIconName(value);
    });
  }


  // Tämä purkkaviritys toimii myös, jätetään jälkipolvien ihasteltavaksi
  // ngOnInit(): void {
  //   this.parentForm.get('categoryValue')?.valueChanges.subscribe((value) => {
  //     switch (value) {
  //       case 'Weight':
  //         this.icon = 'scale';
  //         break;
  //       case 'Temperature':
  //         this.icon = 'device_thermostat';
  //         break;
  //       case 'Currency':
  //         this.icon = 'payments';
  //         break;
  //       case 'Distance':
  //         this.icon = 'straighten';
  //         break;
  //       default:
  //         this.icon = 'scale';
  //         break;
  //     }
  //   });
  // }

}
