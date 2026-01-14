import { APIRequestContext, expect } from '@playwright/test';

export class BookingApi {
  constructor(private request: APIRequestContext) {}

  async createBooking(payload: any) {
    const response = await this.request.post('/booking', {
      data: payload,
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    return body;
  }
}
