
import { Link } from 'react-router-dom';

export default function contact() {
  const cities = ["Mumbai","Pune","Chennai","Bengaluru"];
  return (
    <>
      <div>For any queries Contact Us</div>
      {cities.map((city) => (
        <Link to={"/contact/"+city} >{city}</Link>
      ))}
    </>
  );
}
