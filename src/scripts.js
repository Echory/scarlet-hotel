// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


// console.log('This is the JavaScript entry file - your code begins here.');
import Customer from './classes/Customer';
import Booking from './classes/Booking';
import Room from './classes/Room';
import {fetchCustomerData, fetchBookingData, fetchRoomData} from './apiCalls';


import {
  showFutureTrips
} from './domUpdates';

// searchBtn.addEventListener('click', searchRoomAvailability);

let bookings = [];
let rooms = [];
let currentCustomer;

async function fetchAndSetRoomData() {
  let roomsResponse = await fetchRoomData()
  rooms = roomsResponse.rooms.map(data => new Room(data))

}

async function fetchAndSetBookingData() {
  let bookingsResponse = await fetchBookingData()
  bookings = bookingsResponse.bookings.map(data => new Booking(data))
}

async function fetchAndSetCustomerData() {
  const customerResponse = await fetchCustomerData(1)
  currentCustomer = new Customer(customerResponse)

  currentCustomer.setCustomerBookings(bookings)
  currentCustomer.setTotalSpent(rooms)
  showFutureTrips(currentCustomer)

}

fetchAndSetRoomData()
fetchAndSetBookingData()
fetchAndSetCustomerData()
