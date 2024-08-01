import CommentSection from "@/components/CommentSection";
import Dialogue from "@/components/Dialogue";
import Education from "@/components/Education";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="">
        <Home/>
        <Projects/>
        <Education/>
        <Skills/>
        <CommentSection/>
        {/* <Dialogue/> */}
    </section>
   
  );
}







