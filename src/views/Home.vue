<template>
  <div id="site-wrapper">
      
      <!--########## BOTTOM #########-->
      <div id="bottom" class="flap">
          <div id="front-b">
              <ul id="nav-b">
                  <li class="nav-item" id="what-button-b"><a class="h1" href=# @click='showInfoBlockB(this.$refs.whatB)'>What is Rumor</a></li>
                  <li class="nav-item" id="receive-button-b"><a class="h1" href=# @click='showInfoBlockB(this.$refs.receiveB)'>Receive a Rumor</a></li>
                  <li class="nav-item" id="submit-button-b"><a class="h1" href=# @click='showInfoBlockB(this.$refs.submitB)'>Submit a Rumor</a></li>
              </ul>
              
              <div id="logo-front-b" @click='logoFrontBClick'>
                  <img id="logo-img-front-b" src="img/ambigram-horizontal.svg">
              </div>
          </div>
          
          <div id="back-b">
              <div id="what-b" ref='whatB'>
                    <SanityBlocks :blocks="config.about"/>
              </div>
              
              <div id="receive-b" ref='receiveB'>
                  <!--
                  <form id="receive-form-b" method="post" action="https://formspree.io/rumor.pu@gmail.com">
                      <input class="h1" type="text" placeholder="NAME" name="name">
                      <input class="h1" type="email" name="email" placeholder="EMAIL">

                      <input type="submit" value="SIGN UP" class="h1 form-submit">
                  </form>
                  -->

                    <!-- Begin Mailchimp Signup Form -->
                        <div id="mc_embed_signup">
                        <form action="https://gmail.us20.list-manage.com/subscribe/post?u=4247af630a4934b76e5791b30&amp;id=970821ba7f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate receive-form-b" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                            <h1>Subscribe</h1>
                        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                        <div class="mc-field-group">
                            <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                        </label>
                            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                        </div>
                        <div class="mc-field-group">
                            <label for="mce-FNAME">First Name </label>
                            <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
                        </div>
                        <div class="mc-field-group">
                            <label for="mce-LNAME">Last Name </label>
                            <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
                        </div>
                        <div class="mc-field-group size1of2">
                            <label for="mce-BIRTHDAY-month">Birthday </label>
                            <div class="datefield">
                                <span class="subfield monthfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month"></span> / 
                                <span class="subfield dayfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day"></span> 
                                <span class="small-meta nowrap">( mm / dd )</span>
                            </div>
                        </div>	<div id="mce-responses" class="clear foot">
                                <div class="response" id="mce-error-response" style="display:none"></div>
                                <div class="response" id="mce-success-response" style="display:none"></div>
                            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4247af630a4934b76e5791b30_970821ba7f" tabindex="-1" value=""></div>
                                <div class="optionalParent">
                                    <div class="clear foot">
                                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                                        <!--
                                            <p class="brandingLogo"><a href="http://eepurl.com/hOiox1" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
                                        -->
                                    </div>
                                </div>
                            </div>
                        </form>
                        </div>
                        <!--End Mailchimp Signup Form-->

              </div>
              
              <div id="submit-b" ref='submitB'>
                  <SanityBlocks :blocks="config.submit"/>
                  <a class="h1" href="mailto:rumor.pu@gmail.com">SUBMIT</a>
              </div>
              
              <div id="logo-back-b" @click='logoBackBClick'>
                  <img id="logo-img-back-b" src="img/ambigram-horizontal.svg">
              </div>
          </div>
      </div>
      
      <!--########## LEFT #########-->
      <div id="left" class="closed flap">
              <div id="front-l">

                  <div id="logo-front-l" @click='logoFrontLClick'>
                      <img id="logo-img-front-l" src="img/ambigram-vertical.svg">
                  </div>

                  <ul id="nav-l">
                      <li class="nav-item" id="what-button-l"><a class="h1" href=# @click='showInfoBlockL(this.$refs.whatL)'>What is Rumor</a></li>
                      <li class="nav-item" id="receive-button-l"><a class="h1" href=# @click='showInfoBlockL(this.$refs.receiveL)'>Receive a Rumor</a></li>
                      <li class="nav-item" id="submit-button-l"><a class="h1" href=# @click='showInfoBlockL(this.$refs.submitL)'>Submit a Rumor</a></li>
                  </ul>
              </div>
              <div id="back-l">
                  <div id="logo-back-l" @click='logoBackLClick'>
                      <img id="logo-img-back-l" src="img/ambigram-vertical.svg">
                  </div>
                  
                  <div id="what-l" ref='whatL'>
                      <SanityBlocks :blocks="config.about"/>
                  </div>
                  
                  <div id="receive-l" ref='receiveL'>
                      <!--
                      <form id="receive-form-l" method="post" action="https://formspree.io/rumor.pu@gmail.com">
                          <input class="h1" type="text" placeholder="NAME" name="name">
                          <input class="h1" type="email" name="email" placeholder="EMAIL">

                          <input type="submit" value="SIGN UP" class="h1 form-submit">
                      </form>
                      -->

                        <!-- Begin Mailchimp Signup Form -->
                        <div id="mc_embed_signup">
                        <form action="https://gmail.us20.list-manage.com/subscribe/post?u=4247af630a4934b76e5791b30&amp;id=970821ba7f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate receive-form-l" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                        <div class="indicates-required xxs"><span class="asterisk xxs">*</span> indicates required</div>
                        <div class="mc-field-group">
                            <label class='xs' for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                        </label>
                            <input type="email" value="" name="EMAIL" class="required email p" id="mce-EMAIL">
                        </div>
                        <div class="mc-field-group">
                            <label class='xs' for="mce-FNAME">First Name </label>
                            <input type="text" value="" name="FNAME" class="p" id="mce-FNAME">
                        </div>
                        <div class="mc-field-group">
                            <label class='xs' for="mce-LNAME">Last Name </label>
                            <input type="text" value="" name="LNAME" class="p" id="mce-LNAME">
                        </div>
                        <div class="mc-field-group size1of2">
                            <label class='xs' for="mce-BIRTHDAY-month">Birthday </label>
                            <div class="datefield p">
                                <span class="subfield monthfield xs"><input class="birthday p" type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month"></span> / 
                                <span class="subfield dayfield xs"><input class="birthday p" type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day"></span> 
                                <span class="small-meta nowrap xs">( mm / dd )</span>
                            </div>
                        </div>	<div id="mce-responses" class="clear foot">
                                <div class="response" id="mce-error-response" style="display:none"></div>
                                <div class="response" id="mce-success-response" style="display:none"></div>
                            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4247af630a4934b76e5791b30_970821ba7f" tabindex="-1" value=""></div>
                                <div class="optionalParent">
                                    <div class="clear foot">
                                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button h1">
                                        <!--
                                            <p class="brandingLogo"><a href="http://eepurl.com/hOiox1" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
                                        -->
                                    </div>
                                </div>
                            </div>
                        </form>
                        </div>
                        <!--End Mailchimp Signup Form-->
                  </div>

                  <div id="submit-l" ref='submitL'>
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
                  <li class="nav-item" id="what-button-simple"><a class="h1" href=# @click='showInfoBlockSimple(this.$refs.whatSimple)'>What is Rumor</a></li>
                  <li class="nav-item" id="receive-button-simple"><a class="h1" href=# @click='showInfoBlockSimple(this.$refs.receiveSimple)'>Receive a Rumor</a></li>
                  <li class="nav-item" id="submit-button-simple"><a class="h1" href=# @click='showInfoBlockSimple(this.$refs.submitSimple)'>Submit a Rumor</a></li>
              </ul>
          </div>
          <div id="back-simple">
              <div id="what-simple" ref='whatSimple'>
                      <SanityBlocks :blocks="config.about"/>
                  </div>
                  
                  <div id="receive-simple" ref='receiveSimple'>

                      <!-- Begin Mailchimp Signup Form -->
                        <div id="mc_embed_signup" class="receive-form-simple">
                        <form action="https://gmail.us20.list-manage.com/subscribe/post?u=4247af630a4934b76e5791b30&amp;id=970821ba7f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate receive-form-b" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                            <!--<h1>Subscribe</h1>-->
                        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                        <div class="mc-field-group">
                            <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                        </label>
                            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                        </div>
                        <div class="mc-field-group">
                            <label for="mce-FNAME">First Name </label>
                            <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
                        </div>
                        <div class="mc-field-group">
                            <label for="mce-LNAME">Last Name </label>
                            <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
                        </div>
                        <div class="mc-field-group size1of2">
                            <label for="mce-BIRTHDAY-month">Birthday </label>
                            <div class="datefield">
                                <span class="subfield monthfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month"></span> / 
                                <span class="subfield dayfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day"></span> 
                                <span class="small-meta nowrap">( mm / dd )</span>
                            </div>
                        </div>	<div id="mce-responses" class="clear foot">
                                <div class="response" id="mce-error-response" style="display:none"></div>
                                <div class="response" id="mce-success-response" style="display:none"></div>
                            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4247af630a4934b76e5791b30_970821ba7f" tabindex="-1" value=""></div>
                                <div class="optionalParent">
                                    <div class="clear foot">
                                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                                        <!--
                                            <p class="brandingLogo"><a href="http://eepurl.com/hOiox1" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
                                        -->
                                    </div>
                                </div>
                            </div>
                        </form>
                        </div>
                        <!--End Mailchimp Signup Form-->
                  </div>

                  <div id="submit-simple" ref='submitSimple'>
                      <SanityBlocks :blocks="config.submit"/>
                      <a class="h1" href="mailto:rumor.pu@gmail.com">SUBMIT</a>
                  </div>
              
              <div id="close-simple">
                  <a class="h1" href=# @click='closeSimpleClick'>CLOSE</a>
              </div>
          </div>
      </div>
      
      
      <!--########## IFRAME #########-->
      <div id="iframe">
          <!-- floaty things -->
          <div id="navigation" ref='navigation'>
              <div class="floaty" v-for="link in links" :id="link.title" :key="link._id" >
                  <img class="floaty-main" :src="link.thumb" >
                  <img class="floaty-hover" :src="link.thumbHover" @click="swapIframe(link.url)">
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
    `*[_type == "iFrameLink"]{
        title,
        url,
        'thumb': thumb.asset->url,
        'thumbHover': thumbHover.asset->url
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
                
                var setUpWait
                clearTimeout(setUpWait);
                setUpWait = setTimeout(this.setUpiFrameLinks, 500);
                
                this.setUpSite();
            })
        },

        methods: {

            setUpiFrameLinks() {
                let iFrameLinks = this.$refs.navigation.children;

                var i;
                for(i = 0; i < iFrameLinks.length; i++){
                    iFrameLinks[i].style.display = 'block';
                    this.positionFloaty(iFrameLinks[i]);
                    this.dragElement(iFrameLinks[i]);
                }

            },

            fetchData() {
                this.error = this.post = null;
                this.loading = true;

                sanity.fetch(configQuery).then(
                (configRes) => {
                    this.config = configRes;
                },
                (error) => {
                    this.error = error;
                }
                );

                sanity.fetch(linksQuery).then(
                    (linksRes) => {
                    this.links = linksRes;
                    },
                    (error) => {
                    this.error = error;
                    }
                );

                this.loading = false;
            },

            positionFloaty(el){
                var randomL = this.randomNumber(10, window.innerWidth - 100);
                var randomT = this.randomNumber(10, window.innerHeight - 100);
                el.style.left = randomL + 'px';
                el.style.top = randomT + 'px';
            },

            randomNumber(min, max) { 
                return Math.random() * (max - min) + min;
            },

            setUpSite(){
                SetUpSite();
            },

            logoFrontLClick(){
                LogoFrontLClick();
            },

            showInfoBlockL(el){
                ShowInfoBlockL(el);
            },

            logoBackLClick(){
            LogoBackLClick();
            },

            logoFrontBClick(){
                LogoFrontBClick();
            },

            showInfoBlockB(el){
                ShowInfoBlockB(el);
            },

            logoBackBClick(){
                LogoBackBClick();
            },

            showInfoBlockSimple(el){
                ShowInfoBlockSimple(el);
            },

            closeSimpleClick(){
                CloseSimpleClick();
            },

            swapIframe(loc){
                document.getElementById('background').src = loc;
            },

            dragElement(elmnt) {
                var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                if (document.getElementById(elmnt.id + "header")) {
                    // if present, the header is where you move the DIV from:
                    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
                } else {
                    // otherwise, move the DIV from anywhere inside the DIV:
                    elmnt.onmousedown = dragMouseDown;
                }

                function dragMouseDown(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // get the mouse cursor position at startup:
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onmouseup = closeDragElement;
                    // call a function whenever the cursor moves:
                    document.onmousemove = elementDrag;
                }

                function elementDrag(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // calculate the new cursor position:
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    // set the element's new position:
                    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                }

                function closeDragElement() {
                    // stop moving when mouse button is released:
                    document.onmouseup = null;
                    document.onmousemove = null;
                }
            }
        }
    };
    
    var windowHeight;

    var logoPadding;
    var logoHeight;
    var logoWidth;
    
    var leftWidth;

    var windowWidth;

    var logoPaddingB;
    var logoWidthB;
    var logoHeightB;

    var bottomHeight;

    //selectors
    var logoImgFrontL;
    var logoImgBackL;
    var left;
    var whatL;
    var receiveL;
    var submitL;
    var navL;
    var frontL;

    var logoImgFrontB;
    var logoImgBackB;
    var bottom;

    var whatB;
    var receiveB;
    var submitB;

    var backB;
    var navB;
    var frontB;

    var simpleMobile;
    var frontSimple;
    var whatSimple;
    var receiveSimple;
    var submitSimple;

    var paddingL = 30;

    function SetUpSite()
    {
        windowHeight = window.innerHeight;

        logoPadding = paddingL * 2;
        logoHeight = windowHeight - logoPadding;
        logoWidth = logoHeight * 0.1875;
        
        leftWidth = logoWidth + logoPadding;

        windowWidth = window.innerWidth;

        logoPaddingB = paddingL * 2;
        logoWidthB = windowWidth - logoPaddingB;
        logoHeightB = logoWidthB * 0.2125;

        bottomHeight = logoHeightB + logoPaddingB;

        //selectors
        logoImgFrontL = document.getElementById('logo-img-front-l');
        logoImgBackL = document.getElementById('logo-img-back-l');
        left = document.getElementById('left');
        whatL = document.getElementById('what-l');
        receiveL = document.getElementById('receive-l');
        submitL = document.getElementById('submit-l');
        navL = document.getElementById('nav-l');
        frontL = document.getElementById('front-l');

        logoImgFrontB = document.getElementById('logo-img-front-b');
        logoImgBackB = document.getElementById('logo-img-back-b');
        bottom = document.getElementById('bottom');

        whatB = document.getElementById('what-b');
        receiveB = document.getElementById('receive-b');
        submitB = document.getElementById('submit-b');

        backB = document.getElementById('back-b');
        navB = document.getElementById('nav-b');
        frontB = document.getElementById('front-b');

        simpleMobile = document.getElementById('simplemobile');
        frontSimple = document.getElementById('front-simple');
        whatSimple = document.getElementById('what-simple');
        receiveSimple = document.getElementById('receive-simple');
        submitSimple = document.getElementById('submit-simple');

        //########## LEFT ##########//     
        //set widths
        logoImgFrontL.style.width = logoWidth + 'px';
        logoImgBackL.style.width = logoWidth + 'px';

        if(left.classList.contains('closed')){
            left.style.width = leftWidth + 'px';
        }

        whatL.style.paddingLeft = leftWidth + 'px';
        receiveL.style.paddingLeft = leftWidth + 'px';
        submitL.style.paddingLeft = leftWidth + 'px';

        //########## BOTTOM ##########//
        //set heights
        logoImgFrontB.style.height = logoHeightB + 'px';
        logoImgBackB.style.height = logoHeightB + 'px';

        bottom.style.height = bottomHeight + 'px';
        backB.style.paddingBottom = bottomHeight + 'px';
        navB.style.paddingBottom = bottomHeight + 'px';
    }

    //set mobile height to viewport    
    var resizeId;
    function onResize() {
        document.documentElement.style.setProperty('--window-height', window.innerHeight + "px");
        clearTimeout(resizeId);
        resizeId = setTimeout(resize, 500);
    }
    window.onresize = onResize;
  
    // RESIZE FUNCTION
    function resize(){

        windowHeight = window.innerHeight;

        logoPadding = paddingL * 2;
        logoHeight = windowHeight - logoPadding;
        logoWidth = logoHeight * 0.1875;
        
        leftWidth = logoWidth + logoPadding;

        windowWidth = window.innerWidth;

        logoPaddingB = paddingL * 2;
        logoWidthB = windowWidth - logoPaddingB;
        logoHeightB = logoWidthB * 0.2125;

        bottomHeight = logoHeightB + logoPaddingB;

        //########## LEFT ##########//     
        //set widths
        logoImgFrontL.style.width = logoWidth + 'px';
        logoImgBackL.style.width = logoWidth + 'px';

        if(left.classList.contains('closed')){
            left.style.width = leftWidth + 'px';
        }

        whatL.style.paddingLeft = leftWidth + 'px';
        receiveL.style.paddingLeft = leftWidth + 'px';
        submitL.style.paddingLeft = leftWidth + 'px';

        //########## BOTTOM ##########//
        //set heights
        logoImgFrontB.style.height = logoHeightB + 'px';
        logoImgBackB.style.height = logoHeightB + 'px';

        bottom.style.height = bottomHeight + 'px';
        backB.style.paddingBottom = bottomHeight + 'px';
        navB.style.paddingBottom = bottomHeight + 'px';


        //position floaties

        var floaties = document.querySelectorAll('.floaty');
        var i;
        for(i = 0; i < floaties.length; i++){
            PositionFloaty(floaties[i]);
        }
    }

  //open 1L
    function hClose(){
        logoImgFrontL.style.transform = 'rotateY(0deg)';
        left.style.width = leftWidth + 'px';
        left.classList.add('closed');
    }
          
    function LogoFrontLClick(){
        if(left.classList.contains('closed')){
            left.style.width = '50%';
            left.classList.remove('closed');
            logoImgFrontL.style.transform = 'rotateY(-180deg)';
            setTimeout(function(){
                FadeIn(navL, 150, false);
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
        FadeOut(frontL, 0);
        FadeIn(element, 400, false);
        element.classList.add('open');
    }

    //close 2L
    //call when we click logo-back-l
    function LogoBackLClick(){
        left.style.transform = 'rotateX(0deg)';
        FadeIn(frontL, 400, true);
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
      FadeOut(navB, 0);
      logoImgFrontB.style.transform = 'rotateX(0deg)';
      bottom.style.height = bottomHeight + 'px';
      bottom.classList.remove('open');
  }

  function LogoFrontBClick(){
      if(bottom.classList.contains('open')){
          lClose();
      } else{
          bottom.style.height = '75%';
          bottom.classList.add('open');
          logoImgFrontB.style.transform = 'rotateX(-180deg)';
          FadeIn(navB, 350, false);
      }
  }

  //open 2B
  //call when we click on one of the B menu items
    function ShowInfoBlockB(element){
        bottom.style.transform = 'rotateY(-180deg)';
        FadeOut(frontB, 0);
        FadeIn(element, 400, false);
        element.classList.add('open');
    }


  //close 2B
  //call when clicking on the B logo
  function LogoBackBClick(){
        bottom.style.transform = 'rotateY(0deg)';
        FadeIn(frontB, 400, true);
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

    function ShowInfoBlockSimple(element){
        simpleMobile.style.transform = 'rotateY(-180deg)';
        FadeOut(frontSimple, 0);
        FadeIn(element, 400, false);
        element.classList.add('open');
    }

    //call on close-simple button
    function CloseSimpleClick(){
        simpleMobile.style.transform = 'rotateY(0deg)';
        FadeIn(frontSimple, 400, false);
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
        var fadeWait;
        clearTimeout(fadeWait);
        fadeWait = setTimeout(function(){element.style.display = 'none'}, fadeTime);
    }

    function FadeIn(element, fadeTime, flex) {
        var fadeWait;
        clearTimeout(fadeWait);
        fadeWait = setTimeout(function(){
            if(flex){
                element.style.display = 'flex';
            }
            else{
                element.style.display = 'block';
            }
        }, fadeTime);
    }

    //iframe links functions

    function PositionFloaty(el){

        el.classList.add('transition');

        var randomL = RandomNumber(10, window.innerWidth - 100);
        var randomT = RandomNumber(10, window.innerHeight - 100);
        el.style.left = randomL + 'px';
        el.style.top = randomT + 'px';   

        el.addEventListener('transitionend', () => {
            el.classList.remove('transition');
        })
    }

    function RandomNumber(min, max) { 
        return Math.random() * (max - min) + min;
    }
</script>