// @flow
import React, {Component} from "react";
import {ImageBackground, TouchableOpacity, View} from "react-native";
import {Body, Container, Content, Icon, Left, List, ListItem, Right, Text, Thumbnail} from "native-base";
import CustomHeader from "../../components/CustomHeader";
import styles from "./style";
import datas from "./data";

const bg = require("../../../assets/bg-transparent.png");

class Speakers extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Profile",
      header: <CustomHeader navigation={navigation} title={"Speakers"} />
    };
  };

  _itemPressed(data) {
    console.log("Speaker pressed: " + data.id);
    this.props.navigation.push("Profile", {data});
  }

  render() {
    return <Container>
      <ImageBackground source={bg} style={styles.container}>
        {/*<CustomHeader hasTabs navigation={this.props.navigation} title={"Speakers"}/>*/}

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
                <TouchableOpacity style={{flex: 1}} onPress={() => this._itemPressed(data)}>
                  <View style={{flexDirection: "row"}}>
                    <Left style={{alignSelf: "flex-start", paddingTop: 14}}>
                      <Thumbnail source={{url: data.image}}/>
                    </Left>
                    <Body>
                    <Text style={styles.listItemTitle}>{data.name}</Text>
                    <Text style={{...styles.listItemText, marginBottom: 8}}>{data.designation}, {data.company}</Text>
                    <Text style={styles.listItemAgenda}>Sessions:</Text>
                    <Text style={styles.listItemAgenda}>1. The Future, Today</Text>
                    <Text style={styles.listItemAgenda}>2. Advanced Topics</Text>
                    </Body>
                    <Right style={{justifyContent: "center"}}>
                      <Icon name={"ios-arrow-forward"} type={"Ionicons"} />
                    </Right>
                  </View>
                </TouchableOpacity>
              </ListItem>
            )}
          />
        </Content>
      </ImageBackground>
    </Container>;
  }
}

export default Speakers;
