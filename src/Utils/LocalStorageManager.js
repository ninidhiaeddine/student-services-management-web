export function storeAuthenticatedStudentInLocalStorage(studentJson, password) {
    localStorage.setItem("PK_KEY", studentJson.PK_Student);
    localStorage.setItem("FIRST_NAME_KEY", studentJson.firstName);
    localStorage.setItem("LAST_NAME_KEY", studentJson.lastName);
    localStorage.setItem("EMAIL_KEY", studentJson.email);
    localStorage.setItem("PASSWORD_KEY", password);
    localStorage.setItem("STUDENT_ID_KEY", studentJson.studentId);
    localStorage.setItem("GENDER_KEY", studentJson.gender);
    localStorage.setItem("IS_DORMS_KEY", studentJson.isDorms);
}

export function storeAuthenticatedAdminInLocalStorage(adminJson, password) {
    localStorage.setItem("PK_KEY", adminJson.PK_Admin);
    localStorage.setItem("FIRST_NAME_KEY", adminJson.firstName);
    localStorage.setItem("LAST_NAME_KEY", adminJson.lastName);
    localStorage.setItem("EMAIL_KEY", adminJson.email);
    localStorage.setItem("PASSWORD_KEY", password);
}

export function storeAuthorizationTokenInLocalStorage(token) {
    localStorage.setItem("AUTHORIZATION_TOKEN", token);
}

export function getAuthorizationTokenFromLocalStorage() {
    return localStorage.getItem("AUTHORIZATION_TOKEN");
}

export function getAuthenticatedAdmin() {
    return {
        PK_KEY: localStorage.getItem("PK_KEY"),
        firstName: localStorage.getItem("FIRST_NAME_KEY"),
        lastName: localStorage.getItem("LAST_NAME_KEY"),
        email: localStorage.getItem("EMAIL_KEY"),
        password: localStorage.getItem("PASSWORD_KEY")
    }
}

export function getAuthenticatedStudent() {
    return {
        PK_KEY: localStorage.getItem("PK_KEY"),
        firstName: localStorage.getItem("FIRST_NAME_KEY"),
        lastName: localStorage.getItem("LAST_NAME_KEY"),
        email: localStorage.getItem("EMAIL_KEY"),
        password: localStorage.getItem("PASSWORD_KEY"),
        studentId: localStorage.getItem("STUDENT_ID_KEY"),
        gender: localStorage.getItem("GENDER_KEY"),
        isDorms: localStorage.getItem("IS_DORMS_KEY")
    }
}

export function clearStorage() {
    localStorage.clear();
}