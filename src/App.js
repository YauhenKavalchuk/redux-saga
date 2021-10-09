import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const App = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

export default App;
