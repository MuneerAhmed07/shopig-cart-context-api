import { createContext, useContext, useReducer } from "react";

const cartContext = createContext();

const cartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return [...state, action.payload];
        case "REMOVE_FROM_CART":
            return state.filter((item) => item.id !== action.payload);
        default:
            throw new Error(`Unkown action type: ${action.type}`);
    }
}

const CartProvider = ({children}) => {

    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <cartContext.Provider value={{cart, dispatch}}>
       {children}
        </cartContext.Provider>
    )
}

export default CartProvider;

// custom Hook
export const useCart = () => {
    const context = useContext(cartContext);
    if(!context) {
        throw new Error ("useCart must be used withna cartprovider");
    }

    return context;
}