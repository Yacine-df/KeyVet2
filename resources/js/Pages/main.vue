<script setup>
    import Layout from '../Shared/Layout.vue';
    import { onMounted } from 'vue'; 
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    gsap.registerPlugin(ScrollTrigger);
    onMounted(()=>{
        //animate title
        gsap.from('.title',{y:-300,opacity:0,duration:3});
        //animate connector line after the title
        gsap.from('.cnt_line',{y:400, duration:2});
        //animate animals section
        gsap.from('.anml-img',{
            scrollTrigger:{
                trigger:'.cnt_line',
                start: 'center center',
            },
            x:-700,
            duration:1,
            stagger:.5
        });
        gsap.from('.anml_details',{
            scrollTrigger:{
                trigger:'.cnt_line',
                start: 'center center',
            },
            x:700,
            duration:2,
        });
        //animate medical section
        gsap.from('.anml-img2',{
            scrollTrigger:{
                trigger:'.anml-img2',
                start: 'top center',
            },
            x:-700,
            duration:2,
            stagger:.5
        });
        gsap.from('.medical_details',{
            scrollTrigger:{
                trigger:'.medical_details',
                start: 'top center',
            },
            x:700,
            duration:2,
        });
        //animate partners section
        gsap.from('.partners',{
            scrollTrigger:{
                trigger:'.partners',
                start: 'top center',
            },
            x:1500,
            duration:2,

        });
    });
</script>
<template>
    <Layout>

        <template #content>

            <div class="title text-center py-12 px-8 bg-center relative">

                <div class="w-full h-full absolute bg-no-repeat bg-contain bg-center opacity-20 top-0 left-0"
                    style="background-image: url('build/assets/images/signature.png');"></div>

                <h1 class="mt-6 text-3xl font-extrabold">Algerian Company for <br>Consult and pharm in animal healthcare
                </h1>

                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div
                        class="relative rounded-full px-3 py-1 my-2 text-sm leading-6 bg-blue-600 hover:ring-blue-900e-900/20">
                        <a href="#animal_health" class="font-bold text-lg text-white">
                            What we Ensure ?
                        </a>
                    </div>
                </div>
            </div>

            <div class="cnt_line w-full py-8 flex items-center justify-center">
                <img src="build/assets/images/Connector_line.svg" alt="">
            </div>


            <section id="animal_health" class="w-full pb-4">
                <h1 class="mx-auto w-full py-4 font-bold text-2xl text-center">Animal Health</h1>
                <div class="grid grid-cols-2 gap-4 py-4">
                    <div class="col-span-2 lg:col-span-1 flex items-center justify-center gap-4">
                        <img class="anml-img w-40 h-96 px-2 md:px-0 rounded-xl opacity-80 hover:opacity-95 shadow-md object-cover"
                        src="build/assets/images/poultry.jpg" alt="">
                        <img class="anml-img mb-40 w-40 h-96 px-2 md:px-0 rounded-xl opacity-80 hover:opacity-95 shadow-md object-cover"
                        src="build/assets/images/poultry.jpg" alt="">
                        <img class="anml-img w-40 h-96 px-2 md:px-0 rounded-xl opacity-80 hover:opacity-95 shadow-md object-cover"
                        src="build/assets/images/poultry.jpg" alt="">
                    </div>
                    <div class="anml_details relative col-span-2 lg:col-span-1">
                        <div class="w-full h-full absolute bg-no-repeat bg-contain bg-center opacity-20 top-0 left-0"
                            style="background-image: url('build/assets/images/signature.png');"></div>
                        <p class="h-full col-span-2  flex items-center justify-center ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus repellendus
                            exercitationem ut quo illum,
                            voluptatibus, eveniet ipsum dolores debitis aperiam ex consequatur iure dignissimos non
                            dolore alias quos nam!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis ad veritatis ea?
                            Deleniti ab quis dignissimos tenetur dolore,
                            ad provident nam. Ut harum mollitia nemo illum distinctio quisquam fugiat?
                        </p>
                    </div>
                </div>
            </section>

            <div class="curvy_cnt hidden w-full px-10 sm:flex items-center justify-center">
                <img class="w-full px-6" src="build/assets/images/curvy_connector.svg" alt="">
            </div>

            <section class="w-full pb-4">
                <h1 class="mx-auto w-full py-4 font-bold text-2xl">Animal Medication</h1>
                <div class="grid grid-cols-2 gap-4 py-4">
                    <div class="col-span-2 lg:col-span-1 flex items-center justify-center gap-4">
                        <img class="anml-img2 w-40 h-96 px-2 md:px-0 rounded-xl opacity-80 hover:opacity-95 shadow-md object-cover"
                        src="build/assets/images/poultry.jpg" alt="">
                        <img class="anml-img2 mb-40 w-40 h-96 px-2 md:px-0 rounded-xl opacity-80 hover:opacity-95 shadow-md object-cover"
                        src="build/assets/images/poultry.jpg" alt="">
                        <img class="anml-img2 w-40 h-96 px-2 md:px-0 rounded-xl opacity-80 hover:opacity-95 shadow-md object-cover"
                        src="build/assets/images/poultry.jpg" alt="">
                    </div>
                    <div class="medical_details relative col-span-2 lg:col-span-1">
                        <div class="w-full h-full absolute bg-no-repeat bg-contain bg-center opacity-20 top-0 left-0"
                            style="background-image: url('build/assets/images/signature.png');"></div>
                        <p class="h-full  flex items-center justify-center ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus repellendus
                            exercitationem ut quo illum,
                            voluptatibus, eveniet ipsum dolores debitis aperiam ex consequatur iure dignissimos non
                            dolore alias quos nam!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis ad veritatis ea?
                            Deleniti ab quis dignissimos tenetur dolore,
                            ad provident nam. Ut harum mollitia nemo illum distinctio quisquam fugiat?
                        </p>
                    </div>
                </div>
            </section>
            <!-- medication laboratory partner -->
            <section class="partners py-24 mt-8 sm:py-32 rounded">
                <div class="relative h-auto lg:py-10 xl:py-16 flex -ml-8 pr-4 sm:ml-0 sm:pr-0">
                    <div class="absolute top-0 left-0 z-10 h-full bg-gray-100 w-full rounded-3xl"></div>
                    <div
                        class="absolute top-0 left-0 z-20 h-full w-full  -ml-full rounded-3xl transform shadow-lg bg-gradient-to-br from-cyan-950 to-blue-600 -rotate-1 sm:-rotate-2">
                    </div>
                    <div class="z-50 w-full flex-col items-center justify-center py-6 md:py-1">
                        <h2 class="text-center text-2xl font-bold text-white">International and National laboratories that we
                            provide their medication</h2>
                        <div
                            class=" text-white mx-auto mt-10 grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                src="build/assets/images/laboratories/zoetis.png" alt="Transistor" width="158"
                                height="48" />
                            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                src="build/assets/images/laboratories/zoetis.png" alt="Reform" width="158"
                                height="48" />
                            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                src="build/assets/images/laboratories/zoetis.png" alt="Tuple" width="158"
                                height="48" />
                            <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                                src="build/assets/images/laboratories/zoetis.png" alt="SavvyCal" width="158"
                                height="48" />
                            <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                src="build/assets/images/laboratories/zoetis.png" alt="Statamic" width="158"
                                height="48" />
                        </div>
                    </div>
                </div>
            </section>
            <!-- end medication laboratory partner -->
        </template>
    </Layout>
</template>
<style>

</style>
