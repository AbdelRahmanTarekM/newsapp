import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// const url = 'http://localhost:3000/';

export default new Vuex.Store({
    state:{
        authToken: "",
        favorites: []
    },
    mutations: {
        setAuthToken(state,payload){
            console.log('store',payload);
            state.authToken = payload;
        },
        setFavorites(state, payload){
            state.favorites = payload;
        }
    },
    getters:{
        getAuthToken: state => state.authToken,
        getFavorites: state => state.favorites
    }
})