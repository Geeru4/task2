function createElement(tag,properties,styles,parentElem) {
    let hate = parentElem
    let sergey = document.createElement(tag)
    for (let propertie of properties) {
        sergey[propertie[0]] = propertie[1];
        console.log(propertie,propertie[0],propertie[1])
        
        //propertie.style = [['fontSize','65px'], ['backgroundColor', 'red']];
    };
    for (let style of styles) {
        sergey.style[style[0]] = style[1];
    };
    hate.appendChild(sergey);
};
createElement(tag = "input", properties = [["innerHTML", "Walter White"], ["type", "text"], ["placeholder", "im cooking"]], styles = [["fontSize", "18px"], ["color", "green"] ],parentElem = document.querySelector('.Heisenberg'));
