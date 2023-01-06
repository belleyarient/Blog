import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { client } from '../libs/client'
import type { Blog } from '../types/blog'
import Link from 'next/link'

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
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
