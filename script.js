const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");
const accordionHeader = document.querySelectorAll(".accordion-header");

console.log(thumbnails);

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;

    for (let i = 0; i < thumbnails.length; i++) {
      const element = thumbnails[i];
      element.classList.remove("active");
    }

    // Add active to clicked one
    thumb.classList.add("active");
  });
});

accordionHeader.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {

    
    const content = accordion.nextElementSibling;

    accordionHeader.forEach(acc => {
      acc.nextElementSibling.classList.remove('open')
      acc.classList.remove("active");
      console.log(acc);
    })

    // console.log(content);
    content.classList.add("open");
    accordion.classList.add("active");
  });
});


const menubar = document.getElementById('humburger')

menubar.addEventListener("click", () => {
  document.querySelector('.dropDown-nav-links').classList.toggle('hidden')
} )

