tocbot.init({

  // Where to render the table of contents.
  tocSelector: '.js-toc',

  // Where to grab the headings to build the table of contents.
  contentSelector: '.js-toc-content',

  // Which headings to grab inside of the contentSelector element.
  headingSelector: 'h1, h2, h3',

  // Headings that match the ignoreSelector will be skipped.
  ignoreSelector: '.js-toc-ignore',

  // Main class to add to links.
  linkClass: 'toc-link',

  // Extra classes to add to links.
  extraLinkClasses: '',

  // Class to add to active links,
  // the link corresponding to the top most heading on the page.
  activeLinkClass: 'is-active-link',

  // Main class to add to lists.
  listClass: 'toc-list',

  // Extra classes to add to lists.
  extraListClasses: '',

  // Class that gets added when a list should be collapsed.
  isCollapsedClass: 'is-collapsed',

  // Class that gets added when a list should be able
  // to be collapsed but isn't necessarily collpased.
  collapsibleClass: 'is-collapsible',

  // Class to add to list items.
  listItemClass: 'toc-list-item',

  // How many heading levels should not be collpased.
  // For example, number 6 will show everything since
  // there are only 6 heading levels and number 0 will collpase them all.
  // The sections that are hidden will open
  // and close as you scroll to headings within them.
  collapseDepth: 0,

  // Smooth scrolling enabled.
  scrollSmooth: true,

  // Smooth scroll duration.
  scrollSmoothDuration: 420,

  // Callback for scroll end.
  scrollEndCallback: function (e) { },

  // Headings offset between the headings and the top of the document (this is meant for minor adjustments).
  headingsOffset: 1,

  // Timeout between events firing to make sure it's
  // not too rapid (for performance reasons).
  throttleTimeout: 50,

  // Element to add the positionFixedClass to.
  positionFixedSelector: null,

  // Fixed position class to add to make sidebar fixed after scrolling
  // down past the fixedSidebarOffset.
  positionFixedClass: 'is-position-fixed',

  // fixedSidebarOffset can be any number but by default is set
  // to auto which sets the fixedSidebarOffset to the sidebar
  // element's offsetTop from the top of the document on init.
  fixedSidebarOffset: 'auto',

  // includeHtml can be set to true to include the HTML markup from the
  // heading node instead of just including the textContent.
  includeHtml: false,

  // onclick function to apply to all links in toc. will be called with
  // the event as the first parameter, and this can be used to stop,
  // propagation, prevent default or perform action
  onClick: false
  
});

//Code to display on mobiles
//========================================

var resize = function() {
    $('body').removeClass('landscape').removeClass('portrait').addClass(orientation).css('width', $(window).width() + 'px');
}

var orientation = null;

var onOrientationChange = function () {
    switch(window.orientation) {  
        case -90:
        case 90:
            orientation = 'landscape';
        break; 
        default:
            orientation = 'portrait';
        break;
    }

    if(screen.width < 768) {
        if(orientation == 'landscape') {
            var scale = Math.round(screen.height / 600 * 10) / 10;
            $('#meta-viewport').attr('content', 'width=600px, initial-scale='+scale+', maximum-scale='+scale+', minimum-scale='+scale+', user-scalable=no'); // landscape mobile
        } else {
            var scale = Math.round(screen.width / 400 * 10) / 10;
            $('#meta-viewport').attr('content', 'width=400px, initial-scale='+scale+', maximum-scale='+scale+', minimum-scale='+scale+', user-scalable=no'); // portrait mobile
        }
    } else if(screen.width >= 768 && screen.width < 1200) {
        var scale = Math.round(screen.width / 960 * 10) / 10;
        $('#meta-viewport').attr('content', 'width=960px, initial-scale='+scale+', maximum-scale='+scale+', minimum-scale='+scale+', user-scalable=no');
    } else if(screen.width >= 1200) {
        $('#meta-viewport').attr('content', 'width=device-width, user-scalable=yes');
    }

    resize();
}

$(document).ready(function() {
    $(window).resize(resize);
    $(window).bind('orientationchange', onOrientationChange);
    onOrientationChange();
});