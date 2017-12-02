

$(function(){
	function makeGrid(e) {
		e.preventDefault();
		var height = $('#input_height').val();
		var width = $('#input_width').val();
		var color = $('#colorPicker').val();
		var pxheight = height + 'px';
		var pxwidth = width + 'px';

			if(height <= 70 && width <= 70){
				$('#tileHead').text('Design Canvas');
				for(var i = 0; i < height; i++){
				$('table').append( $('<tr></tr>').attr('id', i).append(function(){
					var all;
					for(var j = 0; j < width; j++){
						all += '<td></td>';
					}
					return all;
				}));
			}
		}else{
			alert('Please maximum width and height should be 70');
		}

		$('table').css({
			height: pxheight * pxwidth,
			width: pxwidth * pxheight
		})

		$('td').click(function(e){
			e.preventDefault();
			$(this).css('background-color', color);
		})

		$('#setColor').on('click', function(e){
			e.preventDefault();
			color = $('#colorPicker').val();
		})
	}

	$('form').children().last().on('click', makeGrid)

	$('#reset').on('click', function(e){
		e.preventDefault()
		$('tr').remove();
		$('#tileHead').text('');
	})
})


