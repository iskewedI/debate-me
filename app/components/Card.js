import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = ({ topic, title, description }) => {
  return (
    <View style={{ height: 400, width: 400, backgroundColor: 'red' }}>
      <Text>{topic}</Text>
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

export default Card;
