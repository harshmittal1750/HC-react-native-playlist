import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>App</Text>

          <FlatCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
