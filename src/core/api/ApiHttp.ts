import {sliceLastSlash} from '@utils/text'
import type {CustomResponse} from '@type/api.types'

/** Основной класс - содержит в себе общие настройки/интерцепторы для дочерних http контроллеров */
export class ApiHttp {
  protected readonly  baseUrl: string;

   constructor() {
     this.baseUrl = sliceLastSlash(import.meta.env.VITE_BASE_API_URL) + '/'
   }

   /** Выраиант реализации парсера ответов с бэка на скорую руку
    * P.S подобные мэпперы/парсеры интегрируются смежно, не напрямую в ApiHttp
    * **/
   protected async parser<T extends object>(input: RequestInfo | URL, init?: RequestInit) {
     return fetch(input, init).then(( res) => res.json() as Promise<CustomResponse<T>>)
   }
}
