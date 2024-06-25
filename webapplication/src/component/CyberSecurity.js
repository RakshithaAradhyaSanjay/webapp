import React from 'react';
import { Card, CardBody, Img,Container,Row,Col } from "react-bootstrap";
function CyberSecurity() {
  return (
    <> 
  <div  style={{marginLeft:"10%", marginTop:"10%"}}>
  <Container >
   
      <Row>
        <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
          <img style={{height:'200px',width:'200px'}} src="https://firewall.firm.in/wp-content/uploads/2020/08/Cybersecurity-Best-Practices-for-Small-Businesses-2048x1158.jpg"></img>
        </Col>
       
      </Row>
    </Container>
    </div>
    </>
  )
}

export default CyberSecurity