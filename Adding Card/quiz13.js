console.log("HelloWorld!");
// title, cName, views, monthsOld, duration, thumbnail
// function createCard(title, cName, views, monthsOld, duration, thumbnail){
//     let a=document.getElementsByClassName("second")
//     let b=document.createElement("div")
//     let c=document.createElement("div")
//     let d=document.createElement("div")
//     let e=document.createElement("div")
//     let f=document.createElement("img")
//     let g=document.createElement("strong")
//     let h=document.createElement("div")
//     let i=document.createElement("p")
//     let j=document.createElement("p")
//     let k=document.createElement("p")
    

//     c.setAttribute("class", "left")
//     d.setAttribute("class", "right")

//     e.setAttribute("class", "duration")
//     e.innerHTML = duration
//     f.setAttribute("style", "border-radius: 10px;")
//     f.setAttribute("src", thumbnail)
//     f.setAttribute("alt", "image.png")
//     g.setAttribute("title", title)
//     g.innerHTML = title
//     h.setAttribute("class", "down")

//     i.innerHTML = cName + "&nbsp;|&nbsp;"
//     if (views>=1000000) {
//         j.innerHTML =  Math.round(views/1000000) + "M views |"
//     }
//     else if(views>=1000){
//         j.innerHTML = Math.round(views/1000) + "k views |"
//     }
//     else{
//         j.innerHTML = views + "views |"
//     }
//     if(monthsOld>=12){
//         k.innerHTML = "&nbsp;"+ Math.round(monthsOld/12) + " year ago"
//     }
//     else{
//         k.innerHTML = "&nbsp;"+ Math.round(monthsOld) + " months ago"
//     }
    
//     b.setAttribute("class", "card")
//     b.insertAdjacentElement("beforeend", c)
//     b.insertAdjacentElement("beforeend", d)
//     c.insertAdjacentElement("beforeend", e)
//     c.insertAdjacentElement("beforeend", f)
//     d.insertAdjacentElement("beforeend", g)
//     h.insertAdjacentElement("beforeend", i)
//     h.insertAdjacentElement("beforeend", j)
//     h.insertAdjacentElement("beforeend", k)
//     d.insertAdjacentElement("beforeend", h)
    


//     a[0].insertAdjacentElement("beforeend", b)
//     console.log("Done")
// }
function createCard(title, cName, views, monthsOld, duration, thumbnail){
    if (views>=1000000) {
        views = Math.round(views/1000000) + "M views"
    }
    else if(views>=1000){
        views = Math.round(views/1000) + "k views"
    }
    else{
        views = views + "views"
    }
    if(monthsOld>=12){
        monthsOld = Math.round(monthsOld/12) + "years old "
    }
    else{
        monthsOld = monthsOld + "months old "
    }
    let html = `<div class="card">
                <div class="left">
                    <div class="duration">${duration}</div>
                    <img style="border-radius: 10px;" src="${thumbnail}" alt="image.png">
                </div>
                <div class="right">
                    <strong title="${title}"> ${title}  </strong>
                    <div class="down">
                        <p>${cName} | </p>
                        <p>${views} | </p>
                        <p> ${monthsOld}</p>
                    </div>
                </div>
                
                
            </div>`
        document.querySelector(".second").innerHTML = document.querySelector(".second").innerHTML + html;
        
}
// createCard();
createCard("Introduction to Lesson Number #31| Sigma Web Development", "CodeWithHarry", 34000000, 4, "41:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w");
createCard("Introduction to Lesson Number #31| Sigma Web Development", "CodeWithHarry", 34000000, 4, "41:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w");
console.log("After calling function")
