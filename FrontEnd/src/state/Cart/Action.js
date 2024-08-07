import { api } from "../../config/apiConfi.js";
import {
ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType.js";

export const addItemToCart = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
  console.log(reqData);
  try {
    const { data } = await api.put("/api/cart/add", reqData);
    
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
    
  } catch (e) {
    dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: e.message });
  }
};

export const removeItemToCart = (reqData) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });

  try {
    const { data } = await api.delete(`/api/cart_items/${reqData.cartItemId}`);
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: e.message });
  }
};

export const updateItemToCart = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });
   
   const id= reqData.cartItemId;
   const dat= reqData.data;
 

  try {
    const { data } = await api.put(
      `/api/cart_items/${id}`,
     dat
    );
   console.log(data);
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: e.message });
  }
};

export const get = () => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });

  try {
    const { data } = await api.get(`/api/cart`);
    dispatch({ type: GET_CART_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_CART_FAILURE, payload: e.message });
  }
};

export const clearCart = () => async (dispatch) => {
  dispatch({ type: "CLEAR_CART_REQUEST"});

  try {
    const { data } = await api.put(`/api/cart/clear`);
    console.log("this is from clear cart redux");
    dispatch({ type: "CLEAR_CART_SUCCESS", payload: data });
  } catch (e) {
    dispatch({ type: "CLEAR_CART_FAILURE", payload: e.message });
  }
};
