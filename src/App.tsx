import Contributions from "containers/Contributions";
import Footer from "containers/Footer";
import Header from "containers/Header";
import HeaderIntro from "containers/HeaderIntro";
import HeaderNav from "containers/HeaderNav";
import Main from "containers/Main";

export default function App() {
  return (
    <>
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
    </>
  );
}
