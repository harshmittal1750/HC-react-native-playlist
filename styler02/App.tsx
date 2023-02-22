import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';
import ElevatedCards from './Components/ElevatedCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>App</Text>

          <FlatCards />
          <ElevatedCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
