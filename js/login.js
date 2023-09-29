//             step-1  button

document.getElementById("btn-submit").addEventListener("click", function () {
	// console.log("click button it works");

	// step-2 get the email address inside the email input field
	const userEmailField = document.getElementById("user-email");
	// console.log(userEmailField); // <input type="text" id="user-email">
	const email = userEmailField.value;
	// console.log(email);

	// step-3 get password

	const passwordField = document.getElementById("user-password");
	const password = passwordField.value;
	// console.log(email, password);

	// verify Email and password    (Eita eivabey kora thik na)
	//  Step-4
    if(email==='alamin@gmail.com' && password==='alamin'){
        // alert('Login Successfull');
        // console.log('valid user');
        window.location.href = 'bank.html'
    }
    else{
        alert('not valid user');
    }
});
