const getBlog = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API}/posts/${id}`);
  const data = await res.json();
  return data;
};

export const generateMetadata = async ({ params }) => {
  const { title, body } = await getBlog(params.id);

  return {
    title: `Post Details | ${title}`,
    description: `${body}`,
    keywords: body?.split(" "),
  };
};

const PostDetailsPage = async ({ params }) => {
  const { title, body } = await getBlog(params.id);

  return (
    <div>
      <h1 className="text-center mt-10 font-bold text-4xl">Post Details</h1>

      <div className="px-10 mt-5 space-y-3">
        <h2 className="text-xl uppercase">Title: {title}</h2>
        <p className="">Description: {body}</p>
      </div>
    </div>
  );
};

export default PostDetailsPage;
