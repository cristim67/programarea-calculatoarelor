---
id: lab9
title: Lab 9
---

# Laborator 9

## Cuprins

- [Fisiere](#fisiere)
- [Citirea dintr-un fisier](#citirea-dintr-un-fisier)
- [Scrierea intr-un fisier](#scrierea-intr-un-fisier)
- [Exercitii](#exercitii)

## Fisiere

Un fisier este o colectie de date stocata pe un suport de stocare. Fisierele sunt folosite pentru a salva date pe disc si pentru a le recupera ulterior.

### Tipuri de fisiere

In functie de modul de stocare, fisierele pot fi de doua tipuri:

- **Fisiere text** - fisiere care contin date text. Aceste fisiere pot fi deschise si modificate cu un editor de text.
- **Fisiere binare** - fisiere care contin date binare. Aceste fisiere nu pot fi deschise si modificate cu un editor de text.

### Operatii cu fisiere

Operatiile cu fisiere sunt realizate folosind obiecte de tipul `std::ifstream` pentru citire si `std::ofstream` pentru scriere.

### Declararea unui fisier

Un fisier se declara specificand numele fisierului si modul de deschidere.

```cpp
#include <fstream>

std::ifstream fin("input.txt");
std::ofstream fout("output.txt");
```

### Deschiderea unui fisier

Un fisier se deschide specificand numele fisierului si modul de deschidere.

```cpp
#include <fstream>

std::ifstream fin("input.txt");
std::ofstream fout("output.txt");
```

### Inchiderea unui fisier

Un fisier se inchide folosind metoda `close`.

```cpp
fin.close();
fout.close();
```

## Citirea dintr-un fisier

Pentru a citi date dintr-un fisier, se foloseste metoda `>>` pentru citirea datelor.

```cpp
#include <fstream>
#include <iostream>

int main() {
    std::ifstream fin("input.txt");

    int x;
    fin >> x;

    std::cout << "Am citit valoarea " << x << " din fisier" << std::endl;

    fin.close();

    return 0;
}
```

## Scrierea intr-un fisier

Pentru a scrie date intr-un fisier, se foloseste metoda `<<` pentru scrierea datelor.

```cpp

#include <fstream>

int main() {
    std::ofstream fout("output.txt");

    int x = 10;
    fout << "Valoarea lui x este " << x << std::endl;

    fout.close();

    return 0;
}
```

## Exerciții

| Nr. | Descriere                                                                                                                                        | Input                          | Output                       | Explicație                                                                                                                                                             |
|-----|--------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.  | **Scrieți un program care citește un număr întreg dintr-un fișier text și îl afișează pe ecran.**                                                 | `input.txt` (conține `42`)     | `42`                         | Utilizați `std::ifstream` pentru a deschide fișierul, citiți valoarea și afișați-o pe ecran.                                                                            |
| 2.  | **Scrieți un program care citește mai multe numere întregi dintr-un fișier și calculează suma lor.**                                              | `input.txt` (conține `1 2 3`)  | `6`                          | Deschideți fișierul, citiți numerele pe rând folosind `>>`, adăugați-le și afișați rezultatul.                                                                          |
| 3.  | **Scrieți un program care scrie în fișierul `output.txt` toate numerele pare dintr-un vector.**                                                   | `[1, 2, 3, 4, 5]`              | `output.txt` (conține `2 4`) | Parcurgeți vectorul, verificați fiecare element dacă este par, iar dacă da, scrieți-l în fișier folosind `<<`.                                                         |
| 4.  | **Scrieți un program care citește o propoziție dintr-un fișier și numără câte cuvinte conține.**                                                  | `input.txt` (conține `Salut!`) | `1`                          | Căutați spațiile din propoziție pentru a determina câte cuvinte sunt, apoi afișați numărul.                                                                            |
| 5.  | **Scrieți un program care copiază conținutul unui fișier text în alt fișier.**                                                                    | `input.txt` (conține `Hello`)  | `output.txt` (`Hello`)       | Deschideți fișierul sursă și destinație, citiți conținutul din sursă și scrieți-l în destinație.                                                                       |
| 6.  | **Scrieți un program care sortează conținutul unui fișier text (numere întregi) și salvează rezultatul într-un alt fișier.**               | `input.txt` (`4 2 3 1`)        | `output.txt` (`1 2 3 4`)     | Căutați să citiți numerele, sortați-le și apoi scrieți rezultatul sortat în fișierul de ieșire.                                                                        |
| 7.  | **Scrieți un program care găsește și înlocuiește toate aparițiile unui cuvânt dintr-un fișier text cu alt cuvânt, și salvează rezultatul.** | `input.txt` (`cuvant`)         | `output.txt` (`altcuvant`)   | Citiți fișierul linie cu linie, înlocuiți cuvântul specificat și scrieți rezultatul într-un alt fișier.                                                               |
| 8.  | **Scrieți un program care citește un fișier binar și afișează conținutul său sub formă de valori hexazecimale.**                        | `input.bin`                    | `Output (hex)`               | Folosiți `std::ifstream` în modul binar pentru a citi fișierul și afișați fiecare byte ca o valoare hexazecimală.                                                      |
