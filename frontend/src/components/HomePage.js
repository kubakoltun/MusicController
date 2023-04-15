import React, { Component } from 'react';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import Room from './Room';

import { Grid, Button, ButtonGroup, Typography } from '@material-ui/core'; 

import { BrowserRouter, Route, Link, Navigate, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCode: null,
        }
    }

    async componentDidMount() {
        fetch('/api/user-in-room')
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                roomCode: data.code,
            });
        });
    }

    renderHomePage() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12} align="center">
                    <Typography variant="h3" component="h3">
                        House Party
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <ButtonGroup disableElevation variant="contained" color="primary">
                        <Button color="primary" to='/join' component={ Link }>
                            Join a Room 
                        </Button>
                        <Button color="secondary" to='/create' component={ Link }>
                            Create a Room 
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        );
    }

    render() {
        return (
            <BrowserRouter>
               <Routes>
                    {/* render() method is not used in react18 i have to replace it with sometohng up to date
                        i need to replace it with createRoot() method but dont know how yet     
                    */}
                    <Route exact path="/" element={
                        this.state.roomCode ? (<Navigate to={`/room/${this.state.roomCode}`} />) : this.renderHomePage()
                    } />
                        {/* <Route index element={this.renderHomePage()} /> */}
                    <Route path="/join" element={<RoomJoinPage />} />
                    <Route path="/create" element={<CreateRoomPage />} />
                    <Route path="/room/:roomCode" element={<Room />} /> 
                </Routes>
          </BrowserRouter>
        );
    }
}

createRoot(document.getElementById('app')).render(<HomePage />);
