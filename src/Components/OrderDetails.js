// OrderDetails.js
import React from 'react';
import Row from 'react-bootstrap/Row';
import { generateRandomNumber } from 'random-number-gen-kavindu';

export default function OrderDetails({ orderData }) {
  return (
    <>
      <Row>
        <h2 className='display-6 text-uppercase text-center mb-4'>
          Order Details for {orderData.billingAddress.firstName}{' '}
          {orderData.billingAddress.lastName}
        </h2>
        <div className='order-grid'>
          {orderData.fulfillments.map((fulfillment, index) =>
            fulfillment.method === 1 || fulfillment.method === 2 ? (
              fulfillment.lineItems.map(
                (item) =>
                  item.id !== 'SALESTAX' && (
                    <div
                      key={item.id + generateRandomNumber(1, 100)}
                      className='order-grid--box bg-success text-white shadow rounded'
                    >
                      <p className='lead text-center w-100 m-0 p-0'>
                        {item.description || 'N/A'}
                      </p>
                      <span>Item Number: {item.id || 'N/A'}</span>
                      <span>Qty: {item.quantity || 'N/A'}</span>
                      {fulfillment.status === 1 && (
                        <>
                          <span className='text-center w-100'>ASAP</span>
                          {item.quantity !== item.quantityCommitted && (
                            <span className='text-center w-100'>
                              Waiting on product to arrive at warehouse
                            </span>
                          )}
                          {item.quantity === item.quantityCommitted && (
                            <span className='text-center w-100'>
                              Product At Warehouse
                            </span>
                          )}
                        </>
                      )}
                      {fulfillment.status === 2 && (
                        <span className='text-center w-100'>
                          Awaiting Customer Call
                        </span>
                      )}
                      {fulfillment.status === 3 && (
                        <>
                          {item.quantity !== item.quantityCommitted ? (
                            <span className='text-center w-100'>
                              Waiting on product to arrive at warehouse
                            </span>
                          ) : (
                            <span className='text-center w-100'>
                              Product At Warehouse
                            </span>
                          )}
                        </>
                      )}
                      {fulfillment.status === 4 && (
                        <span className='text-center w-100'>
                          Pickup/Delivery Scheduled
                        </span>
                      )}
                      {fulfillment.status === 5 && (
                        <span className='text-center w-100'>
                          Picked up/Delivered
                        </span>
                      )}
                      {fulfillment.status === 6 && (
                        <span className='text-center w-100'>Item Canceled</span>
                      )}
                      {fulfillment.status > 6 && (
                        <span className='text-center w-100'>Contact Us</span>
                      )}
                    </div>
                  )
              )
            ) : (
              <p key={index}>This is Direct Ship or Take With</p>
            )
          )}
        </div>
      </Row>
    </>
  );
}
