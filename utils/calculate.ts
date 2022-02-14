import { RatingInterface } from "types/data";

export function generateRatingValue(rating: RatingInterface): number {
  const { count, average } = rating;
  return count * (5 / average);
}
