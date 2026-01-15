import { test, expect } from '../../fixtures/api.fixture';
import { BookingApi } from '../../api/clients/booking.api';
import { AuthApi } from '../../api/clients/auth.api';
import { bookingPayload } from '../../api/data/booking.data';
import { patchBookingPayload } from '../../api/data/patch-booking.data';

test('Partial update booking successfully', async ({ apiContext }) => {
  const bookingApi = new BookingApi(apiContext);
  const authApi = new AuthApi(apiContext);

  // Create booking
  const createRes = await bookingApi.createBooking(bookingPayload);
  const bookingId = createRes.bookingid;

  // Get token
  const token = await authApi.getToken();

  // Patch booking
  const patchedBooking = await bookingApi.patchBooking(
    bookingId,
    token,
    patchBookingPayload
  );

  // Verify only updated fields
  expect(patchedBooking.firstname).toBe(patchBookingPayload.firstname);
  expect(patchedBooking.lastname).toBe(patchBookingPayload.lastname);
});
