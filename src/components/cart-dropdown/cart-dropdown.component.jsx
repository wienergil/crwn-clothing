import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import CollectionItem from '../collection-item/collection-item'



import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems ? cartItems.map((item) => (
                <CollectionItem key={item.id} item={item} />
            )) : null}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})
export default connect(mapStateToProps)(CartDropdown);