import React from 'react';
import { Image, View } from 'react-native';

const MapIcon = ({ focused, source, style }) => {
  return (
    <View style={[{ flexDirection: 'row' }, style]}>
      <Image
        source={source}
        style={{ width: 90, height: 90, marginBottom: 45,alignContent:'center', alignItems:'center' }}
      />
    </View>
  );
};

export default MapIcon;
