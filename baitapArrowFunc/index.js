let colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermil','lion', 'lavender', 'celadon','saffron','fuschia','cinnabar'];

// let colorList = ['black', 'blue', 'while', 'red', 'yellow'];


let renderButton = () => {
    let htmlOutput = "";
    for (let i=0;i<colorList.length;i++){
        let color = colorList[i];
        htmlOutput += `
            <button class="btn ml-2 text-while" 
            onclick="changeColor('${color}')"
            style="background-color:${color};">${color}</button>
            `
    }
    document.getElementById("colors").innerHTML = htmlOutput;
}
renderButton();
window.changeColor = (color) => {
    document.getElementById("house").style.color = color;
}

