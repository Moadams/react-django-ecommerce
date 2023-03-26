import React, { useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { Link, useParams} from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
// import products from '../products'

const SingleProduct = () => {
  const {_id} = useParams()
  
  const [product, setProduct] = useState(null)

  // const product = products.find(product => product._id === _id)

  useEffect(()=>{
    const  getProduct = async () => {
      await axios.get(`https://cediapp.onrender.com/store/all-products/${_id}/`).then(response =>{
    
      
      setProduct(response.data)
      })
    }
    getProduct();
    console.log(product)
  },[_id])
  
  

  return (
    <div>
      
      <Container> 
        <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        <Row>
          <Col md={6}>
            {/* <Image src={product.image} alt={product.name} fluid /> */}
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <Rating value={product.review_rate} text={`${product.reviews_count} reviews`} color={'#f8e825'} />
              </ListGroup.Item>

              <ListGroup.Item>
                Price: GHS {product.price}
              </ListGroup.Item>

              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>

            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant = 'flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>GHS{product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.quantity_in_stock > 0 ? "In Stock" : "Out Of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  
                  <ListGroup.Item>
                    <Button className='btn-block' disabled={product.quantity_in_stock <= 0} type='button'>Add To Cart</Button>
                  </ListGroup.Item>

              </ListGroup>
            </Card>            
          </Col>
        </Row>
      
      </Container>
    </div>
  )
}

export default SingleProduct