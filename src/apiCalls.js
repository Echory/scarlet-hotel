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
      // .then(response => errorHanding1(response))
      // .catch(err => {
      //     errorHandingLine.innerText = `You would love to have you stay with us. Please try again.` 
      // } );
}


export{fetchCustomerData, fetchBookingData, fetchRoomData, postBooking}