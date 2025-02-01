










colectiile sa aiba valori pentru _id autodefinite (ObjectId) si/sau definite de utilizator
- atributele sa aiba tipuri scalare de tip String, Integer, Double, Boolean, Date/Timestamp si cel
putin unul din tipurile: Binary data sau Regular expression
- atribute de tip vector de valori scalare
- atribute de tip subdocument
- atribute de tip vector de subdocumente
- orice combinatie care e optima pentru problema de implementat
b) (2p) Operatii CRUD:
- inserarea datelor multiple in toate colectiile folosite
- modificarea si stergerea documentelor individuale
- actualizarea anumitor elemente din vectorii de subdocumente din colectiile folosite
c) (1.5p) Cautari simple:
- cautarea documentelor/subdocumentelor/elementelor din vector folosind find() cu diverse
optiuni pentru cautari in vectori/subdocumente, proiectia atributelor, valori null, atribute
inexistente, sortari
- cautare paginata pentru unele operatii de cautare (ca parametri se paseaza numarul de
documente pe pagina si numarul paginii)
d) (3.5p) Cautari complexe:
- folosirea cursorilor pentru find() pentru procesari suplimentare
- folosirea frameworkului aggregate (operatori de tip group, push/addFields, project, unwind, sort,
limit) si conceptul de pipeline pentru inlantuirea operatorilor
- folosirea operatorului $lookup pentru interogarea datelor din mai multe colectii
3. Creati scripturi pentru fiecare dintre operatiile implementate (acestea sa fie grupate in fisiere pe
directoare pe categoriile de cerinte de la punctul 2 – b, c, d)





1. Descriere proiectului
În era digitală, accesul rapid și facil la informație este esențial pentru utilizatori. Una dintre
cele mai populare cerințe ale utilizatorilor din ziua de zi este găsirea de rețete culinare. În acest
context, dezvoltarea unui mediu de stocare pentru o aplicație de rețete culinare devine o
necesitate. Proiectul si-a propus crearea unei baze de date dinamica care să sprijine o astfel de
aplicație, oferind utilizatorilor acces la o varietate vastă de rețete si detalii despre acestea,
posibilitatea de a căuta rețete în funcție de ingrediente, timp de preparare și preferințe dietetice.
Baza de date este proiectată pentru a asigura flexibilitate și scalabilitate, permițând
adăugarea continuă de noi rețete, actualizarea celor existente cat si extinderea proprietatilor
acestora. De asemenea, vom implementa funcții de căutare și filtrare, astfel încât utilizatorii să
poată găsi rapid rețetele care se potrivesc cel mai bine nevoilor lor specifice. În plus, vom
include opțiuni de evaluare și comentarii pentru a crea o comunitate interactivă și pentru a
îmbunătăți constant calitatea conținutului disponibil.
Prin acest proiect, se încearcă îmbunătățirea modului în care utilizatorii interacționează cu
modul de preparare a mâncării, oferindu-le un instrument digital eficient și prietenos care să le
îmbogățească experiența gastronomică. Scopul final este de a transforma gătitul într-o
activitate mai accesibilă și plăcută, facilitând explorarea și descoperirea de noi rețete și tehnici
culinare.
2. Structura bazei de date
Structura aleasă pentru baza de date este una modulară și interconectată, organizată în
jurul a trei colecții principale: ingrediente, rețete și utilizatori. Fiecare colecție îndeplinește un
rol specific și este proiectată pentru a se completa reciproc. Colecția "ingrediente" gestionează
detalii despre componentele individuale ale rețetelor, inclusiv proprietățile nutritive și
potențialii alergeni. Colecția "retete" centralizează informațiile despre rețete, incluzând liste de
ingrediente, pașii de preparare și recenziile utilizatorilor. Colecția "utilizatori" administrează
informațiile personale de autentificare ale clienților. Această structură permite o colaborare
eficientă între colecții, oferind astfel funcționalități extinse și o experiență personalizată și
intuitivă pentru utilizatori.
2.1. Ingrediente
Colecția "ingrediente" a fost aleasă pentru a organiza și gestiona toate informațiile despre
ingredientele utilizate în rețete. Fiecare document din această colecție conține detalii esențiale
despre un ingredient, inclusiv dacă acesta este un alergen și proprietățile sale nutritive
(vitamine și minerale). Această structură permite utilizatorilor să obțină informații detaliate
despre fiecare ingredient, ceea ce este esențial pentru persoanele cu alergii sau pentru cei care
doresc să își optimizeze dieta din punct de vedere nutrițional.
Fiecare document include precum indicatorul de alergen, reprezentat printr-un atribut de
tip bool, și proprietățile sale nutritive, reprezentate sub formă de obiect JSON, care conține
două atribute obligatorii: vitamine și minerale, fiecare fiind un array de string-uri. Această
structurăle permite utilizatorilor să acceseze și să interpreteze informațiile despre fiecare
ingredient în mod clar și precis. Acest nivel de detalii este crucial în special pentru persoanele
cu alergii alimentare sau care doresc să monitorizeze aportul nutritiv al dietelor lor.
2.2. Utilizatori
Aceasta colecție constituie un element fundamental în structura datelor aplicației,
având rolul de a gestiona și stoca informațiile asociate utilizatorilor. Fiecare document
conține date importante care includ numele de utilizator, adresa de email care sunt definite
de tipuri de date string si parolă reprezentata de binData asigurând integritatea acesteia.
Numele de utilizator din colecția "utilizatori" este utilizat în rețete pentru a
identifica clientul care a adăugat o recenzie.
2.3. Rețete
Colecția "retete" este centrală pentru aplicație, conținând toate informațiile despre
rețetele disponibile pentru utilizatori.
În cadrul fiecărui document, sunt incluse următoarele informații: numele rețetei
(string), timpul de preparare (int, string), rating-ul mediu (double, int, null), lista de
ingrediente (array de obiecte JSON). Fiecare obiect din lista de ingrediente conține atribute
precum numele ingredientului (string), cantitatea necesară (int) și unitatea de măsură
(string). Pașii de preparare sunt reprezentați printr-un atribut de tip "string", întrucât aici se
poate introduce un text pentru a descrie modul de preparare a mâncării.
Recenziile utilizatorilor sunt stocate într-un array de obiecte JSON, fiecare obiect
conținând atribute precum utilizatorul (string), comentariul (string), ratingul (int, double)
și data postării (date). Această structură detaliată și bine definită permite utilizatorilor să
găsească și să urmeze rețete, să-și împărtășească experiențele și să ofere feedback.
3. Operații
3.1. Creare colecții
Pentru început este nevoie sa avem structura bazei de date, astfel documentul
creare-colectii.js conține apelurile de funcții de creare a colecțiilor conform unui
$jsonSchema, astfel avem posibilitatea de a preciza tipurile de date ale atributelor si faptul
ca un atribut este sau nu obligatoriu.
Totodată in acest fișier se găsesc funcții de ștergere a unui document din colecție
pentru a reseta baza de date daca e nevoie in timpul testării.
3.2. Inserări
În directorul „b” se găsesc trei fișiere, fiecare conținând un script pentru adăugarea
unor documente utilizând comanda insertMany, conform structurii definite la punctul 3.1
pentru fiecare dintre colecțiile propuse.
3.3. Modificări
De asemenea, în directorul „b” se găsesc diverse modificări ale colecțiilor, inclusiv
ștergeri de documente. Aceste modificări sunt efectuate pentru a adăuga elemente noi sau
a elimina pe cele existente. Modificările eficiente includ: schimbarea emailului sau a
numelui de utilizator, adăugarea unui câmp de calorii la o rețetă sau a unei recenzii,
actualizarea cantităților de ingrediente sau a ratingului mediu.
În ceea ce privește ștergerile, acestea sunt realizate cu comenzi deleteOne, unde
documentele sunt identificate după ID în cazul ingredientelor, email pentru utilizatori și
nume pentru rețete.
3.4. Căutări Simple
Căutările simple sunt realizate prin intermediul unor condiții scurte împreună cu
comanda find(), pentru a găsi diferite detalii dorite, cum ar fi dacă un ingredient este
alergen sau rețetele care au un rating mai mare decât o limită specificată. De asemenea,
aici pot fi efectuate și căutări paginate pentru orice tip de cursor care deține mai multe
documente, prin precizarea acestuia, mărimea unei pagini si numărul paginii dorite.
3.5. Căutări complexe
În cadrul acestor căutări, s-au utilizat cursori imbricați pentru a afișa proprietățile
ingredientelor din toate rețetele și cursori simpli pentru a afișa de cât timp și ce cantitate
este necesară pentru prepararea tuturor rețetelor care conțin un anumit ingredient.
Prin utilizarea funcției aggregate, s-au îndeplinit cerințe specifice, cum ar fi:
clasamentul ingredientelor (care apar în rețete) ordonat după rating-ul mediu al rețetelor,
afișarea tuturor proprietăților în funcție de o rețetă dată, și clasamentul utilizatorilor după
numărul de comentarii.