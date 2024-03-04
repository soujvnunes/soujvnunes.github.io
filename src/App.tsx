import ContributionsSection from "components/ContributionsSection";
import Footer from "components/Footer";
import Header from "components/Header";
import IntroSection from "components/IntroSection";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex grow flex-col">
        <IntroSection />
        <ContributionsSection />
        <Footer />
      </main>
    </>
  );
}
