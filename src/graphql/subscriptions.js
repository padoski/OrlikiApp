/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking {
    onCreateBooking {
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
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking {
    onUpdateBooking {
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
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking {
    onDeleteBooking {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateOrlik = /* GraphQL */ `
  subscription OnCreateOrlik {
    onCreateOrlik {
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
export const onUpdateOrlik = /* GraphQL */ `
  subscription OnUpdateOrlik {
    onUpdateOrlik {
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
export const onDeleteOrlik = /* GraphQL */ `
  subscription OnDeleteOrlik {
    onDeleteOrlik {
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
