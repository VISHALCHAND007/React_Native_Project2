import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hasteMapCacheDirectory} from '../metro.config';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function FancyCard() {
  let places = [
    {
      id: 1,
      imgUri:
        'https://www.naturetravelagency.com/uploads/1698921375Nainital%20tour%20place.jpg',
      title: 'Nainital Lake',
      description:
        'Nainital is known as the "Lake District of India" because of its many lakes, including the famous Naini Lake.',
      footerText: '1 min ago',
      at: 'Nainital, Uttarakhand',
    },
    {
      id: 2,
      imgUri:
        'https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg',
      title: 'Hawa Mahal',
      description:
        'The Hawa Mahal is a palace is the city of Jaipur, India. Built from red and pink sandstone. It is on the edge of the city.',
      footerText: '12 min ago',
      at: 'Jaipur, Rajasthan',
    },
  ];
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {places.map((place, index) => (
        <View key={place.id}>
          <View style={[styles.card, styles.cardElevated]}>
            <Image
              source={{
                uri: place.imgUri,
              }}
              style={styles.cardImage}
            />

            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{place.title}</Text>
              <Text style={styles.cardLabel}>{place.at}</Text>
              <Text style={styles.cardDescription}>{place.description}</Text>
              <Text style={styles.cardFooter}>{place.footerText}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 8,
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  card: {
    height: 360,
    width: 360,
    marginHorizontal: 12,
    marginVertical: 16,
    borderRadius: 8,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardBody: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    flex: 1,
    position: 'relative',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: 'semibold',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    marginBottom: 10,
    color: '#1B1B1B',
    flexGrow: 1,
  },
  cardFooter: {
    color: '#36454F',
    fontSize: 12,
    position: 'absolute',
    bottom: 10,
    left: 278,
  },
  whiteText: {
    color: '#ffffff',
    // margin: 8
  },
});
