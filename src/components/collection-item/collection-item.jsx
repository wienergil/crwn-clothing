import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'


const CollectionItem = ({ item, addItem }) => {

    return (

        <div className='collection-item' key={item.id}>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${item.imageUrl})`
                }} />
            <div className='collection-footer'>
                <span className='name'>{item.name}</span>
                <span className='price'>{item.price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}> Add to cart</CustomButton>
        </div>

    )

}


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))

})

export default connect(null, mapDispatchToProps)(CollectionItem);