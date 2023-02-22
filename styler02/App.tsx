import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';
import ElevatedCards from './Components/ElevatedCards';
import FancyCards from './Components/FancyCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>App</Text>

          <FlatCards />
          <ElevatedCards />
          <FancyCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
