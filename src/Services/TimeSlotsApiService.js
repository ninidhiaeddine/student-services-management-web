let endpoint = "/timeslots";

export function addTimeSlots(timeSlotJsonList) {
    let url = process.env.REACT_APP_API_URL + endpoint;
    let response = fetch(url, {
        method: 'POST',
        body: JSON.stringify(timeSlotJsonList),
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("AUTH_TOKEN_KEY"),
            'Content-Type': 'application/json'
        }
    });

    return response;
}

export function getTimeSlotById(timeSlotId) {
    let url = process.env.REACT_APP_API_URL + endpoint + timeSlotId;

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("AUTH_TOKEN_KEY"),
            'Content-Type': 'application/json'
        }
    });

    return response;
}

export function getTimeSlotsByServiceType(serviceType) {
    let url = process.env.REACT_APP_API_URL + endpoint + "?serviceType=" + serviceType;

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("AUTH_TOKEN_KEY")
        }
    });

    return response;
}

export function getTimeSlots(
    serviceType,
    startDateInclusive,
    endDateExclusive) {
    //formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm");
    startDate = startDateInclusive.toDateString();
    endDate = endDateExclusive.toDateString();

    let url = process.env.REACT_APP_API_URL + endpoint
        + "?serviceType="
        + serviceType
        + "&startDateInclusive="
        + startDate
        + "&endDateExclusive="
        + endDate;

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("AUTH_TOKEN_KEY")
        }
    });

    return response;
}

export function updateTimeSlot(
    timeSlotJson,
    timeSlotId) {
    let url = process.env.REACT_APP_API_URL + endpoint + "/" + timeSlotId;

    let response = fetch(url, {
        method: 'PUT',
        body: JSON.stringify(timeSlotJson),
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("AUTH_TOKEN_KEY")
            'Content-Type': 'application/json'
        }
    });

    return response;
}