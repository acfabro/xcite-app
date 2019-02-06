// @flow
import React, {Component} from "react";
import {Body, Button, Header, Icon, Left, Right, Title} from "native-base";

import styles from "./styles";

class CustomHeader extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Header hasTabs={this.props.hasTabs}>
        <Left>
          {canGoBack ?
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Icon active name="menu"/>
            </Button> :
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon active name="arrow-back"/>
            </Button>
          }
        </Left>
        <Body style={{flex: 3}}>
        <Title style={styles.title}>{this.props.title != null ? this.props.title : "My App"}</Title>
        </Body>
        <Right/>
      </Header>
    );
  }
}

export default CustomHeader;
