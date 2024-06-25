import React from 'react'
import { Card, CardBody, Img,Container,Row,Col } from "react-bootstrap";
function DataScience() {
  return (
    <> 
    <div  style={{marginLeft:"10%", marginTop:"10%"}}>
    <Container >
     
        <Row>
          <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
            <img style={{height:'200px',width:'200px'}} src="https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/5/0/950321c11d_50173256_data-science-1.jpg"></img>
          </Col>
         
        </Row>
      </Container>
      </div>
      </>
  )
}

export default DataScience