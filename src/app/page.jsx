import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      Home Page
      <div className="mt-10">
        <Image
          loading="lazy"
          src="/image/fahadHasan.png"
          width={100}
          height={200}
        />
      </div>
    </div>
  );
};

export default HomePage;
