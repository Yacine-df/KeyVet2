<script setup>
    import Layout from '../Shared/Layout.vue';
</script>
<template>
    <Layout>

        <template #content>

            <div class="text-center py-12 px-8 bg-center bg-no-repeat bg-contain relative">

                <div class="w-full h-full absolute bg-no-repeat bg-contain bg-center opacity-20 top-0 left-0" style="background-image: url('build/assets/images/signature.png');"></div>

                <h1 class="mt-6 text-3xl font-extrabold">Algerian Company for <br>Consult and pharm in animal healthcare</h1>

                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div class="relative rounded-full px-3 py-1 my-2 text-sm leading-6 bg-blue-600 hover:ring-blue-900e-900/20"> 
                        <a href="#animal_health" class="font-bold text-lg text-white">
                            What we Ensure ?
                        </a>
                    </div>
                </div>
            </div>

            <div class="w-full py-8 flex items-center justify-center">
                <img src="build/assets/images/Connector_line.svg" alt="">
            </div>


            <section id="animal_health" class="w-full pb-4">
                <h1 class="mx-auto w-full py-4 font-bold text-2xl text-center">Animal Health</h1>
                <div class="grid grid-cols-2 gap-4 py-4">
                    <img class="col-span-2 lg:col-span-1 rounded-full opacity-80 hover:opacity-95 shadow-md" src="build/assets/images/poultry.jpg" alt="">
                    <div class="relative col-span-2 lg:col-span-1">
                        <div class="w-full h-full absolute bg-no-repeat bg-contain bg-center opacity-20 top-0 left-0" style="background-image: url('build/assets/images/signature.png');"></div>
                        <p class="h-full col-span-2  flex items-center justify-center ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus repellendus exercitationem ut quo illum,
                        voluptatibus, eveniet ipsum dolores debitis aperiam ex consequatur iure dignissimos non dolore alias quos nam!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis ad veritatis ea? Deleniti ab quis dignissimos tenetur dolore,
                        ad provident nam. Ut harum mollitia nemo illum distinctio quisquam fugiat?
                    </p>
                    </div>
                </div>
            </section>

            <div class="w-full px-10 flex items-center justify-center">
                <img class="w-full px-6" src="build/assets/images/curvy_connector.svg" alt="">
            </div>

            <section class="w-full pb-4">
                <h1 class="mx-auto w-full py-4 font-bold text-2xl">Animal Medication</h1>
                <div class="grid grid-cols-2 gap-4 py-4">
                    <img class="col-span-2 lg:col-span-1 rounded-full opacity-80 hover:opacity-95 shadow-md" src="build/assets/images/poultry.jpg" alt="">
                    <div class="relative col-span-2 lg:col-span-1">
                        <div class="w-full h-full absolute bg-no-repeat bg-contain bg-center opacity-20 top-0 left-0" style="background-image: url('build/assets/images/signature.png');"></div>
                        <p class="h-full  flex items-center justify-center ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus repellendus exercitationem ut quo illum,
                        voluptatibus, eveniet ipsum dolores debitis aperiam ex consequatur iure dignissimos non dolore alias quos nam!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis ad veritatis ea? Deleniti ab quis dignissimos tenetur dolore,
                        ad provident nam. Ut harum mollitia nemo illum distinctio quisquam fugiat?
                    </p>
                    </div>
                </div>
            </section>
        </template>
    </Layout>
</template>
<style>

</style>
