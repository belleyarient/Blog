import { type } from "os";
import { client } from "../../libs/client";
import { Blog } from "../../types/blog";
import "tailwindcss/tailwind.css";
import  Head  from "../components/head";
import  MarkdownTemplate  from "../../src/components/markdownTemplate";
import Footer from "../components/footer";


type Props = {
    blog: Blog;
};

export default function BlogId({ blog }: Props) {
  return (
    <main className="bg-gray-800 min-h-screen relative pb-12">
      <Head></Head>
      <div className="bg-gray-800 p-2 pl-8 pr-8 pt-5 h-full">
        <h1 className="text-3xl mb-5 border-b border-red-500">{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        {/* {blog.content} */}
        {/* <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
        /> */}
        <MarkdownTemplate source={blog.content} />
      </div>
      <Footer></Footer>
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content:any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context:any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};