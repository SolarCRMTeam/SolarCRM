export const valueMap = new Map<number, string>([
  [0, "Przygotowanie oferty"],
  [1, "Podpisanie umowy"],
  [2, "Rezygnacja"],
  [3, "Ponowne spotkanie"],
  [4, "Fałszywe dane"],
  [5, "Przesunięcie spotkania"],
  [6, "Określony termin spotkania"],
]);

export const positiveMap = new Map<number, string>([
  [0, "Przygotowanie oferty"],
  [1, "Podpisanie umowy"],
  [3, "Ponowne spotkanie"],
]);

export const negativeMap = new Map<number, string>([
  [2, "Rezygnacja"],
  [4, "Fałszywe dane"],
  [5, "Przesunięcie spotkania"],
  [6, "Określony termin spotkania"],
]);

export const isPositive = (key: number) => {
  return positiveMap.has(key) ? "Tak" : "Nie";
};

export const map = (value: number): string => valueMap.get(value) ?? "";
