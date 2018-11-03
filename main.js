const bugList = document.getElementsByClassName('bugList')[0]

for (let i = 0; i < 20; i++) {
    const bug = document.getElementsByClassName('bug')[0].cloneNode(true)
    bugList.appendChild(bug)
}