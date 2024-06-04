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
//
// Notatka:
// Void => czyl i funkcja nic nie będzie zwracać
// type boolean | type null | type number | type string
// TYPE BIGINT =>
// TYPE ANY => zezwól na dowolny typ
// TYPE UNKNOWN => ensure someone using this type declares what the type is
// TYPE NEVER => funkcja zwraca undefined albo nic nie zwraca
// Generics czy się uzywa, jak i do czego? bo jest wpisane zaraz okok Unii zamiast np           Intersekcji na głównej stronie.
// Structural Type System => to samo pytanie XD

//1. Obiekt z kluczem o typie bool, number, string i typu funkcyjneego.
interface Obiektt1 {
  prawoJazdy: boolean;
  wzrost: number;
  imie: string;
  keyFunction: (arg: string) => void;
}

const obiekt1: Obiektt1 = {
  prawoJazdy: true,
  wzrost: 185,
  imie: "Dawid",
  // keyFunction: function () {
  //   return "siema";
  // },

  keyFunction: function (Name: string) {
    console.log("Hello" + Name);
  },
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
interface Tech {
  śmigło: number;
}
interface Kolor {
  kolor: string;
}
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

type WyglądZewnętrzny1 = Tech | Kolor;
let zmienna122: WyglądZewnętrzny1 = { śmigło: 1 };
let zmienna21: WyglądZewnętrzny1 = { kolor: "zielony" };

// 4. Obiekt posiadający klucz typ tablicowego klucz: tablica jednowymiatowa, kluccz: tablica dwuwymiarowa i trójwymiarowa.
interface InterTablica {
  jednowymiarowy: number[];
  dwuwymiarowy: number[][];
  trojwymiarowy: number[][][] | number[][] | number[];
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
const przykład = (num1: number, num2: number): number | null => {
  if (num1 === num2) {
    return 0;
  } else if (num1 < num2) {
    return num2;
  } else if (num1 > num2) {
    return num1;
  }
  return null;
};

// 7. Zdefiniuj funkcję która  przyjmuje funkcję.
type Funkcja7 = (fun: Function) => void;

const funkcjaZFunkcja: Funkcja7 = (przykład: Function) => {
  przykład.toString();
};

function zwykła(arg: number, arg2: number): string {
  return "Siema";
}

const pzrypomnienie1 = function () {};
let strzałka = () => {};

const fun111 = function (
  przyjmowanaFunkcja: (arg: number, arg2: number) => string
) {
  console.log(przyjmowanaFunkcja(1, 2));
};

fun111(zwykła);

fun111(function (arg1: number, arg2: number): string {
  return "siema";
});
fun111((arg1: number, arg2: number) => "siema");

// 8. stworzenie dwóch typó typu obiektowego i połączenie ich.
interface Siatkarz {
  1: string;
  2: string;
  3: string;
}

interface NumerKoszulki {
  1: Number;
  2: Number;
  3: Number;
}

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

type Razem = Motocykle & Pojemność & { uniklany: string };

interface Nowy extends Motocykle, Pojemność {
  unikalny: string;
}

type Razem2 = (Motocykle & Pojemność) | { uniklany: string };

interface User {
  id: number;
  name: string;
  pasword: string;
}

type UserKeys = keyof User; // Wyciąga wszystkie klucze jak Object.keys tylko dla interfejsów i typów
type SaveUser = Omit<User, "pasword">; // wywalamy pojedynczy klucz
type EmptyUser = Omit<User, UserKeys>; // wywalamy wszystkie klucze

// Pytania:
// Programowanie obiektowe? czym jest
// interface User {
//   name: string;
//   id: number;
// }

// class UserAccount {
//   name: string;
//   id: number;

//   constructor(name: string, id: number) {
//     this.name = name;
//     this.id = id;
//   }
// }

// const user: User = new UserAccount("Murphy", 1);
// Try
// You can use interfaces to annotate parameters and return values to functions:

// function deleteUser(user: User) {
//   // ...
// }

// function getAdminUser(): User { <===== co to za funkcja?
//   //...
// }

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

// Zadanie domowe stworzyć funkcje, która przyjmuje obiekt User i zwraca Obiekt, który jest typu User bez klucza ID ale z kluczem Surname i Birthday
interface UserZadDom {
  Name: string;
  Id: number;
}

const userZadDom2: UserZadDom = {
  Name: "Dawid",
  Id: 1,
};
type DeleteID = Omit<UserZadDom, "Id">;
type NowyUserDom = DeleteID & { Surname: string; Birthday: string };

const funkcjaDom = function (arg: UserZadDom): NowyUserDom {
  let { Id, ...rest } = arg;
  return { ...rest, Surname: "Rogalski", Birthday: "15.08.1998" };
};

//
// Stworzyć funkcje, która przyjmuje obiekt Samochód lub User i (oba typy powinny mieć klucz type i ma on być typu "person" albo "car")
// zwróć z funkcji "string" jezeli typ będzie albo car albo person to zwróć "to jest person" albo "to jest car" a w innym przypadku zwróć null

interface Car {
  type: "car";
}
const Samochód: Car = {
  type: "car",
};

interface Person {
  type: "person";
}

const osoba: Person = {
  type: "person",
};

const toJest = (arg: Person | Car | null): string | null => {
  if (arg.type === "car") {
    return "To jest samochód";
  } else if (arg.type === "person") {
    return "To jest osoba";
  } else {
    return null;
  }
};
console.log(toJest(osoba));
console.log(toJest(Samochód));
console.log(toJest("samochód"));

// * funkcja, która przyjmuje dwie funkcje. kazda z tych funkcji prrzyjmuje jeden argument typu number i zwraca typ unmber.
// * Główna funkcja ma dodawać wyniki wywołania obu funkcji. pierwsza funkcja mnozy to co dostaje przez 10 a druga dziali to co distaje przez 10.
const funRazy10 = (arg: number): Number => {
  let sum: Number = 0;
  sum = arg * 10;
  return sum;
};
console.log(funRazy10(5));
const funPrzez10 = (arg: number): Number => {
  let sum: Number = 0;
  sum = arg / 10;
  return sum;
};
console.log(funPrzez10(5));

const addFunctions = (
  fun1: Function,
  fun2: Function,
  arg1: Number,
  arg2: Number
): Number => {
  let sum: Number = 0;
  sum = fun1(arg1) + fun2(arg2);
  return sum;
};

// ** Zdefiniuj funkcje, która przyjmuje funkcje, która przyjmuje obiekt User oraz zwraca obiekt Usera z dodatkowym kluczem dynamicKey: "SIEMA"
interface User7 {
  imie: string;
  nazwisko: string;
  id: number;
}
const userSara: User7 = {
  imie: "Sara",
  nazwisko: "Dakhil",
  id: 1,
};
interface NewUser7 extends User7 {
  dynamicKey: "siema";
}

const kluczDynamiczny = "dynamicKey";
const fun7 = (userSara: User7): NewUser7 => {
  const { ...rest } = userSara;
  const newUserSara: NewUser7 = { ...rest, [kluczDynamiczny]: "siema" };
  return newUserSara;
};

const funkcjaPrzyjmujFunkcje2 = (fun:NewUser7): void{

}

// + dokończyć grę.
