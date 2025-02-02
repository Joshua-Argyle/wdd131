document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const viewer = document.querySelector(".viewer");
    const fullImage = document.getElementById("full");
    const closeButton = document.querySelector(".close-viewer");

    function viewHandler(event) {
        if (event.target.classList.contains("grid")) {
        
            const imgSrc = event.target.src;

            const newSrc = imgSrc.replace("-sm", "-full"); 
            fullImage.src = newSrc;
            viewer.classList.remove("hide");
        }
    }

    function closeViewer() {
        viewer.classList.add("hide");
    }

   
    gallery.addEventListener("click", viewHandler);

   
    closeButton.addEventListener("click", closeViewer);

   
    viewer.addEventListener("click", function (event) {
        if (event.target === viewer) {
            closeViewer();
        }
    });
});