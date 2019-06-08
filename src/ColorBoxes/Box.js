import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
        };
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor() {
        let newColor, idx;
        do {
            idx = Math.floor(Math.random() * this.props.colors.length);
            newColor = this.props.colors[idx];
        } while (newColor === this.state.color)
        this.setState(prevState => { return {
            color: newColor
        }});
    }
    handleClick() {
        this.pickColor();
    }
    render() {
        return (
            <div className="Box" onClick={this.handleClick} style={{ backgroundColor: `${this.state.color}`}}></div>
        )
    }
}

export default Box;