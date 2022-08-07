import Layout from '@/components/Layout';
import Post from '@/components/Post';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getPosts } from '@/lib/post';

export default function CategoryBlogPage({ posts, categoryName }) {
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>
        Posts in Category: {categoryName.toUpperCase()}
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const categories = files.map((file) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', file), 'utf8');
    const { data: frontmatter } = matter(markdownWithMeta);
    return frontmatter.category.toLowerCase();
  });
  //console.log(categories);
  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {
  const files = fs.readdirSync(path.join('posts'));

  const posts = getPosts();

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  // Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  );

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  };
}
