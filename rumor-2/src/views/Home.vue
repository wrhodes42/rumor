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
                  <p>
                      {{ content.text.what-is-rumor }}
                  </p>
              </div>
              
              <div id="receive-b">
                  <form id="receive-form-b" method="post" action="https://formspree.io/rumor.pu@gmail.com">
                      <input class="h1" type="text" placeholder="NAME" name="name">
                      <input class="h1" type="email" name="email" placeholder="EMAIL">

                      <input type="submit" value="SIGN UP" class="h1 form-submit">
                  </form>
              </div>
              
              <div id="submit-b">
                  <p>
                  {{ content.text.submit-a-rumor }}
                  </p>
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
                      <p>
                          {{ content.text.what-is-rumor }}
                      </p>
                  </div>
                  
                  <div id="receive-l">
                      <form id="receive-form-l" method="post" action="https://formspree.io/rumor.pu@gmail.com">
                          <input class="h1" type="text" placeholder="NAME" name="name">
                          <input class="h1" type="email" name="email" placeholder="EMAIL">

                          <input type="submit" value="SIGN UP" class="h1 form-submit">
                      </form>
                  </div>

                  <div id="submit-l">
                      <p>
                      {{ content.text.submit-a-rumor }}
                      </p>
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
                      <p>
                          {{ content.text.what-is-rumor }}
                      </p>
                  </div>
                  
                  <div id="receive-simple">
                      <form id="receive-form-simple" method="post" action="https://formspree.io/rumor.pu@gmail.com">
                          <input class="h1" type="text" placeholder="NAME" name="name">
                          <input class="h1" type="email" name="email" placeholder="EMAIL">

                          <input type="submit" value="SIGN UP" class="h1 form-submit">
                      </form>
                  </div>

                  <div id="submit-simple">
                      <p>
                      {{ content.text.submit-a-rumor }}
                      </p>
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
              <div class="floaty ui-draggable" id="archive">
                  <img class="floaty-main" src="content/iframes/archive/image.png">
                  <img class="floaty-hover" src="content/iframes/archive/image-hover.gif">
              </div>

              <div class="floaty ui-draggable" id="suggestions">
                  <img class="floaty-main" src="content/iframes/suggestions/image.png">
                  <img class="floaty-hover" src="content/iframes/suggestions/image-hover.gif">
              </div>

              <div class="floaty ui-draggable" id="map">
                  <img class="floaty-main" src="content/iframes/map/image.png">
                  <img class="floaty-hover" src="content/iframes/map/image-hover.gif">
              </div>
              <div class="floaty ui-draggable" id="home">
                  <img class="floaty-main" src="content/iframes/home/image.png">
                  <img class="floaty-hover" src="content/iframes/home/image-hover.gif">
              </div>
              <div class="floaty ui-draggable" id="wikipedia">
                  <img class="floaty-main" src="content/iframes/wikipedia/image.png">
                  <img class="floaty-hover" src="content/iframes/wikipedia/image-hover.gif">
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
  `*[_type == "iframe"]{
      _id,
      title,
      url,
      thumb,
      thumbHover
    }[0...50]`;

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
          "js/vendor/modernizr-2.8.3.min.js"
        ];
        scripts.forEach(script => {
          let tag = document.createElement("script");
          tag.setAttribute("src", script);
          document.head.appendChild(tag);
        });

        var resizeWait;
          clearTimeout(resizeWait);
          resizeWait = setTimeout(this.setUpSite, 1000);
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
      setUpSite(){
        SetUpSite();
      }
    },
  };

  //JQUERY STUFF

  function SetUpSite(){

  }

</script>