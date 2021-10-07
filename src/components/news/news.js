import './news.css';

const News = ({ news, title }) => {
  if (!news || news.length === 0) {
    return null;
  }

  return(
    <div>
      <h2>{`${title}:`}</h2>
      <ul className="news-list">
        {news.map(({ objectID, url, title, points, num_comments, created_at, author}) => (
          <li key={objectID} className="news">
            <div className="description">
              <a href={url} className="news-title">{title || 'No title'}</a>
              <span className="text">{`${points || 0} points`}</span>
              <span className="comments">{`${num_comments || 0} comments`}</span>
              <span className="date">{new Date(created_at).toLocaleDateString()}</span>
              <span className="author">{author || 'no author'}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
