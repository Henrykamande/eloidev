import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex flex-col h-[6rem] ">
      <div class="h-[2rem] w-full bg-blue-300 text-white items-center px-20  justify-center">
        <div class="flex gap-2 justify-between items-center py-2 font-bold text-lg">
          {" "}
          <span class="flex gap-2 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21 10V4c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2L1 16c0 1.1.9 2 2 2h11v-5c0-1.66 1.34-3 3-3h4zm-10 1L3 6V4l8 5l8-5v2l-8 5z"
              ></path>
              <path
                fill="currentColor"
                d="M21 14v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V18h2v-4.5a2.5 2.5 0 0 0-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4h-2z"
              ></path>
            </svg>
            info@eloidevelopers.co.ke
          </span>
          <span class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"
              ></path>
            </svg>
            (+254) 721 182 282
          </span>
        </div>
      </div>

      <div class="flex  h-[4rem] w-full bg-white z-20 ">
        <div class="gap-20 w-full justify-between flex items-center">
          <span class="text-[2.9rem] font-bold text-cyan-600 px-20">
            E<span class="text-[1.8rem]  text-orange-500">loi</span> D
            <span class="text-[1.8rem] font-semibold text-orange-500">
              evelopers
            </span>
          </span>

          <span class="font-bold pt-6 pr-20 text-md">
            <Link
              href="/"
              class="
              items-center
              text-gray-500
              hover:text-blue-500
              transition-colors"
            >
              Home
            </Link>

            <Link
              href="/houses"
              class="px-6 items-center
              text-gray-500
              hover:text-blue-500
              transition-colors"
            >
              Houses On Sale
            </Link>
            <Link
              href="/lands"
              class="items-center
              text-gray-500
              hover:text-blue-500
              transition-colors"
            >
              Land On Sale
            </Link>
            <Link
              href="/projects"
              class="px-6  items-center
              text-gray-500
              hover:text-blue-500
              transition-colors"
            >
              Projects
            </Link>

            <Link
              href="/contacts"
              class="items-center
              text-gray-500
              hover:text-blue-500
              transition-colors"
            >
              Contact Us
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
});
