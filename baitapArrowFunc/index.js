// let colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermil','lion', 'lavender', 'celadon','saffron','fuschia','cinnabar'];

let colorList = ['black', 'blue', 'white', 'red', 'yellow', 'pink', 'green'];



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
    document.querySelector(".house-roof").style.background = color;
    document.querySelector(".house-upper").style.background = color;
    document.querySelector(".house-base").style.background = color;
    document.querySelector(".house-window-wrapper").style.background = color;
}

