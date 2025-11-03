var gBallWidth = gBallHeight = 100

function onBallClicked(elDiv) {
    
    if (gBallWidth === 400) {
        gBallWidth = 100
        gBallHeight = 100
    }
    else {
        gBallWidth += 50
        gBallHeight += 50
    }

    elDiv.style.width = gBallWidth + 'px'
    elDiv.style.height = gBallHeight + 'px'


}