import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';

export default function Vishal() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      {/* <SafeAreaView style={isDarkMode ? styles.darkBG : styles.lightBG}> */}
      <ScrollView>
        {/* flat card */}
        <FlatCard />
        {/* Elevated scrolling cards */}
        <ElevatedCard />
        {/* trending places */}
        <Text style={styles.headingText}>Trending Places </Text>
        <FancyCard />
        {/* Blogs */}
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  lightBG: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  darkBG: {
    flex: 1,
    backgroundColor: '#3B3C36',
  },
  headingText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 8,
  },
});
