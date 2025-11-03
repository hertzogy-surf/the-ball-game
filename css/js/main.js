var gBallWidth = gBallHeight = 100

function onBallClicked(elDiv) {
    
    gBallWidth += 50
    gBallHeight += 50

    elDiv.style.width = gBallWidth + 'px'
    elDiv.style.height = gBallHeight + 'px'

   
}