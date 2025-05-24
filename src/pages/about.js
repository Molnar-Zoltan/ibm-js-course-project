import { Team } from '../components/team/team.js';

export function About() {
    return (
        `
            <section class="flex flex-col h-full xl:justify-between px-10">
                <div id="about-header" class="flex flex-col gap-4 justify-center mt-5">
                    <h1 class="text-4xl xl:text-7xl font-bold">ABOUT US</h1>
                </div>
            
                <div id="about-text" class="flex flex-col vw-100 justify-center mt-5 xl:-mt-20 bg-gray-800/30 py-5 px-4 rounded-lg mr-10">
                    <p class="text-lg">
                        Welcome to Our Company! We are a team of passionate individuals dedicated to providing excellent services/products to our customers.
                        Our mission is to <span class="font-bold">provide the best experience</span> for people traveling to different destinations around the world.
                    </p>
                    <p class="text-lg">
                        Our values include integrity, innovation, customer satisfaction, and teamwork. 
                        We believe in <span class="font-bold">putting our customers first</span> and <span class="">working together</span> to achieve our goals.
                    </p
                    <p class="text-lg">
                        Feel free to explore our website and learn more about what we offer!
                    </p>
                </div>

                <div id="our-team" class="flex flex-col xl:flex-row xl:gap-20 items-center justify-center mt-10 xl:mt-0  xl:mb-30">
                    <div id="team-title">
                        <h1 class="text-3xl xl:text-6xl font-bold">Our Team</h1>
                    </div>
                    <div class="flex flex-col xl:flex-row gap-5 py-3 px-4">
                        ${Team()}
                    </div>
                </div>
            </section>
        `
    );
}