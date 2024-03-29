import Contributions from "containers/Contributions";
import Footer from "containers/Footer";
import Header from "containers/Header";
import Intro from "containers/Intro";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex grow flex-col">
        <Intro />
        <Contributions />
        <Footer />
      </main>
    </>
  );
}
