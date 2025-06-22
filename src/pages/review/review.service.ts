import { environment } from '../../environments/environment';
import { BaseService } from '../../shared/interceptor/base.service';

export default class ReviewService extends BaseService {
  publicApiUrl: string = `${environment.endpoint}`;

  constructor() {
    super();
  }

  async getReview(clinicId: string): Promise<any> {
    return this.get(`${this.publicApiUrl}/user/rating?clinicId=${clinicId}`);
  }

  async createReview(model: any): Promise<any> {
    return this.post(`${this.publicApiUrl}/user/rating`, model);
  }
}
