import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const BookStock = ({ item }) => {
  if (!item) {
    return null;
  }
  return (
    <View style={styles.cardView}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>{item.author}</Text>
      <Image style={styles.image} source={{ uri: item.book_image }}></Image>
      <Text style={styles.description}>{item.description}</Text>

      {/*<Image style={styles.image} ></Image>
            <Text style={styles.title}>THE JUDGE'S LIST </Text>
            <Text style={styles.author}>John Grisham</Text>
            <Text style={styles.description}>The second book in the Whistler series. Investigator Lacy Stoltz goes after a serial killer and closes in on a sitting judge.</Text>
    */}
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    marginTop: 40,
    paddingTop: 20,
    backgroundColor: "white",
    margin: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  title: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.02,
    color: "gray",
    fontSize: 18,
  },
  image: {
    height: height / 3,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
  author: {
    marginBottom: width * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: "gray",
  },
});
export default BookStock;
