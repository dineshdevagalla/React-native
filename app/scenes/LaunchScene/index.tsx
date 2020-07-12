import React, {Component, Fragment} from 'react';
import {Image, Text, View} from 'react-native';

import Images from '../../images';

import {LaunchScreenWrapper} from './styledComponents';

class LaunchScene extends Component {
  render() {
    return (
      <Fragment>
        <LaunchScreenWrapper>
          <View>
            <Image source={Images.ibHubsLogo} />
            <Text>Hello World</Text>
          </View>
        </LaunchScreenWrapper>
      </Fragment>
    );
  }
}

export default LaunchScene;
