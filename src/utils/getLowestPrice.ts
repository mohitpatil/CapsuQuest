import { Pharmacy } from "../types/salt.types";

type Pharmacies = Record<string, Pharmacy[] | null>;

const getLowestPrice = (pharmacies: Pharmacies): number | null => {
  if (!pharmacies) return null;
  
  const minPrice = Object.values(pharmacies).reduce((min, pharmacyArray) => {
    const minPriceInArray = pharmacyArray?.reduce((minInArray, pharmacy) => {
      return pharmacy.selling_price !== null && pharmacy.selling_price < minInArray ? pharmacy.selling_price : minInArray;
    }, Infinity);
    return minPriceInArray !== undefined && minPriceInArray < min ? minPriceInArray : min;
  }, Infinity);

  return minPrice === Infinity ? null : minPrice;
}

export default getLowestPrice;