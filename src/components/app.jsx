import React, { Component } from 'react';
import { MDBView, 
    MDBMask,
    MDBContainer, 
    MDBCard,
    MDBRow,
    MDBCol,
    MDBCardBody,
    MDBInput
} from "mdbreact";
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import VideoDisplay from './VideoDisplay/video_display'
import './app.css';


/*
The following is hierarchical view of how/where to place the developing components.
It simulates tables by repetitive placement of items to clearly show the intended "look and feel"

As the components are developed and integrated, this structure will be dramatically minimized.
*/

class App extends Component {

    render() {
        return (
            <div id="classicformpage" >
                <Navbar />
                <MDBView  >
                    <MDBMask className="d-flex justify-content-center gradient">
                        <MDBContainer className="col-md-12">
                            <MDBRow className="ml-2 mr-2 mt-5">
                                
                                <MDBCol className="col-md-9 mt-4">
                                    <MDBCard  className="gradient-custom">
                                        <MDBCardBody>
                                            <MDBRow className="ml-2">
                                                <MDBCol className="col-md-8">
                                                    <MDBRow>
                                                        {/* TODO: Need to add props to VideoDisplay component. Default is working */}
                                                        <VideoDisplay />
                                                    </MDBRow>
                                                    <MDBRow>
                                                        <MDBCard className="col-md-12 mb-2">
                                                            <MDBCardBody>
                                                                Comment Entry Form
                                                                <MDBInput>
                                                                    Comment
                                                                </MDBInput>
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                    </MDBRow>
                                                </MDBCol>

                                                <MDBCol className='col-md-4'>
                                                    <MDBCard>
                                                        <MDBCardBody>
                                                        Comment History Table
                                                        <MDBCard className="mb-3">
                                                            <MDBCardBody>
                                                                Comment
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                        <MDBCard className="mb-3">
                                                            <MDBCardBody>
                                                                Comment
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                        <MDBCard className="mb-3">
                                                            <MDBCardBody>
                                                                Comment
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                        <MDBCard className="mb-3">
                                                            <MDBCardBody>
                                                                Comment
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                        <MDBCard className="mb-3">
                                                            <MDBCardBody>
                                                                Comment
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                        <MDBCard className="mb-3">
                                                            <MDBCardBody>
                                                                Comment
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                </MDBCol>
                                            
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <MDBCol className="col-md-3 mt-4">
                                    <MDBCard>
                                        <MDBCardBody>
                                            Search Results Table goes here
                                            <MDBCard className="mb-3">
                                                <MDBCardBody>
                                                    Video Card data
                                                </MDBCardBody>
                                            </MDBCard>
                                            <MDBCard className="mb-3">
                                                <MDBCardBody>
                                                    Video Card data
                                                </MDBCardBody>
                                            </MDBCard>
                                            <MDBCard className="mb-3">
                                                <MDBCardBody>
                                                    Video Card data
                                                </MDBCardBody>
                                            </MDBCard>
                                            <MDBCard className="mb-3">
                                                <MDBCardBody>
                                                    Video Card data
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCardBody>
                                    </MDBCard>

                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
                <Footer />
            </div>

        );
    }
}

export default App;