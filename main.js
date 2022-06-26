  /// <reference path="./jq/typings/globals/jquery/index.d.ts" />
  $(document).ready(function() {


      // ................1-loading screen 
      //   slideUp('slow')  or slideUp(1000)
      //   error
      $('.loading').slideUp('slow', function() {
          $('.loading').switchClass('d-flex', 'd-none', function() {
              $('body').removeClass('overflow-hidden')
          })
      })


      //------------

  })