const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");

prevBtn.addEventListener("click", prevPage);
nextBtn.addEventListener("click", nextPage);

let currentLoc = 1;
const numOfPages = 2;
const maxLoc = numOfPages + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-15vw)";
    nextBtn.style.transform = "translateX(15vw)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning){
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0vw)";
    nextBtn.style.transform = "translateX(0vw)";
}

function nextPage() {
    if(currentLoc < maxLoc){
        switch(currentLoc){
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;

            case 2:
                closeBook();
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;

            default:
                throw new Error("unknown state");
        }
        currentLoc++;
    }
}

function prevPage() {
    if(currentLoc>1){
        switch(currentLoc){
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 2;
                break;

            case 3:
                openBook();
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 1;
                break;

            default:
                throw new Error("unknown state");
        }
        currentLoc--;
    }
}