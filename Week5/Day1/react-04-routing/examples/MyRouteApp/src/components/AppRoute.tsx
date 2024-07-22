
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import About from "../views/About";
import Contact from "../views/Contact";
import Blogs from '../views/Blogs';
import Address from '../views/Address';

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}>
        <Route path="/contact/:city" element={<Address />}></Route>
      </Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blog" element={<Blogs />}></Route>
      <Route path="/blog/:id" element={<Blogs />}></Route>
    </Routes>
  );
}
