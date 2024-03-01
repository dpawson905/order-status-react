import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function OrderSearchForm({
  orderNumber,
  setOrderNumber,
  handleSubmit,
}) {
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col
          lg={12}
          className='d-flex justify-content-center align-items-center gap-2 mb-4'
        >
          <Form.Group className='mb-3' controlId='orderId'>
            <Form.Control
              type='text'
              placeholder='Order Number'
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
            />
          </Form.Group>
          <Button variant='primary' type='submit' className='mb-3'>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
