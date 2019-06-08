import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    render() {
        return (
            <div>
                <img className="Coin" src={`https://tinyurl.com/react-coin-${this.props.face}-jpg`} />
            </div>
        );
    }
}

export default Coin;