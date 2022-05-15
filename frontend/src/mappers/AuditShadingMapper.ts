export const valueMap = new Map<number, string>([
    [0, "Dachu nie zasłaniają żadne obiekty"],
    [1, "Dach zasłaniają obiekty - zależne od pory dnia/roku"],
  ]);
  
  export const map = (value: number): string => valueMap.get(value) ?? "";