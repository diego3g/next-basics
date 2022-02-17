// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  await res.unstable_revalidate('/');

  return res.status(200).json({ name: 'Hello, world!' });
};
