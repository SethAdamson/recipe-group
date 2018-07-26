import axios from 'axios';
import _ from 'lodash';

let initialState = {
    user: undefined,
    favorites: [],
    myRecipes: [],
    recipes: [],
    byCategory: [],
    shopping: [],
    searchArray: []
};

const UPDATE_USER = 'UPDATE_USER';
const GET_RECIPES = 'GET_RECIPES';
const FULFILLED = '_FULFILLED';
const PENDING = '_PENDING';
const CAT_RECIPES = 'CAT_RECIPES'
const SEARCH_NUMS = 'SEARCH_NUMS'

export default function reducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case UPDATE_USER:
            return Object.assign({}, state, { user: payload });
        case GET_RECIPES + FULFILLED:
            return Object.assign({}, state, { recipes: payload });
        case CAT_RECIPES + FULFILLED:
            return Object.assign({}, state, { byCategory: payload });
        case SEARCH_NUMS:
            return Object.assign({}, state, { searchArray: payload })
        default:
            return state;
    }
}
export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user,
    }
}
export function getRecipes(recipes) {
    let allRecipes = axios.get('/api/recipes').then(res => res.data)
    return {
        type: GET_RECIPES,
        payload: allRecipes
    }
}
export function getCategory(recipes) {
    let catRecipes = axios.get('/api/recbycat').then(res => res.data)
    return {
        type: CAT_RECIPES,
        payload: catRecipes
    }
}
export function searchNums(num) {
    return {
        type: SEARCH_NUMS,
        payload: num
    }
}