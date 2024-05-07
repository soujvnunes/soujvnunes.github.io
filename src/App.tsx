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
  return (
    <Provider store={store}>
      <MotionConfig reducedMotion="user" transition={{ ease: "easeOut" }}>
        <Header>
          <HeaderIntro />
          <HeaderNav />
        </Header>
        <Main>
          <Contributions />
          {/**
           * TODO: implement on 2.1
           *
           * <About />
           */}
        </Main>
        <Footer />
      </MotionConfig>
    </Provider>
  );
}
