// @flow
import React, {Component} from "react";
import {ImageBackground, TouchableOpacity, View} from "react-native";

import {Body, Container, Content, Icon, Left, List, ListItem, Right, Text, Thumbnail} from "native-base";

import styles from "./style";

import datas from "./data";
import CustomHeader from "../../components/CustomHeader";

const bg = require("../../../assets/bg-transparent.png");

class Shuttle extends Component {

  render() {
    return (
      <Container>
        <ImageBackground source={bg} style={styles.container}>
          <CustomHeader hasTabs navigation={this.props.navigation} title={"Shuttle Info"}/>

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
                        <Thumbnail style={{borderRadius: 4}} square source={require("../../../assets/shuttle.jpg")}/>
                      </Left>
                      <Body style={{flex: 3}}>
                        <Text style={{...styles.listItemTitle, marginBottom: 6}}>{data.name}</Text>

                        <View style={{flexDirection: "row", alignItems: "center"}}>
                          <Icon name={"calendar"} type={"MaterialCommunityIcons"} style={{fontSize: 18, marginRight: 5}}/>
                          <Text style={styles.listItemText}>28 Mar 2019</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", marginBottom: 6}}>
                          <Icon name={"clock"} type={"MaterialCommunityIcons"} style={{fontSize: 18, marginRight: 5}}/>
                          <Text style={styles.listItemText}>07.00 - 07.30</Text>
                        </View>

                        <Text style={styles.listItemAgenda}>Toyota Alphard - ABC1234</Text>
                        <Text style={styles.listItemAgenda}>Location: Arrival Bay 8</Text>
                        <Text style={styles.listItemAgenda}>Contact: +65 1234 1234</Text>
                      </Body>
                      <Right style={{justifyContent: "center"}}>
                        <Icon name="arrow-forward"/>
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

export default Shuttle;
