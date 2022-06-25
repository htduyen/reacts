import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
    const [cartIsShow, setcartIsShow] = useState(false);

    const showCartHandler = () => {
        setcartIsShow(true);
    };

    const hideCartHandler = () => {
        setcartIsShow(false);
    };

    return (
        <CartProvider>
            {cartIsShow && <Cart onCloseCart={hideCartHandler}></Cart>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals></Meals>
            </main>
        </CartProvider>
    );  
}

export default App;
