//your JS code here. If required.
let table = document.getElementById('output');

let promise1 = new Promise ((resolve, reject) => {
	let time = Math.random() * (3 - 1) + 1;
	setTimeout(() => {
		resolve({name: "promise1",time});
	}, time*1000);
});

let promise2 = new Promise ((resolve, reject) => {
	let time = Math.random() * (3 - 1) + 1;
	setTimeout(() => {
		resolve({name: "promise2",time});
	}, time*1000);
});

let promise3 = new Promise ((resolve, reject) => {
	let time = Math.random() * (3 - 1) + 1;
	setTimeout(() => {
		resolve({name: "promise3",time});
	}, time*1000);
});


Promise.all([promise1, promise2, promise3])
	.then((data) => {
		table.innerHTML = "";
		console.log("all resolved");
		data.forEach((element) => {
			table.innerHTML += `
				<tr>
					<td>${element.name}</td>
					<td>${Math.floor(element.time)}</td>
				</tr>
			`;
		});
		let total = Math.max(...data.map(r => r.time));
		table.innerHTML += `
			<tr>
				<td>Total</td>
				<td>${total.toFixed(3)}</td>
			</tr>
		`;
	})
	.catch(err => {
		console.log('err');
	})