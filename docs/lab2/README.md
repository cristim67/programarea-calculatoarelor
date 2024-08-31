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

Observatie: Functiile matematice sunt definite in biblioteca `cmath`

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

Valoarea `expresie` este evaluată la tip `int` și compară valoarea rezultată cu fiecare `valoare` din `case`. Dacă
valoarea `expresie` este egală cu `valoare`, atunci se execută codul din `case` și se iese din `switch` cu `break`.

### Instructiuni repetitive

1. Instructiunea `while`

```cpp
while (conditie) {
    // codul care se executa cat timp conditia este adevarata
}
```

2. Instructiunea `do` ... `while`

```cpp
do {
    // codul care se executa cel putin o data
} while (conditie);
```

3. Instructiunea `for`

```cpp
for (initializare; conditie; incrementare) {
    // codul care se executa cat timp conditia este adevarata
}
```

## Instructiuni speciale

1. Instructiunea `break` - iese din instructiunea repetitiva

```cpp
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    cout << i << " ";
}
```

2. Instructiunea `continue` - trece la urmatoarea iteratie

```cpp
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    cout << i << " ";
}
```

3. Instructiunea `return` - termina executia functiei si returneaza o valoare

```cpp
int main() {
    return 0;
}
```

## Exerciții

| Nr. | Descriere | Input | Output | Explicație |
| --- | --------- | ----- | ------ | --------- |
| 1.  | **Să se scrie un program care verifică dacă un număr `n` este prim, folosind în rezolvare instrucțiunea `break`.** | `13` | `true` | Programul trebuie să verifice dacă `n` este divizibil doar cu `1` și cu el însuși. Folosirea instrucțiunii `break` ajută la ieșirea din buclă imediat ce se găsește un divizor. |
| 2.  | **Se introduc de la tastatură `N` numere reale; să se afișeze media aritmetică a numerelor prime, cu o precizie de 2 zecimale.** | `N = 5; numere: 2, 3, 4, 5, 6` | `3.33` | Programul trebuie să calculeze media numerelor prime dintre cele introduse. Se utilizează `fixed` și `setprecision(2)` din `iomanip` pentru a afișa rezultatul cu două zecimale. |
| 3.  | **Să se scrie un program care verifică dacă un număr este perfect. Un număr este perfect dacă este egal cu suma divizorilor săi, fără el însuși.** | `6` | `true` | Programul verifică dacă suma divizorilor proprii ai numărului `n` este egală cu `n`. Pentru `6`, divizorii sunt `1`, `2`, `3`, iar suma acestora este `6`, deci numărul este perfect. |
| 4.  | **Să se scrie un program care primește un număr natural `n` și afișează inversul său.** | `1234` | `4321` | Programul trebuie să inverseze cifrele numărului `n` și să afișeze rezultatul. Se poate face acest lucru extrăgând și rearanjând cifrele. |
| 5.  | **Să se scrie un program care primește un număr natural `n` și afișează dacă numărul este palindrom sau nu.** | `121` | `true` | Programul compară numărul original cu versiunea sa inversată pentru a verifica dacă sunt egale. Dacă da, numărul este palindrom. |
| 6.  | **Să se scrie un program care verifică dacă un număr `n` reprezentat pe 32 de biți este palindrom în formă binară.** | `9` | `true` | Numărul `9` în binar este `1001`, care este un palindrom. Programul verifică simetria bitilor din reprezentarea binară. |

## Ați terminat laboratorul 2! Felicitări! 🎉

[Înapoi la Cuprins](#cuprins)