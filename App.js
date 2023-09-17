import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import bt1 from './Src/bt1';
import bt2 from './Src/bt2';
import bt3 from './Src/bt3';
import bt4 from './Src/bt4';
import bt5 from './Src/bt5';
import bt6 from './Src/bt6';
import bt7 from './Src/bt7';
import bt8 from './Src/bt8';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Ex1', title: 'baitap1', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex2', title: 'baitap2', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex3', title: 'baitap3', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex4', title: 'baitap4', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex5', title: 'baitap5', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex6', title: 'baitap6', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex7', title: 'baitap7', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex8', title: 'baitap8', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Ex1:bt1,
    Ex2:bt2,
    Ex3:bt3,
    Ex4:bt4,
    Ex5:bt5,
    Ex6:bt6,
    Ex7:bt7,
    Ex8:bt8,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </SafeAreaProvider>
    
  );
};

export default MyComponent;