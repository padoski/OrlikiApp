/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
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
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBookings = /* GraphQL */ `
  query SyncBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBookings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrlik = /* GraphQL */ `
  query GetOrlik($id: ID!) {
    getOrlik(id: $id) {
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
export const listOrliks = /* GraphQL */ `
  query ListOrliks(
    $filter: ModelOrlikFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrliks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrliks = /* GraphQL */ `
  query SyncOrliks(
    $filter: ModelOrlikFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrliks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
