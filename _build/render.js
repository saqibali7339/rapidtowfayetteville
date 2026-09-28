// Renderer: turns PAGES into static HTML. Run via build script.
var SITE='https://rapidtowfayetteville.com';
var NUM='(910) 555-0142', TEL='+19105550142';

function R(depth){return depth?'../':'';}
function href(depth,slug){return R(depth)+(slug?slug+'/':'')+'index.html';}
function fixLinks(s,depth){return s.replace(/\{\{p:([^}]+)\}\}/g,function(_,sl){return href(depth,sl);}).replace(/\{\{cost\}\}/g,href(depth,'towing-cost-fayetteville-nc'));}
function strip(s){return s.replace(/<[^>]+>/g,'');}

function header(p,d){
 var nav=[['','Home','home'],['24-hour-towing-fayetteville-nc','24-Hour Towing','24'],['service-area','Service Area','area'],['about','About','about'],['contact','Contact','contact']];
 return '<div class="stripe thin"></div><header class="hdr"><div class="wrap">'+
 '<a class="logo" href="'+href(d,'')+'"><span class="logo-a">Rapid Tow</span><span class="logo-b">FAYETTEVILLE NC</span></a>'+
 '<nav class="nav">'+nav.map(function(n){return '<a href="'+href(d,n[0])+'"'+((p.slug===n[0])?' class="cur"':'')+'>'+n[1]+'</a>';}).join('')+'</nav>'+
 '<span class="open"><i></i>Open 24 Hours</span>'+
 '<a class="hdr-call" data-call="header" href="tel:'+TEL+'"><small>Call now · 24/7</small><b data-num>'+NUM+'</b></a>'+
 '<button class="menu-btn" aria-expanded="false">Menu</button></div></header>'+
 '<div class="menu"><div class="wrap"><div class="menu-cols">'+
 '<div><h4>Services</h4>'+SERVICES.slice(0,8).map(function(s){return '<a href="'+href(d,s[0])+'">'+s[1]+'</a>';}).join('')+'</div>'+
 '<div><h4>Towns</h4>'+TOWNS.map(function(t){return '<a href="'+href(d,t[0])+'">'+(t[0]==='service-area'?'All service areas':t[1])+'</a>';}).join('')+'</div>'+
 '<div><h4>Company</h4><a href="'+href(d,'')+'">Home</a><a href="'+href(d,'about')+'">About</a><a href="'+href(d,'contact')+'">Contact / Quote</a><a href="'+href(d,'towing-cost-fayetteville-nc')+'">Towing prices</a></div>'+
 '</div></div></div>';
}

function crumbs(p,d){
 if(!p.slug)return '';
 var mid='';
 if(p.town)mid='<a href="'+href(d,'service-area')+'">Service area</a> / ';
 return '<div class="wrap crumbs"><a href="'+href(d,'')+'">Towing Fayetteville NC</a> / '+mid+'<span>'+(p.name||strip(p.h1))+'</span></div>';
}

function bigcall(where){return '<a class="bigcall" data-call="'+where+'" href="tel:'+TEL+'"><span class="bc-l"><span>Tap to call · 24/7</span><b>Real person</b></span><span class="bc-n" data-num>'+NUM+'</span></a>';}

function locate(){return '<div class="locate"><h3>Not sure where you are?</h3><ol>'+
 '<li><span><b>Get safe first.</b> Hazards on. On a highway, exit on the side away from traffic.</span></li>'+
 '<li><span><b>Find a marker.</b> Exit number, green mile marker on I-95, cross street, or a business sign.</span></li>'+
 '<li><span><b>Or use GPS.</b> Tap below and read the numbers to dispatch.</span></li></ol>'+
 '<button class="loc-btn" data-locate>Show my GPS location</button><div class="loc-out"></div></div>';}

function hero(p,d){
 var side=(p.kind==='legal')?'':'<div class="hero-side">'+locate()+'</div>';
 var meta='<div class="hero-meta"><span>Answered 24 hrs</span><span>Price before dispatch</span><span>Not urgent? <a href="#quote">Get a quote</a></span></div>';
 return '<section class="hero"><div class="wrap hero-g"><div><div class="eyebrow">'+p.eyebrow+'</div><h1>'+p.h1+'</h1>'+(p.lede?'<p class="lede">'+fixLinks(p.lede,d)+'</p>':'')+(p.kind==='legal'?'':bigcall('hero')+meta)+'</div>'+side+'</div></section>';
}

function safety(p){
 if(!p.safety)return '';
 var items=p.safety==='lock'?
  ['<b>Child or pet inside on a hot day?</b> Call 911 now. Don’t wait for a tow truck.','<b>Have ID ready</b> — the driver has to confirm it’s your car.','<b>Stay with the car</b> so the driver can find you.']:
  ['<b>Anyone hurt, or a car in a live lane?</b> Call 911 first.','<b>Get out on the side away from traffic</b> and stand behind the guardrail, not between cars.','<b>Hazards on.</b> At night, leave the dome light on if you stay inside.','<b>Don’t try to change a tire</b> inches from I-95 or All American traffic.'];
 return '<section class="sec alt"><div class="wrap split"><div class="sec-h"><div class="kicker">Before you do anything</div><h2>Get <em>safe</em>, then call.</h2></div><ul class="check">'+items.map(function(i){return '<li><span>'+i+'</span></li>';}).join('')+'</ul></div></section>';
}

function when(p,d){
 if(!p.when)return '';var w=p.when;
 return '<section class="sec"><div class="wrap"><div class="sec-h"><div class="kicker">'+w.k+'</div><h2>'+w.h+'</h2></div><div class="cards">'+
 w.cards.map(function(c){return '<div class="card"><h3>'+c[0]+'</h3><p>'+c[1]+(c[2]?' <a href="'+href(d,c[2])+'">'+c[3]+'</a>':'')+'</p></div>';}).join('')+'</div></div></section>';
}

function steps(){
 return '<section class="sec alt"><div class="wrap split"><div class="sec-h"><div class="kicker">How the call goes</div><h2>Four steps. <em>No surprises.</em></h2><p>Whoever picks up should do all four. If they don’t, hang up and call someone else — including us.</p></div><ol class="steps">'+
 '<li><div><b>You say where</b><span>Exit, cross street, business name, or GPS numbers. And what’s wrong with the car.</span></div></li>'+
 '<li><div><b>You hear the ETA and price</b><span>A real time estimate and the total, before a truck is sent.</span></div></li>'+
 '<li><div><b>Driver confirms on arrival</b><span>Same price you heard on the phone. You check the truck before your car goes on it.</span></div></li>'+
 '<li><div><b>Car goes where you say</b><span>Your shop, your home, a dealer, or storage. You get a receipt for insurance.</span></div></li></ol></div></section>';
}

function local(p){
 if(!p.local)return '';var L=p.local;
 return '<section class="sec"><div class="wrap"><div class="sec-h"><div class="kicker">Local roads</div><h2>'+L.h+'</h2></div><p class="local-p">'+L.p+'</p><div class="roads">'+
 L.groups.map(function(g){return '<div><h4>'+g[0]+'</h4><ul class="chips">'+g[1].map(function(x){return '<li'+(g[2]?' class="hw"':'')+'>'+x+'</li>';}).join('')+'</ul></div>';}).join('')+'</div></div></section>';
}

function services(p,d,title){
 var list=SERVICES.filter(function(s){return s[0]!==p.slug;});
 return '<section class="sec alt"><div class="wrap"><div class="sec-h"><div class="kicker">Services</div><h2>'+(title||'Every kind of tow in <em>Fayetteville</em>')+'</h2></div><div class="svc">'+
 list.map(function(s,i){return '<a href="'+href(d,s[0])+'"><span class="n">'+String(i+1).padStart(2,'0')+'</span><span class="t">'+s[1]+'<span class="d">'+s[2]+'</span></span><span class="ar">→</span></a>';}).join('')+'</div></div></section>';
}

function towns(p,d){
 return '<section class="sec"><div class="wrap"><div class="sec-h"><div class="kicker">Service area</div><h2>Fayetteville &amp; the <em>towns around it</em></h2></div><div class="towns">'+
 TOWNS.map(function(t){return '<a href="'+href(d,t[0])+'"'+(t[0]===p.slug?' class="here"':'')+'><b>'+t[1]+'</b><span>'+t[2]+'</span></a>';}).join('')+'</div></div></section>';
}

function honest(){
 return '<section class="honest"><div class="wrap"><div><div class="kicker" style="color:#141518">What you won’t find here</div><h2>No <em>fake reviews.</em> No made-up years.</h2></div><ul>'+
 '<li><span><b>No testimonials we wrote ourselves.</b> When real customers leave reviews, they’ll show up here with their names.</span></li>'+
 '<li><span><b>No “serving Fayetteville for 20 years.”</b> We tell you what we do, not how long we claim to have done it.</span></li>'+
 '<li><span><b>No “from $49” bait price.</b> You get the real total on the phone, before dispatch.</span></li>'+
 '<li><span><b>No stock-photo crew.</b> The photos here will be the actual truck, on actual Fayetteville streets.</span></li></ul></div></section>';
}

function faq(p,d){
 if(!p.faq||!p.faq.length)return '';
 return '<section class="sec alt"><div class="wrap split"><div class="sec-h"><div class="kicker">Questions</div><h2>Straight <em>answers</em></h2></div><div class="faq">'+
 p.faq.map(function(f,i){return '<details'+(i===0?' open':'')+'><summary>'+f.q+'</summary><div class="a">'+fixLinks(f.a,d)+'</div></details>';}).join('')+'</div></div></section>';
}

function quote(p,d){
 var opts=['Tow — car won’t drive','Flatbed tow','Accident / wreck','Jump start','Lockout','Flat tire','Out of gas','Winch-out','Motorcycle','Long-distance','PCS / military move'];
 return '<section class="sec" id="quote"><div class="wrap quote-g"><div class="sec-h"><div class="kicker">Not an emergency?</div><h2>Get a <em>quote</em> by text</h2><div class="quote-note"><p>Scheduled tow, PCS move, long-distance run, or a car that’s been sitting? Send the details and we’ll text back a price.</p><p><b>Stranded right now? Don’t fill out a form.</b> <a class="mono" style="color:var(--y)" data-call="quote-side" href="tel:'+TEL+'"><span data-num>'+NUM+'</span></a></p></div></div>'+
 '<div><form class="form" data-quote><div class="row"><label>Your name<input name="name" autocomplete="name" required></label><label>Mobile number<input name="phone" type="tel" autocomplete="tel" inputmode="tel" required></label></div>'+
 '<label>What do you need?<select name="service">'+opts.map(function(o){return '<option>'+o+'</option>';}).join('')+'</select></label>'+
 '<div class="row"><label>Pickup (street, exit, or landmark)<input name="from" placeholder="e.g. Skibo Rd by Cross Creek Mall"></label><label>Drop-off<input name="to" placeholder="e.g. shop on Bragg Blvd"></label></div>'+
 '<label>Vehicle<input name="vehicle" placeholder="Year, make, model — note if AWD or EV"></label>'+
 '<label style="gap:8px">When<div class="seg"><label><input type="radio" name="when" value="ASAP" checked><span>ASAP</span></label><label><input type="radio" name="when" value="Today"><span>Today</span></label><label><input type="radio" name="when" value="Schedule"><span>Schedule</span></label></div></label>'+
 '<button class="submit" type="submit">Text me a price</button><small>We’ll only use your number to reply about this tow. <a href="'+href(d,'privacy')+'">Privacy</a>.</small></form>'+
 '<div class="sent"><h3>Got it.</h3><p>We’ll text you a price shortly. If things change and you need a truck now, call <a data-call="quote-sent" href="tel:'+TEL+'"><span data-num>'+NUM+'</span></a>.</p></div></div></div></section>';
}

function backHome(p,d){
 if(!p.slug)return '';
 return '<div class="wrap" style="padding-bottom:48px"><a class="back" href="'+href(d,'')+'"><small>Back to main page</small><b>Towing in <em>Fayetteville</em>, NC →</b></a></div>';
}

function footer(d){
 return '<div class="stripe"></div><footer class="ftr"><div class="wrap"><div class="ftr-g"><div><a class="logo" href="'+href(d,'')+'"><span class="logo-a">Rapid Tow</span><span class="logo-b">FAYETTEVILLE NC</span></a><p>24-hour towing for Fayetteville, Cumberland County, and the Hoke County side toward Raeford.</p><a class="ftr-call" data-call="footer" href="tel:'+TEL+'"><span data-num>'+NUM+'</span></a><p style="margin-top:8px"><span class="open"><i></i>Open 24 Hours</span></p></div>'+
 '<div class="ftr-cols"><div><h4>Services</h4><ul>'+SERVICES.map(function(s){return '<li><a href="'+href(d,s[0])+'">'+s[1]+'</a></li>';}).join('')+'</ul></div>'+
 '<div><h4>Towns</h4><ul>'+TOWNS.map(function(t){return '<li><a href="'+href(d,t[0])+'">'+(t[0]==='service-area'?'Service area hub':'Towing '+t[1])+'</a></li>';}).join('')+'</ul></div>'+
 '<div><h4>Company</h4><ul><li><a href="'+href(d,'')+'">Towing Fayetteville NC</a></li><li><a href="'+href(d,'about')+'">About</a></li><li><a href="'+href(d,'contact')+'">Contact &amp; quote</a></li><li><a href="'+href(d,'towing-cost-fayetteville-nc')+'">Towing prices</a></li><li><a href="'+href(d,'privacy')+'">Privacy</a></li></ul></div></div></div>'+
 '<div class="legal"><span>© 2026 rapidtowfayetteville.com</span><span>Calls may be recorded for quality and lead tracking.</span><span>Serving 28301–28314 · Cumberland &amp; Hoke Co.</span></div></div></footer>'+
 '<a class="callbar" data-call="sticky" href="tel:'+TEL+'"><span class="cb-dot"></span><span class="cb-t"><small>Tap to call · Open 24 hrs</small><b data-num>'+NUM+'</b></span></a>';
}

function schema(p){
 var url=SITE+'/'+(p.slug?p.slug+'/':'');
 var biz={'@context':'https://schema.org','@type':['AutomotiveBusiness','EmergencyService'],'@id':SITE+'/#business','name':'Rapid Tow Fayetteville','url':SITE+'/','telephone':TEL,
  'openingHoursSpecification':{'@type':'OpeningHoursSpecification','dayOfWeek':['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],'opens':'00:00','closes':'23:59'},
  'areaServed':['Fayetteville, NC','Spring Lake, NC','Hope Mills, NC','Raeford, NC','Fort Bragg, NC','Eastover, NC','Stedman, NC'].map(function(n){return {'@type':'City','name':n};}),
  'geo':{'@type':'GeoCoordinates','latitude':35.0527,'longitude':-78.8784},'priceRange':'Quoted by phone'};
 var out=[biz];
 if(p.service||p.town){out.push({'@context':'https://schema.org','@type':'Service','name':(p.service||'Towing')+(p.town?' in '+p.name+', NC':' in Fayetteville, NC'),'serviceType':p.service||'Towing','provider':{'@id':SITE+'/#business'},'areaServed':{'@type':'City','name':(p.town?p.name:'Fayetteville')+', NC'},'url':url});}
 if(p.faq&&p.faq.length)out.push({'@context':'https://schema.org','@type':'FAQPage','mainEntity':p.faq.map(function(f){return {'@type':'Question','name':f.q,'acceptedAnswer':{'@type':'Answer','text':strip(f.a.replace(/\{\{[^}]+\}\}/g,''))}};})});
 if(p.slug){var items=[{'@type':'ListItem','position':1,'name':'Towing Fayetteville NC','item':SITE+'/'}];if(p.town)items.push({'@type':'ListItem','position':2,'name':'Service area','item':SITE+'/service-area/'});items.push({'@type':'ListItem','position':items.length+1,'name':p.name||strip(p.h1),'item':url});out.push({'@context':'https://schema.org','@type':'BreadcrumbList','itemListElement':items});}
 return out.map(function(o){return '<script type="application/ld+json">'+JSON.stringify(o)+'</script>';}).join('\n');
}

function body(p,d){
 var h='';
 switch(p.kind){
 case 'hub':
  h+=towns(p,d)+
  '<section class="sec alt"><div class="wrap"><div class="sec-h"><div class="kicker">Fayetteville neighborhoods</div><h2>Every part of <em>the city</em></h2></div><ul class="chips">'+p.hoods.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul><div class="sec-h" style="margin-top:40px"><div class="kicker">Zip codes</div></div><ul class="chips">'+p.zips.map(function(x){return '<li class="hw">'+x+'</li>';}).join('')+'</ul></div></section>'+
  services(p,d)+faq(p,d);break;
 case 'guide':
  h+='<section class="sec"><div class="wrap split"><div class="sec-h"><div class="kicker">What goes into the price</div><h2>Five things that <em>move the number</em></h2></div><ol class="steps">'+
  '<li><div><b>Hookup</b><span>The base charge to put your car on the truck.</span></div></li><li><div><b>Mileage</b><span>Skibo to Bragg Blvd is short. Raeford to Raleigh is not.</span></div></li><li><div><b>Truck type</b><span>Flatbed vs. wheel-lift, and whether a winch is needed.</span></div></li><li><div><b>Time</b><span>Some operators charge more after hours or on holidays — ask.</span></div></li><li><div><b>Storage</b><span>If it sits in a lot, storage can be charged by the day.</span></div></li></ol></div></section>'+
  '<section class="sec alt"><div class="wrap split"><div class="sec-h"><div class="kicker">Ask these on the phone</div><h2>Before you say <em>“send it”</em></h2></div><ul class="check"><li><span><b>“What’s the total?”</b> Not the hookup — the total.</span></li><li><span><b>“Any after-hours or mileage charge?”</b></span></li><li><span><b>“Flatbed or wheel-lift?”</b> Say if it’s AWD or EV.</span></li><li><span><b>“Do you take card?”</b></span></li><li><span><b>“Will I get a receipt for insurance?”</b></span></li></ul></div></section>'+faq(p,d)+services(p,d);break;
 case 'about':
  h+='<section class="sec"><div class="wrap split"><div class="sec-h"><div class="kicker">What we are</div><h2>Straight about <em>how this works</em></h2></div><div class="cards" style="grid-template-columns:1fr"><div class="card"><h3>A 24-hour towing line</h3><p>When you call this number, it rings through to a local towing operator working the Fayetteville area. Calls are tracked and may be recorded so we can make sure every one gets answered.</p></div>'+
  '<div class="card"><h3>Who shows up</h3><p>The operator currently answering this line:</p><div class="fill" style="margin-top:12px"><b>Operator details</b>Company name · NC business registration · insurance carrier · truck photos — added by the operating tow company.</div></div>'+
  '<div class="card"><h3>What we promise</h3><p>A real person answers. You hear the price before dispatch. The car goes where you tell us. That’s the whole list.</p></div></div></div></section>'+honest()+towns(p,d);break;
 case 'contact':
  h+='<section class="sec"><div class="wrap"><div class="cards three"><div class="card"><span class="tag">Fastest</span><h3>Call</h3><p>24 hours, every day. <a data-call="contact-card" href="tel:'+TEL+'"><span data-num>'+NUM+'</span></a></p></div><div class="card"><span class="tag">Not urgent</span><h3>Quote form</h3><p>Scheduled, PCS, long-distance. <a href="#quote">Fill it out →</a></p></div><div class="card"><span class="tag">Where</span><h3>Service area</h3><p>Fayetteville, Spring Lake, Hope Mills, Raeford and around. <a href="'+href(d,'service-area')+'">See map of towns →</a></p></div></div></div></section>';break;
 case 'legal':
  h+='<section class="sec"><div class="wrap" style="max-width:760px;color:#cfcec8"><p><b style="color:var(--ink)">Call tracking.</b> Phone numbers on this site are tracking numbers. Calls may be recorded and are logged (time, duration, caller number) to measure service and route calls to the operating tow company.</p><br><p><b style="color:var(--ink)">Quote form.</b> Details you submit are sent to the operating tow company only to reply about your request. We don’t sell your information.</p><br><p><b style="color:var(--ink)">Location.</b> The “Show my GPS” button reads your location on your device only; it isn’t sent anywhere unless you read it to dispatch.</p></div></section>';break;
 default:
  h+=safety(p)+when(p,d)+(p.slug?'':steps())+local(p)+(p.slug?'':honest())+services(p,d, p.town?'Towing services in <em>'+p.name+'</em>':null)+(p.slug?steps():'')+(p.town||!p.slug?'':'')+towns(p,d)+faq(p,d);
 }
 return h+quote(p,d)+backHome(p,d);
}

function renderPage(p){
 var d=p.slug?1:0;
 var canon=SITE+'/'+(p.slug?p.slug+'/':'');
 return '<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'+
 '<title>'+p.title+'</title><meta name="description" content="'+p.desc+'">'+
 (p.kind==='legal'?'<meta name="robots" content="noindex">':'')+
 '<link rel="canonical" href="'+canon+'"><meta name="theme-color" content="#141518">'+
 '<meta property="og:title" content="'+p.title+'"><meta property="og:description" content="'+p.desc+'"><meta property="og:url" content="'+canon+'"><meta property="og:type" content="website">'+
 '<meta name="geo.region" content="US-NC"><meta name="geo.placename" content="Fayetteville">'+
 '<!-- target keywords: '+(p.kw||[]).join(' | ')+' -->'+
 '<link rel="stylesheet" href="'+R(d)+'assets/site.css">\n'+schema(p)+'\n</head><body>'+
 header(p,d)+crumbs(p,d)+hero(p,d)+body(p,d)+footer(d)+
 '<script src="'+R(d)+'assets/site.js"></script></body></html>';
}
