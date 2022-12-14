var endpoint = "/students";

function getStudentById(studentId) {
    var url = process.env.REACT_APP_API_URL + endpoint + '/' + studentId;
    let response = fetch(url, {
        method: 'GET'
    } );

    return response;
}

function getAllStudents() {
    var url = process.env.REACT_APP_API_URL + endpoint;
    let response = fetch(url, {
        method: 'GET'
    } );

    return response;
}