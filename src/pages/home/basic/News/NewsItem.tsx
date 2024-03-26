import { Link } from '@umijs/max'
import '../styles.css'
interface INewsItem {
  imageSrc: string
  title: string
  excerpt: string
  id: string
  // Add other properties as needed
}
const NewsItem: React.FC<INewsItem> = ({ imageSrc, title, excerpt, id }) => {
  return (
    <div className='wrapper'>
      <div className="box-image">
        <div className="image-cover">
          <img src={imageSrc} alt="Event" />
        </div>
      </div>

      <div className="box-text text-left is-small">
        <div className="box-text-inner blog-post-inner">
          <h5 className="post-title is-large line-clamp-2">
            <Link to={`/detail/${id}`}>{title}</Link>
          </h5>
          <div className="is-divider"></div>
          <p className="from_the_blog_excerpt line-clamp-3 txt-main">{excerpt}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
