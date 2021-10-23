<template>
  <div class="nv-transition bg-gray-50 lg:the-header w-full bottom-0 left-0 fixed border-t border-gray-200 lg:hidden z-10">
    <div class="mx-auto lg:mx-4 py-3 px-2  md:mx-6 md:py-5 flex justify-evenly">
      <div class="flex flex-col md:flex-row items-center justify-around w-full">
        <router-link
          to="/"
          class="hover:text-green-light w-full hover:no-underline transition-colors duration-300 ease-linear"
        >
          <div class="flex flex-col md:flex-row items-center">
            <div class="flex">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="books"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="svg-inline--fa fa-books fa-w-18 inline-block  h-5 fill-current mb-1"
                data-v-205c0e3c=""
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M96 0H32A32 32 0 0 0 0 32v64h128V32A32 32 0 0 0 96 0zM0 384h128V128H0zm0 96a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-64H0zm513.62-17.78L401.08 42.71l-60.26 16.14 112.35 418.8c.11.39.2.79.29 1.18l60.29-16.15c-.04-.15-.09-.3-.13-.46zM160 480a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-64H160zM256 0h-64a32 32 0 0 0-32 32v64h124.79l-8-29.65a23.94 23.94 0 0 1 11.17-27V32A32 32 0 0 0 256 0zm-96 384h128V128H160z"
                    opacity="0.4"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M0 416h128v-32H0zm0-288h128V96H0zm575.17 317.65L460.39 17.78a23.89 23.89 0 0 0-29.18-17h-.09L415.73 5a24 24 0 0 0-16.9 29.36l114.79 427.86a23.89 23.89 0 0 0 29.18 17h.09l15.38-4.22a24 24 0 0 0 16.9-29.35zM160 416h128v-32H160zM338.39 49.78a23.89 23.89 0 0 0-29.18-17h-.09L293.73 37a24 24 0 0 0-16.9 29.36l8 29.65H160v32h128V108l103.62 386.22a23.89 23.89 0 0 0 29.18 17h.09l15.38-4.22a24 24 0 0 0 16.9-29.33z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="flex md:pl-3 text-xs md:text-base font-semibold">
              Home
            </div>
          </div>
        </router-link>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between w-full">
        <router-link
          to="/about-me"
          class="hover:text-green-light w-full hover:no-underline transition-colors duration-300 ease-linear"
        >
          <div class="flex flex-col md:flex-row items-center">
            <div class="flex">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="clipboard-list"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="svg-inline--fa fa-clipboard-list fa-w-12 inline-block h-5 fill-current mb-1"
                data-v-205c0e3c=""
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M336 64h-80a64 64 0 0 1 64 64H64a64 64 0 0 1 64-64H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zM96 424a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24zm0-96a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24zm0-96a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24zm224 176a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8zm0-96a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8zm0-96a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8z"
                    opacity="0.4"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M96 376a24 24 0 1 0 24 24 23.94 23.94 0 0 0-24-24zm0-96a24 24 0 1 0 24 24 23.94 23.94 0 0 0-24-24zm0-96a24 24 0 1 0 24 24 23.94 23.94 0 0 0-24-24zM256 64a64 64 0 0 0-128 0 64 64 0 0 0-64 64h256a64 64 0 0 0-64-64zm-64 24a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="flex md:pl-3 text-xs md:text-base font-semibold">
              About Me
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarFooter'
};
</script>

<style scoped>
.nv-transition {
  animation: 0.5s appear;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>