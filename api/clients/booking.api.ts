import { APIRequestContext, expect } from '@playwright/test';

export class BookingApi {
  constructor(private request: APIRequestContext) { }

  async createBooking(payload: any) {
    const response = await this.request.post('/booking', {
      data: payload,
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    return body;
  }
  async getBookingById(bookingId: number) {
    const response = await this.request.get(`/booking/${bookingId}`);
    expect(response.status()).toBe(200);
    return await response.json();
  }

  async updateBooking(
  bookingId: number,
  token: string,
  payload: any
) {
  const response = await this.request.put(`/booking/${bookingId}`, {
    data: payload,
    headers: {
      Cookie: `token=${token}`,
    },
  });

  expect(response.status()).toBe(200);
  return await response.json();
}
}
