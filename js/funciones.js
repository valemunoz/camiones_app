var PATH_QUERY="http://obvii.net/obvii/app_camion/query.php";
var AC_ONLINE=false;
var AC_MAIL_TO=Array();
var AC_MAIL_TO_GROUP=Array();
function mensaje(CM_mensaje,titulo,div)
{
	
	var html_msg="";
	if(titulo!="")
	{
		html_msg +="<div class=titulo>"+titulo.toUpperCase()+"</div>";
	}
  html_msg +="<p>"+CM_mensaje+"</p>";
	$( "#"+div ).html(html_msg); 
  $("#"+div).popup("open");
  if(titulo.toLowerCase()=="alerta" || titulo.toLowerCase()=="mensaje")
  {
 		setTimeout(function() {

       $("#"+div).popup("close");

    }, 7000);
  }
  
}
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
	$.mobile.loading( 'show', {
				text: 'Validando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
			$("#output2").load(PATH_QUERY, 
			{tipo:12} 
				,function(){
					
					$.mobile.loading( 'hide');	
					
				}
			);
}
function valida()
{
	
	if(!AC_ONLINE)
	{
		openPopstatic("Conexion a internet no disponible. Por favor revise.",3000);
	}else
	{
		var usuario=$.trim(document.getElementById("user").value);
		if(usuario.length > 1)
		{
			$.mobile.loading( 'show', {
					text: 'Validando...',
					textVisible: true,
					theme: 'a',
					html: ""
				});
				$("#output2").load(PATH_QUERY, 
				{tipo:1,usuario:usuario} 
					,function(){
						//$('#pantalla_inicio').trigger('create');	
						$.mobile.loading( 'hide');	
						
					}
				);
		}else
			{
				openPopstatic("Identificador no valido",0);
			}
	}
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
			window.location.href="index_login.html";
}

function loadAccion(tipo,jornada,accion_actual)
{

	if(accion_actual!= tipo)
	{
		$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		$("#contenido_usuarios").load(PATH_QUERY, 
					{tipo:14,tip_opc:tipo,jornada:jornada} 
						,function(){
							$('#contenido_usuarios').trigger('create');
							$.mobile.loading( 'hide');	
							$('#timepicker1').timepicki({show_meridian:false,
																					min_hour_value:0,
																					max_hour_value:23,
																					
																					overflow_minutes:true,
																					increase_direction:'up',
																					disable_keyboard_mobile: true});
																					
							$( "#desde_accion" ).datetimepicker({timepicker:false,format:'Y-m-d',lang:'es'});																					
							$.mobile.changePage('#mod_enrol', {transition: 'pop', role: 'dialog'});
							
							
						}
		);

	}else
		{
			openPopstatic("Esta accion se ecnuentra actualmente iniciada.",4000);
		}
		
}
function iniciarAccion(tipo,jornada)
{
	//openPopstatic("Accion Iniciada",4000);
	var fecha=$.trim(document.getElementById("desde_accion").value);
				var hora=$.trim(document.getElementById("timepicker1").value);
				var time=""+fecha+" "+hora+":00";
	$.mobile.loading( 'show', {
				text: 'Iniciando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
	$("#output").load(PATH_QUERY, 
					{tipo:17,tip_opc:tipo,jornada:jornada, fecha:time} 
						,function(){
							
							
							
							
							
						}
		);
}
function terminarAccion(tipo)
{
	openPopstatic("Accion Terinada",4000);
}
function loadHistorial(tipo,jornada)
{
		$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#contenido_usuarios").load(PATH_QUERY, 
					{tipo:4, tipo_opc:tipo, jornada:jornada} 
						,function(){
							$('#contenido_usuarios').trigger('create');
							$.mobile.loading( 'hide');	
							$.mobile.changePage('#mod_enrol', { role: 'dialog'});
							
							
						}
		);
}
function loadJornada(jornada)
{
	$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#pantalla_inicio").load(PATH_QUERY, 
					{tipo:5,jornada:jornada} 
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
	$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
	$("#output").load(PATH_QUERY, 
					{tipo:28} 
						,function(){	
							$.mobile.loading( 'hide');	
							
							
						}
		);
	
}
function editarJornada(jornada)
{
	$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#pantalla_inicio").load(PATH_QUERY, 
					{tipo:7,jornada:jornada} 
						,function(){
							$('#pantalla_inicio').trigger('create');
							 $(function() {
    							$( "#fjornada" ).datetimepicker({timepicker:true,format:'Y-m-d H:i:00',lang:'es'});
  						});	
							$.mobile.loading( 'hide');	
							
							
							
						}
		);
	
}

function editRegistro(id_accion,jornada)
{
			$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#contenido_usuarios").load(PATH_QUERY, 
					{tipo:8,id:id_accion, jornada:jornada} 
						,function(){
							$('#contenido_usuarios').trigger('create');
							$(function() {
    							$( "#desde_ec" ).datetimepicker({timepicker:false,format:'Y-m-d',lang:'es'});
    							$( "#hasta_ec" ).datetimepicker({timepicker:false,format:'Y-m-d',lang:'es'});
    							$('#timepicker1_ec').timepicki({show_meridian:false,
																					min_hour_value:0,
																					max_hour_value:23,
																					
																					overflow_minutes:true,
																					increase_direction:'up',
																					disable_keyboard_mobile: true});
																					
								$('#timepicker2_ec').timepicki({show_meridian:false,
																					min_hour_value:0,
																					max_hour_value:23,
																					
																					overflow_minutes:true,
																					increase_direction:'up',
																					disable_keyboard_mobile: true});																					
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
function openMensaje(id_mensaje,id_log)
{
		$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#contenido_usuarios").load(PATH_QUERY, 
					{tipo:10,id_mensaje:id_mensaje,id_log:id_log} 
						,function(){
			
							$('#contenido_usuarios').trigger('create');
							
							$.mobile.loading( 'hide');	
							$.mobile.changePage('#mod_enrol', { role: 'dialog'});
							
							
						}
		);
}

function nuevoMensaje(tipo,ids)
{
		$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		AC_MAIL_TO=Array();
		AC_MAIL_TO_GROUP=Array();
		$("#contenido_usuarios").load(PATH_QUERY, 
					{tipo:11, opc:tipo, ids:ids} 
						,function(){
							$('#contenido_usuarios').trigger('create');
							
							$.mobile.loading( 'hide');	
							$.mobile.changePage('#mod_enrol', { role: 'dialog'});
							
							
						}
		);
}
function addTo(to,id_to)
{
	
	AC_MAIL_TO_GROUP[AC_MAIL_TO_GROUP.length]=id_to;
	var dest=document.getElementById("destin").innerHTML ;
	$( "#destin" ).html(dest+", "+to); 
}
function addTo2(to,id_to)
{
	
	AC_MAIL_TO[AC_MAIL_TO.length]=id_to;
	var dest=document.getElementById("destin2").innerHTML ;
	$( "#destin2" ).html(dest+", "+to); 
}
function addMensajePre(texto)
{
	document.getElementById("contenido_mensaje").innerHTML=texto; 
}
function sendMensaje()
{
	var mensaje=$.trim(document.getElementById("contenido_mensaje").value);
	$.mobile.loading( 'show', {
				text: 'Enviando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		

		$("#contenido_usuarios").load(PATH_QUERY, 
					{tipo:26, to:AC_MAIL_TO, to_group:AC_MAIL_TO_GROUP,mensaje:mensaje} 
						,function(){
							
						}
		);
	
}
function cerrarSesion()
{
	$("#output").load(PATH_QUERY, 
			{tipo:13} 
				,function(){
					
					$.mobile.loading( 'hide');	
					
				}
			);
}
function offline()
{
	
	
	if(AC_ONLINE)
	{
		AC_ONLINE=false;
		window.location.href="index.html";
	}
	AC_ONLINE=false;
}
function online()
{
	AC_ONLINE=true;
}
function loadLogin()
{
	
	$.mobile.loading( 'show', {
					text: 'Cargando...',
					textVisible: true,
					theme: 'a',
					html: ""
				});
				loadMenu();				
				$("#pantalla_inicio").load(PATH_QUERY, 
				{tipo:15} 
					,function(){
						$('#pantalla_inicio').trigger('create');	
						$.mobile.loading( 'hide');	
						
					}
				);
	
}
function iniciarJornada(id_jornada)
{
	$.mobile.loading( 'show', {
					text: 'Cargando...',
					textVisible: true,
					theme: 'a',
					html: ""
				});
				
						
				$("#output").load(PATH_QUERY, 
				{tipo:16, jornada:id_jornada } 
					,function(){
					
						$.mobile.loading( 'hide');	
						loadResumen();
						
					}
				);
	
	
}

function prePublicar(jornada)
{
	openPopstatic("Una vez publicado no podra agregar mas actividades pero si editar las existentes <input type='button' class=bottom_coment onclick='publicar("+jornada+");' value='Publicar'>",0);
}
function publicar(jornada)
{
	$("#myPopup_static").popup("close");
	$.mobile.loading( 'show', {
					text: 'Publicando...',
					textVisible: true,
					theme: 'a',
					html: ""
				});
				
						
				$("#output").load(PATH_QUERY, 
				{tipo:18, jornada:jornada } 
					,function(){
					
						$.mobile.loading( 'hide');	
						loadInicio();
						
					}
				);
}

function saveAccion(id_accion, jornada)
{
	var fec_ini=$.trim(document.getElementById("desde_ec").value);
	var hora_ini=$.trim(document.getElementById("timepicker1_ec").value);
	var fec_ter=$.trim(document.getElementById("hasta_ec").value);
	var hora_ter=$.trim(document.getElementById("timepicker2_ec").value)+"";
	comentario="";
	try {
    var comentario=$.trim(document.getElementById("comentario_ec").value)+"";
	}
	catch(err) {
    
	}
 
	
	$.mobile.loading( 'show', {
					text: 'Guardando...',
					textVisible: true,
					theme: 'a',
					html: ""
				});
				
						
				$("#output3").load(PATH_QUERY, 
				{tipo:19, id:id_accion,fec_ini:fec_ini, fec_ter:fec_ter,hora_ini:hora_ini,hora_ter:hora_ter,jornada:jornada,comentario:comentario } 
					,function(){
					
						
						
					}
				);
				
}

function loadAccionNuevo(tipo,jornada)
{


		$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		$("#contenido_usuarios").load(PATH_QUERY, 
					{tipo:20,tip_opc:tipo,jornada:jornada} 
						,function(){
							$('#contenido_usuarios').trigger('create');
							$.mobile.loading( 'hide');	
							$('#timepicker1').timepicki({show_meridian:false,
																					min_hour_value:0,
																					max_hour_value:23,
																					
																					overflow_minutes:true,
																					increase_direction:'up',
																					disable_keyboard_mobile: true});
							$('#timepicker2').timepicki({show_meridian:false,
																					min_hour_value:0,
																					max_hour_value:23,
																					
																					overflow_minutes:true,
																					increase_direction:'up',
																					disable_keyboard_mobile: true});																					
							$( "#desde_accion" ).datetimepicker({timepicker:false,format:'Y-m-d',lang:'es'});																					
							$( "#hasta_accion" ).datetimepicker({timepicker:false,format:'Y-m-d',lang:'es'});																					
							$.mobile.changePage('#mod_enrol', {transition: 'pop', role: 'dialog'});
							
							
						}
		);


		
}
function saveAccionNueva(tipo,jornada)
{
	var fec_ini=$.trim(document.getElementById("desde_accion").value);
	var hora_ini=$.trim(document.getElementById("timepicker1").value);
	var fec_ter=$.trim(document.getElementById("hasta_accion").value);
	var hora_ter=$.trim(document.getElementById("timepicker2").value);
	$.mobile.loading( 'show', {
					text: 'Guardando...',
					textVisible: true,
					theme: 'a',
					html: ""
				});
				
						
				$("#output3").load(PATH_QUERY, 
				{tipo:21, tipo_opc:tipo,fec_ini:fec_ini, fec_ter:fec_ter,hora_ini:hora_ini,hora_ter:hora_ter,jornada:jornada } 
					,function(){
					
						
						
					}
				);
	
}
function saveEdicionJornada(jornada)
{
		var fjornada=$.trim(document.getElementById("fjornada").value);
	$.mobile.loading( 'show', {
					text: 'Guardando...',
					textVisible: true,
					theme: 'a',
					html: ""
				});
				
						
				$("#output").load(PATH_QUERY, 
				{tipo:22, jornada:jornada, fecha:fjornada } 
					,function(){
					
						
						
					}
				);
}
function jornadaAnterior()
{
	
	$.mobile.loading( 'show', {
					text: 'Cargando...',
					textVisible: true,
					theme: 'a',
					html: ""
				});
										
				$("#pantalla_inicio").load(PATH_QUERY, 
				{tipo:23} 
					,function(){
					
						
						
					}
				);
}
function loadHistorialMenu(jornada)
{
		$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#contenido_usuarios").load(PATH_QUERY, 
					{tipo:24, jornada:jornada} 
						,function(){
							$('#contenido_usuarios').trigger('create');
							$.mobile.loading( 'hide');	
							$.mobile.changePage('#mod_enrol', { role: 'dialog'});
							
							
						}
		);
}

function validaTarea(jornada)
{
		var opc_aux=$.trim(document.getElementById("opc_aux").value);
		var comentario=$.trim(document.getElementById("comentario").value);
		var desde=$.trim(document.getElementById("desde").value);
		var hasta=$.trim(document.getElementById("hasta").value);
	if(hasta!="" && desde!="" && comentario!="")	
	{
		$.mobile.loading( 'show', {
					text: 'Validando...',
					textVisible: true,
					theme: 'a',
					html: ""
				});
				
						
				$("#output").load(PATH_QUERY, 
				{tipo:25, jornada:jornada, opc_aux:opc_aux,comentario:comentario,desde:desde, hasta:hasta } 
					,function(){
					
						
						
					}
				);
	}else
	{
		
		openPopstatic("Debe ingresar un comentario, inicio y termino ",0);
	}
}
function opcAuxiliar()
{
	document.getElementById("comentario").value=document.getElementById("opc_aux").value;
}
function limpiarMensaje()
{
		AC_MAIL_TO=Array();
		AC_MAIL_TO_GROUP=Array();
		$( "#destin" ).html(""); 
		$( "#destin2" ).html(""); 
		$( "#contenido_mensaje" ).html(""); 
	
}
function reportes()
{
	
	$.mobile.loading( 'show', {
					text: 'Cargando...',
					textVisible: true,
					theme: 'a',
					html: ""
				});
										
				$("#pantalla_inicio").load(PATH_QUERY, 
				{tipo:27} 
					,function(){
						$("#mypanel2").panel( "close" );					
						$('#pantalla_inicio').trigger('create');	
						$.mobile.loading( 'hide');	
						
						
					}
				);
}
function sendReporte(tipo_rep)
{
	var m_mail=$.trim(document.getElementById("m_mail").value);
		$.mobile.loading( 'show', {
					text: 'Enviando...',
					textVisible: true,
					theme: 'a',
					html: ""
				});
										
				$("#output").load(PATH_QUERY, 
				{tipo:29,tipo_rep:tipo_rep,m_mail:m_mail} 
					,function(){
						
						
					}
				);
}