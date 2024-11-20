import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function ContactList() {
  const contacts = [
    {
      uId: 1,
      name: 'Vishal Chand',
      status: 'Android Developer, at Secquraise Technologies',
      imgUri: 'https://avatars.githubusercontent.com/u/92211597?v=4',
    },
    {
      uId: 2,
      name: 'Nikhil Kashyap',
      status: 'Full Stack Developer, at Meta Cube Technologies',
      imgUri:
        'https://media.licdn.com/dms/image/v2/D5603AQFUauJdLts6Fw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725905544298?e=1737590400&v=beta&t=OQGCJAX2duQ9NPnXCJmTbYmXTSI2_L3f3hvwggHncy8',
    },
    {
      uId: 3,
      name: 'Dheeraj Sati',
      status: 'Full Stack Ka Whole Square, at No Chutti Technologies',
      imgUri:
        'https://media.licdn.com/dms/image/v2/C4D03AQF20aeTXoSuHw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1657525737259?e=1737590400&v=beta&t=hBqFm_Z8DHcJGQgjtVKzzuQ0LBPa7DHnk2K-tvFlVqQ',
    },
    {
        uId: 4,
        name: 'Yogesh Kandpal',
        status: 'Bank Employee, at Nainital Bank',
        imgUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmt7mgLLJbU_An415Sur0-Iq8kRKQzzAwCw&s'
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uId, name, status, imgUri}) => (
          <View key={uId} style={styles.userCard}>
            <Image source={{uri: imgUri}} style={styles.userImg} />
            <View>
              <Text style={styles.username}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center', 
    paddingVertical: 8
  },
  userImg: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginEnd: 10
  },
  username: {
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '600'
  },
  userStatus: {
    color: '#E5E4E2', 
    fontSize: 13
  },
});
