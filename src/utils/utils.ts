import type { Astro } from "../types";

// Get the current path from Astro's request object
export const getCurrentPath = (astro: Astro): string => {
  return astro.url.pathname;
};

// Calculate the opacity class for a navbar item based on the current path
export const getNavItemOpacityClass = (
  currentPath: string,
  url: string,
): string => {
  const navItemClass = "text-[24px] text-black dark:text-white";
  const inactiveNavItemClass = "text-opacity-50 dark:text-opacity-50";

  return currentPath === url
    ? `${navItemClass} text-opacity-100`
    : `${navItemClass} ${inactiveNavItemClass}`;
};
