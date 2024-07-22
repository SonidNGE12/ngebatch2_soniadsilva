
import { Link, useParams } from 'react-router-dom';

export default function Blogs() {
    const blogs = [
      { id: 1, title: "blog1" },
      { id: 2, title: "blog2" },
      { id: 3, title: "blog3" },
    ];
    const { id } = useParams()
    if (!id)
        {
        return (
          <>
                <div>Blogs Home Page</div>
                <ul>
                    
                    {blogs.map(b => <li><Link to={"/blog/"+b.id}>{b.title}</Link></li>)}
                    
                </ul>
          </>
        );
    }
    return (
      <>
            <div>You have selected blog {id}</div>
            <Link to="/blog">Back</Link>
      </>
    );
}
