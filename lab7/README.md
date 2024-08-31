# Laborator 7 - Sandard Template Library (STL)

## Cuprins

- [STL](#stl)
- [Vector](#vector)
- [Pair](#pair)
- [Set](#set)
- [Map](#map)
- [Tuple](#tuple)
- [Exerciții](#exerciții)

## STL

Standard Template Library (STL) este o bibliotecă de șabloane de clase și funcții care oferă implementări eficiente pentru o serie de structuri de date și algoritmi.

STL este împărțit în trei componente principale:

1. **Algoritmi**: Funcții care efectuează operații pe structuri de date.
2. **Containtere**: Structuri de date care stochează elemente.
3. **Iteratori**: Obiecte care permit parcurgerea elementelor dintr-un container.

## Vector

`std::vector` este un container din STL care stochează elemente într-un mod secvențial. Vectorul este un array dinamic care poate crește sau scădea în dimensiune pe măsură ce elemente sunt adăugate sau eliminate.

### Declararea unui vector

Un vector se declară specificând tipul de date al elementelor pe care le va stoca.

```cpp
#include <vector>

std::vector<int> v;
```

### Adăugarea unui element în vector

Un element poate fi adăugat la finalul unui vector folosind metoda `push_back`.

```cpp
v.push_back(10);
```

### Accesarea elementelor unui vector

Elementele unui vector pot fi accesate folosind operatorul de indexare `[]`.

```cpp
std::cout << v[0]; // Afiseaza primul element al vectorului
```

### Parcurgerea elementelor unui vector

Un vector se poate parcurge folosind un iterator sau un index.

```cpp
for (int i = 0; i < v.size(); i++) {
    std::cout << v[i] << " ";
}
```

## Pair

`std::pair` este un container din STL care stochează o pereche de elemente. Aceste perechi sunt utile atunci când dorim să returnăm două valori dintr-o funcție sau să stocăm două valori împreună.

### Declararea unui pair

Un pair se declară specificând tipurile de date ale celor două elemente.

```cpp
#include <utility>

std::pair<int, int> p;
```

### Inițializarea unui pair

Un pair se poate inițializa cu două valori.

```cpp
std::pair<int, int> p = std::make_pair(1, 2);
```

### Accesarea elementelor unui pair

Elementele unui pair pot fi accesate folosind metodele `first` și `second`.

```cpp
std::cout << p.first; // Afiseaza primul element al pair-ului
std::cout << p.second; // Afiseaza al doilea element al pair-ului
```

## Set

`std::set` este un container din STL care stochează elemente unice într-o ordine sortată.

### Declararea unui set

Un set se declară specificând tipul de date al elementelor pe care le va stoca.

```cpp

#include <set>

std::set<int> s;
```

### Adăugarea unui element în set

Un element poate fi adăugat într-un set folosind metoda `insert`.

```cpp
s.insert(10);
```

### Parcurgerea elementelor unui set

Un set se poate parcurge folosind un iterator.

```cpp
for (auto it = s.begin(); it != s.end(); it++) {
    std::cout << *it << " ";
}
```

## Map

`std::map` este un container din STL care stochează perechi de cheie-valoare într-o ordine sortată după cheie.

### Declararea unui map

Un map se declară specificând tipurile de date ale cheii și valorii.

```cpp
#include <map>

std::map<int, std::string> m;
```

### Adăugarea unui element în map

Un element poate fi adăugat într-un map folosind metoda `insert`.

```cpp
m.insert(std::make_pair(1, "One"));
```

### Accesarea elementelor unui map

Elementele unui map pot fi accesate folosind cheia.

```cpp
std::cout << m[1]; // Afiseaza valoarea asociata cheii 1
```

### Parcurgerea elementelor unui map

Un map se poate parcurge folosind un iterator.

```cpp

for (auto it = m.begin(); it != m.end(); it++) {
    std::cout << it->first << " " << it->second << std::endl;
}
```

## Tuple

`std::tuple` este un container din STL care stochează o secvență de elemente de tipuri diferite.

### Declararea unui tuple

Un tuple se declară specificând tipurile de date ale elementelor.

```cpp
#include <tuple>

std::tuple<int, double, std::string> t;
```

### Inițializarea unui tuple

Un tuple se poate inițializa cu valori.

```cpp
std::tuple<int, double, std::string> t(1, 3.14, "Hello");
```

### Accesarea elementelor unui tuple

Elementele unui tuple pot fi accesate folosind metoda `std::get`.

```cpp
std::cout << std::get<0>(t); // Afiseaza primul element al tuple-ului
std::cout << std::get<1>(t); // Afiseaza al doilea element al tuple-ului
std::cout << std::get<2>(t); // Afiseaza al treilea element al tuple-ului
```

## Exerciții

| Nr. | Descriere                                                                                                                                                | Input                                  | Output                                   | Explicație                                                                                                                                                                      |
|-----|----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.  | **Scrieți un program care citește n numere întregi și le stochează într-un `std::vector`, apoi afișează vectorul ordonat crescător.**                    | `5, [3, 1, 4, 1, 5]`                   | `[1, 1, 3, 4, 5]`                        | Programul folosește funcția `sort` din STL pentru a ordona elementele vectorului.                                                                                               |
| 2.  | **Scrieți un program care citește o listă de perechi (int, int) și le afișează în ordinea primului element al perechii.**                                | `[(2,3), (1,2), (4,1)]`                | `[(1,2), (2,3), (4,1)]`                  | Programul folosește `std::pair` și `sort` pentru a ordona perechile după primul element.                                                                                       |
| 3.  | **Scrieți un program care citește n numere întregi și le stochează într-un `std::set`, apoi afișează elementele unice și sortate.**                      | `5, [4, 5, 1, 4, 3]`                   | `[1, 3, 4, 5]`                           | Programul folosește un `std::set` pentru a stoca doar elementele unice și sortate automat.                                                                                     |
| 4.  | **Scrieți un program care citește un șir de perechi (int, string) și afișează valorile ordonate după cheie folosind un `std::map`.**                     | `[(2, "b"), (1, "a"), (3, "c")]`       | `[(1, "a"), (2, "b"), (3, "c")]`         | Programul folosește un `std::map` pentru a stoca și ordona perechile după cheie.                                                                                               |
| 5.  | **Scrieți un program care citește un `std::tuple` cu elemente de tipuri diferite (int, double, string) și afișează fiecare element pe o linie separată.** | `(42, 3.14, "Hello")`                  | `42\n3.14\nHello`                        | Programul folosește `std::get` pentru a accesa și afișa fiecare element din tuple.                                                                                            |
| 6.  | **Scrieți un program care citește două `std::vector` de dimensiuni egale și afișează suma elementelor corespunzătoare într-un al treilea vector.**       | `2, [1, 2], [3, 4]`                    | `[4, 6]`                                 | Programul adaugă elementele din cele două vectori și stochează rezultatele într-un al treilea vector.                                                                          |
| 7.  | **Scrieți un program care verifică dacă un element specificat există într-un `std::set` și afișează un mesaj corespunzător.**                            | `[1, 2, 3, 4, 5], 3`                   | `Elementul 3 există în set.`             | Programul folosește metoda `find` pentru a verifica dacă elementul există în set.                                                                                              |
| 8.  | **Scrieți un program care folosește un `std::map` pentru a număra frecvența fiecărui cuvânt dintr-un text dat și afișează rezultatele.**                 | `"ana are mere ana are pere"`          | `ana: 2\nare: 2\nmere: 1\npere: 1`       | Programul parcurge textul și folosește un `std::map` pentru a număra aparițiile fiecărui cuvânt.                                                                              |
