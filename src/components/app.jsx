import React, { Component } from 'react';
import { MDBView, 
    MDBMask,
    MDBContainer, 
    MDBCard,
    MDBRow,
    MDBCol,
    MDBCardBody,
} from "mdbreact";
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import VideoDisplay from './VideoDisplay/video_display'
import SearchResultsTable from './SearchResults/search_results_table'
import './app.css';
import NavbarPage from './Navbar/navbar';
import AddEditComment from './CommentsCRUD/add_edit_comment';
import { CommentHistoryTable } from './CommentTable/comment_table';


/*
The following is hierarchical view of how/where to place the developing components.
It simulates tables by repetitive placement of items to clearly show the intended "look and feel"

As the components are developed and integrated, this structure will be dramatically minimized.
*/

class App extends Component {

    state = {
        searchText: '',
        selectedVideoId: '',
        related_yt_video_id: ''
    }

    // Callback handler for SearchResultTable Child component
    handleSearchResultsCallback = (video_id) => {
        this.setState({ selectedVideoId : video_id})
        this.setState({ related_yt_video_id : video_id})
    }

    handleCallback = (childData) => {
        this.setState({
            searchText: childData
        })
    }

    handleChange = (value) => {
        return () => {
          this.setState({
            searchText: value
          })
        }
      }

    render() {
     
        return (
            <div id="classicformpage" >
                <Navbar />
                <MDBView  >
                    <MDBMask className="d-flex justify-content-center gradient">
                        <MDBContainer className="col-md-12">

                            <NavbarPage parentCallback={this.handleCallback} />
                            <MDBRow className="ml-2 mr-2 mt-5">
                                <MDBCol className="col-md-9 mt-4">
                                    <MDBCard  >
                                        <MDBCardBody>
                                            <MDBRow className="ml-2">
                                                <MDBCol className="col-md-8">
                                                    <MDBRow>
                                                        <VideoDisplay yt_video_id={this.state.selectedVideoId || 'V65uAHzofbg'} />
                                                    </MDBRow>
                                                    <MDBRow>
                                                        <AddEditComment yt_video_id={this.state.selectedVideoId || 'V65uAHzofbg'} />
                                                    </MDBRow>
                                                </MDBCol>
                                                
                                                <CommentHistoryTable yt_video_id={this.state.selectedVideoId || 'V65uAHzofbg'}/>
                                            
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <SearchResultsTable search_text={this.state.searchText}
                                                    related_yt_video_id={this.state.related_yt_video_id || 'V65uAHzofbg'}
                                                    parentCallback={this.handleSearchResultsCallback} />

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