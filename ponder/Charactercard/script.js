const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 1,
    health: 100,
    image: "images/snortleblat.png",
    attacked: function () {
        this.health -= 20;
        if (this.health <= 0) {
            this.health = 0;
            alert(this.name + " has died!");
        }
        renderCharacter();
    },
    levelUp: function () {
        this.level += 1;
        renderCharacter();
    }
};
function renderCharacter() {
    document.querySelector("#charName").textContent = character.name;
    document.querySelector("#charClass").textContent = character.class;
    document.querySelector("#charLevel").textContent = character.level;
    document.querySelector("#charHealth").textContent = character.health;
    document.querySelector("#charImage").setAttribute("src", character.image);
    document.querySelector("#charImage").setAttribute("alt", character.name);
}
renderCharacter();
document.querySelector("#atkBtn").addEventListener("click", function () {
    character.attacked();
});

document.querySelector("#lvlUpBtn").addEventListener("click", function () {
    character.levelUp();
});