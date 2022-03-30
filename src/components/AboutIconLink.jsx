import {FaQuestion} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to={{
        pathname: 'about',
        search: '?sort=10',
        hash: '123'
      }}>
        <FaQuestion/>
      </Link>
    </div>
  )
}

export default AboutIconLink
