import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';
import Amplify, {Auth, DataStore, Hub, Predicates} from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);
import {withAuthenticator} from 'aws-amplify-react-native';
import {User} from './src/models';
import {RecoilRoot} from 'recoil';
import {StripeProvider} from '@stripe/stripe-react-native';

const App = () => {
  const [userr, setUserr] = useState(undefined);
  useEffect(() => {
    const saveUsertoDB = async () => {
      //get user from cognito
      const userInfo = await Auth.currentAuthenticatedUser();
      if (!userInfo) {
        return;
      }
      console.log(userInfo);
      const userId = userInfo.attributes.sub;
      console.log(userId);
      //check if user exist in DB
      const user = (await DataStore.query(User)).find(
        user => user.sub === userId,
      );
      console.log(user);
      //if not save user to db
      if (!user) {
        await DataStore.save(
          new User({
            sub: userId,
            name: userInfo.attributes.email,
            fieldPosition: 'Brak informacji',
            sex: 'Brak informacji',
            province: 'Brak informacji',
            team: 'Brak informacji',
            city: 'Brak informacji',
            birthYear: 'Brak informacji',
            phone: 'Brak informacji',
          }),
        );
      } else {
        console.warn('User already exist in DB');
      }
    };
    saveUsertoDB();
  }, []);

  return (
    <StripeProvider publishableKey="pk_test_51JIwX6Hjsr9d6oSadnPfmSALqnhMrQNQlHneFX4huUXfsJZT8VVSB3IHkZuymQDluyu6BkeNhk7WsctRBlH3BEP50035eSg63o">
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </StripeProvider>
  );
};

export default withAuthenticator(App);
