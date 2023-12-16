import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionDef } from '../../shared/conversion-def.class';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  
conversionDefs!: ConversionDef[]

  ngOnInit(): void {
    this.parentForm
    .get('categoryValue')
    ?.valueChanges.subscribe((value) => {
      console.log(`Category changed in the converter: ${value}`);
    });
  }

}
