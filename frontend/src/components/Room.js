import React, { Component } from 'react';

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votesToSkip: 2,
            guestCanPasue: flase,
            isHost: false,
        };
        this.roomCode = this.props.match.params.roomCode;
    }

    render () {
        return (
            <div>
                <h3>{roomCode}</h3>
                <p>Votes: {this.state.votesToSkip}</p>
                <p>Guest Can Pause: {this.state.guestCanPasue}</p>
                <p>Host: {this.state.isHost}</p>
            </div>
        );
    }
}