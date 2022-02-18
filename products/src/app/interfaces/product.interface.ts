export interface Product {
  ProductId: number;
  ColorIdx: number;
  ProductCode: string;
  ProductDescription: string;
  Price: number;
  VoDatum: null | string;
  IsHeavy: boolean;
  RestrictedLands: null | string;
  IsFsk: boolean;
  IsOrdergruppeC: boolean;
}
