import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    const handleMediaQueryChange = () => {
      setMatches(mediaQueryList.matches);
    };

    mediaQueryList.addListener(handleMediaQueryChange);

    return () => {
      mediaQueryList.removeListener(handleMediaQueryChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
