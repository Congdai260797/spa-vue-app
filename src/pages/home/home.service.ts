import { environment } from '../../environments/environment'
import { BaseService } from '../../shared/interceptor/base.service'

export default class HomeService extends BaseService {

    publicApiUrl: string = `${environment.endpoint}`;

    constructor() {
        super()
    }

    async getListClinic(): Promise<any> {
        return this.get(`${this.publicApiUrl}/user/clinic`)
    }

}
