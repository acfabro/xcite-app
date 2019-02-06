// @flow
import React, {Component} from "react";
import {ImageBackground, ListView} from "react-native";

import {Button, Container, Content, Icon, Text, Thumbnail, View} from "native-base";
import CustomHeader from "../../components/CustomHeader";

import styles from "./styles";
import datas from "./data";

class Profile extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Profile",
      header: <CustomHeader back navigation={navigation} title={"Profile"} />
    };
  };

  render() {
    const navigation = this.props.navigation;
    const data = navigation.getParam("data", {});

    console.log(navigation);

    return (
      <Container>
        <ImageBackground
          source={require("../../../assets/bg-transparent.png")}
          style={styles.container}
        >
          {/*<CustomHeader hasTabs navigation={navigation} title={"Profile"}/>*/}

          <View style={styles.profileInfoContainer}>
            <View style={{alignSelf: "center"}}>
              <Thumbnail
                // source={require("../../../assets/Contacts/peralta.jpg")}
                source={{uri: data.image}}
                style={styles.profilePic}
              />
            </View>
            <View style={styles.profileInfo}>
              <Text inverse style={styles.profileUser}>{data.name}</Text>
              <Text note style={styles.profileUserInfo}>
                {data.designation}, {data.company}
              </Text>
            </View>
          </View>
          <Content
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: "#fff", paddingTop: 8}}
          >

            {/* My Profile */}
            <View style={styles.contact}>
              <Button style={styles.contactItem} iconLeft block>
                <Icon name={"email"} type={"MaterialCommunityIcons"}/>
                <Text style={styles.contactItemText}>jperalta@adidas.com</Text>
              </Button>
              <Button style={styles.contactItem} iconLeft block>
                <Icon name={"phone"} type={"MaterialCommunityIcons"}/>
                <Text style={styles.contactItemText}>+65 1234 1234</Text>
              </Button>
            </View>

            {/*
            <View style={styles.linkTabs}>
              <Grid>
                <Col>
                  <View style={styles.linkTabs_header}>
                    <Text style={styles.linkTabs_tabCounts}>13</Text>
                    <Text note style={styles.linkTabs_tabName}>
                      Comments
                    </Text>
                  </View>
                </Col>
                <Col>
                  <View style={styles.linkTabs_header}>
                    <Text style={styles.linkTabs_tabCounts}>12</Text>
                    <Text note style={styles.linkTabs_tabName}>
                      Channels
                    </Text>
                  </View>
                </Col>
                <Col>
                  <View style={styles.linkTabs_header}>
                    <Text style={styles.linkTabs_tabCounts}>52</Text>
                    <Text note style={styles.linkTabs_tabName}>
                      Bookmarks
                    </Text>
                  </View>
                </Col>
              </Grid>
            </View>
            */}

            {/*
            <View>
              <View style={styles.linkTabs}>
                <ListItem
                  style={{
                    backgroundColor: "#fff",
                    justifyContent: "center"
                  }}
                >
                  <Text style={styles.textNote}>
                    Swipe the items to left and right
                  </Text>
                </ListItem>
              </View>
              <List
                dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                renderRow={data =>
                  <ListItem
                    swipeList
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#FFF"
                    }}
                    onPress={() => navigation.navigate("Story")}
                  >
                    <Image source={data.url} style={styles.newsImage} />
                    <View style={styles.newsContent}>
                      <Text numberOfLines={2} style={styles.newsHeader}>
                        {data.headline}
                      </Text>
                      <Grid style={{marginTop: 25}}>
                        <Col>
                          <TouchableOpacity>
                            <Text style={styles.newsLink}>
                              {data.link}
                            </Text>
                          </TouchableOpacity>
                        </Col>
                        <Col>
                          <TouchableOpacity style={styles.newsTypeView}>
                            <Text style={styles.newsTypeText}>
                              {data.category}
                            </Text>
                          </TouchableOpacity>
                        </Col>
                      </Grid>
                    </View>
                  </ListItem>}
                renderLeftHiddenRow={data =>
                  <Button
                    full
                    style={([styles.swipeBtn], {backgroundColor: "#CCC"})}
                  >
                    <Icon
                      active
                      name="information-circle"
                      style={{fontSize: 35}}
                    />
                  </Button>}
                renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                  <Button
                    full
                    danger
                    onPress={_ => this.deleteRow(secId, rowId, rowMap)}
                    style={styles.swipeBtn}
                  >
                    <Icon active name="trash" style={{fontSize: 35}} />
                  </Button>}
                leftOpenValue={100}
                rightOpenValue={-100}
              />
            </View>
            */}

          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Profile;
