let endpoint = "/registration";

function signUpAdmin(signUpDto) {
    let url = process.env.REACT_APP_API_URL + endpoint + "/admins";
    signUp(url, signUpDto);
}

function signUpStudent(signUpDto) {
    let url = process.env.REACT_APP_API_URL + endpoint + "/students";
    signUp(url, signUpDto);
}

function signUp(url, signUpDto) {
    let response = fetch(url, {
        method: 'POST',
        body: JSON.stringify(signUpDto)
    });

    return response;
}