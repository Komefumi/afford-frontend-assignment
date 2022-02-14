import {
  MAX_PRICE,
  MAX_RATING_COUNT,
  MIN_RATING_COUNT,
} from "config/constants";
import { MightOrMightNotExist } from "types/alias";
import { RatingInterface } from "types/data";

function getRandomTrueOrFalse(): boolean {
  const integerToCheckWith = parseInt(`${Math.random() * 10}`);
  return !!(integerToCheckWith % 2);
}

function throwIfArrayIsTooSmall<T>(itemArray: T[]) {
  const arrayLength = itemArray.length;
  if (arrayLength < 2) {
    throw new Error(
      "Error! It's meaningless to choose a random element from an array that doesn't have at least two elements."
    );
  }
}

export function createArrayOfRandomCountFromSourceArray<T>(
  itemArray: T[]
): T[] {
  throwIfArrayIsTooSmall(itemArray);
  const arrayLength = itemArray.length;
  const randomSize = Math.floor(Math.random() * arrayLength);
  const createdArray: T[] = [];

  for (let i = 0; i < randomSize; i++) {
    createdArray.push(itemArray[Math.floor(Math.random() * arrayLength)]);
  }
  return createdArray;
}

export function selectRandomElementFromArray<T>(itemArray: T[]): T {
  throwIfArrayIsTooSmall(itemArray);
  return itemArray[Math.floor(Math.random() * itemArray.length)];
}

export function maybeSelectRandomElementFromArray<T>(
  itemArray: T[]
): MightOrMightNotExist<T> {
  const itShouldBeGenerated = getRandomTrueOrFalse();
  if (itShouldBeGenerated) return selectRandomElementFromArray(itemArray);
  else return undefined;
}

export function generateRandomPrice(): number {
  return Math.floor(Math.random() * (MAX_PRICE + 1));
}

export function createRandomPrependsAddedList(
  prependList: string[],
  mainList: string[]
): string[] {
  return mainList.map(
    (itemName) => `${selectRandomElementFromArray(prependList)} ${itemName}`
  );
}

export function generateRandomRating(): RatingInterface {
  const maxRatingCountBesidesMinimum = MAX_RATING_COUNT - MIN_RATING_COUNT;
  return {
    average: (Math.floor(Math.random() * (10 + 1)) * 5) / 10,
    count:
      MIN_RATING_COUNT +
      Math.floor(Math.random() * (maxRatingCountBesidesMinimum + 1)),
  };
}
