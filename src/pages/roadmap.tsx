import RoadmapDetailModal from "@/components/Modal/RoadmapDetailModal";
import { useEffect, useState } from "react";
function Roadmap() {
  const [isVisionHovered, setIsVisionHovered] = useState(false);
  const [isCommunityHovered, setIsCommunityHovered] = useState(false);
  const [isMerchandiseHovered, setIsMerchandiseHovered] = useState(false);
  const [isMetaverseHovered, setIsMetaverseHovered] = useState(false);
  const [isPhysitalHovered, setIsPhysitalHovered] = useState(false);

  const [isRoadmapDetailShowing, setIsRoadmapDetailShowing] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("dark");
    return () => {
      root.classList.remove("dark");
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black pt-32">
      <div className="animate-fade-in-fast text-center text-3xl font-extrabold  text-white">
        Maybe we&apos;re all meta-humans.
      </div>
      <p className="mt-5 animate-fade-in-fast text-center font-light text-white">
        We break the boundaries between the real and virtual worlds through the
        Meta-Human Universe.
        <br />
        We have the ultimate vision of &apos;to create the world&apos;s most hip
        and free atmosphere&apos; and create innovation that has never existed
        before.
        <br />
        We are working hard to establish our own brand in the virtual world of
        Metabus in the near future.
      </p>
      <div
        className="mt-16 grid h-3/4 w-screen animate-fade-in grid-cols-7 px-20 text-white"
        onClick={() => setIsRoadmapDetailShowing(true)}
      >
        <div
          className={`mr-6 ${
            isVisionHovered ? "bg-yellow-900" : "bg-[#282828]"
          }`}
          onMouseEnter={() => setIsVisionHovered(true)}
          onMouseLeave={() => setIsVisionHovered(false)}
        >
          <div className="p-4 text-right text-2xl font-black">
            01
            <br />
            Vision
          </div>
        </div>
        <div
          className={`mb-6 ${
            isCommunityHovered ? "bg-orange-600" : "bg-[#282828]"
          }`}
          onMouseEnter={() => setIsCommunityHovered(true)}
          onMouseLeave={() => setIsCommunityHovered(false)}
        >
          <div className="p-4 text-left text-2xl font-black">
            02
            <br />
            Community
          </div>
        </div>
        <div
          className={`mr-6 ${
            isCommunityHovered ? "bg-orange-600" : "bg-[#282828]"
          }`}
          onMouseEnter={() => setIsCommunityHovered(true)}
          onMouseLeave={() => setIsCommunityHovered(false)}
        ></div>
        <div
          className={`mb-6 ${
            isMetaverseHovered ? "bg-blue-900" : "bg-[#282828]"
          }`}
          onMouseEnter={() => setIsMetaverseHovered(true)}
          onMouseLeave={() => setIsMetaverseHovered(false)}
        >
          <div className="p-4 text-left text-2xl font-black">
            04
            <br />
            Metaverse
          </div>
        </div>
        <div
          className={`mb-6 ${
            isMetaverseHovered ? "bg-blue-900" : "bg-[#282828]"
          }`}
          onMouseEnter={() => setIsMetaverseHovered(true)}
          onMouseLeave={() => setIsMetaverseHovered(false)}
        ></div>
        <div
          className={`mb-6 ${
            isMetaverseHovered ? "bg-blue-900" : "bg-[#282828]"
          }`}
          onMouseEnter={() => setIsMetaverseHovered(true)}
          onMouseLeave={() => setIsMetaverseHovered(false)}
        ></div>
        <div
          className={`ml-6 ${
            isPhysitalHovered ? "bg-green-600" : "bg-[#282828]"
          }`}
          onMouseEnter={() => setIsPhysitalHovered(true)}
          onMouseLeave={() => setIsPhysitalHovered(false)}
        ></div>

        <div
          className={`mr-6 ${
            isVisionHovered ? "bg-yellow-900" : "bg-[#282828]"
          }`}
          onMouseEnter={() => setIsVisionHovered(true)}
          onMouseLeave={() => setIsVisionHovered(false)}
        ></div>
        <div
          className={`mr-6 ${
            isMerchandiseHovered ? "bg-purple-600" : "bg-[#282828]"
          }`}
          onMouseEnter={() => setIsMerchandiseHovered(true)}
          onMouseLeave={() => setIsMerchandiseHovered(false)}
        >
          <div className="p-4 text-left text-2xl font-black">
            03
            <br />
            Merchandise
          </div>
        </div>
        <div
          className={`${isCommunityHovered ? "bg-orange-600" : "bg-[#282828]"}`}
          onMouseEnter={() => setIsCommunityHovered(true)}
          onMouseLeave={() => setIsCommunityHovered(false)}
        ></div>
        <div
          className={`mr-6 ${
            isCommunityHovered ? "bg-orange-600" : "bg-[#282828]"
          }`}
          onMouseEnter={() => setIsCommunityHovered(true)}
          onMouseLeave={() => setIsCommunityHovered(false)}
        ></div>
        <div
          className={`-mt-6 mr-6 ${
            isMetaverseHovered ? "bg-blue-900" : "bg-[#282828]"
          }`}
          onMouseEnter={() => setIsMetaverseHovered(true)}
          onMouseLeave={() => setIsMetaverseHovered(false)}
        ></div>
        <div
          className={`${isPhysitalHovered ? "bg-green-600" : "bg-[#282828]"}`}
          onMouseEnter={() => setIsPhysitalHovered(true)}
          onMouseLeave={() => setIsPhysitalHovered(false)}
        >
          <div className="p-4 text-left text-2xl font-black">
            05
            <br />
            Physital
          </div>
        </div>
        <div
          className={`${isPhysitalHovered ? "bg-green-600" : "bg-[#282828]"}`}
          onMouseEnter={() => setIsPhysitalHovered(true)}
          onMouseLeave={() => setIsPhysitalHovered(false)}
        ></div>
      </div>
      <RoadmapDetailModal
        isShowing={isRoadmapDetailShowing}
        onClose={() => setIsRoadmapDetailShowing(false)}
      />
    </div>
  );
}

export default Roadmap;
