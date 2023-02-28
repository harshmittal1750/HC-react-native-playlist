import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCards = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 -ES12
          </Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png',
          }}
        />
        <View style={styles.bodyContainer}>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            totam id velit? Possimus, perferendis nobis, reiciendis maxime alias
            ea ab placeat omnis, iste hic asperiores unde id nostrum facilis
            ullam?
          </Text>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() =>
                openWebsite('https://harshmittal1750.hashnode.dev/')
              }>
              <Text style={styles.socialLinks}>Read more</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openWebsite('https://harshmittal1750.hashnode.dev/')
              }>
              <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActionCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
