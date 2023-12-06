import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-converter-ui',
  templateUrl: './converter-ui.component.html',
  styleUrl: './converter-ui.component.css',
})
export class ConverterUiComponent implements OnInit {
  // ! on häx
  parentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm = this.fb.group({
      categoryValue: new FormControl(),
      converterValue: new FormControl(),
    });
  }
  onSubmit() {
    console.log(`Submit : ${JSON.stringify(this.parentForm.value)}`);
  }
}