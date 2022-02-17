import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next/types';

export default function BlogPost({ date }) {
  return <h1>{date}</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // pegar os posts mais lidos

  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: new Date().toISOString(),
    },
    revalidate: 5,
  };
};
