

export function Contact() {


    return (
        `
            <section class="flex h-full justify-between px-10">
                <div id="contact-text" class="flex flex-col gap-4 w-150 justify-center -mt-25">
                    <h1 class="text-7xl font-bold">CONTACT US</h1>
                    <p class="text-lg">Get in touch</p>
                </div>
                <div id="contact-form" class="flex items-center justify-center">
                    <form action="" method="POST" class="flex flex-col gap-4 bg-gray-800/30 py-3 px-4 rounded-lg w-[40vw]">
                        <label for="name">Name</label>
                        <input type="text" name="name" placeholder="Enter your name" required class="-mt-3 bg-gray-200/10 px-2 py-1 rounded-lg">

                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="Enter your email" required class="-mt-3 bg-gray-200/10 px-2 py-1 rounded-lg">

                        <label for="message">Message</label>
                        <textarea name="message" rows="5" placeholder="Enter your message" required class="-mt-3 bg-gray-200/10 px-2 py-1 rounded-lg resize-none"></textarea>
                        <button id="submitButton" type="submit" onclick="event.preventDefault()" class="px-2 py-1 bg-gray-200/10 rounded-lg hover:bg-gray-200/20 cursor-pointer">
                            Send
                        </button>
                    </form>
                </div>
            </section>
        `
    );
}