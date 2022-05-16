export const valueMap = new Map<number, string>([
    [0, "Ustalony termin montażu z klientem"],
    [1, "Podzespoły dostarczone do klienta"],
    [2, "Montaż"],
    [3, "Podpisany odbiór montażu przez klienta"],
    [4, "Montaż wstrzymany – względy techniczne"],
    [5, "Montaż wstrzymany – względy formalne"],
    [6, "Rezygnacja klienta"],
  ]);
  
  export const positiveMap = new Map<number, string>([
    [0, "Ustalony termin montażu z klientem"],
    [1, "Podzespoły dostarczone do klienta"],
    [2, "Montaż"],
    [3, "Podpisany odbiór montażu przez klienta"],
  ]);
  
  export const negativeMap = new Map<number, string>([
    [4, "Montaż wstrzymany – względy techniczne"],
    [5, "Montaż wstrzymany – względy formalne"],
    [6, "Rezygnacja klienta"],
  ]);
  
  export const isPositive = (key: number) => {
    return positiveMap.has(key) ? "Tak" : "Nie";
  };
  
  export const map = (value: number): string => valueMap.get(value) ?? "";
  