// Page content — core money pages. Every page: real Fayetteville roads/landmarks, no invented reviews/years/prices.
var SERVICES = [
 ['24-hour-towing-fayetteville-nc','24-Hour Towing','Nights, weekends, holidays. Same number.'],
 ['emergency-towing-fayetteville-nc','Emergency Towing','Stuck on a shoulder or in a lane right now.'],
 ['flatbed-towing-fayetteville-nc','Flatbed Towing','AWD, low cars, EVs, lifted trucks.'],
 ['accident-recovery-fayetteville-nc','Accident Recovery','Wreck cleared, car to shop or storage.'],
 ['roadside-assistance-fayetteville-nc','Roadside Assistance','When it can be fixed where it sits.'],
 ['jump-start-fayetteville-nc','Jump Start','Dead battery, lot or driveway.'],
 ['car-lockout-fayetteville-nc','Car Lockout','Keys on the seat, doors locked.'],
 ['flat-tire-change-fayetteville-nc','Flat Tire Change','Swap to your spare, or tow if none.'],
 ['fuel-delivery-fayetteville-nc','Fuel Delivery','Ran dry between exits.'],
 ['winch-out-fayetteville-nc','Winch-Out','Ditch, mud, sand, soft shoulder.'],
 ['motorcycle-towing-fayetteville-nc','Motorcycle Towing','Strapped right, no bent levers.'],
 ['long-distance-towing-fayetteville-nc','Long-Distance Towing','Raleigh, Wilmington, out of state.'],
 ['military-pcs-towing-fort-bragg','Military & PCS Towing','Fort Bragg moves, barracks lots, deployments.'],
 ['i-95-towing-fayetteville-nc','I-95 Towing','Exits 40–56 through Cumberland County.']
];
var TOWNS = [
 ['towing-spring-lake-nc','Spring Lake','NC 24/87, NC 210, Pope side of post'],
 ['towing-hope-mills-nc','Hope Mills','Main St, NC 59, Golfview, I-95 exit 41'],
 ['towing-raeford-nc','Raeford','Hoke County, US 401, Raeford Rd corridor'],
 ['towing-fort-bragg-nc','Fort Bragg','All American, Randolph, Reilly Rd gates'],
 ['towing-eastover-nc','Eastover','I-95 exits 55–56, Dunn Rd / US 301'],
 ['towing-stedman-nc','Stedman','NC 24 east toward Clinton'],
 ['service-area','Fayetteville','Every zip, 28301 – 28314']
];

var FAQ_COMMON = {
 eta:{q:'How fast can a truck get to me?',a:'It depends on where the nearest truck is when you call — a car on Skibo Road at 2 p.m. is a different job than one on I-95 near Eastover at 3 a.m. Dispatch gives you a real ETA on the phone. We don’t print a minute-count on a website because nobody can promise one honestly.'},
 price:{q:'How much does a tow cost in Fayetteville?',a:'Price depends on the vehicle, the distance, the time, and whether it needs a winch or flatbed. Ask for the total on the phone before the truck is dispatched — you should know the number before anyone hooks your car. See <a href="{{cost}}">how towing prices work</a>.'},
 where:{q:'I don’t know exactly where I am. What do I tell you?',a:'Look for the nearest exit number, a green mile marker on I-95, a cross street, or a business sign. Or tap “Show my GPS” on this page and read the numbers to dispatch.'},
 ins:{q:'Will my insurance or roadside plan cover it?',a:'Many auto policies and roadside plans reimburse towing. Keep your receipt and call your provider. If you’d rather go through your plan’s own dispatch, that’s fine too — we’d rather you get home.'}
};

var PAGES = [];

PAGES.push({
 slug:'', file:'index.html', nav:'home',
 title:'Towing Fayetteville NC | 24 Hour Tow Truck | Rapid Tow Fayetteville',
 desc:'Towing in Fayetteville, NC, 24 hours a day. Flatbed, emergency, accident recovery and roadside help from I-95 to Bragg Blvd. Tap to call.',
 kw:['towing fayetteville nc','tow truck fayetteville nc','towing company fayetteville nc','towing near me fayetteville','fayetteville nc towing service','cheap towing fayetteville nc','tow service fayetteville'],
 eyebrow:'Fayetteville, NC · Cumberland County',
 h1:'Towing in <em>Fayetteville</em>, NC. Day or night.',
 lede:'Broke down on Skibo, wrecked on the All American, dead in a lot off Owen Drive? One call gets a tow truck headed your way — flatbed, wrecker, or roadside help. Tell us where you are; we’ll tell you the real ETA and the price before anyone hooks your car.',
 when:{k:'What happened?',h:'Pick the one that’s <em>you</em>.',cards:[
  ['Car won’t start','Battery, starter, won’t turn over in a driveway on Cliffdale or a parking deck downtown. Could be a jump — could be a tow.','jump-start-fayetteville-nc','Jump start →'],
  ['Wreck','Fender-bender on Raeford Road or worse on I-95. Police on scene or not, we get the car out of the road and to a shop or storage.','accident-recovery-fayetteville-nc','Accident recovery →'],
  ['Stuck on the highway','Shoulder of I-95, the I-295 Outer Loop, or the All American. Get out of the car on the side away from traffic and call.','emergency-towing-fayetteville-nc','Emergency towing →'],
  ['Needs a flatbed','AWD, low-slung, electric, lifted, or just something you don’t want dragged on two wheels.','flatbed-towing-fayetteville-nc','Flatbed towing →']
 ]},
 local:{h:'We work <em>Fayetteville</em>, not “your area.”',p:'Fayetteville traffic runs on a handful of roads, and that’s where cars quit: the stop-and-go on Skibo Road by Cross Creek Mall, Bragg Blvd from downtown up to the post, Raeford Road and Cliffdale out west, Ramsey Street north past Methodist, and I-95 running the whole east side of the county. We know which exit you mean when you say it.',
  groups:[['Highways',['I-95','I-295 Outer Loop','All American Fwy','US 401','NC 24/87','NC 210'],1],['Roads',['Bragg Blvd','Skibo Rd','Raeford Rd','Owen Dr','Cliffdale Rd','Ramsey St','Murchison Rd','Yadkin Rd','Gillespie St','Hope Mills Rd']],['Landmarks',['Cross Creek Mall','Market House / Hay St','Cape Fear Valley Medical','Fayetteville Regional Airport','Methodist University','Fayetteville State','Fort Bragg gates']]]},
 honest:true,
 faq:[FAQ_COMMON.eta,FAQ_COMMON.price,{q:'Do you tow on Fort Bragg?',a:'Civilian tow trucks need installation access to drive onto post. If you’re broke down inside a gate, tell dispatch which one you’re nearest — All American, Randolph Street, Reilly Road — and we’ll sort out whether we meet you at the gate or you need an on-post vendor. See <a href="{{p:towing-fort-bragg-nc}}">Fort Bragg towing</a>.'},FAQ_COMMON.where,{q:'Are you open right now?',a:'Yes. The phone is answered 24 hours a day, including weekends and holidays. Nights don’t get a different number or a voicemail.'},FAQ_COMMON.ins],
 service:'Towing'
});

PAGES.push({
 slug:'24-hour-towing-fayetteville-nc',
 title:'24 Hour Towing Fayetteville NC | Night & Weekend Tow Truck',
 desc:'24-hour towing in Fayetteville, NC. Real person answers at 3 a.m. Flatbed and wrecker service across Cumberland County, I-95 to Fort Bragg.',
 kw:['24 hour towing fayetteville nc','24/7 towing fayetteville','late night towing fayetteville nc','tow truck open now fayetteville','weekend towing fayetteville','after hours tow fayetteville nc','24 hour tow truck near me'],
 eyebrow:'24 hours · 7 days · holidays',
 h1:'24-Hour Towing in <em>Fayetteville</em>, NC',
 lede:'It’s late, the car is dead, and every other number went to voicemail. This one doesn’t. A dispatcher picks up, asks where you are, and sends a truck — 2 p.m. on a Tuesday or 3 a.m. on the Sunday after payday weekend.',
 when:{k:'After hours in Fayetteville',h:'The calls that come in <em>after dark</em>.',cards:[
  ['Leaving a shift at Cape Fear Valley','Night shift lets out, car won’t start in the lot off Owen Drive. A jump if it’ll take one, a tow if it won’t.','jump-start-fayetteville-nc','Jump start →'],
  ['Late drive back to post','Coming in on I-95 or the All American after midnight and something quits. Pull as far right as you can and call.','emergency-towing-fayetteville-nc','Emergency towing →'],
  ['Hay Street, closing time','Car’s locked with the keys inside, or you’re not the one who should be driving it home. We can take it for you.','car-lockout-fayetteville-nc','Car lockout →'],
  ['Sunday, nothing’s open','Your shop is closed till Monday. We tow it to your driveway tonight or drop it at the shop to be first in line.',null,null]
 ]},
 local:{h:'Fayetteville at <em>night</em>.',p:'After dark the city thins out to a few lit corridors — Skibo, Bragg Blvd, Raeford Road, Ramsey Street — and I-95, which never slows down. If you’re on a dark stretch of Murchison Road, Hope Mills Road, or the Outer Loop, stay in the car with your hazards on unless it’s safer to get out and stand well off the road.',
  groups:[['Highways at night',['I-95','I-295 Outer Loop','All American Fwy','NC 87'],1],['Lit corridors',['Skibo Rd','Bragg Blvd','Raeford Rd','Ramsey St','Owen Dr','Yadkin Rd']],['Late-night stops',['Hay St downtown','Cross Creek Mall lots','Cape Fear Valley Medical','Walmart lots on Skibo & Ramsey']]]},
 honest:false,
 faq:[{q:'Is someone really answering at 3 a.m.?',a:'Yes. Call and find out — that’s the whole point of this page. No overnight voicemail, no “we’ll call you back in the morning.”'},{q:'Does night towing cost more?',a:'Some operators charge an after-hours rate. Ask on the phone and get the total before the truck rolls — you’ll hear the number up front.'},FAQ_COMMON.eta,{q:'Can you tow my car to a shop that’s closed?',a:'Usually yes — many Fayetteville shops have an after-hours drop spot. Tell dispatch the shop name and we’ll confirm. Otherwise we can take it to your home.'},FAQ_COMMON.where],
 service:'24 Hour Towing'
});

PAGES.push({
 slug:'emergency-towing-fayetteville-nc',
 title:'Emergency Towing Fayetteville NC | Stranded? Call Now',
 desc:'Emergency towing in Fayetteville, NC. Stuck on I-95, the All American or Bragg Blvd? Get safe, then call. Real ETA on the phone.',
 kw:['emergency towing fayetteville nc','emergency tow truck fayetteville','stranded fayetteville nc','broke down on i-95 fayetteville','highway towing fayetteville','roadside emergency fayetteville nc'],
 eyebrow:'Stranded right now?',
 h1:'Emergency Towing in <em>Fayetteville</em> — Call Now',
 lede:'First: get safe. Hazards on, and if you’re on I-95 or the All American, get out on the side away from traffic and stand behind the guardrail. Then call. We’ll get your location, send the nearest truck, and give you a real ETA.',
 safety:true,
 when:{k:'Where it happens',h:'The spots we get <em>called to</em>.',cards:[
  ['I-95 shoulder','The whole Cumberland County stretch, exit 41 at Hope Mills up through exit 56 at Eastover. Give us the nearest exit or green mile marker.','i-95-towing-fayetteville-nc','I-95 towing →'],
  ['All American Freeway','No real shoulder in spots between Skibo and the post. Hazards on, stay belted if you can’t get fully off, call 911 if you’re in a live lane.',null,null],
  ['Bragg Blvd / Skibo intersections','Died at a light with traffic stacking up. Push it into a lot if it’s safe; if not, stay put and let us come to you.',null,null],
  ['Wreck with injuries','Call 911 first. Once police clear it, we handle the vehicle.','accident-recovery-fayetteville-nc','Accident recovery →']
 ]},
 local:{h:'Tell us <em>where</em> — we know the roads.',p:'“I’m on 95 past the 87 exit heading north” is enough. So is “All American, just past the Skibo ramp” or “Bragg Blvd across from the old Pepsi building.” Fayetteville is a small big city; describe what you see.',
  groups:[['Highways',['I-95','I-295','All American Fwy','US 401','NC 87'],1],['Busy corridors',['Bragg Blvd','Skibo Rd','Raeford Rd','Owen Dr','Gillespie St']],['Say the exit',['Exit 41 · NC 59','Exit 46 · NC 87','Exit 49 · NC 53/210','Exit 52 · NC 24','Exit 56 · US 301']]]},
 faq:[{q:'Should I call 911 or a tow truck first?',a:'If anyone is hurt, or your car is in a live traffic lane, call 911 first. If you’re safely on the shoulder and just need a tow, call us.'},FAQ_COMMON.eta,FAQ_COMMON.where,{q:'Can I ride in the tow truck?',a:'Often yes, depending on the truck and how many passengers. Ask when you call so the driver knows.'},FAQ_COMMON.price],
 service:'Emergency Towing'
});

PAGES.push({
 slug:'flatbed-towing-fayetteville-nc',
 title:'Flatbed Towing Fayetteville NC | AWD, EV & Low Car Towing',
 desc:'Flatbed towing in Fayetteville, NC for AWD, 4x4, electric, lowered and classic vehicles. Nothing dragged on two wheels. 24 hours.',
 kw:['flatbed towing fayetteville nc','flatbed tow truck fayetteville','rollback towing fayetteville nc','awd towing fayetteville','ev towing fayetteville nc','tesla towing fayetteville','classic car towing fayetteville','lowered car towing'],
 eyebrow:'All four wheels off the ground',
 h1:'Flatbed Towing in <em>Fayetteville</em>, NC',
 lede:'Some vehicles shouldn’t be towed with two wheels on the road. A flatbed (rollback) carries the whole car on the deck — the right call for all-wheel drive, electric, lowered, lifted, or anything you care about.',
 when:{k:'When to ask for a flatbed',h:'Say “flatbed” <em>on the phone</em> if…',cards:[
  ['All-wheel or four-wheel drive','Towing an AWD car with two wheels down can damage the drivetrain. Subaru, most SUVs, many trucks — ask for the flatbed.',null,null],
  ['Electric or hybrid','Most EV makers say flatbed only. Tell dispatch the make and model so the right truck comes.',null,null],
  ['Lowered, classic, or exotic','Low front lips and old bumpers don’t survive a wheel-lift. On the deck, straps on the tires, not the body.',null,null],
  ['Won’t roll','Locked brakes, seized wheel, missing tire after a wreck. A flatbed with a winch pulls it on.','accident-recovery-fayetteville-nc','Accident recovery →']
 ]},
 local:{h:'Flatbed runs <em>around Fayetteville</em>.',p:'Common trips: a lowered car from a lot on Skibo to a shop off Bragg Blvd; an EV from a driveway in Haymount to the nearest service center; a project car from Hope Mills to a garage in Spring Lake; a PCS move vehicle from post housing to storage.',
  groups:[['From',['Haymount','Terry Sanford area','Jack Britt area','Westover','Vander','Arran Lake']],['To',['Dealers on Skibo Rd','Shops on Bragg Blvd','Body shops off Raeford Rd','Storage on Gillespie St']],['Longer runs',['Raleigh','Wilmington','Myrtle Beach','Out of state'],1]]},
 faq:[{q:'Does my car need a flatbed?',a:'If it’s AWD/4WD, electric, lowered, or you’re not sure — say so when you call and we’ll send a flatbed. When in doubt, flatbed.'},{q:'Can you flatbed a Tesla or other EV?',a:'Yes. Tell dispatch the model; EVs usually need to be put in tow/transport mode, and the driver will walk you through it.'},FAQ_COMMON.price,{q:'Can you tow a car that won’t roll?',a:'Yes — the flatbed winch pulls it onto the deck. Mention it on the phone so the driver brings skates or dollies if needed.'},FAQ_COMMON.eta],
 service:'Flatbed Towing'
});

PAGES.push({
 slug:'accident-recovery-fayetteville-nc',
 title:'Accident Recovery & Wreck Towing Fayetteville NC | 24/7',
 desc:'Accident recovery and wreck towing in Fayetteville, NC. We clear the vehicle after police release it and take it to your shop or storage.',
 kw:['accident towing fayetteville nc','wreck towing fayetteville','accident recovery fayetteville nc','car accident tow fayetteville','collision towing fayetteville','towed after accident fayetteville nc','where is my car after accident fayetteville'],
 eyebrow:'After a wreck',
 h1:'Accident Recovery in <em>Fayetteville</em>, NC',
 lede:'If anyone is hurt, call 911 first. Once police are on scene, you can ask for a specific tow company — tell them you’re calling us. We get the vehicle off the road, clean up what we can, and take it where you want it: your shop, your insurer’s shop, or storage while you sort things out.',
 safety:true,
 when:{k:'What to do right now',h:'After a wreck in <em>Fayetteville</em>.',cards:[
  ['1 · Safety and 911','Injuries or a car in a live lane on I-95, Skibo, or Raeford Road: call 911 first. Fayetteville PD, Cumberland County Sheriff, or NC Highway Patrol will respond depending on where you are.',null,null],
  ['2 · Photos','Both cars, the plates, the road, any signs. Get the other driver’s insurance card photo too.',null,null],
  ['3 · Choose your tow','You can request a company if police haven’t already called a rotation wrecker. Call us and tell the officer.',null,null],
  ['4 · Where it goes','Your shop, a body shop your insurer names, or storage. Your call — not ours.',null,null]
 ]},
 local:{h:'Fayetteville’s <em>wreck corridors</em>.',p:'The same intersections show up again and again: Skibo and Cliffdale, Raeford and Skibo, Bragg Blvd near the All American, Owen Drive by the mall, and I-95 around the NC 87 and NC 24 exits. If you’re in one of these spots, you’re not the first car we’ve pulled from there.',
  groups:[['High-traffic',['Skibo Rd & Cliffdale','Raeford Rd & Skibo','Bragg Blvd & All American','Owen Dr by the mall'],0],['Highways',['I-95 exits 46–52','All American Fwy','I-295 Outer Loop'],1],['Who responds',['Fayetteville PD','Cumberland Co. Sheriff','NC Highway Patrol','Hope Mills PD','Spring Lake PD']]]},
 faq:[{q:'Can I choose my own tow company after an accident?',a:'Often, yes — if police haven’t already called a rotation wrecker and your car isn’t blocking traffic in a way that needs immediate removal. Tell the officer you’ve called a company.'},{q:'Where will my car be taken?',a:'Wherever you tell us — your mechanic, a body shop, your home, or storage. You’ll have the address before we leave the scene.'},FAQ_COMMON.ins,{q:'Do you clean up glass and debris?',a:'The driver clears what’s reasonable from the scene when removing the vehicle. Major spills are handled with first responders.'},FAQ_COMMON.eta],
 service:'Accident Recovery'
});
