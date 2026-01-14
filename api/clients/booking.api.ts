import { BaseApi } from './base.api';

export class BookingApi extends BaseApi {

  createBooking(data: any) {
    return this.post('/booking', data);
  }

  getBooking(id: number) {
    return this.get(`/booking/${id}`);
  }

  updateBooking(id: number, data: any, token: string) {
    return this.put(`/booking/${id}`, data, token);
  }

  deleteBooking(id: number, token: string) {
    return this.delete(`/booking/${id}`, token);
  }
}
