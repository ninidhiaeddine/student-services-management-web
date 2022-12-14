var endpoint = "/admins";

function getAdminById(adminId) {
    var url = process.env.REACT_APP_API_URL + endpoint + '/' + adminId;
    let response = fetch(url, {
        method: 'GET'
    } );

    return response;
}

function getAllAdmins() {
    var url = process.env.REACT_APP_API_URL + endpoint;
    let response = fetch(url, {
        method: 'GET'
    } );

    return response;
}