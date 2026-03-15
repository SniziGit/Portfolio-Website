(function () {
  function normalizePath(pathname) {
    if (!pathname) return "";
    if (pathname.endsWith("/")) return pathname;
    return pathname;
  }

  var path = normalizePath(window.location.pathname);
  var file = path.split("/").pop();

  var links = document.querySelectorAll(".nav a[data-page]");
  links.forEach(function (a) {
    var page = a.getAttribute("data-page");
    if (!page) return;

    if (file === "" && page === "index.html") {
      a.classList.add("active");
      return;
    }

    if (file === page) {
      a.classList.add("active");
    }
  });
})();
