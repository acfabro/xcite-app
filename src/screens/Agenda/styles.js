import commonColor from "../../theme/variables/commonColor";

const React = require("react-native");
const {Dimensions, Platform} = React;

const deviceWidth = Dimensions.get("window").width;

export default {
  listItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  listItemTimeText: {
    color: commonColor.textColor,
  },
  listItemTitle: {
    color: commonColor.textColorHeavy,
    fontWeight: "bold",
    fontSize: commonColor.fontSizeBase + 1.5,
  },
  listItemText: {
    color: "#393939",
    fontSize: commonColor.fontSizeBase - 1,
  },
};
