const screens = [...document.querySelectorAll('.screen')];
  const progress = document.getElementById('progress');
  const storyPages = ['page1','page2','page3','page4','page5','page6','page7'];
  storyPages.forEach((_,i)=>{const dot=document.createElement('span');dot.className='dot'+(i===0?' on':'');progress.appendChild(dot)});
  function showPage(n){
    screens.forEach(s=>s.classList.remove('active'));
    document.getElementById('page'+n).classList.add('active');
    [...progress.children].forEach((d,i)=>d.classList.toggle('on',i===n-1));
    progress.style.display = n === 'heartbreakPage' ? 'none' : 'flex';
    if(n===1) document.getElementById('page1Message').textContent='';
    window.scrollTo({top:0,behavior:'smooth'});
  }
  function knowBirthday(){showPage(2);startConfetti(90)}
  function dontKnow(){document.getElementById('page1Message').textContent='There is no way to ignoring this dear 😏 Try the other option!';document.getElementById('page1Message').style.color='#b23d69';}
  function startConfetti(count=50){
    const colors=['#e85d91','#f7a8c4','#795548','#2b2025','#fffdfd','#e8b9cc'];
    for(let i=0;i<count;i++){
      const piece=document.createElement('span');piece.className='confetti';
      piece.style.left=Math.random()*100+'vw';piece.style.background=colors[Math.floor(Math.random()*colors.length)];
      piece.style.borderRadius=Math.random()>.5?'50%':'2px';
      piece.style.animationDuration=(2.5+Math.random()*3)+'s';
      piece.style.animationDelay=(Math.random()*.8)+'s';
      piece.style.transform=`rotate(${Math.random()*360}deg)`;
      document.body.appendChild(piece);setTimeout(()=>piece.remove(),6500);
    }
  }
  function openEnvelope(){
    document.getElementById('envelope').classList.add('open');
    document.getElementById('envelopeHint').textContent='A little love is waiting inside 💗';
    document.getElementById('letterNext').classList.remove('hidden');
    startConfetti(18);
  }
  function noMoney(){
    document.getElementById('choiceMessage').textContent='There is no way of running without giving the treat 😏';
    document.getElementById('choiceMessage').style.color='#b23d69';
  }
  function resetToChoices(){
    document.getElementById('choiceMessage').textContent='Your Jelato vai has one tiny request. What will it be? 😏';
    document.getElementById('choiceMessage').style.color='';
    document.getElementById('treatChoices').classList.remove('hidden');
    document.getElementById('heartChoices').classList.add('hidden');
  }
  function heartbreak(){
    showPage('heartbreakPage');
    startConfetti(20);
  }
  function confirmDate(){
    const input=document.getElementById('treatDate');
    const error=document.getElementById('dateError');
    if(!input.value){error.textContent='Please choose a date first 🥺';return;}
    const date=new Date(input.value+'T12:00:00');
    const formatted=date.toLocaleDateString(undefined,{weekday:'long',year:'numeric',month:'long',day:'numeric'});
    document.getElementById('chosenDateText').textContent='Treat date selected: '+formatted+' 🍰';
    error.textContent='';showPage(7);startConfetti(55);
  }
  // Date input starts at today's date, but the user may choose any date.
  document.getElementById('treatDate').value=new Date().toLocaleDateString('en-CA');
