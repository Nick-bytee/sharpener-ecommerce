import React from "react";
import "./Card.css";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Container className="mt-3 card-container">
      <Row>
        <h2 className="text-center mt-2">{props.title}</h2>
        <hr />
        {props.data.map((product, index) => (
          <Col
            key={index}
            xs={6}
            md={6}
            lg={6}
            xl={6}
            className={`mb-4 card-main ${props.disabled ? "disabled" : ""}`}
          >
            {/* <Link
              to={`/product/details/${product.id}`}
              className="product-link"
            > */}
              <img
                className="img-fluid product-image hover-zoom"
                src={product.imageUrl}
                alt={product.title}
                loading="lazy"
              />
            {/* </Link> */}
            <div className="mt-2 text-center">
              <p className="mb-1 text-lg">{product.title}</p>
              <div className="d-flex justify-content-center">
                <p
                  className="text-secondary text-sm"
                  style={{
                    marginRight: "1rem",
                    textDecoration: "line-through",
                  }}
                >{`₹${+product.price + 200}.00`}</p>
                <p className="text-danger text-md">{`₹${product.price}.00`}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Card;