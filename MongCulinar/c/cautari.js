
///CAUTARE SIMPLA/////////////////////////////////////////////////////////////////////////////////////////////


//ingredientele care au alergen
var ale=db.ingrediente.find({ alergen: true }, { _id: 1 });

//retete care au timpul de preparare necunoscut
var tim=db.retete.find({ timp_preparare: null });
//retete care au ratingul >= 4.5
var subdoc1 = db.retete.find({ "reviews.avg_rating": { $gt: 4.5 } });

//VECTORI

// ingredientele care contin vitaminele A sau B
var vec1=db.ingrediente.find({ "proprietati.vitamine": { $in: ["A", "B"] } }).sort({ _id: 1 });

//ingredientele care contin A si K
var vec2=db.ingrediente.find({ "proprietati.vitamine": { $all: ["A", "K"] } });

//retete care au 3 ingrediente
var vec3=db.retete.find({ ingrediente: { $size: 3 } }).sort({ nume: 1 });


//VECTORI SUBDOCUMENTE

//retete care contin oua
var subdoc = db.retete.find({ "ingrediente.nume_ingredient": "oua" }).sort({ nume: 1 });
//retete care au ratinguri de 4 
var subdoc2 = db.retete.find({ "reviews.rating": 4 },{});
//retete care contin usturoi si au ratingul >= 4
var subdoc3 = db.retete.find({ "ingrediente.nume_ingredient": "usturoi", "reviews.rating": { $gte: 4 } });



//ATRIBUTE NULE SI INEXISTENTE, SORTARE, PROIECTIE
var multiple=db.retete.find(
  {
    "ingrediente.nume_ingredient": { $in: ["oua", "usturoi"] },
    "ingrediente.cantitate": { $ne: null },
    "ingrediente.marime": { $exists: false },
  },
  { nume: 1, _id: 0, timp_preparare: 1 , ingrediente: 1 }
).sort({timp_preparare:1}); 

//atribute inexistente
var atrib1=db.utilizatori.find({ "retete_preferate.date_personale": {$exists:false} }); 
var atrib2=db.ingrediente.find({ "calorii": {$exists:true} }); 



/// CAUTARE PAGINATA/////////////////////////////////////////////////////////////////////////////////////////////

function cautarePaginata(cautari,size,page_no){
  if(page_no<1) throw new Error( "Numarul paginii trebuie sa fie mai mare decat 0");
  if(size<1) throw new Error("Size-ul trebuie sa fie mai mare decat 0");
  
  return cautari.skip(size*(page_no-1)).limit(size);
}

print()
// var cautari=db.retete.find({})
// cautarePaginata(cautari,2,1);

