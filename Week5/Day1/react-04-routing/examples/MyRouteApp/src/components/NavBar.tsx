
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <Link to="/home">Home </Link>
      {"| "}
      <Link to="/about">About Us </Link>
      {"| "}
      <Link to="/contact">Contact Us </Link>
      {"| "}
      <Link to="/blog">Blogs </Link>
      {"| "}
    </nav>
  );
}
