
//RETETE/////////////////////////////////////
try {
  // updateOne a unui atr dintr-un vect de subdocumente
  db.retete.updateOne(
    { nume: "Lasagna", "ingrediente.nume_ingredient": "foi de lasagna" },
    { $set: { "ingrediente.$.cantitate": 10 } }
  );
} catch (e) {
  print(e);
}

try {
  //adaugare elem intr-un vect de subdoc
  db.retete.updateOne(
    { nume: "Lasagna", "ingrediente.nume_ingredient": "branza" },
    {
      $addToSet: {
        ingrediente: {
          nume_ingredient: "sare",
          cantitate: 1,
          unitate_masura: "g",
        },
      },
    }
  );
} catch (e) {
  print(e);
}

try {
  //modificarea unui elem intr-un vect de subdoc
  db.retete.updateOne(
    { nume: "Lasagna", "reviews.utilizator": "Catalin Scarlatescu" },
    { $set: { "reviews.$.rating": 5 } }
  );
} catch (e) {
  print(e);
}

try {
  //adaugare elem intr-un vect de subdoc
  db.retete.updateOne(
    { nume: "Spaghete Carbonara" },
    {
      $push: {
        reviews: {
          utilizator: "Florin Dumitrescu",
          comentariu: "Cam sarate!",
          rating: 1,
          data_postare: new Date(),
        },
      },
    }
  );
} catch (e) {
  print(e);
}
