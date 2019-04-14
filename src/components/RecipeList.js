import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
  render() {
    return (
      <>
        <h1>Hello from list</h1>
        <RecipeSearch />
        <Recipe />
      </>
    );
  }
}
