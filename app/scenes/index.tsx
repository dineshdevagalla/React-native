import React from 'react';
import {Scene} from 'react-native-router-flux';

import {
  APP_LAUNCH_SCENE,
  APP_SCENE,
  SIGNIN_SCENE,
} from '../constants/NavigationConstants';
import LaunchScene from './LaunchScene';
import AppScene from './AppScene';
import {SignInPage} from './SignInScene';

const scenes = [
  <Scene key={APP_LAUNCH_SCENE} component={LaunchScene} />,
  <Scene key={APP_SCENE} component={AppScene} />,
  <Scene initial key={SIGNIN_SCENE} component={SignInPage} />,
];

const modalScenes: any = [];

export {scenes as default, modalScenes};
