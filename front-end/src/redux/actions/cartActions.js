import * as actionTypes from "./actionTypes";

export function addToCart(cartItem) {
    return { type: actionTypes.ADD_TO_CART, payload: cartItem }
}

export function removeFromCart(item) {
    return { type: actionTypes.REMOVE_FROM_CART, payload: item }
}