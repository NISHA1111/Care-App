'use strict';
(() => {
  const initial = () => ({view:'V01',address:'',landmark:'',category:null,fixture:'available',received:false,stage:'received',helpOrigin:null,helpContext:'general',helpInvoker:null,confirm:null,confirmInvoker:null,contact:false});
  let state = initial();
  const categories = {standard:{label:'Standard ambulance',eta:'20–30 minutes',fare:'₹1,200'},equipment:{label:'Equipped ambulance',eta:'25–40 minutes',fare:'₹1,800'}};
  const stageKeys = ['received','assigned','arrived'];
  const stages = ['Waiting for assignment','Ambulance assigned','Arrived at pickup'];
  const stageCopy = ['An ambulance has not been assigned yet.','Assignment stage selected in preview controls.','Arrival stage selected in preview controls.'];
  const names = {V01:'Home',V02:'Pickup',V03:'Ambulance options',V04:'Booking review',V05:'Your request',V06:'Request status'};
  const contexts = {general:['How can we help?','Need a hand with pickup details, ambulance options or your request?'],clarification:['Help choosing an ambulance','Compare the two options. Ask a provider about available equipment before choosing.'],unavailable:['Explore another option','You can return to your booking and choose another ambulance type.'],pending:['About your request','Review your details and check the latest request stage.'],status:['Understanding your request status','The highlighted step shows the current request stage.']};
  const $ = selector => document.querySelector(selector);
  const announce = text => { $('#live-status').textContent = text; };
  function clearErrors(){for(const id of ['address-error','category-error']){const node=$('#'+id);node.hidden=true;node.textContent='';}$('#address').removeAttribute('aria-invalid');document.querySelectorAll('[name=category]').forEach(input=>input.removeAttribute('aria-invalid'));}
  function render(){
    document.querySelectorAll('.view').forEach(view=>{view.hidden=view.id!==state.view;});
    $('#global-help').hidden=false;
    const active=state.view==='V01'?'nav-home':state.view==='V07'?'nav-help':'nav-booking';
    document.querySelectorAll('.bottom-nav button').forEach(button=>{button.removeAttribute('aria-current');if(button.id===active)button.setAttribute('aria-current','page');});
    $('#home-pickup').textContent=state.address.trim()||(state.received?'Your request is ready to view':'Where should we pick you up?');
    $('#home-primary').replaceChildren(document.createTextNode(state.received?'View your request':state.address.trim()?'Continue your booking':'Book an ambulance'));
    const arrow=document.createElement('span');arrow.setAttribute('aria-hidden','true');arrow.textContent='→';$('#home-primary').append(arrow);
    document.querySelectorAll('[data-category-fare]').forEach(node=>{node.textContent=categories[node.dataset.categoryFare].fare;});
    document.querySelectorAll('[data-category-eta]').forEach(node=>{node.textContent=categories[node.dataset.categoryEta].eta;});
    const values={address:state.address.trim()||'Not entered',landmark:state.landmark.trim()||'None',category:categories[state.category]?.label||'Not selected',eta:categories[state.category]?.eta||'',fare:categories[state.category]?.fare||''};
    document.querySelectorAll('[data-bind]').forEach(node=>{node.textContent=values[node.dataset.bind];});
    $('.booking-visual img').src=state.category==='equipment'?'assets/care-equipped.png':'assets/care-ambulance.png';
    $('#address').value=state.address;$('#landmark').value=state.landmark;
    document.querySelectorAll('[name=category]').forEach(input=>{input.checked=input.value===state.category;});
    document.querySelectorAll('[name=fixture]').forEach(input=>{input.checked=input.value===state.fixture;});
    $('#available-block').hidden=state.fixture!=='available';$('#unavailable-block').hidden=state.fixture==='available';
    const index=stageKeys.indexOf(state.stage);
    document.querySelectorAll('[data-stage]').forEach((node,i)=>{node.removeAttribute('aria-current');if(i===index)node.setAttribute('aria-current','step');node.querySelector('.stage-label').textContent=i<index?'Completed':i===index?'Current step':'Upcoming';});
    $('#current-stage').textContent=stages[index];$('#stage-copy').textContent=stageCopy[index];$('#receipt-stage').textContent=stages[index];$('#receipt-copy').textContent=stageCopy[index];$('#advance').hidden=index===2;$('#sequence-complete').hidden=index!==2;
    const context=contexts[state.helpContext]||contexts.general;
    if($('#context-heading')) $('#context-heading').textContent=context[0];
    if($('#context-copy')) $('#context-copy').textContent=context[1];
    if($('#return-help')) $('#return-help').textContent='Return to '+(names[state.helpOrigin]||'Home');
    if($('#contact-feedback')){ $('#contact-feedback').hidden=!state.contact;$('#contact-feedback').textContent=state.contact?'Contact options are not connected yet.':''; }
    renderConfirmation();
  }
  function go(view, preserveErrors=false){state.view=view;state.confirm=null;if(!preserveErrors)clearErrors();render();$('#'+view+' h1').focus();window.scrollTo(0,0);}
  function renderConfirmation(){
    document.querySelectorAll('.confirm-slot').forEach(node=>node.replaceChildren());
    if(!state.confirm)return;
    const container=document.createElement('div');container.className='confirmation';
    const title=document.createElement('h2');title.tabIndex=-1;title.id='confirm-question';title.textContent='Start over?';
    const copy=document.createElement('p');copy.textContent='This clears your pickup details, ambulance choice and request status.';
    const keep=document.createElement('button');keep.className='secondary';keep.dataset.action='keep';keep.textContent=state.confirm==='cancel'?'Keep editing':'Keep request';
    const discard=document.createElement('button');discard.className='secondary';discard.dataset.action='discard';discard.textContent='Start over and return home';
    container.append(title,copy,keep,discard);$('#'+state.view+' .confirm-slot').append(container);
  }
  const CHAT_API_URL = 'https://care-chatbot-api.onrender.com/chat';
  function appendChatMessage(sender, text, isError=false){
    const messages=$('#chat-messages');if(!messages)return;
    const msg=document.createElement('div');
    msg.className='chat-msg chat-msg-'+sender+(isError?' chat-msg-error':'');
    const bubble=document.createElement('div');
    bubble.className='chat-bubble';
    const senderName=document.createElement('div');
    senderName.className='chat-sender';
    senderName.textContent=sender==='user'?'You':'Care Assistant';
    const p=document.createElement('p');
    p.textContent=text;
    bubble.append(senderName,p);
    msg.append(bubble);
    messages.append(msg);
    messages.scrollTop=messages.scrollHeight;
  }
  function setChatLoading(isLoading){
    const loading=$('#chat-loading');const sendBtn=$('#chat-send');const input=$('#chat-input');
    if(loading)loading.hidden=!isLoading;
    if(sendBtn)sendBtn.disabled=isLoading;
    if(input)input.disabled=isLoading;
    const messages=$('#chat-messages');if(messages)messages.scrollTop=messages.scrollHeight;
  }
  async function sendChatMessage(rawText){
    const text=(rawText||'').trim();
    if(!text)return;
    appendChatMessage('user',text);
    const input=$('#chat-input');
    if(input)input.value='';
    setChatLoading(true);
    announce('Care Assistant is thinking…');
    try{
      const res=await fetch(CHAT_API_URL,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({message:text})
      });
      if(!res.ok){
        throw new Error('HTTP error '+res.status);
      }
      const data=await res.json();
      if(!data||typeof data.response!=='string'){
        throw new Error('Missing response field in API output');
      }
      setChatLoading(false);
      appendChatMessage('bot',data.response);
      announce('Care Assistant: '+data.response);
    }catch(err){
      setChatLoading(false);
      appendChatMessage('bot','I’m having trouble connecting right now. Please try again.',true);
      announce('I’m having trouble connecting right now. Please try again.');
    }finally{
      const inputEl=$('#chat-input');
      if(inputEl&&!inputEl.disabled)inputEl.focus();
    }
  }
  function resetChat(){
    const messages=$('#chat-messages');
    if(messages){
      messages.replaceChildren();
      appendChatMessage('bot','Hello! I’m your Care Assistant. How can I help you today? Ask me about booking an ambulance, fares, or emergency options.');
    }
    setChatLoading(false);
    const input=$('#chat-input');
    if(input)input.value='';
  }
  $('#address').addEventListener('input',event=>{state.address=event.target.value;document.querySelectorAll('[data-bind=address]').forEach(node=>{node.textContent=state.address.trim()||'Not entered';});if(state.address.trim()){ $('#address-error').hidden=true;$('#address').removeAttribute('aria-invalid');}});
  $('#landmark').addEventListener('input',event=>{state.landmark=event.target.value;document.querySelectorAll('[data-bind=landmark]').forEach(node=>{node.textContent=state.landmark.trim()||'None';});});
  $('#pickup-form').addEventListener('submit',event=>{event.preventDefault();if(!state.address.trim()){const error=$('#address-error');error.textContent='Error: Enter a pickup address.';error.hidden=false;$('#address').setAttribute('aria-invalid','true');$('#address').focus();return;}go('V03');});
  $('#category-form').addEventListener('submit',event=>{event.preventDefault();if(!state.category){const error=$('#category-error');error.textContent='Error: Choose an ambulance, or open help if unsure.';error.hidden=false;document.querySelectorAll('[name=category]').forEach(input=>input.setAttribute('aria-invalid','true'));$('#standard').focus();return;}go('V04');});
  document.querySelectorAll('[name=category]').forEach(input=>input.addEventListener('change',event=>{state.category=event.target.value;clearErrors();}));
  document.querySelectorAll('[name=fixture]').forEach(input=>input.addEventListener('change',event=>{state.fixture=event.target.value;render();announce(state.fixture==='available'?'Estimates shown.':'No options to show.');}));
  const chatForm=$('#chat-form');
  if(chatForm){
    chatForm.addEventListener('submit',event=>{
      event.preventDefault();
      const input=$('#chat-input');
      if(input)sendChatMessage(input.value);
    });
  }
  document.addEventListener('click',event=>{
    const chip=event.target.closest('.chat-chip');
    if(chip&&chip.dataset.question){
      sendChatMessage(chip.dataset.question);
      return;
    }
    const button=event.target.closest('button[data-action]');if(!button)return;
    switch(button.dataset.action){
      case 'start':go(state.received?'V05':'V02');break;
      case 'ride':if(state.received){go('V05');break;}state.category=button.dataset.category;go(state.address.trim()?'V03':'V02');break;
      case 'home':go('V01');break;
      case 'booking':go(state.received?'V05':!state.address.trim()?'V02':state.category?'V04':'V03');break;
      case 'back':go({V02:'V01',V03:'V02',V04:'V03',V06:'V05'}[state.view]||'V01');break;
      case 'edit-pickup':go('V02');break;
      case 'edit-type':go('V03');break;
      case 'submit':if(state.received||!state.address.trim()||!state.category||state.fixture!=='available')return;state.received=true;state.stage='received';go('V05');break;
      case 'tracking':go('V06');break;
      case 'advance':{const index=stageKeys.indexOf(state.stage);if(index<2){state.stage=stageKeys[index+1];render();announce('Preview stage: '+stages[index+1]+'.');if(index+1===2){$('#sequence-complete').setAttribute('tabindex','-1');$('#sequence-complete').focus();}}break;}
      case 'help':if(state.view==='V07'){ $('#V07 h1').focus();break;}state.helpOrigin=state.view;state.helpInvoker=button;state.helpContext=button.dataset.context||(state.view==='V05'?'pending':state.view==='V06'?'status':state.view==='V04'&&state.fixture==='unavailable'?'unavailable':'general');state.contact=false;go('V07',true);break;
      case 'return-help':{const origin=state.helpOrigin||'V01';const invoker=state.helpInvoker;go(origin,true);if(invoker&&invoker.isConnected&&!invoker.hidden)invoker.focus();break;}
      case 'contact':state.contact=true;render();announce('Contact options are not connected yet.');break;
      case 'cancel':case 'reset':state.confirm=button.dataset.action;state.confirmInvoker=button;renderConfirmation();$('#confirm-question').focus();break;
      case 'keep':{const invoker=state.confirmInvoker;state.confirm=null;renderConfirmation();invoker?.focus();break;}
      case 'discard':state=initial();resetChat();$('#live-status').textContent='';go('V01');break;
    }
  });
  render();
})();
