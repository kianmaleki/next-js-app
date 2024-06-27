import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <main className="flex w-full mt-16 items-center justify-evenly p-24 ">
        <div className="w-6/12  mx-4 flex justify-center items-center">
          <Image src="/assets/community.png" width={600} height={600} alt="" />
        </div>
        <div className="w-6/12 mx-4 flex flex-col justify-center items-center text-white">
          <h2 className="text-5xl">title</h2>
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
      </main>
    </>
  );
}
