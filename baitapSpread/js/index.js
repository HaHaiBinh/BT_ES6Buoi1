let string = "Hover Me!"
let chars = [...string];
console.log('chars: ', chars);

let renderSpan = () => {
    let spanHTML = '';
    for(let i=0;i<chars.length;i++){
        let str = chars[i];
        console.log('str: ', str);
        spanHTML += `
            <span>${str}</span>
                `
    }
    document.querySelector(".heading").innerHTML = spanHTML;
}
renderSpan();