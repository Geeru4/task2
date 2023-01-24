let input = document.createElement(tag = "input", properties = [["innerHTML", "Walter White"], ["type", "text"], ["placeholder", "im cooking"]], styles = [["fontSize", "18px"], ["color", "green"]]);
for (let propertie of properties) {
    propertie.style = [['fontSize','65px'], ['backgroundColor', 'red']];

    console.log("cooking")
}

const heisenberg = document.querySelector('.Heisenberg');
heisenberg.append(input);

console.log("proverka appenda")