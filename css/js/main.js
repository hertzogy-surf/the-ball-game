var gBallWidth = gBallHeight = 100

function onBallClicked(elDiv) {
    
    if (gBallWidth >= 400) {
        gBallWidth = 100
        gBallHeight = 100
    }
    else {
        var randomGrow = getRandomInt(20, 60)

        gBallWidth += randomGrow
        gBallHeight += randomGrow
    }

    var ballColor = getRandomColor()
    var r = ballColor.r
    var g = ballColor.g
    var b = ballColor.b
    elDiv.style.backgroundColor = `rgb(${r},${g},${b})`

    elDiv.style.width = gBallWidth + 'px'
    elDiv.style.height = gBallHeight + 'px'


}