import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NativeModules,
} from 'react-native';

function App(): React.JSX.Element {
  var openGame = NativeModules.GameModule;
  const openFunc = () => {
    openGame.startCricketGame();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          openFunc();
        }}>
        <Text style={{color: 'white'}}>Open Android Activity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 40,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});

export default App;
