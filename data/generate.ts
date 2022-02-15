import { nanoid } from "nanoid";
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
import { PRODUCT_COUNT } from "config/constants";
import { ProductInterface } from "types/data";

export function generateProducts(count: number): ProductInterface[] {
  const productItems: ProductInterface[] = [];

  for (let i = 0; i < count; i++) {
    const category = selectRandomElementFromArray(categories);
    const categoryData = categoryEnumToData[category];

    productItems.push({
      id: nanoid(),
      title: selectRandomElementFromArray(categoryData.nameList),
      description: "Placeholder product description for product",
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

export const generatedProducts = generateProducts(PRODUCT_COUNT);
