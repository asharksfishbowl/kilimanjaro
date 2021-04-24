import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
// import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Copyright from '../Copyright.js';
// import Footer from './Footer';

import TopBar from '../bars/TopBar.js';
import BottomBar from '../bars/BottomBar.js';

import BlogController from './controllers/Blog.js';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  sidebar: {
    // position: 'fixed',
  },
}));

// const sections = [
//   { title: 'Technology', url: '#' },
//   { title: 'Design', url: '#' },
//   { title: 'Culture', url: '#' },
//   { title: 'Business', url: '#' },
//   { title: 'Politics', url: '#' },
//   { title: 'Opinion', url: '#' },
//   { title: 'Science', url: '#' },
//   { title: 'Health', url: '#' },
//   { title: 'Style', url: '#' },
//   { title: 'Travel', url: '#' },
// ];

// const mainFeaturedPost = {
//   title: 'Title of a longer featured blog post',
//   description:
//     "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
//   image: 'https://source.unsplash.com/random',
//   imgText: 'main image description',
//   linkText: 'Continue reading…',
// };

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];



const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

function Blog(props) {
  const classes = useStyles();
  const [blogs, setBlogs] = useState('');
  const [blog, setBlog] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => BlogController.getBlogs(setBlogs);
    const fetchBlog = async () => BlogController.getBlogById(id, setBlog);
    fetchData();
    fetchBlog();
  }, []);

  return (
      <React.Fragment>
        <CssBaseline />
        <TopBar title="Blog Name Here" position="relative" {...props}/>
        <Container maxWidth="lg">
          <main >
            <MainFeaturedPost post={blog} />
            <Grid container spacing={4}>
              {featuredPosts && featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={6} className={classes.mainGrid}>
              <Main title="Post Details" posts={blogs} url={blog.youtube}/>
              <Sidebar
                title={blog.title ? blog.title : 'Missing Title'}
                description={blog.description ? blog.description : 'Missing description'}
                social={sidebar.social}
                className={classes.sidebar}
              />

            </Grid>

          </main>

        </Container>
        <BottomBar position="fixed" title=<Copyright color='secondary'/> />
      </React.Fragment>
    );
  }

  export default Blog;
