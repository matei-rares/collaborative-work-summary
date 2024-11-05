
//3
insertAll();
function insertAll(){
  db.retete.deleteMany({});
 db.retete.insertMany([
    {
      nume: "Pui cu legume",
      timp_preparare: 45,
      avg_rating: 4.5,
      ingrediente: [
        {
          nume_ingredient: "piept de pui",
          cantitate: 500,
          unitate_masura: "g",
        },
        {
          nume_ingredient: "morcovi",
          cantitate: 2,
          unitate_masura: "buc",
        },{
          nume_ingredient: "spanac",
          cantitate: 100,
          unitate_masura: "g",
        }
      ],
      pasi: "Se taie legumele si se prajesc impreuna cu puiul.",
      reviews: [
        {
          utilizator: "Alice Panini",
          comentariu: "Foarte gustos!",
          rating: 5,
          data_postare:ISODate("2014-03-03"),
        }
      ]
    },
    {
      nume: "Spaghete Carbonara",
      timp_preparare: 30,
      avg_rating: 4.8,
      ingrediente: [
        {
          nume_ingredient: "spaghete grau",
          cantitate: 400,
          unitate_masura: "g",
        },
        {
          nume_ingredient: "bacon",
          cantitate: 200,
          unitate_masura: "g",
        },
        {
          nume_ingredient: "oua",
          cantitate: 3,
          unitate_masura: "buc",
        },
      ],
      pasi: "Se fierb spaghetele, se prajeste bacon-ul, se amesteca cu ouale si se serveste cald.",
      reviews: [
        {
          utilizator: "Andrei Ramsay",
          comentariu: "Delicioasa reteta!",
          rating: 5,
          data_postare: ISODate("2024-04-25"),
        },
        {
          utilizator: "Gordon Ramsay",
          comentariu: "Foarte buna, o recomand!",
          rating: 4,
          data_postare: ISODate("2024-04-24"),
        },
      ],
    },
    {
      nume: "Salata de legume",
      timp_preparare: 20,
      avg_rating: 4.2,
      ingrediente: [
        {
          nume_ingredient: "rosii",
          cantitate: 3,
          unitate_masura: "buc",
        },
        {
          nume_ingredient: "castraveti",
          cantitate: 2,
          unitate_masura: "buc",
        },
        {
          nume_ingredient: "ceapa",
          cantitate: 1,
          unitate_masura: "buc",
        },
        {
          nume_ingredient: "masline",
          cantitate: 50,
          unitate_masura: "g",
        },
      ],
      pasi: "Se spala si se taie legumele, se amesteca si se condimenteaza dupa gust.",
      reviews: [
        {
          utilizator: "Florin Dumitrescu",
          comentariu: "O salata sanatoasa si gustoasa!",
          rating: 4,
          data_postare: ISODate("2024-04-23"),
        },
      ],
    },
    {
      nume: "Tort de ciocolata",
      timp_preparare: 90,
      avg_rating: 4.7,
      ingrediente: [
        {
          nume_ingredient: "ciocolata neagra",
          cantitate: 200,
          unitate_masura: "g",
        },
        {
          nume_ingredient: "zahar",
          cantitate: 150,
          unitate_masura: "g",
        },
        {
          nume_ingredient: "oua",
          cantitate: 4,
          unitate_masura: "buc",
        },
        {
          nume_ingredient: "faina",
          cantitate: 100,
          unitate_masura: "g",
        },
      ],
      pasi: "Se topeste ciocolata, se amesteca cu celelalte ingrediente, se coace si se decoreaza dupa gust.",
      reviews: [
        {
          utilizator: "Sorin Bontea",
          comentariu: "Un tort delicios, l-am savurat cu placere!",
          rating: 5,
          data_postare: ISODate("2024-04-22"),
        },
        {
          utilizator: "Alice Panini",
          comentariu: "Foarte bun, recomand!",
          rating: 4,
          data_postare: ISODate("2024-04-21"),
        },
      ],
    },
    {
      nume: "Supa crema de legume",
      timp_preparare: 45,
      avg_rating: 4.3,
      ingrediente: [
        {
          nume_ingredient: "cartofi",
          cantitate: 4,
          unitate_masura: "buc",
        },
        {
          nume_ingredient: "morcovi",
          cantitate: 3,
          unitate_masura: "buc",
        },
        {
          nume_ingredient: "ceapa",
          cantitate: 1,
          unitate_masura: "buc",
        },
        {
          nume_ingredient: "smantana",
          cantitate: 200,
          unitate_masura: "ml",
        },
      ],
      pasi: "Se pun legumele la fiert, se mixeaza si se adauga smantana.",
      reviews: [
        {
          utilizator: "Bogdan",
          comentariu: "O supa delicioasa si hranitoare!",
          rating: 5,
          data_postare: ISODate("2024-04-20"),
        },
      ],
    },
    {
      nume: "Lasagna",
      timp_preparare: 90,
      avg_rating: 4.6,
      ingrediente: [
        {
          nume_ingredient: "foi de lasagna",
          cantitate: 12,
          unitate_masura: "buc",
        },
        {
          nume_ingredient: "carne tocata",
          cantitate: 500,
          unitate_masura: "g",
        },
        {
          nume_ingredient: "sos de rosii",
          cantitate: 400,
          unitate_masura: "ml",
        },
        {
          nume_ingredient: "branza",
          cantitate: 300,
          unitate_masura: "g",
        },
      ],
      pasi: "Se prepara sosul de carne, se asambleaza straturile de lasagna si se coace la cuptor.",
      reviews: [
        {
          utilizator: "Catalin Scarlatescu",
          comentariu: "O reteta clasica, foarte buna!",
          rating: 4,
          data_postare: ISODate("2024-04-19"),
        },
        {
          utilizator: "Florin Dumitrescu",
          comentariu: "Delicioasa, o recomand!",
          rating: 5,
          data_postare: ISODate("2024-04-18"),
        },
      ],
    },
    {
      nume: "Chili con carne",
      timp_preparare: 60,
      avg_rating: 4.4,
      ingrediente: [
        {
          nume_ingredient: "carne tocata",
          cantitate: 600,
          unitate_masura: "g",
        },
        {
          nume_ingredient: "fasole rosie",
          cantitate: 400,
          unitate_masura: "g",
        },
        {
          nume_ingredient: "ardei iuti",
          cantitate: 2,
          unitate_masura: "buc",
        },
        {
          nume_ingredient: "rosii",
          cantitate: 3,
          unitate_masura: "buc",
        },
      ],
      pasi: "Se prajeste carnea, se adauga legumele si se lasa la fiert pana se obtine o consistenta cremoasa.",
      reviews: [
        {
          utilizator: "Mirel",
          comentariu: "Un chili delicios, cu un gust picant perfect!",
          rating: 5,
          data_postare: ISODate("2024-04-17"),
        },
      ],
    },
    {
      nume: "Prajitura cu mere",
      timp_preparare: 60,
      avg_rating: 4.1,
      ingrediente: [
        {
          nume_ingredient: "mere",
          cantitate: 5,
          unitate_masura: "buc",
        },
        {
          nume_ingredient: "faina",
          cantitate: 200,
          unitate_masura: "g",
        },
        {
          nume_ingredient: "zahar",
          cantitate: 150,
          unitate_masura: "g",
        },
        {
          nume_ingredient: "oua",
          cantitate: 3,
          unitate_masura: "buc",
        },
      ],
      pasi: "Se pun merele taiate in felii intr-o tava, se prepara aluatul si se toarna peste mere, apoi se coace.",
      reviews: [
        {
          utilizator: "Mirel",
          comentariu: "O prajitura delicioasa, cu un gust de casa!",
          rating: 4,
          data_postare: ISODate("2024-04-16"),
        },
        {
          utilizator: "Bogdan",
          comentariu: "Foarte buna, o recomand!",
          rating: 5,
          data_postare: ISODate("2024-04-15"),
        },
      ],
    },
    {
      nume: "Supa de legume",
      timp_preparare: 40,
      avg_rating: 4.2,
      ingrediente: [
        {
          nume_ingredient: "cartofi",
          cantitate: 3,
          unitate_masura: "buc",
        },
        {
          nume_ingredient: "morcovi",
          cantitate: 2,
          unitate_masura: "buc",
        },
        {
          nume_ingredient: "ceapa",
          cantitate: 1,
          unitate_masura: "buc",
        },
        {
          nume_ingredient: "telina",
          cantitate: 1,
          unitate_masura: "buc",
        },
      ],
      pasi: "Se pun legumele la fiert, se adauga condimente dupa gust si se serveste calda.",
      reviews: [
        {
          utilizator: "Gordon Ramsay",
          comentariu: "O supa sanatoasa si gustoasa!",
          rating: 4,
          data_postare: ISODate("2024-04-14"),
        },
      ],
    },
    {
      nume: "Spaghete cu fructe de mare",
      timp_preparare: 50,
      avg_rating: 4.5,
      ingrediente: [
        {
          nume_ingredient: "spaghete",
          cantitate: 350,
          unitate_masura: "g",
        },
        {
          nume_ingredient: "creveti",
          cantitate: 300,
          unitate_masura: "g",
        },
        {
          nume_ingredient: "midii",
          cantitate: 200,
          unitate_masura: "g",
        },
        {
          nume_ingredient: "sos de rosii",
          cantitate: 400,
          unitate_masura: "ml",
        },
      ],
      pasi: "Se fierb spaghetele, se prajesc fructele de mare, se amesteca cu sosul de rosii si se serveste cald.",
      reviews: [
        {
          utilizator: "Gordon Ramsay",
          comentariu: "O combinatie excelenta de spaghete si fructe de mare!",
          rating: 5,
          data_postare: ISODate("2024-04-13"),
        },
        {
          utilizator: "Catallin Scarlatescu",
          comentariu: "Foarte buna, o recomand!",
          rating: 4,
          data_postare: ISODate("2024-04-12"),
        },
        {
          utilizator: "Sorin Bontea",
          comentariu: "Foarte buna, o recomand!",
          rating: 4,
          data_postare: ISODate("2024-04-10"),
        },
      ],
    },
    {
      nume: "Burger de vita",
      timp_preparare: 30,
      avg_rating: 4.3,
      ingrediente: [
        {
          nume_ingredient: "carne de vita",
          cantitate: 400,
          unitate_masura: "g",
        },
        {
          nume_ingredient: "chifle burger",
          cantitate: 4,
          unitate_masura: "buc",
        },
        {
          nume_ingredient: "rosii",
          cantitate: 2,
          unitate_masura: "buc",
        },
        {
          nume_ingredient: "salata",
          cantitate: 1,
          unitate_masura: "buc",
        },
      ],
      pasi: "Se formeaza chiftelele din carne, se prajesc, se asamblea burgerul cu restul ingredientelor.",
      reviews: [
        {
          utilizator: "Andrei Ramsay",
          comentariu: "Un burger delicios, cu o carne suculenta!",
          rating: 5,
          data_postare: ISODate("2024-04-11"),
        },
      ],
    },
    {
      nume: "Salam uscat",
      timp_preparare: "3 luni",
      avg_rating: 4.6,
      ingrediente: [
        {
          nume_ingredient: "carne tocata",
          cantitate: 10,
          unitate_masura: "kg",
        }
      ],
      pasi: "Se amesteca carnea cu condimentele, se lasa la uscat timp de 3 luni.",
      reviews: [
       
      ],
    },
    {
      nume: "Casu Marzu",
      timp_preparare:null,
      avg_rating: 0,
      ingrediente: [
        {
          nume_ingredient: "branza",
          cantitate: 5,
          unitate_masura: "kg",
        }
      ],
      pasi: "Se lasa branza la fermentat cat se doreste, apoi se serveste cu insecte.",
      reviews: []
    },
    {
      nume: "Vin invechit",
      timp_preparare:null,
      avg_rating: 0,
      ingrediente: [
        {
          nume_ingredient: "vin rosu",
          cantitate: 5,
          unitate_masura: "l",
        },
        {
          nume_ingredient: "vin alb",
          cantitate: 5,
          unitate_masura: "l",
        },
        {
          nume_ingredient: "vin rose",
          cantitate: 5,
          unitate_masura: "l",
        }
      ],
      pasi: "Se lasa vinul intr-un butoi de lemn de preferat mai putin de 154 de ani, apoi se serveste la temperatura camerei.",
      reviews: []
    },
  ]);
  
}



