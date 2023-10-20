<template>
    <div class="col-span-4 border bg-white border-gray-200 p-6 rounded-xl mt-2">
        <form method="POST" action="">

            <header class="flex items-center">
                <img src="https://i.pravatar.cc/60?u=2" alt="" width="40" height="40" class="rounded-full">

                <h2 class="ml-4 font-medium">Want to participate?</h2>
            </header>

            <div class="mt-6">
                <textarea name="body" class="w-full text-sm focus:outline-none focus:ring" rows="5"
                    placeholder="Quick, think of something to say!" required></textarea>

            </div>

            <div class="flex justify-end mt-6 pt-6 border-t border-gray-200">
                <button
                    class="rounded-full bg-blue-500 text-white my-1 md:my-0 px-12 py-2 mx-2 shadow-lg shadow-blue-500/50">Submit</button>
            </div>
        </form>
    </div>
</template>
