import { component$ } from "@builder.io/qwik";
import Banner from "~/components/banner/Banner";
import Featured from "~/components/featured/Featured";
import QuickSale from "~/components/quicksale/quickSale";


export default component$(() => {
  return (

    <div>
      <Banner />
      <div class="h-full bg-white w-full">
      <div class="px-20 py-10 text-[2rem] mt-30 font-serif font-bold ">Trending</div>

        <Featured />

        <div class="px-20 py-10 text-[2rem] mt-30 font-serif font-bold ">Quick Sale</div>
        <QuickSale />
<div class="items-center justify-center">
{/* <Why/> */}
</div>
       

      </div>
      <div class="pt-40">
      
</div>
    </div>
  )
});
