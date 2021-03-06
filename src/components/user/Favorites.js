import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getFavs} from './../../ducks/reducer'
import Recipe from '../recipes/Recipe'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AppHeader from '../fixed/Header';
import Menu from '../fixed/Menu';
import Loading from '../fixed/Loading';

const Parent = styled.div`
min-height: 100vh;
width: 100vw;

.fav-title {
    margin: 0;
    padding: 48px 0;
    width: 100%;
    text-align: center;
}
`

const FavList = styled.div`
display: flex;
flex-wrap: wrap;
width: 70%;
justify-content: space-around;
margin-left: 15vw;
`



class Favorites extends Component {
    constructor() {
        super();

        this.state = {

            favorites: [],
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let { favorites } = this.props;
        if (favorites.length === 0) {
            this.props.getFavs(this.props.match.params.id).then(res => {
                this.updateState();
            });
        } else {
            this.updateState();
        }
    }

    updateState = () => {
        let { favorites } = this.props;
        this.setState({ favorites: favorites });
    }

    render() {
        let displayFavs = []
        let {favorites} = this.state;
        if (favorites.length > 0) {
            displayFavs = favorites.map(e => {
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
            <Parent style={{ backgroundColor: "#FBF8F3" }} >
                <Loading />
                <AppHeader fixed={true} />
                <Menu fixed={true} />
                <h1 className='fav-title'>My Favorites</h1>
                <FavList>
                    {displayFavs}
                </FavList>
            </Parent>
        )
    }
}

function mapStateToProps(state) {
    return {
        byCategory: state.byCategory,
        searchArray: state.searchArray,
        favorites: state.favorites,
    }
}

export default connect(mapStateToProps, { getFavs})(Favorites)