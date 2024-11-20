import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openLink(url: string) {
    Linking.openURL(url);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={[styles.headerText, {textDecorationLine: 'underline'}]}>
            You Are Not Just Talented, You Are Spiritually Gifted
          </Text>
        </View>
        <Image
          style={styles.blogImage}
          source={{
            uri: 'https://newbreak.church/wp-content/uploads/2023/02/3kv48ns4wuu-600x400.jpg',
          }}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            “I want to make a difference in the world.” And I am not that
            special for saying that. Most of us want to leave an imprint on the
            world that makes it better. Sure, maybe our ambitions are vastly
            different. Some of us dream of influencing the WHOLE world while
            some of us see OUR world as the people we aim to influence.
            Nevertheless, all of us want to make a good difference. And that’s a
            good thing! God wants that for us too.
          </Text>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() =>
                openLink('https://newbreak.church/spiritually-gifted/')
              }>
              <Text style={styles.socialLink}>Read more</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openLink('https://github.com/VISHALCHAND007')}>
              <Text style={styles.socialLink}>Follow me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#ffffff', 
    paddingHorizontal: 8
  },
  card: {
    width: 390, 
    borderRadius: 15, 
    marginVertical: 16, 
    marginHorizontal: 12
  },
  cardElevated: {
    backgroundColor: '#ffffff', 
    elevation: 4,
    shadowOffset: {
        height: 1, 
        width: 1
    }, 
    shadowColor: '#333', 
    shadowRadius: 3
  },
  headingContainer: {
    height: 40, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  headerText: {
    fontSize: 15, 
    color: '#000000',
    fontWeight: '600'
  },
  blogImage: {
    height: 290,
  },
  bodyContainer: {
    padding: 10
  },
  footerContainer: {
    paddingTop: 10,
    flexDirection: 'row', 
    alignContent: 'center', 
    justifyContent: 'space-evenly'
  },
  socialLink: {
    color: '#ffffff',
    backgroundColor: '#008000', 
    paddingHorizontal: 20, 
    paddingVertical: 8, 
    borderRadius: 10, 
    elevation: 3
  }
});
