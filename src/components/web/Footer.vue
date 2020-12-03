<template>
   <!-- Readi join  -->
    <section class="flex items-center justify-center py-10 px-4 bg-custom-02 min-h-full">
      <div class="mx-auto">
        <h1 class="font-semibold text-3xl">Ready to join?</h1>
        <p
          class="text-xl w-full mb-8"
        >Wujudkan impianmu menjadi programmer handal dan berkarir profesional di dunia IT.</p>
       <form class="flex items-center w-full max-w-xl mx-auto mt-10">
           <input type="text" placeholder="youremail@email.com"  class="py-3 px-4 shadow-lg rounded-tl rounded-bl w-full focus:outline-none ring-2 ring-green-secondary ring-opacity-0 focus:ring-opacity-40" required/>
          <button type="submit" class="py-3 px-4 inline-flex items-center space-x-2 uppercase font-medium bg-green-secondary ring-2 ring-green-secondary ring-opacity-0 focus:ring-opacity-40  hover:bg-green-light focus:outline-none text-gray-50 transition rounded-tr rounded-br shadow-lg">
            <span>Feedback</span>
            <i class="fa fa-fw fa-arrow-right"></i>
          </button>
       </form>
      </div>
    </section>
    <!-- end ready join  -->

    <!-- Footer  -->
    <section
      class="h-full pt-16 pb-5 px-4 lg:px-0 flex flex-col lg:flex-row items-start justify-center lg:space-x-56"
    >
      <div class="mb-5 lg:mb-0">
        <span class="block">Satrio Tower Building, 25th Floor</span>
        <span class="block">Jl. Prof. Dr. Satrio Kav C4</span>
        <span class="block">Jakarta Selatan 12950</span>
        <span class="block">Indonesia</span>
        <a class="text-base hover:text-green-secondary" href="/home">Rodamap detail</a>
      </div>
      <div class="mb-5 lg:mb-0">
        <span class="block">
          Phone:
          <span class="text-green-secondary">(+62) 21 2788 3570</span>
        </span>
        <span class="block">
          Fax:
          <span class="text-green-secondary">(+62) 21 2788 3573</span>
        </span>
        <span class="block">
          Email:
          <span class="text-green-secondary">info@xsis.co.id</span>
        </span>
        <span class="block">
          Phone:
          <span class="text-green-secondary">(+62) 21 2788 3570</span>
        </span>
        <span class="text-green-secondary block">recruitment@exoapp.co.id</span>
      </div>
      <div>
        <span class="block mb-3">Exo MTodo Foundations</span>
         <router-link to="/" class="focus:outline-none">
         <span class="font-bold text-gray-700 text-3xl">Eko/</span>
         <span class="font-semibold text-green-secondary text-3xl">MTodo</span>
         </router-link>
        <span class="text-2xl">
          <i
            class="fab fa-fw fa-twitter cursor-pointer text-gray-600 hover:text-green-secondary transition-colors duration-150 ease-in-out"
          ></i>
          <i
            class="fab fa-fw fa-facebook cursor-pointer text-gray-600 hover:text-green-secondary transition-colors duration-150 ease-in-out"
          ></i>
          <i
            class="fab fa-fw fa-instagram cursor-pointer text-gray-600 hover:text-green-secondary transition-colors duration-150 ease-in-out"
          ></i>
          <i
            class="fab fa-fw fa-linkedin cursor-pointer text-gray-600 hover:text-green-secondary transition-colors duration-150 ease-in-out"
          ></i>
          <i
            class="fab fa-fw fa-youtube cursor-pointer text-gray-600 hover:text-green-secondary transition-colors duration-150 ease-in-out"
          ></i>
        </span>
      </div>
    </section>
    <section class="flex px-2 pb-24 lg:pb-8 pt-8 items-center justify-center h-10 border-t-2 border-gray-200">
      <p
        class="text-sm flex flex-col items-center md:flex-row"
      ><span class="mr-2">&copy; {{(new Date()).getFullYear()}} Eko MTodo Foundations </span> <span> All Rights Reserved</span>
      </p>
    </section>
</template>

<style scoped>
.bg-custom-01 {
  background-size: cover;
  background-repeat: repeat;
  background-position: center;
  background-image: url('https://webassets.mongodb.com/_com_assets/cms/shadow-dots-41y54qfxqz.svg');
}
.bg-custom-02 {
  background: url(https://webassets.mongodb.com/_com_assets/cms/13x13-dot-dark@3x-wmem1vevpx.svg)
    repeat 6px;
}
</style>