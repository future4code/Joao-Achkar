import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DivPlaylists = styled.div `
    border: 3px solid black;
    width: 300px;
    height: 600px;
    margin: 30px;

    
`


class GetPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: []
          }
    }

    componentDidMount() {
        this.getPlaylist() 

    }

    getPlaylist = () => {
        axios
        .get(
          'https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists', {

          headers: {
            auth: 'joaopfa-hamilton'
          }
    }
        ).then((response) => {
          console.log(response)
        }).catch(() => {
          console.log('error')
        })
      }

    render() {
        
    return (
        
        <DivPlaylists>
        {this.state.playlist.map ((playlist) => {
            return (
            <p>{playlist.name}</p>
            )
        })}
        </DivPlaylists>
        );
    }
  }
  
  export default GetPlaylist;