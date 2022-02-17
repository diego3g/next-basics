import { GetStaticProps } from 'next';

export default function Home({ repositories, date }) {
  return (
    <>
      <h1>{date}</h1>
      <ul>
        {repositories.map((repo) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/diego3g/repos');

  const data = await response.json();
  const repositoryNames = data.map((item) => item.name);

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString(),
    },
    revalidate: 60 * 60 * 4, // 4 hours
  };
};
