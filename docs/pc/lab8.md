---
id: lab8
title: Lab 8
---

# Laborator 8

## Cuprins

- [Bubble Sort](#bubble-sort)
- [Quick Sort](#quick-sort)
- [Merge Sort](#merge-sort)
- [Exercitii](#exercitii)

## Bubble Sort

Bubble Sort este un algoritm simplu de sortare care compara elementele adiacente si le interschimba daca nu sunt in ordine.

### Pseudocod

```
BubbleSort(A)
    for i = 0 to n - 1
        for j = 0 to n - i - 1
            if A[j] > A[j + 1]
                swap(A[j], A[j + 1])
```

### Implementare

```cpp

#include <iostream>

void bubbleSort(int A[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (A[j] > A[j + 1]) {
                std::swap(A[j], A[j + 1]);
            }
        }
    }
}

int main() {
    int A[] = {5, 2, 3, 1, 4};
    int n = sizeof(A) / sizeof(A[0]);

    bubbleSort(A, n);

    for (int i = 0; i < n; i++) {
        std::cout << A[i] << " ";
    }

    return 0;
}

```

## Quick Sort

Quick Sort este un algoritm eficient de sortare care foloseste metoda divide et impera. Alegem un element pivot si plasam elementele mai mici decat pivotul in stanga si elementele mai mari decat pivotul in dreapta.

### Pseudocod

```
QuickSort(A, low, high)
    if low < high
        pi = partition(A, low, high)
        QuickSort(A, low, pi - 1)
        QuickSort(A, pi + 1, high)

partition(A, low, high)

    pivot = A[high]
    i = low - 1

    for j = low to high - 1
        if A[j] < pivot
            i++
            swap(A[i], A[j])

    swap(A[i + 1], A[high])
    return i + 1
```

### Implementare

```cpp

#include <iostream>

int partition(int A[], int low, int high) {
    int pivot = A[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (A[j] < pivot) {
            i++;
            std::swap(A[i], A[j]);
        }
    }

    std::swap(A[i + 1], A[high]);
    return i + 1;
}

void quickSort(int A[], int low, int high) {
    if (low < high) {
        int pi = partition(A, low, high);
        quickSort(A, low, pi - 1);
        quickSort(A, pi + 1, high);
    }
}

int main() {
    int A[] = {5, 2, 3, 1, 4};
    int n = sizeof(A) / sizeof(A[0]);

    quickSort(A, 0, n - 1);

    for (int i = 0; i < n; i++) {
        std::cout << A[i] << " ";
    }

    return 0;
}

```

## Merge Sort

Merge Sort este un algoritm de sortare care foloseste metoda divide et impera. Se imparte vectorul in doua jumatati, se sorteaza cele doua jumatati si se combina inapoi.

### Pseudocod

```
MergeSort(A, low, high)
    if low < high
        mid = (low + high) / 2
        MergeSort(A, low, mid)
        MergeSort(A, mid + 1, high)
        merge(A, low, mid, high)

merge(A, low, mid, high)

    n1 = mid - low + 1
    n2 = high - mid

    L[n1], R[n2]

    for i = 0 to n1 - 1
        L[i] = A[low + i]

    for j = 0 to n2 - 1
        R[j] = A[mid + 1 + j]

    i = 0
    j = 0
    k = low

    while i < n1 and j < n2
        if L[i] <= R[j]
            A[k] = L[i]
            i++
        else
            A[k] = R[j]
            j++
        k++

    while i < n1
        A[k] = L[i]
        i++
        k++

    while j < n2
        A[k] = R[j]
        j++
        k++
```

### Implementare

```cpp

#include <iostream>

void merge(int A[], int low, int mid, int high) {
    int n1 = mid - low + 1;
    int n2 = high - mid;

    int L[n1], R[n2];

    for (int i = 0; i < n1; i++) {
        L[i] = A[low + i];
    }

    for (int j = 0; j < n2; j++) {
        R[j] = A[mid + 1 + j];
    }

    int i = 0;
    int j = 0;
    int k = low;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            A[k] = L[i];
            i++;
        } else {
            A[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        A[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        A[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(int A[], int low, int high) {
    if (low < high) {
        int mid = (low + high) / 2;
        mergeSort(A, low, mid);
        mergeSort(A, mid + 1, high);
        merge(A, low, mid, high);
    }
}

int main() {
    int A[] = {5, 2, 3, 1, 4};
    int n = sizeof(A) / sizeof(A[0]);

    mergeSort(A, 0, n - 1);

    for (int i = 0; i < n; i++) {
        std::cout << A[i] << " ";
    }

    return 0;
}

```

## Exerciții

| Nr. | Descriere                                                                                                                                                                      | Input                       | Output                       | Explicație                                                                                                                                                                             |
|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.  | **Implementați un program care sortează un vector de numere întregi folosind Bubble Sort.**                                                                                    | `5, [4, 2, 3, 1, 5]`         | `[1, 2, 3, 4, 5]`            | Folosiți algoritmul Bubble Sort pentru a sorta vectorul. Comparați elementele adiacente și faceți schimbările necesare până când vectorul este sortat.                                  |
| 2.  | **Implementați un program care sortează un vector de numere întregi folosind Quick Sort.**                                                                                     | `5, [10, 7, 8, 9, 1]`        | `[1, 7, 8, 9, 10]`           | Folosiți algoritmul Quick Sort pentru a sorta vectorul. Alegeți un pivot și rearanjați vectorul astfel încât elementele mai mici să fie la stânga, iar cele mai mari la dreapta pivotului. |
| 3.  | **Implementați un program care sortează un vector de numere întregi folosind Merge Sort.**                                                                                     | `6, [12, 11, 13, 5, 6, 7]`   | `[5, 6, 7, 11, 12, 13]`      | Folosiți algoritmul Merge Sort pentru a sorta vectorul. Împărțiți vectorul în jumătăți, sortați fiecare jumătate recursiv și combinați rezultatele.                                       |
| 4.  | **Compară performanța algoritmilor Bubble Sort, Quick Sort și Merge Sort pe un vector mare de numere generate aleatoriu.**                                                    | `n = 100000, random values`  | `Timpul pentru fiecare sortare` | Generați un vector mare cu valori aleatorii și măsurați timpul necesar pentru a-l sorta folosind fiecare dintre cele trei metode. Analizați diferențele de performanță.                |
| 5.  | **Implementați o funcție care verifică dacă un vector sortat de Quick Sort este corect ordonat (în ordine crescătoare).**                                                      | `5, [1, 2, 3, 4, 5]`         | `True`                       | După sortarea vectorului folosind Quick Sort, verificați dacă fiecare element este mai mic sau egal cu următorul element din vector.                                                    |
| 6.  | **Implementați o funcție care sortează doar o parte a unui vector folosind Merge Sort.**                                                                                       | `5, [9, 7, 5, 3, 1], 1, 3`   | `[9, 5, 7, 3, 1]`            | Folosiți Merge Sort pentru a sorta doar subsecvența de la indicele 1 la 3 din vectorul inițial, lăsând restul vectorului neschimbat.                                                     |
| 7.  | **Modificați algoritmul Quick Sort pentru a sorta un vector de numere întregi în ordine descrescătoare.**                                                             | `5, [4, 2, 3, 1, 5]`         | `[5, 4, 3, 2, 1]`            | Adaptați Quick Sort pentru a sorta elementele într-un vector în ordine descrescătoare, inversând condițiile de comparare în timpul procesului de partitionare.                           |
| 8.  | **Implementați și comparați Bubble Sort și o variantă optimizată care se oprește dacă vectorul este deja sortat la un anumit pas.**                                 | `5, [1, 2, 3, 4, 5]`         | `Număr de iterații`          | Optimizarea Bubble Sort prin verificarea dacă vectorul este deja sortat și oprirea algoritmului pentru a îmbunătăți eficiența în cazul unor intrări deja ordonate.                      |
