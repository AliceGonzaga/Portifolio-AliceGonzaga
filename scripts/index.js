const svg = document.getElementById('triangles');
  
        svg.onclick = (e) => {
          const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple']
          const rando = () => colors[Math.floor(Math.random() * colors.length)];
          document.documentElement.style.cssText = `
          --dark-color: ${rando()};
          --light-color: ${rando()}; 
          `
        }

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
      document.getElementById("animated-mark").classList.add("animate");
  }, 2000); // 2000 milliseconds (2 seconds)
});
