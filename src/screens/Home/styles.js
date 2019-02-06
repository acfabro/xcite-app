import * as commonColor from "../../theme/variables/commonColor";

const React = require("react-native");
const {Dimensions, Platform} = React;

const deviceWidth = Dimensions.get("window").width;
const primary = commonColor.brandPrimary;

export default {
  newsContent: {
    flexDirection: "column",
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "#ddd"
  },
  newsHeader: {
    color: "#444",
    fontWeight: "bold"
  },
  newsLink: {
    color: Platform.OS === "android" ? "#777" : "#666",
    fontSize: 12,
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  newsTypeView: {
    borderBottomWidth: 1,
    borderBottomColor: Platform.OS === "android" ? "#777" : "#666",
    alignSelf: "flex-end"
  },
  newsTypeText: {
    color: Platform.OS === "android" ? "#777" : "#666",
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 2
  },
  newsPoster: {
    height: 330,
    width: null,
    flex: 1,
    position: "relative"
  },
  newsPosterHeader: {
    fontWeight: "900"
  },
  newsPosterLink: {
    opacity: 0.8,
    fontSize: 12,
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  newsPosterTypeView: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignSelf: "flex-end"
  },
  newsPosterTypeText: {
    opacity: 0.8,
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 2
  },
  timeIcon: {
    fontSize: 15,
    marginLeft: Platform.OS === "android" ? 15 : 0,
    paddingLeft: Platform.OS === "android" ? 0 : 20,
    paddingRight: 5,
    marginTop: Platform.OS === "android" ? 0 : -1,
    color: "#666"
  },
  timePosterIcon: {
    fontSize: 20,
    marginLeft: Platform.OS === "android" ? 20 : 0,
    paddingLeft: Platform.OS === "android" ? 0 : 20,
    paddingRight: 5,
    marginTop: Platform.OS === "android" ? -1 : -2,
    color: "#fff"
  },
  slide: {
    flex: 1,
    width: deviceWidth,
    height: 330,
    backgroundColor: "transparent"
  },
  swiperTextContent: {
    position: "absolute",
    bottom: -5,
    padding: 20
  },
  swiperDot: {
    backgroundColor: "rgba(0,0,0,.8)",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 0
  },
  swiperActiveDot: {
    backgroundColor: "#fff",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 0
  },
  swiperContentBox: {
    paddingTop: 20,
    paddingBottom: 20
  },
  container: {
    flex: 1,
    width: null,
    height: null
  },
  logoHeader: {
    width: 20,
    height: 28,
    alignSelf: "center"
  },
  text: {
    fontSize: 15,
    color: "#000",
    marginBottom: 10
  },
  header: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: Platform.OS === "ios" ? undefined : -30
  },
  rowHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingTop: Platform.OS === "android" ? 0 : 0
  },
  imageHeader: {
    height: 25,
    width: 95,
    resizeMode: "contain"
  },
  overviewHeaderContainer: {
    padding: 20,
    paddingTop: 30,
    alignItems: "center",
    backgroundColor: primary
  },
  overviewHeader: {
    fontSize: 22,
    paddingBottom: 10,
    fontWeight: "900",
    alignSelf: "center",
    textAlign: "center"
  },
  overviewHead: {
    opacity: 0.8,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF"
  },
  timelineView: {
    paddingLeft: 30,
    backgroundColor: "#fff"
  },
  timelineContent: {
    paddingLeft: 20,
    borderLeftWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 15
  },
  contentContainer: {
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20
  },
  timelineIcon: {
    alignSelf: "center",
    color: "#999"
  },
  timelineContentHeading: {
    color: primary,
    fontSize: 12,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 8
  },
  newsTypeView: {
    alignSelf: "flex-end",
    flexDirection: "row",
    marginTop: 8
  },
  timeIcon: {
    fontSize: 20,
    paddingRight: 10,
    color: "#666",
    marginLeft: Platform.OS === "android" ? 15 : 0,
    paddingLeft: Platform.OS === "android" ? 0 : 20,
    marginTop: Platform.OS === "android" ? -2 : -3
  },
  time: {
    color: "#666",
    fontSize: 12,
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  timelineTextHeader: {
    color: "#222",
    fontSize: 14,
    fontWeight: "700",
    paddingTop: Platform.OS === "android" ? 5 : 0
  },
  timelineTextComment: {
    color: "#aaa",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 5
  },
  bg: {
    backgroundColor: "#FFF"
  }
};
