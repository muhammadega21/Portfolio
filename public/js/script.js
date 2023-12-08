$(document).ready(function () {
  $("#toggle").change(function (e) {
    const root = document.documentElement;
    root.style.setProperty(
      "--background",
      root.style.getPropertyValue("--background") === "#fff"
        ? "#1d1c1c"
        : "#fff"
    );
    root.style.setProperty(
      "--text",
      root.style.getPropertyValue("--background") === "#fff"
        ? "#2c2c2c"
        : "#fafafa"
    );
    root.style.setProperty(
      "--toggle",
      root.style.getPropertyValue("--background") === "#fff"
        ? "0, 0, 0"
        : "255, 255, 255"
    );
    $(".toggle-label .ball").css(
      "left",
      root.style.getPropertyValue("--background") === "#fff" ? "5px" : "30px"
    );
    $(".toggle-label .ball").css(
      "backgroundColor",
      root.style.getPropertyValue("--background") === "#fff"
        ? "#eb8e14"
        : "#1a82e4"
    );
  });
});
