const images = {
  1: "http://unsplash.it/400?random&gravity=center",
  2: "https://images.unsplash.com/photo-1512580526143-1f24419088a3?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  3: "https://plus.unsplash.com/premium_photo-1679858379227-1a9e4cd878d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  4: "https://images.unsplash.com/photo-1562859176-8cc1200999b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5MDUyMDA1fHxlbnwwfHx8fHw%3D",
  5: "https://images.unsplash.com/photo-1473158912295-779ef17fc94b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0Mzk1Nzc4fHxlbnwwfHx8fHw%3D",
  6: "https://images.unsplash.com/photo-1717603907207-66f2cb3d50f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxZc1Bnb2llenlOQXx8ZW58MHx8fHx8",
  7: "https://images.unsplash.com/photo-1559406340-b64d0c8a86f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDB8OTU5MjMzOXx8ZW58MHx8fHx8",
  8: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
  9: "https://images.unsplash.com/photo-1630253302741-16e56beae503?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwzNDc4OTc3fHxlbnwwfHx8fHw%3D",
};

const keys = Object.keys(images);
const pics = document.querySelectorAll(".item img");
const likes = document.querySelectorAll(".like span .num");
const more = document.querySelector(".more");
const hearts = document.querySelectorAll(".like svg");

for (let i = 0; i < pics.length; i++) {
  pics[i].addEventListener("dblclick", function () {
    likes[i].innerHTML = Number(likes[i].innerHTML) + 1;

    hearts[i].classList.add("animate");
    setTimeout(() => {
      hearts[i].classList.remove("animate");
    }, 500);
  });
}

more.addEventListener("click", function () {
  pics.forEach((pic) => {
    pic.src = images[Math.floor(Math.random() * keys.length + 1)];
  });
});
