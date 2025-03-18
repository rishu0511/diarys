import CanvasF from "./Write.jsx";
import React, { useRef, useState } from "react";

export default () => {
  const ref = useRef(null);
  const download = (image, { name = "img", extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => takeScreenshot(ref.current).then(download);
  console.log(Image);
  return (
    <div>
      <div>
        <button
          class="Takescreenshot"
          style={{ marginBottom: "10px" }}
          onClick={getImage}
        >
          Take screenshot
        </button>
      </div>
      <img width={200} src={image} alt={"Screenshot"} />
      <div ref={ef}>
        <CanvasF />
      </div>
    </div>
  );
};
s