import RotatingText from "./RotatingText/HereSectionDesign";
import LogoSlider from "./RotatingText/LogoSlider";

const HereSection = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center bg-blend-color bg-black bg-opacity-40 w-full h-[70vh] sm:h-[100vh] flex justify-center items-center"
        style={{
          backgroundImage: `url(https://img.freepik.com/premium-photo/101-digital-artwork-showcasing-cybernetic-humanoid-with-intricate-metallic-plating-glowing-energy-conduits-photorealistic-highquality-detailed-design-2-energy-distribution-visualization_1310094-87497.jpg?w=826)`,
        }}
      >
        <RotatingText />
      </div>
      <LogoSlider />
    </>
  );
};

export default HereSection;
