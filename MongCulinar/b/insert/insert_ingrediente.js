
//1
insertAll();
function insertAll() {

   db.ingrediente.deleteMany({});

  db.ingrediente.insertMany([
    {
      _id: "oua",
      alergen: true,
      proprietati: {
        vitamine: ["A", "D"],
        minerale: ["Fier"],
      },
    },
    {
      _id: "lapte",
      alergen: true,
      proprietati: {
        vitamine: ["C", "D"],
        minerale: ["Calciu", "Proteine"],
      },
    },
    {
      _id: "arahide",
      alergen: true,
      proprietati: {
        vitamine: [],
        minerale: ["Fier", "Fosfor", "Calciu"],
      },
    },
    {
      _id: "soia",
      alergen: true,
      proprietati: {
        vitamine: [],
        minerale: ["Fier", "Calciu", "Magneziu"],
      },
    },
    {
      _id: "grau",
      alergen: true,
      proprietati: {
        vitamine: [],
        minerale: ["Fier", "Fosfor", "B6"],
      },
    },
    {
      _id: "morcovi",
      alergen: false,
      proprietati: {
        vitamine: ["A", "K"],
        minerale: ["Potasiu"],
      },
    },
    {
      _id: "spanac",
      alergen: false,
      proprietati: {
        vitamine: ["K", "Folic"],
        minerale: ["Fier"],
      },
    },
    {
      _id: "banane",
      alergen: false,
      proprietati: {
        vitamine: ["C", "B6"],
        minerale: ["Potasiu"],
      },
    },
    {
      _id: "piept de pui",
      alergen: false,
      proprietati: {
        vitamine: [],
        minerale: ["Proteine"],
      },
    },
    {
      _id: "pulpa de pui",
      alergen: false,
      proprietati: {
        vitamine: [],
        minerale: ["Proteine"],
      },
    },
    {
      _id: "fasole",
      alergen: false,
      proprietati: {
        vitamine: [],
        minerale: ["Fier", "Fosfor", "Magneziu"],
      },
    },
    {
      _id: "spaghete grau",
      alergen: true,
      proprietati: {
        vitamine: ["B6"],
        minerale: ["Fier", "Fosfor"],
      },
    },
    {
      _id: "bacon",
      alergen: true,
      proprietati: {
        vitamine: [],
        minerale: ["Proteina"],
      },
    },
    {
      _id: "rosii",
      alergen: false,
      proprietati: {
        vitamine: ["A", "C", "K"],
        minerale: [],
      },
    },
    {
      _id: "castraveti",
      alergen: false,
      proprietati: {
        vitamine: ["C", "K"],
        minerale: [],
      },
    },
    {
      _id: "ceapa",
      alergen: false,
      proprietati: {
        vitamine: ["C", "B6"],
        minerale: [],
      },
    },
    {
      _id: "masline",
      alergen: false,
      proprietati: {
        vitamine: [],
        minerale: ["Fier", "Calciu"],
      },
    },
    {
      _id: "ciocolata neagra",
      alergen: true,
      proprietati: {
        vitamine: [],
        minerale: ["Fier", "Magneziu", "Potasiu"],
      },
    },
    {
      _id: "zahar",
      alergen: false,
      proprietati: {
        vitamine: [],
        minerale: [],
      },
    },
    {
      _id: "faina",
      alergen: true,
      proprietati: {
        vitamine: [],
        minerale: [],
      },
    },
    {
      _id: "cartofi",
      alergen: false,
      proprietati: {
        vitamine: ["C", "B6"],
        minerale: ["Fier", "Potasiu"],
      },
    },
    {
      _id: "smantana",
      alergen: true,
      proprietati: {
        vitamine: ["A", "D"],
        minerale: ["Calciu"],
      },
    },
    {
      _id: "branza",
      alergen: true,
      proprietati: {
        vitamine: [],
        minerale: ["Calciu", "Proteine"],
      },
    },
    {
      _id: "foi de lasagna",
      alergen: true,
      proprietati: {
        vitamine: [],
        minerale: ["Fier", "Zinc"],
      },
    },
    {
      _id: "carne tocata",
      alergen: true,
      proprietati: {
        vitamine: [],
        minerale: ["Fier", "Proteine"],
      },
    },
    {
      _id: "sos de rosii",
      alergen: false,
      proprietati: {
        vitamine: ["A", "C"],
        minerale: ["Fier"],
      },
    },
    {
      _id: "fasole rosie",
      alergen: false,
      proprietati: {
        vitamine: ["B", "C"],
        minerale: ["Fier", "Fosfor"],
      },
    },
    {
      _id: "ardei iuti",
      alergen: false,
      proprietati: {
        vitamine: ["C"],
        minerale: ["Potasiu"],
      },
    },
    {
      _id: "mere",
      alergen: false,
      proprietati: {
        vitamine: ["C"],
        minerale: [],
      },
    },
    {
      _id: "telina",
      alergen: false,
      proprietati: {
        vitamine: ["K", "C"],
        minerale: ["Fosfor", "Potasiu"],
      },
    },
    {
      _id: "creveți",
      alergen: true,
      proprietati: {
        vitamine: ["B12", "B6"],
        minerale: ["Fier", "Zinc"],
      },
    },
    {
      _id: "midii",
      alergen: true,
      proprietati: {
        vitamine: ["B12"],
        minerale: ["Fier", "Seleniu"],
      },
    },
    {
      _id: "carne de vita",
      alergen: true,
      proprietati: {
        vitamine: ["B12", "B6"],
        minerale: ["Fier", "Zinc"],
      },
    },
    {
      _id: "chifle de burger",
      alergen: true,
      proprietati: {
        vitamine: [],
        minerale: ["Fier"],
      },
    },
    {
      _id: "salata",
      alergen: false,
      proprietati: {
        vitamine: ["A", "C", "K"],
        minerale: ["Fier", "Potasiu"],
      },
    },
    {
      _id: "salata verde",
      alergen: false,
      proprietati: {
        vitamine: ["A", "C", "K"],
        minerale: ["Fier", "Potasiu"],
      },
    },
  ]);
}
