import Benefit from "./Components/Benefit/Benefit";
import Blog from "./Components/Blog/Blog";
import CallToAction from "./Components/CallToAction/CallToAction";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Story from "./Components/OurStory/Story";
import Product from "./Components/Product/Product";
import Service from "./Components/Service/Service";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Story />
      <Service />
      <Product />
      <CallToAction />
      <Benefit />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
