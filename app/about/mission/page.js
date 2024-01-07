import bleach from "@/public/images/bleach.jpg";
import Image from "next/image";

const Mission = () => {
  return (
    <div>
      <h2>Mission Page</h2>

      <div className="w-[500px]">
        <Image placeholder="blur" src={bleach} alt="ichigo kurosaki" />
      </div>
    </div>
  );
};

export default Mission;
