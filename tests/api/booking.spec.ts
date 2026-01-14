import { test, expect } from '../../fixtures/api.fixture';
import { BookingApi } from '../../api/clients/booking.api';
import { AuthApi } from '../../api/clients/auth.api';
import { bookingPayload } from '../../api/data/booking.data';

test('Booking API full flow', async ({ apiContext }) => {
  const bookingApi = new BookingApi(apiContext);
  const authApi = new AuthApi(apiContext);

  // Create
  const createRes = await bookingApi.createBooking(bookingPayload);
  expect(createRes.status()).toBe(200);

  const { bookingid } = await createRes.json();

  // Get
  const getRes = await bookingApi.getBooking(bookingid);
  expect(getRes.status()).toBe(200);

  // Auth
  const token = await authApi.getToken();

  // Update
  const updateRes = await bookingApi.updateBooking(
    bookingid,
    { ...bookingPayload, firstname: 'Updated' },
    token
  );
  expect(updateRes.status()).toBe(200);

  // Delete
  const deleteRes = await bookingApi.deleteBooking(bookingid, token);
  expect(deleteRes.status()).toBe(201);
});
