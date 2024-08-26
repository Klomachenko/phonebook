import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactItem = () => {
  return (
    <Row>
      <Col lg={2}>
        <img
          style={{ width: '50px' }}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg'
          alt=''
        />
      </Col>
      <Col lg={10}>
        <div>이규민</div>
        <div>01000000000</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
