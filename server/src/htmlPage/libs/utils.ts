import Work from "models/work";

export function totalCount(works: Work[]) {
  const sum = works.reduce(
    (acc, item) => +(acc + item.dataValues.priceWork).toFixed(2),
    0,
  );
  return sum;
}

export function createDate(date: Date) {
  return `${date.getUTCDay().toString().padStart(2, "0")}.${date
    .getUTCMonth()
    .toString()
    .padStart(2, "0")}.${date.getUTCFullYear()}`;
}

export function upperFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
