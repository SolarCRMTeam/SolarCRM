export const valueMap = new Map<number, string>([
    [0, "Rodzaj zlecenia"],
    [1, "Spotkanie"],
    [2, "Wartość umowy"],
    [3, "Wielkość instalacji ilość kWp"],
    [4, "Zaliczka"],
    [5, "Audyt"],
    [6, "Akceptacja projektu"],
    [7, "Montaż"],
    [8, "Wniosek do operatora"],
    [9, "Faktura końcowa"],
    [10, "Rozliczenie końcowe"],
    [11, "Aplikacja"],
  ]);
  
  export const map = (value: number): string => valueMap.get(value) ?? "";