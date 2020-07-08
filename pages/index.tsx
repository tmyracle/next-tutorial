import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps, GetServerSideProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex justify-center">
        <div className="text-center p-2">
          <Link href="/about">About</Link>
        </div>
        <div className="text-center p-2">
          <Link href="/">Writing</Link>
        </div>
        <div className="text-center p-2">
          <Link href="/books">Books</Link>
        </div>
      </div>
      <section className="">
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl text-gray-900">
          I'm Tyler, a product manager living in San Francisco. You can find me
          on <a href="https://www.twitter.com/tylermyracle">Twitter</a>. My
          current resume can be found&nbsp;
          <Link href="/resume">
            <a>here</a>
          </Link>
          .
        </div>
      </section>
      <section className="max-w-md mx-auto mt-6 p-6 bg-white rounded-lg shadow-xl">
        <h2 className="font-medium text-2xl mb-4">Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};
