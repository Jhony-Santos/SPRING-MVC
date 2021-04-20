$('#confirmacaoExclusaoModal').on('show.bs.modal', function(event){
	
	var button=$(event.relatedTarget);
	
	var codigoTitulo=button.data('codigo');
	var descricaoTitulo=button.data('descricao');
	
	var modal=$(this);
	$form=$(this).find('form');
	$form.attr("action","/titulos");
		
	$action=$form.data('action');
	if(!$action.endsWith('/')){
	$action+="/";
	
	}	
	
	$form.attr("action", $action + codigoTitulo);
	
	modal.find('.modal-body span').html('Tem certeza que deseja excluir o título <strong>' + descricaoTitulo + '<strong>?');
	
	
});

$(function(){
	$('[rel="tooltip"]').tooltip();

});
