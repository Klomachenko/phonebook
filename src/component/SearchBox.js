import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const searchContact = (event) => {
    dispatch({
      type: 'SEARCH_CONTACT',
      payload: { keyword },
    });
  };
  return (
    <Row>
      <Col lg={10}>
        <Form.Control
          type='text'
          placeholder='이름을 입력해주세요'
          onChange={(event) => setKeyword(event.target.value)}
        />
      </Col>
      <Col lg={2}>
        <Button onClick={searchContact}>찾기</Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
