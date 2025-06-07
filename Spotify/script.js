console.log("Harshvardhan Patil")
let val = false;
// =============================================================================
function setVal(){
    val = true;
}
function showLogIn() {
    document.getElementsByClassName("fullSize")[0].style.display = 'block';
    document.getElementsByClassName("logIn")[0].style.border = "5px solid black"
    document.getElementById("signUp").style.border = "2px solid black"
    document.getElementById("signUp").style.width = "30%"
    document.getElementById("logIn").style.width = "70%"
    document.getElementById("logIn").style.backgroundColor = "rgb(31, 148, 152)"
    document.getElementById("signUp").style.backgroundColor = "cadetblue"
    document.getElementById("fullname").style.display = 'block'
    document.getElementById("lfullname").style.display = 'block'
    // background-color: rgb(31, 148, 152);
}
function showSignUp() {
    document.getElementsByClassName("fullSize")[0].style.display = 'block';
    document.getElementById('loginTab').style.display = 'block';
    document.getElementById("signUp").style.border = "5px solid black"
    document.getElementById("logIn").style.border = "2px solid black"
    document.getElementById("signUp").style.width = "70%"
    document.getElementById("logIn").style.width = "30%"
    document.getElementById("signUp").style.backgroundColor = "rgb(31, 148, 152)"
    document.getElementById("logIn").style.backgroundColor = "cadetblue"
    document.getElementById("fullname").style.display = 'none'
    document.getElementById("lfullname").style.display = 'none'
}
document.getElementById("signUp").addEventListener("click", (e) => {
    document.getElementById("signUp").style.border = "5px solid black"
    document.getElementById("logIn").style.border = "2px solid black"
    document.getElementById("signUp").style.width = "70%"
    document.getElementById("logIn").style.width = "30%"
    document.getElementById("signUp").style.backgroundColor = "rgb(31, 148, 152)"
    document.getElementById("logIn").style.backgroundColor = "cadetblue"
    document.getElementById("fullname").style.display = 'none'
    document.getElementById("lfullname").style.display = 'none'
})
document.getElementById("logIn").addEventListener("click", (e) => {
    document.getElementById("signUp").style.border = "2px solid black"
    document.getElementById("logIn").style.border = "5px solid black"
    document.getElementById("signUp").style.width = "30%"
    document.getElementById("logIn").style.width = "70%"
    document.getElementById("logIn").style.backgroundColor = "rgb(31, 148, 152)"
    document.getElementById("signUp").style.backgroundColor = "cadetblue"
    document.getElementById("fullname").style.display = 'block'
    document.getElementById("lfullname").style.display = 'block'
})
// =============================================================================
let currentSong = new Audio();
let songs = [];
// async function getSongs() {
//     let a = await fetch('http://127.0.0.1:3000/Spotify/Trending%20Songs/')
//     let response = await a.text()
//     let div = document.createElement("div");
//     div.innerHTML = response;
//     let as = div.getElementsByTagName("a")
//     let songs = [];
//     for (let i = 0; i < as.length; i++) {
//         const element = as[i];
//         if (element.href.endsWith(".mp3")) {
//             songs.push(element.href)
//         }
//     }
//     return songs
// }
function secondsToMinuteSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const rseconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(rseconds).padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
}
const playMusic = (track) => {
    currentSong.src = track
    currentSong.play()
    play.src = "SVGs/pause.svg"
    let a = track.split("/")
    let b = a[a.length - 1].slice(0, -4)
    document.querySelector(".songInfo").innerHTML = b;
    // document.querySelector(".songTime").innerHTML = "00:00 / 05:00"
}

async function readFolder(folderName) {
    let div = document.createElement("div")
    div.innerHTML = await (await fetch(`${folderName}/`)).text()
    // console.log(`Inside ${folderName}`)
    as = div.getElementsByTagName("a")
    let folders = []
    // console.log("folder content below")
    songs = []
    for (let i = 1; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith("/")) {
            let subFolder = document.createElement("div")
            subFolder.innerHTML = await (await fetch(`${element.href}`)).text()
            let asSubFolder = subFolder.getElementsByTagName("a")
            // console.log(`Inside folder ${element.href}`)
            let song;
            let thumbnail;

            for (let j = 1; j < asSubFolder.length; j++) {
                const e = asSubFolder[j];
                if (e.href.endsWith(".mp3")) {
                    song = e.href;
                    songs.push(e.href)
                }
                if (e.href.endsWith(".jpg")) {
                    thumbnail = e.href;
                }
            }
            let a = song.split("/")
            let b = a[a.length - 1].replaceAll("%20", " ").slice(0, -4)
            let innerBlock = document.querySelector(".ib-1")
            let c = thumbnail.split("/")
            let d = c[c.length - 1].replaceAll("%20", " ").slice(0, -4)
            innerBlock.innerHTML = innerBlock.innerHTML + `<div class="Card" data-src="${song}">
                            <img class="svg" src="SVGs/play-button-green-icon.svg" alt="">
                            <img class="banner" src="${thumbnail}" alt="Trending Songs/1.jpg">
                            <p class="p1">${b}</p>
                            <p class="p2">${d}</p>
                        </div>`;

        }
        folders.push(element.href)
    }
    Array.from(document.querySelector(".ib-1").getElementsByClassName("Card")).forEach(element => {
        let song = element.getAttribute("data-src");
        element.firstElementChild.addEventListener("click", e => {
            playMusic(song.replaceAll("%20", " "));
        })
    })
    // console.log("Folders content", folders)

}
// -----------------------------------------------------------------------------------------------------------
async function readArtists(folderName) {
    let d = document.createElement("div")
    d.innerHTML = await (await fetch(`${folderName}/`)).text()
    as = d.getElementsByTagName("a")
    for (let i = 1; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith("/")) {
            let subFolder = document.createElement("div")
            subFolder.innerHTML = await (await fetch(`${element.href}`)).text()
            let asSubFolder = subFolder.getElementsByTagName("a")
            // console.log(`Inside folder ${element.href}`)
            let thumbnail;
            let name;
            for (let j = 1; j < asSubFolder.length; j++) {
                const e = asSubFolder[j];
                if (e.href.endsWith(".jpg")) {
                    thumbnail = e.href;
                    // name = thumbnail.slice(0, -4)
                    break;
                }
            }
            let c = thumbnail.split("/")
            let d = c[c.length - 1].replaceAll("%20", " ")
            name = d.slice(0, -4);
            // console.log("c is: ", c)
            let div = document.querySelector(".ib-2");
            let newCard = document.createElement("div")
            newCard.classList.add("Card")
            newCard.innerHTML = `<img class="svg" src="SVGs/play-button-green-icon.svg" alt="">
                            <img src="${thumbnail}" alt="asdf" class="banner artist">
                            <p class="p1">${name}</p>
                            <p class="p2">Artist</p>`;
            div.appendChild(newCard)

            let divs = div.getElementsByClassName("Card")
            // console.log(divs)
            let lastDiv = divs[divs.length - 1]
            // console.log(lastDiv.firstElementChild)
            lastDiv.firstElementChild.addEventListener("click", (ele) => {
                console.log(ele, "button clicked")
                document.querySelector(".scroll-1").style.display = "none"
                let s2 = document.querySelector(".scroll-2");
                s2.style.display = "block"
                s2.innerHTML = "<ul> </ul>"
                let ul = s2.getElementsByTagName("ul")[0]
                let song;
                // songs.length = 0;
                songs = []
                for (let j = 1; j < asSubFolder.length; j++) {
                    const e = asSubFolder[j];
                    if (e.href.endsWith(".mp3")) {
                        song = e.href;
                        let f = song.split("/")
                        let g = f[f.length - 1].replaceAll("%20", " ")

                        let liElement = document.createElement("li")
                        liElement.setAttribute("data-src", e.href)
                        liElement.innerHTML = `<img class="invert" src="SVGs/music.svg" alt="SVGs/music.png">
                        <div class="info">
                        <p title="${g}" class="p1">${g}</p>
                        <p class="p2">${name}</p>
                        </div>
                        <img class="invert atEnd" src="SVGs/play.svg" alt="SVGs/play.png">`;
                        ul.appendChild(liElement)
                        let lis = ul.getElementsByTagName("li")
                        let lastLi = lis[lis.length - 1]
                        songs.push(e.href)
                        lastLi.addEventListener("click", () => {
                            playMusic(e.href.replaceAll("%20", " "))
                        })
                    }
                }
            })
        }
    }
}

// -----------------------------------------------------------------------------------------------------------

async function main() {
    await readArtists("Popular Artists")
    // Calling the readFolder function for adding Trending songs in it's div
    await readFolder("Trending Songs");
    // songs = await getSongs()
    // console.log("songs are:")
    // console.log(songs)
    // let songUL = document.querySelector(".scroll").getElementsByTagName("ul")[0]
    // songs.forEach(element => {
    //     songUL.innerHTML = songUL.innerHTML + `<li>
    //                     <img class="invert" src="SVGs/music.svg" alt="SVGs/music.png">
    //                     <div class="info">
    //                         <p title="${element.split("Songs/")[1].replaceAll("%20", " ")}" class="p1">${element.split("Songs/")[1].replaceAll("%20", " ")}</p>
    //                         <p class="p2">Harsh</p>
    //                     </div>
    //                     <img class="invert atEnd" src="SVGs/play.svg" alt="SVGs/play.png">
    //                 </li>`
    // });
    // Attaching Event Listener to each song
    // Array.from(document.querySelector(".scroll").getElementsByTagName("li")).forEach(e => {
    //     e.addEventListener("click", element => {
    //         console.log(e.querySelector(".info").firstElementChild.innerHTML)
    //         playMusic(e.querySelector(".info").firstElementChild.innerHTML)
    //     })
    // })
    // Function for toggling between play and pause
    function togglePlay() {
        let first = document.querySelector(".scroll-2").getElementsByTagName("li")[0];
        if (currentSong.src == '') {
            if (window.getComputedStyle(document.querySelector(".scroll-1")).display == 'block') {
                playMusic(songs[0].replaceAll("%20", " "))
            }
            console.log("currentSong.src == ''")
            playMusic(first.getAttribute("data-src").replaceAll("%20", " "))
            play.src = "SVGs/pause.svg"
        }
        else if (currentSong.paused) {
            currentSong.play();
            play.src = "SVGs/pause.svg"
        }
        else {
            currentSong.pause();
            play.src = "SVGs/play.svg"
        }
    }
    // Attaching Event Listener to play
    let play = document.getElementById("play");
    play.addEventListener("click", togglePlay)

    // Attaching Event Listener to previous button
    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src)
        console.log("Index is", index)
        if (index - 1 >= 0) {
            playMusic(songs[index - 1].replaceAll("%20", " "))
        }
    })

    // Attaching Event Listener to next button
    next.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src)
        console.log("Index is", index)
        if (index + 1 < songs.length) {
            playMusic(songs[index + 1].replaceAll("%20", " "))
        }
    })

    // Attaching Event Listener to the currentSong to update the time continuously
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".time").innerHTML = `${secondsToMinuteSeconds(currentSong.currentTime)} / ${secondsToMinuteSeconds(currentSong.duration)}`
        // console.log(100*(currentSong.currentTime/currentSong.duration))
        document.querySelector(".circle").style.left = 100 * (currentSong.currentTime / currentSong.duration) + "%";
        if (currentSong.currentTime == currentSong.duration) {
            play.src = "SVGs/play.svg"
        }
    })

    // Attaching Event Listener to Seekbar to seek at various parts of song
    document.querySelector(".seekBar").addEventListener("click", e => {
        // console.log(e);
        document.querySelector(".circle").style.left = (e.offsetX / e.target.getBoundingClientRect().width) * 100 + "%"
        currentSong.currentTime = currentSong.duration * (e.offsetX / e.target.getBoundingClientRect().width);
    })
    // Attaching Event Listener to close the login window
    document.getElementById("close-logIn").addEventListener("click", ()=>{
        document.getElementsByClassName("fullSize")[0].style.display = "none"
    })

    // Adding hammer Burger to open side content in mobiles
    document.querySelector(".hammerBurger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-1%"
        document.querySelector(".left").style.zIndex = "2"
        // document.querySelector(".left").style.zIndex = "2"

    })
    // Attaching Event Listener to cross (To close the side content)
    document.getElementById("cross").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%"
        document.querySelector(".left").style.zIndex = "-2"

    })
    // Attaching Event Listener to volume
    // document.querySelector(".songTimeVol").getElementsByTagName("input")[0].addEventListener("change", (e) => {
    //     console.log(e.target.value)
    //     currentSong.volume = parseInt(e.target.value) / 100
    // })

    // On hitting space song should be toggeled between play and pause
    document.addEventListener("keydown", (event) => {
        if (event.code == "Space" || event.key.toLowerCase() == "k") {
            event.preventDefault();
            togglePlay();
        }
    })
}
main()