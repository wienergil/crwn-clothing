import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden, addItem } from '../../redux/cart/cart.actions'

const CartIcon = ({ toggleCartHidden, itemsNum, addItem, }) => (


    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count"> {itemsNum} </span>

    </div>

)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
    addItem: () => dispatch(addItem())

})
const mapStateToProps = ({ cart: { hidden } }) => ({
    hidden
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);