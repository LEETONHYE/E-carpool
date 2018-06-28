function validateForm() {
			var name = document.getElementById("uname");
			var alternate_name = document.forms["myform"]["uname"].vulue;
			var pw = document.getElementById("pw");
			var alternate_pw = document.forms["myform"]["pw"].vulue;
			
			if(name.value.toString().trim() == "") {
				alert("please provide your name to login...");
				return false;
			}
			else if(pw.value.toString().trim() == "") {
				alert("please provide your password to login...");
				return false;
			}
			return true;
			document.cookie = "username=1;password=2";
}

	