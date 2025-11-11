import { ModeToggle } from "@/components/ToggleButton";
import MaxWidthWrapper from "@/components/Wrappers/MaxWidthWrapper";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <h1>CodeSlam2.0</h1> <ModeToggle />
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePage;
