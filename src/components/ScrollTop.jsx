export function ScrollTop() {
  window.onscroll = function () {
    showScrollTopBtn();
  };

  function showScrollTopBtn() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      scrollTopBtn.classList.remove("hidden");
      scrollTopBtn.classList.add("block");
    } else {
      scrollTopBtn.classList.add("hidden");
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      id="scrollTopBtn"
      onClick={scrollToTop}
      className="size-10 hidden fixed bottom-5 right-5 text-gray-800 text-2xl p-3 rounded-full transition-opacity duration-300 z-20"
    >
      👆🏻
    </button>
  );
}

export default ScrollTop;
