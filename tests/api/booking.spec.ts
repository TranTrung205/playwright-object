import { test, expect } from '../../fixtures/api.fixture';
import { BookingApi } from '../../api/clients/booking.api';
import { bookingPayload } from '../../api/data/booking.data';

test('Create booking successfully', async ({ apiContext }) => {
  // Arrange
  const bookingApi = new BookingApi(apiContext);

  // Act
  const response = await bookingApi.createBooking(bookingPayload);

  // Assert
  expect(response).toHaveProperty('bookingid');
  expect(response.booking).toMatchObject({
    firstname: bookingPayload.firstname,
    lastname: bookingPayload.lastname,
  });
});
