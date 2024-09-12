---
id: lab2
title: Lab 2
---


# Laborator 2

## Cuprins

- [Functii matematice](#functii-matematice)
- [Structuri de Control](#structuri-de-control)
- [Exercitii](#exercitii)

## Functii matematice

| Functie                          | Descriere                                                    |
|----------------------------------|--------------------------------------------------------------|
| `int abs(int x)`                 | Returneaza valoarea absoluta a lui `x`                       |
| `double fabs(double x)`          | Returneaza valoarea absoluta a lui `x`                       |
| `double sqrt(double x)`          | Returneaza radicalul patrat al lui `x`                       |
| `double pow(double x, double y)` | Returneaza `x` la puterea `y`                                |
| `double floor(double x)`         | Returneaza cel mai mare numar intreg mai mic sau egal cu `x` |
| `double ceil(double x)`          | Returneaza cel mai mic numar intreg mai mare sau egal cu `x` |
| `double round(double x)`         | Returneaza cel mai apropiat numar intreg de `x`              |

:::tip Observatie
 Functiile matematice sunt definite in biblioteca `cmath`
:::

```cpp
#include <iostream>
#include <cmath>

using namespace std;

int main() {
    int x = -5;
    cout << "abs(" << x << ") = " << abs(x) << endl;
    
    double y = -5.5;
    cout << "fabs(" << y << ") = " << fabs(y) << endl;
    
    double z = 16;
    cout << "sqrt(" << z << ") = " << sqrt(z) << endl;
    
    double a = 2, b = 3;
    cout << "pow(" << a << ", " << b << ") = " << pow(a, b) << endl;
    
    double c = 5.5;
    cout << "floor(" << c << ") = " << floor(c) << endl;
    
    double d = 5.5;
    cout << "ceil(" << d << ") = " << ceil(d) << endl;
    
    double e = 5.5;
    cout << "round(" << e << ") = " << round(e) << endl;
    
    return 0;
}
```
:::warning Atentie
Aveți grijă la tipul de date al argumentelor și al rezultatelor funcțiilor matematice. 

De exemplu, `abs` primește și returnează `int`, `fabs` primește și returnează `double`, etc.
:::

## Structuri de Control

### Instructiuni conditionale

1. Instructiunea `if` ... `else`

Se poate utiliza în mai multe moduri:

```cpp
if (conditie) {
    // codul care se executa daca expresia este adevarata
} else {
    // codul care se executa daca expresia este falsa
}
```

```cpp
if (expresie) {
    // codul care se executa daca expresia este adevarata
}
```

```cpp
if (expresie1) {
    // codul care se executa daca expresia1 este adevarata
} else if (expresie2) {
    // codul care se executa daca expresia1 este falsa si expresia2 este adevarata
} else {
    // codul care se executa daca nicio expresie nu este adevarata
}
```
:::warning Atentie
Variabila `expresie` se evaluează la tip `bool` și se execută codul din blocul `if` sau `else` în funcție de valoarea acesteia.

Tipurile de date diferite de `bool` sunt evaluate la `true` dacă sunt diferite de `0` și `false` dacă sunt `0`.

Exemplu: având `int x = 5`, `if (x)` este echivalent cu `if (x != 0)`.
:::

:::info Observatii:

- Instructiunea `else` este optionala.
- Se poate folosi oricât de multe `else if` după un `if`.

:::

2. Instructiunea `switch`

```cpp
switch (expresie) {
    case valoare1:
        // codul care se executa daca expresia este egala cu valoare1
        break;
    case valoare2:
        // codul care se executa daca expresia este egala cu valoare2
        break;
    ...
    default:
        // codul care se executa daca expresia nu este egala cu nicio valoare
}
```
:::info Observatie
Valoarea `expresie` este evaluată la tip `int` și compară valoarea rezultată cu fiecare `valoare` din `case`.

Dacă valoarea `expresie` este egală cu `valoare`, atunci se execută codul din `case` și se iese din `switch` cu `break`.
:::
### Instructiuni repetitive

1. Instructiunea `while`

```cpp
while (conditie) {
    // codul care se executa cat timp conditia este adevarata
}
```

:::info Observatie
Dacă `conditie` este `false` de la început, atunci codul din blocul `while` nu se va executa niciodată.
:::

2. Instructiunea `do` ... `while`

```cpp
do {
    // codul care se executa cel putin o data
} while (conditie);
```

:::warning Atentie
Dacă `conditie` este `false` de la început, atunci codul din blocul `do` se va executa o singură dată.
:::

3. Instructiunea `for`

```cpp
for (initializare; conditie; incrementare) {
    // codul care se executa cat timp conditia este adevarata
}
```

:::tip Observatie
Blocul `for` este format din trei părți:

- `initializare` - se execută o singură dată la început
- `conditie` - se evaluează la începutul fiecărei iterații și dacă este `false`, atunci se iese din buclă
- `incrementare` - se execută la sfârșitul fiecărei iterații

Exemplu: `for (int i = 0; i < 10; i++)` - se execută de la `i = 0` până la `i = 9`
:::

## Instructiuni speciale

1. Instructiunea `break` - iese din bucla curentă

```cpp
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    cout << i << " ";
}
```

:::warning Atentie
Instructiunea `break` iese doar din cea mai apropiată buclă.

Exemplu:

```cpp
for (int i = 0; i < 10; i++) {
    for (int j = 0; j < 10; j++) {
        if (j == 5) {
            break;
        }
        cout << i << " " << j << endl;
    }
}
```

In acest caz, `break` iese doar din bucla `for` cu `j`.
:::

2. Instructiunea `continue` - trece la următoarea iterație

```cpp
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    cout << i << " ";
}
```

:::info Observatie
Instructiunea `continue` trece la următoarea iterație fără a executa codul din blocul `for`.

Exemplu: `for (int i = 0; i < 10; i++)` - se execută de la `i = 0` până la `i = 9`, dar dacă `i == 5`, atunci se trece la `i = 6`.
::: 

3. Instructiunea `return` - iese din funcție

```cpp
int main() {
    return 0;
}
```

## Exerciții

| Nr. | Descriere | Input | Output | Explicație |
|:---:|:---------:|:-----:|:------:|:---------:|
| 1.  | **Să se scrie un program care verifică dacă un număr `n` este prim, folosind în rezolvare instrucțiunea `break`.** | `13` | `true` | Programul trebuie să verifice dacă `n` este divizibil doar cu `1` și cu el însuși. Folosirea instrucțiunii `break` ajută la ieșirea din buclă imediat ce se găsește un divizor. |
| 2.  | **Se introduc de la tastatură `N` numere reale; să se afișeze media aritmetică a numerelor prime, cu o precizie de 2 zecimale.** | `N = 5; numere: 2, 3, 4, 5, 6` | `3.33` | Programul trebuie să calculeze media numerelor prime dintre cele introduse. Se utilizează `fixed` și `setprecision(2)` din `iomanip` pentru a afișa rezultatul cu două zecimale. |
| 3.  | **Să se scrie un program care verifică dacă un număr este perfect. Un număr este perfect dacă este egal cu suma divizorilor săi, fără el însuși.** | `6` | `true` | Programul verifică dacă suma divizorilor proprii ai numărului `n` este egală cu `n`. Pentru `6`, divizorii sunt `1`, `2`, `3`, iar suma acestora este `6`, deci numărul este perfect. |
| 4.  | **Să se scrie un program care primește un număr natural `n` și afișează inversul său.** | `1234` | `4321` | Programul trebuie să inverseze cifrele numărului `n` și să afișeze rezultatul. Se poate face acest lucru extrăgând și rearanjând cifrele. |
| 5.  | **Să se scrie un program care primește un număr natural `n` și afișează dacă numărul este palindrom sau nu.** | `121` | `true` | Programul compară numărul original cu versiunea sa inversată pentru a verifica dacă sunt egale. Dacă da, numărul este palindrom. |
| 6.  | **Să se scrie un program care verifică dacă un număr `n` este palindrom în formă binară.** | `9` | `true` | Numărul `9` în binar este `1001`, care este un palindrom. Programul verifică simetria bitilor din reprezentarea binară. |