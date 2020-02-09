const container = document.querySelector('.grid-container');
document.body.onload = gridGen;

function gridGen() {
    for (let i = 0; i < 256; i++) {
        var newDiv = document.createElement("div");
        newDiv.className += "grid-item";
        newDiv.textContent = i;
        container.appendChild(newDiv);
    }
}

