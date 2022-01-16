// import '../src/images/drink-icon.png';


// const searchRooms = document.getElementById('searchBtn');
const futureTrips = document.getElementById('futureTrips');
const pastTrips = document.getElementById('pastTrips');
// const totalCost = document.getElementById('totalCostArea');
const bookATrip = document.getElementById('bookTripBtn');
const profileBtn = document.getElementById('profileBtn');
const bookingPage = document.getElementById('bookingPage');
const profilePage = document.getElementById('profilePage');


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


export {
  showFutureTrips,
  showPastTrips,
  showTotalSpent,
  bookATrip,
  goToBookingPage,
  goToProfilePage,
  profileBtn
}
