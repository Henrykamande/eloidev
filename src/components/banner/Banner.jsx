import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="h-72 w-full">
      <div class="mt-24 px-72 flex flex-col">
        <div>
          <span class="text-[4.9rem]  font-bold">
            <span class=" text-[4.9rem] text-orange-600">Own</span>{" "}
            <span class="text-[3rem]  font-sans">
              House <span class=" text-[3rem] text-orange-600">Today</span>.
              <span class="text-[2rem]">
                The Search Ends <span class="text-orange-600">Here</span>
              </span>
            </span>
          </span>
        </div>

        <div class="px-20 mt-4 ">
          <span class="line-clamp-2 tracking-wider leading-10 text-[1.0rem]">
            We make it easy, affordable and hustle free to acquire a property in
            Kenya. Looking for a property to buy should be easy.We have all
            types of propeties to satisfy your taste and design feel.
          </span>
        </div>
        <div class="flex items-center justify-center gap-10">
          <button class="mt-6 bg-orange-600 rounded-md hover:bg-orange-400">
            Browse
          </button>

          <button class="mt-6 bg-gray-900 rounded-md hover:bg-gray-500">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
});
