import axios from 'axios';
import { NasaApi } from 'services/nasa/nasaApi';
// import * as superagent from 'superagent';
// const API_BASE = '<API-URL/api/vi>'

import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS
} from 'store/mutationTypes';

const nasaApi = new NasaApi();

export const productActions = {
  allProducts ({commit}) {
    console.log('commit all products action');
    commit(ALL_PRODUCTS);

    nasaApi.getPictureOfTheDay('')
      .then(url => {
        console.log(`url ${url}`);
        commit(ALL_PRODUCTS_SUCCESS, url);
      });

    // Fetch actual products from the API
    // axios.get(`${API_BASE}/products`).then(response => {
    //   commit(ALL_PRODUCTS_SUCCESS, response.data)
    // })
  },
  productById ({commit}, payload) {
    commit(PRODUCT_BY_ID)
    // Fetch product by ID from API
    // axios.get(`${API_BASE}/products/${payload}`).then(response => {
    //   commit(PRODUCT_BY_ID_SUCCESS, response.data)
    // })
  },
  addProduct ({commit}, payload) {
    commit(ADD_PRODUCT)
    // Create a new product via API
    // axios.post(`${API_BASE}/products`, payload).then(response => {
    //   commit(ADD_PRODUCT_SUCCESS, response.data)
    // })
  },
  updateProduct ({commit}, payload) {
    commit(UPDATE_PRODUCT)
    // Update product via API
    // axios.put(`${API_BASE}/products/${payload._id}`, payload).then(response => {
    //   commit(UPDATE_PRODUCT_SUCCESS, response.data)
    // })
  },
  removeProduct ({commit}, payload) {
    commit(REMOVE_PRODUCT)
    // Delete product via API
    // axios.delete(`${API_BASE}/products/${payload}`, payload).then(response => {
    //   console.debug('response', response.data)
    //   commit(REMOVE_PRODUCT_SUCCESS, response.data)
    // })
  }
};
