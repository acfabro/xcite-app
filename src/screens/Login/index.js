/* eslint-disable no-console */
// @flow
import React, { Component } from "react";
import { NavigationActions, StackActions } from "react-navigation";
import { Image, ImageBackground, Platform, StatusBar } from "react-native";
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  Icon,
  View,
  Spinner,
  Toast,
} from "native-base";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { loginUser } from "./actions";

import styles from "./styles";

import {
  required,
  maxLength15,
  minLength6,
  validEmail,
  alphaNumeric,
} from "./validation";

const bg = null; // require("../../../assets/bg.png");
const logo = require("../../../assets/logo.png");

declare type Any = any;
class LoginForm extends Component {
  textInput: Any;

  constructor(props) {
    super(props);

    this.state = {
      email: null,
      passwd: null
    };
  }

  componentWillMount() {
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: "Drawer"})]
      })
    );
  }

  componentDidMount() {
    this.props.isLoading = false;
  }

  componentWillReceiveProps(props) {
    //
    console.log("Login: componentWillReceivePropss: " + JSON.stringify(props));

    // see if login state changed to true
    if (this.props.isLoggedIn === false && props.isLoggedIn === true) {
      this.props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: "Drawer"})]
        })
      );
    }
  }

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} style={styles.inputGrp}>
          <Icon
            active
            name={input.name === "email" ? "mail" : "unlock"}
            style={{ color: "#fff" }}
          />
          <Input
            ref={c => (this.textInput = c)}
            placeholderTextColor="#FFF"
            style={styles.input}
            placeholder={input.name === "email" ? "Email" : "Password"}
            secureTextEntry={input.name === "password" ? true : false}
            {...input}
          />
          {touched && error ? (
            <Icon
              active
              style={styles.formErrorIcon}
              onPress={() => this.textInput._root.clear()}
              name="close"
            />
          ) : (
            <Text />
          )}
        </Item>
        {touched && error ? (
          <Text style={styles.formErrorText1}>{error}</Text>
        ) : (
          <Text style={styles.formErrorText2}>error here</Text>
        )}
      </View>
    );
  }

  login({email, password}) {
    console.log(`Logging in: ${email} ${password}`);

    if (this.props.valid) {
      this.props.login({ email, password });
    }
  }

  buttonContents() {
    if (this.props.isLoading) {
      return (
        <View>
          <Text>Logging In</Text>
        </View>
      );
    } else {
      return "Login";
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={bg} style={styles.background}>
          <Content contentContainerStyle={{ flex: 1 }}>
            <View style={styles.container}>
              <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.container}>
              <View style={styles.form}>
                <Field
                  name="email"
                  component={this.renderInput}
                  type="email"
                  validate={[validEmail, required]}
                />
                <Field
                  name="password"
                  component={this.renderInput}
                  type="password"
                  validate={[alphaNumeric, minLength6, maxLength15, required]}
                />

                <Button
                  rounded
                  primary
                  block
                  large
                  style={
                    this.props.isLoading
                      ? styles.loginBtnLoading
                      : styles.loginBtn
                  }
                  onPress={handleSubmit((values) => this.login(values))}
                >
                  <Text
                    style={
                      Platform.OS === "android"
                        ? { fontSize: 16, textAlign: "center" }
                        : { fontSize: 16, fontWeight: "900" }
                    }
                  >
                    { this.buttonContents() }
                  </Text>
                </Button>

              </View>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
const Login = reduxForm({
  form: "login"
})(LoginForm);

//This function simply converts our Actions into usable props.
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ login: loginUser }, dispatch);
//
// };

const mapDispatchToProps = {
  login: loginUser
};

//This function, simply takes your reducer data, that is required, and converts it into a usable Prop.
const mapStateToProps = (state) => {
  return {
    // data: state.authReducer.userData,
    isLoading: state.auth.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
    lastError: state.auth.lastError,
    hasError : state.auth.hasError,
    resetNavigation : state.auth.resetNavigation
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
