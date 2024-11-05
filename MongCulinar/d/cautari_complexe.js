use("test");

//cursor

// afisare  minerale  si vitamine a tuturor ingredientelor  din toate retetele

function afisareProprietati() {
 db.retete.find().forEach(function (reteta) {
  print("Reteta: " + reteta.nume);
  print("Ingrediente: ");
  var names = reteta.ingrediente.map(function (ing) {
    return ing.nume_ingredient;
  });
  ingr = db.ingrediente.find({ _id: { $in: names } });
  ingr.forEach(function (ingredient) {
    print("  - " + ingredient._id);
    if (ingredient.proprietati.minerale.length <= 0) {
      print("    Nu are minerale");
    } else {
      print("    Vitamine: " + ingredient.proprietati.vitamine);
    }
    if (ingredient.proprietati.vitamine.length <= 0) {
      print("    Nu are vitamine");
    } else {
      print("    Minerale: " + ingredient.proprietati.minerale);
    }
  });

  print("-----------------------------------------------");
});
}

function timpCantitateTotal(ingredient = "oua") {
  //Cat timp si ce cantitate e nevoie ca sa faci toate retele care contin un ingredient ?
  var ingre = db.retete.find({ "ingrediente.nume_ingredient": ingredient });
  var timp = 0;
  var cantit = 0;
  var unitate = "";
  while (ingre.hasNext()) {
    var reteta = ingre.next();
    var ingrediente = reteta.ingrediente;

    timp += reteta.timp_preparare;

    for (i in ingrediente) {
      if (ingrediente[i].nume_ingredient == ingredient) {
        unitate = ingrediente[i].unitate_masura;
        cantit += ingrediente[i].cantitate;
      }
    }
  }
  print(
    "Pentru " +
      ingre.size() +
      " retete, e necesar " +
      timp +
      " minute si " +
      cantit +
      "(" +
      unitate +
      ")" +
      " " +
      ingredient
  );
  return;
}

//group, push/addFields, project, unwind, sort, limit

function clasamentIngrediente() {
  //Clasamentul ingredientelor ( care apar in retete)ordonat dupa review-ul mediu al retetelor in care apar
  return db.retete.aggregate([
    { $unwind: "$ingrediente" },
    {
      $group: {
        _id: "$ingrediente.nume_ingredient",
        avg_rating: { $avg: "$avg_rating" },
        users: { $addToSet: "$reviews.utilizator" },
      },
    },
    {
      $addFields: {
        users: {
          $reduce: {
            input: "$users",
            initialValue: [],
            in: { $concatArrays: ["$$value", "$$this"] },
          },
        },
      },
    },

    {
      $project: {
        ingredient: "$_id",
        avg_rating: 1,
        users: 1,
        _id: 0,
      },
    },
    { $sort: { avg_rating: -1 } },

    { $limit: 10 },
  ]);
}

//lookup
function clasamentUtilizatori() {
//clasamentul utilizatorilor dupa nr de review-uri date, prezentandu-se si id-ul acestora
return db.retete.aggregate([
  { $unwind: "$reviews" },
  
  {
    $lookup: {
      from: "utilizatori", 
      localField: "reviews.utilizator", 
      foreignField: "nume_utilizator",
      as: "userDetails" 
    }
  },
  
  { $unwind: "$userDetails" },
  { 
    $group: { 
      _id: {
        userId: "$userDetails._id", 
        username: "$userDetails.nume_utilizator"
      },
      reviewCount: { $sum: 1 } 
    } 
  },
  
  { 
    $sort: { reviewCount: -1 } 
  },
  
  {
    $project: {
      _id: 0, 
      userId: "$_id.userId", 
      username: "$_id.username", 
      reviewCount: 1 
    }
  }
])
}
clasamentUtilizatori();
///


function retetaCompleta(numeReteta = "Pui cu legume") {
  //Afisarea proprietatilor unei retete dupa numele ei
  return db.retete.aggregate([
    { $match: { nume: numeReteta } },

    {
      $lookup: {
        from: "ingrediente",
        localField: "ingrediente.nume_ingredient",
        foreignField: "_id",
        as: "ingredient_info",
      },
    },

    {
      $addFields: {
        ingrediente: {
          $map: {
            input: "$ingrediente",
            as: "ing",
            in: {
              $mergeObjects: [
                "$$ing",
                {
                  $arrayElemAt: [
                    {
                      $filter: {
                        input: "$ingredient_info",
                        cond: { $eq: ["$$this._id", "$$ing.nume_ingredient"] },
                      },
                    },
                    0,
                  ],
                },
              ],
            },
          },
        },
      },
    },
    { $project: { ingredient_info: 0 } },
  ]);
}
print();

