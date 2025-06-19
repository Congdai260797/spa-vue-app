import { environment } from '../../environments/environment';
import { BaseService } from '../../shared/interceptor/base.service';

export default class LockupService extends BaseService {
  publicApiUrl: string = `${environment.endpoint}`;

  constructor() {
    super();
  }

  async getBookingData(phoneNumber: string): Promise<any> {
    return this.get(`${this.publicApiUrl}/reservation?phoneNumber=${phoneNumber}`);
  }

  async detailClinic(id: string): Promise<any> {
    return this.delete(`${this.publicApiUrl}/reservation/${id}`);
  }
}
