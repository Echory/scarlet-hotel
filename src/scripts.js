// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


// console.log('This is the JavaScript entry file - your code begins here.');
import Customer from './classes/Customer';
import Booking from './classes/Booking';
import {fetchCustomerData, fetchBookingData, fetchRoomData} from './apiCalls';


import {

} from './domUpdates';

// searchBtn.addEventListener('click', searchRoomAvailability);

let bookings = [];
let roomsResponse = [];
let currentCustomer;

async function fetchData() {
  const customerResponse = await fetchCustomerData(1)
  currentCustomer = new Customer(customerResponse)
  
  let bookingsResponse = await fetchBookingData()
  bookings = bookingsResponse.bookings.map(data => new Booking(data))
  
  roomsResponse = await fetchRoomData()
  debugger
}

fetchData()
