"use strict";

// Part 1

$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (response) => {

    $(`#fortune-text`).html(response);

  });
});


// Part 2

$('#weather-form').on('submit', (evt) => {
  evt.preventDefault();

  const formData = {

    zipcode: $('#zipcode-field').val()
  };

  // TODO: choose a request method (GET or POST) by uncommenting one of
  // these blocks of code

  $.get('/weather', formData, (response) => {
    $(`#weather-info`).html(`The forecast is: ${response.forecast} The temperature will be: ${response.temp}`);
  });

  // $.post('/weather', formData, (response) => {

  // });
});


// Part 3

$("#order-form").on('submit', (evt) => {
  evt.preventDefault();

  const formInputs = {
    melon_type: $('#melon-type-field').val(),
    qty: $('#qty-field').val()
  };


  $.post('/order-melons', formInputs, (response) => {
    $(`#order-status`).html(`${response.code}: ${response.msg}`)
    if (response.code === 'ERROR') {
      $(`#order-status`).addClass('order-error');
    }
  });

  // TODO: make a request to /order-melons
  //
  // In the callback function, use the response from the server to
  // update #order-status. IMPORTANT: if the result code is 'ERROR',
  // make it show up in red.
});
