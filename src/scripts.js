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
import Hotel from './classes/Hotel';
import {fetchCustomerData, fetchBookingData, fetchRoomData} from './apiCalls';


import {
  showFutureTrips,
  showPastTrips,
  showTotalSpent,
  bookATrip,
  goToBookingPage,
  goToProfilePage,
  profileBtn,
  searchBtn,
  displayAvailability
} from './domUpdates';

// searchBtn.addEventListener('click', searchRoomAvailability);

let bookings = [];
let rooms = [];
let currentCustomer;
let hotel;

async function setCustomerData() {
  const customerResponse = await fetchCustomerData(1)
  currentCustomer = new Customer(customerResponse)
  
  currentCustomer.setCustomerBookings(bookings)
  currentCustomer.setTotalSpent(rooms)
  showFutureTrips(currentCustomer)
  showPastTrips(currentCustomer)
  showTotalSpent(currentCustomer)
}

 async function setHotelData() {
  let roomsResponse = await fetchRoomData()
  rooms = roomsResponse.rooms.map(data => new Room(data))

  let bookingsResponse = await fetchBookingData()
  bookings = bookingsResponse.bookings.map(data => new Booking(data))

  hotel = new Hotel(rooms, bookings)
}

async function setData() {
  await setHotelData()
  setCustomerData()
}

setData()

bookATrip.addEventListener('click', goToBookingPage);
profileBtn.addEventListener('click', goToProfilePage);
searchBtn.addEventListener('click', () => {
  displayAvailability(hotel)
});




