//Тоглогчийн ээлжийг хадгалах хувьсагч 1-р тоглогчийг  0, 2-р тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 1;
//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч 
var scores = [0, 0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог цуглуулах хувьсагч 
var roundScore = 0;
//Шооны аль талаараа цуусанг хадгалах хувьсагч хэрэгтэй, 1-6 гэснэ утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.    
 var dice =  Math.floor(Math.random()*6)+1; // Floor бол бутархай оронг нь унагаана шүү андаа хахах +1 гэж байгаа нь 0 гэсэн тоог гаргахгүйн тулд нэмж оруудсан 
 //document.querySelector('#score-0').textContent = dice; // энд text  мэдээлэл л оруулах боломжтой байдаг.
 //document.querySelector('#score-1').innerHTML = "<em> YES! <EM>"// энд шууд HTML бичиж болно. innerHTML 
 //console.log('Шоо' + dice);
 // Одоо голын шоог хэд байгааг таних код бичнэ гэхдээ дуудах даа img dotroos class-аар дуудна 
 document.querySelector( ".dice ").style.display = "none";
 // dice нь class учраас дуудаж ажиллуулахдаа (цэг) тавьж дуудна.
 // одоо эндээс би шоогоо алга болгоно яаж css-ийн dice гэсэн класс дээр display: none; гэж оруулаад алга болноо
// Эндээс Програм маань эхэллэ шүү найзуудаа
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;