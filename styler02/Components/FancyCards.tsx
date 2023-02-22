import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://mobimg.b-cdn.net/v3/fetch/05/05eeb93a2e41734ecb6044146351f11e.jpeg',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Butterfly</Text>
          <Text style={styles.cardLabel}>Lorem, ipsum.</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            labore hic id natus impedit animi eveniet, blanditiis architecto
            aliquid nihil!
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  card: {
    width: 350,
    height: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  container: {},
  cardElevated: {
    elevation: 3,
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  cardImage: {
    height: 200,
    marginBottom: 8,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginTop: 6,
    marginBottom: 12,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 4,
  },
});
