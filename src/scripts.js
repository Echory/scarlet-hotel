import './css/base.scss';

import Customer from './classes/Customer';
import Booking from './classes/Booking';
import Room from './classes/Room';
import Hotel from './classes/Hotel';
import {fetchCustomerData, fetchBookingData, fetchRoomData, postBooking} from './apiCalls';

import {
  showFutureTrips,
  showPastTrips,
  showTotalSpent,
  bookATrip,
  goToBookingPage,
  goToProfilePage,
  profileBtn,
  searchBtn,
  displayAvailability,
  bookRoomBtn,
  logoutBtn,
  logOut,
  loginButton,
  usernameInput,
  passwordInput,
  logIn,
  clearInputs,
  displayError
} from './domUpdates';

let bookings = [];
let rooms = [];
let currentCustomer;
let hotel;
let customerID;

async function setCustomerData() {
  const customerResponse = await fetchCustomerData(customerID)
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

function bookARoom() {
  let selectedDate = document.getElementById('datePicker');
  let formatDate = selectedDate.value.split('-').join('/');
  let selectedRoom = document.querySelector('input[name="bookRoomRadioBtn"]:checked')
  let selectedRoomNumber = selectedRoom.getAttribute('value')
  hotel.formatBookingInfo(currentCustomer, formatDate, selectedRoomNumber)
  postBooking(hotel.newBookingInfo)
  setData()
  goToProfilePage()
}

function logInCustomer(event) {
  event.preventDefault()
  let usersname = usernameInput.value
  let password = passwordInput.value
  
  if(usersname.startsWith('customer') && password === 'overlook2021'){
    customerID = parseInt(usersname.substring(8))  
    setData(customerID)
    logIn()
  } else {
    displayError()
  }
  clearInputs()
}

bookATrip.addEventListener('click', goToBookingPage);
profileBtn.addEventListener('click', goToProfilePage);
bookRoomBtn.addEventListener('click', bookARoom);
logoutBtn.addEventListener('click', logOut);
loginButton.addEventListener('click', (e) => {
  logInCustomer(e);
})
searchBtn.addEventListener('click', () => {
  displayAvailability(hotel)
});




