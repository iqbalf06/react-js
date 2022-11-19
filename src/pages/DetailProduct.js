import React from "react";
import ProductImage from "../components/images/detailproduct1.png";
import Toping1 from "../components/images/Toping1.png";
import Toping2 from "../components/images/Toping2.png";
import Toping3 from "../components/images/Toping3.png";
import Toping4 from "../components/images/Toping4.png";
import Toping5 from "../components/images/Toping5.png";
import Toping6 from "../components/images/Toping6.png";
import Toping7 from "../components/images/Toping7.png";
import Toping8 from "../components/images/Toping8.png";
import { Card, Button, Stack, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../components/ListProduct";

function DetailProduct() {
  const { id } = useParams();
  const navigate = useNavigate()
  return (
    <div style={{marginTop:"8%"}}>
      <Card
        className="my-5"
        border="white"
        style={{ width: "1100px", height: "550px", margin: "auto" }}
      >
        <Row>
          <Card.Img
            style={{ width: "400px", height: "509px" }}
            src={products[id].order}
          />
          <Col>
            <Card.Body>
              <Card.Title
                className="fw-bold"
                style={{
                  fontSize: "48px",
                  marginBottom: "20px",
                  color: "#BD0707",
                }}
              >
                {products[id].name}
              </Card.Title>

              <Card.Text style={{ color: "#974A4A", fontSize: "24px" }}>
                Rp. {products[id].price}
              </Card.Text>
              <Card.Text
                className="fw-bold"
                style={{
                  color: "#974A4A",
                  fontSize: "24px",
                  marginTop: "70px",
                }}
              >
                Toping
              </Card.Text>

              <Row
                className="center"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <Col>
                  <img
                    src={Toping1}
                    style={{
                      width: "85px",
                      height: "65px",
                      paddingLeft: "20%",
                    }}
                  ></img>
                  <p style={{ fontSize: "14px" }}>Bubble Tea Gelatin</p>
                </Col>
                <Col>
                  <img
                    src={Toping2}
                    style={{
                      width: "85px",
                      height: "65px",
                      paddingLeft: "20%",
                    }}
                  ></img>
                  <p style={{ fontSize: "14px", paddingLeft: "31px" }}>
                    Manggo
                  </p>
                </Col>
                <Col>
                  <img
                    src={Toping3}
                    style={{
                      width: "85px",
                      height: "65px",
                      paddingLeft: "20%",
                    }}
                  ></img>
                  <p style={{ fontSize: "14px", paddingLeft: "14px" }}>
                    Green Coconut
                  </p>
                </Col>
                <Col>
                  <img
                    src={Toping4}
                    style={{
                      width: "85px",
                      height: "65px",
                      paddingLeft: "20%",
                    }}
                  ></img>
                  <p style={{ fontSize: "14px", paddingLeft: "18px" }}>
                    Boba Manggo
                  </p>
                </Col>
              </Row>
              <Row style={{ margin: "auto" }}>
                <Col>
                  <img
                    src={Toping5}
                    style={{
                      width: "85px",
                      height: "65px",
                      paddingLeft: "20%",
                    }}
                  ></img>
                  <p style={{ fontSize: "14px" }}>Bill Berry Boba</p>
                </Col>
                <Col>
                  <img
                    src={Toping6}
                    style={{
                      width: "88px",
                      height: "65px",
                      paddingLeft: "19%",
                    }}
                  ></img>
                  <p style={{ fontSize: "14px" }}>Kiwi Popping Pearl</p>
                </Col>
                <Col>
                  <img
                    src={Toping7}
                    style={{
                      width: "85px",
                      height: "65px",
                      paddingLeft: "20%",
                    }}
                  ></img>
                  <p style={{ fontSize: "14px" }}>Matcha Cantaloupe</p>
                </Col>
                <Col>
                  <img
                    src={Toping8}
                    style={{
                      width: "85px",
                      height: "65px",
                      paddingLeft: "20%",
                    }}
                  ></img>
                  <p style={{ fontSize: "14px" }}>Strawberry Popping</p>
                </Col>
                <Row>
                  <Col>
                    <p
                      className="fw-bold"
                      style={{
                        color: "#974A4A",
                        fontSize: "24px",
                        marginTop: "40px",
                      }}
                    >
                      Total
                    </p>
                  </Col>

                  <Col>
                    <p
                      className="fw-bold"
                      style={{
                        color: "#974A4A",
                        fontSize: "24px",
                        marginTop: "40px",
                        paddingLeft: "150px",
                      }}
                    >
                      Rp. 27.000
                    </p>
                  </Col>
                </Row>
              </Row>

              <div className="d-grid gap-2">
                <Button
                  className="text-white"
                  variant="primary"
                  size="lg"
                  style={{ backgroundColor: "#BD0707" }}
                  onClick={() => {
                    navigate(`/cart/`);
                  }}
                >
                  Add Cart
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default DetailProduct;
