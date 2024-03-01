// OrderSearch.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import OrderSearchForm from './OrderSearchForm'; // Adjust the path as needed
import OrderDetails from './OrderDetails'; // Adjust the path as needed
import Loader from './Loader';
import { authenticateAndFetchOrder } from '../util/api'; // Adjust the path as needed

const OrderSearch = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchAttempted(true);
    setIsLoading(true);
    // Simulate a delay of 2.5 seconds before fetching data
    setTimeout(async () => {
      const data = await authenticateAndFetchOrder(orderNumber);

      setOrderDetails(data); // Update the state with the fetched order details
      setIsLoading(false); // Stop showing loading text
    }, 2500); // 2500 milliseconds = 2.5 seconds
  };

  let orderData = null;
  if (
    orderDetails &&
    orderDetails.success &&
    orderDetails.data.salesOrders.length > 0
  ) {
    orderData = orderDetails.data.salesOrders[0];
  }

  return (
    <Container className='mt-5 d-flex flex-column justify-content-center align-items-center'>
      <h1 className='text-center display-6 mb-3'>
        Enter your order number below
      </h1>
      <OrderSearchForm
        orderNumber={orderNumber}
        setOrderNumber={setOrderNumber}
        handleSubmit={handleSubmit}
      />
      {searchAttempted && !isLoading && orderData && (
        <OrderDetails orderData={orderData} />
      )}
      {isLoading && <Loader />}
      {!isLoading && searchAttempted && !orderData && (
        <div>
          No order details available. Please check the order number and try
          again.
        </div>
      )}
    </Container>
  );
};

export default OrderSearch;
