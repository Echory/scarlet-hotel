// import '../src/images/drink-icon.png';
// import {

// } from './scripts';


// const searchRooms = document.getElementById('searchBtn');
const futureTrips = document.getElementById('futureTrips');
const pastTrips = document.getElementById('pastTrips');

function showFutureTrips(currentCustomer) {
  futureTrips.innerHTML = '';
  currentCustomer.futureBookings.forEach(booking => {
    return futureTrips.innerHTML += `
    <article>
    <p>Room Number: ${booking.roomNumber}</p>
    </article>
    `
  })
}


export {
  showFutureTrips
}
