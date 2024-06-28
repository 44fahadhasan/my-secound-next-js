import Link from "next/link";
import { redirect } from "next/navigation";

const getBlogs = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  if (data) {
    redirect(`/Blog/${data?.[0]?.id}`);
  }

  return data;
};

export const metadata = {
  title: "Blogs",
  description: "This is a blog page",
};

const BlogPage = async () => {
  const blogs = await getBlogs();

  return (
    <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs?.map(({ title, body, id }) => (
            <div
              key={id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="https://readymadeui.com/hotel-img.webp"
                alt="Blog Post 1"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">{body}</p>
                <Link
                  href={`/Blog/${id}`}
                  className="mt-4 inline-block text-blue-600 text-sm hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
