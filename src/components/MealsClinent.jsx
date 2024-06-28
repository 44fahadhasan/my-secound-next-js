"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MealsClinent = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  const loadMealsData = (mealsName) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsName}`)
      .then((res) => res?.json())
      .then((data) => {
        setMeals(data?.meals);
      });
  };

  useEffect(() => {
    loadMealsData(search);
  }, [search]);

  return (
    <>
      <div className="flex justify-center mt-9">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="py-2 px-4 focus:outline-none text-gray-800"
          type="text"
          placeholder="write meal name"
        />
        <button className="bg-[#017BFE] py-2 px-4">Search</button>
      </div>

      {meals?.length < 1 && (
        <h2 className="text-center text-xl py-7">Loading...</h2>
      )}

      {meals?.length == null && (
        <h2 className="text-center text-xl py-7">No Meals Found</h2>
      )}

      <div class=" font-[sans-serif] my-4 pb-10">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
            {meals?.map((meal, idx) => (
              <div
                key={idx}
                class="bg-white rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300"
              >
                {/* <img
                  src={meal?.strMealThumb}
                  alt="Blog Post 1"
                  class="w-full h-60 object-cover"
                /> */}

                <Image
                  src={meal?.strMealThumb}
                  width={486}
                  height={200}
                  class="object-cover"
                />
                <div class="p-6">
                  <span class="text-sm block text-gray-400 mb-2">
                    {meal?.strArea} | {meal?.strCategory}
                  </span>
                  <h3 class="text-xl font-bold text-[#333]">{meal?.strMeal}</h3>
                  <hr class="my-6" />
                  <p class="text-gray-400 text-sm">
                    {meal?.strInstructions?.slice(0, 100)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MealsClinent;
