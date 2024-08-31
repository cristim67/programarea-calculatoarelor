# Laborator 10

## Cuprins

- [Structuri](#structuri)
- [Enum](#enum)
- [Uniuni](#uniuni)
- [Clase](#clase)
- [Exercitii](#exercitii)

## Structuri

O structura este un tip de date definit de utilizator care poate contine mai multe tipuri de date diferite. O structura este un grup de variabile sub un singur nume.

### Declararea unei structuri

O structura se declara specificand cuvantul cheie `struct` urmat de numele structurii si lista de variabile.

```cpp
// Declararea unei structuri
struct Student {
    int id;
    char nume[50];
    float medie;
};
```

### Initializarea unei structuri

O structura se initializeaza specificand valorile membrilor.

```cpp
// Initializarea unei structuri
struct Student s = {1, "Popescu Ion", 9.75};
```

### Accesarea membrilor unei structuri
    
Membrilor unei structuri se acceseaza folosind operatorul `.`.

```cpp
// Accesarea membrilor unei structuri
cout << s.id << " " << s.nume << " " << s.medie << endl;
```

### Structuri imbricate

O structura poate contine alte structuri.

```cpp
// Declararea unei structuri imbricate
struct Adresa {
    char strada[50];
    int numar;
};

struct Student {
    int id;
    char nume[50];
    float medie;
    Adresa adresa;
};
```

## Enum

Un enum este un tip de date definit de utilizator care poate contine o lista de constante numerice. Un enum este un grup de constante sub un singur nume.

### Declararea unui enum

Un enum se declara specificand cuvantul cheie `enum` urmat de numele enum-ului si lista de constante.

```cpp
// Declararea unui enum
enum Zile {
    Luni,
    Marti,
    Miercuri,
    Joi,
    Vineri,
    Sambata,
    Duminica
};
```

### Initializarea unui enum

Un enum se initializeaza specificand una dintre constantele definite.

```cpp
// Initializarea unui enum
Zile zi = Luni;
```

### Accesarea membrilor unui enum

Membrilor unui enum se acceseaza folosind operatorul `.`.

```cpp
// Accesarea membrilor unui enum
cout << zi << endl;  // Afiseaza 0
```

## Uniuni

O uniune este un tip de date definit de utilizator care poate contine mai multe tipuri de date diferite, dar care poate avea o singura valoare la un moment dat. O uniune este un grup de variabile care folosesc aceeasi locatie de memorie.

### Declararea unei uniuni

O uniune se declara specificand cuvantul cheie `union` urmat de numele uniunii si lista de variabile.

```cpp
// Declararea unei uniuni
union Numar {
    int x;
    float y;
};
```

### Initializarea unei uniuni

O uniune se initializeaza specificand valorile membrilor.

```cpp
// Initializarea unei uniuni
union Numar n;
n.x = 10;
```

### Accesarea membrilor unei uniuni

Membrilor unei uniuni se acceseaza folosind operatorul `.`.

```cpp
// Accesarea membrilor unei uniuni
cout << n.x << endl;
```

## Clase

O clasa este un tip de date definit de utilizator care poate contine atat date cat si functii. O clasa este un grup de variabile si functii sub un singur nume.

### Declararea unei clase

O clasa se declara specificand cuvantul cheie `class` urmat de numele clasei si lista de variabile si functii.

```cpp
// Declararea unei clase
class Student {
    int id;
    char nume[50];
    float medie;

public:
    void afisare() {
        cout << id << " " << nume << " " << medie << endl;
    }
};
```

### Initializarea unei clase

O clasa se initializeaza specificand valorile membrilor.

```cpp
// Initializarea unei clase
Student s;
s.id = 1;
strcpy(s.nume, "Popescu Ion");
s.medie = 9.75;
```

### Accesarea membrilor unei clase

Membrilor unei clase se acceseaza folosind operatorul `.`.

```cpp
// Accesarea membrilor unei clase
s.afisare();
```

### Constructori

Un constructor este o functie membru a unei clase care este apelata atunci cand un obiect este creat. Constructorul are acelasi nume ca si clasa si nu are tip de returnare.

```cpp

// Declararea unei clase cu constructor
class Student {
    int id;
    char nume[50];
    float medie;

public:
    Student(int i, char n[50], float m) {
        id = i;
        strcpy(nume, n);
        medie = m;
    }

    void afisare() {
        cout << id << " " << nume << " " << medie << endl;
    }
};

// Initializarea unei clase cu constructor
Student s(1, "Popescu Ion", 9.75);
```

### Destructor

Un destructor este o functie membru a unei clase care este apelata atunci cand un obiect este distrus. Destructorul are acelasi nume ca si clasa, precedat de caracterul `~` si nu are tip de returnare.

```cpp
// Declararea unei clase cu destructor

class Student {
    int id;
    char nume[50];
    float medie;

public:

    Student(int i, char n[50], float m) {
        id = i;
        strcpy(nume, n);
        medie = m;
    }

    ~Student() {
        cout << "Obiectul a fost distrus" << endl;
    }

    void afisare() {
        cout << id << " " << nume << " " << medie << endl;
    }
};

// Initializarea unei clase cu destructor

Student s(1, "Popescu Ion", 9.75);
```

## Exercitii

## Exerciții

| Nr. | Descriere                                                                                                                                                 | Input                                                   | Output                                                   | Explicație                                                                                                                                                                 |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.  | **Creați o structură `Carte` care să conțină titlul, autorul și numărul de pagini. Inițializați și afișați valorile unei cărți.**                          | N/A                                                     | Afișează datele cărții                                    | Definiți structura, inițializați un obiect de tip `Carte`, apoi afișați titlul, autorul și numărul de pagini.                                                              |
| 2.  | **Creați o uniune `Numar` care poate stoca fie un întreg, fie un float. Inițializați ambele valori și observați ce se întâmplă.**                          | N/A                                                     | Afișează valorile stocate                                 | Declarați uniunea, inițializați valorile pentru int și float, afișați rezultatul și discutați efectul suprapunerii memoriei.                                                |
| 3.  | **Creați o clasă `Persoana` cu atribute private `nume` și `varsta`. Definiți un constructor care să inițializeze aceste atribute și o metodă pentru afișare.** | N/A                                                     | Afișează numele și vârsta                                 | Definiți clasa cu atributele menționate, creați un constructor și o metodă publică pentru afișarea atributelor.                                                           |
| 4.  | **Extindeți clasa `Persoana` cu un atribut `adresa` și un destructor care afișează un mesaj la distrugerea obiectului.**                                   | N/A                                                     | Afișează numele, vârsta și adresa, urmat de mesajul destructorului | Adăugați atributul `adresa`, modificați constructorul pentru a inițializa toate atributele, apoi implementați destructorul care afișează un mesaj la distrugerea obiectului. |
| 5.  | **Creați o structură `Student` care să conțină o structură `Adresa` (cu câmpurile stradă, oraș). Inițializați și afișați valorile pentru un student.**      | N/A                                                     | Afișează detaliile studentului                            | Definiți structurile `Student` și `Adresa`, inițializați un obiect `Student` cu o adresă și afișați toate valorile.                                                        |
| 6.  | **Creați o clasă `Carte` care să gestioneze o colecție de pagini (sub formă de string-uri). Implementați metode pentru adăugarea și afișarea paginilor.** | N/A                                                     | Afișează paginile cărții                                  | Definiți clasa `Carte`, cu o colecție privată de pagini (de tip vector sau array), și metode publice pentru adăugarea unei pagini și afișarea tuturor paginilor.             |
| 7.  | **Creați o clasă `Matrice` care să implementeze operațiile de adunare și înmulțire a două matrici folosind operatori supraîncărcați.**           | Două matrici                                             | Afișează rezultatul operațiilor                           | Definiți clasa `Matrice`, implementați constructori pentru inițializare, și supraîncărcați operatorii `+` și `*` pentru a efectua adunarea și înmulțirea a două obiecte `Matrice`. |
| 8.  | **Creați o clasă `Vector3D` pentru reprezentarea vectorilor în spațiul 3D. Implementați operațiile de adunare, scădere și produs scalar.**       | Două vectori 3D                                          | Afișează rezultatul operațiilor                           | Definiți clasa `Vector3D` cu atribute pentru coordonate, și implementați operatorii pentru adunare, scădere și produsul scalar al două obiecte `Vector3D`.                   |


[]: # (---)
[]: # (Sfarsit Laborator 10)
[]: # (---)
