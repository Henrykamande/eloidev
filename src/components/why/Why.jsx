import { component$ } from "@builder.io/qwik";
import offer from "../../assets/offer.png";
export default component$(() => {
  return (
    <section
      class="flex justify-wrap items-center 
    max-xl:flex-col-reverse gap-10 max-container mx-6 my-8"
    >
      <div class="flex-1">
        <img src={offer} width={30} height={40} class="object-contain w-full" />
      </div>

      <div class="flex flex-1 ">
        <div
          class=" flex flex-col justify-center
 items-start w-full  "
        >
          <h2 class="mt-5 font-palanquin text-4xl capitalize  font-bold ">
            <span class="text-coral-red"> Special</span> Offer
          </h2>
          <p class="mt-4 lg:max-w-lg info-text">
            Don't miss out on our incredible Vegetable Sale Offer! Get ready to
            fill your basket with the freshest and healthiest vegetables at
            unbeatable prices. We're bringing you a bountiful selection of
            farm-fresh produce that's not only delicious but also packed with
            essential nutrients. Whether you're looking for vibrant bell
            peppers, crisp cucumbers, or the juiciest tomatoes, we've got it
            all. From leafy greens to root vegetables, our range caters to every
            culinary preference and dietary need.
          </p>
          <p class="mt-6 lg:max-w-lg info-text">
            {" "}
            Whether you're looking for vibrant bell peppers, crisp cucumbers, or
            the juiciest tomatoes, we've got it all. From leafy greens to root
            vegetables, our range caters to every culinary preference and
            dietary need.{" "}
          </p>

          <div class="mt-11 flex flex-wrap gap-4">
            {/* <Button label="Shop Now" iconURL={arrowRight} />
            <Button
              label="Learn More"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
              iconURL={arrowRight}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
});
