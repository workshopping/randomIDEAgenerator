// JavaScript 
//for å generere ideene våres


function valg1(funksjon)
{  
return funksjon[Math.floor(Math.random()*funksjon.length)];     
}

function valg2(yrke)
{  
return yrke[Math.floor(Math.random()*yrke.length)];     
}

function valg3(basert)
{  
return basert[Math.floor(Math.random()*basert.length)];     
}


//Denne sier hva som er alternativene
var funksjon = [
	"Mediaplatform",
	"Sosialt medium",
	"Forum",
	"Forside",
	"Nettbutikk",
	"Infoside"
];

var yrke = [
	"begravelsesbyrå",
	"guitarbutikk",
	"grafiskdesign",
	"dyrepark",
	"dataselskap",
	"russisk propaganda",
	"konspirasjons teorier",
	"voksene memes",
	"memes"
];

var basert = [
	"bilde",
	"tekst",
	"medium",
	"videoer",
	"embeded lenker",
	"illustrasjoner",
	"grafisk design"
];
//Denne printer mulighetene

document.write(valg1(funksjon), " for ",valg2(yrke),",", " den skal støtte seg sterkt på bruken av ",valg3(basert));