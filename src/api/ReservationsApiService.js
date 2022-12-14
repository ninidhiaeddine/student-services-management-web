let endpoint = "/reservations";


function addReservation(reservationDto) {
    let url = process.env.REACT_APP_API_URL + endpoint;

    let response = fetch(url, {
        method: 'POST',
        body: JSON.stringify(reservationDto),
        headers: {
            "Authorization": "Bearer " + getAuthorizationToken()
        }
    });

    return response;
}

function getReservationById(reservationId) {
    var url = process.env.REACT_APP_API_URL + endpoint + '/' + reservationId;

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + getAuthorizationToken()
        }
    } );

    return response;
}

function getReservationsByStudent(studentId) {
    let url = process.env.REACT_APP_API_URL + endpoint + "?studentId=" + studentId;

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + getAuthorizationToken()
        }
    } );

    return response;
}

function getReservationsByTimeSlot(timeSlotId) {
    let url = process.env.REACT_APP_API_URL + endpoint + "?timeSlotId=" + timeSlotId;

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + getAuthorizationToken()
        }
    } );

    return response;
}