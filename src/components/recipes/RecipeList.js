import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getRecipes, getCategory, searchNums } from './../../ducks/reducer'
import Recipe from './Recipe'
import styled from 'styled-components';
import FilterNav from '../recipes/Filter';
import { Link } from 'react-router-dom';
import AppHeader from '../fixed/Header';
import _ from 'lodash'

const Parent = styled.div`
display: flex;
flex-wrap: wrap;
width: 70vw;
justify-content: space-around;
margin: 10vh auto 0 auto;
`
const TopImg = styled.img`
position: relative;
margin-top: -3vh;
width:100%;
z-index: 10;
`


class RecipeList extends Component {
    constructor() {
        super();

        this.state = {
            recipes: [],
            isFiltered: false,
            filtered: [],
            searchNums: []
        }
    }

    componentDidMount() {
        let { recipes } = this.props;
        if (recipes.length === 0) {
            this.props.getRecipes().then(res => {
                this.updateState();
            });
        } else {
            this.updateState();
        }
        this.props.getCategory()
    }

    updateState = () => {
        let { recipes } = this.props;
        let shufRecipe = _.shuffle(recipes);
        this.setState({ recipes: shufRecipe });
    }

    updateSearch = (e) => {
        this.setState({ search: e.target.value })
    }
    theGreatFilter = (arr) => {
        console.log(this.props.searchArray, arr)
        let newFilter = [...this.state.filtered]
        if (arr.length > 0) {
            arr.forEach(val => {
                this.props.byCategory.forEach(r => {
                    if (r.categoryid === val) {
                        newFilter.push(r)
                    }
                })
            })
            this.setState({ filtered: newFilter })
        } else {
            this.setState({ filtered: [] })
        }
    }
    arraySearches = (x, y) => {
        console.log(this.props.searchArray)
        let newArray = [...this.props.searchArray]
        if (x) {
            newArray.push(y)
        } else {
            newArray.splice(newArray.indexOf(y), 1)
        }
        console.log(newArray)
        this.props.searchNums(newArray)
        return newArray
    }


    render() {
        let allRecipes = []
        if (this.state.filtered.length > 0) {
            let shuffled = _.shuffle(_.uniqBy(this.state.filtered, 'recipeid'))
            allRecipes = shuffled.map(e => {

                return (
                    <Link to={`/detail/${e.recipeid}`} style={{ textDecoration: 'none', color: 'black' }} key={e.recipeid}>
                        <Recipe
                            rating={e.rating}
                            name={e.name}
                            img={e.img}
                        />
                    </Link>
                )
            })
        } else {
            let shuffled = _.shuffle(this.props.recipes)
            allRecipes = this.state.recipes.map(e => {
                return (
                    <Link to={`/detail/${e.recipeid}`} style={{ textDecoration: 'none', color: 'black' }} key={e.recipeid}>
                        <Recipe
                            rating={e.rating}
                            name={e.name}
                            img={e.img}
                        />
                    </Link>
                )
            })
        }
        return (
            <div>
                <AppHeader />

                {/* <TopImg src='https://images.unsplash.com/photo-1529940316268-e245e031bcd1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5670e6ecbfb72bd2bf0b4166a1ba7367&auto=format&fit=crop&w=2850&q=80'
                /> */}

                <FilterNav
                    theGreatFilter={this.theGreatFilter}
                    isFiltered={this.state.isFiltered}
                    arraySearch={this.arraySearches}
                />

                {/* <input type='' className='' onChange={this.updateSearch.bind(this)}></input> */}
                <Parent>
                    {allRecipes}
                </Parent>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        recipes: state.recipes,
        byCategory: state.byCategory,
        searchArray: state.searchArray
    }
}

export default connect(mapStateToProps, { getRecipes, getCategory, searchNums })(RecipeList)