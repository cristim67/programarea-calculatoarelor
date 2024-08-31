# Laborator 11 - Clase: getteri, setteri, supraincarcare operatori

## Cuprins

- [Getteri si setteri](#getteri-si-setteri)
- [Supraincarcare operatori](#supraincarcare-operatori)
- [Exercitii](#exercitii)

## Getteri si setteri

Getterii si setterii sunt metode ale unei clase care permit accesul si modificarea membrilor privati ai clasei.

### Declararea unei clase

```cpp

#include <iostream>

class Student {
    private:
        int id;
        char nume[50];
        float medie;

    public:
        // Getteri
        int getId() {
            return id;
        }

        char* getNume() {
            return nume;
        }

        float getMedie() {
            return medie;
        }

        // Setteri
        void setId(int id) {
            this->id = id;
        }

        void setNume(const char* nume) {
            strcpy(this->nume, nume);
        }

        void setMedie(float medie) {
            this->medie = medie;
        }
};

int main() {
    Student s;

    s.setId(1);
    s.setNume("Popescu Ion");
    s.setMedie(9.75);

    std::cout << s.getId() << " " << s.getNume() << " " << s.getMedie() << std::endl;

    return 0;
}

```

## Supraincarcare operatori

Supraincarcarea operatorilor permite definirea unor operatii personalizate pentru obiectele unei clase.

### Declararea unei clase cu supraincarcare de operatori

```cpp

#include <iostream>

class Complex {
    private:
        float real;
        float imaginar;

    public:
        Complex(float real, float imaginar) {
            this->real = real;
            this->imaginar = imaginar;
        }

        Complex operator+(Complex c) {
            Complex rezultat(0, 0);

            rezultat.real = real + c.real;
            rezultat.imaginar = imaginar + c.imaginar;

            return rezultat;
        }

        void afisare() {
            std::cout << real << " + " << imaginar << "i" << std::endl;
        }
};

int main() {
    Complex c1(2, 3);
    Complex c2(4, 5);

    Complex c3 = c1 + c2;

    c3.afisare();

    return 0;
}

```

## Exercitii

| Nr. | Descriere                                                                                                                                                                      | Input                                                                                                    | Output                                    | Explicație                                                                                                                                                                                                                               |
|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.  | **Creați o clasă `Punct` care să reprezinte un punct în planul 2D. Implementați getteri și setteri pentru coordonatele `x` și `y`.**                                           | N/A                                                                                                      | Afișează coordonatele punctului           | Definiți clasa `Punct` cu atribute private `x` și `y`, implementați getteri și setteri pentru aceste coordonate, apoi creați un obiect și utilizați aceste metode pentru a afișa coordonatele.                                      |
| 2.  | **Extindeți clasa `Punct` pentru a include o metodă care calculează distanța dintre două puncte. Implementați această metodă folosind operatorul `distance` supraincarcat.** | Două puncte                                                                                              | Afișează distanța între cele două puncte  | Adăugați o metodă `distance` în clasa `Punct` care să calculeze distanța între două puncte folosind formula distanței Euclidiene. Utilizați operatorul `distance` pentru a calcula și a afișa această distanță.                        |
| 3.  | **Creați o clasă `Matrici` care să reprezinte o matrice de dimensiune `m x n`. Supraincarcați operatorii `+` și `*` pentru adunarea și înmulțirea a două matrici.**               | Două matrici de dimensiuni compatibile                                                                      | Afișează rezultatul adunării și înmulțirii | Definiți clasa `Matrici`, implementați constructori pentru inițializare, și supraincarcați operatorii `+` și `*` pentru a aduna și înmulți două matrici. Asigurați-vă că dimensiunile matricilor sunt compatibile pentru aceste operații. |
| 4.  | **Creați o clasă `Rational` pentru reprezentarea numerelor raționale. Supraincarcați operatorul `<<` pentru afișare și `>>` pentru citire. Implementați constructorul și getteri.** | N/A                                                                                                      | Afișează și citește numere raționale      | Definiți clasa `Rational` cu atribute pentru numărător și numitor. Supraincarcați operatorii `<<` și `>>` pentru afișare și citire, respectiv. Implementați constructorul pentru inițializare și getteri pentru accesarea valorilor.    |
| 5.  | **Creați o clasă `Data` care să reprezinte o dată (zi, lună, an). Supraincarcați operatorul `==` pentru compararea a două date și `++` pentru incrementarea zilei.**           | N/A                                                                                                      | Afișează data și test de comparație       | Implementați clasa `Data` cu atributele `zi`, `luna`, și `an`. Supraincarcați operatorii `==` pentru a compara două date și `++` pentru a incrementa ziua, având grijă la schimbarea lunii și anului atunci când se depășește ultima zi a lunii. |
| 6.  | **Creați o clasă `String` care să implementeze o versiune simplificată a unui șir de caractere. Supraincarcați operatorii `+` pentru concatenare și `[]` pentru accesarea caracterelor.** | N/A                                                                                                      | Afișează șirul rezultat                   | Definiți clasa `String` cu funcționalitatea de a adăuga două șiruri și de a accesa caractere la o anumită poziție folosind operatorii supraincarcați `+` și `[]`. Asigurați-vă că implementați corect gestionarea memoriei.              |
| 7.  | **Extindeți clasa `Complex` pentru a include metoda de multiplicare a două numere complexe și operatorul `==` pentru comparare.**                                           | Două numere complexe                                                                                     | Afișează rezultatul multiplicării și comparația | Modificați clasa `Complex` pentru a adăuga metoda de multiplicare și operatorul `==` pentru a compara două numere complexe. Implementați metodele și operatorii necesari pentru a efectua aceste operații și a afișa rezultatul.          |
| 8.  | **Creați o clasă `Lista` care să gestioneze o listă de numere întregi. Supraincarcați operatorul `[]` pentru accesarea elementelor și operatorul `+` pentru concatenarea a două liste.** | Două liste de numere întregi                                                                             | Afișează lista concatenată                | Definiți clasa `Lista` cu un vector de numere întregi și implementați operatorii `[]` pentru accesarea elementelor și `+` pentru concatenarea a două liste. Asigurați-vă că operatorul `+` creează o nouă listă cu toate elementele din cele două liste. |
