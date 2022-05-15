export const valueMap = new Map<number, string>([
    [0, "Audyt"],
    [1, "Uzupełnij audyt"],
  ]);
  
  export const map = (value: number): string => valueMap.get(value) ?? "";