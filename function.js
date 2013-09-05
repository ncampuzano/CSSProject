var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
	var x=$("#CambioText");
  	x.click(CambiarText);
	x=$("#HiddenAll");
	x.click(HiddenAll);
	x=$("#NotHiddenAll");
	x.click(NotHiddenAll);

}
function CambiarText()
    {
        var x;
        x=$("#UnaPrueba");
        x.css("Color","Green");
        x.css("font-size","30pt");
        x.css("font-family", "Arial");
        x.css("float","right")
    }
function HiddenAll()
{
	var x;
	x=$("p");
	x.css("visibility","hidden");
	x=$("h1");
	x.css("visibility","hidden");
}
function NotHiddenAll()
{
	var x;
	x=$("p");
	x.css("visibility","visible");
	x=$("h1");
	x.css("visibility","visible");	
}
