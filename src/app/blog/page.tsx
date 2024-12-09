import { ChevronRight } from "lucide-react";
import RecentBlog from "./sections/recent-blog";
import BlogSection from "./sections/blog-section";
import ShopBannerSection from "@/components/sections/shop/ShopBannerSection";
import ShopPaginationSection from "@/components/sections/shop/ShopPaginationSection";

export default function BlogPage() {
  return (
    
    <div>
    {/* Hero Section */}
    <div className="bg-shop-hero h-[316px] flex justify-center flex-col items-center">
      <p className="font-medium text-[48px] sm:text-[36px] xs:text-[28px]">Blog</p>
      <div className="flex gap-2">
        <p className="font-bold">Home</p>
        <ChevronRight />
        <p>Blog</p>
      </div>
    </div>
      <div className="w-screen flex justify-center">
        <section className="w-[90%] flex flex-col lg:flex-row gap-[60px] py-[60px]">
          <BlogSection/>
          <RecentBlog />
          </section>
          </div>
          <div className="relative bottom-2">
            <ShopPaginationSection/>
            </div>
            <div className="relative top-2">
            <ShopBannerSection/>
          </div>
     
    </div>
  );
}
