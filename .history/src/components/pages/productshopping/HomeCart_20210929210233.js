import React from "react"
import { CartState } from "../context/Context"

const HomeCart = () =>{
    const {state} = CartState();
    console.log(state);

    return (
        <div>
            Home
        </div>
    )
};
export default HomeCart