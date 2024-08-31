# Laborator 4 - Vectori si Matrici

## Cuprins

- [Vectori](#vectori)
- [Matrici](#matrici)
- [Exercitii](#exercitii)

## Vectori

Un vector este o colectie de elemente de acelasi tip de date. Elementele unui vector sunt stocate in memorie in mod
continuu.

### Reprezentarea în memorie a unui vector

Un vector este reprezentat in memorie ca un bloc continuu de elemente de acelasi tip de date.

```
+---+---+---+---+---+
| 1 | 2 | 3 | 4 | 5 |
+---+---+---+---+---+
```

Dimensiunea unui vector este data de numarul de elemente inmultit cu dimensiunea unui element.

```
dimensiunea_vectorului = numar_elemente * dimensiune_element <-> sizeof(vector) = numar_elemente * sizeof(element)
```

Observatie: Indexul primului element al unui vector este 0, iar indexul ultimului element este `numar_elemente - 1`.

### Declararea unui vector

Un vector se declara specificand tipul de date al elementelor si numarul de elemente ale vectorului.

```cpp

// Declararea unui vector de intregi cu 5 elemente

int v[5];

```

### Initializarea unui vector

Un vector se initializeaza specificand valorile elementelor.

```cpp

// Initializarea unui vector de intregi cu 5 elemente

int v[5] = {1, 2, 3, 4, 5};

```

### Accesarea elementelor unui vector

Elementele unui vector se acceseaza folosind indexul elementului.

```cpp

// Accesarea elementelor unui vector de intregi cu 5 elemente

int v[5] = {1, 2, 3, 4, 5};

cout << v[0] << endl; // Afiseaza 1
cout << v[1] << endl; // Afiseaza 2
cout << v[2] << endl; // Afiseaza 3
cout << v[3] << endl; // Afiseaza 4
cout << v[4] << endl; // Afiseaza 5

```

### Parcurgerea unui vector

Un vector se parcurge folosind un ciclu `for`.

```cpp

// Parcurgerea unui vector de intregi cu 5 elemente

int v[5] = {1, 2, 3, 4, 5};

for (int i = 0; i < 5; i++) {
    cout << v[i] << " ";
}

```

## Matrici

O matrice este o colectie de elemente de acelasi tip de date organizate pe linii si coloane.

### Reprezentarea în memorie a unei matrici

O matrice este reprezentata in memorie ca un bloc continuu de elemente de acelasi tip de date organizate pe linii si
coloane.

```
+---+---+---+
| 1 | 2 | 3 |
+---+---+---+
| 4 | 5 | 6 |
+---+---+---+
```

Dimensiunea unei matrici este data de numarul de linii inmultit cu numarul de coloane inmultit cu dimensiunea unui
element.

```
dimensiunea_matricei = numar_linii * numar_coloane * dimensiune_element <-> sizeof(matrice) = numar_linii * numar_coloane * sizeof(element)
```

### Declararea unei matrici

O matrice se declara specificand tipul de date al elementelor, numarul de linii si numarul de coloane ale matricei.

```cpp

// Declararea unei matrici de intregi cu 2 linii si 3 coloane

int m[2][3];

```

### Initializarea unei matrici

O matrice se initializeaza specificand valorile elementelor.

```cpp

// Initializarea unei matrici de intregi cu 2 linii si 3 coloane

int m[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

```

### Accesarea elementelor unei matrici

Elementele unei matrici se acceseaza folosind indexul liniei si indexul coloanei.

```cpp

// Accesarea elementelor unei matrici de intregi cu 2 linii si 3 coloane

int m[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

cout << m[0][0] << endl; // Afiseaza 1
cout << m[0][1] << endl; // Afiseaza 2
cout << m[0][2] << endl; // Afiseaza 3
cout << m[1][0] << endl; // Afiseaza 4
cout << m[1][1] << endl; // Afiseaza 5
cout << m[1][2] << endl; // Afiseaza 6

```

### Parcurgerea unei matrici

O matrice se parcurge folosind doua cicluri `for`.

```cpp

// Parcurgerea unei matrici de intregi cu 2 linii si 3 coloane

int m[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        cout << m[i][j] << " ";
    }
    cout << endl;
}

```

## Exercitii

| Nr. | Descriere                                                                                                                                                                                     | Input                | Output                                           | Explicație                                                                                                                                                                               |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.  | **Scrieți un program care calculează suma elementelor unui vector de numere întregi.**                                                                                                         | `5, [1, 2, 3, 4, 5]` | `15`                                             | Se introduce dimensiunea vectorului (5) și elementele acestuia. Suma elementelor este `1 + 2 + 3 + 4 + 5 = 15`.                                                                            |
| 2.  | **Scrieți un program care verifică dacă un element dat există într-un vector de numere întregi.**                                                                                              | `5, [1, 2, 3, 4, 5], 3` | `true`                                         | Programul primește un vector și un element. Trebuie să parcurgă vectorul și să verifice dacă elementul există. În acest caz, 3 se află în vector, deci output-ul este `true`.             |
| 3.  | **Scrieți un program care inversează ordinea elementelor unui vector de numere întregi.**                                                                                                      | `5, [1, 2, 3, 4, 5]` | `[5, 4, 3, 2, 1]`                               | Programul primește un vector și trebuie să returneze același vector, dar cu elementele în ordine inversă. În acest caz, vectorul devine `[5, 4, 3, 2, 1]`.                                |
| 4.  | **Scrieți un program care determină suma elementelor de pe diagonală principală a unei matrice pătratice.**                                                                                    | `2, [[1, 2], [3, 4]]`| `5`                                              | Programul primește o matrice pătratică și calculează suma elementelor de pe diagonală principală (în acest caz `1 + 4 = 5`).                                                              |
| 5.  | **Scrieți un program care calculează produsul scalar a doi vectori de dimensiuni egale.**                                                                                                      | `3, [1, 2, 3], [4, 5, 6]` | `32`                                         | Programul primește doi vectori de aceeași dimensiune și calculează produsul scalar: `1*4 + 2*5 + 3*6 = 32`.                                                                                |
| 6.  | **Scrieți un program care determină dacă o matrice este simetrică. O matrice este simetrică dacă este egală cu transpusa ei.**                                                                  | `3, [[1, 2, 3], [2, 4, 5], [3, 5, 6]]`| `true`                             | Programul primește o matrice pătratică și trebuie să verifice dacă este simetrică. În acest caz, matricea este simetrică, deci output-ul va fi `true`.                                    |
| 7.  | **Scrieți un program care calculează produsul a două matrici de dimensiuni compatibile.**                                                                                             | `2x3, [[1, 2, 3], [4, 5, 6]], 3x2, [[7, 8], [9, 10], [11, 12]]` | `2x2, [[58, 64], [139, 154]]` | Programul primește două matrici și trebuie să calculeze produsul lor. Produsul matricelor este o altă matrice, unde fiecare element este calculat ca suma produselor corespunzătoare. |
