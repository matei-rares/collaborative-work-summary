
//2
insertAll();

function insertAll() {
  db.utilizatori.deleteMany({}); 
  db.utilizatori.insertMany([
    {
      nume_utilizator: "Alice Panini",
      parola: BinData(0, "parola1"),
      email: "alice@example.com",
    },
    {
      nume_utilizator: "Andrei Ramsay",
      parola: BinData(0, "parola2"),
      email: "andrei_ram@example.com",
    },
    {
      nume_utilizator: "Gordon Ramsay",
      parola: BinData(0, "parola3"),
      email: "gordon_ram@example.com",
    },
    {
      nume_utilizator: "Florin Dumitrescu",
      parola: BinData(0, "parola4"),
      email: "flordind@example.com",
    },
    {
      nume_utilizator: "Sorin Bontea",
      parola: BinData(0, "parola5"),
      email: "sorinb@example.com",
    },
    {
      nume_utilizator: "Catalin Scarlatescu",
      parola: BinData(0, "parola5"),
      email: "catalins@example.com",
    },
    {
      nume_utilizator: "Bogdan",
      parola: BinData(0, "parola5"),
      email: "bogdand@example.com",
    },
    {
      nume_utilizator: "Mirel",
      parola: BinData(0, "parola5"),
      email: "mirelul@example.com",
    },
    {
      nume_utilizator: "Martinel",
      parola: BinData(0, "parola5"),
      email: "amrinel@example.com",
    },
  ]);
}



