let endpoint = "/auth";

export function signInStudent(signInJson) {
    let url = process.env.REACT_APP_API_URL + endpoint + "/students";
    signIn(url, signInJson);
}

export function signInAdmin(signInJson) {
    let url = process.env.REACT_APP_API_URL + endpoint + "/admins";
    signIn(url, signInJson);
}

export function getCurrentStudent() {
    let url = process.env.REACT_APP_API_URL + endpoint + "/students/me";

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("AUTH_TOKEN_KEY")
        }
    });

    return response;
}

export function getCurrentAdmin() {
    let url = process.env.REACT_APP_API_URL + endpoint + "/admins/me";

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("AUTH_TOKEN_KEY")
        }
    });

    return response;
}

export function signIn(url, signInJson) {
    console.log("Body to be sent = " + signInJson);
    let response = fetch(url, {
        method: 'POST',
        body: signInJson,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
}