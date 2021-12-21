export const scrollToTop = () => {
  if (window.scrollY) {
    window.scrollBy({
      top: -window.scrollY,
      left: 0,
      behavior: "instant",
    });
  }
};
