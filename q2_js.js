async function getData() {
	res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	data = await res.json();
	// console.log(data);

	arr = data["data"];

	arr.sort((a, b) => {
		return a.id - b.id;
	});

	for (var item in arr) {
		console.log(arr[item].id + " " + arr[item].name);
	}
}

getData();
