
function statusFormatter (val, row, index) {
	if (val) {
		return '<input type="checkbox" class="js-switch" val="'+row.id+'" checked="'+val+'"  />';
	}else{
		return '<input type="checkbox" class="js-switch" val="'+row.id+'"  />';
	}
}
function emailFormatter (val, row, index) {
	return "<a href='mailto:"+val+"' >"+val+"</a>"
}
function phoneFormatter (val, row, index) {
	return "<a href='tel:"+val+"' >"+val+"</a>"
}
function dataFormatter (val, row, index) {
	
	moment.locale('fr');
	return moment(val).fromNow() 
}
    jQuery(document).ready(function($) {
        var $table = $('#data-table'), $remove = $('#delete-row');

        $table.on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', function () {
            $remove.prop('disabled', !$table.bootstrapTable('getSelections').length);
           	
        });

        $remove.click(function () {
            var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
                return row.id
            });
            var ads = "";
            for (var i = ids.length - 1; i >= 0; i--) {
            	ads = ads + ids[i]+"|";
            };
			$.ajax({
				url: $table.attr('model')+'/destroy.json',
				type: 'POST',
				data: {aids: ads}
			})
			.done(function(data) {
				if (data) {
				  $table.bootstrapTable('remove', {
                		field: 'id',
                		values: ids
            		});
            		$remove.prop('disabled', true);
					console.log('delted');
				}else{
					console.log("Error");
				}
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
        });
          $table.on('load-success.bs.table',function(){
          	 var req = {};
        	 var elem = document.querySelector('.js-switch');
			 var init = new Switchery(elem,{ size: 'small' });
			 $(".js-switch").change(function(event) {
			 	req.id = parseInt($(this).attr("val"));
			 	elem.checked ? req.isactive = 1:req.isactive = 0;
			 	$.post($table.attr('model')+'/switchval.json',req, function(data, textStatus, xhr) {
			 		
			 	});
			 });
        });
       
    });