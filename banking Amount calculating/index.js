const iconn = document.getElementById('icon');
	// const fix = document.getElementById('ff');

	iconn.addEventListener('click', function(){
	const fix = document.getElementById('ff');
	if(fix.style.display === 'none'){
		fix.style.display = 'block';
	}else{
		fix.style.display = 'none';

	}

	})
	

	
	
	










    const deposit_btn = document.getElementById('deposit-btn');
        deposit_btn.addEventListener('click', function(){

            const depositStringToInt = getInputNumb("deposit-amount");

            updateSpanTest("current-deposit", depositStringToInt);
            updateSpanTest("current-balance", depositStringToInt);
            updateSpanTest("total-balance", depositStringToInt);

          
            document.getElementById('deposit-amount').value = "";

        })

        
         const withdraw_btn = document.getElementById('withdraw-btn');
         withdraw_btn.addEventListener('click', function(){
            const withdrawNumb = getInputNumb("withdraw-amount");

            updateSpanTest("current-withdraw", withdrawNumb);
            updateSpanTest("current-balance", -1 * withdrawNumb);
            updateSpanTest("total-balance", -1 * withdrawNumb);

           
            document.getElementById('withdraw-amount').value = "";
        })

        
        function getInputNumb(idName){
            const amount = document.getElementById(idName).value;
            const amountNumber = parseFloat(amount);
            return amountNumber;
        }

        function updateSpanTest(idName, addedNumber){
           
            const current = document.getElementById(idName).innerText;
            const currentStringToInt = parseFloat(current);

            const total = currentStringToInt + addedNumber;

            
            document.getElementById(idName).innerText = total;
        }


const btn11 = document.getElementById('btn1');
const btn2 = document.getElementById('ry');
const bela = document.getElementById('balance');
const depp = document.getElementById('depos');
const dep = document.getElementById('deposite');
const wit = document.getElementById('with');

btn11.addEventListener('click', function(){
	dep.style.display = 'block';
	depp.style.display = 'block';
	bela.style.display = 'block';
})





function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

