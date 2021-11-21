<template>
  <!--[if lt IE 8]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->

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
  import $ from 'jquery';

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
    mounted() {
      this.$nextTick(() => {

        var scripts = [
            "../js/vendor/jquery-ui-1.12.1.custom/jquery-ui-1.12.1.custom/jquery-ui.min.js",
            "../js/vendor/turn.min.js"
        ];

        scripts.forEach(script => {
            let tag = document.createElement("script");
            tag.setAttribute("src", script);
            document.head.appendChild(tag);
        });

        var setUpWait;
          clearTimeout(setUpWait);
          setUpWait = setTimeout(this.setUpSite, 1000);
      })
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
      },

      setUpSite(){
        SetUpSite();
      }
    },
  };

  //JQUERY STUFF

    var windowHeight = $(window).height();

    var logoPadding = $("#logo-front-l").css("padding-top").replace("px", "") * 2;
    var logoHeight = windowHeight - logoPadding;
    var logoWidth = logoHeight * 0.1875;
    
    var leftWidth = logoWidth + logoPadding;

    var windowWidth = $(window).width();

    var logoPaddingB = $("#logo-front-b").css("padding-top").replace("px", "") * 2;
    var logoWidthB = windowWidth - logoPaddingB;
    var logoHeightB = logoWidthB * 0.2125;

    var bottomHeight = logoHeightB + logoPaddingB;

  function SetUpSite()
  {
    //########## LEFT ##########//     
    //set widths
    $("#logo-img-front-l").css("width", logoWidth + "px");
    $("#logo-img-back-l").css("width", logoWidth + "px");

    $("#left.closed").css("width", leftWidth);
    $("#what-l").css("padding-left", leftWidth);
    $("#receive-l").css("padding-left", leftWidth);
    $("#submit-l").css("padding-left", leftWidth);

    //########## BOTTOM ##########//
    //set heights

    $("#logo-img-front-b").css("height", logoHeightB + "px");
    $("#logo-img-back-b").css("height", logoHeightB + "px");

    $("#bottom").css("height", bottomHeight);
    $("#back-b").css("padding-bottom", bottomHeight);
    $("#nav-b").css("padding-bottom", bottomHeight);
    //END 
    
    // draggable floaty things
    $(".floaty").draggable({ 
        containment: "window"
    });

    //little fix for the iframe size on mobile
    //mobile hack
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // Add body class to target styles for touch devices with CSS
        $('body').addClass('touch-device');
    }      
  }

  ///////////////////////////////end setup site

  //set mobile height to viewport                
  function onResize() {
    document.documentElement.style.setProperty('--window-height', window.innerHeight + "px");
  }
  window.onresize = onResize;
  
  
  //reveal floatys on click
  $('.flap').click(function(){
    $('#navigation').fadeIn(400);
    $('.flap').removeClass('flap');
  });
  
  //smart resize
  var resizeId;
  $(window).resize(function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(resize, 500);
  });
  

  
  // RESIZE FUNCTION
  function resize(){

    //LEFT

    var logoPadding = $("#logo-front-l").css("padding-top").replace("px", "") * 2;

    var leftWidth = logoWidth + logoPadding;

    $("#logo-img-front-l").css("width", logoWidth + "px");
    $("#logo-img-back-l").css("width", logoWidth + "px");

    $("#left.closed").css("width", leftWidth);
    $("#what-l").css("padding-left", leftWidth);
    $("#receive-l").css("padding-left", leftWidth);
    $("#submit-l").css("padding-left", leftWidth);
    
    //BOTTOM
    var windowWidth = $(window).innerWidth();

    var logoPaddingB = $("#logo-front-b").css("padding-top").replace("px", "") * 2;
    var logoWidthB = windowWidth - logoPaddingB;
    var logoHeightB = logoWidthB * 0.2125;

    var bottomHeight = logoHeightB + logoPaddingB;

    $("#logo-img-front-b").css("height", logoHeightB + "px");
    $("#logo-img-back-b").css("height", logoHeightB + "px");

    $("#bottom").css("height", bottomHeight);
    $("#back-b").css("padding-bottom", bottomHeight);
    $("#nav-b").css("padding-bottom", bottomHeight);
  }

  //open 1
  function hClose(){
      $("#logo-img-front-l").css("transform", "rotateY(0deg)");
      $("#left").css("width", leftWidth).addClass("closed");
  }
          
  $("#logo-front-l").click(function(){
      if($("#left").hasClass("closed")){
          $("#left").css("width", "50%").removeClass("closed");
          $("#logo-img-front-l").css("transform", "rotateY(-180deg)");
          $("#nav-l").delay(400).fadeIn(150);
      } else{
          $("#nav-l").fadeOut(150);
          setTimeout(hClose, 150);
      }
  });
  
  //open 2
  $("#what-button-l").click(function(){
      $("#left").css("transform", "rotateX(-180deg)");
      $("#front-l").fadeOut(400);
      $("#what-l").fadeIn(400);
  });

  $("#receive-button-l").click(function(){
      $("#left").css("transform", "rotateX(-180deg)");
      $("#front-l").fadeOut(400);
      $("#receive-l").fadeIn(400);
  });

  $("#submit-button-l").click(function(){
      $("#left").css("transform", "rotateX(-180deg)");
      $("#front-l").fadeOut(400);
      $("#submit-l").fadeIn(400);
  });

  //close 2
  $("#logo-back-l").click(function(){
      $("#left").css("transform", "rotateX(0deg)");
      $("#front-l").fadeIn(400);
      $("#what-l").fadeOut(400);
      $("#receive-l").fadeOut(400);
      $("#submit-l").fadeOut(400);
  });

  // open 1
  function lClose(){
      $("#nav-b").fadeOut(400);
      $("#logo-img-front-b").css("transform", "rotateX(0deg)");
      $("#bottom").css("height", bottomHeight).removeClass("open");
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

  //open 2
  $("#what-button-b").click(function(){
      $("#bottom").css("transform", "rotateY(-180deg)");
      $("#front-b").fadeOut(400);
      $("#what-b").fadeIn(400);
  });

  $("#receive-button-b").click(function(){
      $("#bottom").css("transform", "rotateY(-180deg)");
      $("#front-b").fadeOut(400);
      $("#receive-b").fadeIn(400);
  });

  $("#submit-button-b").click(function(){
      $("#bottom").css("transform", "rotateY(-180deg)");
      $("#front-b").fadeOut(400);
      $("#submit-b").fadeIn(400);
  });


  //close 2
  $("#logo-back-b").click(function(){
      $("#bottom").css("transform", "rotateY(0deg)");
      $("#front-b").fadeIn(400);
      $("#what-b").fadeOut(400);
      $("#receive-b").fadeOut(400);
      $("#submit-b").fadeOut(400);
  });


  //########## SIMPLE-MOBILE ##########//
  
  $("#what-button-simple").click(function(){
      $("#simplemobile").css("transform", "rotateY(-180deg)");
      $("#front-simple").fadeOut(400);
      $("#what-simple").fadeIn(400);
  });

  $("#receive-button-simple").click(function(){
      $("#simplemobile").css("transform", "rotateY(-180deg)");
      $("#front-simple").fadeOut(400);
      $("#receive-simple").fadeIn(400);
  });

  $("#submit-button-simple").click(function(){
      $("#simplemobile").css("transform", "rotateY(-180deg)");
      $("#front-simple").fadeOut(400);
      $("#submit-simple").fadeIn(400);
  });

  //close simple
  $("#close-simple").click(function(){
      $("#simplemobile").css("transform", "rotateY(0deg)");
      $("#front-simple").fadeIn(400);
      $("#what-simple").fadeOut(400);
      $("#receive-simple").fadeOut(400);
      $("#submit-simple").fadeOut(400);
  });
  
</script>