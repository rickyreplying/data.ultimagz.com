


var myFullPage =  new fullpage('#fullpage', {
      autoScrolling: true,
      scrollHorizontally: true,
      menu: '#menu',
      css3:false,
      afterLoad: function(origin, destination, direction){
          //section 2
          if(destination.index == 1){
            document.querySelector('#section2').querySelector('h1').style.left = 0 + 'px';
            document.querySelector('#section2').querySelector('#line-chart-pageviews').style.top = 0 + 'px';
            document.querySelector('#section2').querySelector('#line-chart-pageviews').style.opacity = 1;
            document.querySelector('#section2').querySelector('h2').style.right = 0 + 'px';

          }

          //back to original state
          else if(origin && origin.index == 1){
            document.querySelector('#section2').querySelector('h1').style.left = 130 + '%';
            document.querySelector('#section2').querySelector('#line-chart-pageviews').style.opacity = 0;
            document.querySelector('#section2').querySelector('h2').style.right = 130 + '%';
          }
          // section 3
          if(destination.index == 2){
            document.querySelector('#section3').querySelector('h1').style.right = 0 + 'px';
            document.querySelector('#section3').querySelector('#line-chart-users').style.bottom = 0 + 'px';
            document.querySelector('#section3').querySelector('#line-chart-users').style.opacity = 1;
            document.querySelector('#section3').querySelector('h2').style.left = 0 + 'px';
          }
            //back to original state
          else if(origin && origin.index == 2){
            document.querySelector('#section3').querySelector('h1').style.right = 130 + '%';
            document.querySelector('#section3').querySelector('#line-chart-users').style.opacity = 0;
            document.querySelector('#section3').querySelector('h2').style.left = 130 + '%';
          }
          // section 4
          if(destination.index == 3){
            document.querySelector('#section4').querySelector('h1').style.left = 0 + 'px';
            document.querySelector('#section4').querySelector('#line-chart-bouncerate').style.top = 0 + 'px';
            document.querySelector('#section4').querySelector('#line-chart-bouncerate').style.opacity = 1;
            document.querySelector('#section4').querySelector('h2').style.left = 0 + 'px';
          }
            //back to original state
          else if(origin && origin.index == 3){
            document.querySelector('#section4').querySelector('h1').style.left = 130 + '%';
            document.querySelector('#section4').querySelector('#line-chart-bouncerate').style.opacity = 0;
            document.querySelector('#section4').querySelector('h2').style.left = 130 + '%';
          }

          // section 5
          if(destination.index == 4){
            document.querySelector('#section5').querySelector('img').style.left = 0 + 'px';
            document.querySelector('#section5').querySelector('h1').style.opacity = 1;
          }
            //back to original state
          else if(origin && origin.index == 4){
            document.querySelector('#section5').querySelector('img').style.left = 130 + '%';
            document.querySelector('#section5').querySelector('h1').style.opacity = 0;
          }
          // section 6
          if(destination.index == 5){
            document.querySelector('#section6').querySelector('span').style.left = 0 + 'px';
            document.querySelector('#section6').querySelector('#pie-traffic').style.opacity = 1;
              document.querySelector('#section6').querySelector('h2').style.left = 0 + 'px';
          }
            //back to original state
          else if(origin && origin.index == 5){
            document.querySelector('#section6').querySelector('span').style.left = 130 + '%';
            document.querySelector('#section6').querySelector('#pie-traffic').style.opacity = 0;
            document.querySelector('#section6').querySelector('h2').style.left = 130 + '%';
          }
          // section 7
          if(destination.index == 6){
            document.querySelector('#section7').querySelector('h1').style.opacity = 1;
            document.querySelector('#section7').querySelector('h1').style.top = 0 + 'px';
            document.querySelector('#section7').querySelector('#sub-content').style.left = 0 + 'px';
            document.querySelector('#section7').querySelector('h2').style.left = 0 + 'px';
          }
            //back to original state
          else if(origin && origin.index == 6){

            document.querySelector('#section7').querySelector('h1').style.opacity = 0;
            document.querySelector('#section7').querySelector('#sub-content').style.left = 130 + '%';
            document.querySelector('#section7').querySelector('h2').style.left = 130 + '%';
          }
          // section 8
          if(destination.index == 7){
            document.querySelector('#section8').querySelector('span').style.top = 0 + 'px';
            document.querySelector('#section8').querySelector('h2').style.opacity = 1;
            document.querySelector('#section8').querySelector('img').style.left = 0 + 'px';

          }
            //back to original state
          else if(origin && origin.index == 7){
            document.querySelector('#section8').querySelector('span').style.top = 130 + '%';;
            document.querySelector('#section8').querySelector('h2').style.opacity = 0;
            document.querySelector('#section8').querySelector('img').style.left = 130 + '%';

          }






      }
  });

  document.getElementById('demosMenu').addEventListener('change', function(e){
      var dropdown = document.getElementById('demosMenu');
      window.location.href = dropdown.options[dropdown.selectedIndex].getAttribute('id') + '.html';
  });

  fullpage_api.setAllowScrolling(true);

  $(document).ready(function () {
      $('#fullpage').fullpage({
          sectionsColor: ['#1bbc9b', '#4BBFC3'],
          loopBottom: true,
          afterRender: function () {
              setInterval(function () {
                  $.fn.fullpage.moveSlideRight();
              }, 1000);
          }
      });
  });
