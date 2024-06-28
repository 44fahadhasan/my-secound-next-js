import MealsClinent from "@/components/MealsClinent";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Js",
  description: "Meals page of the web site",
};

const MealsPage = () => {
  return (
    <div className={poppins.className}>
      <div className="mt-12">
        <h1 className="text-4xl font-black text-center">
          Search Your Favorite Meals
        </h1>
      </div>

      <MealsClinent />
    </div>
  );
};

export default MealsPage;
