let endpoint = "/timeslots";

export function addTimeSlots(timeSlotJsonList, token) {
    let url = process.env.REACT_APP_API_URL + endpoint;
    let response = fetch(url, {
        method: 'POST',
        body: JSON.stringify(timeSlotJsonList),
        headers: {
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
        }
    });

    return response;
}

export function getTimeSlotById(timeSlotId, token) {
    let url = process.env.REACT_APP_API_URL + endpoint + timeSlotId;

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
        }
    });

    return response;
}

export function getTimeSlotsByServiceType(serviceType, token) {
    let url = process.env.REACT_APP_API_URL + endpoint + "?serviceType=" + serviceType;

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token
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
            "Authorization": "Bearer " + token
        }
    });

    return response;
}

export function updateTimeSlot(
    timeSlotJson,
    timeSlotId,
    token) {
    let url = process.env.REACT_APP_API_URL + endpoint + "/" + timeSlotId;

    let response = fetch(url, {
        method: 'PUT',
        body: JSON.stringify(timeSlotJson),
        headers: {
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
        }
    });

    return response;
}