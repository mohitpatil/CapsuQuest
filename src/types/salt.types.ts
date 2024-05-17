export interface SaltSuggestions {
  id: number;
  salt: string;
  salt_frequency: number;
  available_forms: string[];
  most_common: SaltDetails;
  salt_forms_json: {
    [form: string]: {
      [strength: string]: {
        [packing: string]: {
          [product_id: string]:
            | Pharmacy[]
            | null;
        };
      };
    };
  };
}

export interface Pharmacy {
  pharmacy_id: number;
  selling_price: number | null;
}


export interface SaltDetails {
  form: string;
  strength: string;
  isAvailable: boolean;
}

export interface Packaging extends SaltDetails {
  quantity: string;
  lowestPrice: number | null;
}
