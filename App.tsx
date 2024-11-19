import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';

export default function Vishal() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
