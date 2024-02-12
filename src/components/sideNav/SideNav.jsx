import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
export default component$(() => {
  return (
    <div class=" flex flex-col ml-20 mr-5 text-sm  mt-32">
      <h5> DISCOVER MORE PROPERTIES</h5>

      <Link
        href="/houses/locations/1"
        class="px-6 items-center
              text-gray-500 mt-2
              hover:text-blue-500
              transition-colors"
      >
        Kiambu
      </Link>

      <Link
        href="/houses/locations/4"
        class="px-6 items-center
              text-gray-500 mt-2
              hover:text-blue-500
              transition-colors"
      >
        Muranga
      </Link>
      <Link
        href="/houses/locations/3"
        class="px-6 items-center mt-2
              text-gray-500
              hover:text-blue-500
              transition-colors"
      >
        Nairobi
      </Link>
      <Link
        href="/houses/locations/2"
        class="px-6 items-center
              text-gray-500 mt-2
              hover:text-blue-500
              transition-colors"
      >
        Nyeri
      </Link>
    </div>
  );
});
