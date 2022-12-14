let endpoint = "/timeslots";

function addTimeSlots(timeSlotDtoList) {
    let url = process.env.REACT_APP_API_URL + endpoint;
    let response = fetch(url, {
        method: 'POST',
        body: JSON.stringify(timeSlotDtoList),
        headers: {
            "Authorization": "Bearer " + getAuthorizationToken()
        }
    });

    return response;
}

function getTimeSlotById(timeSlotId) {
    let url = process.env.REACT_APP_API_URL + endpoint + timeSlotId;

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + getAuthorizationToken()
        }
    });

    return response;
}

function getTimeSlots(serviceType) {
    let url = process.env.REACT_APP_API_URL + endpoint + "?serviceType=" + serviceType;

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + getAuthorizationToken()
        }
    });

    return response;
}

function getTimeSlots(
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
                "Authorization": "Bearer " + getAuthorizationToken()
            }
        });
    
        return response;
}

function updateTimeSlot(
    timeSlotDto,
    timeSlotId) {
    let url = process.env.REACT_APP_API_URL + endpoint + "/" + timeSlotId;

    let response = fetch(url, {
        method: 'PUT',
        body: JSON.stringify(timeSlotDto),
        headers: {
            "Authorization": "Bearer " + getAuthorizationToken()
        }
    });

    return response;
}