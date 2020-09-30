import React from 'react';
import Styles from './Styles.js';
import BlogPost from './BlogPost';

const LatestNews = () => {
  const classes = Styles();

  return (
    <section id="news" className={classes.latestNews}>
      <div className={classes.container}>
        <h1>Latest from the Loop</h1>
        <div className={classes.row}>
          <div className="col m4">
            <BlogPost />
          </div>
          <div className="col m4">
            <BlogPost />
          </div>
          <div className="col m4">
            <BlogPost />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
