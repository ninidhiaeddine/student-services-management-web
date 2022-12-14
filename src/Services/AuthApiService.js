let endpoint = "/auth";

export function signInStudent(signInJson) {
    let url = process.env.REACT_APP_API_URL + endpoint + "/students";
    return signIn(url, signInJson);
}

export function signInAdmin(signInJson) {
    let url = process.env.REACT_APP_API_URL + endpoint + "/admins";
    return signIn(url, signInJson);
}

export function getCurrentStudent(token) {
    let url = process.env.REACT_APP_API_URL + endpoint + "/students/me";

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    return response;
}

export function getCurrentAdmin(token) {
    let url = process.env.REACT_APP_API_URL + endpoint + "/admins/me";

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    return response;
}

export function signIn(url, signInJson) {
    let response = fetch(url, {
        method: 'POST',
        body: signInJson,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
}