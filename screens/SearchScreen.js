import React, { useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableHighlight,
  Modal,
} from "react-native";
import { Linking } from "react-native";

const SearchScreen = ({ navigation }) => {
  const apiurl = "https://www.googleapis.com/books/v1/volumes?q="; //"http://openlibrary.org/search.json?q=";//"http://www.omdbapi.com/?apikey=86d6fdb0";
  const apiurl1 = "&key=AIzaSyAbY1TFOrNrM_7d7uUvOAGyFgTmvsRzqvs";
  const apiurl2 = "https://www.googleapis.com/books/v1/volumes/";
  const [state, setState] = useState({
    s: "Search here...",
    results: [],
    selected: {},
  });
  const search = () => {
    axios(apiurl + state.s + apiurl1).then(({ data }) => {
      let results = data.items;
      console.log(results);
      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  };

  const openPopup = (id) => {
    axios(apiurl2 + id).then(({ data }) => {
      let result = data;
      console.log(result);
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Books Search</Text>
      <TextInput
        style={styles.searchbox}
        onChangeText={(text) =>
          setState((prevState) => {
            return { ...prevState, s: text };
          })
        }
        onSubmitEditing={search}
        value={state.s}
      />

      <ScrollView styles={styles.results}>
        {state.results.map((result) => (
          <TouchableHighlight
            key={result.id}
            onPress={() => openPopup(result.id)}
          >
            <View style={styles.result}>
              <Text
                style={styles.result}
                onPress={() =>
                  Linking.openURL(
                    "http://books.google.co.in/books?id=hf5f3r38P1cC&dq=batman&hl=&source=gbs_api"
                  )
                }
              >
                <Image
                  source={{ uri: result.volumeInfo.imageLinks.thumbnail }}
                  style={{
                    width: 300,
                    height: 400,
                    borderRadius: 20,
                    alignSelf: "center",
                  }}
                  resizeMode="cover"
                />
              </Text>
              <Text style={styles.heading}>{result.volumeInfo.title}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={false}
        visible={typeof state.selected.title != "undefined" ? true : false}
      >
        <View styles={styles.popup}>
          <View style={styles.result}>
            <Image
              source={{ uri: state.selected.Poster }}
              style={{
                width: 300,
                height: 450,
                borderRadius: 20,
                alignSelf: "center",
              }}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.title}>{state.selected.title}</Text>
          <Text style={{ fontSize: 16 }}>
            Publisher: {state.selected.publisher}
          </Text>
          <Text style={{ marginBottom: 20, fontSize: 18, fontWeight: "400" }}>
            Rating: Publish Date - {state.selected.publishedDate}
          </Text>
          <Text style={{ fontSize: 16 }}>
            Description: {state.selected.description}
          </Text>
          {/* <Text style={{fontSize: 16,}}>Genre: {state.selected.Genre}</Text>
                <Text style={{marginBottom: 20, fontSize: 16,}}>Actors: {state.selected.Actors}</Text>
                <Text style={{marginBottom: 20, fontSize: 16,}}>{state.selected.Plot}</Text> */}
        </View>
        <TouchableHighlight
          onPress={() =>
            setState((prevState) => {
              return { ...prevState, selected: {} };
            })
          }
        >
          <Text style={styles.closeBtn}>Close</Text>
        </TouchableHighlight>
      </Modal>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F7",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  title: {
    color: "#1f65ff",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5,
  },
  searchbox: {
    fontSize: 20,
    fontWeight: "300",
    padding: 20,
    width: "100%",
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    marginBottom: 40,
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 25,
  },
  results: {
    flex: 1,
  },
  result: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
  heading: {
    color: "grey",
    fontSize: 18,
    fontWeight: "700",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: -10,
    alignSelf: "center",
    width: "95%",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  popup: {
    padding: 20,
    backgroundColor: "#F0F4F7",
  },
  poptitle: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 450,
    marginBottom: 5,
  },
  popuptext: {
    fontSize: 16,
  },
  closeBtn: {
    padding: 20,
    fontSize: 20,
    alignSelf: "center",
    borderRadius: 15,
    width: "20%",
    color: "#FFF",
    fontWeight: "700",
    backgroundColor: "#2484C4",
  },
});
