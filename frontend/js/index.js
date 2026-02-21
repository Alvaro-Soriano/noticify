
(()=>{
const dashBoardCountries = document.getElementById('dashBoardCountries');
fetch('http://127.0.0.1:2000/getcountries').then(data => data.json()).then((d)=>{
	for(let flagElem of d){
		const flagCont = document.createElement('div');
		flagCont.classList.add('flagCont');
		const flag = document.createElement('img');
		flag.src= `http://127.0.0.1:2000/flags/${flagElem.ISO2}.svg`
		flagCont.appendChild(flag);
		dashBoardCountries.appendChild(flagCont);
	}


})
})()