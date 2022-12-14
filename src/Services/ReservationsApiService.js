let endpoint = "/reservations";


export function addReservation(reservationJson, token) {
    let url = process.env.REACT_APP_API_URL + endpoint;

    let response = fetch(url, {
        method: 'POST',
        body: JSON.stringify(reservationJson),
        headers: {
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
        }
    });

    return response;
}

export function getReservationById(reservationId, token) {
    var url = process.env.REACT_APP_API_URL + endpoint + '/' + reservationId;

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token
        }
    } );

    return response;
}

export function getReservationsByStudent(studentId, token) {
    let url = process.env.REACT_APP_API_URL + endpoint + "?studentId=" + studentId;

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token
        }
    } );

    return response;
}

export function getReservationsByTimeSlot(timeSlotId, token) {
    let url = process.env.REACT_APP_API_URL + endpoint + "?timeSlotId=" + timeSlotId;

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token
        }
    } );

    return response;
}