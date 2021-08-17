import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class PaymentIntent {
  readonly clientSecret: string;
  constructor(init: ModelInit<PaymentIntent>);
}

type BookingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrlikMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Booking {
  readonly id: string;
  readonly day: string;
  readonly time: string;
  readonly orlikID?: string;
  readonly userID?: string;
  readonly User?: User;
  readonly Orlik?: Orlik;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Booking, BookingMetaData>);
  static copyOf(source: Booking, mutator: (draft: MutableModel<Booking, BookingMetaData>) => MutableModel<Booking, BookingMetaData> | void): Booking;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly image?: string;
  readonly Bookings?: (Booking | null)[];
  readonly sub?: string;
  readonly fieldPosition?: string;
  readonly phone?: string;
  readonly sex?: string;
  readonly birthYear?: string;
  readonly province?: string;
  readonly team?: string;
  readonly city?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Orlik {
  readonly id: string;
  readonly images?: string[];
  readonly type: string;
  readonly address: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly width: number;
  readonly length: number;
  readonly desc: string;
  readonly timeStart: number;
  readonly timeEnd: number;
  readonly phone?: string;
  readonly Bookings?: (Booking | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Orlik, OrlikMetaData>);
  static copyOf(source: Orlik, mutator: (draft: MutableModel<Orlik, OrlikMetaData>) => MutableModel<Orlik, OrlikMetaData> | void): Orlik;
}