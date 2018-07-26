import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getRecipes } from './../../ducks/reducer'
import { Link } from 'react-router-dom'
import Recipe from './Recipe'
import styled from 'styled-components';
import FilterNav from '../recipes/Filter';
import AppHeader from '../fixed/Header';

const Parent = styled.div`
display: flex;
flex-wrap: wrap;
width: 80vw;
justify-content: space-around;
margin: 0 auto;
`
const TopImg = styled.img`
position: relative;
margin-top: -3vh;
width:100%;
`


class RecipeList extends Component {
    constructor() {
        super();

        this.state = {
            recipes: [],
            isFiltered: false

        }

    }

    componentDidMount() {
        this.setState({ recipes: this.props.recipes })
    }

    componentDidUpdate(props) {
        if (props.recipes !== this.props.recipes) {
            this.setState({ recipes: this.props.recipes })
        }
    }
    updateSearch(e) {
        this.setState({ search: e.target.value })
    }

    render() {
        let filteredRecipes = []
        if (this.state.isFiltered) {
            // filteredRecipes = this.state.recipes.filter(

            // ).map()
        } else {
            filteredRecipes = this.state.recipes
        }


        // let filteredSearch = this.state.recipes.filter(
        //     (recipe) => {
        //         return recipe.name.indexOf(this.state.recipes) !== -1;
        //     }
        // )

        // let x = this.state.recipes.filter(
        //     (recipe) => {
        //         return 
        //     }
        // )



        let allRecipes = filteredRecipes.map(e => {

            return (
                <Link to={`/detail/${e.recipeid}`} style={{ textDecoration: 'none', color: 'black' }} key={e.recipeid}>
                    <Recipe
                        rating={e.rating}
                        name={e.name}
                        img={e.img}
                    />
                </Link >
            )
        })
        return (
            <div>
                <AppHeader />
                {console.log(this.state)}
                <TopImg src='https://images.unsplash.com/photo-1529940316268-e245e031bcd1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5670e6ecbfb72bd2bf0b4166a1ba7367&auto=format&fit=crop&w=2850&q=80' alt='' />
                <FilterNav />
                {/* <input type='' className='' onChange={this.updateSearch.bind(this)}></input> */}
                <Parent>
                    {allRecipes}
                </Parent>
            </div >
        )
    }
}
function mapStateToProps(state) {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, { getRecipes })(RecipeList)