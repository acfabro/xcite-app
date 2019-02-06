import React, {Component} from "react";
import {Provider} from "react-redux";
import {StyleProvider} from "native-base";
import {PersistGate} from "redux-persist/integration/react";
import App from "../App";
import configureStore from "./configureStore";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";
import {Font, AppLoading} from "expo";

const storeObj = {};

export default class Setup extends Component {
  state = {
    appIsReady: false,
  };

  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({isLoading: false}))
    };
    storeObj.store = this.state.store;
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  render() {
    console.log("Rendering Setup");
    if (this.state.appIsReady) {
      return (
        <StyleProvider style={getTheme(variables)}>
          <Provider store={this.state.store.store}>
            <PersistGate persistor={this.state.store.persistor}>
              <App/>
            </PersistGate>
          </Provider>
        </StyleProvider>
      );
    } else {
      return(<AppLoading />);
    }
  }

  async _loadAssetsAsync() {
    try {
      await Font.loadAsync({
        'AdihausDIN': require('../../assets/SS20APAC/fonts/AdihausDIN-Regular.ttf'),
        'AdihausDIN-Bold': require('../../assets/SS20APAC/fonts/AdihausDIN-Bold.ttf'),
        'adineue PRO': require('../../assets/SS20APAC/fonts/adineuePRO-Regular.ttf'),
        'adineue PRO-Bold': require('../../assets/SS20APAC/fonts/adineuePRO-Bold.ttf'),
        'adineue PRO-Black': require('../../assets/SS20APAC/fonts/adineuePRO-Black.ttf'),
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      console.log("Fonts loaded");
      this.setState({appIsReady: true});
    }
  }
}
