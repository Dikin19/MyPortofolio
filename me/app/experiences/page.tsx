'use client'
import BaseLayout from "../components/BaseLayout/BaseLayout";
import Footer from "../components/Footer/foteer";
import { Timeline } from "../components/Timelines/Timeline";


export default function Experiences() {


    const data = [
        {
            title: "2025",
            content: (
                <div className="text-white">

                    <div className="text-center mb-6">
                        <h3 className="text-lg md:text-xl font-semibold">Forage Virtual internship (Software Engineering)</h3>
                        <p className="text-sm md:text-base">Citi, Walmart USA, and Electronic Arts</p>
                        <p className="text-xs md:text-sm text-gray-300">Jun 2025</p>
                    </div>


                    <div className="flex justify-center mb-6">
                        <img

                            src="images/experiences/Forage.png"
                            alt="Coffee Shop"
                            width={500}
                            height={500}
                            className="rounded-xl object-cover shadow-lg h-40 md:h-60 lg:h-72 w-full max-w-md"
                        />
                    </div>


                    <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-white">
                        <li>Develop and improve webite</li>
                        <li>Work with other teams to create new features</li>
                        <li>Build and improve software for Walmart’s systems</li>
                        <li>Test code and fix bugs to keep systems running smoothly.</li>
                        <li>Fix bugs and make sure the software runs smoothly for players.</li>
                        <li>Work with designers and other developers to build website features.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2022 - 2024",
            content: (
                <div className="text-white">

                    <div className="text-center mb-6">
                        <h3 className="text-lg md:text-xl font-semibold">Head Barista</h3>
                        <p className="text-sm md:text-base">ASSKAHVE Coffee Shop, Jahra, Kuwait (On-site)</p>
                        <p className="text-xs md:text-sm text-gray-300">Nov 2022 - Dec 2024</p>
                    </div>


                    <div className="flex justify-center mb-6">
                        <img

                            src="images/experiences/experiences1.png"
                            alt="Coffee Shop"
                            width={500}
                            height={500}
                            className="rounded-xl object-cover shadow-lg h-40 md:h-60 lg:h-72 w-full max-w-md"
                        />
                    </div>


                    <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-white">
                        <li>Managed bar operations, ensuring drink quality and workspace cleanliness</li>
                        <li>Processed orders quickly and accurately</li>
                        <li>Delivered fast and friendly service to customers</li>
                        <li>Resolved customer complaints professionally</li>
                        <li>Maintained strong communication within the team</li>
                        <li>Provided effective solutions during busy hours or issues</li>
                        <li>Led the team with a positive and professional attitude</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2021 - 2022",
            content: (
                <div className="text-white">

                    <div className="text-center mb-6">
                        <h3 className="text-lg md:text-xl font-semibold">Store Manager</h3>
                        <p className="text-sm md:text-base">SINI COFFEE AND FRIENDS, Cinere (On-site)</p>
                        <p className="text-xs md:text-sm text-gray-300">Oct 2021 - July 2023</p>
                    </div>

                    {/* Centered Image */}
                    <div className="flex justify-center mb-6">
                        <img

                            src="images/experiences/experiences2.png"
                            alt="Coffee Shop"
                            width={500}
                            height={500}
                            className="rounded-xl object-cover shadow-lg h-40 md:h-60 lg:h-72 w-full max-w-md"
                        />
                    </div>


                    <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-white">
                        <li>Manage store operations, including staff scheduling, service, and cleanliness.</li>
                        <li>Ensure all procedures are followed efficiently.</li>
                        <li>Address customer complaints professionally and effectively.</li>
                        <li>Maintain good communication and ensure the team works well together.</li>
                        <li>Provide effective solutions and keep the situation under control.</li>
                        <li>Lead the team with a positive and professional attitude.</li>
                    </ul>

                </div>
            ),
        },
        {
            title: "2021",
            content: (
                <div className="text-white">

                    <div className="text-center mb-6">
                        <h3 className="text-lg md:text-xl font-semibold">Customer Service</h3>
                        <p className="text-sm md:text-base">Bank Jago, Jakarta (On-site)</p>
                        <p className="text-xs md:text-sm text-gray-300">Apr 2021 - Oct 2023</p>
                    </div>


                    <div className="flex justify-center mb-6">
                        <img

                            src="images/experiences/BankJago.png"
                            alt="Coffee Shop"
                            width={500}
                            height={500}
                            className="rounded-xl object-cover shadow-lg h-40 md:h-60 lg:h-72 w-full max-w-md"
                        />
                    </div>


                    <p className="text-sm md:text-base">Customer Service in Inbound, outbound, Vkyc, and Sosta</p>
                    <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-white">
                        <li>Handle incoming and outgoing calls promptly and clearly.</li>
                        <li>Provide information and address customer requests efficiently.</li>
                        <li>Perform customer identity verification through video calls.</li>
                        <li>Explain the verification process in an easy-to-understand way.</li>
                        <li>Guide customers on how to use Bank Jago’s services.</li>
                        <li>Deliver information to customers clearly and professionally.</li>
                        <li>Resolve customer issues with quick and accurate solutions.</li>
                    </ul>

                </div>
            ),
        },
        {
            title: "2020 - 2021",
            content: (
                <div className="text-white">

                    <div className="text-center mb-6">
                        <h3 className="text-lg md:text-xl font-semibold">English Teacher</h3>
                        <p className="text-sm md:text-base">BAHASAKUINGGRIS AND INTERPEACE PARE, Kediri Jawa Timur (On-site)</p>
                        <p className="text-xs md:text-sm text-gray-300">Aug 2020 - May 2021</p>
                    </div>


                    <div className="flex justify-center mb-6">
                        <img

                            src="images/experiences/english.png"
                            alt="Coffee Shop"
                            width={500}
                            height={500}
                            className="rounded-xl object-cover shadow-lg h-40 md:h-60 lg:h-72 w-full max-w-md"
                        />
                    </div>

                    <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-white">
                        <li>Deliver English lessons in a clear and simple manner.</li>
                        <li>Help students understand and master English concepts.</li>
                        <li>Provide clear feedback to help students improve their skills.</li>
                        <li>Provide solutions based on the difficulty level of the material to students need.</li>
                    </ul>


                </div>
            ),
        },
        {
            title: "2019 - 2020",
            content: (
                <div className="text-white">

                    <div className="text-center mb-6">
                        <h3 className="text-lg md:text-xl font-semibold">HBSR (Haji Business Sales Representative) </h3>
                        <p className="text-sm md:text-base">CIMB Niaga, Jakarta (On-site)</p>
                        <p className="text-xs md:text-sm text-gray-300">Oct 2019 - Feb 2020</p>
                    </div>


                    <div className="flex justify-center mb-6">
                        <img

                            src="images/experiences/Cimb.png"
                            alt="Coffee Shop"
                            width={500}
                            height={500}
                            className="rounded-xl object-cover shadow-lg h-40 md:h-60 lg:h-72 w-full max-w-md"
                        />
                    </div>


                    <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-white">
                        <li>Describe the Hajj procedures in detail to customer.</li>
                        <li>Respond to inquiries and concerns promptly and professionally.</li>
                        <li>Manage Hajj registration documents accurately and according to procedures.</li>
                        <li>Maintain customer relationships with a positive, helpful attitude, ensuring confidence in their decisions.</li>
                    </ul>
                </div>
            ),
        },
    ];


    return (
        <div className="bg-[#001F54] min-h-fit">
            <BaseLayout>
                <div className="">
                    <section className="">
                        <div className="relative w-full overflow-clip">
                            <Timeline data={data} />
                        </div>
                    </section>
                </div>
            </BaseLayout>
            <Footer />
        </div>
    );
}
