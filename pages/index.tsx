import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { client } from '../libs/client'
import type { Blog } from '../types/blog'
import Link from 'next/link'
import "tailwindcss/tailwind.css";
import NextImage from 'next/image';


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
    <div className='bg-blue-500'>
      <h1>記事一覧</h1>
      <ul>
        {blogs.map((blog) => (
          
            <div>
              {/* if(blog.eyecatch != null){ */}
                <img src={blog.eyecatch.url} alt="" />
              {/* } */}
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
            </div>
        ))}
      </ul>
    </div>
  );
}
