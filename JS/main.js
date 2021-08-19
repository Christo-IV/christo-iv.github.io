const sideNav = document.querySelector("#sideNavigation");
const body = document.querySelector("body");
const container = document.querySelector(".container");

const introduction = document.querySelector("#introduction");
const projects = document.querySelector("#projects");
const skills = document.querySelector("#skills");
const contact = document.querySelector("#contact");

const pages = [introduction, projects, skills, contact];

const pageHeight = introduction.getBoundingClientRect().height;

// TODO - Fix TypeError when trying to scroll to a non-existent page
// TODO - Make page transitioning JS based, which then also removes the
//        ID from the URL (e.g "christo-iv.github.io/#introduction" -> "christo-iv.github.io")

container.addEventListener("wheel", (event) => {
  event.preventDefault();
  let currentPage = introduction.getBoundingClientRect().y / pageHeight;

  console.log("Current page: " + currentPage);
  console.log("Scroll to page: " + -(currentPage - event.deltaY / 100));

  if (currentPage === parseInt(currentPage, 10)) {
    pages[-(currentPage - event.deltaY / 100)].scrollIntoView();
  } else {
    // console.log("Scrolling...");
    null;
  }
});
