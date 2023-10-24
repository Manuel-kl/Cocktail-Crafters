<template>
  <div class="bg-green bg-opacity-30 h-screen flex relative">
    <div class="container relative flex z-10 h-full justify-center">
      <div class="text-center m-auto gap-16 flex flex-col py-12">
        <h2
          class="text-7xl text-black font-semibold z-10 bg-green bg-opacity-10 px-3 pb-2 shadow-sm shadow-green rounded-lg"
        >
          Discover Your Favorite Cocktails
        </h2>
        <p
          class="text-black text-xl shadow-md shadow-black rounded-md p-4 w-fit m-auto bg-hover-text bg-opacity-20"
        >
          Welcome to the cocktail portal. Explore a wide range of cocktails and
          find your perfect drink.
        </p>
        <button
          class="bg-green w-fit m-auto px-5 py-2 rounded-sm text-white text-2xl"
        >
          Get Started
        </button>
      </div>
    </div>
    <div class="absolute h-full flex w-full overflow-hidden">
      <img
        class="relative w-1/2 object-contain opacity-80"
        src="../assets/cherry-cocktail.png"
        alt=""
        style="transform: rotate(35deg)"
      />
      <img
        class="relative w-1/2 object-contain opacity-80"
        src="../assets/cocktail.webp"
        alt=""
        style="transform: rotate(-35deg)"
      />
    </div>
  </div>
</template>
