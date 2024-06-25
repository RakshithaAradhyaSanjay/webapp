import React from 'react';
import { Card, CardBody, Img,Container,Row,Col } from "react-bootstrap"; 
import Career from '../component/Career';
import CyberSecurity from '../component/CyberSecurity';
import DataScience from '../component/DataScience';
import FullStack from '../component/FullStack';

function AllCourses() {
  return (
 
    <> 
     <div  style={{ marginTop:"10%"}}>
    <Container >     
        <Row>
          <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
          <div >
          {<Career/>}
          </div>
           
          </Col>
          <Col style={{marginLeft:"10%"}} xs={12} sm={6} md={4} lg={2} className="mb-4">
          <div style={{height:'200px',width:'200px'}}>
<CyberSecurity/>
          </div>
          </Col>
          <Col style={{marginLeft:"10%"}} xs={12} sm={6} md={4} lg={2} className="mb-4">
          <div style={{height:'200px',width:'200px'}}>
<DataScience/>
          </div>
          </Col>
          <Col style={{marginLeft:"10%"}} xs={12} sm={6} md={4} lg={2} className="mb-4">
          <div style={{height:'200px',width:'200px'}}>
<FullStack/>
          </div>
          </Col>
        </Row>
      </Container>
      </div>
      </>
  )
}

export default AllCourses