import React, { useState } from 'react'
import Header from '../../components/Home/Header'
import SearchBar from '../../components/Home/SearchBar'
import BlogList from '../../components/Home/BlogList'
import { blogList } from '../../config/data'
import EmptyList from '../../components/common/Chip/EmptyList'
import Footer from '../../components/footer/Footer'

const Home = () => {
 const [blogs, setBlogs] = useState(blogList);
 const [searchKey, setSearchKey] = useState('')

 //search submit
 const handleSearchSubmit = event => {
  event.preventDefault();
  handleSearchResult()
 }

 //search for blogs my category

 const handleSearchResult= () => {
    const allBlogs = blogList;
    const filterBlogs= allBlogs.filter(blog => 
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));

    setBlogs(filterBlogs);
 }

 const handleClearSearch = () => {
  setBlogs(blogList);
  setSearchKey('');
 }


  return (
    <div>
      {/* page Header */}
      <Header/>
      {/* search Bar */}
      <SearchBar 
       value={searchKey} 
       clearSearch={handleClearSearch}
       formSubmit={handleSearchSubmit} 
       handleSearchKey={(e) => 
       setSearchKey(e.target.value)}
        />

      {/* Blog list and Empty List */}

      {!blogs.length ? <EmptyList/> : <BlogList blogs={blogs} />}
      <Footer/>
    </div>
  )
}

export default Home
