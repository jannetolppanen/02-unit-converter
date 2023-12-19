import { Injectable } from '@angular/core';
import { ConversionDef } from './conversion-def.class';
import { ConverterCategoryDef } from './converter-category-def.class';

@Injectable({
  providedIn: 'root',
})
export class ConversionEngineService {
  // supported conversions
  weightDefs: ConversionDef[] = [
    new ConversionDef('kgs to libs', 2.20462262, 0, 0, 'kg', 'libs'),
    new ConversionDef('libs to kgs', 1/2.20462262, 0, 0, 'libs', 'kg'),
  ];

  temperatureDefs: ConversionDef[] = [
    new ConversionDef('Celsius to Fahrenheit', 9/5, 0, 32, '°C', 'F'),
    new ConversionDef('Fahrenheit to Celsius', 5/9, -32, 0, 'F', '°C'),
  ];

  distanceDefs: ConversionDef[] = [
    new ConversionDef('km to miles', 1/1.609344, 0, 0, 'km', 'ml'),
    new ConversionDef('miles to km', 1.609344, 0, 0, 'ml', 'km'),
    new ConversionDef('meters to feet', 3.2808399, 0, 0, 'm', 'ft'),
  ];

  currencyDefs: ConversionDef[] = [
    new ConversionDef('€ to $', 1.08, 0, 0, '€', '$'),
    new ConversionDef('$ to €', 1/1.08, 0, 0, '$', '€'),
  ];

  converterCategoryDefs: ConverterCategoryDef[] = [
    new ConverterCategoryDef('Weight', '', this.weightDefs),
    new ConverterCategoryDef('Temperature', '', this.temperatureDefs),
    new ConverterCategoryDef('Currency', '', this.currencyDefs,),
    new ConverterCategoryDef('Distance', '', this.distanceDefs),
  ];

  constructor() {}

  getconverterCategoryDefs() {
    return this.converterCategoryDefs;
  }

  findCategoryIndex(name: string) {
    for (let i = 0; this.converterCategoryDefs.length; i++) {
      if (name === this.converterCategoryDefs[i].name) return i;
    }
    console.log('Category not found');
    return -1;
  }
  findConversionIndex(catName: string, convName: string): number {
    if (catName == '') return -1;

    let catIdx = this.findCategoryIndex(catName);

    if (catIdx === -1) return -1;

    let conversionDefs = this.converterCategoryDefs[catIdx].conversions;

    for (let i = 0; i < conversionDefs.length; i++) {
      if (convName === conversionDefs[i].name) return i;
    }
    console.log('Conversion not found');
    return -1;
  }
  getConversionDefs(catName: string): ConversionDef[] {
    let idx = this.findCategoryIndex(catName);
    return this.converterCategoryDefs[idx].conversions;
  }
  getCurrentConversionDef(catName: string, convName: string): ConversionDef|null {
    let catIdx = this.findCategoryIndex(catName);
    let convIdx = this.findConversionIndex(catName, convName);
    if(catIdx >= 0 && convIdx >= 0) {
      console.log("getCurrentConversionDef: category and conversion found")
      return this.converterCategoryDefs[catIdx].conversions[convIdx];
    }
    console.log("getCurrentConversionDef: category or conversion not found")
    return null
    
  }
}
