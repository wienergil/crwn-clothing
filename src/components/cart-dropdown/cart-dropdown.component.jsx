import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import CartItem from "../cart-item/cart-item.componenet";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems ? cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
            )) : null}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropdown);