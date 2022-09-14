import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  category: [],
  productInfo: [],
  quickView: false,
  loading: false,
  error: null,
  success: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsRequest: (state) => {
      state.loading = true;
    },

    getProductsSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.products = action.payload;
    },

    getProductsFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },

    getProductDetailsRequest: (state) => {
      state.loading = true;
    },

    getProductDetailsSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.productInfo = action.payload;
    },

    getProductDetailsFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },

    getQuickView: (state,action) => {
      state.quickView = true;
    },
    
    getProductByCategoryRequest: (state) => {
      state.loading = true;
    },

    getProductByCategorySuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.category = action.payload;
    },

    getProductByCategoryFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },

    clearErrors: (state) => {
      state.error = null;
    }
  },
});

export const fetchProduct = (query) => {
  return async (dispatch) => {
    try {
      dispatch(getProductsRequest());
      const options = {
        method: 'GET',
        url: `https://amazon-product-scrapper.p.rapidapi.com/search/${query}`,
        params: {api_key: '977c36656438366bf9d34cc870f99c22'},
        headers: {
          'X-RapidAPI-Key': 'd293de1820mshfc8264eb5112923p17bffajsn5b2f2d0f2991',
          'X-RapidAPI-Host': 'amazon-product-scrapper.p.rapidapi.com'
        }
      };
      await axios.request(options).then(function (response) {
        console.log(response.data);
        dispatch(getProductsSuccess(response.data));
      });

    } catch (error) {
      dispatch(getProductsFailure(error.message));
    }
  };
};


export const fetchProductDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getProductDetailsRequest());
      const options = {
        method: "GET",
        url: `amazon-ecommerce-data-scrapper.p.rapidapi.com/product/${id}`,
        headers: {
          'X-RapidAPI-Key': 'c236814f21mshc8c8d36d8d07882p10a561jsn9563df48a104',
          'X-RapidAPI-Host': 'amazon-ecommerce-data-scrapper.p.rapidapi.com'
        },
      };
      await axios.request(options).then(function (response) {
        console.log(response.data);
        dispatch(getProductDetailsSuccess(response.data));
      });
    } catch (error) {
      dispatch(getProductDetailsFailure(error.message));
    }
  }
}

export const fetchProductByCategory = (category) => {
  return async (dispatch) => {
    try {
      dispatch(getProductByCategoryRequest());
      const options = {
        method: 'GET',
        url: `https://amazon-product-scrapper.p.rapidapi.com/search/${category}`,
        params: {api_key: '977c36656438366bf9d34cc870f99c22'},
        headers: {
          'X-RapidAPI-Key': 'd293de1820mshfc8264eb5112923p17bffajsn5b2f2d0f2991',
          'X-RapidAPI-Host': 'amazon-product-scrapper.p.rapidapi.com'
        }
      };
      await axios.request(options).then(function (response) {
        console.log(response.data);
        dispatch(getProductByCategorySuccess(response.data.results));
      });

    } catch (error) {
      dispatch(getProductByCategoryFailure(error.message));
    }
  };
};






export const {getProductsRequest, getProductsSuccess, getProductsFailure, getProductDetailsFailure,
  getProductDetailsRequest, getProductDetailsSuccess, clearErrors, getQuickView,
  getProductByCategoryRequest, getProductByCategorySuccess, getProductByCategoryFailure
 } = productsSlice.actions;

export default productsSlice.reducer;
