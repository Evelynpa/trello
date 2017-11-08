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
	buttonList.setAttribute('id', 'guardar');//id

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
	alert('ingrese algo')
}else{
	//crear div
	var articleContainerLeft = document.createElement('div');
		articleContainerLeft.setAttribute('id', 'containerCampoLeft');//id

	//crear label para el valor del input
	var labelText = document.createElement('label');
		labelText.setAttribute('id', 'campoListLeft');//id
	var nodeText = document.createTextNode(textValue);
		labelText.appendChild(nodeText);

	//crear un texarea
	var textArea = document.createElement('textarea');
		textArea.setAttribute('id', 'campoListArea');//id

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
		buttonLeft.setAttribute('id', 'guardar');//id

	//crear icono cerrar
	var closeI = document.createElement('i');
		closeI.classList.add('fa','fa-times');//class

	//elementos ocultos
	textArea.style.display = 'none';
	buttonLeft.style.display = 'none';
	closeI.style.display = 'none';

	//añadir cada elemento creado
	articleContainerLeft.appendChild(labelText);
	articleContainerLeft.appendChild(textArea);
	articleContainerLeft.appendChild(linkNewTarget);
	articleContainerLeft.appendChild(buttonLeft);
	articleContainerLeft.appendChild(closeI);
	containerLeft.insertBefore(articleContainerLeft ,articleContainer);
}
	closeI.addEventListener('click',function(){
				textArea.style.display = 'none';
				buttonLeft.style.display = 'none';
				closeI.style.display = 'none';
				linkNewTarget.style.display = 'block';
		});
	linkNewTarget.addEventListener('click',function(){
				textArea.style.display = 'block';
				buttonLeft.style.display = 'inline-block';
				closeI.style.display = 'inline-block';
				linkNewTarget.style.display = 'none';
		});
	buttonLeft.addEventListener('click',function(){
				var textArea = document.createElement('textarea');
				articleContainerLeft.insertBefore(textArea, buttonLeft);
		});

}

