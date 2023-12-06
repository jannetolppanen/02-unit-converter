import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  
  converters: string[] = [
    "Celcius to Fahrenheit",
    "Fahrenheit to Celcius",
  ]

  ngOnInit(): void {
    this.parentForm
    .get('categoryValue')
    ?.valueChanges.subscribe((value) => {
      console.log(`Category changed in the converter: ${value}`);
    });
  }

}
