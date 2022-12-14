let endpoint = "/reservations";


export function addReservation(reservationJson) {
    let url = process.env.REACT_APP_API_URL + endpoint;

    let response = fetch(url, {
        method: 'POST',
        body: JSON.stringify(reservationJson),
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("AUTH_TOKEN_KEY"),
            'Content-Type': 'application/json'
        }
    });

    return response;
}

export function getReservationById(reservationId) {
    var url = process.env.REACT_APP_API_URL + endpoint + '/' + reservationId;

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("AUTH_TOKEN_KEY")
        }
    } );

    return response;
}

export function getReservationsByStudent(studentId) {
    let url = process.env.REACT_APP_API_URL + endpoint + "?studentId=" + studentId;

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("AUTH_TOKEN_KEY")
        }
    } );

    return response;
}

export function getReservationsByTimeSlot(timeSlotId) {
    let url = process.env.REACT_APP_API_URL + endpoint + "?timeSlotId=" + timeSlotId;

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("AUTH_TOKEN_KEY")
        }
    } );

    return response;
}