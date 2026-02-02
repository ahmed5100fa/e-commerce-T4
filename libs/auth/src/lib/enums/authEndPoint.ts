export class AuthEndPoint {
    static readonly REGISTER = 'auth/signup';
    static readonly LOGIN = 'auth/signin';
    static readonly FORGOT_PASSWORD = 'auth/forgotPassword';
    static readonly RESET_CODE = 'auth/verifyResetCode';
    static readonly RESET_PASSWORD = 'auth/resetPassword';
    static readonly CHANGE_PASSWORD = 'auth/changePassword';
    static readonly DELETEMYACCOUNT = 'auth/deleteMe';
    static readonly EDITPROFILE = 'auth/editProfile';
    static readonly LOGOUT = 'auth/logout';
    static readonly USERINFO = 'auth/profileData'
}


// const endPoint  ={} as const

// enum Endpoint{}