window.addEventListener("load", () => {
    document.getElementById("fontNormal").addEventListener("click", () => {
        document.body.style.fontSize = "100%";
    })
    document.getElementById("fontLarge").addEventListener("click", () => {
        document.body.style.fontSize = "150%";
    })
    document.getElementById("fontLargest").addEventListener("click", () => {
        document.body.style.fontSize = "200%";
    })
    document.getElementById("hideImageButton").addEventListener("click", () => {
        // if(document.getElementById("randomImage").style.display == "none")
        // document.getElementById("randomImage").style.display = "inline";
        if(document.getElementById("randomImage").style.display == "inline"){
            document.getElementById("randomImage").style.display = "none";
            document.getElementById("hideImageButton").innerHTML = "pokaż"
        } else {
            document.getElementById("randomImage").style.display = "inline";
            document.getElementById("hideImageButton").innerHTML = "zniknij";
        }
    })
})