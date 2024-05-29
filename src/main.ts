// [DONE] Zdefiniuj funkcję, która przyjmuje dwie liczcby i sprawdza, która jest większa. (zwykła funkcja nie w obiekcie)
// Zasada:
// Stworzyć typ i wartoś spełniającą ten typ przypisaną do z zmiennej.
//
//
// [DONE] Obiekt z kluczem o typie bool, number, string i typu funkcyjneego.
// [DONE] Obiekt, który ma w sobie obiekt
// [DONE] Obiekt, który ma w środku intersekcję & i unię |
// [DONE] Obiekt posiadający klucz typ tablicowego klucz: tablica jednowymiatowa, kluccz: tablica dwuwymiarowa i trójwymiarowa.
// [DONE] stworzenie dwóch typó typu obiektowego i połączenie ich.
// [?] stworzenie dwóch interfejsów i połączenie ich.
// [DONE] Zdefiniuj funkcję która  przyjmuje funkcję.

//1. Obiekt z kluczem o typie bool, number, string i typu funkcyjneego.
interface Obiektt1 {
  prawoJazdy: boolean;
  wzrost: number;
  imie: string;
  keyFunction: (arg: string) => string;
}

const obiekt1: Obiektt1 = {
  prawoJazdy: true,
  wzrost: 185,
  imie: "Dawid",
  keyFunction: function () {
    return "siema";
  },
  // keyFunction: function (Name: string){
  //   console.log("Hello" + Name)
  // } DLACZEGO TO NIE ZADZIAŁAŁO?
};

// 2. Obiekt, który ma w sobie obiekt
interface ObiektZObiektem {
  mniejszyObiekt: {
    kraj: string;
    wojewodztwo: string;
    miasto: string;
    ludność: number;
    deszcz: boolean;
  };
}

const pogoda: ObiektZObiektem = {
  mniejszyObiekt: {
    kraj: "Polska",
    wojewodztwo: "Śląskie",
    miasto: "Katowice",
    ludność: 302.397,
    deszcz: false,
  },
};
// 3. Obiekt, który ma w środku intersekcję & i unię |
type NajlepszySamolot = "spitfire" | "messerschmitt";
type Tech = {
  śmigło: number;
};
type Kolor = {
  kolor: string;
};
type WyglądZewnętrzny = Tech & Kolor;

interface UniaIntersekcja {
  samolot: NajlepszySamolot;
  Wygląd: WyglądZewnętrzny;
}

const SamolotIIWojna: UniaIntersekcja = {
  samolot: "spitfire",
  Wygląd: {
    śmigło: 1,
    kolor: "zielony",
  },
};

// 4. Obiekt posiadający klucz typ tablicowego klucz: tablica jednowymiatowa, kluccz: tablica dwuwymiarowa i trójwymiarowa.
interface InterTablica {
  jednowymiarowy: number[];
  dwuwymiarowy: number[[]];
  trojwymiarowy: number[[[]]];
}

const obiektTablicowy: InterTablica = {
  jednowymiarowy: [1, 2, 3, 4, 5],
  dwuwymiarowy: [
    [1, 2, 3],
    [4, 5, 6],
  ],
  trojwymiarowy: [1, [2, 2, 2, [99, 99], [98, 98]], [2, 2, 2, [3], [3], [3]]],
};
// 5. Zdefiniuj funkcję, która przyjmuje dwie liczcby i sprawdza, która jest większa. (zwykła funkcja nie w obiekcie)
const przykład = (num1: number, num2: number) => {
  if (num1 === num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else if (num1 > num2) {
    return "równe";
  }
};
// 7. Zdefiniuj funkcję która  przyjmuje funkcję.
const funkcjaZFunkcja = (fun: Function) => {
  return fun.toString();
};
// 8. stworzenie dwóch typó typu obiektowego i połączenie ich.
type Siatkarz = {
  1: string;
  2: string;
  3: string;
};

type NumerKoszulki = {
  1: Number;
  2: Number;
  3: Number;
};

type SkładWyjściowy = {
  1: { nazwisko: Siatkarz[1]; numer: NumerKoszulki[1] };
  2: { nazwisko: Siatkarz[2]; numer: NumerKoszulki[2] };
  3: { nazwosko: Siatkarz[3]; numer: NumerKoszulki[3] };
};

const pzykładowySkład = {
  1: { nazwisko: "Bieniek", numer: 20 },
  2: { nazwisko: "Kurek", numer: 6 },
  3: { nazwisko: "Zatorski", numer: 13 },
};

// 9. stworzenie dwóch interfejsów i połączenie ich.
interface Motocykle {
  Bmw: string;
  Ktm: string;
  Ducati: string;
}

interface Pojemność {
  1: number;
  2: number;
  3: number;
}

interface FullInfoMoto = Motocykle + Pojemność
//===============================================================================================
type ImieNajKolega = "Marek" | "Adam";
interface MyObject {
  key: string;
  imie: "Dawid";
  key2: number;
  key3: boolean;
  key4: (arg1: number, arg2: number) => boolean;
  najlepszyKolega: ImieNajKolega;
}

type DependenceUnion = MyObject["imie"] | MyObject["key3"];
type Union1 = "Dawid" | boolean;

interface ImieKey {
  imie: string;
}

interface AgeKey {
  age: number;
}

type FullInfo = ImieKey & AgeKey;

type FullInfo1 = {
  imie: string;
} & {
  age: number;
};
type FullInfo2 = {
  imie: string;
  age: number;
};

let zmienna4: FullInfo2 = {
  imie: "Dawid",
  age: 25,
};

let zmienna1: Union1 = true;
let zmienna2: Union1 = false;
let zmienna3: Union1 = "Dawid";
