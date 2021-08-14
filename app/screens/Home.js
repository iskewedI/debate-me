import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomCard from '../components/Card';
import CardStack, { Card } from 'react-native-card-stack-swiper';

const Data = [
  {
    topic: 'Nature',
    title: 'Nature title',
    description: 'Nature description big description',
    name: 'Nature arguer',
  },
  {
    topic: 'Science',
    title: 'Science title',
    description: 'Science description big description',
    name: 'Science arguer',
  },
  {
    topic: 'Social media',
    title: 'Social media title',
    description: 'Social media description big description',
    name: 'Social media arguer',
  },
  {
    topic: 'War media',
    title: 'War media title',
    description: 'War media description big description',
    name: 'War media arguer',
  },
];

const Home = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <View>
      <Text style={{ height: '10%', alignSelf: 'center' }}>Title, Logo</Text>

      <CardStack
        verticalSwipe={false}
        ref={newSwiper => setSwiper(newSwiper)}
        renderNoMoreCards={() => null}
        style={{ height: '80%', alignSelf: 'center' }}
      >
        {Data.map(({ topic, title, description }, i) => (
          <Card key={i}>
            <CustomCard topic={topic} title={title} description={description} />
          </Card>
        ))}
      </CardStack>

      <Text style={{ height: '10%', alignSelf: 'center' }}>Bottom info</Text>
    </View>
  );
};

export default Home;
