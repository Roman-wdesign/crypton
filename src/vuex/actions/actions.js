
import axios from "axios";

export default {
    GET_SEARCH_VALUE_TO_VUEX ({commit}, value) {
        commit('SET_SEARCH_VALUE_TO_VUEX', value)
    },
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

    ADD_FAVORITE_HERO({commit}, person) {
        commit('SET_PERSON', person)
    },
    DELETE_FROM_CART({commit}, index) {
        commit('REMOVE_FROM_CART', index)
    },
    INCREMENT_CART_ITEM({commit}, index) {
        commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({commit}, index) {
        commit('DECREMENT', index)
    },
}