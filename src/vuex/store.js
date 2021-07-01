import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        people: [],
        cart:[],
        id: String,
        gender: String,
    },
    mutations: {
        SET_PEOPLE_TO_STATE: (state, people) => {
            state.people = people;
        },
        SET_PERSON:(state, person) => {
            state.cart.push(person)
        },
        REMOVE_FROM_CART:(state, index) =>{
            state.cart.splice(index, 1)
        }
    },
    actions: {
        GET_PEOPLE_FROM_API({commit}) {
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

        ADD_FAVORITE_HERO({commit}, person){
            commit('SET_PERSON', person)
        },
        DELETE_FROM_CART({commit}, index){
            commit('REMOVE_FROM_CART', index)
        }
    },
    getters: {
        PEOPLE(state) {
            return state.people;
        },
        CART(state){
            return state.cart
        }
    }
})

export default store;