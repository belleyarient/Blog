// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { client } from '../libs/client'
import type { Blog } from '../types/blog'
import Link from 'next/link'
import "tailwindcss/tailwind.css";
import NextImage from 'next/image';
import { Wrapper } from './blog/components/wrapper'
import { Head } from './blog/components/head'

const inter = Inter({ subsets: ['latin'] })

// データをテンプレートに受け渡す部分の処理を記述します
export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};

type Props = {
  blogs: Array<Blog>;
};

export default function Home({ blogs }: Props) {
  return (
    <div className='bg-gray-700 '>
      <Head></Head>
      <div className='pt-3'>
        <h1 className='text-3xl text-gray-200 text-center mb-5 border-b pb-3'>記事一覧</h1>
        <ul className='md:flex md:grid md:grid-cols-2 lg:grid-cols-4 p-1'>
          {blogs.map((blog) => (
  
            <div className='bg-gray-800 w-4/5  mb-5 ml-auto mr-auto p-2 pr-5 pl-5 rounded'>
              {/* if(blog.eyecatch != null){ */}
  
              {/* } */}
              <li key={blog.id} className="mt-2">
                <Link href={`/blog/${blog.id}`}>
                  
                  {/* サムネの高さを統一 */}
                  <div className='h-32'>
                    <img
                      className="w-full h-full"
                      src={blog.eyecatch.url} alt="" width={blog.eyecatch.width}  />
                  </div>
                  <h3 className='mt-2 text-gray-100 border-l border-red-500 pl-2'>{blog.title}</h3>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
