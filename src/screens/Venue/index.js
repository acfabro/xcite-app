// @flow
import React, {Component} from "react";
import {ImageBackground, TouchableOpacity, WebView} from "react-native";

import {
  Body,
  Button,
  Container,
  Content,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Thumbnail,
  Title,
  View
} from "native-base";

import styles from "./style";

import CustomHeader from "../../components/CustomHeader";
import MapView, {Marker} from "react-native-maps";

const bg = require("../../../assets/launch-screen.png");

type Props = {
  navigation: () => void
};

class Venue extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <ImageBackground source={bg} style={styles.container}>
          <CustomHeader hasTabs navigation={this.props.navigation} title={"Venue"}/>
          <Content
            scrollEnabled={true}
            extraScrollHeight={-13}
            contentContainerStyle={styles.commentHeadbg}
            style={{backgroundColor: "#fff"}}
          >
            <View style={{flexDirection: "row", alignItems: "center", margin: 15}}>
              <View style={{flex: 1, flexDirection: "column"}}>
                <Text bold>Xiamen International Conference & Exhibition Center</Text>
                <Text style={{fontSize: 14}}>198 Huizhan Rd, Siming Qu, Xiamen Shi, Fujian Sheng, China, 361008</Text>
              </View>
              <Button transparent bordered style={styles.shareButton}>
                <Icon active forButton name={"share"} type={"MaterialIcons"} />
              </Button>
            </View>

            <View style={{marginBottom: 18}}>
              <MapView
                style={{height: 250, width: null, flex: 1}}
                initialRegion={{
                  latitude: 24.467412,
                  longitude: 118.183702,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: 24.467412,
                    longitude: 118.183702,
                  }}
                  title={"Intercontinental Xiamen"}
                />
              </MapView>


              {/*
              <WebView
                style={{height: 300, width: null, flex: 1}}
                useWebKit={true}
                originWhitelist={["*"]}
                source={{html: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.5249440131524!2d118.18149131502834!3d24.467261984240977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34149bb8381ac613%3A0x39b5bc31ea97a619!2sXiamen+International+Conference+%26+Exhibition+Center+%EF%BC%88Northwest+Gate%EF%BC%89!5e0!3m2!1sen!2sph!4v1549382774582\" width=\"100%\" height=\"100%\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>"}}
              />
              */}
            </View>

            <View style={{margin: 15}}>
              <Button block bold style={{marginBottom: 12}}>
                <Icon name={"directions"} type={"MaterialIcons"} />
                <Text>Directions</Text>
              </Button>
              <Button block style={{marginBottom: 12}}>
                <Icon name={"directions-bus"} type={"MaterialIcons"} />
                <Text>Shuttle Info</Text>
              </Button>
              <Button block style={{marginBottom: 12}}>
                <Icon name={"map"} type={"MaterialIcons"} />
                <Text>Event Area Maps</Text>
              </Button>
            </View>

          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Venue;
