//Тоглогчийн ээлжийг хадгалах хувьсагч 1-р тоглогчийг  0, 2-р тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;
var isNewGame = true;

//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч 
var scores = [0, 0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог цуглуулах хувьсагч 
var roundScore = 0;
//Шооны аль талаараа цуусанг хадгалах хувьсагч хэрэгтэй, 1-6 гэснэ утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.    
 var diceNumber =  Math.floor(Math.random()*6)+1; // Floor бол бутархай оронг нь унагаана шүү андаа хахах +1 гэж байгаа нь 0 гэсэн тоог гаргахгүйн тулд нэмж оруудсан 
 //document.querySelector('#score-0').textContent = dice; // энд text  мэдээлэл л оруулах боломжтой байдаг.
 //document.querySelector('#score-1').innerHTML = "<em> YES! <EM>"// энд шууд HTML бичиж болно. innerHTML 
 //console.log('Шоо' + dice);
 // Одоо голын шоог хэд байгааг таних код бичнэ гэхдээ дуудах даа img dotroos class-аар дуудна 
 document.querySelector( ".dice ").style.display = "none";
 // dice нь class учраас дуудаж ажиллуулахдаа (цэг) тавьж дуудна.
 // одоо эндээс би шоогоо алга болгоно яаж css-ийн dice гэсэн класс дээр display: none; гэж оруулаад алга болноо
 intGame();
 function intGame(){
    isNewGame = true;
    document.getElementById('score-0').textContent = 0;// getElementByID ene bol ID haij bga yumaa hu 
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-"+ activePlayer +"-panel").classList.remove("winner");
    document.querySelector( ".dice ").style.display = "none";
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    

}
// Эндээс Програм маань эхэллэ шүү найзуудаа

var diceDom = document.querySelector( ".dice ");

//заа энд бол event ажиллуулсан байгаа даа хө яаж вэ гэвэл addEventListener('click', blabal ) гээд ажиллуулсан байгаа даа   
document.querySelector('.btn-roll').addEventListener('click', function (){
            if (isNewGame ===true){
            var diceNumber =  Math.floor(Math.random()*6)+1;
    document.querySelector( ".dice ").style.display = "block"// шоог веб джэр гөргөж ирнэ.
    document.querySelector( ".dice ").src = 'dice-' +diceNumber + ".png";// буусан санамсаргүй тооны зургийг гаргаж ирнээ хө.
    if(diceNumber !== 1 ){
        total = roundScore + diceNumber;
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
    else{  
        switchToNextPlayer();
    }
        }
        else{
            alert('New Game darna uu');
        }
        
    
});
    document.querySelector('.btn-hold').addEventListener("click", function(){
        
        if(isNewGame === true){
            scores[activePlayer] = scores[activePlayer] + roundScore;
        document.getElementById('score-' + activePlayer ).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 50 ){
            isNewGame = false;
            document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
            document.querySelector(".player-"+ activePlayer +"-panel").classList.add("winner");
            document.querySelector(".player-"+activePlayer+ "-panel").classList.remove("active");
        }else{
            switchToNextPlayer();
        }
        }
        else{
            alert('togloom duussan tul ta NEW GAME darna uu ')
        }
        
    });
function switchToNextPlayer(){
        roundScore = 0; 
        document.getElementById('current-' + activePlayer).textContent = 0;
        activePlayer === 0 ? (activePlayer = 1):(activePlayer = 0);
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        // document.querySelector( ".dice ").style.display = "none";
}
document.querySelector(".btn-new").addEventListener("click", intGame);
