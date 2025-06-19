import { environment } from '../../environments/environment';
import { BaseService } from '../../shared/interceptor/base.service';

export default class LockupService extends BaseService {
  publicApiUrl: string = `${environment.endpoint}`;

  constructor() {
    super();
  }

  async getBookingData(model: any): Promise<any> {
    return this.post(`${this.publicApiUrl}/reservation`, model);
  }

  async detailClinic(id: string): Promise<any> {
    return this.delete(`${this.publicApiUrl}/reservation/${id}`);
  }
}
