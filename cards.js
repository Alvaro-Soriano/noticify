class NotiCards extends HTMLElement{
	constructor(){
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
		<style>
			@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css");
			@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');
			.notiCard{
				display: flex;
				border-radius: 10px;
				font-family: "Sora", sans-serif;
				font-optical-sizing: auto;
				font-style: normal;
				cursor:pointer;
			}
			.notiCard:hover{
				filter: brightness(92%);
			}


			.notiCardText{
				border: 2px solid hsl(0 0% 85%);
				background-color: white;
				width: 100%;
				border-radius: 10px;
				padding: 8px;
				display: flex;
				flex-direction: column;
				gap: 2px;
				min-width: 0;
			}
			.notiCardTitle,.notiCardType,.notiCardZone,.notiDates > span{
				font-weight: bold;
				white-space: nowrap;
				text-overflow: ellipsis;
				width: 100%;
				overflow: hidden;
				display: block;
			}

			.notiCardTitleCont{
				display:flex;
				align-items: center;
				gap: 5px;
			}
			.circle{
				width: 22px;
				height: 20px;
				border-radius: 50%;
				background-color:red;
			}
			.notiCardTitle{
				font-size: 22px;
				color: hsl(100 0% 20%);
			}
			.notiCardType{
				font-size: 15px;
				color: hsl(100 0% 27%);
			}
			.notiCardZone{
				font-size: 12px;
				color: hsl(100 0% 29%);
			}

			.notiDates{
				display: flex;
				gap: 5px;
				padding: 5px 0px;
			}
			.notiDates > span{
				width: 100%;
				padding: 5px;
				font-size: 13px;
				text-align: center;
				border-radius: 10px;
					background-color: hsl(0 0% 25%);
				color:white;
			}
			.tieneMap{
				background-color:hsl(0 0% 90%);
				color:hsl(0 0% 18%);
				border:2px solid  hsl(0 0% 85%);
				padding: 4px;
				font-size: 13px;
				border-radius:10px;
				text-align:center;
				font-weight:600;
			}
		</style>
		<div class="notiCard">
			<div class="notiCardText">
				<div class="notiCardTitleCont">
					<div class="circle"></div>
					<span class="notiCardTitle">00/0000</span>
				</div>
				<span class="notiCardType">NOTAM</span>
				<span class="notiCardZone">ZMA</span>
				<div class="notiDates">
					<span>DD/MM/YYYY HH:MI</span>
					<span>DD/MM/YYYY HH:MI</span>
				</div>
				<span class="tieneMap">Posee Coordenadas: <b>SI</b></span>
			</div>
		</div>`;
		/*
	background-color: #d1e8fe;
				color: #022b56;
		*/


	}
	connectedCallback() {
		const title = this.dataset.title;
		const type = this.dataset.type;
		const zone = this.dataset.zone;
		const sDate = this.dataset.startdate;
		const eDate = this.dataset.enddate;
		let color = '#1d6ebf';
		const status = this.dataset.status || 'A'; 

		if(status == 'M'){
			color ='#703aa6';
		}
		if(status == 'C'){
			color ='#E53935';
		}

		const circle = this.shadowRoot.querySelector('.circle');
		const notiCardTitle = this.shadowRoot.querySelector('.notiCardTitle');
		const notiCardType = this.shadowRoot.querySelector('.notiCardType');
		const notiCardZone = this.shadowRoot.querySelector('.notiCardZone');
		const startDate = this.shadowRoot.querySelector('.notiDates > span:nth-of-type(1)');
		const endDate = this.shadowRoot.querySelector('.notiDates > span:nth-of-type(2)');

		notiCardTitle.textContent = title;
		notiCardType.textContent = type;
		notiCardZone.textContent = zone;
		startDate.textContent = sDate;
		endDate.textContent = eDate;



		circle.style.setProperty('background-color',color,'important');


		



	}
}

class placeCard extends HTMLElement{
	constructor(){
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
		<style>
			@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css");
			.placeCard{
				display: flex;
				border-radius: 10px;
				font-family: "Sora", sans-serif;
				font-optical-sizing: auto;
				font-style: normal;
				cursor:pointer;
			}
			.placeCard:hover{
				filter: brightness(92%);
			}

			.placeCardText{
					border: 2px solid hsl(0 0% 85%);
					background-color: white;
					width: 100%;
					border-radius: 10px;
					padding: 4px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					gap: 2px;
					min-width: 0;
					border-left: none;
					border-top-left-radius: 0px;
					border-bottom-left-radius: 0px;
					font-size: 21px;
					color: hsl(100 0% 20%);
					font-weight: 500;
			}
			.placeCardIcon{
				font-size: 30px;
				padding: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
				color:white;
				background-color: #1d6ebf;
				border-top-left-radius: 10px;
				border-bottom-left-radius: 10px;
			}
		</style>
		<div class="placeCard">
			<div  class="placeCardIcon">
				<i class="fa-solid"></i>
			</div>
			<div class="placeCardText">
				
			</div>
		</div>
		`;
	}
	connectedCallback(){
		const placeCardIcon = this.shadowRoot.querySelector('.placeCardIcon > i');
		placeCardIcon.classList.add(this.dataset.icon);

		const placeCardText = this.shadowRoot.querySelector('.placeCardText');
		placeCardText.textContent = this.dataset.label;

		this.onclick = ()=>{
			window.location = this.getAttribute('href') ?? '#';
		}
		
	}
}

customElements.define('notice-card', NotiCards);
customElements.define('place-card', placeCard);
