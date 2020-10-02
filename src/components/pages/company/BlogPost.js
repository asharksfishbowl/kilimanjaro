import React from 'react';
import Styles from './Styles.js';
import img from '../../../assets/images/Oopseis.jpg';

const BlogPost = () => {
  const classes = Styles();

  return (
    <div className={classes.blogpost}>
        <div className={classes.imageWrapper}>
          <img className="responsive-img" height="100%" width="100%" src={img} alt="Blog Img"/>
        </div>
        <div className={classes.blogpostContent}>
          <h4>This is a standard post</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est tenetur in.</p>
        </div>
        <div className={classes.blogpostFooter}>
          <div className={classes.row}>
            <div className={classes.blogpostFooterContent}>
              <i className="material-icons">today</i>
              <span>Feb 26, 2019</span>
            </div>
            <div className={classes.blogpostFooterContent}>
              <i className="material-icons">chat bubble outline</i>
              <a href="/">6</a>
            </div>
          </div>
        </div>
        <div className={classes.readMore}>
          <a href="/">Read more</a>
        </div>
    </div>
  );
};

export default BlogPost;
