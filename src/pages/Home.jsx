import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../components/Product";
// import products from '../products'
import axios from "axios";
import { listProducts } from "../actions/productActions";

const Home = () => {
  // const [products, setProducts] = useState([])
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <main className="py-3">
        <Container>
          <h1>Latest Products</h1>
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            <Row>
              {products.map((product) => (
                <Col sm={12} md={6} lg={4} xl={3} key={product.product_id}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </main>
    </div>
  );
};

export default Home;
