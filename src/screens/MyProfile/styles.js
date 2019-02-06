import {StyleSheet, Dimensions} from "react-native";
import * as commonColor from "../../theme/variables/commonColor";


const deviceWidth = Dimensions.get("window").width;
const primary = require("../../theme/variables/commonColor").brandPrimary;

export default {
  container: {
    flex: 1,
    width: null,
    height: null
  },
  profileInfoContainer: {
    backgroundColor: primary,
    paddingTop: 10
  },
  profileUser: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 5
  },
  profileUserInfo: {
    alignSelf: "center",
    opacity: 0.8,
    fontWeight: "bold",
    color: "#FFF"
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  profileInfo: {
    alignSelf: "center",
    paddingTop: 5,
    paddingBottom: 10
  },
  actions: {
    marginTop: 18,
    marginBottom:18,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  action: {
    flexDirection: "column",
    alignItems: "center",
  },
  actionButton: {
    width: 58,
    height: 58,
    borderRadius: 58,
    backgroundColor: "#999",
    alignSelf: null,
    marginTop: 8,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  actionIcon: {
    marginLeft: 0,
    marginRight: 0
  },
  actionText: {
    color: commonColor.textColor,
    fontSize: 12
  },
  contact: {
    marginTop: 24,
    marginLeft: 15,
    marginRight: 15,
  },
  contactItem: {
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  contactItemText: {
    fontFamily: "AdihausDIN",
  },

};
