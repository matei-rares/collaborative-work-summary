function createIngrediente() {
  return db.createCollection("ingrediente", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["_id", "alergen", "proprietati"],
        properties: {
          _id: {
            bsonType: "string",
          },
          alergen: {
            bsonType: "bool",
          },
          proprietati: {
            bsonType: "object",
            required: ["vitamine", "minerale"],
            properties: {
              vitamine: {
                bsonType: "array",
                items: {
                  bsonType: "string",
                },
              },
              minerale: {
                bsonType: "array",
                items: {
                  bsonType: "string",
                },
              },
            },
          },
        },
      },
    },
  });
}

function createRetete() {
  return db.createCollection("retete", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "nume",
          "timp_preparare",
          "avg_rating",
          "ingrediente",
          "pasi",
          "reviews",
        ],
        properties: {
          nume: {
            bsonType: "string",
          },
          timp_preparare: {
            bsonType: ["int", "null", "string"],
          },
          avg_rating: {
            bsonType: ["double","null","int"],
          },
          ingrediente: {
            bsonType: "array",
            items: {
              bsonType: "object",
              required: ["nume_ingredient", "cantitate", "unitate_masura"],
              properties: {
                nume_ingredient: {
                  bsonType: "string",
                },
                cantitate: {
                  bsonType: "int",
                },
                unitate_masura: {
                  bsonType: "string",
                },
              },
            },
          },
          pasi: {
            bsonType: "string",
          },
          reviews: {
            bsonType: "array",
            items: {
              bsonType: "object",
              required: ["utilizator", "comentariu", "rating", "data_postare"],
              properties: {
                utilizator: {
                  bsonType: "string",
                },
                comentariu: {
                  bsonType: "string",
                },
                rating: {
                  bsonType: ["int","double"],
                },
                data_postare: {
                  bsonType: "date",
                },
              },
            },
          },
        },
      },
    },
  });
}

function createUtilizatori() {
  return db.createCollection("utilizatori", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["nume_utilizator", "parola", "email"],//, "retete_preferate"],
        properties: {
          nume_utilizator: {
            bsonType: "string",
          },
          parola: {
            bsonType: "binData",
          },
          email: {
            bsonType: "string",
          },
          // retete_preferate: {
          //   bsonType: "array",
          //   items: {
          //     bsonType: "object",
          //     required: ["reteta_id", "data_adaugare"],
          //     properties: {
          //       reteta_id: {
          //         bsonType: "objectId",
          //       },
          //       data_adaugare: {
          //         bsonType: "date",
          //       },
          //     },
          //   },
          // },
        },
      },
    },
  });
}


function createColectii() {
  createIngrediente();
  createRetete();
  createUtilizatori();
}

function dropIngrediente() {
  return db.ingrediente.drop();
}
function dropRetete() {
  return db.retete.drop();
}
function dropUtilizatori() {
  return db.utilizatori.drop();
}

function resetDatabase() {
  dropIngrediente();
  dropRetete();
  dropUtilizatori();
  createColectii();
}


function deleteDocs(){
  db.ingrediente.deleteMany({});
  db.retete.deleteMany({});
  db.utilizatori.deleteMany({});
}

//resetDatabase();