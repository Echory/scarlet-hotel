// import '../src/images/drink-icon.png';
// import {

// } from './scripts';


// const searchRooms = document.getElementById('searchBtn');
const futureTrips = document.getElementById('futureTrips');
const pastTrips = document.getElementById('pastTrips');
const totalCost = document.getElementById('totalCostArea');

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


export {
  showFutureTrips,
  showPastTrips,
  showTotalSpent
}
