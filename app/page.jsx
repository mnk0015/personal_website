import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
export default function Home() {
  return (
    <section>
      <div className= "container mx-auto h-full">
        <div className = "flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl"> Software Developer </span>
            <h1 className="h1">
               Hello 👋 I'm <br /> <span className="text-accent">Mohammed Khan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I'm a Computer Science student at The City College of New York with a strong passion for fintech and software engineering. 
              I'm currently working towards my Bachelor of Science degree, which I expect to complete in Spring 2027.
            </p>

            <div className= "flex flex-col xl:flex-row items-center gap-8 text-gray-300">
              <Button 
              variant="outline" 
              size="lg" 
              className= "uppercase flex items-center gap-2"
              >
                <span>Download Resume</span>
                <FiDownload className= "text-xl" />
              </Button>
              <div className="mb-8 xl:mb-8">
                <Social containerStyles="flex gap-6" iconStyles= "w-9 h-9 border border-accent round-full flex justify-center items-center text-accent text-base hover:bg-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>

          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}
