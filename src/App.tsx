import { Tab } from "@headlessui/react";
import classNames from "consts/classNames";
import useTab from "hooks/useTab";
import Contributions from "containers/Contributions";
import Footer from "containers/Footer";
import Header from "containers/Header";
import HeaderIntro from "containers/HeaderIntro";
import HeaderNav from "containers/HeaderNav";

export default function App() {
  const tab = useTab();

  return (
    <Tab.Group defaultIndex={tab.current === tab.group.contributions ? 0 : 1}>
      <Header className={classNames.container.root}>
        <HeaderIntro />
        <HeaderNav />
      </Header>
      <Tab.Panels as="main" className={classNames.container.root}>
        <Contributions />
        <Tab.Panel>About</Tab.Panel>
      </Tab.Panels>
      <Footer />
    </Tab.Group>
  );
}
