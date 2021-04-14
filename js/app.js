$(document).ready(function () {

    $('#profile-ripple').ripples({
        resolution: 512,
        dropRadius:5
    })
    
    // progressbar percentage
    const bars = document.querySelectorAll('.progress-bar');
console.log(bars)

bars.forEach(function (bar) {
    let percentage= bar.dataset.percent;
//         // console.log(per)
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + '%';
    bar.style.width=percentage+'%'
    // console.log(tooltip)
    


})
  
});

