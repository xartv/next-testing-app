import NextImage from "next/image";
import Cat from "@/assets/cat.webp";

export default function Home() {
  return (
    <>
      <h1>HOME</h1>
      <NextImage src={Cat} alt="cat" priority />
    </>
  );
}
