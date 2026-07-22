const toast = document.getElementById("copy-toast");
document.querySelectorAll(".emoji-card").forEach(card => {
    card.addEventListener("click", function(e){
        // Get only the first text node (emoji/kaomoji)
        let emoji = this.childNodes[0].textContent.trim();
        navigator.clipboard.writeText(emoji).catch(() => {
    const input = document.createElement("textarea");
    input.value = emoji;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
});
        toast.style.left = e.clientX + "px";
        toast.style.top = (e.clientY - 20) + "px";
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        },1000);
    });
});
const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
function searchEmojis(){
    let value = search.value.toLowerCase();
    let cards = document.querySelectorAll(".emoji-card");
    cards.forEach(function(card){
        let text = (card.dataset.name || "").toLowerCase();
        if(text.includes(value)){
            card.style.display="flex";
        }else{
            card.style.display="none";
        }
    });
}
searchBtn.addEventListener("click", searchEmojis);
search.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        searchEmojis();

    }

});

// ==========================
// CATEGORY BUTTONS
// ==========================



function toggleMenu(){

document.getElementById("navbar").classList.toggle("show");

}
