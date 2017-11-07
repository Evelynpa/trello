//crear nuevo elemento
	var articleContainer = document.createElement('article');
	//crear input
	var inputText = document.createElement('input');
	inputText.setAttribute('placeholder', 'Añadir una lista...');

	//crear nuevo elemento
	var linkNewTarget = document.createElement('a');
	var textTarget = document.createTextNode('Añadir una targeta');
	linkNewTarget.appendChild(textTarget);

	//crear boton
	var buttonList = document.createElement('button');
		var textButton = document.createTextNode('Guardar');
		buttonList.appendChild(textButton);

	//crear elemento i
	var closeI = document.createElement('i');


function createList(){
	//var text = document.getElementById('textCreateList').value;

		articleContainer.setAttribute('id', 'containerCampo');//id

		inputText.setAttribute('id', 'campoList');//id
		
		linkNewTarget.setAttribute('id', 'linkTarget');//id

		buttonList.setAttribute('id', 'guardar');//id

		closeI.classList.add('fa','fa-times');//class


	//añadir cada elemento creado
	articleContainer.appendChild(inputText);
	articleContainer.appendChild(linkNewTarget);
	articleContainer.appendChild(buttonList);
	articleContainer.appendChild(closeI);

	containerLeft.appendChild(articleContainer);

	//esconder span
	spanButton.style.display = 'none';

	//esconder a
	linkNewTarget.style.display = 'none';


	buttonList.addEventListener('click',function(){
			buttonList.style.display = 'none';
			linkNewTarget.style.display = 'inline-block';
	});
}
var spanButton = document.getElementById('botonClick');
spanButton.addEventListener('click', createList);

//PRESIONAR BOTON GUARDAR
/*function guardarList(){

	//obtener valor de campo
	var valorTextList = document.getElementById('campoList').value;

	//crear nuevo elemento
	var articleContainerRigth = document.createElement('article');
		articleContainerRigth.setAttribute('id', 'containerCampoRigth');//id

	//crear input
	var inputText = document.createElement('input');
		inputText.setAttribute('id', 'campoListRigth');//id
		inputText.setAttribute('placeholder', 'Añadir una lista...');

	//crear boton
	var buttonListRigth = document.createElement('button');
		buttonListRigth.setAttribute('id', 'guardarRigth');//id
	var textButton = document.createTextNode('Guardar');
	buttonListRigth.appendChild(textButton);

	//crear elemento i
	var closeI = document.createElement('i');
		closeI.classList.add('fa','fa-times');//class

	//añadir cada elemento creado
	articleContainerRigth.appendChild(inputText);
	articleContainerRigth.appendChild(buttonListRigth);
	articleContainerRigth.appendChild(closeI);
	containerLeft.appendChild(articleContainerRigth);

	buttonList.style.display = 'none';
	linkNewTarget.style.display = 'inline-block';
	//agregar 'a' al containerCampo 
	//articleContainer.appendChild(linkNewTarget);
}*/

