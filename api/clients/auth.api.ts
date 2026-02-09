import { BaseApi } from './base.api';

export class AuthApi extends BaseApi {
  async getToken() {
    const res = await this.post('/auth', {
      username: 'admin',
      password: 'password123',
    });

    const body = await res.json();
    return body.token;
  }
}
