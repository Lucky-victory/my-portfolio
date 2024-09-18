import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useSmoothScrollAndURLUpdate() {
    // const router = useRouter();
    // useEffect(() => {
    //   const sections = document.querySelectorAll<HTMLDivElement>("section[id]");
    //   let scrollY = window.scrollY
     
    //   const handleScroll = () => {
    //     sections.forEach(section => {
    //       const sectionHeight = section.offsetHeight;
          
    //       const sectionTop = (section.getBoundingClientRect().top + window.scrollY) - 50;
    //      const sectionId = section.getAttribute("id");
    //      const canIndicate= scrollY > sectionTop &&
    //      scrollY <= sectionTop + sectionHeight;
    //      console.log({canIndicate,scrollY,sectionTop,sectionHeight});
    //      if (
    //      canIndicate
    //     ){
    //     document?.querySelector(".nav-link[href*=" + sectionId + "]")?.classList.add("active");
      
        
    //     } else {
    //       document?.querySelector(".nav-link[href*=" + sectionId + "]")?.classList.remove("active");
    //     }
    //   });
        
    //   };
      
    //   window.addEventListener("scroll", handleScroll);
    //   // Clean up event listeners when the component unmounts
    //   return () => {
       
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }, []);
}

export function useTheme(color = "blue", delay = 0) {
  const [activeColor, setActiveColor] = useState(color);

  const getCurrentColor = () => {
    const activeColor = document.documentElement.style.getPropertyValue(
      "--primary-theme-color",
    );
    const regex = /--([^)]+)/;
    const match = activeColor.match(regex);
    let extractedColor = "";
    if (match) {
      extractedColor = match[1];
    }

    return extractedColor;
  };
  function setTheme(color: string) {
    const themeOverlayElem = document.querySelector("main");
    themeOverlayElem?.classList.add("animate");

    setTimeout(() => {
      document.documentElement.style.setProperty(
        "--primary-theme-color",
        `var(--${color})`,
      );

      document.body.style.setProperty(
        "--primary-theme-color",
        `var(--${color})`,
      );
      document.documentElement.style.setProperty(
        "--primary-theme-color-tint",
        `var(--${color}-tint)`,
      );

      document.body.style.setProperty(
        "--primary-theme-color-tint",
        `var(--${color}-tint)`,
      );
      setActiveColor(getCurrentColor());

      themeOverlayElem?.classList.remove("animate");
    }, delay);
  }

  useEffect(() => {
    setTheme(activeColor);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);
  return {
    setTheme,
    activeColor,
  };
}
