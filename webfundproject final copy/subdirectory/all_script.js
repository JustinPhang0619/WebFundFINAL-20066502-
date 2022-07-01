var objPeople = [
	{
		username: "hello",
		password: "world111"
	},
	{
		username: "hello2",
		password: "world222"
	}	

]

function login() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {	
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert("Welcome " + username);
			document.location.href = "../index.html";	
			return
		}
	}
	alert("incorrect username or password");
}

function signup() {
	var signupUser = document.getElementById('new_username').value
	var signupPassword = document.getElementById('new_password').value
	var signupConfirm = document.getElementById('new_password_confirm').value
	var newUser = {
		username: signupUser,
		password: signupPassword
	}
	for(var i = 0; i < objPeople.length; i++) {

		if(signupUser == objPeople[i].username) {
			alert("Username is taken")
			return
		} else if (signupPassword.length < 8) {
			alert("Invalid password, please choose a password of at least 8 characters")
			return
		} else if (signupPassword != signupConfirm) {
			alert("Passwords do not match")
			return
		} else {
			confirm("Are you sure you want to sign up?")
			objPeople.push(newUser)
			alert("Sign up successful!")
			window.scrollTo(
				{
					top: 0,
					behavior: "smooth"
				}
			)
			return
		}
	}

	
}

function check () {
	var name = document.getElementById('name').value
	var email = document.getElementById('email').value
	var phone = document.getElementById('num').value
	var cnum = document.getElementById('cnum').value
	var exp = document.getElementById('exp').value
	var cvv = document.getElementById('cvv').value

	if(name.length < 5) {
		alert("Invalid name, please enter a name of at least 5 characters!")
	} else if(email.indexOf("@")== -1|| email.length < 8) {
		alert("Invalid email address!") 
	} else if(isNaN(phone)|| phone.length < 10 ) {
		alert("Invalid phone number!")
	} else if (isNaN (cnum)||cnum.length < 16) {
		alert("Invalid credit card number!")
	} else if (exp.length < 5) {
		alert("Invalid expiration date!")
	} else if (isNaN(cvv)||cvv.length < 3) {
		alert("Invalid CVV!")
	} else {
		if (confirm("Are you sure you want to submit?")) {
			alert("Payment successful! Redirecting to main page...")
			document.location.href = "../index.html";
		}
		else{
			alert("Your order has been cancelled!")
		}
		
	}
}