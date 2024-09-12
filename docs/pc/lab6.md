---
id: lab6
title: Lab 6
---

# Laborator 6

## Cuprins

- [Declararea unui sir de caractere](#declararea-unui-sir-de-caractere)
- [Initializarea unui sir de caractere](#initializarea-unui-sir-de-caractere)
- [Citirea unui sir de caractere](#citirea-unui-sir-de-caractere)
- [Afisarea unui sir de caractere](#afisarea-unui-sir-de-caractere)
- [Operatii cu siruri de caractere](#operatii-cu-siruri-de-caractere)
- [String-uri in C++](#string-uri-in-c)
- [Exercitii](#exercitii)

## Declararea unui sir de caractere

Un sir de caractere este o colectie de caractere. Un sir de caractere este reprezentat in memorie ca un vector de caractere.

```cpp
// Declararea unui sir de caractere
char s[100];
```

## Initializarea unui sir de caractere

Un sir de caractere se initializeaza specificand valorile caracterelor.

```cpp
// Initializarea unui sir de caractere
char s[100] = "Hello, World!";
```

## Citirea unui sir de caractere

Un sir de caractere se citeste folosind functia `cin`.

```cpp
// Citirea unui sir de caractere
char s[100];
cin >> s;
```

## Afisarea unui sir de caractere

Un sir de caractere se afiseaza folosind functia `cout`.

```cpp
// Afisarea unui sir de caractere
char s[100] = "Hello, World!";
cout << s;
```

## Operatii cu siruri de caractere

In C++, operatiile cu siruri de caractere sunt realizate folosind functii din biblioteca `cstring`.

### Functii pentru operatii cu siruri de caractere

| Functie                  | Descriere                                                                 |
|--------------------------|---------------------------------------------------------------------------|
| `strlen(char *s)`        | Returneaza lungimea unui sir de caractere                                |
| `strcpy(char *dest, char *src)` | Copiaza un sir de caractere in altul                                |
| `strcat(char *dest, char *src)` | Concateneaza un sir de caractere la altul                             |
| `strcmp(char *s1, char *s2)` | Compara doua siruri de caractere                                    |
| `strchr(char *s, char c)` | Cauta un caracter intr-un sir de caractere                             |
| `strstr(char *s1, char *s2)` | Cauta un sir de caractere intr-un altul                               |

### Exemplu

```cpp
#include <iostream>
#include <cstring>

using namespace std;

int main() {
    char s1[100] = "Hello";
    char s2[100] = "World";

    cout << "Lungimea lui s1: " << strlen(s1) << endl;

    strcpy(s1, s2);
    cout << "s1 dupa copiere: " << s1 << endl;

    strcat(s1, s2);
    cout << "s1 dupa concatenare: " << s1 << endl;

    if (strcmp(s1, s2) == 0) {
        cout << "s1 si s2 sunt egale" << endl;
    } else {
        cout << "s1 si s2 nu sunt egale" << endl;
    }

    char *p = strchr(s1, 'o');
    cout << "Prima aparitie a lui 'o' in s1: " << p - s1 << endl;

    char *q = strstr(s1, "or");
    cout << "Prima aparitie a lui 'or' in s1: " << q - s1 << endl;

    return 0;
}
```

## String-uri in C++

In C++, un string este un obiect care contine un sir de caractere. Un string este reprezentat in memorie ca un obiect de tip `string`.

```cpp
// Declararea unui string
string s = "Hello, World!";
```

### Diferente intre siruri de caractere si string-uri

- Sirurile de caractere sunt reprezentate ca vectori de caractere, in timp ce string-urile sunt reprezentate ca obiecte de tip `string`.
- Sirurile de caractere sunt mai greu de manipulat decat string-urile.
- String-urile ofera mai multe operatii si functionalitati decat sirurile de caractere.

### Citirea si afisarea unui string

Un string se citeste si se afiseaza folosind functiile `cin` si `cout`.

```cpp
// Citirea unui string
string s;
cin >> s;

// Afisarea unui string
cout << s;
```

### Operatii cu string-uri

In C++, operatiile cu string-uri sunt realizate folosind functii din biblioteca `string`.

### Functii pentru operatii cu string-uri

| Functie                  | Descriere                                                                 |
|--------------------------|---------------------------------------------------------------------------|
| `size()`                 | Returneaza lungimea unui string                                          |
| `length()`               | Returneaza lungimea unui string                                          |
| `append(string s)`       | Adauga un string la finalul altui string                                  |
| `compare(string s)`      | Compara doua string-uri                                                  |
| `find(string s)`         | Cauta un string intr-un altul                                            |
| `substr(int pos, int len)` | Returneaza un substring dintr-un string                                  |

### Exemplu

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s1 = "Hello";
    string s2 = "World";

    cout << "Lungimea lui s1: " << s1.size() << endl;

    s1.append(s2);
    cout << "s1 dupa adaugare: " << s1 << endl;

    if (s1.compare(s2) == 0) {
        cout << "s1 si s2 sunt egale" << endl;
    } else {
        cout << "s1 si s2 nu sunt egale" << endl;
    }

    size_t p = s1.find("o");
    cout << "Prima aparitie a lui 'o' in s1: " << p << endl;

    string q = s1.substr(4, 3);
    cout << "Substringul lui s1 de la pozitia 4 cu lungimea 3: " << q << endl;

    return 0;
}
```

## Exerciții

| Nr. |                                                                      Descriere                                                                      |       Input        |           Output           |                                                                                 Explicație                                                                                  |
|:---:|:---------------------------------------------------------------------------------------------------------------------------------------------------:|:------------------:|:--------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 1.  |             **Scrieți un program care primește de la tastatură un șir de caractere și afișează numărul de vocale și consoane din șir.**             |    `programare`    |  `Vocale: 4, Consoane: 6`  |                                              Programul parcurge șirul de caractere și numără câte vocale și consoane conține.                                              |
| 2.  |                  **Scrieți un program care primește de la tastatură un șir de caractere și verifică dacă acesta este palindrom.**                   |      `radar`       |           `true`           |                            Programul verifică dacă șirul citit este palindrom, adică dacă se citește la fel de la stânga la dreapta și invers.                            |
| 3.  |              **Scrieți un program care primește de la tastatură două șiruri de caractere și afișează dacă acestea sunt egale sau nu.**              |   `hello, hello`   |           `true`           |                                   Programul folosește funcția `strcmp` pentru a compara cele două șiruri și a determina dacă sunt egale.                                   |
| 4.  |                                 **Scrieți un program care citește un șir de caractere și afișează șirul inversat.**                                 |      `abcdef`      |          `fedcba`          |                                        Programul parcurge șirul de la sfârșit la început și afișează caracterele în ordine inversă.                                        |
| 5.  | **Scrieți un program care primește de la tastatură un șir de caractere și un caracter, și afișează de câte ori apare caracterul respectiv în șir.** |    `banana, a`     |            `3`             |                                                Programul parcurge șirul și numără de câte ori apare caracterul specificat.                                                 |
| 6.  | **Scrieți un program care primește de la tastatură un șir de caractere și înlocuiește toate aparițiile unui caracter specificat cu un alt caracter.** |   `hello, l, x`    |          `hexxo`           |                        Programul parcurge șirul și înlocuiește toate aparițiile caracterului specificat cu un alt caracter indicat de utilizator.                         |
| 7.  |                                 **Scrieți un program care sortează lexicografic un vector de șiruri de caractere.**                                 | `3, ["banana", "apple", "cherry"]` | `["apple", "banana", "cherry"]` | Programul folosește o metodă de sortare, precum Bubble Sort sau orice altă metodă de sortare, pentru a aranja șirurile de caractere în ordine alfabetică (lexicografică). |
| 8.  |             **Scrieți un program care citește o propoziție și afișează fiecare cuvânt pe o linie nouă, folosind șiruri de caractere.**              |   `Ana are mere`   |    `Ana \n are \n mere`    |                                     Programul parcurge propoziția, detectează spațiile și afișează fiecare cuvânt pe o linie separată.                                     |

