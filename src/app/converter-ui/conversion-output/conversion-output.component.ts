import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionEngineService } from '../../shared/conversion-engine.service';

@Component({
  selector: 'app-conversion-output',
  templateUrl: './conversion-output.component.html',
  styleUrl: './conversion-output.component.css'
})
export class ConversionOutputComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  conversionOutUnitText = 'Ouput';

  constructor(private conversionEngineService: ConversionEngineService) {}

  ngOnInit(): void {
    // change detection in input
    this.parentForm.get('conversionInput')?.valueChanges.subscribe((value) => {
      this.parentForm.controls['conversionOutput'].setValue(value);
    
  })

}}
