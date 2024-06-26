import 'react-native-devsettings';
import React from 'react';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './src/navigation';
import {persistor, store} from './src/redux/store.ts';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <GestureHandlerRootView style={{flex: 1}}>
          <Navigation />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

export default App;
