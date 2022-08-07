import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import Layout from '@/components/Layout';
import CategoryLabel from '@/components/CategoryLabel';

export default function PostPage({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) {
  return (
    <Layout title={title}>
      <Link href='/blog'>Go back</Link>
      <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
        <div className='flex mt-4 items-center justify-between'>
          <h1 className='text-5xl mb-7'>{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>
        <img src={cover_image} alt='' className='w-full rounded' />
        <div className='flex justify-between items-center bg-gray-100 p-2 my-8'>
          <div className='flex items-center'>
            <img
              src={author_image}
              alt=''
              className='w-10 mx-4 h-10 object-cover rounded-full hidden sm:block'
            />
            <h4>{author}</h4>
          </div>
          <div className='text-sm text-gray-600 mr-4'>{date}</div>
        </div>
        <div className='blog-text mt-2'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((file) => ({
    params: { slug: file.replace(/\.md$/, '') },
  }));

  //console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markDownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf8'
  );
  const { data: frontmatter, content } = matter(markDownWithMeta);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
