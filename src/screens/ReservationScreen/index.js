import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, Pressable} from 'react-native';
import styles from './styles';
import DayPicker from '../../components/DayPicker';
import HourPicker from '../../components/HourPicker';
import {useRoute} from '@react-navigation/native';
import bookings from '../../assets/data/bookings';
import {Auth, DataStore, Storage} from 'aws-amplify';
import {Booking, User} from '../../models';
import {useNavigation} from '@react-navigation/native';

const ReservationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [dateArray, setDateArray] = useState([]);
  const [dayPicked, setDayPicked] = useState(null);
  const [hours, setHours] = useState([]);
  const [books, setBooks] = useState([]);
  const [hourPicked, setHourPicked] = useState([]);
  const [amount, setAmount] = useState(0);
  console.log(bookings);
  console.log(new Date());

  useEffect(() => {
    Date.prototype.addDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };

    function getDates(startDate, stopDate) {
      var dateArray = new Array();
      var currentDate = startDate;
      while (currentDate <= stopDate) {
        dateArray.push(new Date(currentDate).toDateString());
        currentDate = currentDate.addDays(1);
      }
      return dateArray;
    }
    setDateArray(getDates(new Date(), new Date().addDays(9)));
    console.log(getDates(new Date(), new Date().addDays(9)));

    for (
      let index = route.params.timeStart;
      index < route.params.timeEnd + 1;
      index++
    ) {
      let item = {
        hour: `${index}:00:00 GMT+0200`,
      };
      setHours(hours => [...hours, item]);
    }
    // takeValueOfPickedDay(new Date().toDateString());
  }, []);

  const takeValueOfPickedDay = item => {
    setDayPicked(item);
    console.log(item);

    queryBooks(item);
  };

  const queryBooks = async day => {
    console.log(`TUUUUTAJ ${day}`);
    const books = await DataStore.query(
      Booking,
      c => c.day('eq', day) && c.orlikID('eq', route.params.id),
    );
    console.log(books);
    setBooks(books);
  };

  const reserve = async () => {
    // for (var i = 0; i < hourPicked.length; i++) {
    //   uploadBooking(hourPicked[i]);
    // }
    const userInfo = await Auth.currentAuthenticatedUser();
    const userSub = userInfo.attributes.sub;

    const user = (await DataStore.query(User)).find(u => u.sub === userSub);

    navigation.navigate('ReservationSummary', {
      hourPicked: hourPicked,
      day: dayPicked,
      orlikID: route.params.id,
      userID: user.id,
      orlikAdress: route.params.address,
      amount: hourPicked.length * 2,
    });
  };
  // const uploadBooking = async hourPicked => {
  //   const userInfo = await Auth.currentAuthenticatedUser();
  //   const userSub = userInfo.attributes.sub;

  //   const user = (await DataStore.query(User)).find(u => u.sub === userSub);

  //   let item = {
  //     day: dayPicked,
  //     time: hourPicked,
  //     orlikID: route.params.id,
  //     userID: user.id,

  //   };
  //   // await DataStore.save(new Booking(item));
  //   // navigation.navigate('ReservationSummary');
  //   console.log(item);
  // };

  return (
    <View>
      <View style={styles.topHeader}>
        <Text style={styles.headerText}>{route.params.address}</Text>
      </View>

      {/* Day picker */}
      <View>
        <FlatList
          data={dateArray}
          renderItem={({item}) => (
            <DayPicker
              isSelected={item === dayPicked}
              onPress={() => takeValueOfPickedDay(item)}
              dayItem={item}
            />
          )}
          horizontal
        />
      </View>
      <View>
        <FlatList
          data={hours}
          renderItem={({item}) => (
            <HourPicker
              onPress={() => {
                if (hourPicked.includes(item.hour)) {
                  const index = hourPicked.indexOf(item.hour);
                  const temp = [...hourPicked];
                  temp.splice(index, 1);
                  setHourPicked(temp);
                  console.log(hourPicked);
                } else {
                  setHourPicked(hourPicked => [...hourPicked, item.hour]);
                  console.log(hourPicked);
                }
              }}
              isSelected={hourPicked.includes(item.hour)}
              bookings={books}
              hourItem={item}
              extraData={hourPicked}
              dayPicked={dayPicked}
            />
          )}
          horizontal
        />
      </View>
      {/* Hour picker */}
      <View>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Pressable style={styles.summary} onPress={reserve}>
            <Text>Zarezerwuj orlik</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ReservationScreen;
