import { environment } from '../../environments/environment';
import { BaseService } from '../../shared/interceptor/base.service';

export default class BookingService extends BaseService {
  publicApiUrl: string = `${environment.endpoint}`;

  constructor() {
    super();
  }

  async getBookingData(model: any): Promise<any> {
    return this.post(`${this.publicApiUrl}/reservation`, model);
  }

  async detailClinic(address: string): Promise<any> {
    return this.get(`${this.publicApiUrl}/user/clinic?orderBy=&orderType=ASC&county=${address}`);
  }

  async getDataClinic(clinicId: string): Promise<any> {
    return this.get(`${this.publicApiUrl}/user/clinic/${clinicId}`);
  }
}
