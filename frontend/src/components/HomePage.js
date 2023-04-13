import React, { Component } from 'react';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import Room from './Room';
import { BrowserRouter, Route, Link, Redirect, Routes } from 'react-router-dom';


export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
               <Routes>
                    <Route path="/">
                        <Route index element={<p>This a is the home page</p>} />
                    </Route>
                    <Route path="/join" element={<RoomJoinPage />} />
                    <Route path="/create" element={<CreateRoomPage />} />
                    <Route path="/room/:roomCode" element={<Room />} /> 
                </Routes>
          </BrowserRouter>
        );
    }
}
