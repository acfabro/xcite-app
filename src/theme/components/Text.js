import variable from "./../variables/platform";
import * as commonColor from "../variables/commonColor";

export default (variables = variable) => {
	const textTheme = {
		fontSize: variables.DefaultFontSize - 1,
		fontFamily: variables.fontFamily,
		color: variables.textColor,
		".note": {
			color: "#a7a7a7",
			fontSize: variables.noteFontSize,
		},
		".inverse": {
			color: variables.inverseTextColor,
			fontSize: variables.noteFontSize,
      ".bold": {
        fontFamily: variables.fontFamily + "-Bold",
      }
		},
		".bold": {
			fontFamily: variables.fontFamily + "-Bold",
      ".inverse": {
        color: variables.inverseTextColor,
        fontSize: variables.noteFontSize,
      }
		}
	};

	return textTheme;
};
