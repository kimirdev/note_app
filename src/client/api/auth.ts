import { instance } from "..";

export const LoginUser = (data: any) => {
  return instance.post('/api/token', data)
}
