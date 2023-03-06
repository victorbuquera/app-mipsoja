import React from 'react';
import { Image, View } from 'react-native';

const MapIcon = ({ focused, source, style }) => {
  return (
    <View style={[{ flexDirection: 'row' }, style]}>
      <Image
        source={source}
        style={{ width: 80, height: 80, marginBottom: 25 }}
      />
    </View>
  );
};

export default MapIcon;
