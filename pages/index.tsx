import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps, GetServerSideProps } from "next";

export default function Home({
  allPostsData
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
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className="text-center p-2">
          <Link href="/writing">
            <a>Writing</a>
          </Link>
        </div>
        <div className="text-center p-2">
          <Link href="/books">
            <a>Books</a>
          </Link>
        </div>
      </div>
      <section className="">
        <div className="max-w-md mx-auto mt-2 p-6 bg-white rounded-lg shadow-md text-gray-900">
          I'm Tyler, a product manager living in San Francisco. You can find me
          on <a href="https://www.twitter.com/tylermyracle">Twitter</a>.
        </div>
      </section>
      <section>
        <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-lg shadow-md">
          <h2 className="font-medium text-2xl mb-4">Currently learning</h2>
          <ul>
            <li>
              <a
                href="https://www.coursera.org/specializations/data-structures-algorithms?"
                target="_blank"
              >
                Data Structures and Algorithms Specialization
              </a>
            </li>
            <li>
              <a
                href="https://www.reforge.com/advanced-growth-strategy-series"
                target="_blank"
              >
                Reforge Advanced Growth Strategy
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/freelance-web-design-from-design-to-development-to-making-money/"
                target="_blank"
              >
                Web Design with Webflow and Figma
              </a>
            </li>
            <li>
              <a href="https://cs193p.sites.stanford.edu/" target="_blank">
                Stanford CS193p - iOS Development
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-md mx-auto mt-6 p-6 bg-white rounded-lg shadow-md">
        <h2 className="font-medium text-2xl mb-4">Recent posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.slice(0, 3).map(({ id, date, title }) => (
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
      allPostsData
    }
  };
};
