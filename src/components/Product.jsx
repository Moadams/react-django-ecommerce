import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product.product_id}`}>
            <Card.Img src={product.image} />
        </Link>
        <Card.Body>
            <Link to={`/product/${product.product_id}`}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="div">
                <div className="my-3">
                    <Rating value={product.review_rate} text={`${product.reviews_count} reviews`} color={'#f8e825'} />
                </div>
            </Card.Text>

            <Card.Text as="h3">
                GHS{product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product