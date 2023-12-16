import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConverterCategoryDef } from '../../shared/converter-category-def.class';
import { ConversionEngineService } from '../../shared/conversion-engine.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  converterCategoryDefs!: ConverterCategoryDef[];

  // categories: string[] = ['Temperature', 'Weight', 'Distance', 'Currency'];

  constructor(private conversionEngineService: ConversionEngineService) {}

  ngOnInit(): void {
    this.converterCategoryDefs = this.conversionEngineService.getconverterCategoryDefs()

    this.parentForm
      .get('categoryValue')
      ?.valueChanges.subscribe((value) => {
        console.log(`Category changed: ${value}`);
      });
  }
}
