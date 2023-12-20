import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionEngineService } from '../../shared/conversion-engine.service';

@Component({
  selector: 'app-conversion-output',
  templateUrl: './conversion-output.component.html',
  styleUrl: './conversion-output.component.css',
})
export class ConversionOutputComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  conversionOutUnitText = 'Ouput';

  constructor(private conversionEngineService: ConversionEngineService) {}

  ngOnInit(): void {
    // change detection in input
    this.parentForm.get('conversionInput')?.valueChanges.subscribe((value) => {
      if (value === null || value === '') {
        this.parentForm.get('conversionOutput')?.setValue('');
        return;
      }

      let catName = this.parentForm.get('categoryValue')?.value;
      let convName = this.parentForm.get('converterValue')?.value;

      if (convName != '') {
        let outValue = this.conversionEngineService.convertValue(
          catName,
          convName,
          value
        );
        this.parentForm.controls['conversionOutput'].setValue(outValue);
      } else {
        this.parentForm.get('conversionOutput')?.setValue('');
      }
    });
    // converter type change detection
    // tähän voisi tehdä niin, että input ja output molemmat nollaantuu ku converter vaihtuu
    this.parentForm.get('converterValue')?.valueChanges.subscribe((value) => {
      let catName = this.parentForm.get('categoryValue')?.value;
      this.parentForm.get('conversionOutput')?.setValue('');
    });
  }
}
