import { Injectable } from '@angular/core';
import { ConversionDef } from './conversion-def.class';
import { ConverterCategoryDef } from './converter-category-def.class';

@Injectable({
  providedIn: 'root'
})
export class ConversionEngineService {

  // supported conversions
  weightDefs: ConversionDef[] = [
    new ConversionDef('kgs to libs', 'kg', 'libs'),
    new ConversionDef('libs to kgs', 'libs', 'kg')
  ];

  temperatureDefs: ConversionDef[] = [
    new ConversionDef('Celsius to Fahrenheit', '°C', 'F'),
    new ConversionDef('Fahrenheit to Celsius', 'F', '°C')
  ];

  distanceDefs: ConversionDef[] = [
    new ConversionDef('km to miles', 'km', 'ml'),
    new ConversionDef('miles to km', 'ml', 'km'),
    new ConversionDef('meters to foots', 'm', 'ft')
  ];

  converterCategoryDefs: ConverterCategoryDef[] = [
    new ConverterCategoryDef ('Weight', '', this.weightDefs),
    new ConverterCategoryDef ('Temperature', '', this.temperatureDefs),
    new ConverterCategoryDef ('Distance', '', this.distanceDefs),
  ];

  constructor() { }

  getconverterCategoryDefs() {
    return this.converterCategoryDefs;
  }
}
