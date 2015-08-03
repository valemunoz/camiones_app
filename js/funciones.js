var PATH_QUERY="http://obvii.net/obvii/app_camion/query.php";
function openPopstatic(contenido,tiempo)
{
	$("#cont_static").html(contenido);
	$("#myPopup_static").popup("open");
	
	if(tiempo>0)
	{
		setTimeout(function() {

       $("#myPopup_static").popup("close");

    }, tiempo);
  }
}
function deviceListo()
{
	$.mobile.loading( 'hide');	
}
function valida()
{
		$.mobile.loading( 'show', {
				text: 'Validando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
			$("#pantalla_inicio").load(PATH_QUERY, 
			{tipo:1} 
				,function(){
					$('#pantalla_inicio').trigger('create');	
					loadMenu();
					
				}
			);
			
}
function loadMenu()
{
	$("#menu_footer").load(PATH_QUERY, 
					{tipo:2} 
						,function(){
							$('#menu_footer').trigger('create');	
							
							$.mobile.loading( 'hide');	
						}
					);
}
function loadResumen()
{
	$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
			$("#pantalla_inicio").load(PATH_QUERY, 
			{tipo:3} 
				,function(){
					$('#pantalla_inicio').trigger('create');	
					$.mobile.loading( 'hide');
				}
			);
	
}
function loadInicio()
{
	$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
			$("#pantalla_inicio").load(PATH_QUERY, 
			{tipo:1} 
				,function(){
					$('#pantalla_inicio').trigger('create');	
					$.mobile.loading( 'hide');
				}
			);
	
}

function loadAccion(tipo)
{
		var texto="Seleccione una opci&oacute;n</hr><br><br>";
		texto +="<input type='button' value='Iniciar' class=bottom_coment onclick='iniciarAccion("+tipo+");'><br>";
		texto +="<input type='button' value='Terminar' class=bottom_coment onclick='terminarAccion("+tipo+");'><br>";
		texto +="<input type='button' value='Historial' class=bottom_coment onclick='loadHistorial("+tipo+");'><br>";
		openPopstatic(texto,0);
}
function iniciarAccion(tipo)
{
	openPopstatic("Accion Iniciada",4000);
}
function terminarAccion(tipo)
{
	openPopstatic("Accion Terinada",4000);
}
function loadHistorial(tipo)
{
		$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#contenido_usuarios").load(PATH_QUERY, 
					{tipo:4} 
						,function(){
							$('#contenido_usuarios').trigger('create');
							$.mobile.loading( 'hide');	
							$.mobile.changePage('#mod_enrol', { role: 'dialog'});
							
							
						}
		);
}
function loadJornada()
{
	$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#pantalla_inicio").load(PATH_QUERY, 
					{tipo:5} 
						,function(){
							$('#pantalla_inicio').trigger('create');
							$.mobile.loading( 'hide');	
							
							
							
						}
		);
}
function loadaux()
{
	$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#pantalla_inicio").load(PATH_QUERY, 
					{tipo:6} 
						,function(){
							
							$('#pantalla_inicio').trigger('create');
							
								 $(function() {
    		$( "#desde" ).datetimepicker({timepicker:true,format:'Y-m-d H:i:00',lang:'es'});
  			});	

		 $(function() {
    		$( "#hasta" ).datetimepicker({timepicker:true,format:'Y-m-d H:i:00',lang:'es'});
  			});	
  			
							$.mobile.loading( 'hide');	
							
							
							
						}
		);
}
function loadReporte()
{
	$("#mypanel2").panel( "close" );
	var texto="Ingrese un mail y seleccione una opci&oacute;n</hr><br><br>";
	texto +="<input type='text' id='m_mail' name='m_mail' class=input_form><br>";
		texto +="<input type='button' value='Hoy' class=bottom_coment onclick=''><br>";
		texto +="<input type='button' value='Esta Semana' class=bottom_coment onclick=''><br>";
		texto +="<input type='button' value='Mes Pasado' class=bottom_coment onclick=''><br>";
		texto +="<input type='button' value='Ultimos 3 meses' class=bottom_coment onclick=''><br>";		
		openPopstatic(texto,0);
}
function editarJornada()
{
	$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#pantalla_inicio").load(PATH_QUERY, 
					{tipo:7} 
						,function(){
							$('#pantalla_inicio').trigger('create');
							 $(function() {
    							$( "#fjornada" ).datetimepicker({timepicker:true,format:'Y-m-d H:i:00',lang:'es'});
  						});	
							$.mobile.loading( 'hide');	
							
							
							
						}
		);
	
}

function editRegistro()
{
			$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#contenido_usuarios").load(PATH_QUERY, 
					{tipo:8} 
						,function(){
							$('#contenido_usuarios').trigger('create');
							$(function() {
    							$( "#desde" ).datetimepicker({timepicker:true,format:'Y-m-d H:i:00',lang:'es'});
    							$( "#hasta" ).datetimepicker({timepicker:true,format:'Y-m-d H:i:00',lang:'es'});
  						});	
							$.mobile.loading( 'hide');	
							$.mobile.changePage('#mod_enrol', { role: 'dialog'});
							
							
						}
		);
	
}
function loadayuda()
{
	$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#pantalla_inicio").load("ayuda.html", 
					{} 
						,function(){
							$('#pantalla_inicio').trigger('create');
							$.mobile.loading( 'hide');	
							
							
							
						}
		);
}
function loadMensajeria()
{
	$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#pantalla_inicio").load(PATH_QUERY, 
					{tipo:9} 
						,function(){
							$('#pantalla_inicio').trigger('create');
							
							$.mobile.loading( 'hide');	
							
							
							
						}
		);
	
}
function openMensaje()
{
		$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#contenido_usuarios").load(PATH_QUERY, 
					{tipo:10} 
						,function(){
							$('#contenido_usuarios').trigger('create');
							
							$.mobile.loading( 'hide');	
							$.mobile.changePage('#mod_enrol', { role: 'dialog'});
							
							
						}
		);
}

function nuevoMensaje(tipo)
{
		$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#contenido_usuarios").load(PATH_QUERY, 
					{tipo:11, opc:tipo} 
						,function(){
							$('#contenido_usuarios').trigger('create');
							
							$.mobile.loading( 'hide');	
							$.mobile.changePage('#mod_enrol', { role: 'dialog'});
							
							
						}
		);
}
function addTo(to)
{
	var dest=document.getElementById("destin").innerHTML ;
	$( "#destin" ).html(dest+", "+to); 
}
function addTo2(to)
{
	var dest=document.getElementById("destin2").innerHTML ;
	$( "#destin2" ).html(dest+", "+to); 
}
function addMensajePre(texto)
{
	document.getElementById("contenido_mensaje").innerHTML=texto; 
}
function sendMensaje()
{
	$("#mod_enrol").dialog( "close" );
	setTimeout('openPopstatic("Mensaje Enviado",3000);',1000);
}