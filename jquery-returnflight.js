// jQuery: The Return Flight
// 1.3 Ajax
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $.ajax('/photos.html');
  });
});

// 1.4 Ajax with Response
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $.ajax('/photos.html', {
      success: function(result){
      	$('.photos').html(result).fadeIn();
      }
    });
  });
});

// 1.5 $.get Shorthand
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $.get('/photos.html', function(response) {
      $('.photos').html(response).fadeIn();
    });
  });
});

// 1.6 Ajax Data
$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $.ajax('/photos.html', {
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
      data: {'location': $('#tour').data('location')}
    });
  });
});

// 1.8 Ajax with Errors
$(document).ready(function() {
  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
      error: function () {
        $('.photos').html('<li>something went wrong, try again</li>')
      }
    });
  });
});

// 1.9 Setting a Timeout
$(document).ready(function() {
  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
      error: function() {
        $('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      },
      timeout: 3000
    });
  });
});

// 1.10 More Ajax Callbacks
$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $.ajax('/photos.html', {
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
      error: function() {
        $('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      },
      timeout: 3000,
      beforeSend: function() {
        $('#tour').addClass('is-fetching');
      },
      complete: function() {
        $('#tour').removeClass('is-fetching');
      }
    });
  });
});

// 1.11 Event Delegation
$(document).ready(function() {
  function showPhotos() {
    $(this).find('span').slideToggle();
  }
  $('.photos').on('mouseenter', 'li', showPhotos)
              .on('mouseleave', 'li', showPhotos);

  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
      error: function() {
        $('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      },
      timeout: 3000,
      beforeSend: function() {
        $('#tour').addClass('is-fetching');
      },
      complete: function() {
        $('#tour').removeClass('is-fetching');
      }
    });
  });
});

// 2.3 Refactor To Objects
var tour = {
  init: function() {
  	$("#tour").on("click", "button", function() {
      $.ajax('/photos.html', {
        data: {location: $("#tour").data('location')},
        success: function(response) {
          $('.photos').html(response).fadeIn();
        },
        error: function() {
          $('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
        },
        timeout: 3000,
        beforeSend: function() {
          $('#tour').addClass('is-fetching');
        },
        complete: function() {
          $('#tour').removeClass('is-fetching');
        }
      });
    });
  }
};
$(document).ready(function() {
  tour.init();
});

// 2.4 Event Handler Refactor
var tour = {
  init: function() {
    $("#tour").on("click", "button", this.fetchPhotos);
  },
  fetchPhotos: function() {
    $.ajax('/photos.html', {
      data: {location: $("#tour").data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
      error: function() {
        $('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      },
      timeout: 3000,
      beforeSend: function() {
        $('#tour').addClass('is-fetching');
      },
      complete: function() {
        $('#tour').removeClass('is-fetching');
      }
    });
  }
}
$(document).ready(function() {
  tour.init();
});

// 2.6 Creating a Function
function Tour(message) {
	console.log(message);
}

$(document).ready(function() {
  var tour = new Tour('message');
});

// 2.7 Functionality in Functions
function Tour(price) {
  this.cost = function(nights) {
  	console.log(price * nights);
  };
  console.log("A new Tour was created");
}

$(document).ready(function() {
  var tour = new Tour(100);
  tour.cost(4);
});

// 2.8 Function Refactor
function Tour(el) {
	console.log(el);
}

$(document).ready(function() {
	var paris = new Tour($('#paris'));
});

// 2.9 Function Setup
function Tour(el) {
  this.el = el;
  this.fetchPhotos = function() {};
  this.el.on('click', 'button', this.fetchPhotos);
}

$(document).ready(function() {
  var paris = new Tour($('#paris'));
});

// 2.10 fetchPhotos Refactor
function Tour(el) {
  var tour = this;
  this.el = el;
  this.fetchPhotos = function() {
    $.ajax('/photos.html', {
      data: {location: tour.el.data('location')},
      context: tour,
      success: function(response) {
        this.el.find('.photos').html(response).fadeIn();
      },
      error: function() {
        this.el.find('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      },
      timeout: 3000,
      beforeSend: function() {
        this.el.addClass('is-fetching');
      },
      complete: function() {
        this.el.removeClass('is-fetching');
      }
    });
  }
  this.el.on('click', 'button', this.fetchPhotos);
}

$(document).ready(function() {
  var paris = new Tour($('#paris'));
});

// 2.11 Instances of a Function
function Tour(el) {
  var tour = this;
  this.el = el;
  this.fetchPhotos = function() {
    $.ajax('/photos.html', {
      data: {location: tour.el.data('location')},
      context: tour,
      success: function(response) {
        this.el.find('.photos').html(response).fadeIn();
      },
      error: function() {
        this.el.find('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      },
      timeout: 3000,
      beforeSend: function() {
        this.el.addClass('is-fetching');
      },
      complete: function() {
        this.el.removeClass('is-fetching');
      }
    });
  }
  this.el.on('click', 'button', this.fetchPhotos);
}

$(document).ready(function() {
  var paris = new Tour($('#paris'));
  var london = new Tour($('#london'));
});

// 3.3 Form Submit Event
$(document).ready(function() {
  $('form').on('submit', function(event){
  	event.preventDefault();
  });
});

// 3.4 $.ajax with POST
$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('/book', {
      type: 'POST',
      data: $('form').serialize()
    });
  });
});

// 3.5 Success Callback
$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('/book', {
      type: 'POST',
      data: $('form').serialize(),
      success: function(result) {
      	$('.tour').html(result);
      }
    });
  });
});

// 3.7 The JSON Switch
$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('/book', {
      type: 'POST',
      dataType: 'json',
      data: $('form').serialize(),
      success: function(res) {
        var message = $('<p></p>');
        message.append('Destination: ' + res.description + ', ');
        message.append('price: ' + res.price + '$, ');
        message.append('number of nights: ' + res.nights + ', ');
        message.append('Your confirmation number: ' + res.confirmation + '.');
        $('.tour').html(message);
      }
    });
  });
});

// 3.8 Don't Repeat Yourself
$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax($('form').attr('action'), {
      type: $('form').attr('method'),
      data: $('form').serialize(),
      dataType: 'json',
      success: function(response) {
        $('.tour').html('<p></p>')
                  .find('p')
                  .append('Trip to ' + response.description)
                  .append(' at $' + response.price)
                  .append(' for ' + response.nights + ' nights')
                  .append('. Confirmation: ' + response.confirmation);
      }
    });
  });
});


// 4.3 Using $.each() I
$('button').on('click', function() {
  $.ajax('/cities/deals', {
    success: function(result) {
      $.each(result, function(index, value) {
      	console.log(value);
      });
    }
  });
});

// 4.4 Using $.each() II
$('button').on('click', function() {
  $.ajax('/cities/deals', {
    success: function(result) {
      $.each(result, function(index, dealItem) {
        var deal = $('.deal-' + index);
        deal.find('.name').text(dealItem.name);
        deal.find('.price').text(dealItem.price);
      });
    }
  });
});

// 4.5 Using $.each() II
$('button').on('click', function() {
  $.getJSON('/cities/deals', function(result) {
    $.each(result, function(index, dealItem) {
      var dealElement = $('.deal-' + index);
      dealElement.find('.name').html(dealItem.name);
      dealElement.find('.price').html(dealItem.price);
    });
  });
});

// 4.6 Using $.map() I
$('.update-available-flights').on('click', function() {
  $.getJSON('/flights/late', function(result) {
    $.map(result, function(value, index) {
    	console.log(value);
    });
  });
});

// 4.7 Using $.map() II
$('.update-available-flights').on('click', function() {
  $.getJSON('/flights/late', function(result) {
    var flightElements = $.map(result, function(flightItem, index){
      var listElem = $('<li></li>');
      listElem.append('<h3>' + flightItem.flightNumber + '</h3>');
      listElem.append('<p>' + flightItem.time + '</p>');
      return listElem;
    });
    $('.flight-times').html(flightElements);
  });
});

// 4.8 detach()
$('.update-available-flights').on('click', function() {
  $.getJSON('/flights/late', function(result) {
    var flightElements = $.map(result, function(flightItem, index){
      var flightEl = $('<li>' + flightItem.flightNumber + '-' + flightItem.time+'</li>');
      return flightEl;
    });
    $('.flight-times').detach().html(flightElements).appendTo('.flights');
  });
});

// 5.3 Removing Event Handlers
$(document).ready(function(){
  // Get Weather
  $('button').on('click', function() {
    var results = $(this).closest('li').find('.results');
    var deg = $(this).closest('li').data('temp');
    results.append('<p>Weather: ' + deg + '</p>');
    $(this).off('click');
  });
});

// 5.4 Namespacing Event Handlers
$(document).ready(function(){
  // Get Weather
  $('button').on('click.weather', function() {
    var results = $(this).closest('li').find('.results');
    var deg = $(this).closest('li').data('temp');
    results.append('<p>Weather: ' + deg + '</p>');
    $(this).off('click.weather');
  });

  // Show Photos
  $('button').on('click.photos', function() {
    var tour = $(this).closest('li');
    var results = tour.find('.results');
    results.append('<p><img src="/assets/photos/' + tour.data('loc') + '.jpg" /></p>');
    $(this).off('click.photos');
  });
});

// 5.5 Trigger
$(document).ready(function(){
  $('button').trigger('click');

  // Get Weather
  $('button').on('click.weather', function() {
    var results = $(this).closest('li').find('.results');
    results.append('<p>Weather: 74&deg;</p>');
    $(this).off('click.weather');
  });

   // Show Photos
  $('button').on('click.photos', function() {
    var tour = $(this).closest('li');
    var results = tour.find('.results');
    results.append('<p><img src="/assets/photos/' + tour.data('loc') + '.jpg" /></p>');
    $(this).off('click.photos');
  });
});

// 5.6 Custom Events
$(document).ready(function(){
  // Get Weather
  $('button').on('show.weather', function() {
    var results = $(this).closest('li').find('.results');
    results.append('<p>Weather: 74&deg;</p>');
    $(this).off('click.weather');
  });

  // Show Photos
  $('button').on('click.photos', function() {
    var tour = $(this).closest('li');
    var results = tour.find('.results');
    results.append('<p><img src="/assets/photos/' + tour.data('loc') + '.jpg" /></p>');
    $(this).off('click.photos');
    $(this).trigger('show.weather');
  });
});

//
