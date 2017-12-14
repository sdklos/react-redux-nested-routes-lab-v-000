import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPets } from '../actions';
import PetsNew from './PetsNew';
import PetsShow from './PetsShow';
import PetsList from '../components/PetsList';

class PetsPage extends Component {

  componentDidMount() {
    this.props.fetchPets();
  }

  render() {
    const { match, pets } = this.props
    return (
      <div>
        <PetsList pets={pets} />
        <Switch> {
          <div>
            <Route path={`${match.url}/new`} component={PetsNew} />
            <Route path={`${match.url}/:petId`} component={PetsShow}/>
            <Route exact path={match.url} render={() => (
             <h3>Pets Page.</h3> )}/>
          </div>
        }</Switch>
      </div>
    )};
  }

const mapStateToProps = (state, ownProps) => {
  return {
    pets: state.pets,
    petId: ownProps.match.params.petId
  };
}

export default connect(mapStateToProps, { fetchPets })(PetsPage);
