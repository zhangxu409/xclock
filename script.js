const greenMinites = ["25", "26", "27", "28", "29", "55", "56", "57", "58", "59"]

setInterval(() => {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2,'0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    document.getElementById('hour').innerText = hours
    document.getElementById('minute').innerText = minutes
    if (greenMinites.includes(minutes)) {
        bgGreen()
    } else {
        bgBlack()
    }

}, 1000)

setInterval(() => {
    colon = document.getElementById('colon')
    colon.style.color = "rgba(251, 251, 251, 0.1)"
    
    setTimeout(() => {
        colon.style.color = "rgb(251, 251, 251)"
    }, 1000)

}, 2000)


function bgGreen() {
    document.body.style.backgroundColor = "rgb(91, 165, 37)"
}

function bgBlack() {
    document.body.style.backgroundColor = "rgb(16, 16, 16)"
}