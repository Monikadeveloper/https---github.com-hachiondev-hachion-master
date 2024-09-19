import React from 'react';
import BlogCard from './BlogCard';
import blogImage1 from '../../Assets/blogcardimage1.png';
import blogImage2 from '../../Assets/blogcardimage2.png';
import './Corporate.css';

const BlogCardHolder = () => {
  return (
    <>
      <div className='blogs-container'>
        <BlogCard imageSrc={blogImage1} content="Project Management" />
        <BlogCard imageSrc={blogImage1} content="Data Science" />
        <BlogCard imageSrc={blogImage1} content="QA Testing" />
        <BlogCard imageSrc={blogImage2} content="Programming" />
        <BlogCard imageSrc={blogImage2} content="Salesforce" />
        <BlogCard imageSrc={blogImage2} content="Service now" />
        <BlogCard imageSrc={blogImage2} content="Cloud Computing" />
        <BlogCard imageSrc={blogImage2} content="Workday" />
        <BlogCard imageSrc={blogImage2} content="Mulesoft" />
        <BlogCard imageSrc={blogImage2} content="Cyber Security" />
        <BlogCard imageSrc={blogImage2} content="Machine Learning" />
        <BlogCard imageSrc={blogImage2} content="BlockChain" />
        <BlogCard imageSrc={blogImage2} content="Deep Learning" />
        <BlogCard imageSrc={blogImage2} content="Data Warehousing & ETL" />
        <BlogCard imageSrc={blogImage2} content="Mobile Development" />
        <BlogCard imageSrc={blogImage2} content="Big Data" />
        <BlogCard imageSrc={blogImage2} content="RPA" />
        <BlogCard imageSrc={blogImage2} content="BPM" />
        <BlogCard imageSrc={blogImage2} content="Flutter" />
        <BlogCard imageSrc={blogImage2} content="Microsoft" />
        <BlogCard imageSrc={blogImage2} content="ScrumMaster" />
       
      </div>
    </>
  );
}

export default BlogCardHolder;
