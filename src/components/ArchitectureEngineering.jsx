import React , {useState , useEffect} from "react";
import image1 from "../assets/ArchitecturalDesign.png"
import image2 from "../assets/CivilInfrastructure.png"
import image3 from "../assets/MEP.png"
import image4 from "../assets/StructuralEngineering.jpg"
import ButtonWithArrow from '../ReuseableComponents/ButtonWithArrow';
const architectureServices = [
  {
    title: "Architectural Design",
    image: image1, 
    description:
      "Creating innovative spatial solutions that blend form and function through collaborative design processes and advanced modeling techniques.",
  },
  {
    title: "Structural Engineering",
    image: image4, 
    description:
      "Ensuring structural integrity and efficiency through sophisticated analysis and engineering principles that support architectural vision.",
  },
  {
    title: "MEP Services",
    image: image3, 
    description:
      "Comprehensive Mechanical, Electrical, and Plumbing solutions that optimize building performance, energy efficiency, and occupant comfort.",
  },
  {
    title: "Civil Infrastructure",
    image: image2, 
    description:
      "Developing sustainable site solutions and infrastructure systems that connect buildings seamlessly with their surroundings.",
  },
];

const ArchitectureEngineering = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      if (architectureServices.length > 0) {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % architectureServices.length);
        }, 4000);
        return () => clearInterval(interval);
      }
    }, [architectureServices.length]);

  if (!architectureServices || architectureServices.length === 0) {
    return null;
  }

  const architectureService = architectureServices[currentIndex];


  return (
    <section className="w-full mb-10 ">
          <div className="feature-card relative w-full h-fit overflow-hidden shadow-md group">
            <img
              src={architectureService.image}
              alt={architectureService.title}
              className="feature-card-image"
            />
            <div className="feature-card-body" >
            <h4 className="feature-card-title">
              {architectureService.title}
            </h4>
            <p className="feature-card-description min-h-[60px]">
              {architectureService.description}
            </p>
            <div className="mt-auto pt-4 ">
            <ButtonWithArrow to={"/sub-pages/strategic-cost-management"} />
          </div>
            </div>
          </div>
    </section>
  );
};

export default ArchitectureEngineering;

