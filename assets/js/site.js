document.querySelectorAll(".course").forEach((course) => {
  const summary = course.querySelector("summary");

  summary.addEventListener("click", (event) => {
    event.preventDefault();

    const startHeight = `${course.offsetHeight}px`;
    course.style.height = startHeight;
    course.style.overflow = "hidden";

    if (course.open) {
      requestAnimationFrame(() => {
        course.style.height = `${summary.offsetHeight}px`;
      });

      window.setTimeout(() => {
        course.open = false;
        course.style.height = "";
        course.style.overflow = "";
      }, 220);
    } else {
      course.open = true;
      const endHeight = `${course.scrollHeight}px`;

      requestAnimationFrame(() => {
        course.style.height = endHeight;
      });

      window.setTimeout(() => {
        course.style.height = "";
        course.style.overflow = "";
      }, 220);
    }
  });
});
