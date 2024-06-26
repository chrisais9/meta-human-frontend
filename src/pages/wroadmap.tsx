import RoadmapDetailModal from "@/components/Modal/RoadmapDetailModal";
import { useEffect, useState } from "react";
function WRoadmap() {
  const [isVisionHovered, setIsVisionHovered] = useState(false);
  const [isCommunityHovered, setIsCommunityHovered] = useState(false);
  const [isMerchandiseHovered, setIsMerchandiseHovered] = useState(false);
  const [isMetaverseHovered, setIsMetaverseHovered] = useState(false);
  const [isPhysitalHovered, setIsPhysitalHovered] = useState(false);

  const [isRoadmapDetailShowing, setIsRoadmapDetailShowing] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden pt-32">
      <div className="text-center text-3xl font-extrabold">
        Maybe we&apos;re all meta-humans.
      </div>
      <p className="mt-5 text-center font-light">
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
        className="mt-16 grid h-3/4 w-screen grid-cols-7 px-40 text-white"
        onClick={() => setIsRoadmapDetailShowing(true)}
      >
        <div
          className={`mr-6 ${
            isVisionHovered ? "bg-yellow-900" : "bg-[#dcdcdc]"
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
            isCommunityHovered ? "bg-orange-600" : "bg-[#dcdcdc]"
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
            isCommunityHovered ? "bg-orange-600" : "bg-[#dcdcdc]"
          }`}
          onMouseEnter={() => setIsCommunityHovered(true)}
          onMouseLeave={() => setIsCommunityHovered(false)}
        ></div>
        <div
          className={`mb-6 ${
            isMetaverseHovered ? "bg-blue-900" : "bg-[#dcdcdc]"
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
            isMetaverseHovered ? "bg-blue-900" : "bg-[#dcdcdc]"
          }`}
          onMouseEnter={() => setIsMetaverseHovered(true)}
          onMouseLeave={() => setIsMetaverseHovered(false)}
        ></div>
        <div
          className={`mb-6 ${
            isMetaverseHovered ? "bg-blue-900" : "bg-[#dcdcdc]"
          }`}
          onMouseEnter={() => setIsMetaverseHovered(true)}
          onMouseLeave={() => setIsMetaverseHovered(false)}
        ></div>
        <div
          className={`ml-6 ${
            isPhysitalHovered ? "bg-green-600" : "bg-[#dcdcdc]"
          }`}
          onMouseEnter={() => setIsPhysitalHovered(true)}
          onMouseLeave={() => setIsPhysitalHovered(false)}
        ></div>

        <div
          className={`mr-6 ${
            isVisionHovered ? "bg-yellow-900" : "bg-[#dcdcdc]"
          }`}
          onMouseEnter={() => setIsVisionHovered(true)}
          onMouseLeave={() => setIsVisionHovered(false)}
        ></div>
        <div
          className={`mr-6 ${
            isMerchandiseHovered ? "bg-purple-600" : "bg-[#dcdcdc]"
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
          className={`${isCommunityHovered ? "bg-orange-600" : "bg-[#dcdcdc]"}`}
          onMouseEnter={() => setIsCommunityHovered(true)}
          onMouseLeave={() => setIsCommunityHovered(false)}
        ></div>
        <div
          className={`mr-6 ${
            isCommunityHovered ? "bg-orange-600" : "bg-[#dcdcdc]"
          }`}
          onMouseEnter={() => setIsCommunityHovered(true)}
          onMouseLeave={() => setIsCommunityHovered(false)}
        ></div>
        <div
          className={`-mt-6 mr-6 ${
            isMetaverseHovered ? "bg-blue-900" : "bg-[#dcdcdc]"
          }`}
          onMouseEnter={() => setIsMetaverseHovered(true)}
          onMouseLeave={() => setIsMetaverseHovered(false)}
        ></div>
        <div
          className={`${isPhysitalHovered ? "bg-green-600" : "bg-[#dcdcdc]"}`}
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
          className={`${isPhysitalHovered ? "bg-green-600" : "bg-[#dcdcdc]"}`}
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

export default WRoadmap;
