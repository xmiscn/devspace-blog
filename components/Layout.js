import Head from 'next/head';
import Header from './Header';
import Search from './Search';

function Layout({ title, children, keywords, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Search />
      <main className='container mx-auto my-7'>{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Welcome to DevSpace',
  keywords: 'development, nextjs, tailwind, blog',
  description: 'DevSpace is a blog about development and nextjs',
};

export default Layout;
