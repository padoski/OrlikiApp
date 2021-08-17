// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Booking, User, Orlik, PaymentIntent } = initSchema(schema);

export {
  Booking,
  User,
  Orlik,
  PaymentIntent
};