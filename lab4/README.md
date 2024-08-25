# Laborator 4 - Vectori si Matrici

## Cuprins

- [Vectori](#vectori)
- [Matrici](#matrici)
- [Exercitii](#exercitii)

## Vectori

Un vector este o colectie de elemente de acelasi tip de date. Elementele unui vector sunt stocate in memorie in mod
continuu.

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