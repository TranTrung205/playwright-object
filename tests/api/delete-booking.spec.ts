import { test, expect } from '../../fixtures/api.fixture';
import { BookingApi } from '../../api/clients/booking.api';
import { AuthApi } from '../../api/clients/auth.api';
import { bookingPayload } from '../../api/data/booking.data';

test('Delete booking successfully', async ({ apiContext }) => {
  const bookingApi = new BookingApi(apiContext);
  const authApi = new AuthApi(apiContext);

  // Create booking
  const createRes = await bookingApi.createBooking(bookingPayload);
  const bookingId = createRes.bookingid;

  // Get token
  const token = await authApi.getToken();

  // Delete booking
  await bookingApi.deleteBooking(bookingId, token);

  // Optional: verify booking is deleted
  const getResponse = await apiContext.get(`/booking/${bookingId}`);
  expect(getResponse.status()).toBe(404);
});
