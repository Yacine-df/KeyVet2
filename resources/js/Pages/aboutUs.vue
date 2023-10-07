<script setup>
    import Layout from '../Shared/Layout.vue';
    import CardHistory from '../Shared/Components/CardHistory.vue';
</script>

<template>
    <Layout>
        <template #content>
            <div class="container mx-auto w-full h-full">
                <!-- keyvet history section -->
                <section class="relative overflow-hidden h-full">
                    <h1 class="text-center font-extrabold text-3xl mb-6">Keyvet History</h1>
                    <!--timeline -->
                    <div class="px-4 flex flex-col">

                        <CardHistory class="justify-start">
                            <template #number>1</template>
                            <template #date>25-10-2023</template>
                            <template #event>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis earum minus cum.
                                Impedit itaque voluptates repudia
                                ndae harum dicta possimus non nostrum provident? Magni voluptatem neque quasi harum
                                praesentium corporis repellendus!
                            </template>
                        </CardHistory>

                        <CardHistory class="justify-center">
                            <template #number>2</template>
                            <template #date>25-10-2023</template>
                            <template #event>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis earum minus cum.
                                Impedit itaque voluptates repudia
                                ndae harum dicta possimus non nostrum provident? Magni voluptatem neque quasi harum
                                praesentium corporis repellendus!
                            </template>
                        </CardHistory>

                        <CardHistory class="justify-end">
                            <template #number>3</template>
                            <template #date>25-10-2023</template>
                            <template #event>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis earum minus cum.
                                Impedit itaque voluptates repudia
                                ndae harum dicta possimus non nostrum provident? Magni voluptatem neque quasi harum
                                praesentium corporis repellendus!
                            </template>
                        </CardHistory>

                    </div>
                </section>
                <!-- end keyvet history section -->

                <!-- Keyvet team section -->
                <section class="mt-32">
                    <div class=" p-4 rounded">
                        <div class="relative h-auto lg:py-10 xl:py-16 flex -ml-8 pr-4 sm:ml-0 sm:pr-0">
                            <div class="absolute top-0 left-0 z-10 h-full bg-gray-100 w-full rounded-3xl"></div>
                            <div
                                class="absolute top-0 left-0 z-20 h-full w-full  -ml-full rounded-3xl transform shadow-lg bg-gradient-to-br from-cyan-400 to-blue-900 -rotate-1 sm:-rotate-2">
                            </div>
                            <div class="z-50 px-8">
                                <h1 class="text-center font-extrabold text-3xl mb-6 text-white">Our Doctors</h1>
                                <ul class="md:flex items-center justify-between gap-x-12">
                                    <li class="my-4   bg-white rounded-lg text-black">
                                        <div class="md:flex gap-x-6 py-2 px-4 md:py-0 md:px-0">
                                            <img class="w-32 h-32 md:w-48 md:h-auto rounded-full md:rounded-sm mx-auto"
                                                src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
                                                alt="" />
                                            <div class="py-4">
                                                <h3 class="text-base font-medium leading-7 tracking-tight">
                                                    Dr Messaoudene Abdelhakim
                                                </h3>
                                                <span
                                                    class="text-sm  font-bases ring-blue-500 text-blue-600 px-2 py-1 rounded-full">
                                                    Veterinarian doctor
                                                </span>
                                                <p class="text-sm font-normal py-2">
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                                                    perspiciatis
                                                    ea cupiditate excepturi in reiciendis, commodi debitis vel,
                                                    voluptates voluptas vitae, dolor accusamus pariatur minus deleniti
                                                    doloribus
                                                    alias doloremque consequatur?
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="my-4   bg-white rounded-lg text-black">
                                        <div class="md:flex gap-x-6 py-2 px-4 md:py-0 md:px-0">
                                            <img class="w-32 h-32 md:w-48 md:h-auto rounded-full md:rounded-sm mx-auto"
                                                src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
                                                alt="" />
                                            <div class="py-4">
                                                <h3 class="text-base font-medium leading-7 tracking-tight">
                                                    Dr Messaoudene Abdelhakim
                                                </h3>
                                                <span
                                                    class="text-sm font-bases text-blue-600 px-2 py-1 rounded-full">
                                                    Veterinarian doctor
                                                </span>
                                                <p class="text-sm font-medium py-2">
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                                                    perspiciatis
                                                    ea cupiditate excepturi in reiciendis, commodi debitis vel,
                                                    voluptates voluptas vitae, dolor accusamus pariatur minus deleniti
                                                    doloribus
                                                    alias doloremque consequatur?
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- end Keyvet team section -->
            </div>
        </template>
    </Layout>
</template>
