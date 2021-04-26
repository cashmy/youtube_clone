import React, { Component } from 'react';
import axios from 'axios';
import { MDBView } from "mdbreact";
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';



class App extends Component {

    state = {
        songs: []
    }

    componentDidMount() {
        this.getAllSongs();
    }

    async getAllSongs() {
        let response = await axios.get('http://127.0.0.1:8000/songs/')
        this.setState({ 
            songs: response.data
        })
    }
    
    render() {
        return (
            <div id="classicformpage">
                <Navbar />
                <MDBView>

                </MDBView>
                <Footer />
            </div>

        );
    }
}

export default App;