import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import React from 'react'
import classes from './HeaderCardButton.module.css'
import CardIcon from'../Cart/CartIcon'

const HeaderCardButton = props => {
const cartctx = useContext(CartContext)

const numberOffCartItems = cartctx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
}, 0)


    return(
    <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon}>
            <CardIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOffCartItems}
        </span>
    </button>
    )
}

export default HeaderCardButton;