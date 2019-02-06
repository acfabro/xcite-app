// @flow
import React, { Component } from "react";
import {
  Platform,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  FlatList,
  View as RNView
} from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  View,
  Spinner
} from "native-base";

import { Grid, Col } from "react-native-easy-grid";
import Carousel from "react-native-carousel-view";

import { itemsFetchData } from "../../actions";
import datas from "./data.json";

import styles from "./styles";
import CustomHeader from "../../components/CustomHeader";

const deviceWidth = Dimensions.get("window").width;
const headerLogo = require("../../../assets/header-logo.png");

class Home extends Component {
  componentWillMount() {
    console.log("mounting Home");
  }

  componentDidMount() {
    this.props.fetchData(datas);
  }
  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => this.props.navigation.navigate("Story")}
      >
        <View style={styles.newsContent}>
          <Grid style={styles.swiperContentBox}>
            <Col style={{ flexDirection: "row" }}>
              <Text style={styles.newsLink}>{item.link}</Text>
              <Icon name="ios-time" style={styles.timeIcon} />
              <Text style={styles.newsLink}>{item.time}</Text>
            </Col>
            <Col>
              <TouchableOpacity
                style={styles.newsTypeView}
                onPress={() => this.props.navigation.navigate("Channel")}
              >
                <Text style={styles.newsTypeText}>{item.category}</Text>
              </TouchableOpacity>
            </Col>
          </Grid>
          <Text numberOfLines={2} style={styles.newsHeader}>
              {item.headline}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    if (this.props.isLoading) {
      return <Spinner />;
    } else {
      return (
        <Container>
          <CustomHeader bold navigation={this.props.navigation} title={"Home"} />
          <View>
            <Image
              style={{ width: deviceWidth, height: 150 }}
              source={require("../../../assets/SS20APAC/banner.png")}
            />
          </View>

          {/*
          <Content
            showsVerticalScrollIndicator={true}
            style={{ backgroundColor: "#fff" }}
          >
            <View>
                <Image
                  style={{ width: deviceWidth, height: 150 }}
                  source={require("../../../assets/SS20APAC/banner.png")}
                />
            </View>

            <FlatList
              data={this.props.items}
              renderItem={this._renderItem}
              keyExtractor={item => item.id}
            />
          </Content>
          */}

          <Content showsVerticalScrollIndicator={false}>
            <View>
              <View style={styles.timelineView}>
                <View style={styles.timelineContent}>
                  <Text />
                </View>
              </View>

              <View style={styles.contentContainer}>
                <Grid>
                  <Col style={{ flexDirection: "row" }}>
                    <Icon
                      name={"poll-box"}
                      type={"MaterialCommunityIcons"}
                      style={{ color: "#999", marginLeft: 2 }}
                    />
                    <View style={{ paddingLeft: 15 }}>
                      <Text bold style={styles.timelineContentHeading}>
                        POLL
                      </Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={styles.newsTypeView}>
                      <Icon name="clock" type="MaterialCommunityIcons" style={styles.timeIcon} />
                      <Text style={styles.time}>Just now</Text>
                    </View>
                  </Col>
                </Grid>
              </View>
              <View style={styles.timelineView}>
                <View style={styles.timelineContent}>
                  <Text bold style={styles.timelineTextHeader}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <View style={styles.timelineView}>
                <View style={styles.timelineContent}>
                  <Text />
                </View>
              </View>
              <View style={styles.contentContainer}>
                <Grid>
                  <Col style={{ flexDirection: "row" }}>
                    <Icon
                      name={"bullhorn"}
                      type={"MaterialCommunityIcons"}
                      style={styles.timelineIcon}
                    />
                    <View style={{ paddingLeft: 10 }}>
                      <Text bold style={styles.timelineContentHeading}>ANNOUNCEMENTS</Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={styles.newsTypeView}>
                      <Icon name="clock" type="MaterialCommunityIcons" style={styles.timeIcon} />
                      <Text style={styles.time}>15 mins ago</Text>
                    </View>
                  </Col>
                </Grid>
              </View>
              <View style={styles.timelineView}>
                <View style={styles.timelineContent}>
                  <Text bold style={styles.timelineTextHeader}>
                    In quis elit quam. Nunc placerat dapibus luctus.
                  </Text>
                  <Text numberOfLines={2} style={styles.timelineTextComment}>
                    Maecenas aliquam, enim consequat egestas fringilla, diam ante maximus purus, ut sodales ligula erat sit amet elit. Fusce sagittis auctor porttitor.
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <View style={styles.timelineView}>
                <View style={styles.timelineContent}>
                  <Text />
                </View>
              </View>
              <View style={styles.contentContainer}>
                <Grid>
                  <Col style={{ flexDirection: "row" }}>
                    <Icon name={"bell"} type={"MaterialCommunityIcons"} style={styles.timelineIcon} />
                    <View style={{ paddingLeft: 18 }}>
                      <Text style={styles.timelineContentHeading}>REMINDER</Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={styles.newsTypeView}>
                      <Icon name="ios-time-outline" style={styles.timeIcon} />
                      <Text style={styles.time}>30 mins ago</Text>
                    </View>
                  </Col>
                </Grid>
              </View>
              <View style={styles.timelineView}>
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineTextHeader}>Curabitur eget metus porta enim eleifend iaculis. Etiam sollicitudin lectus et pulvinar faucibus. </Text>
                </View>
              </View>
            </View>

            <View>
              <View style={styles.timelineView}>
                <View style={styles.timelineContent}>
                  <Text />
                </View>
              </View>
              <View style={styles.contentContainer}>
                <Grid>
                  <Col style={{ flexDirection: "row" }}>
                    <Icon
                      name="ios-download-outline"
                      style={styles.timelineIcon}
                    />
                    <View style={{ paddingLeft: 13 }}>
                      <Text style={styles.timelineContentHeading}>SHARED</Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={styles.newsTypeView}>
                      <Icon name="ios-time-outline" style={styles.timeIcon} />
                      <Text style={styles.time}>06:00pm</Text>
                    </View>
                  </Col>
                </Grid>
              </View>
              <View style={styles.timelineView}>
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineTextHeader}>
                    Living forms derived from photosynthesis appeared between 3.2
                    and 2.4 billion years ago.
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <View style={styles.timelineView}>
                <View style={styles.timelineContent}>
                  <Text />
                </View>
              </View>
              <View style={styles.contentContainer}>
                <Grid>
                  <Col style={{ flexDirection: "row" }}>
                    <Icon
                      name="ios-thumbs-up-outline"
                      style={styles.timelineIcon}
                    />
                    <View style={{ paddingLeft: 10 }}>
                      <Text style={styles.timelineContentHeading}>LIKED</Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={styles.newsTypeView}>
                      <Icon name="ios-time-outline" style={styles.timeIcon} />
                      <Text style={styles.time}>09:13pm</Text>
                    </View>
                  </Col>
                </Grid>
              </View>
              <View style={styles.timelineView}>
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineTextHeader}>
                    Life remained mostly small and microscopic until about 580
                    million years ago.
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <View style={styles.timelineView}>
                <View style={styles.timelineContent}>
                  <Text />
                </View>
              </View>
              <View style={styles.contentContainer}>
                <Grid>
                  <Col style={{ flexDirection: "row" }}>
                    <Icon name="ios-copy-outline" style={styles.timelineIcon} />
                    <View style={{ paddingLeft: 13 }}>
                      <Text style={styles.timelineContentHeading}>SAVED</Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={styles.newsTypeView}>
                      <Icon name="ios-time-outline" style={styles.timeIcon} />
                      <Text style={styles.time}>11:03pm</Text>
                    </View>
                  </Col>
                </Grid>
              </View>
              <View style={styles.timelineView}>
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineTextHeader}>
                    The history of Earth is divided into four great eons.
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <View style={styles.timelineView}>
                <View style={styles.timelineContent}>
                  <Text />
                </View>
              </View>
              <View style={styles.contentContainer}>
                <Grid>
                  <Col style={{ flexDirection: "row" }}>
                    <Icon
                      name="ios-archive-outline"
                      type={"Ionicons"}
                      style={styles.timelineIcon}
                    />
                    <View style={{ paddingLeft: 13 }}>
                      <Text style={styles.timelineContentHeading}>ARCHIVED</Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={styles.newsTypeView}>
                      <Icon name="ios-time-outline" style={styles.timeIcon} />
                      <Text style={styles.time}>11:53pm</Text>
                    </View>
                  </Col>
                </Grid>
              </View>
              <View style={styles.timelineView}>
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineTextHeader}>
                    The Earth and Moon have the same oxygen isotopic signature.
                  </Text>
                </View>
              </View>
            </View>
          </Content>

        </Container>
      );
    }
  }
}

function bindAction(dispatch) {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
}

const mapStateToProps = state => ({
  items: state.home.items,
  hasErrored: state.home.hasErrored,
  isLoading: state.home.isLoading
});
export default connect(
  mapStateToProps,
  bindAction
)(Home);
