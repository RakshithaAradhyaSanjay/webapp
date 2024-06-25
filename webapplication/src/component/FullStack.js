import React from 'react';
import { Card, CardBody, Img,Container,Row,Col } from "react-bootstrap";

function FullStack() {
  return (
    <> 
    <div  style={{marginLeft:"10%", marginTop:"10%"}}>
    <Container >
     
        <Row>
          <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
            <img style={{height:'200px',width:'200px'}} src="https://www.spec-india.com/wp-content/uploads/2020/06/Full_Stack.png"></img>
          </Col>
         
        </Row>
      </Container>
      </div>
      </>
  )
}

export default FullStack