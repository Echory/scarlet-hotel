function fetchCustomerData() {
  return fetch('http://localhost:3001/api/v1/customers')
  .then(response => response.json())
  .catch(err => showError(err));
}

export{fetchCustomerData}