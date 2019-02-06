// @flow
import React from "react";
import {Platform} from "react-native";
import {StackNavigator, DrawerNavigator} from "react-navigation";
import {Root} from "native-base";
import Login from "./screens/Login/";
import ForgotPassword from "./screens/ForgotPassword";
import SignUp from "./screens/SignUp/";
import Walkthrough from "./screens/Walkthrough/";
import Comments from "./screens/Comments/";
import Channel from "./screens/Channel";
import Story from "./screens/Story";
import Home from "./screens/Home/";
import Channels from "./screens/Channels";
import Sidebar from "./screens/Sidebar";
import Overview from "./screens/Overview";
import Calendar from "./screens/Calendar/";
import Timeline from "./screens/Timeline";
import Feedback from "./screens/Feedback/";
import Profile from "./screens/Profile/";
import MyProfile from "./screens/MyProfile/";
import Settings from "./screens/Settings";

import Agenda from "./screens/Agenda";
import Speakers from "./screens/Speakers";
import Directory from "./screens/Directory";
import Venue from "./screens/Venue";
import Shuttle from "./screens/Shuttle";

const platform = Platform.OS;

const SpeakerStack = StackNavigator(
  {
    Speakers: {screen: Speakers},
    Profile: {screen: Profile},
  },
  {
    index: 0,
    initialRouteName: "Speakers",
    headerMode: platform === "ios" ? "float" : "screen",
  }
);

const Drawer = DrawerNavigator(
  {
    Home: {screen: Home},
    Channels: {screen: Channels},
    Agenda: {screen: Agenda},
    Speakers: {screen: SpeakerStack},
    Directory: {screen: Directory},
    Venue: {screen: Venue},
    Shuttle: {screen: Shuttle},
    Overview: {screen: Overview},
    Calendar: {screen: Calendar},
    Timeline: {screen: Timeline},
    Feedback: {screen: Feedback},
    Profile: {screen: Profile},
    MyProfile: {screen: MyProfile},
    Settings: {screen: Settings}
  },
  {
    initialRouteName: "Home",
    contentComponent: props => <Sidebar {...props} />
  }
);

const App = StackNavigator(
  {
    Login: {screen: Login},
    SignUp: {screen: SignUp},
    ForgotPassword: {screen: ForgotPassword},
    Walkthrough: {screen: Walkthrough},
    Story: {screen: Story},
    Comments: {screen: Comments},
    Channel: {screen: Channel},
    Drawer: {screen: Drawer}
  },
  {
    index: 0,
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <App/>
  </Root>;
