# Laborator 3

## Cuprins

- [Declararea unei functii](#declararea-unei-functii)
- [Apelarea unei functii](#apelarea-unei-functii)
- [Valoarea returnata de o functie](#valoarea-returnata-de-o-functie)
- [Parametrii unei functii](#parametrii-unei-functii)
- [Recursivitate](#recursivitate)
- [Reguli pentru functii recursive](#reguli-pentru-functii-recursive)
- [Reguli de vizibilitate a variabilelor](#reguli-de-vizibilitate-a-variabilelor)
- [Exercitii](#exercitii)

## Definirea unei functii

O functie este un bloc de cod care realizeaza o anumita functionalitate. Functiile sunt folosite pentru a imparti codul
in blocuri mai mici si pentru a realiza o anumita functionalitate. O functie este definita prin specificarea tipului de
date al valorii returnate, numele functiei, lista de parametrii si blocul de cod care realizeaza functionalitatea.

```cpp
#include <iostream>

using namespace std;

// Definirea unei functii
int suma(int a, int b) {
    return a + b;
}

int main() {
    int x = 5, y = 10;
    cout << "Suma lui " << x << " si " << y << " este " << suma(x, y) << endl;
    
    return 0;
}
```

## Apelarea unei functii

Apelarea unei functii se realizeaza prin specificarea numelui functiei si a listei de parametrii. Functia este apelata
cu aceasta lista de parametrii si se executa blocul de cod al functiei.

```cpp
// Apelarea functiei 
nume_functie(parametru1, parametru2, ..., parametruN);
```

## Valoarea returnata de o functie

O functie poate returna o valoare de un anumit tip de date. Aceasta valoare este returnata prin instructiunea `return`.
In cazul in care o functie nu returneaza nici o valoare, tipul de date al functiei este `void`.

```cpp
// Definirea unei functii care nu returneaza nici o valoare
void afisare(int x) {
    cout << "Valoarea lui x este " << x << endl;
}

// Apelarea functiei
afisare(10);
```

```cpp
// Definirea unei functii care returneaza o valoare
int suma(int a, int b) {
    return a + b;
}

// Apelarea functiei
int x = 5, y = 10;
int rezultat = suma(x, y); // aici se returneaza o valoare de tip int
cout << "Suma lui " << x << " si " << y << " este " << rezultat << endl;
```

## Parametrii unei functii

Parametrii unei functii sunt valorile care sunt transmise functiei atunci cand aceasta este apelata. Parametrii sunt
specificati in lista de parametrii a functiei si sunt folositi in blocul de cod al functiei.

```cpp

tip_returnat nume_functie(tip_parametru parametru1, tip_parametru parametru2, ..., tip_parametru parametruN) {
    // bloc de cod
}
```

## Recursivitate

Recursivitatea este o proprietate a functiilor care se apeleaza pe sine. O functie recursiva se apeleaza pe sine pana

```cpp
#include <iostream>

using namespace std;

// Definirea unei functii recursive
int factorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int main() {
    int n = 5;
    cout << "Factorialul lui " << n << " este " << factorial(n) << endl;
    
    return 0;
}
```

## Reguli pentru functii recursive

1. O functie recursiva trebuie sa aiba un caz de baza. Acesta este cazul in care recursivitatea se opreste.
2. O functie recursiva trebuie sa aiba un caz de recursivitate. Acesta este cazul in care functia se apeleaza pe sine.

Ce se în cazul în care nu avem un caz de bază?

```cpp
#include <iostream>

using namespace std;

// Definirea unei functii recursive
int factorial(int n) {
    return n * factorial(n - 1);
}

int main() {
    int n = 5;
    cout << "Factorialul lui " << n << " este " << factorial(n) << endl;
    
    return 0;
}
```

## Reguli de vizibilitate a variabilelor

Variabilele declarate in interiorul unei functii sunt vizibile doar in interiorul functiei. Aceste variabile sunt
denumite variabile locale. Variabilele declarate in afara functiilor sunt vizibile in toate functiile din program si sunt
denumite variabile globale.

```cpp
#include <iostream>

using namespace std;

// Variabila globala
int x = 10;

void afisare() {
    // Variabila locala
    int y = 5;
    cout << "Valoarea lui x este " << x << endl;
    cout << "Valoarea lui y este " << y << endl;
}

int main() {
    afisare();
    
    return 0;
}
```
## Exerciții

| Nr. | Descriere | Input | Output | Explicație |
|-----| --------- | ----- | ------ | --------- |
| 1.  | **Să se implementeze o funcție care primește ca parametri trei numere reale `numar_de_impartit`, `impartitor` și `numar_de_impartiri` și returnează rezultatul împărțirii `numar_de_impartit` la `impartitor` de `numar_de_impartiri` ori. Funcția trebuie implementată atât iterativ, cât și recursiv.** | `numar_de_impartit = 100, impartitor = 2, numar_de_impartiri = 3` | `12.5` | Programul trebuie să realizeze succesiv împărțiri ale valorii inițiale de `numar_de_impartit`, împărțind-o de `numar_de_impartiri` ori cu `impartitor`. Se cere implementarea ambelor metode, iterativă și recursivă. |
| 2.  | **Să se scrie o funcție care primește un număr întreg și returnează al `n`-lea termen din șirul Fibonacci. Funcția trebuie implementată atât iterativ, cât și recursiv.** | `n = 7` | `13` | Șirul Fibonacci este o secvență unde fiecare număr este suma celor două numere precedente. Trebuie să se calculeze termenul `n` din acest șir, folosind atât o abordare iterativă cât și una recursivă. |
| 3.  | **Să se implementeze o funcție care verifică dacă un număr este palindrom folosind recursivitatea.** | `121` | `true` | Funcția trebuie să verifice dacă un număr este palindrom prin compararea cifrelor sale, lucrând recursiv de la marginile numărului spre centru. |
| 4.  | **Să se implementeze o funcție recursivă care determină cel mai mare divizor comun (CMMDC) al două numere.** | `a = 48, b = 18` | `6` | Funcția trebuie să calculeze CMMDC-ul a două numere utilizând algoritmul lui Euclid, care se pretează bine la o implementare recursivă. |
| 5.  | **Să se scrie o funcție recursivă care generează toate combinațiile de `k` elemente dintr-un șir de `n` elemente.** | `n = 5, k = 3` | `[1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 3, 4], ...` | Programul trebuie să genereze toate combinațiile posibile de `k` elemente dintr-un set de `n` elemente, utilizând recursivitatea pentru a construi fiecare combinație. |
