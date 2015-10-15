var PATH_QUERY="http://obvii.net/obvii/app_camion/query.php";
var AC_ONLINE=20;
var AC_MAIL_TO=Array();
var AC_MAIL_TO_GROUP=Array();
var SIS_LON=0;
var SIS_LAT=0;
var SIS_ACCU=0;
var AC_MAIL_ADMIN="";  
var ACC_OFF=0;
function mensaje(CM_mensaje,titulo,div)
{
	
	var html_msg="";
	if(titulo!="")
	{
		html_msg +="<div class=titulo_1>"+titulo.toUpperCase()+"</div>";
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
	loadBD();
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
							
							 			 $(document).ready(function () {
           
             $('#desde_accion').scroller({ preset: 'datetime' });
            
            wheels = [];
            wheels[0] = { 'Hours': {} };
            wheels[1] = { 'Minutes': {} };
            for (var i = 0; i < 60; i++) {
                if (i < 16) wheels[0]['Hours'][i] = (i < 10) ? ('0' + i) : i;
                wheels[1]['Minutes'][i] = (i < 10) ? ('0' + i) : i;
            }
            $('#theme, #mode').change(function() {
                var t = $('#theme').val();
                var m = $('#mode').val();
               
                $('#desde_accion').scroller('destroy').scroller({ preset: 'datetime', theme: t, mode: m });
                 
                
            });

        });																			
							$.mobile.changePage('#mod_enrol', {transition: 'pop', role: 'dialog'});
							if(tipo==4)
							{
								$("#comentario").prop('disabled', true);
							}
							
							
						}
		);

	}else
		{
			
			openPopstatic("Esta accion se encuentra actualmente iniciada.<br> <input type='button' value='Editar' class=bottom_coment onclick='loadAcciones("+tipo+");'>",0);
		}
		
}
function iniciarAccion(tipo,jornada)
{
	//openPopstatic("Accion Iniciada",4000);
	var fecha=$.trim(document.getElementById("desde_accion").value);
	var comentario="";
	if(tipo==4)			
	{
			
		  comentario=$.trim(document.getElementById("comentario").value);
	}
				var time=fecha;
					$.mobile.loading( 'show', {
				text: 'Iniciando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
	$("#output").load(PATH_QUERY, 
					{tipo:17,tip_opc:tipo,jornada:jornada, fecha:time, comentario:comentario} 
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
  			
  			 $(document).ready(function () {
           
             $('#desde').scroller({ preset: 'datetime' });
            $('#hasta').scroller({ preset: 'datetime' });
            wheels = [];
            wheels[0] = { 'Hours': {} };
            wheels[1] = { 'Minutes': {} };
            for (var i = 0; i < 60; i++) {
                if (i < 16) wheels[0]['Hours'][i] = (i < 10) ? ('0' + i) : i;
                wheels[1]['Minutes'][i] = (i < 10) ? ('0' + i) : i;
            }
            $('#theme, #mode').change(function() {
                var t = $('#theme').val();
                var m = $('#mode').val();
               
                $('#desde').scroller('destroy').scroller({ preset: 'datetime', theme: t, mode: m });
                 $('#hasta').scroller('destroy').scroller({  preset: 'datetime',theme: t, mode: m });
                
            });

        });
  			
  			$("#comentario").prop('disabled', true);
							$.mobile.loading( 'hide');	
							
							
							
						}
		);
		
		
}
function loadauxEdit(jornada)
{
	$("#mod_enrol").dialog( "close" );
	$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#pantalla_inicio").load(PATH_QUERY, 
					{tipo:6,jornada:jornada} 
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
							 
  													$(document).ready(function () {
           
             $('#fjornada').scroller({ preset: 'datetime' });
             
            
            wheels = [];
            wheels[0] = { 'Hours': {} };
            wheels[1] = { 'Minutes': {} };
            for (var i = 0; i < 60; i++) {
                if (i < 16) wheels[0]['Hours'][i] = (i < 10) ? ('0' + i) : i;
                wheels[1]['Minutes'][i] = (i < 10) ? ('0' + i) : i;
            }
            $('#theme, #mode').change(function() {
                var t = $('#theme').val();
                var m = $('#mode').val();
               
                $('#fjornada').scroller('destroy').scroller({ preset: 'datetime', theme: t, mode: m });
                
                 
                
            });

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
							$(document).ready(function () {
           
             $('#desde_ec').scroller({ preset: 'datetime' });
             $('#hasta_ec').scroller({ preset: 'datetime' });
            
            wheels = [];
            wheels[0] = { 'Hours': {} };
            wheels[1] = { 'Minutes': {} };
            for (var i = 0; i < 60; i++) {
                if (i < 16) wheels[0]['Hours'][i] = (i < 10) ? ('0' + i) : i;
                wheels[1]['Minutes'][i] = (i < 10) ? ('0' + i) : i;
            }
            $('#theme, #mode').change(function() {
                var t = $('#theme').val();
                var m = $('#mode').val();
               
                $('#desde_ec').scroller('destroy').scroller({ preset: 'datetime', theme: t, mode: m });
                $('#hasta_ec').scroller('destroy').scroller({ preset: 'datetime', theme: t, mode: m });
                 
                
            });

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
							$("#mypanel2").panel( "close" );
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
	//var dest=document.getElementById("destin").innerHTML ;
	//$( "#destin" ).html(dest+", "+to); 
}
function addTo2(to,id_to)
{
	
	AC_MAIL_TO[AC_MAIL_TO.length]=id_to;
	//var dest=document.getElementById("destin2").innerHTML ;
	//$( "#destin2" ).html(dest+", "+to); 
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
	//alert("F:"+AC_ONLINE);
	
	if(AC_ONLINE && AC_ONLINE!=20)
	{
		AC_ONLINE=false;
		
		window.location.href="index.html";
	}else
		{
			AC_ONLINE=false;
			//validamos si existe sesion pendiente
			//getJornadaBD();
	 		//getSesionBD();
			//setTimeout("validaBDJornada();",700);
			
		}
}

function online()
{
	//alert("T:"+AC_ONLINE);
	if(!AC_ONLINE)
	{
		AC_ONLINE=true;
		window.location.href="index.html";
	}else
		{
		AC_ONLINE=true;
	}
}
function loadLogin()
{
	
	setInterval("checkEstadoConductor();",60000);
	
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
function iniciarJornadaTime(id_jornada)
{
$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		$("#contenido_usuarios").load(PATH_QUERY, 
					{tipo:35,jornada:id_jornada} 
						,function(){
							$('#contenido_usuarios').trigger('create');
							$.mobile.loading( 'hide');	
								 $(document).ready(function () {
           
             $('#desde_ec').scroller({ preset: 'datetime' });
            
            wheels = [];
            wheels[0] = { 'Hours': {} };
            wheels[1] = { 'Minutes': {} };
            for (var i = 0; i < 60; i++) {
                if (i < 16) wheels[0]['Hours'][i] = (i < 10) ? ('0' + i) : i;
                wheels[1]['Minutes'][i] = (i < 10) ? ('0' + i) : i;
            }
            $('#theme, #mode').change(function() {
                var t = $('#theme').val();
                var m = $('#mode').val();
               
                $('#desde_ec').scroller('destroy').scroller({ preset: 'datetime', theme: t, mode: m });
                 
                
            });

        });																					
							
							$.mobile.changePage('#mod_enrol', {transition: 'pop', role: 'dialog'});
							
							
						}
		);

}
function iniciarJornada(id_jornada)
{
	var desde_ec=$.trim(document.getElementById("desde_ec").value);
	var opc_inicio=$.trim(document.getElementById("opc_inicio").value);

	$.mobile.loading( 'show', {
					text: 'Cargando...',
					textVisible: true,
					theme: 'a',
					html: ""
				});
				
						
				$("#output").load(PATH_QUERY, 
				{tipo:16, jornada:id_jornada,fecha:desde_ec, opc_inicio:opc_inicio } 
					,function(){
					
						
						
					}
				);
	
	
}

function prePublicar(jornada)
{
	openPopstatic("Una vez Terminado no podra agregar mas actividades pero si editar las existentes <input type='button' class=bottom_coment onclick='terminar("+jornada+");' value='Terminar Jornada'>",0);
}
function prePublicar2(jornada)
{
	openPopstatic("Una vez publicado no podra agregar mas actividades antes de esta hora pero si agregar nuevas actividades <input type='button' class=bottom_coment onclick='publicar("+jornada+");' value='Publicar'>",0);
}
function terminar(jornada)
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
				{tipo:33, jornada:jornada } 
					,function(){
					
						$.mobile.loading( 'hide');	
						loadInicio();
						openPopstatic("Jornada Publicada",3000);
						
					}
				);
}
function saveAccion(id_accion, jornada)
{
	var fec_ini=$.trim(document.getElementById("desde_ec").value);
	
	var fec_ter=$.trim(document.getElementById("hasta_ec").value);
	
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
				{tipo:19, id:id_accion,fec_ini:fec_ini, fec_ter:fec_ter,jornada:jornada,comentario:comentario } 
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
	var dato=document.getElementById("opc_aux").value;
	if(dato!='none' && dato!='Ninguna')
	{
		document.getElementById("comentario").value=dato;
		$("#comentario").prop('disabled', true);
	}
	if(dato=='none')
	{
		document.getElementById("comentario").value="";
		$("#comentario").prop('disabled', false);
	}

}
function limpiarMensaje()
{
		//AC_MAIL_TO=Array();
		//AC_MAIL_TO_GROUP=Array();
		//$( "#destin" ).html(""); 
		//$( "#destin2" ).html(""); 
		//$( "#contenido_mensaje" ).html(""); 
	
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
function sendEmergencia()
{
	$("#mypanel2").panel( "close" );	
	openPopstatic("Esta accion enviara un mensaje de Emergencia a los administradores.<br> Desea continuar? <input type='button' class=bottom_coment onclick='sendEmergenciaOK();' value='Enviar'>",0);
}
function sendEmergenciaOK()
{
	$("#mypanel2").panel( "close" );
	
	$.mobile.loading( 'show', {
				text: 'Obteniendo Coordenadas...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
			
	navigator.geolocation.getCurrentPosition (function (pos)
		{
			var lat = pos.coords.latitude;
  		var lng = pos.coords.longitude;
  		var accu=pos.coords.accuracy.toFixed(2);
  		
  		SIS_LON=lng;
  		SIS_LAT=lat;
  		SIS_ACCU=accu;
			$("#output").load(PATH_QUERY, 
				{tipo:30,lat:SIS_LAT,lon:SIS_LON,accu:SIS_ACCU} 
					,function(){
						
						$.mobile.loading( 'hide');	
						openPopstatic("Mensaje Enviado.",3000);
					}
				);
		},noLocation,{timeout:6000});

}
function noLocation()
{
	$.mobile.loading( 'hide');	
	$("#output").load(PATH_QUERY, 
				{tipo:30,lat:0,lon:0,accu:0} 
					,function(){						
						$.mobile.loading( 'hide');	
						openPopstatic("Mensaje Enviado.",3000);
					}
				);
}

function loadMapa()
{
		$.mobile.loading( 'show', {
					text: 'Cargando...',
					textVisible: true,
					theme: 'a',
					html: ""
				});
										
				$("#pantalla_inicio").load(PATH_QUERY, 
				{tipo:31} 
					,function(){
						$("#mypanel2").panel( "close" );					
						$('#pantalla_inicio').trigger('create');	
						
						init( -70.668343,-33.451259,11);
						setTimeout("getLocation();",500);
						$.mobile.loading( 'hide');	
					}
				);
	
}

function getLocation()
{
	$.mobile.loading( 'show', {
				text: 'Obteniendo Coordenadas...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
			
	navigator.geolocation.getCurrentPosition (function (pos)
		{
			var lat = pos.coords.latitude;
  		var lng = pos.coords.longitude;
  		var accu=pos.coords.accuracy.toFixed(2);
  		
  		SIS_LON=lng;
  		SIS_LAT=lat;
  		SIS_ACCU=accu;
  		moverCentro(SIS_LAT,SIS_LON,16);
			addMarcadores(SIS_LON,SIS_LAT,"Ubicaci&oacute;n actual<hr><strong>Enviar por correo</strong><br><input type='text' name='mail_envia'  id='mail_envia' value='"+AC_MAIL_ADMIN+"' class=input_form><br><input class=bottom_coment type='button' value='Enviar' onclick='enviaPosicion();'><br><div id=msg_error></div>","img/marker.png",45,45);

			
			$.mobile.loading( 'hide');	
		},noLocation2,{timeout:6000});

	
}
function noLocation2()
{
	openPopstatic("No fue posible obtener ubicacion actual. Revise que su GPS este activado.",3000);
	$.mobile.loading( 'hide');	
}
function moveOn()
{
}
function enviaPosicion()
{
	var mail_envia=$.trim(document.getElementById("mail_envia").value);
	
	if(validarEmail(mail_envia))
	{
		$("#output").load(PATH_QUERY, 
				{tipo:32,lat:SIS_LAT,lon:SIS_LON,mail:mail_envia} 
					,function(){						
						$.mobile.loading( 'hide');	
							$("#msg_error").html("Mail Enviado Exitosamente");
					}
				);
	}else
		{
			$("#msg_error").html("Mail ingresado en invalido");
		}
}
function validarEmail( email ) {
	  var valido=true;
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) )
        valido=false;
        
   return valido;     
}
function checkEstadoConductor()
{
	
	if(AC_ONLINE)
	{
		$("#output").load(PATH_QUERY, 
				{tipo:34} 
					,function(){						
						
					}
				);
	}
}

function jornadaNext()
{
	$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#contenido_usuarios").load(PATH_QUERY, 
					{tipo:36} 
						,function(){
							$('#contenido_usuarios').trigger('create');
							$.mobile.loading( 'hide');	
							$.mobile.changePage('#mod_enrol', { role: 'dialog'});
							
							
						}
		);
}

function loadAcciones(tipo)
{
	$("#myPopup_static").popup("close");
	$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#contenido_usuarios").load(PATH_QUERY, 
					{tipo:37, accion:tipo} 
						,function(){
							$('#contenido_usuarios').trigger('create');
							$.mobile.loading( 'hide');	
							$.mobile.changePage('#mod_enrol', { role: 'dialog'});
							
							
						}
		);
	
}
function editRegistroActual(id_accion,jornada)
{
			$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		
		$("#contenido_usuarios").load(PATH_QUERY, 
					{tipo:8,id:id_accion, jornada:jornada, actual:0} 
						,function(){
							$('#contenido_usuarios').trigger('create');
							$(document).ready(function () {
           
             $('#desde_ec').scroller({ preset: 'datetime' });
             $('#hasta_ec').scroller({ preset: 'datetime' });
            
            wheels = [];
            wheels[0] = { 'Hours': {} };
            wheels[1] = { 'Minutes': {} };
            for (var i = 0; i < 60; i++) {
                if (i < 16) wheels[0]['Hours'][i] = (i < 10) ? ('0' + i) : i;
                wheels[1]['Minutes'][i] = (i < 10) ? ('0' + i) : i;
            }
            $('#theme, #mode').change(function() {
                var t = $('#theme').val();
                var m = $('#mode').val();
               
                $('#desde_ec').scroller('destroy').scroller({ preset: 'datetime', theme: t, mode: m });
                $('#hasta_ec').scroller('destroy').scroller({ preset: 'datetime', theme: t, mode: m });
                 
                
            });

        });	
							$.mobile.loading( 'hide');	
							$.mobile.changePage('#mod_enrol', { role: 'dialog'});
							
							
						}
		);
	
}

function deleteAccion(accion,jornada)
{
	
	$.mobile.loading( 'show', {
					text: 'Eliminando...',
					textVisible: true,
					theme: 'a',
					html: ""
				});
				
						
				$("#output").load(PATH_QUERY, 
				{tipo:38, id:accion,jornada:jornada} 
					,function(){
						
					}
				);
}
function loadAutorizar()
{
	$.mobile.loading( 'show', {
					text: 'Cargando...',
					textVisible: true,
					theme: 'a',
					html: ""
				});
				
						
				$("#output").load(PATH_QUERY, 
				{tipo:39} 
					,function(){
						$.mobile.loading( 'hide');	
						
					}
				);
	
}

function autoriza(tipo)
{
	$.mobile.loading( 'show', {
					text: 'Almacenando...',
					textVisible: true,
					theme: 'a',
					html: ""
				});
				
						
				$("#output").load(PATH_QUERY, 
				{tipo:40, opc:tipo} 
					,function(){
						$.mobile.loading( 'hide');	
						
					}
				);
}

/* BD*/
var db = openDatabase('MyDB', '1.0', 'My Sample DB', 10000 * 1024);
var USER_FECHA=Array();				 	    	
var USER_ID=Array();				 	    	
var USER_USER=Array();				 	    	
var USER_CLAVE=Array();	
var JORNADA_ID=Array();				 	    	
var JORNADA_FECHA=Array();				 	    	
var JORNADA_ESTADO=Array();				 	    	
var JORNADA_USUARIO=Array();
	var JORNADA_ORIGEN=Array();		
	var JORNADA_DESTINO=Array();		
	var JORNADA_PATENTE=Array();	
	var JORNADA_FECHA_FIN=Array();		
	var ACCION_ID=Array();				 	    	
	var ACCION_FECHA=Array();				 	    	
	var ACCION_ESTADO=Array();				 	    	
	var ACCION_USUARIO=Array();				 	    					 	    	
	var ACCION_TIPO=Array();			
	var ACCION_JORNADA=Array();					
function loadBD()
{
	
 db.transaction(function(tx) 
 {
 	
 	//tx.executeSql('DROP TABLE jornada');
    tx.executeSql('create table if not exists sesion(id,usuario,fecha,clave)');
    tx.executeSql('create table if not exists accion(accion, fecha, tipo,estado, jornada, usuario)');
    tx.executeSql('create table if not exists jornada(jornada, fecha, estado,usuario,origen,destino,patente,fecha_fin)');
  
	}, errorCB, successCB);    

}
function addJornadaBD(jornada,fecha,estado,usuario,origen,destino,patente,fecha_fin)
{
	
	 db.transaction(function(tx) {
 			tx.executeSql('DROP TABLE IF EXISTS jornada');
 			 tx.executeSql('create table if not exists jornada(jornada, fecha, estado,usuario,origen,destino,patente,fecha_fin)');
			 tx.executeSql('insert into jornada(jornada, fecha, estado,usuario,origen,destino,patente,fecha_fin) values (?,?,?,?,?,?,?,?)',[jornada,fecha,estado,usuario,origen,destino,patente,fecha_fin]);
	}, errorCB, successCB);
	
}
function getJornadaBD()
{
	db.transaction(function(tx) {  
 		tx.executeSql('SELECT * FROM jornada', [], selectJornada, errorCB);
 		
    
	}, errorCB, successCB); 
}
function selectJornada(tx, results)
{
	JORNADA_ID=Array();				 	    	
	JORNADA_FECHA=Array();				 	    	
	JORNADA_ESTADO=Array();				 	    	
	JORNADA_USUARIO=Array();				 	    					 	    	
	JORNADA_ORIGEN=Array();		
	JORNADA_DESTINO=Array();		
	JORNADA_PATENTE=Array();		
	JORNADA_FECHA_FIN=Array();	

	if (results.rows.length < 1) 
  {
  	//alert("no hay resultados");
  	
  }  
 	for (var i = 0; i < results.rows.length; i++) 
 	{
 		
 				JORNADA_ID[i] = results.rows.item(i).jornada; 				 	    	
 	    	JORNADA_FECHA[i] = results.rows.item(i).fecha;
 	    	JORNADA_FECHA_FIN[i] = results.rows.item(i).fecha_fin;
 	    	JORNADA_ESTADO[i]= results.rows.item(i).estado;
 	    	//alert(results.rows.item(i).patente);
 	    	JORNADA_USUARIO[i]= results.rows.item(i).usuario;
 	    	
 	    	JORNADA_ORIGEN[i]= results.rows.item(i).origen;
 	    	JORNADA_DESTINO[i]= results.rows.item(i).destino;
 	    	JORNADA_PATENTE[i]= results.rows.item(i).patente;
 	    	
 	    	
 	    	
 	  }
 	    
	}
function addSesionBD(id_us,usuario,fecha,clave)
{
	
	 db.transaction(function(tx) {
 			tx.executeSql('DROP TABLE IF EXISTS sesion');
 			tx.executeSql('create table if not exists sesion(id,usuario,fecha,clave)');
			tx.executeSql('insert into sesion(id,usuario,fecha,clave) values (?,?,?,?)',[id_us,usuario,fecha,clave]);
	}, errorCB, successCB);
	
}
function successCB(e)
{
	//alert("exitoso bd");
}
function errorCB(e)
{
	alert("error bd "+e.code);
}
function getSesionBD()
{
	db.transaction(function(tx) {  
 		tx.executeSql('SELECT * FROM sesion', [], selectSesion, errorCB);
 		
    
	}, errorCB, successCB); 
}
function selectSesion(tx, results)
{
	USER_FECHA=Array();				 	    	
	USER_ID=Array();				 	    	
	USER_USER=Array();				 	    	
	USER_CLAVE=Array();				 	    	
					 	    	

	if (results.rows.length < 1) 
  {
  	//alert("no hay resultados");
  	
  }  
 	for (var i = 0; i < results.rows.length; i++) 
 	{
 		
 				USER_FECHA[i] = results.rows.item(i).fecha; 				 	    	
 	    	USER_ID[i] = results.rows.item(i).id;
 	    	USER_USER[i]= results.rows.item(i).usuario;
 	    	//alert(results.rows.item(i).usuario);
 	    	USER_CLAVE[i]= results.rows.item(i).clave;
 	    	
 	    	
 	    	
 	  }
 	    
}
function addAccionBD(accion, fecha, tipo,estado, jornada, usuario)
{
	/*tipo: 0 inicio 1 termino*/
	 db.transaction(function(tx) {
 			//tx.executeSql('DROP TABLE IF EXISTS accion');
 			 tx.executeSql('create table if not exists accion(accion, fecha, tipo,estado, jornada, usuario)');
			 tx.executeSql('insert into accion(accion, fecha, tipo,estado, jornada, usuario) values (?,?,?,?,?,?)',[accion, fecha, tipo,estado, jornada, usuario]);
	}, errorCB, successCB);
	
}
function cleanAccionBD()
{
	
	 db.transaction(function(tx) {
 			tx.executeSql('DROP TABLE IF EXISTS accion');
 			 tx.executeSql('create table if not exists accion(accion, fecha, tipo,estado, jornada, usuario)');
			 
	}, errorCB, successCB);
	
}
function getAccionBD()
{
	db.transaction(function(tx) {  
 		tx.executeSql('SELECT * FROM accion', [], selectAccion, errorCB);
 		
    
	}, errorCB, successCB); 
}
function selectAccion(tx, results)
{
	ACCION_ID=Array();				 	    	
	ACCION_FECHA=Array();				 	    	
	ACCION_ESTADO=Array();				 	    	
	ACCION_USUARIO=Array();				 	    					 	    	
	ACCION_TIPO=Array();			
	ACCION_JORNADA=Array();			

	if (results.rows.length < 1) 
  {
  	//alert("no hay resultados");
  	
  }  
 	for (var i = 0; i < results.rows.length; i++) 
 	{
 		
 				ACCION_ID[i] = results.rows.item(i).accion; 				 	    	
 	    	ACCION_FECHA[i] = results.rows.item(i).fecha;
 	    	ACCION_ESTADO[i]= results.rows.item(i).estado;
 	    	//alert(results.rows.item(i).fecha);
 	    	ACCION_USUARIO[i]= results.rows.item(i).usuario;
 	    	ACCION_TIPO[i]= results.rows.item(i).tipo;
 	    	ACCION_JORNADA[i]= results.rows.item(i).jornada;
 	  }
 	    
	}	
function validaBDJornada()
{
	
	var fec=new Date();
	var mes=fec.getMonth();
	if(mes <10)
	{
		mes++;
		mes="0"+mes;
	}
	var dia=fec.getDate();
	if(dia <10)
	{
		dia="0"+dia;
	}
	var hora=fec.getHours();
	if(hora <10)
	{
		hora="0"+hora;
	}
	var min=fec.getMinutes();
	if(min <10)
	{
		min="0"+min;
	}
	var sec=fec.getSeconds();
	if(sec <10)
	{
		sec="0"+sec;
	}
	var fecha=""+fec.getFullYear()+"-"+mes+"-"+dia+" "+hora+":"+min+":"+sec+"";

	if(JORNADA_FECHA_FIN.length > 0 && Date.parse(fecha) < Date.parse(JORNADA_FECHA_FIN[0]) && JORNADA_ESTADO[0]==0 && USER_FECHA.length > 0)
	{
		window.location.href="index_offline.html";
		
	}else
		{
			openPopstatic("Conexion a internet no disponible y no se encuentra una jornada activa. Por favor revise su dispositivo.",0);
		}
}
/*Fin BD*/

/*Offline funciones*/
function loadLoginOffline()
{
	getJornadaBD();
	getSesionBD();
	getAccionBD();
	
	setTimeout("loadDataOffline();",700);
}
function loadDataOffline()
{
	
	$("#bienvenido_div").html("Bienvenido: "+USER_USER[0]);
	
	$("#fec_off").html(JORNADA_FECHA[0]);
	$("#origen_off").html(JORNADA_ORIGEN[0]);
	$("#dest_off").html(JORNADA_DESTINO[0]);
	$("#pat_off").html(JORNADA_PATENTE[0]);
	var ultimo="";
	if(ACCION_ID[ACCION_ID.length-1]==1)
	   ultimo="Conducci&oacute;n";
	if(ACCION_ID[ACCION_ID.length-1]==2)
	   ultimo="Espera";
	if(ACCION_ID[ACCION_ID.length-1]==3)
	   ultimo="Descanso";
	if(ACCION_ID[ACCION_ID.length-1]==4)
	   ultimo="T AUX";
	
	$("#actual_off").html(ultimo);
	$("#inicio_off").html(ACCION_FECHA[ACCION_ID.length-1]);
	var conduc=0;
	var espera=0;
	var descanso=0;
	var taux=0;

	openPopstatic("Actualmente se encuentra en modo offline, algunas opciones no estan disponibles hasta que se conecte a internet.",5000);
}
function loadAccionOffline(tipo)
{
	ACC_OFF=tipo;
	var fec=new Date();
	var mes=$.trim(fec.getMonth());
	if(mes < 10)
	{
		mes++;
		if(mes < 10)
		{
			mes="0"+mes;
		}
	}
	var dia=fec.getDate();
	if(dia <10)
	{
		dia="0"+dia;
	}
	var hora=fec.getHours();
	if(hora <10)
	{
		hora="0"+hora;
	}
	var min=fec.getMinutes();
	if(min <10)
	{
		min="0"+min;
	}
	var sec=fec.getSeconds();
	if(sec <10)
	{
		sec="0"+sec;
	}
	var fecha=""+fec.getFullYear()+"-"+mes+"-"+dia+" "+hora+":"+min+":"+sec+"";
	$.mobile.loading( 'show', {
				text: 'Cargando...',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		$("#contenido_usuarios").load("modal_accion.html", 
					{} 
						,function(){
							getJornadaBD();
							getSesionBD();
							$('#contenido_usuarios').trigger('create');
							$.mobile.loading( 'hide');	
							
							 			 $(document).ready(function () {
           
             $('#desde_accion').scroller({ preset: 'datetime' });
            
            wheels = [];
            wheels[0] = { 'Hours': {} };
            wheels[1] = { 'Minutes': {} };
            for (var i = 0; i < 60; i++) {
                if (i < 16) wheels[0]['Hours'][i] = (i < 10) ? ('0' + i) : i;
                wheels[1]['Minutes'][i] = (i < 10) ? ('0' + i) : i;
            }
            $('#theme, #mode').change(function() {
                var t = $('#theme').val();
                var m = $('#mode').val();
               
                $('#desde_accion').scroller('destroy').scroller({ preset: 'datetime', theme: t, mode: m });
                
                
                
            });

        });			
        
        document.getElementById("desde_accion").value=fecha; 																
							$.mobile.changePage('#mod_enrol', {transition: 'pop', role: 'dialog'});
						
							
							
						}
		);
}
function iniciarAccionOff()
{
	var fecha=document.getElementById("desde_accion").value;
	if(Date.parse(fecha) < Date.parse(JORNADA_FECHA_FIN[0]) && Date.parse(fecha) > Date.parse(JORNADA_FECHA[0]))
	{
		addAccionBD(ACC_OFF, fecha, 0,0, JORNADA_ID[0], USER_ID[0]);	
		$("#mod_enrol").dialog( "close" );
		loadLoginOffline();
		
	}else
		{
			mensaje("La fecha no es valida.","Alerta","myPopup_enrol");
			
			
		}
}
/**/

