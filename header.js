// navbar.html
var navbar = `
<!-- header-section -->
<nav class="header">
    <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
    </div>
    <div>
        <a href="#"><img class="icon" id="icon" src="imges/icons/PH-shield.png"></a>
    </div>
    <ul class="nav-links">
        <li><a href="#">new</a></li>
        <li><a href="#">gentlemen</a></li>
        <li><a href="#">Ladies</a></li>
        <li><a href="#">childrens</a></li>
        <li><a href="#">collections</a></li>   
        <li><a href="#">about us</a></li>   
    </ul>
    <div>
        <a href="#" src="/icons/bag-icon.png">
            <img class="icon" src="imges/icons/bag-icon.png">
        </a>
    </div>
</nav>
`;
//navbar.css
var navbar_style = `
    <style>
        *{
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select:none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            box-sizing: border-box;
            padding: 0px;
            margin: 0px;
            font-family: 'Georama';        
        }
        /*header-section*/
        .header{
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            min-height: 6vh;
            background-color: black;
        }
        .icon{
            width: 25px;
            opacity: 85%;
            transition: 0.3s;
        }
        .icon:hover{
            opacity: 100%;
        }
        .nav-links{
            display: flex;  
            justify-content: space-around;
            width: 55%;
            list-style: none;
            transition: 1s; 
        }
        .nav-links a{
            text-decoration: none;
            color: rgb(255, 255, 255, 0.85);
            text-transform: uppercase;
            font-weight: bold;
            font-size: 15px;
            transition: 0.3s;
        }
        .nav-links a:hover{
            color: white;
        }
        /* mobile-menu */
        .burger{
            cursor: pointer;
            display: none;
        }
        .burger div{
            width: 21px;
            height: 2.8px;
            background-color: rgb(255, 255, 255, 0.85);
            margin: 5px;
            border-radius: 5px;
            transition: 0.5s;
        }
        @media screen and (max-width:1024px){
            .nav-links{
                width: 75%;
            }
        }
        @media screen and (max-width:768px){
            .burger{
                display: block;
            }
            .nav-links{
                display: flex;
                flex-direction: column;
                align-items: center;
                position: absolute;
                width: 100%;
                height: 92vh;
                top: 6vh;
                background-color: black;
                transform: translateX(-150%);
                font-size: 20px;
                
            }
            .nav-links li{
                opacity: 0;
                border-bottom: 1px solid white;
                border-top: 1px solid white;
                padding: 10px;
                
            }
        }
        .nav-active{
            transform: translateX(0%);
        }
        @keyframes navLinkFade{
            from{
                opacity: 0;
                transform: translateX(-50px);
            }
            to{
                opacity: 1;
                transform: translateX(0px);
            }
        }
        /* X-animation */
        .toggle .line1{
            transform: rotate(-45deg) translate(-5.25px,0px);
        }
        .toggle .line2{
            transform: rotate(45deg) translate(-5.25px, 0px);
        
        }
    </style>
`;
//navbar.js
//navbar_animation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        //Animate Links
        navlinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '' ;
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

document.write(navbar, navbar_style);
navSlide();