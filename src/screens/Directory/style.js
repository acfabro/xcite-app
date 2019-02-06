const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceWidth = Dimensions.get("window").width;
const commonColor = require("../../theme/variables/commonColor");

export default {
  container: {
    width: null,
    height: null,
    flex: 1
  },
  list: {
    backgroundColor: "#fff",
  },
  listItemTitle: {
    color: commonColor.textColorHeavy,
    fontWeight: "bold",
    fontSize: commonColor.fontSizeBase + 1,
  },
  listItemText: {
    color: commonColor.textColor,
    fontSize: commonColor.fontSizeBase - 1
  },
  listItemAgenda: {
    color: commonColor.textColor,
    fontSize: commonColor.fontSizeBase - 2,
  },
};
