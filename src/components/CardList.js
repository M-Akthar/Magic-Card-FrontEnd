import React , {Component} from 'react';
import Axios from 'axios';
import Card from './Card';

class CardList extends Component {

    constructor(){
        super()
        this.state = {
            cards: []
        }
    }

    componentDidMount(){
        Axios.get("http://localhost:8080/card/getAll")
        .then(response => {
            const cardData = response.data;
            console.log(cardData);
            this.setState({
                cards: cardData 
            })
        })
    }

    render(){
        return(
            <div>
                {this.state.cards.map(item => <Card cardData = {item}/> )}
            </div>
        );
    }
}

export default CardList;