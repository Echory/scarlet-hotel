// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


// console.log('This is the JavaScript entry file - your code begins here.');
import Customer from './classes/Customer';
import {fetchCustomerData, fetchBookingData, fetchRoomData} from './apiCalls';


import {

} from './domUpdates';

// searchBtn.addEventListener('click', searchRoomAvailability);

let customers = [];
let bookingsResponse = [];
let roomsResponse = [];
let currentCustomer;

async function fetchData() {
  const customersResponse = await fetchCustomerData()
  customers = customersResponse.customers
  currentCustomer = new Customer(customers[0])
  
  bookingsResponse = await fetchBookingData()
  roomsResponse = await fetchRoomData()
  debugger
}

fetchData()
