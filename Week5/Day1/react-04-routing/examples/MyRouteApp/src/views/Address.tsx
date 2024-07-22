
import { useParams } from 'react-router-dom'

export default function Address() {
    const { city } = useParams();
  return (
      <div>
          Offices in {city}
    </div>
  )
}
