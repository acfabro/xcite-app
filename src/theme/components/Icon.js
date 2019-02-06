import variable from "./../variables/platform";

export default (variables = variable) => {
	const iconTheme = {
		fontSize: variables.iconFontSize,
		color: variables.textColor,
		".inverse": {
      color: "#fff",
		},
		".forButton": {
			marginLeft: 0,
			marginRight: 0,
		},
	};

	return iconTheme;
};
