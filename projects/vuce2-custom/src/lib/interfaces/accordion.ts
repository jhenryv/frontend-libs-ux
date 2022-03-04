import { CardValue } from "../models/card-value";
import { RadioButtonControl } from "../models/radio-button-control";

export interface IAccordion {
  id: number;
  nombre: string;
  descripcion: string;
  cards: CardValue[];
  radiobuttons: RadioButtonControl[];  
}