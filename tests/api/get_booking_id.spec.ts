import { test, expect } from '../../fixtures/api.fixture';
import { BookingApi } from '../../api/clients/booking.api';
import { bookingPayload } from '../../api/data/booking.data';

test('Get booking by id', async ({ apiContext }) => {
  const bookingApi = new BookingApi(apiContext);

  // Create booking (dynamic)
  const createRes = await bookingApi.createBooking(bookingPayload);
  const bookingId = createRes.bookingid;

  // Get booking
  const booking = await bookingApi.getBookingById(bookingId);

  // Verify
  expect(booking.firstname).toBe(bookingPayload.firstname);
});

