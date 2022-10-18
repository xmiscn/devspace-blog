---
title: 'Simple Pagination for React by Traversy Media'
date: 'October 10, 2022'
excerpt: 'Explains a simple implementation on the front end to limit the number of items shown on a page and allows more than one page including pagination module'
cover_image: '/images/posts/joyce-mccown-tPEG_yR2a2o-unsplash.jpg'
category: 'React'
author: 'Michael Sell'
author_image: 'https://randomuser.me/api/portraits/men/42.jpg'
---

# Simple Pagination for React

This is probably the most simple and easy to understand implementation of pagination on the frontend side, based on the following Youtube - video: (Traversy: Simple Pagination)[https://www.youtube.com/watch?v=IYCa1F-OWmk]

In the main application (the one where the data to display call a module to display), the following code is needed:

```javascript
// Pagination
const [currentPage, setCurrentPage] = useState(1);
const POST_PER_PAGE = 10;

// Get index of current blog entry
const indexOfLastPost = currentPage \* POST_PER_PAGE;
const indexOfFirstPost = indexOfLastPost - POST_PER_PAGE;
const currentBlogs = blogs.slice(indexOfFirstPost, indexOfLastPost);
const paginate = (pageNumber) => setCurrentPage(pageNumber);
```

and to call the Module like this:

```javascript
<Pagination
  postsPerPage={POST_PER_PAGE}
  totalPosts={blogs.length}
  paginate={paginate}
/>
```

The module itself is defined as follow (using Bootstrap for formatting):

```javascript
import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((page) => (
          <li key={page} className='page-item'>
            <a href='#!' onClick={() => paginate(page)} className='page-link'>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
```
