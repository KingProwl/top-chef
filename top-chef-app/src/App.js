import React, { Component } from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, } from 'reactstrap';
import './App.css';
import json from './JSONFiles/lafourchette.json';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div class="page-header">
          <div class="pull-left">
          <h1>Top-chef project: Get the current deal for a French Michelin starred restaurants.</h1>
          </div>
          <div class="pull-right">
          <h3 class="text-right">by Paul Ghafari</h3>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm">
            {
              json.map(function(restaurant){
                return (
                  <Card className="cards">
                  <div class="card text-left border-success ">
                  <div class="card-header border-success ">

                    <ul class="nav nav-tabs card-header-tabs">
                      <li class="nav-item" >
                        <a class="nav-link active" >Offre</a>
                      </li>

                      <li class="nav-item" >
                        <a class="nav-link" href={restaurant.link}>Voir le deal sur Lafourchette.com</a>
                      </li>
                    </ul>

                  </div>
                  <div class="card-block">
                    <h4 class="card-title"> {restaurant.name}</h4>
                    
                    
                    <ul class="list-group list-group-flush border-primary">
                      <li class="list-group-item">Palmarès: {restaurant.stars} </li>
                      <li class="list-group-item">Ville: {restaurant.address.address_locality}, {restaurant.address.postal_code}</li>
                      <li class="list-group-item">Promotion(s): {restaurant.promotions}</li>
                    </ul>
                  </div>
                </div>
                </Card>
                );
              })
            }
            </div>
          </div>
        </div>        
      </div>
    );
  }
}


export default App;

