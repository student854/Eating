for(let j = 1; j<=21; j++ ) {


	let input = document.getElementById("name"+j)
	let output = document.getElementById("list"+j)
	let button = document.getElementById("btn"+j)
	let items = []

	function addItem() {
		let text = input.value
		if (text == "") {
			alert("пусто")
			return
		}
		items.push(text)
		input.value = ""
		renderItems()
	}
	button.addEventListener("click", addItem)

	function renderItems() {
		output.innerHTML = ""
		for (let i = 0; i < items.length; i++) {
			let p = document.createElement("p")
			let k = i+1
			p.textContent = k+" "+items[i]
			output.appendChild(p)
		}
	}
}
let btn = document.getElementById("ready")

function remove() {
	for(let j = 1; j<=21; j++ ){
		let input = document.getElementById("name"+j)
		let button = document.getElementById("btn"+j)
		input.remove()
		button.remove()	
	}
}
btn.addEventListener("click",remove)
















































































