import React, { Component } from 'react';

class Card extends Component {
    
    cardData = this.props.cardData;

    render() {
        return (
            <div className="card mainCard">
                <div className="card-body">
                    
                    {/* Card Header */}
                    <div className="card cardHeader">
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-8">{this.cardData.title}</div>
                                    <div className="col-4">{this.cardData.manaCost}</div>
                                </div>
                            </div>
                        </div>    
                    </div>

                    {/* Image */}
                    <img src={this.cardData.poster} className="card-img-top cardImage" alt="..."></img>

                    {/* Image Footer */}
                    <div className="card imgFooter">
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-8">{this.cardData.type}</div>
                                    <div className="col-4">{this.cardData.expansion}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="card cardBody">
                        <div className="card-body">
                            <div className="container">
                                <p>{this.cardData.abilities}</p>
                                <p>{this.cardData.flavourText}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card cardFooter">
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-8">{this.cardData.artistInfo}</div>
                                    <div className="col-4">{this.cardData.powerToughness}</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default Card;