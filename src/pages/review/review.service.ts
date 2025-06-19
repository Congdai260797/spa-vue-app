import { environment } from '../../environments/environment';
import { BaseService } from '../../shared/interceptor/base.service';

export default class ReviewService extends BaseService {
  publicApiUrl: string = `${environment.endpoint}`;

  constructor() {
    super();
  }

  async createReview(clinicId: string): Promise<any> {
    return this.get(`${this.publicApiUrl}/user/rating?clinicId=${clinicId}`);
  }
}
