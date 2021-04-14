$(document).ready(function () {

    $('#profile-ripple').ripples({
        resolution: 512,
        dropRadius:5
    })
    
    // progressbar percentage
    const bars = document.querySelectorAll('.progress-bar');
// console.log(bars)

bars.forEach(function (bar) {
    let percentage= bar.dataset.percent;
//         // console.log(per)
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + '%';
    bar.style.width=percentage+'%'
    // console.log(tooltip)
    


})
    
    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    // console.log(counters)

    function runCounter() {
        counters.forEach(counter => {
            counter.innerText = 0;                                           //initial count
            


            let target = +counter.dataset.count;                                 //final count
            let step=target/10                                                               
            // console.log(target)

            let countIt = function () {                                           //recursive function count the num
                let displayCount=+counter.innerText                             //initial value of count stored in displaycount
                    if (displayCount < target) {                                //check wheather displaycount is less than target or not & loop agian
                        counter.innerText = Math.ceil(displayCount +step);       //value  incrented after ever one loop
                    console.log(displayCount)
                    // countIt();                                                //this will not give time to browser for incrementation because browser is
                                                                                  //not getting enough time to increment so by using settimeout it will icrement one by one
                    setTimeout(countIt, 60);                         
                }
                else {
                    counter.innerText = target;                                       //else final value 
                }
            }
            countIt();
        })
      
        
    }

    let counterSection = document.querySelector('counter-wrapper');
    let options = {
        rootMargin: '0px 0px -100px 0px'
    }



    const sectionObserver = new IntersectionObserver(function (entry,observe) {           //this method is used to observe a specific part of section
        
        if (entry[0].isIntersecting) {
            console.log('intersecting')
            runCounter();

        }
    }, options);
    

    sectionObserver.observe(counterSection);
});

