import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

import {SET_PEOPLE_TO_STATE} from './mutation-types'
import {SET_PERSON} from './mutation-types'
import {REMOVE_FROM_CART} from './mutation-types'
import {INCREMENT} from './mutation-types'
import {DECREMENT} from './mutation-types'


import {GET_PEOPLE_FROM_API} from './mutation-types'
import {ADD_FAVORITE_HERO} from './mutation-types'
import {DELETE_FROM_CART} from './mutation-types'
import {INCREMENT_CART_ITEM} from './mutation-types'
import {DECREMENT_CART_ITEM} from './mutation-types'

import {PEOPLE} from './mutation-types'
import {CART} from './mutation-types'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        people: [],
        cart: [],
        id: String,
        gender: String,
    },

    mutations: {

        [SET_PEOPLE_TO_STATE]: (state, people) => {
            state.people = people;
        },

        [SET_PERSON]: (state, person) => {
            if (state.cart.length) {
                let isPeopleExist = false;
                state.cart.map(function (item) {
                    if (item.name === person.name) {
                        isPeopleExist = true;
                        item.quantity++
                    }
                })
                if (!isPeopleExist) {
                    state.cart.push(person)
                }
            } else {
                state.cart.push(person)
            }

        },

        [REMOVE_FROM_CART]: (state, index) => {
            state.cart.splice(index, 1)
        },
        [INCREMENT]:(state, index) =>{
            state.cart[index].quantity++
        },
        [DECREMENT]:(state, index) =>{
          if ( state.cart[index].quantity > 1) {
              state.cart[index].quantity--
          }
        },
    },

    actions: {
        [GET_PEOPLE_FROM_API]({commit}) {
            const urlMain = 'https://swapi.dev/api'
            return axios(urlMain + '/people', {
                method: 'GET'
            })
                .then((response) => {
                    commit('SET_PEOPLE_TO_STATE', response.data.results);
                    return response;
                })
                .finally(() => console.log('%cData people loading is complete on VueX', 'background: #0096d3; color: #FFFFFFFF'))
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                })
        },

        [ADD_FAVORITE_HERO]({commit}, person) {
            commit('SET_PERSON', person)
        },
        [DELETE_FROM_CART]({commit}, index) {
            commit('REMOVE_FROM_CART', index)
        },
        [INCREMENT_CART_ITEM]({commit}, index) {
            commit('INCREMENT', index)
        },
        [DECREMENT_CART_ITEM]({commit}, index) {
            commit('DECREMENT', index)
        },
    },

    getters: {
        [PEOPLE](state) {
            return state.people;
        },
        [CART](state) {
            return state.cart
        }
    }
})

export default store;