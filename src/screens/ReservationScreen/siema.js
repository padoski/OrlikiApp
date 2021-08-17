import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, Pressable} from 'react-native';
import styles from './styles';
import calendar from '../../assets/data/calendar';
import DayPicker from '../../components/DayPicker';
import hours from '../../assets/data/hours';
import HourPicker from '../../components/HourPicker';
import {useRoute} from '@react-navigation/native';

const ReservationScreen = () => {
  const route = useRoute();

  const [dayPicked, setDayPicked] = useState(null);
  const [fullDayPicked, setFullDayPicked] = useState(null);
  const [hourPicked, setHourPicked] = useState([]);
  const [hourss, setHourss] = useState([]);
  const today = new Date();
  const [fullDateBooking, setFullDateBooking] = useState(null);

  const days = [
    'Niedziela',
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
  ];
  const months = [
    'Stycznia',
    'Lutego',
    'Marca',
    'Kwietnia',
    'Maja',
    'Czerwca',
    'Lipca',
    'Sierpnia',
    'Września',
    'Pazdziernika',
    'Listopada',
    'Grudnia',
  ];

  console.log('Dzisiejsza data!!!!!!!!!!!!!!');
  console.log(today);

  const [kalendarz, setKalendarz] = useState([]);

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
        dateArray.push(new Date(currentDate));
        currentDate = currentDate.addDays(1);
      }
      return dateArray;
    }
    console.log('Data!!!!!!!!!!!!!!!!!!!!!!');
    console.log(new Date());
    var dateArray = getDates(new Date(), new Date().addDays(9));
    for (let i = 0; i < dateArray.length; i++) {
      let item = {
        day: days[dateArray[i].getDay()],
        month: months[dateArray[i].getMonth()],
        number: dateArray[i].getDate(),
      };
      setKalendarz(kalendarz => [...kalendarz, item]);
    }
    for (
      let index = route.params.timeStart;
      index < route.params.timeEnd + 1;
      index++
    ) {
      let item = {
        hour: `${index}:00`,
      };
      setHourss(hourss => [...hourss, item]);
    }
  }, []);
  useEffect(() => {
    console.log(kalendarz);
  }, [hourPicked]);

  const takeValueOfDay = item => {
    setDayPicked(item.number);
    setFullDayPicked(`${item.day}-${item.number}-${item.month}-2021`);
  };
  const makefullDateBooking = () => {
    console.warn(`${fullDayPicked}-${hourPicked.toString()}`);
    setFullDateBooking(`${fullDayPicked}-${hourPicked.toString()}`);
  };
  const reserve = () => {
    makefullDateBooking();
  };
  return (
    <View>
      <View style={styles.topHeader}>
        <Text style={styles.headerText}>{route.params.address}</Text>
      </View>

      {/* Day picker */}
      <View>
        <FlatList
          data={kalendarz}
          renderItem={({item}) => (
            <DayPicker
              isSelected={item.number === dayPicked}
              onPress={() => takeValueOfDay(item)}
              dayItem={item}
            />
          )}
          horizontal
        />
      </View>
      <View>
        <FlatList
          data={hourss}
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
              hourItem={item}
              extraData={hourPicked}
            />
          )}
          horizontal
        />
      </View>
      {/* Hour picker */}
      <View>
        <Text>
          {route.params.timeStart}
          {route.params.timeEnd}
        </Text>
        <Pressable onPress={reserve}>
          <Text>Zarezerwuj orlik</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ReservationScreen;
