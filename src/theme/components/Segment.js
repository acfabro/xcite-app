import variable from "./../variables/platform";
import * as commonColor from "../variables/commonColor";

export default (variables = variable) => {
	const segmentTheme = {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: commonColor.brandPrimary,
		".agenda": {
      paddingBottom: 12,
      "NativeBase.Button": {
        ".active": {
          backgroundColor: "#fff",
          "NativeBase.Text": {
            color: commonColor.brandPrimary,
          },
        },
      },
    },
	};

	return segmentTheme;
};
