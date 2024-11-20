import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const ElevatedCard = (props: Props) => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.whiteText}>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.whiteText}>me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.whiteText}>to</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.whiteText}>scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.whiteText}>more....</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: 8,
  },
  whiteText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'semibold',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 150,
    borderRadius: 8,
    margin: 8,
  },
  elevatedCard: {
    backgroundColor: '#E5AA70',
    elevation: 4, 
    shadowOffset: {
        height: 1, 
        width: 1
    }, 
    shadowColor:'#333', 
    shadowOpacity: .5, 
    shadowRadius: 2
  }
});
