// Secondary long-tail services (compact), towns, hub, company pages.
function svc(o){o.service=o.service||o.name;PAGES.push(o);}

svc({slug:'roadside-assistance-fayetteville-nc',name:'Roadside Assistance',
 title:'Roadside Assistance Fayetteville NC | 24 Hour Help',
 desc:'24-hour roadside assistance in Fayetteville, NC: jump starts, lockouts, flat tires, fuel. If it can be fixed where it sits, we fix it there.',
 kw:['roadside assistance fayetteville nc','roadside service fayetteville','24 hour roadside assistance fayetteville','road service near me fayetteville'],
 eyebrow:'Maybe you don’t need a tow',h1:'Roadside Assistance in <em>Fayetteville</em>, NC',
 lede:'Not every dead car needs a truck. Dead battery, locked keys, flat tire, empty tank — the driver can often fix it where it sits, and you drive away. If it can’t be fixed on the spot, the same truck can tow it.',
 when:{k:'Roadside services',h:'Fix it <em>where it sits</em>.',cards:[
  ['Jump start','Dead battery in a driveway, a lot on Skibo, or a parking deck downtown.','jump-start-fayetteville-nc','Jump start →'],
  ['Lockout','Keys on the seat, doors locked.','car-lockout-fayetteville-nc','Car lockout →'],
  ['Flat tire','Swap to your spare. No spare? Tow to a tire shop.','flat-tire-change-fayetteville-nc','Flat tire →'],
  ['Out of gas','Enough fuel to reach the next station.','fuel-delivery-fayetteville-nc','Fuel delivery →']]},
 faq:[{q:'What if the roadside fix doesn’t work?',a:'Then we tow it. Tell dispatch up front so a tow-capable truck comes out.'},FAQ_COMMON.price,FAQ_COMMON.eta,FAQ_COMMON.ins]});

svc({slug:'jump-start-fayetteville-nc',name:'Jump Start',
 title:'Jump Start Service Fayetteville NC | Dead Battery Help 24/7',
 desc:'Dead battery in Fayetteville, NC? 24-hour jump start service at home, work, or any lot. If it won’t hold a charge, we tow it.',
 kw:['jump start fayetteville nc','dead battery fayetteville','car battery jump fayetteville','battery service near me fayetteville'],
 eyebrow:'Dead battery',h1:'Jump Start Service in <em>Fayetteville</em>, NC',
 lede:'Clicking, dim dash lights, nothing when you turn the key. A jump gets most cars running. If the battery won’t hold it, or it’s the alternator, we tow it to a shop or parts store.',
 when:{k:'Common spots',h:'Where batteries <em>die</em>.',cards:[
  ['Cold mornings','Car sat all night in a driveway in Haymount or Jack Britt and won’t turn over.',null,null],
  ['Parking lots','Lights left on at Cross Creek Mall, a Walmart lot on Skibo or Ramsey, a hospital deck.',null,null],
  ['After deployment','Car sat for months on post or in storage. Battery’s flat — and probably tires too.','military-pcs-towing-fort-bragg','Military towing →'],
  ['Won’t take a jump','Starter, alternator, or battery’s done. Tow it.','24-hour-towing-fayetteville-nc','24-hour towing →']]},
 faq:[{q:'Can you jump a hybrid or EV?',a:'Many hybrids have a 12V battery that can be jumped. EVs vary by make — tell dispatch the model.'},FAQ_COMMON.price,FAQ_COMMON.eta]});

svc({slug:'car-lockout-fayetteville-nc',name:'Car Lockout',
 title:'Car Lockout Service Fayetteville NC | Locked Keys in Car',
 desc:'Locked out of your car in Fayetteville, NC? 24-hour lockout service. Kid or pet inside? Call 911 first.',
 kw:['car lockout fayetteville nc','locked keys in car fayetteville','unlock car fayetteville','lockout service near me fayetteville'],
 eyebrow:'Keys locked inside',h1:'Car Lockout Service in <em>Fayetteville</em>, NC',
 lede:'Keys on the seat, doors locked. We open most cars without damage. If a child or pet is inside and it’s hot, call 911 first — that comes before anything else.',
 safety:'lock',
 when:{k:'Lockouts',h:'Before you <em>break a window</em>.',cards:[
  ['Keys inside','Most cars open with the right tools and no damage.',null,null],
  ['Lost keys','We can’t cut a key, but we can tow it to a dealer or locksmith.','24-hour-towing-fayetteville-nc','Towing →'],
  ['Trunk lockout','Keys in the trunk — often reachable through the cabin once it’s open.',null,null],
  ['Proof of ownership','Driver will ask for ID matching the registration before opening the car.',null,null]]},
 faq:[{q:'Will you damage my car?',a:'Lockout tools are designed to open doors without damage. The driver will tell you if your car has a risk before starting.'},{q:'Do I need to prove it’s my car?',a:'Yes. Have ID ready; registration is usually in the glovebox and can be checked once the door is open.'},FAQ_COMMON.price]});

svc({slug:'flat-tire-change-fayetteville-nc',name:'Flat Tire Change',
 title:'Flat Tire Change Fayetteville NC | Roadside Tire Help',
 desc:'Flat tire in Fayetteville, NC? We swap to your spare on the roadside, or tow to a tire shop if there isn’t one.',
 kw:['flat tire change fayetteville nc','flat tire help fayetteville','tire change near me fayetteville','roadside tire service fayetteville'],
 eyebrow:'Flat tire',h1:'Flat Tire Change in <em>Fayetteville</em>, NC',
 lede:'Blew a tire on I-95 or picked up a nail on Bragg Blvd. We swap it to your spare. No spare, or the wheel’s bent? We tow it to a tire shop.',
 when:{k:'Flat tire',h:'On the <em>shoulder</em>?',cards:[
  ['Highway flat','Don’t change a tire inches from I-95 traffic. Get off the road and let the truck set up.','i-95-towing-fayetteville-nc','I-95 towing →'],
  ['Have a spare','We put it on; you drive to a tire shop.',null,null],
  ['No spare','Tow to a tire shop on Skibo, Raeford Rd, or Bragg Blvd.','24-hour-towing-fayetteville-nc','Towing →'],
  ['Locking lug nut','Find the key (glovebox, trunk kit) before the driver arrives.',null,null]]},
 faq:[{q:'Can you fix the tire?',a:'We install your spare. Repairs and new tires happen at a tire shop — we can tow you there.'},FAQ_COMMON.price,FAQ_COMMON.eta]});

svc({slug:'fuel-delivery-fayetteville-nc',name:'Fuel Delivery',
 title:'Out of Gas Fuel Delivery Fayetteville NC | 24 Hour',
 desc:'Ran out of gas in Fayetteville, NC? We bring enough fuel to get you to the next station. I-95, Outer Loop, anywhere in Cumberland County.',
 kw:['fuel delivery fayetteville nc','out of gas fayetteville','ran out of gas i-95 fayetteville','gas delivery near me fayetteville'],
 eyebrow:'Ran dry',h1:'Out-of-Gas Fuel Delivery in <em>Fayetteville</em>',
 lede:'The gauge was lying, or the stretch of I-95 between exits was longer than you thought. We bring enough fuel to get you to the next station.',
 when:{k:'Fuel',h:'Empty <em>tank</em>.',cards:[
  ['Gas','Enough to reach a station.',null,null],
  ['Diesel','Tell dispatch — diesel is a separate can.',null,null],
  ['Still won’t start','Fuel pump or something else. We tow it.','24-hour-towing-fayetteville-nc','Towing →'],
  ['On I-95','Give the nearest exit or mile marker.','i-95-towing-fayetteville-nc','I-95 towing →']]},
 faq:[{q:'How much fuel do you bring?',a:'Enough to get you to the nearest station. Ask on the phone for the fuel charge and service charge together.'},FAQ_COMMON.where,FAQ_COMMON.eta]});

svc({slug:'winch-out-fayetteville-nc',name:'Winch-Out',
 title:'Winch Out Service Fayetteville NC | Stuck in Ditch or Mud',
 desc:'Stuck in a ditch, mud, or sand in Fayetteville, NC? 24-hour winch-out service across Cumberland and Hoke counties.',
 kw:['winch out fayetteville nc','car stuck in ditch fayetteville','stuck in mud towing fayetteville','vehicle recovery fayetteville nc'],
 eyebrow:'Stuck, not broken',h1:'Winch-Out Service in <em>Fayetteville</em>, NC',
 lede:'Slid into a ditch on a rural road off NC 210, sank in sand out toward Raeford, or buried in mud after a storm. The car’s fine — it just needs pulling out.',
 when:{k:'Winch-out',h:'Where cars get <em>stuck</em>.',cards:[
  ['Sandhills soil','Hoke County and western Cumberland are sandy. Shoulders give way.','towing-raeford-nc','Raeford →'],
  ['Ditches after rain','Rural roads toward Stedman, Eastover, and Vander flood fast.',null,null],
  ['Soft shoulder','Pulled off I-95 onto grass and sank.','i-95-towing-fayetteville-nc','I-95 towing →'],
  ['Damaged after','If it won’t drive once it’s out, same truck tows it.','accident-recovery-fayetteville-nc','Accident recovery →']]},
 faq:[{q:'Can you winch a car without damaging it?',a:'The driver rigs to recovery points, not bumpers. Tell dispatch how deep it’s stuck so the right truck comes.'},FAQ_COMMON.price,FAQ_COMMON.where]});

svc({slug:'motorcycle-towing-fayetteville-nc',name:'Motorcycle Towing',
 title:'Motorcycle Towing Fayetteville NC | Bike Transport 24/7',
 desc:'Motorcycle towing in Fayetteville, NC. Flatbed, wheel chock, soft straps. Breakdowns, wrecks, and shop runs.',
 kw:['motorcycle towing fayetteville nc','motorcycle tow near me fayetteville','bike towing fayetteville','harley towing fayetteville'],
 eyebrow:'Two wheels',h1:'Motorcycle Towing in <em>Fayetteville</em>, NC',
 lede:'Bikes need a flatbed, a wheel chock, and soft straps — not a car hook. Breakdown on the Outer Loop, a drop in a parking lot, or a run to the dealer.',
 when:{k:'Motorcycle',h:'Bike <em>down</em>?',cards:[
  ['Breakdown','Flatbed with chock and soft ties.','flatbed-towing-fayetteville-nc','Flatbed →'],
  ['After a drop or wreck','Call 911 for any injury first.','accident-recovery-fayetteville-nc','Accident recovery →'],
  ['Dealer run','Scheduled transport to a dealer on Skibo or Raeford Rd.',null,null],
  ['PCS move','Bike to storage or a shipping point.','military-pcs-towing-fort-bragg','Military →']]},
 faq:[{q:'Do you tow all bikes?',a:'Sport bikes, cruisers, dual-sports, most trikes. Tell dispatch make and model.'},FAQ_COMMON.price,FAQ_COMMON.eta]});

svc({slug:'long-distance-towing-fayetteville-nc',name:'Long-Distance Towing',
 title:'Long Distance Towing Fayetteville NC | Raleigh, Wilmington & Beyond',
 desc:'Long-distance towing from Fayetteville, NC to Raleigh, Wilmington, Charlotte, Myrtle Beach and out of state. Ask for a flat quote.',
 kw:['long distance towing fayetteville nc','tow fayetteville to raleigh','tow fayetteville to wilmington','interstate towing fayetteville','out of state towing fayetteville'],
 eyebrow:'Out of town',h1:'Long-Distance Towing from <em>Fayetteville</em>',
 lede:'Broke down passing through on I-95 and want to get home? Buying a car in another city? We run longer trips on quote — ask for the full price before we book.',
 when:{k:'Common routes',h:'Where we <em>run</em>.',cards:[
  ['Raleigh','Up I-95 and I-40, or US 401.',null,null],
  ['Wilmington','East on I-40 / NC 87.',null,null],
  ['Charlotte','West via US 74.',null,null],
  ['Out of state','I-95 north or south — ask for a quote.',null,null]]},
 faq:[{q:'How is long-distance priced?',a:'By the mile plus hookup, quoted up front. Ask for the total before booking.'},{q:'Can I ride along?',a:'Sometimes — ask when you book.'},FAQ_COMMON.ins]});

svc({slug:'military-pcs-towing-fort-bragg',name:'Military & PCS Towing',
 title:'Military Towing Fort Bragg NC | PCS & Deployment Vehicle Moves',
 desc:'Towing for soldiers and families at Fort Bragg: PCS moves, deployment storage, dead cars in barracks lots. Serving Fayetteville and Spring Lake.',
 kw:['fort bragg towing','military towing fayetteville nc','pcs vehicle towing fort bragg','deployment car storage fayetteville','towing near fort bragg'],
 eyebrow:'Fort Bragg families',h1:'Military & PCS Towing near <em>Fort Bragg</em>',
 lede:'PCS orders, a car that sat all deployment, or a dead vehicle in a barracks lot. Civilian trucks need installation access to go on post — tell dispatch where you are and we’ll work out the gate meet or the right on-post option.',
 when:{k:'Military moves',h:'Built around <em>the post</em>.',cards:[
  ['PCS','Vehicle to the shipping point, storage, or a shop for inspection before you leave.',null,null],
  ['Deployment return','Car sat for months — dead battery, flat tires.','jump-start-fayetteville-nc','Jump start →'],
  ['Gate meet','We meet at All American, Randolph St, or Reilly Rd gates when on-post access isn’t possible.','towing-fort-bragg-nc','Fort Bragg page →'],
  ['Spring Lake side','Near the NC 24/87 side of post.','towing-spring-lake-nc','Spring Lake →']]},
 faq:[{q:'Can you tow on Fort Bragg?',a:'Civilian vendors need installation access. Tell dispatch your gate and building; we’ll confirm what’s possible before sending a truck.'},{q:'Do you offer a military discount?',a:'Ask on the phone — the renter/operator sets pricing.'},FAQ_COMMON.price]});

svc({slug:'i-95-towing-fayetteville-nc',name:'I-95 Towing',
 title:'I-95 Towing Fayetteville NC | Exits 40–56 Cumberland County',
 desc:'Broke down on I-95 near Fayetteville, NC? Towing from exit 40 at Hope Mills to exit 56 at Eastover. Give us your exit or mile marker.',
 kw:['i-95 towing fayetteville','broke down on i-95 nc','tow truck i-95 fayetteville','i 95 exit 46 towing','i 95 exit 52 towing','highway towing cumberland county'],
 eyebrow:'Interstate 95 · Cumberland County',h1:'I-95 Towing near <em>Fayetteville</em>, NC',
 lede:'Passing through on I-95 and something quit? Get off the road as far as you can, get out on the passenger side, stand behind the guardrail, and call. Read us the nearest exit number or green mile marker.',
 safety:true,
 when:{k:'Exits',h:'Say the <em>exit</em>.',cards:[
  ['Exit 40–41 · Hope Mills','NC 59 / Chicken Foot Rd.','towing-hope-mills-nc','Hope Mills →'],
  ['Exit 44–46 · Fayetteville','Claude Lee Rd, NC 87 toward downtown.',null,null],
  ['Exit 49–52 · Fayetteville','NC 53/210, NC 24 toward the post.',null,null],
  ['Exit 55–56 · Eastover','Dunn Rd / US 301.','towing-eastover-nc','Eastover →']]},
 faq:[{q:'I’m from out of town — where will you take my car?',a:'To a shop you choose, a dealer, a hotel lot, or storage. Dispatch can suggest what’s open nearby. For getting all the way home, see <a href="{{p:long-distance-towing-fayetteville-nc}}">long-distance towing</a>.'},FAQ_COMMON.where,FAQ_COMMON.eta,FAQ_COMMON.ins]});

// ---------- TOWN PAGES ----------
function town(o){o.town=true;PAGES.push(o);}
town({slug:'towing-spring-lake-nc',name:'Spring Lake',
 title:'Towing Spring Lake NC | 24 Hour Tow Truck near Fort Bragg',
 desc:'24-hour towing in Spring Lake, NC. NC 24/87, NC 210, Main St and the Fort Bragg side. Flatbed, emergency and roadside.',
 kw:['towing spring lake nc','tow truck spring lake nc','spring lake nc towing service','roadside assistance spring lake nc'],
 eyebrow:'Spring Lake, NC · Cumberland County',h1:'Towing in <em>Spring Lake</em>, NC',
 lede:'Spring Lake sits right on the post’s northern edge — lots of soldiers, lots of miles on NC 24/87. If you’re broke down on Main Street, Lillington Highway, or NC 210, call and we’ll send a truck up from Fayetteville.',
 local:{h:'Spring Lake <em>roads</em>.',p:'Most calls come off NC 24/87 (Bragg Blvd continuing north), NC 210 (Lillington Hwy), Main Street, and the roads toward the Manchester and Overhills side. Close enough to the post that many cars are headed to or from a gate.',
  groups:[['Highways',['NC 24/87','NC 210','NC 87 north'],1],['Roads',['Main St','Lillington Hwy','Manchester Rd','Ruth St']],['Nearby',['Fort Bragg northern gates','Pope side of post','Overhills','Linden']]]},
 faq:[{q:'Do you come out to Spring Lake at night?',a:'Yes — same number, 24 hours.'},FAQ_COMMON.eta,FAQ_COMMON.price]});

town({slug:'towing-hope-mills-nc',name:'Hope Mills',
 title:'Towing Hope Mills NC | 24 Hour Tow Truck & I-95 Exit 41',
 desc:'24-hour towing in Hope Mills, NC. Main St, NC 59, Golfview Rd and I-95 exit 41. Flatbed, emergency, roadside.',
 kw:['towing hope mills nc','tow truck hope mills','hope mills nc towing','roadside assistance hope mills'],
 eyebrow:'Hope Mills, NC · Cumberland County',h1:'Towing in <em>Hope Mills</em>, NC',
 lede:'Hope Mills runs from I-95 exit 41 to the lake and out toward Jack Britt. Broke down on Main Street, NC 59, or Rockfish Road? Call and we’ll send the nearest truck.',
 local:{h:'Hope Mills <em>roads</em>.',p:'Calls come off I-95 at exit 41, NC 59 (Main St / Chicken Foot Rd), Rockfish Road, Golfview Road, Legion Road and Camden Road into south Fayetteville.',
  groups:[['Highways',['I-95 exit 41','NC 59','I-295'],1],['Roads',['Main St','Rockfish Rd','Golfview Rd','Legion Rd','Camden Rd','Hope Mills Rd']],['Nearby',['Hope Mills Lake','Jack Britt area','Gray’s Creek']]]},
 faq:[{q:'Do you tow from Hope Mills into Fayetteville?',a:'Yes — to any shop, dealer, or home in the area.'},FAQ_COMMON.eta,FAQ_COMMON.price]});

town({slug:'towing-raeford-nc',name:'Raeford',
 title:'Towing Raeford NC | 24 Hour Tow Truck Hoke County',
 desc:'24-hour towing in Raeford and Hoke County, NC. US 401, Raeford Rd corridor, and the Fort Bragg west side. Winch-outs in sandy shoulders.',
 kw:['towing raeford nc','tow truck raeford nc','hoke county towing','roadside assistance raeford nc'],
 eyebrow:'Raeford, NC · Hoke County',h1:'Towing in <em>Raeford</em>, NC',
 lede:'Raeford and Hoke County have grown with Fort Bragg families moving west down Raeford Road. Broke down on US 401, stuck in a sandy shoulder, or dead in a subdivision driveway — call and we’ll send a truck.',
 local:{h:'Raeford & Hoke <em>roads</em>.',p:'Calls come off Raeford Road heading into Fayetteville, US 401 through town, NC 211 toward Aberdeen, and the subdivisions off Rockfish and Fayetteville roads. Sandy shoulders make winch-outs common.',
  groups:[['Highways',['US 401','NC 211','Raeford Rd (US 401 Bus.)','NC 20'],1],['Roads',['Main St','Harris Ave','Rockfish Rd','Fayetteville Rd']],['Nearby',['Fort Bragg west side','Rockfish','Puppy Creek']]]},
 faq:[{q:'Do you come out to Hoke County?',a:'Yes, including Raeford and the subdivisions between Raeford and Fayetteville.'},{q:'I’m stuck in sand — do I need a tow?',a:'Maybe just a winch-out. See <a href="{{p:winch-out-fayetteville-nc}}">winch-out service</a>.'},FAQ_COMMON.eta]});

town({slug:'towing-fort-bragg-nc',name:'Fort Bragg',
 title:'Towing Fort Bragg NC | Tow Truck at the Gates, 24 Hours',
 desc:'Towing near Fort Bragg, NC. Gate meets at All American, Randolph St and Reilly Rd. PCS and deployment vehicle moves.',
 kw:['towing fort bragg nc','fort bragg tow truck','tow truck near fort bragg','towing on post fort bragg'],
 eyebrow:'Fort Bragg · Cumberland/Hoke',h1:'Towing near <em>Fort Bragg</em>, NC',
 lede:'Civilian tow trucks can’t just drive onto post. If you’re broke down inside, tell dispatch the nearest gate and your building or lot, and we’ll confirm access or meet you at the gate. Outside the gates — Bragg Blvd, Yadkin Road, Reilly Road — we come straight to you.',
 local:{h:'Around <em>the post</em>.',p:'Most outside-the-gate calls come from Bragg Blvd, Yadkin Road, Reilly Road, Morganton Road, and the All American Freeway. Tell us which gate you’re closest to.',
  groups:[['Gates',['All American Fwy','Randolph St','Reilly Rd','Yadkin Rd'],1],['Outside roads',['Bragg Blvd','Yadkin Rd','Reilly Rd','Morganton Rd']],['Nearby towns',['Spring Lake','Fayetteville','Raeford']]]},
 faq:[{q:'Can you come on post?',a:'Civilian vendors need installation access. We’ll confirm before dispatching. If not, we meet at the gate.'},{q:'Where do soldiers usually have cars towed?',a:'Shops on Bragg Blvd, Yadkin Rd, and Skibo Rd are common. Tell us your choice.'},FAQ_COMMON.price]});

town({slug:'towing-eastover-nc',name:'Eastover',
 title:'Towing Eastover NC | I-95 Exit 55–56 Tow Truck',
 desc:'24-hour towing in Eastover, NC. I-95 exits 55–56, Dunn Rd, US 301.',
 kw:['towing eastover nc','tow truck eastover nc','i-95 exit 56 towing'],
 eyebrow:'Eastover, NC',h1:'Towing in <em>Eastover</em>, NC',
 lede:'Eastover sits at the north end of the county along I-95. Broke down at exit 55 or 56, on Dunn Road or US 301? Call.',
 local:{h:'Eastover <em>roads</em>.',p:'I-95 exits 55–56, Dunn Road, US 301, and Murphy Road.',groups:[['Highways',['I-95 exits 55–56','US 301'],1],['Roads',['Dunn Rd','Murphy Rd','Baywood Rd']],['Nearby',['Wade','Godwin','Cape Fear River']]]},
 faq:[FAQ_COMMON.eta,FAQ_COMMON.where]});

town({slug:'towing-stedman-nc',name:'Stedman',
 title:'Towing Stedman NC | 24 Hour Tow Truck NC 24',
 desc:'24-hour towing in Stedman, NC along NC 24 east of Fayetteville.',
 kw:['towing stedman nc','tow truck stedman nc'],
 eyebrow:'Stedman, NC',h1:'Towing in <em>Stedman</em>, NC',
 lede:'East of Fayetteville on NC 24 toward Clinton. Broke down on the highway or a rural road nearby? Call.',
 local:{h:'Stedman <em>roads</em>.',p:'NC 24 (Clinton Rd), Maxwell Rd, and the rural roads toward Autryville.',groups:[['Highways',['NC 24'],1],['Roads',['Clinton Rd','Maxwell Rd','Stedman-Cedar Creek Rd']],['Nearby',['Vander','Autryville']]]},
 faq:[FAQ_COMMON.eta,{q:'I’m stuck in a ditch on a rural road.',a:'See <a href="{{p:winch-out-fayetteville-nc}}">winch-out</a> — or just call.'}]});

// ---------- HUB + COMPANY ----------
PAGES.push({slug:'service-area',kind:'hub',nav:'area',
 title:'Towing Service Area | Fayetteville, Spring Lake, Hope Mills, Raeford',
 desc:'Where we tow: Fayetteville, Spring Lake, Hope Mills, Raeford, Fort Bragg, Eastover, Stedman and every Fayetteville neighborhood and zip code.',
 kw:['towing near me','towing cumberland county nc','towing hoke county nc','fayetteville nc zip codes towing'],
 eyebrow:'Service area',h1:'Where we tow around <em>Fayetteville</em>',
 lede:'Fayetteville city, the rest of Cumberland County, and the Hoke County side toward Raeford. If you’re not sure you’re in range, call — it takes ten seconds to find out.',
 hoods:['Haymount','Downtown / Hay St','Terry Sanford','Westover','Cliffdale West','Jack Britt','Vander','Arran Lake','Bonnie Doone','Massey Hill','Murchison Rd corridor','College Lakes','Kings Grant','Lake Rim','Gates Four','Briarwood'],
 zips:['28301','28303','28304','28305','28306','28307','28308','28310','28311','28312','28314','28348','28390','28376'],
 faq:[{q:'Do you tow outside Cumberland County?',a:'Hoke County (Raeford) yes. Farther trips on quote — see <a href="{{p:long-distance-towing-fayetteville-nc}}">long-distance towing</a>.'},FAQ_COMMON.eta]});

PAGES.push({slug:'towing-cost-fayetteville-nc',kind:'guide',
 title:'How Much Does Towing Cost in Fayetteville NC? | Honest Guide',
 desc:'What goes into a tow price in Fayetteville, NC — hookup, mileage, time of day, vehicle type — and what to ask before a truck is sent.',
 kw:['how much does towing cost fayetteville nc','tow truck price fayetteville','towing rates fayetteville nc','cheap towing fayetteville'],
 eyebrow:'Guide',h1:'What towing costs in <em>Fayetteville</em> — and what to ask',
 lede:'We’re not going to print a fake “from $49” number. Here’s what actually goes into a tow price, so you know what to ask on the phone.',
 faq:[FAQ_COMMON.price,FAQ_COMMON.ins,{q:'Why don’t you list prices?',a:'Because they vary by vehicle, distance, time, and equipment. A number on a website that doesn’t match the phone is worse than none.'}]});

PAGES.push({slug:'about',kind:'about',nav:'about',
 title:'About Rapid Tow Fayetteville | Local Towing Dispatch',
 desc:'Rapid Tow Fayetteville connects drivers in Fayetteville, NC with a local tow truck, 24 hours a day. Here’s exactly what we are and aren’t.',
 kw:['rapid tow fayetteville','about rapid tow fayetteville'],
 eyebrow:'About',h1:'A Fayetteville towing line that <em>tells you the truth</em>',
 lede:'Rapid Tow Fayetteville is a 24-hour towing number for Fayetteville, NC and the towns around it. One job: when your car quits, get a truck to you.'});

PAGES.push({slug:'contact',kind:'contact',nav:'contact',
 title:'Contact Rapid Tow Fayetteville | Call 24/7 or Request a Quote',
 desc:'Call Rapid Tow Fayetteville 24 hours a day, or send a quote request for a scheduled tow in Fayetteville, NC.',
 kw:['contact tow truck fayetteville','towing quote fayetteville nc'],
 eyebrow:'Contact',h1:'Call <em>Fayetteville’s</em> tow line — any hour',
 lede:'The fastest way is the phone. If it’s not urgent — a scheduled move, a PCS vehicle, a long-distance quote — use the form.'});

PAGES.push({slug:'privacy',kind:'legal',title:'Privacy & Call Recording | Rapid Tow Fayetteville',desc:'Privacy policy and call recording notice.',kw:[],eyebrow:'Legal',h1:'Privacy & call recording',lede:''});
