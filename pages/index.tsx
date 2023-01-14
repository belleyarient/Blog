// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { client } from '../libs/client'
import type { Blog } from '../types/blog'
import Link from 'next/link'
import "tailwindcss/tailwind.css";
import NextImage from 'next/image';

import Head from './blog/components/head'

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
        <h1 className='text-3xl text-gray-200 text-center mb-6 border-b pb-3'>記事一覧</h1>
        <ul className='md:flex md:grid md:grid-cols-2 lg:grid-cols-4 pl-5 pr-5 pb-5 pt-5'>
          {blogs.map((blog) => (
  
            <div key={blog.id} className='bg-gray-800 md:w-4/5  mb-5 ml-auto mr-auto p-2 pr-3 pl-3 rounded'>
              {/* if(blog.eyecatch != null){ */}
  
              {/* } */}
              <li key={blog.id} className="mt-2">
                <Link href={`/blog/${blog.id}`}>
                  
                  <div className='flex md:flex-auto md:flex-col h-full '>
                    {/* サムネの高さを統一 */}
                    
                      <img
                        className="sm:w-1/4 md:w-full w-1/4 h-full order-3 md:order-1 m-auto"
                        src={blog.eyecatch.url} alt="" width={blog.eyecatch.width}  />
                      <h3 className='mt-2 text-gray-100 border-l border-red-500 pl-2 w-3/4 md:w-full md:flex-col order-1 m-auto  mt-auto md:mt-2'>{blog.title}</h3>
                    
                  </div>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
