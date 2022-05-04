import React from 'react';
import PropTypes from 'prop-types';
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import CardGroup from 'react-bootsteap/CardGroup';
import './movie-card.scss'
import axios from 'axios';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    const defineGenre = () => {
 // axios.get('https://simonsmyflixapp.herokuapp.com/')
      //     .then(response => {}
      //     )
      //     .catch(error => {
      //       console.log(error);
      //     });
    };
    
    function isFeatured(val){
      if(val)
      return <strong>Available in Theaters</strong>;
      else
      return 'N/A in Theaters';
    }

    return (
      <Card>
        <Card.Img variant="top" src={movie.ImagePath} crossOrigin="anonymous" onClick={()=> onMovieClick(movie)} />
        <Card.Body>
          <Card.Title as="h5" classname="description">(movie.Title)</Card.Title>
          <Card.Text>{movie.Descrtiption}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush"> 
        <ListGroupItem key={movie._id}>Genre: {defineGenre()}</ListGroupItem>
        <ListGroupItem key={movie.A_Actors}>Actors;{}</ListGroupItem>
        <ListGroupItem key="theater" className="text-center">{isFeatured(movie.Featured)}</ListGroupItem>
        </ListGroup>
        <Card.Body className="d-flec justify-content-between">
          <Card.Link href="#">Add to favorites</Card.Link>
          <Card.Link href="#">Removie From Favorites</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}