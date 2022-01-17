function fetchCustomerData(customerId) {
  return fetch(`http://localhost:3001/api/v1/customers/${customerId}`)
  .then(response => response.json())
  .catch(err => showError(err));
}

function fetchRoomData() {
  return fetch('http://localhost:3001/api/v1/rooms')
  .then(response => response.json())
  .catch(err => showError(err));
}

function fetchBookingData() {
  return fetch('http://localhost:3001/api/v1/bookings')
  .then(response => response.json())
  .catch(err => showError(err));
}

const postBooking = (booking) => {
  return fetch('http://localhost:3001/api/v1/bookings', {
      method: 'POST',
      body: JSON.stringify(booking),
      headers: {
          'Content-Type': 'application/json'
      }
      })
      .then((response) => response.json())
      .catch((error) => console.log(error));
}


export{fetchCustomerData, fetchBookingData, fetchRoomData, postBooking}