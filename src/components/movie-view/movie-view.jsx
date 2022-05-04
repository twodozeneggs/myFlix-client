import React from 'react';
import PropTypes from 'prop-types';
import {Card, ListGroup, ListGroupItem, Button, Row, Col, Image} from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import './movie-view.css'

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    const defineGenre = () =>{
      // axios.get('https://simonsmyflixapp.herokuapp.com/')
      //     .then(response => {}
      //     )
      //     .catch(error => {
      //       console.log(error);
      //     });
    };

    function isFeatured(val){
      if (val)
       return <strong>Available in Theathers</strong>;
       else
       return 'N/A in Theathers';
    }


    return (
      <Row className="w-100 justify-content-around mx-auto">
        <Col md={8}>   
			<ListGroup>
				<ListGroup.Item><h3>{movie.Title}</h3></ListGroup.Item>
				<ListGroup.Item>Genre: {defineGenre()}</ListGroup.Item>
				<ListGroup.Item>Actors:{}</ListGroup.Item>
				<ListGroup.Item>{isFeatured(movie.Featured)}</ListGroup.Item>
				<div>
					<ListGroup.Item className="w-100 d-flex justify-content-between">
						<Button variant="link text-muted">Add to favourites</Button>
						<Button variant="link text-muted">Remove from Favourites</Button>
					</ListGroup.Item>
				</div>

			</ListGroup>  
			<div className="p-5 h4 text-muted">
			{movie.Description}
			</div>  
        </Col>

		<Col md={4}> 
        	<Image className="poster" src={movie.ImagePath} crossOrigin="anonymous" onClick={() => onMovieClick(movie)}/>
        </Col>
		<Button variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>
    </Row>
    )};
}