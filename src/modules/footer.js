import navLogo from '../assets/logos/nav-logo.png';
import idaMemberLogo from '../assets/logos/IDA-member-logo-final-white.png';
import idaHallOfFameLogo from '../assets/logos/ida-halloffame-final.png';
import trademarkLogo from '../assets/logos/DR_Trademark_Logo.png';
export const loadFooter = () => {
	const currentYear = new Date().getFullYear();

	const footer = document.querySelector('footer');

	if (footer) {
		footer.innerHTML = /*html*/`
			<!-- About & Contact Section -->
			<section class="py-12 px-8">
				<div class="flex flex-wrap -mx-4">
					<!-- About Column -->
					<div class="w-full lg:w-5/12 px-4 mb-8 lg:mb-0">
						<a href="/" class="inline-block mb-6">
							<img
								src="${navLogo}"
								alt="Detailing Success"
								class="h-16 w-auto"
							/>
						</a>
						<p class="mb-6 leading-relaxed">
							Detailing Success was founded in 2004 by Renny Doyle
							- A high-level auto detailer-turned-trainer that is
							passionate about helping other professional
							detailers transform their detailing businesses and
							in turn, their lives. By helping them refine their
							skills in the various tasks that come with owning
							and operating a professional auto detailing shop,
							Renny has trained and mentored over 500 detailing
							entrepreneurs from around the globe and detailed
							well over 4000 aircraft. Also known as "The Detailer
							of Air Force One", the proud founding member of The
							Detail Mafia, the author of "How to Start a
							Home-Based Detailing Car Detailing Business", and a
							co-creator of the P&S Double Black line of detailing
							products, Renny was inducted into the International
							Detailing Association (IDA) Hall of Fame in 2019.
						</p>
					</div>

					<!-- Contact Column -->
					<div class="w-full lg:w-3/12 px-4 mb-8 lg:mb-0">
						<h4 class="text-xl font-bold mb-4">Headquarters</h4>
						<p class="mb-4">
							PO Box 700<br />
							Big Bear, CA 92315<br />
							United States
						</p>
						<h4 class="text-xl font-bold mb-4">Connect With Us</h4>
						<p class="mb-2">
							<span class="font-bold">Phone: </span>
							<a
								href="tel:(909) 547-6789"
								class="text-success-red hover:underline"
								>(909) 547-6789</a
							>
						</p>
						<p class="mb-4">
							<span class="font-bold">Email: </span>
							<a
								href="mailto:admin@detailingsuccess.com"
								class="text-success-red hover:underline"
								>admin@detailingsuccess.com</a
							>
						</p>
						<h4 class="text-xl font-bold mb-4">Social Media</h4>
						<div class="flex space-x-4">
							<a
								href="https://facebook.com/autodetailingschool"
								target="_blank"
								rel="noopener noreferrer"
								class="text-white bg-success-red p-1 rounded-full w-10 aspect-square flex items-center justify-center hover:bg-white hover:scale-105 hover:transition-all duration-300 hover:text-success-red"
							>
								<i class="fab fa-facebook-f text-lg"></i>
							</a>
							<a
								href="https://instagram.com/detailingsuccess"
								target="_blank"
								rel="noopener noreferrer"
								class="text-white bg-success-red p-1 rounded-full w-10 aspect-square flex items-center justify-center hover:bg-white hover:scale-105 hover:transition-all duration-300 hover:text-success-red"
							>
								<i class="fab fa-instagram text-lg"></i>
							</a>
							<a
								href="https://youtube.com/channel/UCvdc4rfQDJ0V6dkNgSGQAlA"
								target="_blank"
								rel="noopener noreferrer"
								class="text-white bg-success-red p-1 rounded-full w-10 aspect-square flex items-center justify-center hover:bg-white hover:scale-105 hover:transition-all duration-300 hover:text-success-red"
							>
								<i class="fab fa-youtube text-lg"></i>
							</a>
						</div>
					</div>

					<!-- CTA Column -->
					<div class="w-full lg:w-4/12 px-4">
						<h3 class="text-2xl font-bold mb-6">
							Get in Touch with <br />
							Detailing Success Today!
						</h3>
						<a
							href="/contact-us#form"
							class="inline-block bg-success-red hover:bg-red-700 text-white font-bold py-3 px-6 mb-8 transition duration-300"
						>
							<i class="fas fa-star mr-2"></i>
							CONTACT US
						</a>
						<div class="mb-6 flex items-center gap-6">
							<img
								src="${idaMemberLogo}"
								alt="IDA Member"
								class="h-24 w-auto"
							/>
							<img
								src="${idaHallOfFameLogo}"
								alt="IDA Hall of Fame"
								class="h-24 w-auto"
							/>
						</div>
					</div>
				</div>
			</section>
            <!-- Quick Links Section -->
			<section class="w-full px-4 border-t border-t-red-100 py-6">
				<h4 class="text-xl font-bold mb-4 text-center">Quick Links</h4>
				<nav class="">
					<ul class="flex flex-wrap justify-center gap-4">
						<li>
							<a
								href="/extreme-one-day-detailing-training"
								class="hover:text-success-red"
								>Extreme 1-Day Overview</a
							>
						</li>
						<li>
							<a
								href="/meet-the-trainers"
								class="hover:text-success-red"
								>Meet The Trainers</a
							>
						</li>
						<li>
							<a href="#" class="hover:text-success-red"
								>The Detail Mafia</a
							>
						</li>
						<li>
							<a
								href="/air-force-one-detailer"
								class="hover:text-success-red"
								>Air Force One</a
							>
						</li>
						<li>
							<a href="#" class="hover:text-success-red"
								>About Us</a
							>
						</li>
						<li>
							<a href="/about-us" class="hover:text-success-red"
								>Team Profile</a
							>
						</li>
						<li><a href="/" class="hover:text-success-red">Home</a></li>
						<li>
							<a
								href="/our-partners"
								class="hover:text-success-red"
								>Our Partners</a
							>
						</li>
						<li>
							<a href="/blog" class="hover:text-success-red"
								>Blog</a
							>
						</li>
					</ul>
				</nav>
			</section>

			<!-- Advanced 5-Day Training Section -->
			<section class="w-full px-4 border-t border-t-red-100 py-6">
				<h4 class="text-xl font-bold mb-4 text-center">
					Advanced 5-Day Training
				</h4>
				<nav class="">
					<ul class="flex flex-wrap justify-center gap-4">
						<li>
							<a
								href="/advanced-5-day-training"
								class="hover:text-success-red"
								>Advanced Training Overview</a
							>
						</li>
						<li>
							<a
								href="/detailing-correcting-sanding"
								class="hover:text-success-red"
								>Detailing, Paint Correcting & Sanding</a
							>
						</li>
						<li>
							<a
								href="/multiple-certifications"
								class="hover:text-success-red"
								>Advanced Training & Accreditation</a
							>
						</li>
						<li>
							<a
								href="/developing-your-business-plan"
								class="hover:text-success-red"
								>Developing Your Business Plan</a
							>
						</li>
						<li>
							<a
								href="/sales-and-marketing"
								class="hover:text-success-red"
								>Sales and Marketing</a
							>
						</li>
						<li>
							<a
								href="/ceramic-coating-impact"
								class="hover:text-success-red"
								>Ceramic Coating Certification</a
							>
						</li>
					</ul>
				</nav>
			</section>
			<div class="w-full px-4 py-8 text-center bg-black">
				<img
					src="${trademarkLogo}"
					alt="DR Trademark Logo"
					class="mx-auto mb-4 w-48"
				/>
				<p class="text-xs mb-2">
					Designed by the team at
					<a
						href="https://www.detailersroadmap.com/"
						target="_blank"
						class="hover:underline"
						>Detailers Roadmap,</a
					>
					a platform developed for detailing operators across the
					globe.
				</p>
				<p class="text-xs mb-4">
					<a href="/terms-of-service" class="hover:underline"
						>Terms of Service</a
					>
					|
					<a href="/privacy-policy" class="hover:underline"
						>Privacy Policy</a
					>
				</p>
				<div class="text-xs">
					© <span>${currentYear}</span> All Rights Reserved |
					8bitcreative, LLC | Detailing Success
				</div>
			</div>
        `;
	}
}