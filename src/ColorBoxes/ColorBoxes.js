import React, { Component } from 'react';
import Box from './Box';

import './ColorBoxes.css';

class ColorBoxes extends Component {
    static defaultProps = {
        colors: ["tomato", "slateblue", "bisque", "cadetblue", "grey", "lightgreen"]
    }
    render() {
        return (
            <div className="ColorBoxes">
                <h1>Color Boxes</h1>
                <div className="ColorBoxes-container">
                    <Box colors={this.props.colors} />
                    <Box colors={this.props.colors} />
                    <Box colors={this.props.colors} />
                    <Box colors={this.props.colors} />
                    <Box colors={this.props.colors} />
                    <Box colors={this.props.colors} />
                    <Box colors={this.props.colors} />
                    <Box colors={this.props.colors} />
                    <Box colors={this.props.colors} />
                    <Box colors={this.props.colors} />
                    <Box colors={this.props.colors} />
                    <Box colors={this.props.colors} />
                    <Box colors={this.props.colors} />
                    <Box colors={this.props.colors} />
                    <Box colors={this.props.colors} />
                    <Box colors={this.props.colors} />
                </div>
            </div>
        );
    }
}

export default ColorBoxes;
