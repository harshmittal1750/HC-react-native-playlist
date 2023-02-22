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
  },
  card: {},
  container: {},
  cardElevated: {},
  cardImage: {
    height: 200,
  },
  cardBody: {},
  cardTitle: {},
  cardDescription: {},
  cardLabel: {},
});
