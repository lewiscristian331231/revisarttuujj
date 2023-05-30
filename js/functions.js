const bodyLogin = document.querySelector("#bodyLogin");
bodyLogin.classList.remove("opacity0");
bodyLogin.classList.add("opacity1");

function layoutIni(){
	const divEmail = document.querySelector("#divEmail");
	divEmail.classList.add('layoutActive');
}

setTimeout(layoutIni,400);

document.querySelector("#btnNextPass").onclick = function(){
	const emailUser= document.querySelector("#emailUser").value;
	const alertEmailLogin = document.querySelector("#alertEmailLogin");
	const spanEmail = document.querySelector("#spanEmail");
	const emailValid = fntEmailValidate(emailUser);

	if(!emailValid){
		alertEmailLogin.innerHTML = '<p style="color:red; font-size: 15px;" >Escribe una dirección de correo electrónico, un número de teléfono o un nombre de Skype válidos.</p>';
		alertEmailLogin.style.display = "block";
	}else{
		alertEmailLogin.style.display = "none";
		spanEmail.innerHTML = emailUser;
		nextLayout('#divEmail','#divPassword')
	}
}

document.querySelector("#btnPrev").onclick =function(){
	prevLayout("#divPassword","#divEmail")
}

document.querySelector("#btnLogin").onclick = function(){

	const strEmailUser = document.querySelector("#emailUser").value;
	const strPassUser = document.querySelector("#passUser").value;

	const alertPass = document.querySelector('#alertPass');

	if(strPassUser == "" || strEmailUser == "")
	{
		alertPass.innerHTML = '<p style="color:red;">Escribe la contraseña de tu cuenta Microsoft.</p>';
		alertPass.style.display = 'block';
	}else{
		alertPass.style.display = 'none';
	}
}

document.querySelector("#linkCreateAcount").onclick = function(e){
	e.preventDefault();
} 

function nextLayout(parent,next) {
	// body...
	const divParent = document.querySelector(parent);
	const divNext = document.querySelector(next);
	divParent.classList.remove('layoutLeft','layoutRight','layoutActive');
	divNext.classList.remove('layoutLeft','layoutRight','layoutActive');

	divParent.classList.toggle('layoutLeft');
	divNext.classList.toggle('layoutActive');
}


function prevLayout(parent,prev) {
	// body...
	const divParent = document.querySelector(parent);
	const divPrev = document.querySelector(prev);
	divParent.classList.remove('layoutLeft','layoutRight','layoutActive');
	divPrev.classList.remove('layoutLeft','layoutRight','layoutActive');

	divParent.classList.toggle('layoutRight');
	divPrev.classList.toggle('layoutActive');
}



function fntEmailValidate(email){
	const stringEmail = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
	if (stringEmail.test(email) == false){
		return false;
	}else{
		return true;
	}
}

