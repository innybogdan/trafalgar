            const arrowPrev = document.querySelector(".prev");
            const arrowNext = document.querySelector(".next");
            var slideIndex = 1;

            arrowNext.addEventListener("click", function () {
                //alert(slideIndex);
                if((slideIndex) == 5) {
                    // alert('there is no more foto!');
                    this.style.backgroundColor = "red";
                    return
                }
                arrowPrev.style.backgroundColor = "inherit";
                // plusSlides(1)
                setTimeout(() => {
                  plusSlides(1);
              }, 150);
            });

            arrowPrev.addEventListener("click", function () {
                // alert(slideIndex);
                if((slideIndex) == 1) {
                    // alert('there is no more foto!');
                    this.style.backgroundColor = "red";
                    return
                }
                arrowNext.style.backgroundColor = "inherit";
                //plusSlides(-1)
                setTimeout(() => {
                  plusSlides(-1);
              }, 150);
            });

            showSlides(slideIndex);
            
            function plusSlides(n) {
              showSlides(slideIndex += n);
            //   alert(slideIndex);
            }
            
            function currentSlide(n) {
              showSlides(slideIndex = n);
            }
            
            function showSlides(n) {
              var i;
              var slides = document.getElementsByClassName("mySlides");
              var dots = document.getElementsByClassName("dot");
              
              if (n > slides.length) {slideIndex = 1}    
              if (n < 1) {slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";  
              }
              for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " active";
            }