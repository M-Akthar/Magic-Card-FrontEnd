import React, {Component} from 'react';
import './App.css';
import Card from './components/Card';

class App extends Component {

	cardData1 = {
		title: "White Fatalis",
		manaCost: "WUBRG",
		poster: "https://i.redd.it/5uqi7s09gkt21.jpg",
		type: "Elder Dragon",
		expansion: "MH2",
		abilities: "???",
		flavourText: "A legendary dragon. Capable of ending the world.",
		artistInfo: "Someone on the internet",
		powerToughness: "999/999"
	}

	cardData2 = {
		title: "Alatreon",
		manaCost: "WUBRG",
		poster: "https://vrcmods.com/imgs/OjcL8wPeoaS7.jpg",
		type: "Elder Dragon",
		expansion: "MH3",
		abilities: "???",
		flavourText: "A legendary dragon. Master of all Elements",
		artistInfo: "Someone on the internet",
		powerToughness: "999/999"
	}

	render(){
		return (
			<div className="container">
				<Card cardData = {this.cardData1} />
				<Card cardData = {this.cardData2} />
			</div>
		);
	}
}

export default App;
