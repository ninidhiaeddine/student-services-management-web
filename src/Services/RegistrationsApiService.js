let endpoint = "/registration";

export function signUpAdmin(signUpJson) {
    let url = process.env.REACT_APP_API_URL + endpoint + "/admins";
    signUp(url, signUpJson);
}

export function signUpStudent(signUpJson) {
    let url = process.env.REACT_APP_API_URL + endpoint + "/students";
    signUp(url, signUpJson);
}

export function signUp(url, signUpJson) {
    let response = fetch(url, {
        method: 'POST',
        body: JSON.stringify(signUpJson),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
}