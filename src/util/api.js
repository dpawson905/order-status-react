// apiServices.js
async function authenticateAndFetchOrder(orderNumber) {
  const authUrl = 'https://api.storis.com/api/authenticate';
  const authHeader = process.env.REACT_APP_STORIS_AUTH;

  try {
    const authResponse = await fetch(authUrl, {
      method: 'POST',
      headers: {
        Authorization: authHeader,
      },
    });
    const authData = await authResponse.json();
    const accessToken = authData.token.access_token;
    return await fetchOrderDetail(orderNumber, accessToken);
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
}

async function fetchOrderDetail(orderNumber, accessToken) {
  const orderDetailUrl = `https://api.storis.com/api/Orders/Detail?OrderIds=${orderNumber}`;

  try {
    const orderResponse = await fetch(orderDetailUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const orderData = await orderResponse.json();
    return orderData;
  } catch (error) {
    console.error('Order fetch error:', error);
    return null;
  }
}

export { authenticateAndFetchOrder, fetchOrderDetail };
