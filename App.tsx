import 'react-native-devsettings';
import React from 'react';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigation from './src/navigation';
import {store} from './src/redux/store.ts';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Navigation />
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
