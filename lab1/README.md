# Laborator 1

## Cuprins

- [1. Introducere în CLion](#1-introducere-în-clion)
- [2. Compilare și Debugging în CLion](#2-compilare-și-debugging-în-clion)
- [Tipuri de variabile](#tipuri-de-variabile)
- [Conversii de Tipuri](#conversii-de-tipuri)
- [Operatori](#operatori)
- [Exerciții](#exerciții)

## 1. Introducere în CLion

CLion este un IDE (Integrated Development Environment) dezvoltat de JetBrains, destinat programării în C/C++.

### Pași de urmat:

1. **Instalare CLion:** Descărcați și instalați CLion de
   pe [site-ul oficial JetBrains](https://www.jetbrains.com/clion/), [ghid de instalare](../assets/Instalare%20Clion%20+%20explicatie%20debugger.pdf).
2. **Primul proiect:**

    - Deschideți CLion și creați un nou proiect C++.
    - Selectați „Create New Project” și alegeți „C++ Executable”.
    - Alegeți un nume pentru proiect și apăsați „Create”.

## 2. Compilare și Debugging în CLion

Compilarea este procesul de transformare a codului sursă în cod executabil. Debugging-ul este procesul de identificare
și corectare a erorilor din cod.

### Pași de urmat:

1. **Scrierea unui program simplu:** Scrieți un program simplu în `main.cpp` care afișează „Hello, World!”.

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

2. **Compilare și rulare:** Apăsați butonul `Build` sau folosiți comanda `Ctrl + F9` pentru a compila programul.

3. **Debugging:** Apăsați butonul `Debug` sau folosiți comanda `Shift + F9` pentru a rula programul în modul de
   debugging.

## Tipuri de variabile

Definirea unei variabile înseamnă alocarea unui spațiu în memorie pentru stocarea unei valori. Acestea se declarăm prin
următoarea sintaxă:

```ccp
<nume_tip_variabila> <nume_variabila>

ex: int x;
```

### Primitive

| Tip de Date          | Descriere                                                                    | Dimensiune | Interval de Valori                               |
|----------------------|------------------------------------------------------------------------------|------------|--------------------------------------------------|
| **`int`**            | Număr întreg (pozitiv sau negativ)                                           | 4 bytes    | \(-2^{31}\) până la \(2^{31} - 1\)               |
| **`unsigned int`**   | Număr întreg pozitiv                                                         | 4 bytes    | \(0\) până la \(2^{32} - 1\)                     |
| **`short`**          | Număr întreg mai mic decât `int`                                             | 2 bytes    | \(-2^{15}\) până la \(2^{15} - 1\)               |
| **`unsigned short`** | Număr întreg mai mic decât `unsigned int`, pozitiv                           | 2 bytes    | \(0\) până la \(2^{16} - 1\)                     |
| **`long int`**       | Număr întreg mai mare decât `int`                                            | 4 bytes    | \(-2^{31}\) până la \(2^{31} - 1\)               |
| **`float`**          | Număr real de precizie simplă, folosit pentru stocarea numerelor cu zecimale | 4 bytes    | Aproximativ \(10^{-38}\) până la \(10^{38}\)     |
| **`double`**         | Număr real dublu precizie (mai precis decât `float`)                         | 8 bytes    | Aproximativ \(10^{-308}\) până la \(10^{308}\)   |
| **`long double`**    | Număr real cu precizie extinsă                                               | 16 bytes   | Aproximativ \(10^{-4932}\) până la \(10^{4932}\) |
| **`char`**           | Caracter, poate stoca un caracter ASCII                                      | 1 byte     | \(-2^{7}\) până la \(2^{7} - 1\)                 |
| **`unsigned char`**  | Caracter, poate stoca un caracter ASCII                                      | 1 byte     | \(0\) până la \(2^{8} - 1\)                      |
| **`bool`**           | Valoare booleană, poate fi `true` sau `false`                                | 1 byte     | 0 sau 1                                          |

Observație: 1 byte = 8 biți, iar un bit poate fi 0 sau 1.

Exemplu de declarație și inițializare a unei variabile:

```cpp
#include <iostream>

using namespace std;

int main() {
    int a = 10;
    float b = 3.14;
    char c = 'A';
    bool d = true;

    cout << "a = " << a << endl;
    cout << "b = " << b << endl;
    cout << "c = " << c << endl;
    cout << "d = " << d << endl;

    return 0;
}
```

Observații:

- `#include <iostream>` este o directivă de preprocesare care include biblioteca standard de intrare/ieșire.
- `cout` este un obiect de tip `ostream` care afișează date pe consolă.
- `cin` este un obiect de tip `istream` care primește date de la utilizator.

### Compuse

| Tip de Date   | Descriere                                               | Dimensiune                                  |
|---------------|---------------------------------------------------------|---------------------------------------------|
| **`array`**   | Grup de elemente de același tip, accesate prin index    | Variabilă                                   |
| **`struct`**  | Grup de elemente de tipuri diferite, accesate prin nume | Variabilă                                   |
| **`class`**   | Similar cu `struct`, dar cu metode și membri privați    | Variabilă                                   |
| **`pointer`** | Variabilă care conține adresa unei alte variabile       | 4 bytes (pe 32-bit) sau 8 bytes (pe 64-bit) |

## Conversii de Tipuri

Conversia de tipuri este procesul de transformare a unei variabile dintr-un tip de date în altul.

### Implicită

Conversia implicită este realizată automat de către compilator.

```cpp
int a = 10;
float b = a; // implicit conversion
```

### Explicită (Casting)

Conversia explicită este realizată manual de către programator.

```cpp
float a = 3.14;
int b = (int) a; // explicit conversion
```

## Operatori

Operatorii sunt simboluri care efectuează operații pe variabile și valori.

### Aritmetici

| Operator | Descriere         | Exemplu | 
|----------|-------------------|---------|
| `+`      | Adunare           | `a + b` |
| `-`      | Scădere           | `a - b` |
| `*`      | Înmulțire         | `a * b` |
| `/`      | Împărțire         | `a / b` |
| `%`      | Restul împărțirii | `a % b` |

Exemplu de utilizare a operatorilor aritmetici:

```cpp
#include <iostream>

using namespace std;

int main() {
    int a = 10;
    int b = 3;

    cout << "a + b = " << a + b << endl;
    cout << "a - b = " << a - b << endl;
    cout << "a * b = " << a * b << endl;
    cout << "a / b = " << a / b << endl;
    cout << "a % b = " << a % b << endl;

    return 0;
}
```

### Relaționali

| Operator | Descriere         | Exemplu  |
|----------|-------------------|----------|
| `==`     | Egal              | `a == b` |
| `!=`     | Diferit           | `a != b` |
| `>`      | Mai mare          | `a > b`  |
| `<`      | Mai mic           | `a < b`  |
| `>=`     | Mai mare sau egal | `a >= b` |
| `<=`     | Mai mic sau egal  | `a <= b` |

Exemplu de utilizare a operatorilor relaționali:

```cpp
#include <iostream>

using namespace std;

int main() {
    int a = 10;
    int b = 3;

    cout << "a == b: " << (a == b) << endl;
    cout << "a != b: " << (a != b) << endl;
    cout << "a > b: " << (a > b) << endl;
    cout << "a < b: " << (a < b) << endl;
    cout << "a >= b: " << (a >= b) << endl;
    cout << "a <= b: " << (a <= b) << endl;

    return 0;
}
```

### Logici

| Operator | Descriere | Exemplu    |
|----------|-----------|------------|
| `&&`     | Și        | `a && b`   |
| `\|\|`   | Sau       | `a \|\| b` |
| `!`      | Negare    | `!a`       |

Exemplu de utilizare a operatorilor logici:

```cpp
#include <iostream>

using namespace std;

int main() {
    bool a = true;
    bool b = false;

    cout << "a && b: " << (a && b) << endl;
    cout << "a || b: " << (a || b) << endl;
    cout << "!a: " << !a << endl;

    return 0;
}
```

### Incrementare și Decrementare

| Operator | Descriere    | Exemplu |
|----------|--------------|---------|
| `++`     | Incrementare | `a++`   |
| `--`     | Decrementare | `a--`   |

Exemplu de utilizare a operatorilor de incrementare și decrementare:

```cpp
#include <iostream>

using namespace std;

int main() {
    int a = 10;

    cout << "a++: " << a++ << endl;
    cout << "a--: " << a-- << endl;

    return 0;
}
```

### Asignare

| Operator | Descriere             | Exemplu  |
|----------|-----------------------|----------|
| `=`      | Asignare              | `a = b`  |
| `+=`     | Adunare și asignare   | `a += b` |
| `-=`     | Scădere și asignare   | `a -= b` |
| `*=`     | Înmulțire și asignare | `a *= b` |
| `/=`     | Împărțire și asignare | `a /= b` |

Exemplu de utilizare a operatorilor de asignare:

```cpp
#include <iostream>

using namespace std;

int main() {
    int a = 10;
    int b = 3;

    a += b;
    cout << "a += b: " << a << endl;

    a -= b;
    cout << "a -= b: " << a << endl;

    a *= b;
    cout << "a *= b: " << a << endl;

    a /= b;
    cout << "a /= b: " << a << endl;

    return 0;
}
```

### Ternari

Operatorul ternar `?:` este un operator condițional care returnează o valoare în funcție de o expresie booleană.

```cpp
<expresie_booleana> ? <valoare_daca_adevarat> : <valoare_daca_fals>
```

### Indexare

Operatorul de indexare `[]` este folosit pentru a accesa elementele unui array sau ale unui vector.

```cpp
int a[5] = {1, 2, 3, 4, 5};
cout << a[2] << endl; // 3
```

### Bitwise

| Operator | Descriere           | Exemplu  |
|----------|---------------------|----------|
| `&`      | Și pe biți          | `a & b`  |
| `\|`     | Sau pe biți         | `a \| b` |
| `^`      | XOR pe biți         | `a ^ b`  |
| `~`      | Negare pe biți      | `~a`     |
| `<<`     | Shiftare la stânga  | `a << b` |
| `>>`     | Shiftare la dreapta | `a >> b` |

Exemplu de utilizare a operatorilor bitwise:

```cpp

#include <iostream>

using namespace std;

int main() {
    int a = 5; // 101
    int b = 3; // 011

    cout << "a & b: " << (a & b) << endl; // 001
    cout << "a | b: " << (a | b) << endl; // 111
    cout << "a ^ b: " << (a ^ b) << endl; // 110
    cout << "~a: " << (~a) << endl; // 11111111111111111111111111111010
    cout << "a << 1: " << (a << 1) << endl; // 1010
    cout << "a >> 1: " << (a >> 1) << endl; // 10

    return 0;
}
```

## Exerciții

| Nr. | Descriere                                                                                                                                                                         | Input           | Output                                          | Explicație                                                                                                                                 |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| 1.  | **Scrieți un program care primește de la tastatură un număr real `a` și afișează partea întreagă și cea fracționară a acestuia.**                                                 | `12.34`         | `Partea întreagă: 12, Partea fracționară: 0.34` | Partea întreagă a unui număr real este ce se află înainte de virgulă, iar partea fracționară este ce se află după virgulă.                 |
| 2.  | **Scrieți un program care primește de la tastatură trei numere reale `a`, `b`, și `c` și afișează maximul dintre ele folosind operatorul ternar `?:`.**                           | `5.5, 3.2, 7.8` | `Maximul este 7.8`                              | In exemplu dat, `7.8` este maximul dintre `5.5`, `3.2`.                                                                                    |
| 3.  | **Scrieți un program care primește de la tastatură un număr întreg `a` și afișează numărul necesar de biți pentru a reprezenta numărul `a` în binar.**                            | `10`            | `4 biți`                                        | În acest caz, numărul `10` în binar este `1010`, care necesită 4 biți.                                                                     |
| 4.  | **Scrieți un program care primește de la tastatură un număr întreg și afișează `true` dacă numărul este par și `false` în caz contrar, folosind operatorul de bitwise `&`.**      | `8`             | `true`                                          | În acest caz, `8` este par, deci output-ul ar trebui să fie `true`. Gândiți-vă la cum funcționează verificarea parității la nivel de biți. |
| 5.  | **Scrieți un program care primește de la tastatură un număr întreg și afișează `true` dacă numărul este pozitiv și `false` în caz contrar, folosind operatorul de bitwise `>>`.** | `-5`            | `false`                                         | Input-ul este `-5`, un număr negativ, astfel output-ul trebuie să fie `false`. Verificați semnul numărului folosind operații pe biți.      |

## Ați terminat laboratorul 1! Felicitări! 🎉

[Înapoi la Cuprins](#cuprins)