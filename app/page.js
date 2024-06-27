import Image from "next/image";
import BlogPage from "@/components/BlogPage";

export default function Home() {
  return (
    <main>
      <div className="flex w-full items-center justify-evenly px-24 ">
        <div className="w-6/12 mx-4 flex justify-center items-center">
          <Image src="/assets/community.png" width={600} height={600} alt="" />
        </div>
        <div className="w-6/12 mx-4 flex flex-col justify-center items-center text-white">
          <h2 className="text-5xl">title 1</h2>
          <p className="text-xl text-center mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
            purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed
            euismod nisi porta lorem mollis Morbi tristique senectus et netus
            Mattis pellentesque id nibh tortor id aliquet lectus proin Sapien
            faucibus et molestie ac feugiat sed lectus vestibulum
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-evenly px-24 ">
        <div className="w-6/12 mx-4 flex flex-col justify-center items-center text-white">
          <h2 className="text-5xl">title 2</h2>
          <p className="text-xl text-center mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
            purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed
            euismod nisi porta lorem mollis Morbi tristique senectus et netus
            Mattis pellentesque id nibh tortor id aliquet lectus proin Sapien
            faucibus et molestie ac feugiat sed lectus vestibulum
          </p>
        </div>
        <div className="w-6/12  mx-4 flex justify-center items-center">
          <Image src="/assets/events.png" width={600} height={600} alt="" />
        </div>
      </div>
      <div>
        <div className="text-center mt-20 text-6xl">
          <h2 className=" inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            title
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center mt-20">
          <BlogPage href="blog-1" />
          <BlogPage href="blog-2" />
          <BlogPage href="blog-3" />
        </div>
      </div>
    </main>
  );
}
