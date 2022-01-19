import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import BookStock from "../screens/components/BookStock";
import bookAPI from "./apis/Book";

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const theme = useTheme();

  const [book, setBook] = useState([]);

  useEffect(() => {
    //bookResponse()
    getBookFromAPI();
  }, []);

  // const bookResponse = async() =>{
  //   const response = await bookAPI.get('lists/current/hardcover-fiction.json?api-key=dnWHXkicVB2t3Km0wCV8bfZxJyixgS3D')
  //   console.log(response.data)
  // }

  function getBookFromAPI() {
    bookAPI
      .get(
        "/svc/books/v3/lists/current/hardcover-fiction.json?api-key=npuNVkErdzCyu2T20omt5t0c3e4wtNKC"
      )
      .then(async function (response) {
        setBook(response.data.results);
        console.log(book);
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  if (!book) {
    return null;
  }

  return (
    <View>
      <Text
        style={[
          styles.textSign,
          {
            color: "#1f65ff",
          },
        ]}
      >
        Books Store
      </Text>
      {/*<Text>Home Screen</Text>
        <BookStock></BookStock>*/}
      <FlatList
        data={book.books}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => {
          return <BookStock item={item} />;
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 30,
    justifyContent: "center",
    fontWeight: "bold",
    textAlign: "center",
  },
});
