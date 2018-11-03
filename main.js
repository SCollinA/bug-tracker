const bugList = document.getElementsByClassName('bugList')[0]

// adds a bunch of dummy bugs
for (let i = 0; i < 20; i++) {
    const bug = document.getElementsByClassName('bug')[0].cloneNode(true)
    bugList.appendChild(bug)
}

const expandedBugs = document.querySelectorAll('.expandedBug')

expandedBugs.forEach(expandedBug => {
    for (let i = 0; i < 5; i++) {
        const bugUpdate = document.getElementsByClassName('bugUpdate')[0].cloneNode(true)
        expandedBug.appendChild(bugUpdate)
    }
})