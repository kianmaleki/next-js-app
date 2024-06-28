import Link from "next/link";

export default function BlogPost({ href }) {
  return (
    <>
      <Link
        className="border border-gray-200 p-6 shadow-lg rounded-lg text-center w-1/4 m-10"
        href={"/blog/" + href}
      >
        <h1 className="text-2xl font-bold text-slate-50 mb-10">
          Sample Header
        </h1>
        <p className="text-slate-200 mb-10">
          This is some sample content to demonstrate a container with HTML and
          Tailwind CSS. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec vel sapien nulla. This is some sample content to demonstrate a
          container with HTML and Tailwind CSS. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec vel sapien nulla. This is some
          sample content to demonstrate a container with HTML and Tailwind CSS.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          sapien nulla. This is some sample content to demonstrate a container
          with HTML and Tailwind CSS. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec vel sapien nulla.
        </p>
        <button className="btn bg-sky-500 py-3 px-4 rounded-xl hover:opacity-75 transition-all">
          read more
        </button>
      </Link>
    </>
  );
}
