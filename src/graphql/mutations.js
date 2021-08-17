/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaymentIntent = /* GraphQL */ `
  mutation CreatePaymentIntent($amount: Int!) {
    createPaymentIntent(amount: $amount) {
      clientSecret
    }
  }
`;
export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
      id
      day
      time
      orlikID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      User {
        id
        name
        image
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Orlik {
        id
        images
        type
        address
        pricePerHour
        latitude
        longitude
        width
        length
        desc
        timeStart
        timeEnd
        phone
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
      id
      day
      time
      orlikID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      User {
        id
        name
        image
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Orlik {
        id
        images
        type
        address
        pricePerHour
        latitude
        longitude
        width
        length
        desc
        timeStart
        timeEnd
        phone
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
      id
      day
      time
      orlikID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      User {
        id
        name
        image
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Orlik {
        id
        images
        type
        address
        pricePerHour
        latitude
        longitude
        width
        length
        desc
        timeStart
        timeEnd
        phone
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      image
      sub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Bookings {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      image
      sub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Bookings {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      image
      sub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Bookings {
        nextToken
        startedAt
      }
    }
  }
`;
export const createOrlik = /* GraphQL */ `
  mutation CreateOrlik(
    $input: CreateOrlikInput!
    $condition: ModelOrlikConditionInput
  ) {
    createOrlik(input: $input, condition: $condition) {
      id
      images
      type
      address
      pricePerHour
      latitude
      longitude
      width
      length
      desc
      timeStart
      timeEnd
      phone
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Bookings {
        nextToken
        startedAt
      }
      owner
    }
  }
`;
export const updateOrlik = /* GraphQL */ `
  mutation UpdateOrlik(
    $input: UpdateOrlikInput!
    $condition: ModelOrlikConditionInput
  ) {
    updateOrlik(input: $input, condition: $condition) {
      id
      images
      type
      address
      pricePerHour
      latitude
      longitude
      width
      length
      desc
      timeStart
      timeEnd
      phone
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Bookings {
        nextToken
        startedAt
      }
      owner
    }
  }
`;
export const deleteOrlik = /* GraphQL */ `
  mutation DeleteOrlik(
    $input: DeleteOrlikInput!
    $condition: ModelOrlikConditionInput
  ) {
    deleteOrlik(input: $input, condition: $condition) {
      id
      images
      type
      address
      pricePerHour
      latitude
      longitude
      width
      length
      desc
      timeStart
      timeEnd
      phone
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Bookings {
        nextToken
        startedAt
      }
      owner
    }
  }
`;
