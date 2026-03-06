const airzonesE = '/shared/json/airzones.json';
const flagsFolders = '/frontend/imgs/flags/';
const FIRCont = document.getElementById('FIRCont');
const ACCCont = document.getElementById('ACCCont');
const OCACont = document.getElementById('OCACont');


function renderZones(parent,arr){
	for(let a of arr){
		const airzoneCard = document.createElement('airzone-card');
		airzoneCard.dataset.icon =  flagsFolders+a.country+'.svg';
		airzoneCard.dataset.label = a.name;
		airzoneCard.dataset.icao = a.icao;

		parent.appendChild(airzoneCard);

	}
}


fetch(airzonesE).then(data => data.json()).then((data)=>{
	const firZones =data.filter((d)=> d.type == 'FIR');
	const accZones =data.filter((d)=> d.type == 'ACC');
	const ocaZones =data.filter((d)=> d.type == 'OCA');

	renderZones(FIRCont,firZones);
	renderZones(ACCCont,accZones);
	renderZones(OCACont,ocaZones);


})