    // ------------------------------------------------------------------------------

    // var text = document.getElementById('myInfo');
    // var newDom = '';
    // var animationDelay = 6;

    // for (let i = 0; i < text.innerText.length; i++) {
    //     newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
    // }

    // text.innerHTML = newDom;
    // var length = text.children.length;

    // for (let i = 0; i < length; i++) {
    //     text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    // }











    window.onload = function () {

        // We listen to the resize event
        window.addEventListener('resize', () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

        /* ~~~~~~~ GIF before website loads start ~~~~~~ */
        $(".se-pre-con").fadeOut("slow");;


        var TxtRotate = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtRotate.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            var that = this;
            var delta = 100;

            if (this.isDeleting) {
                delta /= 2;
            }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function () {
                that.tick();
            }, delta);
        };

        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }

        // ------------------------------------------------------------------------------------

        // My Info

        var info = document.getElementById('myInfo');
        info.style.visibility = 'hidden';

        var scrolledInfo = false;
        $(window).scroll(function () {
            var hT = $('#myInfo').offset().top, // 1672
                hH = $('#myInfo').outerHeight(), // 300
                wH = $(window).height(), // 503
                wS = $(this).scrollTop();
            // console.log(hT, hH, wH, wS);
            if (wS > (hT + hH - wH) && scrolledInfo == false) {
                // console.log('H1 on the view!');
                info.style.visibility = 'visible';
                info.className += ' char';
                scrolledInfo = true;
            }
        });

        // Skill Row Right Side

        var rightSkills = document.getElementById('right-skills');
        rightSkills.style.visibility = 'hidden';

        var scrolledRight = false;
        $(window).scroll(function () {
            var hT = $('#right-skills').offset().top, // 1672
                hH = $('#right-skills').outerHeight(), // 300
                wH = $(window).height(), // 503
                wS = $(this).scrollTop();
            // console.log(hT, hH, wH, wS);
            if (wS > (hT + hH - wH) && scrolledRight == false) {
                // console.log('H1 on the view!');
                rightSkills.style.visibility = 'visible';
                rightSkills.className += ' char';
                scrolledRight = true;
            }
        });

        // Skill Row Left Side

        var leftSkills = document.getElementById('left-skills');
        leftSkills.style.visibility = 'hidden';

        var scrolledLeft = false;
        $(window).scroll(function () {
            var hT = $('#left-skills').offset().top, // 1672
                hH = $('#left-skills').outerHeight(), // 300
                wH = $(window).height(), // 503
                wS = $(this).scrollTop();
            // console.log(hT, hH, wH, wS);
            if (wS > (hT + hH - wH) && scrolledLeft == false) {
                // console.log('H1 on the view!');
                leftSkills.style.visibility = 'visible';
                leftSkills.className += ' char';
                scrolledLeft = true;
            }
        });

        // Projects Animated
        if (window.innerWidth <= 481) {
            var projects1 = document.getElementById('projectsAnimated1');
            projects1.style.visibility = 'hidden';

            var scrolledProjects1 = false;

            $(window).scroll(function () {
                var hT = $('#projectsAnimated').offset().top, // 1672
                    hH = $('#projectsAnimated').outerHeight(), // 300
                    wH = $(window).height(), // 503
                    wS = $(this).scrollTop();
                console.log(hT, hH, wH, wS);
                if (wS > (hT + hH - (wH * 2.5)) && scrolledProjects1 == false) {
                    // console.log('H1 on the view!');
                    projects1.style.visibility = 'visible';
                    projects1.className += ' char';
                    scrolledProjects1 = true;
                }
            });

            var projects2 = document.getElementById('projectsAnimated2');
            projects2.style.visibility = 'hidden';

            var scrolledProjects2 = false;

            $(window).scroll(function () {
                var hT = $('#projectsAnimated').offset().top, // 1672
                    hH = $('#projectsAnimated').outerHeight(), // 300
                    wH = $(window).height(), // 503
                    wS = $(this).scrollTop();
                // console.log(hT, hH, wH, wS);
                if (wS > (hT + hH - (wH * 2.5)) && scrolledProjects2 == false) {
                    // console.log('H1 on the view!');
                    projects2.style.visibility = 'visible';
                    projects2.className += ' char';
                    scrolledProjects2 = true;
                }
            });

            var projects3 = document.getElementById('projectsAnimated3');
            projects3.style.visibility = 'hidden';

            var scrolledProjects3 = false;

            $(window).scroll(function () {
                var hT = $('#projectsAnimated').offset().top, // 1672
                    hH = $('#projectsAnimated').outerHeight(), // 300
                    wH = $(window).height(), // 503
                    wS = $(this).scrollTop();
                // console.log(hT, hH, wH, wS);
                if (wS > (hT + hH - (wH * 2.5)) && scrolledProjects3 == false) {
                    // console.log('H1 on the view!');
                    projects3.style.visibility = 'visible';
                    projects3.className += ' char';
                    scrolledProjects3 = true;
                }
            });
        } else {
            var projects1 = document.getElementById('projectsAnimated1');
            projects1.style.visibility = 'hidden';

            var scrolledProjects1 = false;

            $(window).scroll(function () {
                var hT = $('#projectsAnimated').offset().top, // 1672
                    hH = $('#projectsAnimated').outerHeight(), // 300
                    wH = $(window).height(), // 503
                    wS = $(this).scrollTop();
                console.log(hT, hH, wH, wS);
                if (wS > (hT + hH - wH) && scrolledProjects1 == false) {
                    // console.log('H1 on the view!');
                    projects1.style.visibility = 'visible';
                    projects1.className += ' char';
                    scrolledProjects1 = true;
                }
            });

            var projects2 = document.getElementById('projectsAnimated2');
            projects2.style.visibility = 'hidden';

            var scrolledProjects2 = false;

            $(window).scroll(function () {
                var hT = $('#projectsAnimated').offset().top, // 1672
                    hH = $('#projectsAnimated').outerHeight(), // 300
                    wH = $(window).height(), // 503
                    wS = $(this).scrollTop();
                // console.log(hT, hH, wH, wS);
                if (wS > (hT + hH - wH) && scrolledProjects2 == false) {
                    // console.log('H1 on the view!');
                    projects2.style.visibility = 'visible';
                    projects2.className += ' char';
                    scrolledProjects2 = true;
                }
            });

            var projects3 = document.getElementById('projectsAnimated3');
            projects3.style.visibility = 'hidden';

            var scrolledProjects3 = false;

            $(window).scroll(function () {
                var hT = $('#projectsAnimated').offset().top, // 1672
                    hH = $('#projectsAnimated').outerHeight(), // 300
                    wH = $(window).height(), // 503
                    wS = $(this).scrollTop();
                // console.log(hT, hH, wH, wS);
                if (wS > (hT + hH - wH) && scrolledProjects3 == false) {
                    // console.log('H1 on the view!');
                    projects3.style.visibility = 'visible';
                    projects3.className += ' char';
                    scrolledProjects3 = true;
                }
            });
        }

        // Contact Form Animated

        if (window.innerWidth <= 481) {
            var contact = document.getElementById('contact-part');
            contact.style.visibility = 'hidden';

            var scrolledContact = false;

            $(window).scroll(function () {
                var hT = $('#contact-part').offset().top, // 1672
                    hH = $('#contact-part').outerHeight(), // 300
                    wH = $(window).height(), // 503
                    wS = $(this).scrollTop();
                // console.log(hT, hH, wH, wS);
                if (wS > (hT + hH - (wH * 1.5)) && scrolledContact == false) {
                    // console.log('H1 on the view!');
                    contact.style.visibility = 'visible';
                    contact.className += ' char';
                    scrolledContact = true;
                }
            });
        } else {
            var contact = document.getElementById('contact-part');
            contact.style.visibility = 'hidden';

            var scrolledContact = false;

            $(window).scroll(function () {
                var hT = $('#contact-part').offset().top, // 1672
                    hH = $('#contact-part').outerHeight(), // 300
                    wH = $(window).height(), // 503
                    wS = $(this).scrollTop();
                // console.log(hT, hH, wH, wS);
                if (wS > (hT + hH - wH) && scrolledContact == false) {
                    // console.log('H1 on the view!');
                    contact.style.visibility = 'visible';
                    contact.className += ' char';
                    scrolledContact = true;
                }
            });
        }

        // Navbar Sticking Code while scrolling starts here-----------------

        // This code executes when resize happens
        window.addEventListener('resize', () => {
            // We execute the same script as before
            var navbar = document.getElementById('navbar');
            var about = document.getElementById('about-row2');
            if (window.innerWidth <= 481) {
                let vh = window.innerHeight;

                $(window).scroll(function () {
                    if (window.pageYOffset >= vh) {
                        navbar.classList.add("sticky");
                        about.classList.add("aboutRowExtra");
                    } else {
                        navbar.classList.remove("sticky");
                        about.classList.remove("aboutRowExtra");
                    }
                });
            } else {
                var sticky = navbar.offsetTop;

                $(window).scroll(function () {
                    if (window.pageYOffset >= sticky) {
                        navbar.classList.add("sticky");
                        about.classList.add("aboutRowExtra");
                    } else {
                        navbar.classList.remove("sticky");
                        about.classList.remove("aboutRowExtra");
                    }
                });
            }
        });

        // This code happens when load
        var navbar = document.getElementById('navbar');
        var about = document.getElementById('about-row2');
        if (window.innerWidth <= 481) {
            let vh = window.innerHeight;

            $(window).scroll(function () {
                if (window.pageYOffset >= vh) {
                    navbar.classList.add("sticky");
                    about.classList.add("aboutRowExtra");
                } else {
                    navbar.classList.remove("sticky");
                    about.classList.remove("aboutRowExtra");
                }
            });
        } else {
            var sticky = navbar.offsetTop;

            $(window).scroll(function () {
                if (window.pageYOffset >= sticky) {
                    navbar.classList.add("sticky");
                    about.classList.add("aboutRowExtra");
                } else {
                    navbar.classList.remove("sticky");
                    about.classList.remove("aboutRowExtra");
                }
            });
        }

        // console.log(sticky);
        // console.log(vh);

        // $(window).scroll(function () {
        //     if (window.pageYOffset >= sticky) {
        //         navbar.classList.add("sticky");
        //         about.classList.add("aboutRowExtra");
        //     } else {
        //         navbar.classList.remove("sticky");
        //         about.classList.remove("aboutRowExtra");
        //     }
        // });

        // Navbar Sticking Code while scrolling ends here-----------------


        // Smooth Scroll Action Code

        $("#startingPage").click(function () {
            $('html,body').animate({
                    scrollTop: $("#home-row1").offset().top
                },
                'slow');
        });

        $("#goport").click(function () {
            $('html,body').animate({
                    scrollTop: $("#navbar").offset().top
                },
                'slow');
        });

        $("#about-scroll").click(function () {
            $('html,body').animate({
                    scrollTop: $("#about-row2").offset().top - 64
                },
                'slow');
            console.log($("#about-row2").offset().top - 20);
        });

        $("#skill-scroll").click(function () {
            $('html,body').animate({
                    scrollTop: $("#skills-row3").offset().top - 64
                },
                'slow');
        });

        $("#projects-scroll").click(function () {
            $('html,body').animate({
                    scrollTop: $("#projects-row4").offset().top - 64
                },
                'slow');
        });

        $("#contact-scroll").click(function () {
            $('html,body').animate({
                    scrollTop: $("#contact-row5").offset().top - 64
                },
                'slow');
        });

        // this will disable dragging of all images
        $("img").mousedown(function (e) {
            e.preventDefault()
        });

        // this will disable right-click on all images
        $("img").on("contextmenu", function (e) {
            return false;
        });


    };