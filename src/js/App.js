const App = function() {

    let index = 0;
    let prev  = document.querySelector('#wp-g-is-prev');
    let next  = document.querySelector('#wp-g-is-next');

    prev.addEventListener('click', function (){
        show_slide(-1)
    })
    next.addEventListener('click', function (){
        show_slide(1)
    });

    show_slide(index);
    setInterval( show_slide, 3000, 1);

    function show_slide (i) {
        //increment/decrement slide index
        index += i;

        console.log(`Change to ${index}`)
        //grab all the images
        let images = document.getElementsByClassName("wp-g-is-image");

        if( images.length > 1 ){
            //setTimeout(showSlides, 4000);
        }
        //grab all the dots
        //let dots = document.getElementsByClassName("wp-g-is-dot");

        // hide all the images
        for (i = 0; i < images.length; i++)
            images[i].style.display = "none";

        // remove the active class from the dot
        /*for (i = 0; i < dots.length; i++)
            dots[i].className = dots[i].className.replace(" active", "");*/

        // if index is greater than the amount of images (set it to zero)
        if (index > images.length - 1)
            index = 0 ;

        // if index is less than zero (set it to the length of images)
        if (index < 0)
            index = images.length - 1;

        // only display the image that's next or previous
        images[index].style.display = "block";
        // only make the current dot active
        //dots[index].className += " active";

    }

    function showSlides(param) {
        console.log(`***** Interval ${param}`)
        /*show_slide( 1);
        setTimeout(showSlides, 4000);*/
    }

};

export default App;
