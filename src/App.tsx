import { Tab } from "@headlessui/react";
import classNames from "consts/classNames";
import Contributions from "containers/Contributions";
import Footer from "containers/Footer";
import Header from "containers/Header";

export default function App() {
  return (
    <Tab.Group as="div" className={classNames.container.root}>
      <Header />
      <Tab.Panels as="main">
        <Tab.Panel>
          <Contributions />
        </Tab.Panel>
        <Tab.Panel>About</Tab.Panel>
      </Tab.Panels>
      <Footer />
    </Tab.Group>
  );
}
