$(document).ready(function(){


var songs=[{
	title:"I Know Places",
	artist: "Taylor Swift",
	fileName:"12 I Know Places.m4a"},{
		title:"Bad Things",
		artist:"Machine Gun Kelly (feat. Camila Cabello)",
		fileName:"01 Bad Things.m4a"},{
		title: "I Don't Want To Live Forever",
		artist: "Zayn (feat Taylor Swift)",
		fileName:"01 I Don_t Wanna Live Forever (Fifty Shades Darker).m4a"},{
		title: "Shriner",
		artist: "Indian Summer (feat. Gringer and the Ghost)",
		fileName:"01 Shiner (feat. Ginger and the Ghost).m4a"},{
		title:"Issues",
		artist:"Julia Michaels",
		fileName:"01 Issues.m4a"},{
		title:"Hymn for the Weekend",
		artist:"Coldplay (feat. Beyonce)",
		fileName:"03 Hymn for the Weekend.m4a"}];

var currentIndex=1;


$('#play').click(function(){
	var player = $('#player')[0];
	player.play();
	$('#title').text( songs[currentIndex].title);
	$('#artist').text(songs[currentIndex].artist);
	
});

$('#pause').click(function(){
	var player = $('#player')[0];
	player.pause();
})
$("#back").click(function(){
	var player = $('#player')[0];
		// $('#title').text( songs[currentIndex].title);
		// 	$('#artist').text(songs[currentIndex].artist);

	currentIndex--;
	if(currentIndex < 0 ){
		currentIndex=songs.length-1;		
	};

	$('audio').attr("src", songs[currentIndex].fileName);
	$('#title').text( songs[currentIndex].title);
	$('#artist').text(songs[currentIndex].artist);
	player.play();
});



$("#next").click(function(){
	var player = $('#player')[0];

	
	currentIndex++;
	if(currentIndex >= songs.length) {
		currentIndex=0;
	};
	$('audio').attr("src", songs[currentIndex].fileName);
	$('#title').text( songs[currentIndex].title);
	$('#artist').text(songs[currentIndex].artist);
	player.play();
		
});
$('#p1').click(function(){
	var player = $('#player')[0];
	player.play();
});

});
// $('#artist').text(songs[currentIndex].artist){
// var player = $('#player')[0];
// 	player.play();
// };
// $('#title').text(songs[currentIndex.title]){
// 	var player = $('#player')[0];
// 	player.play();
// };



// var player= $('#player2')[0];
// 	player.play();


// $('#play').click(function(){
//     var $this = $(this);
//     var id = $this.attr('id').replace(/button/, 'Play');
//     $this.toggleClass('active');
//     if($this.hasClass('active')){
//         $this.text('pause'); 
//         $('audio[id^="player"]')[0].play();        
//     } else {
//         $this.text('play');
//         $('audio[id^="player"]')[0].pause();
//     }
// });


















// console.log($('.snuffles').length);
// console.log($('.porky').length);
// console.log($('.snuffles').length);
// console.log($('#piglet'));
// console.log($('#tony'));
// console.log($(' .snuffles .porky ').length);

// console.log($('#tony').attr('title','Smoked'));

// var myLi = document.createElement('li')
// myLi.innerText= "Hickory"
// $('ul').append(myLi);


// console.log($('#background').prepend('h4');

// console.log($('#piglet').text('Piglet Hacked This Element');

// $( "p" ).click(function(event) {
//   $( "p" ).toggle( "slow" );
// });

// $( "p" ).hover(
//   function() {
//     $( this ).addClass( "hover" );
//   }, function() {
//     $( this ).removeClass( "hover" );
//   }
// );