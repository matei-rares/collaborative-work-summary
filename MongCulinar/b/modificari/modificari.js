///INGREDIENTE/////////////////////////////////////
//update un camp
db.ingrediente.updateOne({ _id: "branza" }, { $set: { alergen: false } });
//face toate mineralele cu litere mici
db.ingrediente.updateMany({}, [
  {
    $set: {
      "proprietati.minerale": {
        $map: {
          input: "$proprietati.minerale",
          in: { $toLower: "$$this" },
        },
      },
    },
  },
]);

//camp nou
db.ingrediente.updateOne(
    { "_id": "oua" },
    { 
      $set: {
        "calorii": 100,
      }
    }
  )
//modifica camp nou si adauga valori noi in vectori
  db.ingrediente.updateOne(
    { "_id": "oua" },
    { 
      $inc: {
        "calorii": 10,
      },
      $push: {
        "proprietati.vitamine": "B12",
        "proprietati.minerale": "Fosfor, Calciu, Magneziu",
      }
    }
  )
//sterge camp nou
  db.ingrediente.updateOne(
    { "_id": "oua" },
    { 
      $unset: {
        "calorii": 100,
      }
    }
  )
  
//goleste vector obligatoriu
  db.ingrediente.updateOne(
    { "_id": "oua" },
    { 
      $set: {"proprietati.vitamine":[]},
    }
  )



//UTILIZATORI/////////////////////////////////////
//update email
db.utilizatori.updateOne(
  { nume_utilizator: "Bogdan" },
  {
    $set: {
      email: "bogdann@gmail.com",
    },
  }
);
//update nume
db.utilizatori.updateOne(
    { nume_utilizator: "Bogdan" },
    {
      $set: {
        nume_utilizator: "Bogdan Draghici",
      },
    }
  );

//adaugare subdocument nou
  db.utilizatori.updateOne(
    { nume_utilizator: "Bogdan" },
    {
      $set: {
        date_personale: {
          zi_nastere: new Date("1999-01-01"),
          inaltime: 180,
          greutate: 80,
        },
      },
    }
  );

//incrementeaza valori din subdocument nou
  db.utilizatori.updateOne(
    { nume_utilizator: "Bogdan" },
    {
      $inc: {
        "date_personale.greutate": 30,
        "date_personale.inaltime": 5
      },
    }
  );

//sterge camp din subdocument
  db.utilizatori.updateOne(
    { nume_utilizator: "Bogdan" },
    {
      $unset: {
        "date_personale.greutate": ""
      },
    }
  );

//RETETE/////////////////////////////////////
//adaugare element nou 
db.retete.updateOne(
    { nume: "Spaghete Carbonara" },
    { $set: { calorii: 450 } }
  )
  //modificare element cautat
db.retete.updateOne(
  { nume: "Lasagna", "ingrediente.nume_ingredient": "foi de lasagna" },
  { $set: { "ingrediente.$.cantitate": 10 } }
);

//sterge comentariu unui utilizator
db.retete.updateOne(
    { nume: "Spaghete Carbonara" },
    { $pull: { reviews: { utilizator: "Andrei Ramsay" } } }
  )
//recalculare avg_rating
db.retete.updateOne(
    { nume: "Spaghete Carbonara" },
    [
      {
        $set: {
          avg_rating: {
            $avg: "$reviews.rating"
          }
        }
      }
    ]
  )