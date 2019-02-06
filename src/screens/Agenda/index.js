// @flow
import React, {Component} from "react";
import {Dimensions, ScrollView, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {connect} from "react-redux";
import {
  Button,
  Container,
  Content,
  Icon,
  List,
  ListItem,
  Segment,
  Spinner,
  Tab,
  TabHeading,
  Tabs,
  Text,
  View
} from "native-base";

import dateFormat from "date-fns/format";
import dateParse from "date-fns/parse";
import dateAddSeconds from "date-fns/add_seconds";

import {itemsFetchData} from "../../actions";


import styles from "./styles";
import CustomHeader from "../../components/CustomHeader";

const datas = require("./data.json");

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

class Home extends Component {
  componentDidMount() {
    this.props.fetchData(datas);
  }

  _renderItem(data) {
    return (
      <ListItem>
        <TouchableWithoutFeedback
          onPress={"event_session_id" in data && data.event_session_id > 0 && (() => console.log("Agenda Press"))}
        >
          <View style={styles.listItem}>
            <View style={{
              flexDirection: "column",
              alignSelf: "flex-start",
              alignItems: "center",
              justifyContent: "flex-start",
              marginRight: 10,
            }}>
              <Text style={styles.listItemTimeText}>
                {dateFormat(dateParse(data.time_start), "HH:mm")}
              </Text>
              <Text style={styles.listItemTimeText}>
                {dateFormat(dateAddSeconds(dateParse(data.time_start), data.duration), "HH:mm")}
              </Text>
            </View>
            <View style={{flex: 1, flexDirection: "column", justifyContent: "flex-start"}}>
              <Text style={styles.listItemTitle}>{data.name}</Text>
              {data.description != null && data.description.length > 0 &&
              <Text style={styles.listItemText}>{data.description}</Text>
              }
              {data.venue != null && data.venue.length > 0 &&
              <Text style={styles.listItemText}>Venue: {data.venue}</Text>
              }
              {"event_session_id" in data && data.event_session_id > 0 &&
              <View style={{marginTop: 8}}>
                <Button small bordered>
                  <Icon type="FontAwesome" name="plus" style={{fontSize: 12}}/>
                  <Text>Add to My Agenda</Text>
                </Button>
              </View>
              }
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ListItem>
    );
  }

  render() {
    if (this.props.isLoading) {
      return <Spinner/>;
    } else {
      return (
        <Container>
          <CustomHeader black navigation={this.props.navigation} title={"Agenda"}/>

          <Segment agenda>
            <Button bordered small light first active>
              <Text style={{fontWeight: "bold"}}>All Agenda</Text>
            </Button>
            <Button small bordered light>
              <Text style={{fontWeight: "bold"}}>Group Agenda</Text>
            </Button>
            <Button small bordered light last>
              <Text style={{fontWeight: "bold"}}>My Agenda</Text>
            </Button>
          </Segment>
          <Content
            style={{backgroundColor: "#fff"}}
          >
            <Tabs>
              <Tab
                heading={
                  <TabHeading style={{flexDirection: "column"}}>
                    <Text>Mar</Text>
                    <Text style={{fontSize: 18}}>29</Text>
                  </TabHeading>
                }
              >
                <List
                  dataArray={datas}
                  renderRow={data => this._renderItem(data)}
                />

              </Tab>
              <Tab
                heading={
                  <TabHeading style={{flexDirection: "column"}}>
                    <Text>Mar</Text>
                    <Text style={{fontSize: 18}}>30</Text>
                  </TabHeading>
                }
              >
              </Tab>
              <Tab
                heading={
                  <TabHeading style={{flexDirection: "column"}}>
                    <Text>Mar</Text>
                    <Text style={{fontSize: 18}}>31</Text>
                  </TabHeading>
                }
              >
              </Tab>
              <Tab
                heading={
                  <TabHeading style={{flexDirection: "column"}}>
                    <Text>Apr</Text>
                    <Text style={{fontSize: 18}}>1</Text>
                  </TabHeading>
                }
              >
              </Tab>
              <Tab
                heading={
                  <TabHeading style={{flexDirection: "column"}}>
                    <Text>Apr</Text>
                    <Text style={{fontSize: 18}}>2</Text>
                  </TabHeading>
                }
              >
              </Tab>
            </Tabs>
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
