let endpoint = "/timeslots";

export function addTimeSlots(timeSlotJsonList, token) {
    let url = process.env.REACT_APP_API_URL + endpoint;
    let response = fetch(url, {
        method: 'POST',
        body: timeSlotJsonList,
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
    endDateExclusive,
    token) {
    // NOTE: expected date format is "yyyy-MM-ddTHH:mm"

    let url = process.env.REACT_APP_API_URL + endpoint
        + "?serviceType="
        + serviceType
        + "&startDateInclusive="
        + startDateInclusive
        + "&endDateExclusive="
        + endDateExclusive;

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
        body: timeSlotJson,
        headers: {
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
        }
    });

    return response;
}