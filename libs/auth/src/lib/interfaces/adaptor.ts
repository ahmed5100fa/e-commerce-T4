export interface AuthAdapted {
message:string,
token: string,
user:  
{
  _id: string,
username:string,
 firstName: string,
lastName: string
createdAt: string,
email: string,
isVerified: boolean,
passwordResetCode: string,
passwordResetExpires: string,
phone: string,
resetCodeVerified: boolean,
role: string,
}
}

export interface AuthApiAdaptor {
  message:string,
  token: string,
  email: string
}

export interface Adaptor {
  adapt(data: AuthAdapted): AuthApiAdaptor;
}
