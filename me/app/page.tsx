import BlurText from "./components/BlurText/BlurText";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";

export default function Home() {
  return (
    <div className="min-h-screen overflow- x-hidden">
      <div className="container border mx-auto h-screen"> {/* membuat container yan ditandai mx-auto yang berarti untuk mempunya space kiri dan kanan dan h-screen membuat tampilan penuh  */}
        <div className="grid grid-cols-12">

          <div className="col-span-6"> {/* membuat grid menjadi 6 untuk bagian kiri dari 12 col */}

            <Lanyard position={[0, 0, 18]} gravity={[0, -40, 0]} /> {/* membuat lanyard dengan posisi dan gravitasi yang ditentukan */}

          </div>

          <div className="col-span-6"> {/* membuat grid menjadi 6 untuk bagian kanan dari 12 col */}
            <div className="flex items-center h-full">

              <div className="flex flex-col gap-4">

                <div className="flex items-center gap-4">
                  <h1 className="text-2xl text-black font-bold">Welcome to My Page</h1>
                  <RotatingText
                    texts={['Front End', 'Back End', 'Full Stack Developer', 'Software Engineer']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-[#D4AF37] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex animation-all"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </div> {/* membuat rotating text */}

                <div className="flex flex-col items-start">
                  <SplitText
                    text="I'm Muhamad Sodikin"
                    className="text-2xl font-semibold text-start"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />

                  <SplitText
                    text="Full Stack Developer"
                    className="text-2xl font-semibold text-[#D4AF37] text-start"
                    delay={100}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div> {/* membuat split text */}
                <BlurText
                  text="I am a Full Stack Developer with a solid foundation in leadership, communication, analytical skills, problem-solving, 
                and a strong work ethic. After transitioning from the coffee industry to technology, I discovered a deep passion for programming
                and pursued self-learning through both online and offline courses. I possess a strong ability to quickly adapt and continuously 
                improve with focus on doing repetition practice and analyzing user requirements to deliver effective, user-centered solutions as Front-end."
                />

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
