var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
	var x;
	x=$("#UnaPrueba");
	x.click(Prueba);
}
function Prueba();
{
	var x;
	x=$("#UnaPrueba");
	x.css("Color","Green");
	x.css("font-size","30pt");
	x.css("font-family","Arial");
}