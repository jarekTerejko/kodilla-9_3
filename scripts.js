var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';
console.log(dinosaur); //triceratops małymi

dinosaur = dinosaur.toUpperCase();
console.log(dinosaur); // sprawdzam czy jest wielkimi literami

var text = text.replace('Velociraptor', dinosaur);
console.log(text); // zamiana Velociraptor na TRICERATOPS tylko ze w module bylo ze metoda zamienia ciag znakow na inny ciag znakow a ja wstawilem zmienna 

console.log(text.length/2); // polowa stringa txt - 72

var firstPartOfText = text.slice(0, 72);
console.log(firstPartOfText); // wyswietla pierwsza polowe
