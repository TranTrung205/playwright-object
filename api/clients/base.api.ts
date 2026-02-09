import { APIRequestContext, expect } from '@playwright/test';

export class BaseApi {
  constructor(protected request: APIRequestContext) {}

  async get(url: string) {
    const res = await this.request.get(url);
    expect(res.ok()).toBeTruthy();
    return res;
  }

  async post(url: string, body: any) {
    const res = await this.request.post(url, { data: body });
    expect(res.ok()).toBeTruthy();
    return res;
  }

  async put(url: string, body: any, token?: string) {
    return this.request.put(url, {
      data: body,
      headers: token ? { Cookie: `token=${token}` } : {},
    });
  }

  async delete(url: string, token?: string) {
    return this.request.delete(url, {
      headers: token ? { Cookie: `token=${token}` } : {},
    });
  }
}
