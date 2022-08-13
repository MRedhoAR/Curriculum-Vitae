const textElement1 = ['Muh. Redho Arif Rahman'];
const textElement2 = ['Kediri, 08 Maret 1999'];
const textElement3 = ['Jl. Kutisari Utara 2B/6'];
const textElement4 = ['+62 812-3276-0146'];
const textElement5 = ['08m03red99ar@gmail.com'];
let count1 =0;
let count2 =0;
let count3 =0;
let count4 =0;
let count5 =0;
let txtIndex1 =0;
let txtIndex2 =0;
let txtIndex3 =0;
let txtIndex4 =0;
let txtIndex5 =0;
let currentTxt ='';
let words ='';

(function writing1(){
    
    if(count1 == textElement1.length){
        count1 = 0;
    }
    currentTxt = textElement1[count1];
    words = currentTxt.slice(0, ++txtIndex1);
    document.querySelector('.ngetik-nama').textContent = words;

    if(words.length == currentTxt.length){
        count1++;
        txtIndex1 = 0;
    }
    setTimeout(writing1, 300);
})();

(function writing2(){
    
    if(count2 == textElement2.length){
        count2 = 0;
    }
    currentTxt = textElement2[count2];
    words = currentTxt.slice(0, ++txtIndex2);
    document.querySelector('.ngetik-ttd').textContent = words;

    if(words.length == currentTxt.length){
        count2++;
        txtIndex2 = 0;
    }
    setTimeout(writing2, 300);
})();

(function writing3(){
    
    if(count3 == textElement3.length){
        count3 = 0;
    }
    currentTxt = textElement3[count3];
    words = currentTxt.slice(0, ++txtIndex3);
    document.querySelector('.ngetik-alamat').textContent = words;

    if(words.length == currentTxt.length){
        count3++;
        txtIndex3 = 0;
    }
    setTimeout(writing3, 300);
})();

(function writing4(){
    
    if(count4 == textElement4.length){
        count4 = 0;
    }
    currentTxt = textElement4[count4];
    words = currentTxt.slice(0, ++txtIndex4);
    document.querySelector('.ngetik-hp').textContent = words;

    if(words.length == currentTxt.length){
        count4++;
        txtIndex4 = 0;
    }
    setTimeout(writing4, 300);
})();

(function writing5(){
    
    if(count5 == textElement5.length){
        count5 = 0;
    }
    currentTxt = textElement5[count5];
    words = currentTxt.slice(0, ++txtIndex5);
    document.querySelector('.ngetik-email').textContent = words;

    if(words.length == currentTxt.length){
        count5++;
        txtIndex5 = 0;
    }
    setTimeout(writing5, 300);
})();