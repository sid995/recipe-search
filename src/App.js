/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import './App.css';
import RecipeDetails from './components/RecipeDetails';
// import { recipes } from './tempList';
import RecipeList from './components/RecipeList';

class App extends Component {
  state = {
    recipes: [],
    url: 'https://www.food2fork.com/api/search?key=1642fcc46a1921e19df4e20e7deec490',
  };

  componentDidMount() {
    this.getRecipes();
  }

  async getRecipes() {
    try {
      const { url } = this.state;
      const data = await fetch(url);
      const jsonData = await data.json();
      this.setState({
        recipes: jsonData.recipes,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { recipes } = this.state;
    console.log(recipes);
    return (
      <>
        <RecipeList />
        <RecipeDetails />
      </>
    );
  }
}

export default App;
