---
id: lab5
title: Lab 5
---

# Laborator 5

## Cuprins

- [Pointeri](#pointeri)
- [Operații cu Pointeri](#operații-cu-pointeri)
- [Pointeri și Vectori](#pointeri-și-vectori)
- [Pointeri și Funcții](#pointeri-și-funcții)
- [Pointeri și Matrice](#pointeri-și-matrice)
- [Exerciții](#exerciții)

## Pointeri

Un pointer este o variabilă care stochează adresa de memorie a altei variabile.

**La ce folosim pointeri?**

- Accesarea și manipularea directă a variabilelor din memorie
- Transmiterea adresei de memorie către funcții
- Lucrul cu structuri de date complexe, cum ar fi vectori și matrice
- Alocarea dinamică a memoriei

### Declararea unui pointer

Un pointer se declară specificând tipul de date al variabilei pe care o pointează, urmat de simbolul `*` și numele
pointerului.

```cpp
// Declararea unui pointer către un întreg
int *p;
```

:::info Observație
Linia de cod declară un pointer către un întreg, dar nu inițializează pointerul.

Inițializarea unui pointer fără a-i atribui o adresă poate duce la comportament nedefinit.
:::

### Atribuirea unei adrese unui pointer

Pentru a atribui o adresă unui pointer, folosim operatorul `&`, care returnează adresa unei variabile.

```cpp
int x = 10;
int *p = &x; // Pointerul p stochează adresa lui x
```

:::info Observație

Adresa unei variabile este un număr întreg care reprezintă locația sa în memorie.

Pentru a accesa adresa unei variabile, folosim operatorul `&`.
:::

### Accesarea valorii unei variabile prin intermediul unui pointer

Pentru a accesa valoarea unei variabile prin intermediul unui pointer, folosim operatorul `*`.

```cpp
int x = 10;
int *p = &x; // Pointerul p stochează adresa lui x

cout << *p; // Afisează valoarea lui x
```

:::tip Observație
Folosirea operatorului `*` pentru a accesa valoarea unei variabile prin intermediul unui pointer se numește
dereferențiere.
:::

## Parcurgerea elementelor unui vector folosind pointeri

Pointerii pot fi folosiți pentru a parcurge elementele unui vector, deoarece adresele consecutive ale elementelor unui
vector sunt stocate în memorie.

```cpp
int v[5] = {1, 2, 3, 4, 5};
int *p = v; // Pointerul p pointează către primul element al vectorului

for (int i = 0; i < 5; i++) {
    cout << *(p + i) << " "; // Accesarea elementelor vectorului folosind pointeri
}
```

:::info Observație
Adunarea unui pointer cu un număr întreg deplasează pointerul la o altă locație de memorie, în funcție de dimensiunea
tipului de date.

De exemplu, dacă adunăm un pointer către un întreg cu 1, pointerul se va deplasa cu 4 octeți (dimensiunea unui întreg).
:::

## Operații cu Pointeri

Pointerii pot fi manipulați prin diferite operații, cum ar fi incrementarea, decrementarea, adunarea și scăderea.

### Incrementarea și decrementarea unui pointer

Un pointer poate fi incrementat sau decrementat pentru a trece la următoarea sau la precedenta locație de memorie.

```cpp
int v[5] = {1, 2, 3, 4, 5};
int *p = v; // Pointerul p pointează către primul element al vectorului

p++; // p pointează acum către al doilea element
cout << *p << endl; // Afișează 2

p--; // p pointează din nou către primul element
cout << *p << endl; // Afișează 1
```

### Adunarea și scăderea unui pointer

Un pointer poate fi adunat sau scăzut cu un număr întreg pentru a trece la o altă locație de memorie.

```cpp
int v[5] = {1, 2, 3, 4, 5};
int *p = v;

cout << *(p + 2) << endl; // Afișează 3 (elementul la indexul 2)
```

## Pointeri și Vectori

Pointerii și vectorii sunt strâns legați. Numele unui vector este, de fapt, un pointer către primul său element. Astfel,
pointerii pot fi utilizați pentru a accesa și manipula elementele unui vector.

```cpp
int v[5] = {1, 2, 3, 4, 5};
int *p = v;

for (int i = 0; i < 5; i++) {
    cout << *(p + i) << " ";
}
```

:::info Observație
Un vector este un pointer constant către primul său element, ceea ce înseamnă că nu putem schimba adresa sa.
:::

## Pointeri și Funcții

Pointerii pot fi utilizați pentru a trimite adrese de memorie către funcții, permițând funcțiilor să modifice
variabilele din afara lor.

```cpp
void increment(int *x) {
    (*x)++; // Incrementarea valorii de la adresa x
}

int main() {
    int x = 10;
    increment(&x); // Trimiterea adresei lui x către funcția increment

    cout << x; // Afișează 11

    return 0;
}
```

:::info Observație
Funcțiile pot modifica variabilele din afara lor folosind pointeri, deoarece acestea primesc adrese de memorie, nu copii
ale valorilor, nu se mai face copiere de către compilator.

:::

### Returnarea unui pointer dintr-o funcție

O funcție poate returna un pointer către o variabilă alocată dinamic, permițând accesul la acea variabilă din afara
funcției.

```cpp
int *createArray(int n) {
    int *arr = new int[n]; // Alocarea unui vector de n elemente

    for (int i = 0; i < n; i++) {
        arr[i] = i; // Inițializarea elementelor vectorului
    }

    return arr; // Returnarea pointerului către vector
}

int main() {
    int n = 5;
    int *arr = createArray(n); // Alocarea unui vector de n elemente

    for (int i = 0; i < n; i++) {
        cout << arr[i] << " "; // Afișarea elementelor vectorului
    }

    delete[] arr; // Eliberarea memoriei alocate

    return 0;
}
```

:::warning Atentie
Memoria alocată dinamic trebuie eliberată manual folosind operatorul `delete[]` pentru a evita memory leaks.
:::

## Pointeri și Matrice

Pointerii pot fi utilizați ca și reprezentări pentru matrice, deoarece matricele sunt stocate în memorie ca blocuri
continue de elemente.

```cpp
int **createMatrix(int rows, int cols) {
    int **matrix = new int *[rows]; // Alocarea unui vector de pointeri către linii

    for (int i = 0; i < rows; i++) {
        matrix[i] = new int[cols]; // Alocarea unui vector de coloane pentru fiecare linie
    }

    return matrix; // Returnarea pointerului către matrice
}

int main() {
    int rows = 3, cols = 3;
    int **matrix = createMatrix(rows, cols); // Alocarea unei matrice de 3x3

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            matrix[i][j] = i * cols + j; // Inițializarea elementelor matricei
        }
    }

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cout << matrix[i][j] << " "; // Afișarea elementelor matricei
        }
        cout << endl;
    }

    for (int i = 0; i < rows; i++) {
        delete[] matrix[i]; // Eliberarea memoriei alocate pentru fiecare linie
    }

    delete[] matrix; // Eliberarea memoriei alocate pentru vectorul de pointeri

    return 0;
}
```

:::warning Atentie
Memoria alocată dinamic pentru matrice trebuie eliberată manual pentru fiecare linie și pentru vectorul de pointeri.
:::

## Exerciții

| Nr. |                                                                     Descriere                                                                     |         Input         |                    Output                     |                                                                                    Explicație                                                                                     |
|:---:|:-------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------:|:---------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 1.  |                             **Scrieți un program care schimbă valorile a două variabile întregi folosind pointeri.**                              |    `a = 5, b = 10`    |                `a = 10, b = 5`                |                                                Programul folosește un pointer pentru a schimba valorile a două variabile întregi.                                                 |
| 2.  |                              **Scrieți un program care calculează suma elementelor unui vector folosind pointeri.**                               | `5, [1, 2, 3, 4, 5]`  |                     `15`                      |                                  Programul primește un vector și folosește un pointer pentru a parcurge vectorul și a calcula suma elementelor.                                   |
| 3.  |                                 **Scrieți un program care inversează elementele unui vector folosind pointeri.**                                  | `5, [1, 2, 3, 4, 5]`  |               `[5, 4, 3, 2, 1]`               |                Programul folosește pointeri pentru a schimba valorile elementelor de la capetele vectorului până la mijloc, inversând astfel ordinea elementelor.                 |
| 4.  |                             **Scrieți un program care calculează lungimea unui șir de caractere folosind pointeri.**                              |       `"hello"`       |                      `5`                      |                        Programul folosește un pointer pentru a parcurge șirul de caractere până la caracterul nul (`\0`) și numără caracterele întâlnite.                         |
| 5.  |                         **Scrieți un program care determină dacă un șir de caractere este palindrom folosind pointeri.**                          |       `"madam"`       |                    `true`                     |      Programul folosește pointeri pentru a compara caracterele de la începutul și sfârșitul șirului, deplasându-se către centru pentru a verifica dacă șirul este palindrom.      |
| 6.  |        **Scrieți un program care alocă dinamic memorie pentru un vector și citește valorile acestuia de la tastatură, folosind pointeri.**        | `n = 4, [1, 2, 3, 4]` |                `[1, 2, 3, 4]`                 |                       Programul alocă dinamic memorie pentru un vector de numere întregi și folosește pointeri pentru a citi și afișa valorile vectorului.                        |
| 7.  | **Scrieți un program care implementează o funcție care returnează adresa elementului maxim dintr-un vector de numere întregi folosind pointeri.** | `5, [1, 7, 3, 4, 5]`  | `Adresa elementului maxim: (adresa memoriei)` | Programul parcurge vectorul folosind pointeri și returnează adresa elementului maxim, nu valoarea sa. Se testează cunoștințele despre manipularea directă a adreselor în memorie. |
