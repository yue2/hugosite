// click event listener
$('body').on('click', function(e) {
  explode(e.pageX, e.pageY);
})

// explosion construction
function explode(x, y) {
  var particles = 15,
    // explosion container and its reference to be able to delete it on animation end
    explosion = $('<div class="explosion"></div>');

  // put the explosion container into the body to be able to get it's size
  $('body').append(explosion);

  // position the container to be centered on click
  explosion.css('left', x - explosion.width() / 2);
  explosion.css('top', y - explosion.height() / 2);

  for (var i = 0; i < particles; i++) {
    // positioning x,y of the particle on the circle (little randomized radius)
    var x = (explosion.width() / 2) + rand(80, 150) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
      y = (explosion.height() / 2) + rand(80, 150) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10));
        // particle element creation (could be anything other than div)
			var shapes = ['<img src="/images/chinese-new-year-lamp-svgrepo-com.svg" alt="cny lamp"/>', '<img src="/images/envelope-chinese-new-year-svgrepo-com.svg" alt="evelope"/>', '<img src="/images/fireworks-svgrepo-com.svg" alt="firework"/>']
			var getShape = Math.floor(Math.random() * shapes.length);
      var elm = $('<div class="particle" style="' +
        'top: ' + y + 'px; ' +
        'left: ' + x + 'px">' + shapes[getShape] + '</div>');

    if (i == 0) { // no need to add the listener on all generated elements
      // css3 animation end detection
      elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        explosion.remove(); // remove this explosion container when animation ended
      });
    }
    explosion.append(elm);
  }
}

// get random number between min and max value
function rand(min, max) {
  return Math.floor(Math.random() * (max + 1)) + min;
}
