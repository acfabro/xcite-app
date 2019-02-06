// @flow
import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Tabs,
  Tab,
  Text,
  TabHeading
} from "native-base";

import styles from "./styles";

import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";
import CustomHeader from "../../components/CustomHeader";

const headerLogo = require("../../../assets/header-logo.png");

class Channels extends Component {

  render() {
    return (
      <Container>
        <CustomHeader navigation={this.props.navigation} title={"Gallery"} />
        <Tabs style={{ backgroundColor: "#fff" }}>
          <Tab heading="Mar 5">
            <TabOne navigation={this.props.navigation} />
          </Tab>
          <Tab heading="Mar 6">
            <TabTwo navigation={this.props.navigation} />
          </Tab>
          <Tab heading="Mar 7">
            <TabThree navigation={this.props.navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Channels;
