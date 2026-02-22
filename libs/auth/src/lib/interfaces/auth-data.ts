export interface registerData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
  gender: string;
}
export interface loginData {
  email: string;
  password: string;
}
export interface forgetPasswordPasswordData {
  email: string;
}
export interface verifyResetCodeData {
  resetCode: string;
}
export interface resetPasswordData {
  newPassword: string;
  email: string;
}
