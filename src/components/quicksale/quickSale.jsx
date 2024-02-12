import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="bg-gray-100 flex">
      <div class="pl-20 justify-center items-center pt-20">
        <a href="#">
          <img
            class="rounded-t-lg"
            src="https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.jpg?s=2048x2048&w=is&k=20&c=T63lnxHB0MLfu5KgKmIba_SKWcReTX1o25gVsqH1M6c="
            alt=""
            width="70%"
            height=""
          />
        </a>
      </div>
      <div class="flex flex-col text-gray-600 justify-center items-center mr-60 pt-10">
        <h2 class="text-black font-bold text-[2rem]">
          4 Bedroom House in Marigat for sale
        </h2>
        <p class="justify-center pt-10 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          eligendi est fugiat labore vel neque sequi veritatis odio nostrum ab,
          iste pariatur molestias perferendis quis necessitatibus! Dolorem
          sapiente temporibus sed.
        </p>

        <div class="flex justify-between mt-6 gap-10">
          <div class="flex gap-10 justify-start">
            <h4 class="text-gray-800 font-bold  gap-4">Bedrooms</h4>
            <p>4</p>
          </div>
          <div class="flex gap-10">
            <h4 class="text-gray-800 font-bold">Bathrooms</h4>
            <p>3</p>
          </div>
          <div class="flex gap-10">
            <h4 class="text-gray-800 font-bold">Land Size</h4>
            <p>3</p>
          </div>
        </div>
        <div class="text-red-500 font-bold text-[1.5rem] pt-10">$500,000</div>
      </div>
    </div>
  );
});
