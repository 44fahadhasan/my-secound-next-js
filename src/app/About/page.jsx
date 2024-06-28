export const metadata = {
  title: "About page",
  description: "blah",
  keywords: ["one", "two", "three", "four"],
};

const getDdTime = async () => {
  const res = await fetch("http://localhost:3000/time", {
    // cache: "no-store",
    next: {
      revalidate: 5,
    },
  });
  const data = await res?.json();
  return data?.crurentTime;
};

const AboutPage = async () => {
  const crurentTime = await getDdTime();

  return (
    <div>
      About Page
      <div className="mt-10 mx-auto">
        <h2 className="text-xl">Now Time In BD: {crurentTime}</h2>
      </div>
    </div>
  );
};

export default AboutPage;
