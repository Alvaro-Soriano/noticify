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
					background-color: hsl(0 0% 28%);
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
		const col = this.dataset.color || " hsl(0 0% 85%)";

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

		circle.style.setProperty('background-color',col,'important');


		

		console.log(notiIconType);


	}
}
customElements.define('notice-card', NotiCards);
