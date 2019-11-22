$(function(){
  function buildHTML(message){
    var addImage = (message.image !== null) ? `<img class="ChatMain__messages__message__text__image" src=${message.image}>` :"";
    var html =
    `<div class="ChatMain__messages__message" data-message-id=${message.id}>
      <div class="ChatMain__messages__message__upper-info">
        <p class="ChatMain__messages__message__upper-info__talker">
          ${message.user_name}
        </p>
        <p class="ChatMain__messages__message__upper-info__date">
          ${message.created_at}
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

  // ここからインクリメンタルサーチの実装
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
    });
    
    // ここから自動更新機能
    
    var reloadMessages = function() {
      if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id =$('.ChatMain__messages__message').last().data('message-id');
      $.ajax({
        url: "api/messages",
        type: 'GET',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        var insertHTML ='';
        messages.forEach(function (message){
          var insertHTML=buildHTML(message);
          $('.ChatMain__messages').append(insertHTML);
        })
        $('.ChatMain__messages').animate({scrollTop: $('.ChatMain__messages')[0].scrollHeight}, 'fast');
      })
      .fail(function() {
        alert('error');
      });
    }
  }
  setInterval(reloadMessages, 7000); 
});