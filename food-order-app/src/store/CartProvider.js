import CartContext from "./cart-context";

const CartProvider = (props) => {

    const addItemToCartHanldler = item => {

    }

    const removeItemFromCartHanldler = id => {
        
    }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHanldler,
        removeItem: removeItemFromCartHanldler
    }
    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};
export default CartProvider;
