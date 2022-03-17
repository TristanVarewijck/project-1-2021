const config = {
  threshold: [0.25],
};

function movieObserver(items) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("invisible");
        entry.target.classList.add("visible");
        // STOP OBSERVING
        // observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("visible");
        entry.target.classList.add("invisible");
      }
    });
  }, config);

  items.forEach((i) => {
    observer.observe(i);
  });
}

export { movieObserver };
