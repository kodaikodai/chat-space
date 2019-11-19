$(function(){
  function buildHTML(message){
    var addImage = (message.image !== null) ? `<img class="ChatMain__messages__message__text__image" src=${message.image}>` : '' 
    var html =
    `<div class="ChatMain__messages__message" data-message-id=${message.id}>
      <div class="ChatMain__messages__message__upper-info">
        <p class="ChatMain__messages__message__upper-info__talker">
          ${message.user_name}
        </p>
        <p class="ChatMain__messages__message__upper-info__date">
          ${message.date}
        </p>
      </div>
      <div class="ChatMain__messages__message__text">
        <p class="ChatMain__messages__message__text__content">
          ${message.content}
        </p>
          ${addImage}
      </div>
    </div>`

    return html
  }

 

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.ChatMain__messages').append(html);  
      $('.ChatMain__messages').animate({scrollTop: $('.ChatMain__messages')[0].scrollHeight}, 'fast');       
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
    });
    return false;
  })
})