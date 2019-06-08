import React, { Component } from 'react';

import Coin from './Coin';

class CoinFlip extends Component {
    static defaultProps = {
        faces: ["heads", "tails"]
    }
    constructor(props) {
        super(props);
        this.state = {
            face: "heads",
            flips: 0,
            countHeads: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let idx = Math.round(Math.random());
        this.setState((prevState) => { return { 
            face: this.props.faces[idx],
            flips: prevState.flips + 1,
            countHeads: idx === 0 ? prevState.countHeads + 1 : prevState.countHeads
        }});
    }
    render() {
        let countTails = this.state.flips - this.state.countHeads;
        return (
            <div className="CoinFlip">
                <h1>Let's flip a coin!</h1>
                <Coin face={this.state.face} />
                <button onClick={this.handleClick}>Flip Me</button>
                <p>Out of {this.state.flips} flips, there have been {this.state.countHeads} heads and {countTails} tails.</p>
            </div>
        );
    }
}

export default CoinFlip;
