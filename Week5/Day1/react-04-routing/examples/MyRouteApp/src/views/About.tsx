
import { useNavigate } from 'react-router-dom'

export default function about() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <>
      <div>More About Us</div>
      <button onClick={handleClick}>Home</button>
    </>
  );
  
}
