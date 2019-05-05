/**
 * @format
 */

import {AppRegistry, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import frontPage from './src/component/setUpPage/front';

const App = () => (
  <View>
    <frontPage />
  </View>
);

AppRegistry.registerComponent('FORIS_prototype1', () => App);
