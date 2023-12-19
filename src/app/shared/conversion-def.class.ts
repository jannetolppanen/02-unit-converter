export class ConversionDef {
  constructor(
    public name: string,

    // kerroin
    public coeff: number,
    // preoffset on ennen kertolaskua, post jälkeen, koska fahrenheit ja celsius lasketaan mahdollisimman vaikeasti
    public preOffset: number,
    public postOffset: number,

    public inUnit: string,
    public outUnit: string
  ) {}
}
