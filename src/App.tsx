import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Provider } from "react-redux";
import { MotionConfig } from "framer-motion";

import store from "config/store";
import Contributions from "containers/Contributions";
import Footer from "containers/Footer";
import Header from "containers/Header";
import HeaderIntro from "containers/HeaderIntro";
import HeaderNav from "containers/HeaderNav";
import Main from "containers/Main";

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Provider store={store}>
      <MotionConfig reducedMotion="user" transition={{ ease: "easeOut" }}>
        <Header>
          <HeaderIntro />
          <HeaderNav />
        </Header>
        <Main>
          <Contributions />
        </Main>
        <Footer />
      </MotionConfig>
    </Provider>
  );
}
