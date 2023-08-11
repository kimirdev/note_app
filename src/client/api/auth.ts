import { instance } from "..";

export const LoginUser = (data: { username: string, password: string }) => {
  return instance.post('/api/token/', data, {withCredentials: true})
}

export const RegisterUser = (data: any) => {
  return instance.post('/user/register/', data)
}

export const UserInfo = () => {
  return instance.get('/user/detail/')
}