function fetchCustomerData() {
  return fetch('http://localhost:3001/api/v1/customers')
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

export{fetchCustomerData, fetchBookingData, fetchRoomData}