export const cartReducer = (state,action) => {
    switch (action.type){
        case "ADD_TO_CART":
            return { ...state, cart: [...state] }

        default:
            return state;
    }
}