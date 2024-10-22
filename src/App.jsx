import Nav from "./components/Nav";
import {
  Hero,
  Blogs,
  Footer,
} from "./sections";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="">
      <Hero />
      <section className="container">
        <Blogs />
      </section>
      <section className="footer-container">
        <Footer />
      </section>
    </section>
  </main>
);

export default App;

