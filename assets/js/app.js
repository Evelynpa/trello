//crear seccion
var sectionContainer = document.createElement('section');
	sectionContainer.setAttribute('id', 'containerLeft');
	document.body.appendChild(sectionContainer);

//crear span
var spanText = document.createElement('span');
	var textSpan = document.createTextNode('Añadir una lista...');
		spanText.appendChild(textSpan);
	spanText.setAttribute('id', 'botonClick');//id
	containerLeft.appendChild(spanText);

//crear input
var inputText = document.createElement('input');
	inputText.setAttribute('placeholder', 'Añadir una lista...');
	inputText.setAttribute('id', 'campoList');//id

//crear boton
	var buttonList = document.createElement('button');
	buttonList.setAttribute('id', 'guardar');//id
	buttonList.classList.add('botones');//class
	var textButton = document.createTextNode('Guardar');

//crear elemento i
var closeI = document.createElement('i');
	closeI.classList.add('fa','fa-times');//class
	
	//crear nuevo elemento
	var articleContainer = document.createElement('article');

function createList(){

	//añadir id a elemento
	articleContainer.setAttribute('id', 'containerCampo');//id	

	//añadir atributo y texto a boton
	buttonList.appendChild(textButton);
	

	//añadir cada elemento creado
	articleContainer.appendChild(inputText);
	articleContainer.appendChild(buttonList);
	articleContainer.appendChild(closeI);
	containerLeft.appendChild(articleContainer);

	spanButton.style.display = 'none';

	buttonList.addEventListener('click', guardarList);

	spanButton.addEventListener('click',function(){
			articleContainer.style.display = 'inline-block';
			spanText.style.display = 'none';
	});

	closeI.addEventListener('click',function(){
			articleContainer.style.display = 'none';
			spanText.style.display = 'inline-block';
	});
}

var spanButton = document.getElementById('botonClick');
spanButton.addEventListener('click', createList);


//PRESIONAR BOTON GUARDAR
function guardarList(){
	var textValue = document.getElementById('campoList').value;

	document.getElementById('campoList').value = "";
if(textValue === ''){
	inputText.style.border = '2px solid red';
}else{
	inputText.style.border = '1px solid #808080';
	//crear contenedor
	var articleContainerLeft = document.createElement('article');
		articleContainerLeft.setAttribute('id', 'containerCampoLeft');//id

	//crear label para el valor del input
	var labelText = document.createElement('label');
		labelText.setAttribute('id', 'campoListLeft');//id
	var nodeText = document.createTextNode(textValue);
		labelText.appendChild(nodeText);

	//crear div
	var contenedor = document.createElement('div');
		contenedor.setAttribute('id', 'contenedor');//id

	//crear un texarea
	var textArea = document.createElement('textarea');
		textArea.setAttribute('id', 'campoListArea');//id
		textArea.classList.add('texareaList');//class
		document.getElementsByTagName('textarea');

	//crear nuevo elemento
	var linkNewTarget = document.createElement('a');
	var textTarget = document.createTextNode('Añadir una targeta...');
		linkNewTarget.appendChild(textTarget);
		linkNewTarget.setAttribute('id', 'linkTarget');//id
		linkNewTarget.setAttribute('href', '#');

	//crear boton añadir
	var buttonLeft = document.createElement('button');
	var buttonText = document.createTextNode('Añadir');
		buttonLeft.appendChild(buttonText);
		buttonLeft.setAttribute('id', 'guardarLeft');//id
		buttonLeft.classList.add('botones');//class

	//crear icono cerrar
	var closeI = document.createElement('i');
		closeI.classList.add('fa','fa-times');//class

	//elementos ocultos
	contenedor.style.display = 'none';

	//añadir cada elemento creado
	
	articleContainerLeft.appendChild(labelText);
	articleContainerLeft.appendChild(contenedor);
	contenedor.appendChild(textArea);
	articleContainerLeft.appendChild(linkNewTarget);
	contenedor.appendChild(buttonLeft);
	contenedor.appendChild(closeI);
	containerLeft.insertBefore(articleContainerLeft ,articleContainer);
}
	
	closeI.addEventListener('click',function(){
				contenedor.style.display = 'none';
				linkNewTarget.style.display = 'block';
		});
	linkNewTarget.addEventListener('click',function(){
				contenedor.style.display = 'block';
				linkNewTarget.style.display = 'none';
		});
	buttonLeft.addEventListener('click',function(){
				var areaValue = document.getElementById('campoListArea').value;
				document.getElementById('campoListArea').value = '';
				if(areaValue === ''){
					textArea.style.border = '2px solid red';
				}else {
					textArea.style.border = '1px solid #808080';
				//crear label para el valor del textarea
				var labelText = document.createElement('label');
					labelText.setAttribute('id', 'campoArea');//id
				var nodeText = document.createTextNode(areaValue);
					labelText.appendChild(nodeText);

				articleContainerLeft.insertBefore(labelText, contenedor);
			}

		});

}

/****CAMBIO DE COLORES****************************************/
	
/*verde*/
var green = document.getElementsByClassName('verde')[0];
green.addEventListener('click', function(){
 	document.getElementsByClassName('containerHeader')[0].style.backgroundColor = ' #00b300';
	document.getElementsByTagName('nav')[0].style.backgroundColor = '#00cc00';
	document.getElementsByTagName('body')[0].style.backgroundColor = '#1aff1a';
});

/*purple*/
var purple = document.getElementsByClassName('purple')[0];
purple.addEventListener('click', function(){
	document.getElementsByClassName('containerHeader')[0].style.backgroundColor = '#cc0099';
	document.getElementsByTagName('nav')[0].style.backgroundColor = '#ff00bf';
	document.getElementsByTagName('body')[0].style.backgroundColor = '#ff66d9';
	
});

/*amarillo*/
var yellow = document.getElementsByClassName('amarillo')[0];
yellow.addEventListener('click', function(){
	document.getElementsByClassName('containerHeader')[0].style.backgroundColor = '#ffb900';
	document.getElementsByTagName('nav')[0].style.backgroundColor = '#ffd633';
	document.getElementsByTagName('body')[0].style.backgroundColor = '#ffe066';
	
});

/*rojo*/
var red = document.getElementsByClassName('rojo')[0];
red.addEventListener('click', function(){
	document.getElementsByClassName('containerHeader')[0].style.backgroundColor = '#e60000';
	document.getElementsByTagName('nav')[0].style.backgroundColor = '#ff3333';
	document.getElementsByTagName('body')[0].style.backgroundColor = '#ff6666';
	
});

/*azul*/
var azul = document.getElementsByClassName('azul')[0];
azul.addEventListener('click', function(){
	document.getElementsByClassName('containerHeader')[0].style.backgroundColor = '#026AA7';
	document.getElementsByTagName('nav')[0].style.backgroundColor = '#0291e3';
	document.getElementsByTagName('body')[0].style.backgroundColor = '#35b4fd';
	
});









