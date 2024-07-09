/** Подумать как интегрировать его в core и не импортировать повсеместно **/
export interface IApiResponse {
  status: boolean,
}

export type CustomResponse<T extends object> = {
  [key in keyof T]: T[key]
}
