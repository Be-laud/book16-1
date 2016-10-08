/*function initBehaviours(){
	var redBt = $("#red")
	var yellowBt = $("#yellow")
	var blueBt = $("#blue")

	function colorRed () {
		$('h1').css('color', 'red')
	}

	function colorYellow () {
		$('h1').css('color', 'yellow')
	}

	function colorBlue () {
		$('h1').css('color', 'blue')
	}

	redBt.on("click", colorRed)
	yellowBt.on("click", colorYellow)
	blueBt.on("click", colorBlue)

}
*/

/*function initBehavioursBetter(){
	function setColor(event){
		var button = $(event.target)
		var color = button.attr('data-color')
		$('h1').css('color', color)
	}

	$('button').on('click', setColor)
}*/

/*function changeClass(){
	function setColor(event){
		var button1 = $(event.target)
		var color = button1.attr('data-color')
		$('h1').removeClass()
		$('h1').addClass(color)
		console.log(color)
	}
	function setColorBox(event){
		var button2 = $(event.target)
		var color2 = button2.attr('data-color')
		$('#r-box').removeClass()
		$('#r-box').addClass(color2)
		console.log(color)
	}

	$('button').on('click', setColor)
	$('#box-red').on('click', setColorBox)
	$('#box-yellow').on('click', setColorBox)
}*/

var fontSelect = $("#fontFamily")
var text = $("#text")
var color = $("#color")
var bgColor1 = $("#bgColor1")
var bgColor2 = $("#bgColor2")
var size = $("#size")
var render = $("#render")

function updateFontFamily() {
	var newFont = fontSelect.val()
	render.css('font-family', newFont)
	console.log(newFont)
}

function updateText() {
	var message = text.val()
	render.html(message)
	console.log(message)
}

function updateColor() {
	var newColor = color.val()
	render.css('color', newColor)
	console.log(newColor)
}

function updatebgColor() {
	var newbgColor1 = bgColor1.val()
	var newbgColor2 = bgColor2.val()
	var gradient = "linear-gradient(to right," + newbgColor1 + "," + newbgColor2 + ")"
	render.css('background', gradient)
	console.log(gradient)
}

function updateSize() {
	var newSize = size.val()
	newSize = newSize + 'px'
	render.css('font-size', newSize)
	console.log(newSize)
}

$("#bold-button").click(function() {
	render.toggleClass("bold")
})

$("#italic-button").click(function() {
	render.toggleClass("italic")
})


fontSelect.on('change', updateFontFamily)
$("#text").on("keyup", updateText)
$("#color").on("change", updateColor)
$("#bgColor1").on("change", updatebgColor)
$("#bgColor2").on("change", updatebgColor)
$("#size").on("change", updateSize)
$("#bold-button").on("click", bold)

        