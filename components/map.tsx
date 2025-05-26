"use client";
import Image from "next/image";
import mapSvg from "./map.svg";

const Map = () => {
  return <Image src={mapSvg} alt="Map" width={800} height={600} priority />;
};

export default Map;
