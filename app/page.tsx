import HomePage from "@/components/Sections/HomePage";
import InstagramPage from "@/components/Sections/InstagramPage";
import LatestBlogPage from "@/components/Sections/LatestBlogPage";
import ProductPage from "@/components/Sections/ProductPage";
import LenisWrapper from "@/components/Wrappers/LenisWrapper";

const MainPage = () => {
  return (
    <main>
      <LenisWrapper>
        <HomePage />
        <ProductPage />
        <LatestBlogPage />
        <InstagramPage />
      </LenisWrapper>
    </main>
  );
};

export default MainPage;
