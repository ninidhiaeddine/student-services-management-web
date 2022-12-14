let endpoint = "/auth";

function signInStudent(signInDto) {
    let url = process.env.REACT_APP_API_URL + endpoint + "/students";
    signIn(url, signInDto);
}

function signInAdmin(signInDto) {
    let url = process.env.REACT_APP_API_URL + endpoint + "/admins";
    signIn(url, signInDto, callback);
}

function getCurrentStudent() {
    let url = process.env.REACT_APP_API_URL + endpoint + "/students/me";

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("AUTH_TOKEN_KEY")
        }
    });

    return response;
}

function getCurrentAdmin() {
    let url = process.env.REACT_APP_API_URL + endpoint + "/admins/me";

    let response = fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("AUTH_TOKEN_KEY")
        }
    });

    return response;
}

function signIn(url, signInDto) {
    let response = fetch(url, {
        method: 'POST',
        body: JSON.stringify(signInDto)
    });

    return response;
}