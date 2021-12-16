const fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then((res) => res.json())
	.then((data) => {
		arr = data["data"];

		arr.sort((a, b) => {
			return a.id - b.id;
		});

		for (var item in arr) {
			console.log(arr[item].id + " " + arr[item].name);
		}
	});
