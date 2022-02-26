import Header from "./Header";
import TinderCards from "./Tindercardscontainer";
import Footer from "./Footer";

function Main({ people }) {
  return (
    <div>
      <Header />
      <TinderCards people={people} />
      <Footer people={people} />
    </div>
  );
}

export default Main;
