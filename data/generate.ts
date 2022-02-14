import {
  categories,
  categoryEnumToData,
  brands,
  placeholderTextContent,
  placeholderImage,
  featuredTraits,
  countries,
} from "./predefined";
import {
  selectRandomElementFromArray,
  createArrayOfRandomCountFromSourceArray,
  generateRandomPrice,
  generateRandomRating,
} from "utils/rand";
import { ProductInterface } from "types/data";

export function generateProducts(count: number): ProductInterface[] {
  const productItems: ProductInterface[] = [];

  for (let i = 0; i < count; i++) {
    const category = selectRandomElementFromArray(categories);
    const categoryData = categoryEnumToData[category];

    productItems.push({
      title: selectRandomElementFromArray(categoryData.nameList),
      description: placeholderTextContent,
      imageSrc: placeholderImage as unknown as string,
      category,
      brand: selectRandomElementFromArray(brands),
      rating: generateRandomRating(),
      price: generateRandomPrice(),
      featuredTraits: createArrayOfRandomCountFromSourceArray(featuredTraits),
      fromCountry: selectRandomElementFromArray(countries),
    });
  }

  return productItems;
}
