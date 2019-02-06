// @flow
import React, {Component} from "react";
import {ImageBackground, TouchableOpacity, View} from "react-native";

import {
  Container,
  Header,
  Text,
  Input,
  Button,
  Icon,
  Body,
  Item,
  Tabs,
  Tab,
  Content, Left, Title, Right, List, ListItem, Thumbnail
} from "native-base";

import styles from "./style";

import datas from "./data";

const bg = require("../../../assets/bg-transparent.png");

type Props = {
  navigation: () => void
};
class Directory extends Component {
  state: {
    offset: {
      x: 0,
      y: 0
    }
  };
  props: Props;
  constructor(props: Props) {
    super(props);
    this.state = {
      offset: {
        x: 0,
        y: 0
      }
    };
  }

  render() {
    return (
      <Container>
        <ImageBackground source={bg} style={styles.container}>
          <Header searchBar rounded>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.openDrawer()}
              >
                <Icon active name="menu"/>
              </Button>
            </Left>
            <Item style={{flex: 7}}>
              <Icon active name="search" />
              <Input placeholder="Search directory" style={{fontFamily: "AdihausDIN"}}/>
              <Icon active name="people" />
            </Item>
          </Header>
          <Content
            scrollEnabled={false}
            extraScrollHeight={-13}
            contentContainerStyle={styles.commentHeadbg}
            style={{backgroundColor: "#fff"}}
          >
            <List
              style={styles.list}
              dataArray={datas}
              renderRow={(data) => (
                <ListItem avatar>
                  <TouchableOpacity style={{flex: 1}}>
                    <View style={{flexDirection: "row"}}>
                      <Left style={{alignSelf: "flex-start", paddingTop: 14}}>
                        <Thumbnail source={{uri: data.image}}/>
                      </Left>
                      <Body>
                      <Text style={styles.listItemTitle}>{data.name}</Text>
                      <Text style={{...styles.listItemText, marginBottom: 8}}>{data.designation}, {data.company}</Text>
                      </Body>
                      <Right style={{justifyContent: "center"}}>
                        <Icon name="arrow-forward" />
                      </Right>
                    </View>
                  </TouchableOpacity>
                </ListItem>
              )}
            />
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Directory;
