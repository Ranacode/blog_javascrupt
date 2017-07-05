$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})

let categorieLinks = document.querySelectorAll('a.link-category');

for (links of categorieLinks) {
  links.addEventListener('mouseover', function() {
    this.firstChild.style.color = "white";
  });
  links.addEventListener('mouseleave', function() {
    this.firstChild.style.color = "black";
  });
}
