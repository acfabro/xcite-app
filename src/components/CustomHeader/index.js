// @flow
import React, {Component} from "react";
import {Image} from "react-native";
import {Icon, Button, Left, Right, Body, Header, Text, Title} from "native-base";

import styles from "./styles";

const headerLogo = require("../../../assets/header-logo.png");

class CustomHeader extends Component {
  render() {
    const navigation = this.props.navigation;

    // defaults
    const titleDefaults = {
      bold: "bold" in this.props? this.props.bold: true,
      black: "black" in this.props? this.props.black: false,
      inverse: "inverse" in this.props? this.props.inverse: true,
    };

    return (
      <Header hasTabs={this.props.hasTabs}>
        <Left>
          {this.props.back ?
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon active name="arrow-back"/>
            </Button> :
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Icon active name="menu"/>
            </Button>
          }
        </Left>
        <Body style={{flex: 3}}>
          <Title
            {...titleDefaults}
            style={{marginTop: 6, fontSize: 18}}
          >{this.props.title != null ? this.props.title : "SS20 APAC Sign-Off"}</Title>
        </Body>
        <Right/>
      </Header>
    );
  }
}

export default CustomHeader;
