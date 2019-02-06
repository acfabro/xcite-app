// @flow
import React, { Component } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";

import { NavigationActions, StackActions } from "react-navigation";
import {
  Container,
  Content,
  Text,
  Icon,
  ListItem,
  Thumbnail,
  View
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";

import styles from "./style";
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Login" })]
});
class SideBar extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <ImageBackground
          source={require("../../../assets/sidebar-transparent.png")}
          style={styles.background}
        >
          <Content style={styles.drawerContent}>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Home");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon inverse type={"MaterialCommunityIcons"} name="home" />
              <Text inverse bold style={styles.linkText}>HOME</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Agenda");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon inverse type={"MaterialCommunityIcons"} name="clipboard-text" />
              <Text inverse bold style={styles.linkText}>AGENDA</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Speakers");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon inverse type={"MaterialCommunityIcons"} name="microphone" />
              <Text inverse bold style={styles.linkText}>SPEAKERS</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Directory");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon inverse type={"MaterialCommunityIcons"} name="account-search" />
              <Text inverse bold style={styles.linkText}>DIRECTORY</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Venue");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon inverse type={"MaterialCommunityIcons"} name="map" />
              <Text inverse bold style={styles.linkText}>VENUE MAP</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Shuttle");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon inverse type={"MaterialCommunityIcons"} name="car" />
              <Text inverse bold style={styles.linkText}>SHUTTLE INFO</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Channels");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon inverse type={"MaterialCommunityIcons"} name="image-multiple" />
              <Text inverse bold style={styles.linkText}>GALLERY</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {
                navigation.navigate("Feedback");
              }}
              iconLeft
              style={styles.links}
            >
              <Icon inverse type={"MaterialCommunityIcons"} name="comment" />
              <Text inverse bold style={styles.linkText}>FEEDBACK</Text>
            </ListItem>
          </Content>
          <View style={styles.logoutContainer}>
            <View style={styles.logoutbtn} foregroundColor={"white"}>
              <Grid>
                <Col>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.dispatch(resetAction);
                    }}
                    style={{
                      alignSelf: "flex-start",
                      backgroundColor: "transparent"
                    }}
                  >
                    <Text style={{ fontWeight: "bold", color: "#fff" }}>
                      LOG OUT
                    </Text>
                    <Text note style={{ color: "#fff" }}>
                      Jake Peralta
                    </Text>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity
                    style={{ alignSelf: "flex-end" }}
                    onPress={() => {
                      navigation.navigate("MyProfile");
                    }}
                  >
                    <Thumbnail
                      source={require("../../../assets/Contacts/peralta.jpg")}
                      style={styles.profilePic}
                    />
                  </TouchableOpacity>
                </Col>
              </Grid>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default SideBar;
