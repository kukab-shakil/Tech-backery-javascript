
// colorchange end
var b = 0;
var i = 0;
var o = 0;
var c= 0;
var f = 0;
var h = 0;
// apple
let amount = document.getElementById("userAmount");
function applebuttonClick() {
    let fruitmoney=document.getElementById("userAmount").value;

        i++;
        fruittotal= i*500+o*1500+b*700+c*150+f*120+h*80;
        if(fruittotal >fruitmoney){
            alert('insufficient balance for this activity');
        }
        else{
            document.getElementById('apple').value = i;    
            document.getElementById('total').value = fruittotal;

        }

}
function applebuttonminus() {
    let fruitmoney=document.getElementById("userAmount").value;    
    i--;
        fruittotal= i*500+o*1500+b*700+c*150+f*120+h*80;
    if( fruittotal<= 0 ){
    alert('OOooOps Try a valid number');

    }
    else{
        document.getElementById('apple').value = i;    
        document.getElementById('total').value = fruittotal;

    }

}
// apple end
// orange

function orangebuttonClick() {
    let fruitmoney=document.getElementById("userAmount").value;    
        o++;
        fruittotal= i*500+o*1500+b*700+c*150+f*120+h*80;
        if(fruittotal >fruitmoney){
            alert('insufficient balance for this activity');
        }
        else{
            document.getElementById('orangeMinus').value = o;    
            document.getElementById('total').value = fruittotal;

        }
        

}
function orangebuttonminus() {
    
    o--;
    document.getElementById('orangeMinus').value = o;    
    fruittotal= i*500+o*1500+b*700+c*150+f*120+h*80;
    document.getElementById('total').value = fruittotal;
    if( fruittotal<= 0 ){
        alert('OOooOps Try a valid number');
    
        }
        else{
            document.getElementById('orangeMinus').value = o;    
            document.getElementById('total').value = fruittotal;
    
        }

}
// orange end
// banana start

function bananabuttonClick() {
    let fruitmoney=document.getElementById("userAmount").value;
    
        b++;
        fruittotal= i*500+o*1500+b*700;
        if(fruittotal >fruitmoney){
            alert('insufficient balance for this activity');
        }
        else{
            document.getElementById('banana').value = b;    
            document.getElementById('total').value = fruittotal;

        }
        

}
function bananabuttonminus() {
    
    b--;
    fruittotal= i*500+o*1500+b*700+c*150+f*120+h*80;
    if( fruittotal<= 0 ){
        alert('OOooOps Try a valid number');
    
        }
        else{
            document.getElementById('banana').value = b;    
            document.getElementById('total').value = fruittotal;
    
        }

}


// seconsec////////////////////////////////////////////////////////
// colorchange end

// chocco button
function chocobuttonClick() {
    let fruitmoney=document.getElementById("userAmount").value;
    
        c++;
        fruittotal= i*500+o*1500+b*700+c*150+f*120+h*80;
        if(fruittotal >fruitmoney){
            alert('insufficient balance for this activity');
        }
        else{
            document.getElementById('choco').value = c;    
            document.getElementById('total').value = fruittotal;

        }
        

}
function chocobuttonminus() {
    
    c--;
    fruittotal= i*500+o*1500+b*700+c*150+f*120+h*80;
    if( fruittotal<= 0 ){
        alert('OOooOps Try a valid number');
    
        }
        else{
            document.getElementById('banana').value = c;    
            document.getElementById('total').value = fruittotal;
    
        }

}
// fitme///////////////////////////////////////////////////
function fitmebuttonClick() {
    let fruitmoney=document.getElementById("userAmount").value;
    
        f++;
        fruittotal= i*500+o*1500+b*700+c*150+f*120+h*80;
        if(fruittotal >fruitmoney){
            alert('insufficient balance for this activity');
        }
        else{
            document.getElementById('fitme').value = f;    
            document.getElementById('total').value = fruittotal;

        }
        

}
function fitmebuttonminus() {
    
    f--;
    fruittotal= i*500+o*1500+b*700+c*150+f*120+h*80;
    if( fruittotal<= 0 ){
        alert('OOooOps Try a valid number');
    
        }
        else{
            document.getElementById('fitme').value = f;    
            document.getElementById('total').value = fruittotal;
    
        }

}

// hifill//////////////////////
function HifillbuttonClick() {
    let fruitmoney=document.getElementById("userAmount").value;
    
        h++;
        fruittotal= i*500+o*1500+b*700+c*150+f*120+h*80;
        if(fruittotal >fruitmoney){
            alert('insufficient balance for this activity');
        }
        else{
            document.getElementById('Hifill').value = h;    
            document.getElementById('total').value = fruittotal;

        }
        

}
function Hifillbuttonminus() {
    
    h--;
    fruittotal= i*500+o*1500+b*700+c*150+f*120+h*80;
    if( fruittotal<= 0 ){
        alert('OOooOps Try a valid number');
    
        }
        else{
            document.getElementById('Hifill').value = h;    
            document.getElementById('total').value = fruittotal;
    
        }

}


    




