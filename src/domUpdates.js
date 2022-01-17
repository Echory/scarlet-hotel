// import '../src/images/drink-icon.png';


// const searchRooms = document.getElementById('searchBtn');
const futureTrips = document.getElementById('futureTrips');
const pastTrips = document.getElementById('pastTrips');
// const totalCost = document.getElementById('totalCostArea');
const bookATrip = document.getElementById('bookTripBtn');
const profileBtn = document.getElementById('profileBtn');
const bookingPage = document.getElementById('bookingPage');
const profilePage = document.getElementById('profilePage');
const searchBtn = document.getElementById('searchBtn');
const datePicker = document.getElementById('datePicker');
const availableRoomsSection = document.getElementById('availableRoomsSection');
const roomTypeFilter = document.getElementById('roomFilter');
const singleCheckbox = document.getElementById('single')
const bookRoomBtn = document.getElementById('bookRoomBtn');

function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

function showFutureTrips(currentCustomer) {
  currentCustomer.futureBookings.forEach(booking => {
    return futureTrips.innerHTML += `
    <article class="future-trip-card">
    <p>Room Number: ${booking.roomNumber}</p>
    <p>Date: ${booking.date}</p>
    </article>
    `
  })
}

function showPastTrips(currentCustomer) {
  currentCustomer.previousBookings.forEach(booking => {
    return pastTrips.innerHTML += `
    <article>
    <p>Room Number: ${booking.roomNumber}</p>
    <p>Date: ${booking.date}</p>
    </article>
    `
  })
}

function showTotalSpent(currentCustomer) {
  totalCostArea.innerHTML += `
    <p>Total Spent: $${currentCustomer.totalSpent.toFixed(2)}</p>
    `
}

function goToBookingPage() {
  show(bookingPage)
  hide(profilePage)
}

function goToProfilePage() {
  hide(bookingPage)
  show(profilePage)
}

function displayAvailability(hotel) {
 show(bookRoomBtn)
 let datePicked = datePicker.value.split('-').join('/');
 let roomSelected = document.querySelector('input[name="room"]:checked').value;
 availableRoomsSection.innerHTML = ''
 const availableRooms = hotel.getRoomsByTypeAndDate(datePicked, roomSelected)
 availableRooms.forEach(room => {
   return availableRoomsSection.innerHTML += `
   <input type="radio" class="book-room-radio-btn" id="${room.roomNumber}" value="${room.roomNumber}" name="bookRoomRadioBtn"> 
   <label>Room Type: ${room.roomType} | Cost Per Night: $${room.costPerNight}</label>
   `
 })
}

function displayErrorMessage() {
  if(hotel.roomsAvailable.length === 0) {
    return 'Oh no! We are sorry, there are no rooms available for this date! Please select a new date and try again.'
  }
}


export {
  showFutureTrips,
  showPastTrips,
  showTotalSpent,
  bookATrip,
  goToBookingPage,
  goToProfilePage,
  profileBtn,
  searchBtn,
  displayAvailability,
  bookRoomBtn
}
