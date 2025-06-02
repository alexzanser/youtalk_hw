import React from 'react';
import { Link } from 'react-router-dom';

interface BlogArticleProps {
  image: string;
  categories: string[];
  title: string;
  author: string;
  text: string;
  date: string;
  isSmallImage?: boolean;
}

const BlogArticle: React.FC<BlogArticleProps> = ({
  image,
  categories,
  title,
  author,
  text,
  date,
  isSmallImage = false
}) => {
  return (
    <div className={`main__article-selection-wrap${isSmallImage ? ' small-image' : ''}`}>
      <Link to="/article">
        <img className="main__article-selection-image" src={image} alt="изображение" />
        <ul className="main__article-selection-category">
          {categories.map((category, index) => (
            <li key={index} className="main__article-selection-item">&#129412; {category}</li>
          ))}
        </ul>
        <h4 className="main__article-selection-heading">{title}</h4>
        <p className="main__article-selection-author">Автор: {author}</p>
        <p className="main__article-selection-text">{text}</p>
        <p className="main__article-selection-date">{date}</p>
      </Link>
    </div>
  );
};

export default BlogArticle; 