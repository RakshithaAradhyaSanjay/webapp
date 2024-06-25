import React, { Fragment, Link } from "react";
import { Card, CardBody, Img,Container,Row,Col } from "react-bootstrap";


function Career() {
  
  return ( <>  
 
  <div  style={{marginLeft:"10%", marginTop:"10%"}}>
  <Container >
   
      <Row>
        <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
          <img style={{height:'200px',width:'200px'}} src="https://www.careersingovernment.com/tools/wp-content/uploads/2015/10/career.jpg"></img>
        </Col>
       
      </Row>
    </Container>
    </div>
    </>
  );
}

export default Career;
