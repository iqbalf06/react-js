import React from "react";
import hero from "../components/images/Frame 1.png";
import product1 from "../components/images/product1.png";
import product2 from "../components/images/product2.png";
import product3 from "../components/images/product3.png";
import product4 from "../components/images/product4.png";
import { Card, Button, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Product from '../components/Product'

const Home = () => {
  return (
    <div style={{marginTop:"100px"}}>
      <div className="px-5 pt-5 position-relative">
        <img className="img-fluid" src={hero} />
        <div
          className="position-absolute top-0 start-0 px-5"
          style={{ width: 800, marginLeft: "5%", marginTop: "10%" }}
        >
          <p className="h1 fw-bold text-white" style={{ fontSize: "60px" }}>
            WAYSBUCKS
          </p>
          <p
            className="text-white"
            style={{ fontSize: "24px", paddingTop: "3%" }}
          >
            Things are changing, but we’re still here for you
          </p>
          <p
            className="text-white"
            style={{ fontSize: "18px", width: 500, paddingTop: "3%" }}
          >
            
            We have temporarily closed our in-store cafes, but select grocery
            and drive-thru locations remaining open. <strong>Waysbucks</strong> Drivers is also
            available
          </p>
          <p
            className="text-white"
            style={{ fontSize: "24px", marginTop: "10%" }}
          >
            Let's Order ...
          </p>
        </div>
      </div>
      <p
        className="fw-bold"
        style={{
          color: "#BD0707",
          fontSize: "36px",
          marginLeft: "4%",
          marginTop: "3%",
        }}
      >
        Let's Order
      </p>
      <Product />
    </div>
  );
};

        // <Card
        //   className=""
        //   style={{
        //     width: "20rem",
        //     borderRadius: "14px",
        //     backgroundColor: "#F3CFC6",
        //   }}
        // >
        //   <Card.Img src={product2} />
        //   <Card.Body>
        //     <Card.Title>Ice Coffee Green Tea</Card.Title>
        //     <Card.Text>Rp. 31.000</Card.Text>
        //   </Card.Body>
        // </Card>
        // <Card
        //   className=""
        //   style={{
        //     width: "20rem",
        //     borderRadius: "14px",
        //     backgroundColor: "#F3CFC6",
        //   }}
        // >
        //   <Card.Img src={product3} />
        //   <Card.Body>
        //     <Card.Title>Hanami Latte</Card.Title>
        //     <Card.Text>Rp. 29.000</Card.Text>
        //   </Card.Body>
        // </Card>
        // <Card
        //   className=""
        //   style={{
        //     width: "20rem",
        //     borderRadius: "14px",
        //     backgroundColor: "#F3CFC6",
        //   }}
        // >
        //   <Card.Img src={product4} />
        //   <Card.Body>
        //     <Card.Title>Clepon Coffee</Card.Title>
        //     <Card.Text>Rp. 28.000</Card.Text>
        //   </Card.Body>
        // </Card>
export default Home;
