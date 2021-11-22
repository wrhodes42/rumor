<template>
  <div id="site-wrapper">
      
      <!--########## BOTTOM #########-->
      <div id="bottom" class="flap">
          <div id="front-b">
              <ul id="nav-b">
                  <li class="nav-item" id="what-button-b"><a class="h1" href=#>What is Rumor</a></li>
                  <li class="nav-item" id="receive-button-b"><a class="h1" href=#>Receive a Rumor</a></li>
                  <li class="nav-item" id="submit-button-b"><a class="h1" href=#>Submit a Rumor</a></li>
              </ul>
              
              <div id="logo-front-b">
                  <img id="logo-img-front-b" src="img/ambigram-horizontal.svg">
              </div>
          </div>
          
          <div id="back-b">
              <div id="what-b">
                    <SanityBlocks :blocks="config.about"/>
              </div>
              
              <div id="receive-b">
                  <form id="receive-form-b" method="post" action="https://formspree.io/rumor.pu@gmail.com">
                      <input class="h1" type="text" placeholder="NAME" name="name">
                      <input class="h1" type="email" name="email" placeholder="EMAIL">

                      <input type="submit" value="SIGN UP" class="h1 form-submit">
                  </form>
              </div>
              
              <div id="submit-b">
                  <SanityBlocks :blocks="config.submit"/>
                  <a class="h1" href="mailto:rumor.pu@gmail.com">SUBMIT</a>
              </div>
              
              <div id="logo-back-b">
                  <img id="logo-img-back-b" src="img/ambigram-horizontal.svg">
              </div>
          </div>
      </div>
      
      <!--########## LEFT #########-->
      <div id="left" class="closed flap">
              <div id="front-l">

                  <div id="logo-front-l">
                      <img id="logo-img-front-l" src="img/ambigram-vertical.svg">
                  </div>

                  <ul id="nav-l">
                      <li class="nav-item" id="what-button-l"><a class="h1" href=#>What is Rumor</a></li>
                      <li class="nav-item" id="receive-button-l"><a class="h1" href=#>Receive a Rumor</a></li>
                      <li class="nav-item" id="submit-button-l"><a class="h1" href=#>Submit a Rumor</a></li>
                  </ul>
              </div>
              <div id="back-l">
                  <div id="logo-back-l">
                      <img id="logo-img-back-l" src="img/ambigram-vertical.svg">
                  </div>
                  
                  <div id="what-l">
                      <SanityBlocks :blocks="config.about"/>
                  </div>
                  
                  <div id="receive-l">
                      <form id="receive-form-l" method="post" action="https://formspree.io/rumor.pu@gmail.com">
                          <input class="h1" type="text" placeholder="NAME" name="name">
                          <input class="h1" type="email" name="email" placeholder="EMAIL">

                          <input type="submit" value="SIGN UP" class="h1 form-submit">
                      </form>
                  </div>

                  <div id="submit-l">
                      <SanityBlocks :blocks="config.submit"/>
                      <a class="h1" href="mailto:rumor.pu@gmail.com">SUBMIT</a>
                  </div>
              </div>
      </div>
      
      <!--########## SIMPLE MOBILE LAYOUT #########-->
      <div id="simplemobile">
          <div id="front-simple">
              
              <div id="simplemobile-circle-logo">
                  <img src="img/rumor-circle-rotate.gif">
              </div>
              
              <ul id="simplemobile-nav">
                  <li class="nav-item" id="what-button-simple"><a class="h1" href=#>What is Rumor</a></li>
                  <li class="nav-item" id="receive-button-simple"><a class="h1" href=#>Receive a Rumor</a></li>
                  <li class="nav-item" id="submit-button-simple"><a class="h1" href=#>Submit a Rumor</a></li>
              </ul>
          </div>
          <div id="back-simple">
              <div id="what-simple">
                      <SanityBlocks :blocks="config.about"/>
                  </div>
                  
                  <div id="receive-simple">
                      <form id="receive-form-simple" method="post" action="https://formspree.io/rumor.pu@gmail.com">
                          <input class="h1" type="text" placeholder="NAME" name="name">
                          <input class="h1" type="email" name="email" placeholder="EMAIL">

                          <input type="submit" value="SIGN UP" class="h1 form-submit">
                      </form>
                  </div>

                  <div id="submit-simple">
                      <SanityBlocks :blocks="config.submit"/>
                      <a class="h1" href="mailto:rumor.pu@gmail.com">SUBMIT</a>
                  </div>
              
              <div id="close-simple">
                  <a class="h1" href=#>CLOSE</a>
              </div>
          </div>
      </div>
      
      
      <!--########## IFRAME #########-->
      <div id="iframe">
          <!-- floaty things -->
          <div id="navigation">
              <div class="floaty ui-draggable" v-for="link in links" :id="link.title" :key="link._id" @click="swapIframe(link.url)">
                  <img class="floaty-main" :src="link.thumb">
                  <img class="floaty-hover" :src="link.thumbHover">
              </div>
          </div>

          <div id="background-site">
              <iframe name="background" id="background" scrolling="yes" src="https://docs.google.com/document/d/1y4yvQRAgUgcSggvQH8ENacAmplLNcDBdY4eDyG7SSho/edit?usp=sharing" width="200" height="100"></iframe>
          </div>
      </div>
      
  </div>
</template>

<script>
  import sanity from "../client";
  import { SanityBlocks } from "sanity-blocks-vue-component";

  const configQuery = 
  `*[_id == 'config'][0] {
        ...           
    }`;

  const linksQuery = 
  `*[_type == "link"]{
      _id,
      title,
      url,
      'thumb' : thumb.asset->url,
      'thumbHover' : thumbHover.asset->url
    }`;

  export default {
    name: "Home",
    components: { SanityBlocks },
    data() {
      return {
        config: false,
        loading: true,
        links: []
      };
    },
    created() {
      this.fetchData();
    },
    methods: {

        fetchData() {
            this.error = this.post = null;
            this.loading = true;

            sanity.fetch(linksQuery).then(
                (linksRes) => {
                    this.links = linksRes;
                },
                (error) => {
                    this.error = error;
                }
            );

            sanity.fetch(configQuery).then(
                (configRes) => {
                    this.config = configRes;
                },
                (error) => {
                    this.error = error;
                }
            );

            this.loading = false;
        },

        swapIframe(loc){
            document.getElementById('background').src = loc;
        }

    }
  };
    
    var windowHeight = window.innerHeight;

    var logoPadding = parseFloat(document.getElementById(logo-front-l).style.padding-top) * 2;
    var logoHeight = windowHeight - logoPadding;
    var logoWidth = logoHeight * 0.1875;
    
    var leftWidth = logoWidth + logoPadding;

    var windowWidth = window.innerWidth;

    var logoPaddingB = parseFloat(document.getElementById(logo-front-b).style.padding-top) * 2;
    var logoWidthB = windowWidth - logoPaddingB;
    var logoHeightB = logoWidthB * 0.2125;

    var bottomHeight = logoHeightB + logoPaddingB;

    //selectors
    var logoImgFrontL = document.getElementById(logo-img-front-l);
    var logoImgBackL = document.getElementById(logo-img-back-l);
    var left = document.getElementById(left);
    var whatL = document.getElementById(what-l);
    var receiveL = document.getElementById(receive-l);
    var submitL = document.getElementById(submit-l);
    var navL = document.getElementById(nav-l);
    var frontL = document.getElementById(front-l);

    var logoImgFrontB = document.getElementById(logo-img-front-b);
    var logoImgBackB = document.getElementById(logo-img-back-b);
    var bottom = document.getElementById(bottom);
    var backB = document.getElementById(back-b);
    var navB = document.getElementById(nav-b);

    function SetUpSite()
    {
        //########## LEFT ##########//     
        //set widths
        logoImgFrontL.style.width = logoWidth + 'px';
        logoImgBackL.style.width = logoWidth + 'px';

        if(left.classList.contains(closed)){
            left.style.width = leftWidth + 'px';
        }

        whatL.style.paddingLeft = leftWidth;
        receiveL.style.paddingLeft = leftWidth;
        submitL.style.paddingLeft = leftWidth;

        //########## BOTTOM ##########//
        //set heights
        logoImgFrontB.style.height = logoHeightB + 'px';
        logoImgBackB.style.height = logoHeightB + 'px';

        bottom.style.height = bottomHeight;
        backB.style.paddingBottom = bottomHeight;
        navB.style.paddingBottom = bottomHeight;

        //END 

        // draggable floaty things
        //$(".floaty").draggable({ 
        //    containment: "window"
        //}); 
    }

    //set mobile height to viewport    
    var resizeId;
    function onResize() {
        document.documentElement.style.setProperty('--window-height', window.innerHeight + "px");
        clearTimeout(resizeId);
        resizeId = setTimeout(resize, 500);
    }
    window.onresize = onResize;
  
  
    //reveal floatys on click
    //$('.flap').click(function(){
    //  $('#navigation').fadeIn(400);
    //  $('.flap').removeClass('flap');
    //});
  
    // RESIZE FUNCTION
    function resize(){

        //########## LEFT ##########//     
        //set widths
        logoImgFrontL.style.width = logoWidth + 'px';
        logoImgBackL.style.width = logoWidth + 'px';

        if(left.classList.contains(closed)){
            left.style.width = leftWidth + 'px';
        }

        whatL.style.paddingLeft = leftWidth;
        receiveL.style.paddingLeft = leftWidth;
        submitL.style.paddingLeft = leftWidth;

        //########## BOTTOM ##########//
        //set heights
        logoImgFrontB.style.height = logoHeightB + 'px';
        logoImgBackB.style.height = logoHeightB + 'px';

        bottom.style.height = bottomHeight;
        backB.style.paddingBottom = bottomHeight;
        navB.style.paddingBottom = bottomHeight;
    }

  //open 1L
    function hClose(){
        logoImgFrontL.style.transform = 'rotateY(0deg)';
        left.style.width = leftWidth;
        left.classList.add('closed');
    }
          
    function ToggleLogoFrontL(){
        if(left.classList.contains('closed')){
            left.style.width = '50%';
            left.classList.remove('closed');
            logoImgFrontL.style.transform = 'rotateY(-180deg)';
            setTimeout(function(){
                FadeIn(navL, 150);
            }, 400);
        }
        else{
            FadeOut(navL, 150);
            setTimeout(hClose, 150);
        }
    }
  
    //open 2L
    //call when we click on one of the L menu items
    function ShowInfoBlockL(element){
        left.style.transform = 'rotateX(-180deg)';
        FadeOut(frontL, 400);
        FadeIn(element, 400);
        element.classList.add('open');
    }

    //close 2L
    //call when we click logo-back-l
    function LogoBackLClick(){
        left.style.transform = 'rotateX(0deg)';
        FadeIn(frontL, 400);
        if(whatL.classList.contains('open')){
            FadeOut(whatL, 400);
            whatL.classList.remove('open');
        }
        if(receiveL.classList.contains('open')){
            FadeOut(receiveL, 400);
            receiveL.classList.remove('open');
        }
        if(submitL.classList.contains('open')){
            FadeOut(submitL, 400);
            submitL.classList.remove('open');
        }
    }

//BOTTOM FLAP

  // open 1B
  function lClose(){
      FadeOut(navB, 400);
      logoImgFrontB.style.transform = 'rotateX(0deg)';
      bottom.style.height = bottomHeight;
      bottom.classList.remove('open');
  }

  $("#logo-front-b").click(function(){
      if($("#bottom").hasClass("open")){
          lClose();
      }else{
          $("#bottom").css("height", "50%").addClass("open");
          $("#logo-img-front-b").css("transform", "rotateX(-180deg)");
          $("#nav-b").fadeIn(400);
      }
  });

  function LogoFrontBClick(){
      if(bottom.classList.contains('open')){
          lClose();
      } else{
          bottom.style.height = '50%';
          bottom.classList.add('open');
          logoImgFrontB.style.transform = 'rotateX(-180deg)';
          FadeIn(navb, 400);
      }
  }

  //open 2B
  //call when we click on one of the B menu items
=  function ShowInfoBlockB(element){
        bottom.style.transform = 'rotateY(-180deg)';
        FadeOut(frontB, 400);
        FadeIn(element, 400);
        element.classList.add('open');
    }


  //close 2B
  function LogoBackBClick(){
        bottom.style.transform = 'rotateY(0deg)';
        FadeIn(frontB, 400);
        if(whatB.classList.contains('open')){
            FadeOut(whatB, 400);
            whatB.classList.remove('open');
        }
        if(receiveB.classList.contains('open')){
            FadeOut(receiveB, 400);
            receiveB.classList.remove('open');
        }
        if(submitB.classList.contains('open')){
            FadeOut(submitB, 400);
            submitB.classList.remove('open');
        }
    }


  //########## SIMPLE-MOBILE ##########//
  
    var whatButtonSimple = document.getElementById(what-button-simple);
    var simpleMobile = document.getElementById(simplemobile);
    var frontSimple = document.getElementById(front-simple);
    var whatSimple = document.getElementById(what-simple);
    var receiveSimple = document.getElementById(receive-simple);
    var submitSimple = document.getElementById(submit-simple);

    function ShowInfoBlockSimple(element){
        simpleMobile.style.transform = 'rotateY(-180deg)';
        FadeOut(frontSimple, 400);
        FadeIn(element, 400);
        element.classList.add('open');
    }

    //call on close-simple button
    function CloseSimpleClick(){
        simpleMObile.style.transform = 'rotateY(0deg)';
        FadeIn(frontSimple, 400);
        if(whatSimple.classList.contains('open')){
            FadeOut(whatSimple, 400);
            whatSimple.classList.remove('open');
        }
        if(receiveSimple.classList.contains('open')){
            FadeOut(receiveSimple, 400);
            receiveSimple.classList.remove('open');
        }
        if(submitSimple.classList.contains('open')){
            FadeOut(submitSimple, 400);
            submitSimple.classList.remove('open');
        }
    }

  //fade functions
    function FadeOut(element, fadeTime) {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, fadeTime);
    }

    function FadeIn(element, fadeTime) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, fadeTime);
}
</script>