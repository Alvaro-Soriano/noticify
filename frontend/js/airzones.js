const airzonesE = '/shared/json/airzones.json';
const flagsFolders = '/frontend/imgs/flags/';
const countryCont = document.getElementById('countryCont');

fetch(airzonesE).then(d => d.json()).then((d)=>{
	const countries = [...new Set(d.map((icao)=>icao.country))];
	for(let con of countries){
		const flagBlock = document.createElement('div');
		flagBlock.classList.add('flagBlock');
		const img = document.createElement('img');
		img.src = flagsFolders + con+'.svg';

		flagBlock.appendChild(img);

		countryCont.appendChild(flagBlock);
	}
	console.log(countries);
})