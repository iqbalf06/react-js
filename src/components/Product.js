import React from "react";
import { Card, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { products } from "./ListProduct";

export default function ListProduct() {
  return (
    <>
      <Stack direction="horizontal" gap={1} style={{ marginTop: "100px" }}>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            imgproduct={product.imgproduct}
            price={product.price}
          />
        ))}
      </Stack>
    </>
  );
}

function Product(props) {
  const navigate = useNavigate();
  return (
    <Stack
      direction="horizontal"
      gap={5}
      style={{ marginLeft: "3%", height: "100vh", marginTop: "-170px" }}
    >
      <Card
        key={props.id}
        style={{
          width: "20rem",
          borderRadius: "14px",
          backgroundColor: "#F6DADA",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`/product/${props.name}/${props.id}`);
        }}
      >
        <Card.Img src={props.imgproduct} />
        <Card.Body>
          <Card.Title style={{ color: "#BD0707" }}>{props.name}</Card.Title>
          <Card.Text style={{ color: "#BD0707" }}>Rp. {props.price}</Card.Text>
        </Card.Body>
      </Card>
    </Stack>
  );
}
