import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Index } from "./components/index";

export default function App() {
  return (
    <>
      <Header />

      <main className="hero is-dark is-fullheight-with-navbar">
        <Index />
      </main>

      <Footer />
    </>
  );
}
