import BlogList from "@/components/BlogList";
import BlogPost from "@/components/BlogPost";

export default function BlogPage() {
  return (
    <>
      <div className="w-screen text-white flex justify-center text-center items-center">
        <div className="container">
          <BlogList>
            <BlogPost href="/blog-1" />
            <BlogPost href="/blog-2" />
            <BlogPost href="/blog-3" />
            <BlogPost href="/blog-4" />
            <BlogPost href="/blog-5" />
            <BlogPost href="/blog-6" />
          </BlogList>
        </div>
      </div>
    </>
  );
}
