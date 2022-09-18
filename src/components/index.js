import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

const registerObserver = (ref, setShowImage) => {
  const observer = new IntersectionObserver((enteries, observer) => {
    enteries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      setShowImage(true);
      observer.disconnect();
    });
  });
  observer.observe(ref);
};

export default function LazyImage({ styleClass, src, alt }) {
  const [showImage, setShowImage] = useState(false);
  const imageRef = useRef(null);

  // Component Did Mount
  useEffect(() => {
    registerObserver(imageRef.current, setShowImage);
  }, []);

  if (showImage) {
    return <img className={"image-style " + styleClass} src={src} alt={alt} />;
  }
  return <span ref={imageRef} className={"image-style " + styleClass} />;
}
