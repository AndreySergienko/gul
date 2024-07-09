import {ApiHttp} from '@core/api/ApiHttp'
import type {IResponseDataSaveOrder} from '@modules/api/market/types'

/** Http контроллер для работы с заказами/продукцией
 * P.S судя по всему заказ и продукция это разные сущности, при масштабировании разделил бы на 2 контроллера
 * */
export default class MarketHttp extends ApiHttp {
  private readonly prefix: string
  private readonly marketUrl: string
  constructor() {
    super()
    this.prefix = 'test_task/'
    this.marketUrl = this.baseUrl + this.prefix
  }

  /** Получить список продукции */
  async getAllProduct<T extends object>() {
    return await this.parser<T>(this.marketUrl + 'products.php', {
      method: 'GET'
    })
  }

  /** Сохранить заказа */
  async saveOrder<T extends object, Data>({ products }: IResponseDataSaveOrder<Data>) {
    return await this.parser<T>(this.marketUrl + 'save.php', {
      method: 'POST',
      body: JSON.stringify(products)
    })
  }
}
