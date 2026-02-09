import { test, expect } from '../../fixtures/api.fixture';
import { BookingApi } from '../../api/clients/booking.api';
import { AuthApi } from '../../api/clients/auth.api';
import { bookingPayload } from '../../api/data/booking.data';
import { updateBookingPayload } from '../../api/data/update-booking.data';

test('Update booking successfully', async ({ apiContext }) => {
  const bookingApi = new BookingApi(apiContext);
  const authApi = new AuthApi(apiContext);

  // Create booking
  const createRes = await bookingApi.createBooking(bookingPayload);
  const bookingId = createRes.bookingid;

  // Get token
  const token = await authApi.getToken();

  // Update booking
  const updatedBooking = await bookingApi.updateBooking(
    bookingId,
    token,
    updateBookingPayload
  );

  // Verify
  expect(updatedBooking).toMatchObject({
    firstname: updateBookingPayload.firstname,
    lastname: updateBookingPayload.lastname,
    totalprice: updateBookingPayload.totalprice,
  });
});
