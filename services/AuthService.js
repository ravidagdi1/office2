import axios from 'axios';
import swal from "sweetalert";
import {
    loginConfirmedAction,
    Logout,
} from '../store/actions/AuthActions';

export function signUp(email, password) {
    //axios call
    const postData = {
        email,
        password,
        returnSecureToken: true,
    };
    return axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
        postData,
    );
}

export function login(email, password) {
    const postData = {
        email,
        password,
        returnSecureToken: true,
    };
    return axios.post(
        `http://localhost:3001/api/v1/users/login`,
        postData,
    );
}

export function formatError(errorResponse) {
    console.log(errorResponse.message)
    switch (errorResponse.message) {
        case 'Please provide email!':
            //return 'Email already exists';
            swal("Oops", "Please Provide Email!", "error");
            break;
        case 'Please provide password!':
            //return 'Email already exists';
            swal("Oops", "Please Provide Pasword", "error");
            break;
        case 'Invailid Credentials':
            //return 'Email already exists';
            swal("Oops", "Invailid Credentials", "error", { button: "Try Again!", });
            break;
        case 'You are not authorized ! Please Contact Admin !':
            //return 'Email already exists';
            swal("Oops", "You are not authorized ! Please Contact Admin !",);
            break;

        case 'EMAIL_EXISTS':
            //return 'Email already exists';
            swal("Oops", "Email already exists", "error");
            break;
        case 'EMAIL_NOT_FOUND':
            //return 'Email not found';
            swal("Oops", "Email not found", "error", { button: "Try Again!", });
            break;
        case 'INVALID_PASSWORD':
            //return 'Invalid Password';
            swal("Oops", "Invalid Password", "error", { button: "Try Again!", });
            break;
        case 'USER_DISABLED':
            return 'User Disabled';

        default:
            return '';
    }
}

export function saveTokenInLocalStorage(tokenDetails) {

    tokenDetails.expireDate = new Date(
        new Date().getTime() + 30000 * 1000,
    );

    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
}

export function runLogoutTimer(dispatch, timer, navigate) {
    setTimeout(() => {
        //dispatch(Logout(history));
        dispatch(Logout(navigate));
    }, timer);
}

export function checkAutoLogin(dispatch, navigate) {
    const tokenDetailsString = localStorage.getItem('userDetails');
    let tokenDetails = '';
    if (!tokenDetailsString) {
        dispatch(Logout(navigate));
        return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expireDate);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch(Logout(navigate));
        return;
    }

    dispatch(loginConfirmedAction(tokenDetails));

    const timer = expireDate.getTime() - todaysDate.getTime();
    runLogoutTimer(dispatch, timer, navigate);
}
