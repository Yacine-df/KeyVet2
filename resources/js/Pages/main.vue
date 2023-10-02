<script setup>
    import Layout from '../Shared/Layout.vue';
</script>
<template>
    <Layout>

        <template #content>

            <div class="text-center py-4 px-8">

                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    <img class="w-auto mx-auto" src="build/assets/images/keyvet.png" alt="" />
                </h1>

                <p class="mt-6 text-lg leading-8">Anim aute id magna aliqua ad ad non deserunt sunt.
                    Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div class="relative rounded-full px-3 py-1 my-2 text-sm leading-6 ring-1 ring-blue-800ue-900/10 hover:ring-blue-900e-900/20">
                        Announcing our next round of funding. 
                        <a href="#" class="font-semibold text-blue-600">
                            <span class="absolute inset-0" aria-hidden="true" />
                            Read more 
                            <span aria-hidden="true">&rarr;</span>
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
                    <p class="col-span-2 lg:col-span-1 flex items-center justify-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus repellendus exercitationem ut quo illum,
                        voluptatibus, eveniet ipsum dolores debitis aperiam ex consequatur iure dignissimos non dolore alias quos nam!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis ad veritatis ea? Deleniti ab quis dignissimos tenetur dolore,
                        ad provident nam. Ut harum mollitia nemo illum distinctio quisquam fugiat?
                    </p>
                </div>
            </section>

            <div class="w-full px-10 flex items-center justify-center">
                <img class="w-full px-6" src="build/assets/images/curvy_connector.svg" alt="">
            </div>

            <section class="w-full pb-4">
                <h1 class="mx-auto w-full py-4 font-bold text-2xl">Animal Medication</h1>
                <div class="grid grid-cols-2 gap-4 py-4">
                    <img class="col-span-2 lg:col-span-1 rounded-full opacity-80 hover:opacity-95 shadow-md" src="build/assets/images/poultry.jpg" alt="">
                    <p class="col-span-2 lg:col-span-1 flex items-center justify-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus repellendus exercitationem ut quo illum,
                        voluptatibus, eveniet ipsum dolores debitis aperiam ex consequatur iure dignissimos non dolore alias quos nam!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis ad veritatis ea? Deleniti ab quis dignissimos tenetur dolore,
                        ad provident nam. Ut harum mollitia nemo illum distinctio quisquam fugiat?
                    </p>
                </div>
            </section>
        </template>

    </Layout>
</template>
<style>

</style>
