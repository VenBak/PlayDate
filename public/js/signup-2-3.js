const ownerSkipBtn = document.getElementById("skip-btn-owner")
const addOwnerPic = document.getElementById("add-owner-pic-btn")

if (ownerSkipBtn && addOwnerPic) {
    ownerSkipBtn.addEventListener("click", (event) => {
        event.preventDefault();
        document.location.replace("../signup-3")
    })

    addOwnerPic.addEventListener("click", (event) => {
        event.preventDefault();
        document.location.replace("../signup-3")
    })
}

const dogSkipBtn = document.querySelector("#skip-btn-dog")
const addDogPic = document.querySelector("#add-dog-pic-btn")

if (dogSkipBtn && addDogPic) {
    dogSkipBtn.addEventListener("click", (event) => {
        event.preventDefault();
        document.location.replace("../profile")
    })

    addDogPic.addEventListener("click", (event) => {
        event.preventDefault();
        document.location.replace("../profile")
    })
}