$("#slideshow > div:gt(0)").hide();

let delay = [10000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000], i = 0;

function slide() {
    setTimeout(() => {
        effect();
        if(i === delay.length){
            i = 0;
            console.log('Next delay: ' + delay[i] + ' ms');
        }
        else{
            console.log('Next delay: ' + delay[i] + ' ms');
        }
        slide();
    }, delay[i])
    i++;
}

slide();

function effect(){
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000);

    setTimeout(() => {$('#slideshow > div:first').appendTo("#slideshow")}, 1000)
}