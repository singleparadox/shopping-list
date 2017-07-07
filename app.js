
$('.shopping-item-delete').on('click', function(event) {
	event.preventDefault();
	var getIndex = parseInt($(this).closest('li').attr(itemDataAttr);
	var getText = $('.shopping-item[]').text(); window.alert(getText+getIndex);
	//$('li').closest().find(this).remove();
});

$("#js-shopping-list-form button").on("click", function (event) {
		event.preventDefault();
		var getText = '';
		var getText = $('#shopping-list-entry').val();
		var template = `
			<li>
		        <span class="shopping-item">` + getText + `</span>
		        <div class="shopping-item-controls">
		          <button class="shopping-item-toggle">
		            <span class="button-label">check</span>
		          </button>
		          <button class="shopping-item-delete">
		            <span class="button-label">delete</span>
		          </button>
		        </div>
		      </li>
		`;
		$(".shopping-list").append(template);
});




//<li><a href="/user/messages"><span class="tab">Message Center</span></a></li>