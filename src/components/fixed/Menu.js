import React, { Component } from 'react';
import Login from '../user/Login'
import axios from 'axios';
import recipedata from './recipedata';
import styled from 'styled-components';
import {connect} from 'react-redux';

const MenuLine = styled.div`
position: fixed;
left: 0;
height: 100%;
width: 6.5vw;
z-index: 100;
border-right: 1px solid #d3cec3;
`

const Parent = styled.div`
position: fixed;
left: 3vw;
width: 175px;
background: white;
padding-top: 30px;
transition: 1s;
`

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe: recipedata,
            loginToggle: false,
        }

    }

    toggle = () => {
        this.setState({loginToggle: !this.state.loginToggle});
    }

    // getSingle = () => {
    //     for(let i = 1; i < 10; i++){
    //         axios.get(`/recipe/random/${i}`).then(res => {
    //             console.log(res);
    //             axios.get('/recipe/lookup/'+ res.data.results[0].id).then(res => {
    //                 this.setState({recipe: res.data})
    //                 this.newRecipe();
    //             })
    //         })
    //     }
    // }

    // newRecipe = () => {
    //     let{recipe} = this.state;
    //     let name = recipe.title;
    //     let steps = recipe.analyzedInstructions.map(s => s.steps.map(e => e.step).join("*")).join("*");
    //     let ingredients = recipe.extendedIngredients.map(i => i.original).join("*");
    //     let rating = recipe.spoonacularScore;
    //         if(rating >= 80) rating = 5;
    //             else if(rating < 80 && rating >= 60) rating = 4;
    //             else if(rating < 60 && rating >= 40) rating = 3;
    //             else if(rating < 40 && rating >= 20) rating = 2;
    //             else rating = 1;
    //     let prepTime = recipe.readyInMinutes;
    //     let servings = recipe.servings;
    //     let cost = Math.floor(recipe.pricePerServing/100);
    //         if(cost >= 10) cost = 3;
    //             else if(cost < 10 && cost > 5) cost = 2;
    //             else cost = 1;
    //     let recipeImg = recipe.image;
    //     let spoonID = recipe.id;
    //     let dishType = recipe.dishTypes.join('*');
    //     let source = recipe.sourceName;
    //     let sourceURL = recipe.sourceUrl;

    //     axios.post('/api/addrecipe', {name, steps, ingredients, rating, prepTime, servings, cost, recipeImg, spoonID, dishType, source, sourceURL})
    //     // console.log(name, steps, ingredients, rating, prepTime, servings, cost, recipeImg, spoonID, dishType, source, sourceURL)
    //     }


    render() {
        console.log(this.state.loginToggle);
        let {loginToggle} = this.state;
        return (
            <MenuLine>
                <Parent>
                    <ul>Recipes</ul>
                    <ul>Classics</ul>
                    <ul>Seasonal</ul>
                    <ul>Healthy</ul>
                    <ul name='loginToggle' onClick={this.toggle}>Login/Sign Up</ul>
                    <Login loginToggle={loginToggle}/>
                    {/* <button className='getSingle' onClick={this.getSingle}>Get Random Recipes</button>
                    {this.state.recipe ? this.state.recipe.title : 'N/A'} */}
                </Parent>
            </MenuLine>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(Menu);