import Image from "next/image";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";

export default function Home() {
  return (
    <main>
      <div className="flex w-full items-center justify-evenly px-24">
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
      <div className="w-screen bg-slate-900 p-1">
        <div className="text-center mt-10 text-6xl">
          <h2 className=" inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            Posts
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center mt-16">
          <BlogPost href="blog-1" />
          <BlogPost href="blog-2" />
          <BlogPost href="blog-3" />
        </div>
        <div className="text-center m-10 mt-10 ">
          <Link
            href="/blog"
            className="inline-block text-lg px-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-75 transition-all"
          >
            See More Posts <span>&#8658;</span>
          </Link>
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
    </main>
  );
}
