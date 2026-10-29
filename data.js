// All items sourced; see src links. Compiled Oct 29, 2026.
const TODAY = "2026-10-29";
const projects = [
 {id:"meta",name:"Meta data center campus",topic:"Data centers",status:"Complete",progress:"Operating since Jul 2021; expansion announced, progress unknown",ms:[{date:"2018-05",stage:"Proposed",label:"Announced as Facebook"},{date:"2021-07",stage:"Complete",label:"First building online"},{date:"2025-11",stage:"Approved",label:"Sweetwater #4 (~567 acres) approved"},{date:"2026-09-14",stage:"Proposed",label:"Three more buildings announced"}],note:"Signs as Stadion, LLC. Total Utah investment over $3B per Meta.",src:["https://civicrollcall.com/data-centers.html","https://www.utahbusiness.com/industry/2026/09/14/meta-boosts-eagle-mountain-investment-3-billion-utah-data-center/"]},
 {id:"qts1",name:"QTS SLC1 campus",topic:"Data centers",status:"Under construction",progress:"Building 1 topped out; buildings 1-3 due end of 2026 (third-party, unverified); none open as of Sep 2026",ms:[{date:"2024-01",stage:"Proposed",label:"Entry noted in Tract release"},{date:"2026-03-25",stage:"Approved",label:"Extended construction hours approved"},{date:"2026-04-17",stage:"Under construction",label:"First building topped out"},{date:"2026-12",stage:"Complete",label:"Buildings 1-3 due (not official)",expected:true}],note:"Five buildings on about 193 acres; $6B by company figure.",src:["https://eaglemountain.gov/eagle-mountain-city-celebrates-major-milestone-with-qts-topping-out-ceremony/","https://civicrollcall.com/data-centers.html"]},
 {id:"qts2",name:"QTS second site (524 acres)",topic:"Data centers",status:"Approved",progress:"Rezoned; construction not reported",ms:[{date:"2026-03",stage:"Approved",label:"Rezoned"}],note:"QTS-SCL 2.",src:["https://civicrollcall.com/data-centers.html"]},
 {id:"tract",name:"Tract data center land",topic:"Data centers",status:"Proposed",progress:"Land and infrastructure only; nothing vertical committed",ms:[{date:"2024-01",stage:"Proposed",label:"668+ acres acquired"},{date:"2028-01",stage:"Under construction",label:"400+ MW transmission targeted by 2028",expected:true}],note:"In Rocky Mountain Power queue per Tract.",src:["https://eaglemountain.gov/wp-content/uploads/2024/10/Eagle-Mountain-Press-Release_1.17.2024-1.pdf"]},
 {id:"google",name:"Google (Curleybird) land",topic:"Data centers",status:"Proposed",progress:"Land held; delayed by power supply (Feb 2026 report)",ms:[{date:"2021-06",stage:"Approved",label:"Agreements, 320 acres"},{date:"2021-10",stage:"Proposed",label:"Announced"}],note:"No city document ties Curleybird to Google.",src:["https://civicrollcall.com/data-centers.html"]},
 {id:"corrigan",name:"Corrigan Farms data center site",topic:"Data centers",status:"Approved",progress:"Rezoned; no user named",ms:[{date:"2026-10-06",stage:"Proposed",label:"Hearing held, tabled"},{date:"2026-10-20",stage:"Approved",label:"Rezone 5-0, agreement 4-1"}],note:"41 acres (parcel 59:068:0006); power plant would need a separate application.",src:["https://eaglemountain.gov/eagle-mountain-city-council-meeting-october-20-whats-on-the-agenda/","https://emv.soudub.com/issues/valueletter-2026-october-22/"]},
 {id:"overland",name:"Overland / Eagle's Landing retail",topic:"Development",status:"Approved",progress:"Construction status unknown",ms:[{date:"2026-03-25",stage:"Approved",label:"5th MDA amendment 4-0"}],note:"One source dates an Overland amendment vote to Aug 18; ORD-10-2026 posted Oct 27 (unresolved).",src:["https://eaglemountain.openutah.org/development/overland-master-development-agreement-eagles-landing-project","https://www.utah.gov/pmn/sitemap/publicbody/7293.html"]},
 {id:"cityhall",name:"City Hall and library feasibility study",topic:"Development",status:"Approved",progress:"Contract approved; study progress unknown",ms:[{date:"2026-06-16",stage:"Approved",label:"Contract approved (MHTN Architects)"}],note:"",src:["https://eaglemountain.openutah.org/meetings/2026-06-16-city-council-jun-16-2026-d3f038e4-117b-4512-88b0-f7784921bcf6"]},
 {id:"wwtp",name:"Wastewater plant expansion",topic:"Utilities",status:"Under construction",progress:"Groundbreaking Oct 23, 2026; completion date unpublished",ms:[{date:"2025-09",stage:"Proposed",label:"2025 Wastewater Master Plan"},{date:"2026-08-18",stage:"Approved",label:"Construction bid awarded"},{date:"2026-10-06",stage:"Approved",label:"Master plan/IFFP adopted ($259M)"},{date:"2026-10-23",stage:"Under construction",label:"Groundbreaking"}],note:"2.4 MGD plant hit loading limit at ~1.5 MGD; adds 6 MGD MBR facility.",src:["https://eaglemountain.gov/wastewater-treatment-plant-expansion-october-2026/","https://www.utah.gov/pmn/sitemap/notice/1114251.html"]},
 {id:"water",name:"Culinary water IFFP projects",topic:"Utilities",status:"Approved",progress:"Plan adopted; project progress unknown",ms:[{date:"2026-09-08",stage:"Proposed",label:"Planning Commission recommends"},{date:"2026-10-06",stage:"Approved",label:"Council adopts (ORD-43-2026)"}],note:"5-year cost estimate $109.1M.",src:["https://eaglemountain.openutah.org/meetings/2026-09-08-planning-commission-sep-8-2026-71fbd3a0-f680-4fc0-8c38-7e2a0db72dd2","https://www.utah.gov/pmn/sitemap/publicbody/7293.html"]},
 {id:"pony",name:"Pony Express Pkwy to 7 lanes (EM)",topic:"Transportation",status:"Proposed",progress:"Discussed; no timeline announced",ms:[{date:"2026-07-30",stage:"Proposed",label:"Joint session discussion"}],note:"Lake Mountain Corridor to Mountain View Corridor.",src:["https://eaglemountain.openutah.org/meetings/2026-07-30-city-council-jul-30-2026-b9ae7319-468b-44d8-baab-9354632c2202"]},
 {id:"ponyss",name:"Pony Express widening (Saratoga Springs)",topic:"Transportation",status:"Under construction",progress:"12-18 month estimate from May 2026",ms:[{date:"2026-05",stage:"Under construction",label:"Construction begins"},{date:"2027-05",stage:"Complete",label:"Earliest est. finish (12 mo)",expected:true},{date:"2027-11",stage:"Complete",label:"Latest est. finish (18 mo)",expected:true}],note:"Saratoga Rd to 1100 W Lehi, five lanes.",src:["https://www.saratogasprings-ut.gov/853/Infrastructure-Projects"]},
 {id:"lmc",name:"Lake Mountain Corridor (Mid Valley Rd)",topic:"Transportation",status:"Proposed",progress:"Alignment under study; some Midvalley Road change orders approved",ms:[{date:"2026-07-30",stage:"Proposed",label:"Alignment options presented"},{date:"2026-09-15",stage:"Approved",label:"Change orders on consent"}],note:"UDOT facility; funding is the main hurdle.",src:["https://eaglemountain.openutah.org/meetings/2026-07-30-city-council-jul-30-2026-b9ae7319-468b-44d8-baab-9354632c2202","https://utahledger.com/regions/utah-county/eagle-mountain/meetings/council-2026-09-15"]},
 {id:"mvc",name:"Mountain View Corridor to SR-73 (UDOT)",topic:"Transportation",status:"Approved",progress:"Funded; construction as early as 2027",ms:[{date:"2024-05-20",stage:"Approved",label:"$553M funded"},{date:"2027-01",stage:"Under construction",label:"Start as early as 2027",expected:true}],note:"Also: SR-73 freeway to Ranches Pkwy ($459M).",src:["https://connect.udot.utah.gov/2024/05/20/state-greenlights-nearly-1-4-billion-in-new-udot-projects-for-northwest-utah-county/"]},
 {id:"budget",name:"FY2026-27 budget and tax rate",topic:"Budget & taxes",status:"Complete",progress:"Adopted Aug 18, 2026",ms:[{date:"2026-06-16",stage:"Approved",label:"Interim budget"},{date:"2026-08-18",stage:"Complete",label:"$363,992,973 budget, 0.000900 rate"},{date:"2026-09-01",stage:"Complete",label:"Property tax dedicated to public safety"}],note:"Rate vs certified 0.000530.",src:["https://utahledger.com/regions/utah-county/eagle-mountain/meetings/council-2026-08-18","https://www.utah.gov/pmn/sitemap/notice/1106165.html"]},
 {id:"eaglesl",name:"Eagle's Landing: Smith's + Lowe's",topic:"Amenities",status:"Approved",progress:"Construction start and opening dates TBD (city, Mar 2026)",ms:[{date:"2026-02-10",stage:"Proposed",label:"Planning Commission favorable recommendation"},{date:"2026-03-25",stage:"Approved",label:"City Council approval"},{date:"2026-06-02",stage:"Approved",label:"RDA Board approval 5-0"}],note:"North of Mid Valley Rd, east of Pony Express Pkwy.",src:["https://eaglemountain.gov/lowes-smiths-gain-city-council-approval/","https://eaglemountain.openutah.org/development/smiths-marketplace-and-lowes-retail-development"]},
 {id:"freddys",name:"Freddy's Frozen Custard",topic:"Amenities",status:"Complete",progress:"Open",ms:[{date:"2026-02-18",stage:"Complete",label:"Opened, 3567 E Pony Express Pkwy"}],note:"",src:["https://www.freddys.com/blog/freddys-opens-eagle-mountain-wednesday"]},
 {id:"panda",name:"Panda Express",topic:"Amenities",status:"Complete",progress:"Open",ms:[{date:"2026-08-07",stage:"Complete",label:"Grand opening, 4180 Pony Express Pkwy"}],note:"First Panda Express in Eagle Mountain.",src:["https://www.valleyjournals.com/events/346057/panda-express-grand-opening-celebration"]},
 {id:"k16",name:"K-16 campus: high school, UVU, MTECH",topic:"Amenities",status:"Proposed",progress:"Land bought; no opening date; high school takes about 3 years to build",ms:[{date:"2026-04",stage:"Approved",label:"Lake Mountain SD board approves 100-acre purchase"}],note:"West of Eagle Mountain Blvd, north of Midvalley Rd; next to a planned Intermountain Health hospital (unconfirmed). UVU and MTECH need state funding.",src:["https://www.heraldextra.com/news/2026/may/04/pioneering-model-lake-mountain-school-district-secures-land-for-future-k-16-campus/","https://kutv.com/news/local/lake-mountain-district-opens-new-school-as-plans-move-forward-for-education-campus"]}
];
const goals = [
 {goal:"Preserve scenic beauty, vistas and wildlife habitat; provide interconnected open space",source:"2018 General Plan, Meaningful Open Space & Amenities",href:"https://eaglemountain.gov/wp-content/uploads/2026/04/mp-parks-trails-open-space-master-plan.pdf",related:[],status:"Unknown"},
 {goal:"Invest in parks; finish partially developed parks (Sweetwater, Smith Ranch Regional)",source:"2020 Parks, Trails & Open Space Master Plan",href:"https://eaglemountain.gov/wp-content/uploads/2026/04/mp-parks-trails-open-space-master-plan.pdf",related:[],status:"Unknown"},
 {goal:"Create a multi-modal transportation system",source:"2018 General Plan; 2022 Transportation Master Plan",href:"https://eaglemountain.gov/priorities-plans/responsible-growth/",related:["pony","ponyss","lmc","mvc"],status:"In progress"},
 {goal:"Expand wastewater treatment for growth and new discharge rules",source:"Wastewater Master Plan/IFFP (adopted Oct 6, 2026)",href:"https://www.utah.gov/pmn/sitemap/notice/1114251.html",related:["wwtp"],status:"Under construction"},
 {goal:"Fund culinary water system for growth (Talons Cove, Spring Run)",source:"Culinary Water IFFP (adopted 2026)",href:"https://www.utah.gov/pmn/sitemap/publicbody/7293.html",related:["water"],status:"Plan adopted"},
 {goal:"Dedicate property tax solely to public safety",source:"ORD-42-2026, FY26-27 budget",href:"https://www.utah.gov/pmn/sitemap/notice/1106165.html",related:["budget"],status:"Adopted"},
 {goal:"Use data centers to pay for infrastructure and employ residents",source:"Mayor's statement, Tract release (Jan 2024)",href:"https://eaglemountain.gov/wp-content/uploads/2024/10/Eagle-Mountain-Press-Release_1.17.2024-1.pdf",related:["meta","qts1","qts2","tract","google","corrigan"],status:"In progress"}
];
const amenities = [
 {name:"Walmart Supercenter #1725",cat:"Grocery & retail",status:"Open",when:"Open (date not checked)",where:"9399 N Spring Run Pkwy",src:"https://www.walmart.com/store/1725-eagle-mountain-ut"},
 {name:"Smith's Marketplace",cat:"Grocery & retail",status:"Approved",when:"TBD per city",where:"Eagle's Landing, north of Mid Valley Rd, east of Pony Express Pkwy",src:"https://eaglemountain.gov/lowes-smiths-gain-city-council-approval/"},
 {name:"Lowe's Home Improvement",cat:"Grocery & retail",status:"Approved",when:"TBD per city",where:"Eagle's Landing",src:"https://eaglemountain.gov/lowes-smiths-gain-city-council-approval/"},
 {name:"Freddy's Frozen Custard & Steakburgers",cat:"Restaurants",status:"Open",when:"Feb 18, 2026",where:"3567 E Pony Express Pkwy",src:"https://www.freddys.com/blog/freddys-opens-eagle-mountain-wednesday"},
 {name:"Panda Express",cat:"Restaurants",status:"Open",when:"Aug 7, 2026 (grand opening)",where:"4180 Pony Express Pkwy",src:"https://www.valleyjournals.com/events/346057/panda-express-grand-opening-celebration"},
 {name:"Eagle's Landing center",cat:"Commercial centers",status:"Approved",when:"TBD",where:"North of Mid Valley Rd, east of Pony Express Pkwy (Overland MDA)",src:"https://eaglemountain.openutah.org/development/overland-master-development-agreement-eagles-landing-project"},
 {name:"Gateway Park land use plan",cat:"Commercial centers",status:"Proposed",when:"Unknown",where:"About 600 acres north of SR-73",src:"https://eaglemountain.openutah.org/meetings/2c821a48-6a43-415d-af7e-f4914baf7945"},
 {name:"Sweetwater Park, Smith Ranch Regional Park",cat:"Parks & rec",status:"Open (partly developed as of 2020 plan)",when:"Unknown",where:"Not stated in source",src:"https://eaglemountain.gov/wp-content/uploads/2026/04/mp-parks-trails-open-space-master-plan.pdf"},
 {name:"City recreational youth soccer (in-house)",cat:"Parks & rec",status:"Approved",when:"Starting next season (per Mar 25, 2026 meeting)",where:"Citywide",src:"https://eaglemountain.openutah.org/meetings/2c821a48-6a43-415d-af7e-f4914baf7945"},
 {name:"Juniper Basin school (Lake Mountain SD)",cat:"Schools",status:"Open",when:"Opening date not stated",where:"Eagle Mountain",src:"https://kutv.com/news/local/lake-mountain-district-opens-new-school-as-plans-move-forward-for-education-campus"},
 {name:"New high school + UVU + MTECH campus",cat:"Schools",status:"Proposed",when:"No date; about 3 years to build",where:"West of Eagle Mountain Blvd, north of Midvalley Rd",src:"https://www.heraldextra.com/news/2026/may/04/pioneering-model-lake-mountain-school-district-secures-land-for-future-k-16-campus/"},
 {name:"Intermountain Health hospital",cat:"Healthcare",status:"Unconfirmed",when:"No date published",where:"Next to the K-16 campus",src:"https://kutv.com/news/local/lake-mountain-district-opens-new-school-as-plans-move-forward-for-education-campus"},
 {name:"City Hall & library feasibility study",cat:"Library & civic",status:"Approved (study)",when:"Contract Jun 16, 2026",where:"Not stated",src:"https://eaglemountain.openutah.org/meetings/2026-06-16-city-council-jun-16-2026-d3f038e4-117b-4512-88b0-f7784921bcf6"},
 {name:"Fire Station 253",cat:"Public safety",status:"Open",when:"Opening date not stated",where:"Next to a park, neighborhood and middle school",src:"https://www.brwarch.com/projects/ufsa-fs-253/"}
];
// Map pins: coordinates geocoded from OpenStreetMap Nominatim on Oct 29, 2026.
const pins = [
 {name:"City Hall (1650 E Stagecoach Run)",lat:40.3093503,lng:-112.0120054,approx:false,note:"OSM townhall feature",src:"https://www.openstreetmap.org/way/77692840"},
 {name:"Walmart Supercenter (9399 N Spring Run Pkwy)",lat:40.3827583,lng:-111.9776201,approx:false,note:"OSM supermarket feature",src:"https://www.walmart.com/store/1725-eagle-mountain-ut"},
 {name:"Freddy's (3567 E Pony Express Pkwy)",lat:40.3614568,lng:-111.9751195,approx:false,note:"OSM address match",src:"https://www.freddys.com/blog/freddys-opens-eagle-mountain-wednesday"},
 {name:"Panda Express (4180 Pony Express Pkwy)",lat:40.3620428,lng:-111.9473717,approx:true,note:"Approximate: geocoded to the parkway, not the building",src:"https://www.valleyjournals.com/events/346057/panda-express-grand-opening-celebration"},
 {name:"Meta data center campus",lat:40.2688261,lng:-112.0175808,approx:true,note:"Approximate: center of OSM industrial area tagged for Meta",src:"https://www.openstreetmap.org/way/1035123482"}
];

// Meetings from the city's CivicClerk portal API (eaglemountainut.api.civicclerk.com), pulled Oct 29, 2026.
// minutesStatus: Approved = 'Approved Minutes' file published; Pending = none published yet.
const meetings = [
{
"id": 694,
"date": "2026-12-22",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": true,
"summary": [],
"agenda": null,
"packet": null,
"minutes": null,
"minutesStatus": "Upcoming",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/694/files",
"decisions": []
},
{
"id": 732,
"date": "2026-12-15",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": true,
"summary": [],
"agenda": null,
"packet": null,
"minutes": null,
"minutesStatus": "Upcoming",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/732/files",
"decisions": []
},
{
"id": 681,
"date": "2026-12-08",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": true,
"summary": [],
"agenda": null,
"packet": null,
"minutes": null,
"minutesStatus": "Upcoming",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/681/files",
"decisions": []
},
{
"id": 761,
"date": "2026-12-01",
"body": "City Council",
"name": "City Council Meeting- Special Meeting",
"upcoming": true,
"summary": [],
"agenda": null,
"packet": null,
"minutes": null,
"minutesStatus": "Upcoming",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/761/files",
"decisions": []
},
{
"id": 719,
"date": "2026-12-01",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": true,
"summary": [],
"agenda": null,
"packet": null,
"minutes": null,
"minutesStatus": "Upcoming",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/719/files",
"decisions": []
},
{
"id": 693,
"date": "2026-11-24",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": true,
"summary": [],
"agenda": null,
"packet": null,
"minutes": null,
"minutesStatus": "Upcoming",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/693/files",
"decisions": []
},
{
"id": 731,
"date": "2026-11-17",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": true,
"summary": [],
"agenda": null,
"packet": null,
"minutes": null,
"minutesStatus": "Upcoming",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/731/files",
"decisions": []
},
{
"id": 680,
"date": "2026-11-10",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": true,
"summary": [],
"agenda": null,
"packet": null,
"minutes": null,
"minutesStatus": "Upcoming",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/680/files",
"decisions": []
},
{
"id": 774,
"date": "2026-11-10",
"body": "City Council",
"name": "City Council Special Session",
"upcoming": true,
"summary": [],
"agenda": null,
"packet": null,
"minutes": null,
"minutesStatus": "Upcoming",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/774/files",
"decisions": []
},
{
"id": 718,
"date": "2026-11-04",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": true,
"summary": [],
"agenda": null,
"packet": null,
"minutes": null,
"minutesStatus": "Upcoming",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/718/files",
"decisions": []
},
{
"id": 760,
"date": "2026-11-03",
"body": "City Council",
"name": "City Council Meeting- Special Meeting",
"upcoming": true,
"summary": [],
"agenda": null,
"packet": null,
"minutes": null,
"minutesStatus": "Upcoming",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/760/files",
"decisions": []
},
{
"id": 775,
"date": "2026-10-28",
"body": "City Council",
"name": "Special Session - Joint Work Meeting with Lake Mountain School District",
"upcoming": false,
"summary": [
"Joint work session with Lake Mountain School District",
"Topics: city growth projections, school boundary study and enrollment, facilities, online school, district transition"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=3017,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=3019,plainText=false)",
"minutes": null,
"minutesStatus": "Pending",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/775/files",
"textSource": "agenda",
"decisions": []
},
{
"id": 692,
"date": "2026-10-27",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"Discussion of a water rights code",
"Hearings on code changes for public/private utilities (17.20, 17.10) and greenhouse/farm products (17.65.080)"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=3012,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=3013,plainText=false)",
"minutes": null,
"minutesStatus": "Pending",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/692/files",
"textSource": "agenda",
"decisions": []
},
{
"id": 730,
"date": "2026-10-20",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"Corrigan Farms rezone (approved 5-0) and development agreement (approved 4-1, power plant language removed)",
"Discussion: MAP funding priorities and alternative energy overlay zone revisions",
"Resolutions on the community chaplain program, a Pony Express Land Development encroachment license, and the Quicksilver Solar CRA interlocal agreement",
"Landscaping/artificial turf code amendment (16.25.040, 17.10.030)"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=3004,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=3008,plainText=false)",
"minutes": null,
"minutesStatus": "Pending",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/730/files",
"textSource": "agenda",
"decisions": []
},
{
"id": 679,
"date": "2026-10-13",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"Deer Run concept plan discussion",
"Site plan for UCCU Express",
"Oak Hollow and Parkway Crossroads rezone",
"Artificial turf and rear-yard landscaping code"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2990,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2992,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=3018,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/679/files",
"textSource": "minutes",
"decisions": [
{
"item": "Eagle Mountain Planning Commission Meeting \u2013 October 13, 2026 Page 1 of 4",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "UCCU Express",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Oak Hollow and Parkway Crossroads Rezone",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Artificial Turf and rear yard Landscaping",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 759,
"date": "2026-10-08",
"body": "City Council",
"name": "City Council - Budget Work Session",
"upcoming": false,
"summary": [
"Kickoff of FY2028 budget planning; schedule runs to budget adoption June 15, 2027",
"Discussion only, no action on the budget"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2989,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2994,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=3011,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/759/files",
"textSource": "minutes",
"decisions": []
},
{
"id": 717,
"date": "2026-10-06",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"Adopted culinary water IFFP and wastewater master plan/IFFP",
"Ranches Parkway improvement interlocal agreement; purchase agreement with Smith's Food & Drug",
"Corrigan Farms rezone hearing held (items later tabled to Oct 20)",
"Discussions: UFA/UFSA fire service overview, RV parking code, chaplain services, investment portfolio; community garden policy"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2980,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2984,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=3010,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/717/files",
"textSource": "minutes",
"decisions": [
{
"item": "Approving a Community Garden Policy",
"outcome": "Approved",
"vote": "4:1"
},
{
"item": "RESOLUTIO N \u2013 A Resolution of Eagle Mountain City, Utah, Authorizing the Land Disposal Application to Proceed and Directing Staff to Begin the Notice \u2026",
"outcome": "Denied",
"vote": "Unanimous"
},
{
"item": "Authorizing the Land Disposal Application to Proceed and Directing Staff to Begin the Notice and Public Hearing Process for a Portion of Utah County P\u2026",
"outcome": "Denied",
"vote": "Unanimous"
},
{
"item": "Approving the Corrigan Farms Development Agreement",
"outcome": "Tabled",
"vote": "Unanimous"
},
{
"item": "Updating the Culinary Water Impact Fee Facility Plan (IFFP)",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Updating the Wastewater Master Plan and the Wastewater Impact Fee Facility Plan (IFFP)",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code Section 9.10 and 17.47 Regarding Archery Use Within the City Eagle Mountain City Council",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code Section 17.60.120 General Fencing/Screening Provisions",
"outcome": "Tabled",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code Section 17.25.040 Residential Standards Table",
"outcome": "Tabled",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code 17.100.040 Master Site Plans",
"outcome": "Tabled",
"vote": "4:1"
},
{
"item": "UPDATE \u2013 Legislative Priorities List",
"outcome": "Approved",
"vote": "Unanimous"
}
]
},
{
"id": 773,
"date": "2026-09-29",
"body": "City Council",
"name": "City Council - Projects Planning Session",
"upcoming": false,
"summary": [
"City Hall feasibility study (MHTN) and capital projects priorities",
"Discussion only, no action"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2975,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2985,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=3009,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/773/files",
"textSource": "minutes",
"decisions": []
},
{
"id": 771,
"date": "2026-09-24",
"body": "City Council",
"name": "City Council - Strategic Planning Session",
"upcoming": false,
"summary": [
"Strategic planning: drafting an organizational vision statement and priorities",
"Discussion only, no action"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2972,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2976,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2987,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/771/files",
"textSource": "minutes",
"decisions": []
},
{
"id": 691,
"date": "2026-09-22",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"Recommendations on wildland urban interface standards and archery zoning",
"Corrigan Farms rezone and development agreement hearings",
"Training on sports and recreation"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2966,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2968,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2996,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/691/files",
"textSource": "minutes",
"decisions": [
{
"item": "Wildland Urban Interface Standards",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Creating Archery Zoning in Eagle Mountain City",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Corrigan Farms Rezone",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Corrigan Farms Development Agreement",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 729,
"date": "2026-09-15",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"First amendment to the FY2026-27 budget approved",
"Spring Run Plaza Lot 1 and Lot 2 site plans (shared parking condition on Lot 2)",
"Lobbying agreement with Utah Public Solutions; reimbursement agreement with Spring Run Parkway Partners II",
"Discussions: transmission line code, RV parking, Community Services Board project recommendations"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2964,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2961,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2986,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/729/files",
"textSource": "minutes",
"decisions": [
{
"item": "Approving the First Amendment to the Fiscal Year 2026-2027 Annual Budget",
"outcome": "Approved",
"vote": "3:0"
}
]
},
{
"id": 678,
"date": "2026-09-08",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"Recommended approval of the culinary water and wastewater master plan/IFFP updates",
"Discussed a Cedar Pass Ranch historical / rural large-lot zone",
"Ethics and open meetings training"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2953,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2954,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2974,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/678/files",
"textSource": "minutes",
"decisions": [
{
"item": "Culinary Water Impact Fee Facility Plan (IFFP)",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Wastewater Master Plan and the Wastewater Impact Fee Facility Plan (IFFP)",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 716,
"date": "2026-09-01",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"Property tax allocation to public safety (ORD-42-2026) and land disposal code (ORD-40-2026)",
"Retaining wall standards; Pinnacles rezone",
"Brylee Farms Phase B agreement amendment; joining the North Utah County Aquifer Council",
"Discussions: community survey, Utah Wellbeing Project, home business standards, community garden"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2944,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2950,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2965,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/716/files",
"textSource": "minutes",
"decisions": [
{
"item": "Amending Eagle Mountain Municipal Code Chapter 3.30 regarding Land Disposals",
"outcome": "Approved",
"vote": "4:0"
},
{
"item": "PRELIMINARY PLAT \u2013 Gateway Park Phase 3",
"outcome": "Approved",
"vote": "4:0"
},
{
"item": "Councilmember Whiting seconded the amended motion",
"outcome": "Approved",
"vote": "4:0"
},
{
"item": "Rezoning Certain Lands Known as Pinnacles and Approving the Pinnacles Master Development Plan/Master Development Agreement Amendment",
"outcome": "Denied",
"vote": "3:1"
},
{
"item": "ORDIANCE \u2013 An Ordinance of Eagle Mountain City, Utah, Enacting Chapter",
"outcome": "Approved",
"vote": "4:0"
},
{
"item": "UPDATE \u2013 Legislative Priorities List",
"outcome": "Approved",
"vote": "4:0"
}
]
},
{
"id": 770,
"date": "2026-08-26",
"body": "City Council",
"name": "City Council Meeting - Special Session",
"upcoming": false,
"summary": [
"Resolution protesting the Red Cedar Corporation annexation petition filed with the Town of Cedar Fort"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2939,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2940,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2952,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/770/files",
"textSource": "minutes",
"decisions": [
{
"item": "Protesting the Red Cedar Corporation Annexation Petition Filed with the Town of Cedar Fort on July 27, 2026",
"outcome": "Approved",
"vote": "Unanimous"
}
]
},
{
"id": 690,
"date": "2026-08-25",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"5 recorded votes on agenda items (5 unanimous); details under Decisions.",
"Recommended approval (Unanimous): Brylee Farms Second Amendment Phase B Development Agreement",
"Recommended approval (Unanimous): PRELIMINARY PLAT-Gateway Park Phase 3",
"Recommended approval (Unanimous): Spring Run Plaza Lot 1",
"Discussed: Rules of Order and Procedure"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2926,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2927,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2956,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/690/files",
"textSource": "minutes",
"decisions": [
{
"item": "Brylee Farms Second Amendment Phase B Development Agreement",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "PRELIMINARY PLAT-Gateway Park Phase 3",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Spring Run Plaza Lot 1",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Spring Run Plaza Lot 2",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Retaining Wall Construction Standards Changes",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 753,
"date": "2026-08-18",
"body": "Redevelopment Agency",
"name": "Redevelopment Agency Board Meeting",
"upcoming": false,
"summary": [
"Redevelopment Agency: Mid-Valley Community Reinvestment Area plan and budget adopted",
"Interlocal and participation agreements for the Mid-Valley CRA"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2908,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2918,plainText=false)",
"minutes": null,
"minutesStatus": "Pending",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/753/files",
"textSource": "agenda",
"decisions": []
},
{
"id": 728,
"date": "2026-08-18",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"Repealed the Aug 6 tax rate; approved 0.000900 rate (4-1) and adopted $363,992,973 FY2026-27 budget (4-1)",
"Awarded bid for the 6.0 MGD wastewater treatment facility expansion",
"Accepted FY2025 audited financial statements; Mid-Valley CRA agreements",
"Discussions: Pony Express Business Park, archery overlay, property tax funding for the Sheriff's Office"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2911,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2925,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2951,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/728/files",
"textSource": "minutes",
"decisions": [
{
"item": "Accepting the Eagle Mountain City Fiscal Year 2025 Audited Financial Statements",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Awarding the Bid for EMC 6.0 MGD Wastewater Treatment Facility Expansion \u2013 GMP-2 Oxidation Ditch and Miscellaneous Site Improvements to MGC Contractor\u2026",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Repealing a Property Tax Increase Above the Certified Tax Rate for Fiscal Year 2026-2027",
"outcome": "Approved",
"vote": "4:1"
},
{
"item": "Approving a Property Tax Increase Above the Certified Tax Rate for Fiscal Year 2026-2027",
"outcome": "Approved",
"vote": "4:1"
},
{
"item": "Adopting the Fiscal Year 2026-2027 Annual Budget Totaling $363,992,973",
"outcome": "Approved",
"vote": "4:1"
},
{
"item": "Amending the Eagle Mountain Municipal Code 16.20.040 (Preliminary Plats) regarding Street Names",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code 16.25.040, Final Plats",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Approving the Mid-Valley CRA Participation Agreement between Eagle Mountain City, the Redevelopment Agency of Eagle Mountain City, and Terra Smith\u2019s E\u2026",
"outcome": "Approved",
"vote": "4:1"
},
{
"item": "Adopting the Mid-Valley Community Reinvestment Project Area Plan, as Approved by the Redevelopment Agency of Eagle Mountain City, as the Official Comm\u2026",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Approving the 5 Amendment to the Amended and Restated Overland Master Development Agreement",
"outcome": "Approved",
"vote": "4:1"
}
]
},
{
"id": 677,
"date": "2026-08-11",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"1 recorded votes on agenda items (1 unanimous); details under Decisions.",
"Recommended approval (Unanimous): Pinnacles Rezone and Master Development Plan/Master Development Agreement Amendment",
"Discussed: Site Plans"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2898,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2899,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2942,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/677/files",
"textSource": "minutes",
"decisions": [
{
"item": "Pinnacles Rezone and Master Development Plan/Master Development Agreement Amendment",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 756,
"date": "2026-08-10",
"body": "City Council",
"name": "City Council - Special Session",
"upcoming": false,
"summary": [
"Approved the FY2026 CDBG annual action plan"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2901,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2902,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2931,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/756/files",
"textSource": "minutes",
"decisions": [
{
"item": "Approving the Fiscal Year 2026 Community Development Block Grant (CDBG) Annual Action Plan and Authorizing Its Submission to the U.S. Department of Ho\u2026",
"outcome": "Approved",
"vote": "Unanimous"
}
]
},
{
"id": 747,
"date": "2026-08-06",
"body": "City Council",
"name": "TRUTH-IN-TAXATION PUBLIC HEARING",
"upcoming": false,
"summary": [
"Truth-in-Taxation public hearing on a proposed property tax increase above the certified rate",
"Resolution on a tax increase for FY2026-27 (later repealed and replaced Aug 18)"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2891,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2893,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2930,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/747/files",
"textSource": "minutes",
"decisions": [
{
"item": "R ESOLUTION \u2013 A Resolution of Eagle Mountain City, Utah, Approving a Property Tax Increase above the Certified Tax Rate for Fiscal Year 20226-2027",
"outcome": "Approved",
"vote": "Unanimous"
}
]
},
{
"id": 715,
"date": "2026-08-04",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"Eagle Mountain Chapel and Recreation Building site plan and development agreement",
"Scenic Mountain rezone; Transportation Master Plan amendment",
"Discussions: Brylee Farms Phase B, consolidated project list; CDBG hearing"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2896,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2888,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2929,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/715/files",
"textSource": "minutes",
"decisions": [
{
"item": "APPOINTMENTS",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Approving the Eagle Mountain Chapel and Recreation Building Development Agreement",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Rezoning Certain Lands Knows as Scenic Mountain",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Master Plan know as Transportation Master Plan (TMP) and Impact Fee Facilities Plan (IFFP)",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 755,
"date": "2026-07-30",
"body": "City Council",
"name": "City Council - Interlocal Meeting",
"upcoming": false,
"summary": [
"Joint transportation meeting with Saratoga Springs: Lake Mountain Corridor alignment, Silver Lake school connections",
"Pony Express Pkwy widening to 7 lanes and other connections discussed; no votes"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2878,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2879,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2928,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/755/files",
"textSource": "minutes",
"decisions": []
},
{
"id": 689,
"date": "2026-07-28",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"10 recorded votes on agenda items (10 unanimous); details under Decisions.",
"Recommended approval (Unanimous): Transportation Master Plan and Impact Fee Facilities Plan (IFFP)",
"Approved (Unanimous): Angel\u2019s Landing Lot Split",
"Recommended approval (Unanimous): EMMC 16.20.040 \u2013 Preliminary Plats",
"Discussed: Rob\u2019s Trains; Temporary Use Standards"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2869,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2870,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2906,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/689/files",
"textSource": "minutes",
"decisions": [
{
"item": "Transportation Master Plan and Impact Fee Facilities Plan (IFFP)",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Angel\u2019s Landing Lot Split",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "EMMC 16.20.040 \u2013 Preliminary Plats",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "EMMC 16.25.040 \u2013 Final Plats",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Eagle Mountain Chapel and Recreation Building Development Agreement",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Eagle Mountain Chapel and Recreation Building \u2013 Site Plan",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "EMMC 17.60.12C. Barbed Wire Fencing",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "EMMC 17.24.040 \u2013 Residential Standards Table",
"outcome": "Tabled",
"vote": "Unanimous"
},
{
"item": "EMMC \u2013 17.100.040 \u2013 Master Site Plans",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Pinnacles Rezone",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 727,
"date": "2026-07-21",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"Off-Street Trails Master Plan ordinance",
"First amendment to the Stadion (Meta) development agreement; Triumph subdivision MDA amendment",
"Noise level and preliminary plat code amendments",
"Discussions: Best Friends Animal Society, CDBG priorities, Ranches golf course parcel sale"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1866,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1867,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2897,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/727/files",
"textSource": "minutes",
"decisions": [
{
"item": "Approving the Off-Street Trails Master Plan",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "MOTION TO RECONSIDER \u2013 Resolution No. 60-2025 Approving the Disposal of 0.156 Acres of Designated \u201cSignificant Real Property\u201d (Utah County Parcel No. \u2026",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code Section 16.20 Preliminary Plats",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code 8.15.070 Noise Levels",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "POSSIBLE ACTION \u2013 Approval of Second Amendment to the Triumph Master Development Agreement for the Triumph Subdivision",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "UPDATE \u2013 Legislative Priorities List",
"outcome": "Approved",
"vote": "4:1"
}
]
},
{
"id": 676,
"date": "2026-07-14",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"6 recorded votes on agenda items (6 unanimous); details under Decisions.",
"Recommended approval (Unanimous): Scenic Mountain Rezone",
"Tabled (Unanimous): Eagle Mountain Chapel and Recreation Building Site Plan",
"Tabled (Unanimous): Eagle Mountain Chapel and Recreation Building Development Agreement",
"Discussed: Architecture: The Value of Constructing Buildings to Last"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1861,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1862,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2882,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/676/files",
"textSource": "minutes",
"decisions": [
{
"item": "Scenic Mountain Rezone",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Eagle Mountain Chapel and Recreation Building Site Plan",
"outcome": "Tabled",
"vote": "Unanimous"
},
{
"item": "Eagle Mountain Chapel and Recreation Building Development Agreement",
"outcome": "Tabled",
"vote": "Unanimous"
},
{
"item": "Wright Retaining Wall Variance",
"outcome": "Denied",
"vote": "Unanimous"
},
{
"item": "Brylee Townhomes Development Agreement First Amendment",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Stadion Development Agreement First Amendment Eagle Mountain Planning Commission Meeting \u2013 July 14, 2026 Page 4 of 5",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 714,
"date": "2026-07-07",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"10 recorded votes on agenda items (8 unanimous); details under Decisions.",
"Approved (4:1): Enacting Chapter 17.64 of the Eagle Mountain Municipal Code Establishing an Alternative Energy Overlay Zone",
"Approved (4:1): And Possible Action: Citywide Speed Management Study at Key Locations",
"Approved (Unanimous): Youth Council",
"Discussed: Legislative Update \u2013 Lobbyist \u2013 David Stewart; Land Disposal Process Overview \u2013 City Attorney, Marcus; Procedural Options for Land Disposal Approved August 19,; Off - Street Trails Master Plan \u2013 Deputy City Manager, Steve; First Amendment to the Brylee Farms Phase B Development"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1854,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1856,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2868,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/714/files",
"textSource": "minutes",
"decisions": [
{
"item": "Youth Council",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Approving the Second Amendment to the Eagle Quest East Maste r Development Agreement",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Approving the Second Amendment to the Eagle Quest East Master Development Agreement",
"outcome": "Denied",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code Section 17.75.052 regarding Accessory Recreation Buildings",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Enacting Chapter 17.64 of the Eagle Mountain Municipal Code Establishing an Alternative Energy Overlay Zone",
"outcome": "Approved",
"vote": "4:1"
},
{
"item": "Amending the Eagle Mountain Municipal Code Section 17.10.030 Definitions",
"outcome": "Tabled",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code Section 17.10.030 Definitions, Section 17.80.120 Political Signs, and Section 17.80.160 Temporary Signs",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain City Annexation Policy Plan",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code Chapter 10.10 Parking, Regarding Vehicle Parking in Residential Zones",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "And Possible Action: Citywide Speed Management Study at Key Locations",
"outcome": "Approved",
"vote": "4:1"
}
]
},
{
"id": 688,
"date": "2026-06-23",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"4 recorded votes on agenda items (4 unanimous); details under Decisions.",
"Recommended approval (Unanimous): Annexation Policy Plan",
"Recommended approval (Unanimous): Triumph Master Development Agreement 2nd Amendment",
"Recommended approval (Unanimous): EMMC 17.10.030, 17.80.120, and 17.160-Seasonal and Political Signs",
"Discussed: Highest and Best Use Analysis"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1845,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1847,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2865,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/688/files",
"textSource": "minutes",
"decisions": [
{
"item": "Annexation Policy Plan",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Triumph Master Development Agreement 2nd Amendment",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "EMMC 17.10.030, 17.80.120, and 17.160-Seasonal and Political Signs",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "EMMC 16.20, 16.25, and 17.100 \u2013 Cost Estimate",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 750,
"date": "2026-06-16",
"body": "Redevelopment Agency",
"name": "Redevelopment Agency Board Meeting",
"upcoming": false,
"summary": [
"1 recorded votes on agenda items (1 unanimous); details under Decisions.",
"Approved (Unanimous): Adopting the RDA Budget for Fiscal Year 2026-2027"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1843,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1844,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2933,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/750/files",
"textSource": "minutes (OCR)",
"decisions": [
{
"item": "Adopting the RDA Budget for Fiscal Year 2026-2027",
"outcome": "Approved",
"vote": "Unanimous"
}
]
},
{
"id": 726,
"date": "2026-06-16",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"3 recorded votes on agenda items (2 unanimous); details under Decisions.",
"Approved (4:1): Adopting the Fiscal Year 2026-2027 Interim Budget and the Proposed Certified Tax Rate; and Discontinuing DebtBook Services",
"Approved (Unanimous): ORDIN ANCE \u2013 An Ordinance of Eagle Mountain City, Utah, Amending Eagle Mountain Code 2.45 Youth Council",
"Approved (Unanimous): Amending the Eagle Mountain Municipal Code 16.15 Concept Plans",
"Discussed: Proposed Update to Annexation Policy Plan (addition of Area; Transmission Lines and the AG Zone \u2013 Community; Sage Valley Community Entrance S ign \u2013 Planner, St even; Fire Restriction Order; Fire Restrictions Order"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1831,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1838,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1860,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/726/files",
"textSource": "minutes",
"decisions": [
{
"item": "ORDIN ANCE \u2013 An Ordinance of Eagle Mountain City, Utah, Amending Eagle Mountain Code 2.45 Youth Council",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Adopting the Fiscal Year 2026-2027 Interim Budget and the Proposed Certified Tax Rate; and Discontinuing DebtBook Services",
"outcome": "Approved",
"vote": "4:1"
},
{
"item": "Amending the Eagle Mountain Municipal Code 16.15 Concept Plans",
"outcome": "Approved",
"vote": "Unanimous"
}
]
},
{
"id": 675,
"date": "2026-06-09",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"3 recorded votes on agenda items (3 unanimous); details under Decisions.",
"Recommended approval (Unanimous): EMMC 17.10.030, 17.25.030, and 17.55 Senior Housing Overlay Zone",
"Recommended approval (Unanimous): Eagle Quest East Master Development Agreement Second Amendment Eagle Mountain Planning Commission Meeting \u2013 June 9, 2026 Page 3 of 5",
"Recommended approval (Unanimous): Consolidated Fee Schedule Amendment",
"Discussed: Architecture: The Value of Constructing Buildings to Last"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1820,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1821,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1849,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/675/files",
"textSource": "minutes",
"decisions": [
{
"item": "EMMC 17.10.030, 17.25.030, and 17.55 Senior Housing Overlay Zone",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Eagle Quest East Master Development Agreement Second Amendment Eagle Mountain Planning Commission Meeting \u2013 June 9, 2026 Page 3 of 5",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Consolidated Fee Schedule Amendment",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 751,
"date": "2026-06-02",
"body": "Redevelopment Agency",
"name": "Redevelopment Agency Board Meeting",
"upcoming": false,
"summary": [
"1 recorded votes on agenda items (1 unanimous); details under Decisions.",
"Approved (Unanimous): Approving the Issuance of the Agency's Sales Tax and Tax Increment Revenue Bonds, Series 2026 (the \u201cBonds\") in Par Amount of Not to Exceed $10"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1808,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1811,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2932,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/751/files",
"textSource": "minutes (OCR)",
"decisions": [
{
"item": "Approving the Issuance of the Agency's Sales Tax and Tax Increment Revenue Bonds, Series 2026 (the \u201cBonds\") in Par Amount of Not to Exceed $10",
"outcome": "Approved",
"vote": "Unanimous"
}
]
},
{
"id": 713,
"date": "2026-06-02",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"4 recorded votes on agenda items (3 unanimous); details under Decisions.",
"Approved (3:1): Approving the Pledge of any portion of the City\u2019s Sales and Use Taxes to the Proposed Issuance of the Redevelopment Agency\u2019s Sales Tax and Tax Increme\u2026",
"Approved (Unanimous): Approving a Franchise Agreement with Forged Fiber 37, LLC, a Subsidiary of AT&T",
"Approved (Unanimous): Considering the Disposal of a Portion of Utah County Parcel #45:326:0109, Designating as \u201cSignificant Rea l Property\u201d Pursuant to Eagle Mountain Code",
"Discussed: Employee Procedure Updates (City Issued Cell Phones) -; Employee Procedure Manual Updates (5.40 Credit Cards and; Scenic Mountain Area Rezoning of 223 Properties \u2013 Senior; Proposed Property Tax Impact Schedule"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1803,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1817,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1848,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/713/files",
"textSource": "minutes",
"decisions": [
{
"item": "Approving a Franchise Agreement with Forged Fiber 37, LLC, a Subsidiary of AT&T",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Considering the Disposal of a Portion of Utah County Parcel #45:326:0109, Designating as \u201cSignificant Rea l Property\u201d Pursuant to Eagle Mountain Code",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Approving the Pledge of any portion of the City\u2019s Sales and Use Taxes to the Proposed Issuance of the Redevelopment Agency\u2019s Sales Tax and Tax Increme\u2026",
"outcome": "Approved",
"vote": "3:1"
},
{
"item": "UPDATE \u2013 Legislative Priorities List",
"outcome": "Tabled",
"vote": "Unanimous"
}
]
},
{
"id": 687,
"date": "2026-05-26",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"1 recorded votes on agenda items (1 unanimous); details under Decisions.",
"Recommended denial (Unanimous): VARIANCE-Pony Express Business Park",
"Discussed: Impact Fees"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1780,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1781,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1823,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/687/files",
"textSource": "minutes",
"decisions": [
{
"item": "VARIANCE-Pony Express Business Park",
"outcome": "Recommended denial",
"vote": "Unanimous"
}
]
},
{
"id": 748,
"date": "2026-05-26",
"body": "City Council",
"name": "Special Session - Budget Work Session",
"upcoming": false,
"summary": [
"Discussed: Property Tax Impact Schedule"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1786,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1787,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1819,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/748/files",
"textSource": "minutes",
"decisions": []
},
{
"id": 725,
"date": "2026-05-19",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"5 recorded votes on agenda items (5 unanimous); details under Decisions.",
"Approved (Unanimous): Initiating the City\u2019s Withdrawal from Unified Fire Service Area",
"Approved (Unanimous): Approving a Memorandum of Agreement with Ivory Homes",
"Denied (Unanimous): Amending Eagle Mountain Municipal Code Chapter 17.10.030 Definitions and",
"Discussed: Become a Believer City Benjamin Lyne; Tax Increment Finance Bonding Option Discussion \u2013 Laura; Recreation & Events Sponsorship/Advertising \u2013 Deputy City; Corrigan Farms Rezone \u2013 Senior Planner, David Stroud; Deer Run Concept Plan"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1773,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1777,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1818,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/725/files",
"textSource": "minutes",
"decisions": [
{
"item": "Initiating the City\u2019s Withdrawal from Unified Fire Service Area",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Approving a Memorandum of Agreement with Ivory Homes",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending Eagle Mountain Municipal Code Chapter 17.10.030 Definitions and",
"outcome": "Denied",
"vote": "Unanimous"
},
{
"item": "Approving the Flagship Homes Development Agreement",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "UPDATE \u2013 Legislative Priorities List",
"outcome": "Approved",
"vote": "Unanimous"
}
]
},
{
"id": 674,
"date": "2026-05-12",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"2 recorded votes on agenda items (2 unanimous); details under Decisions.",
"Recommended approval (Unanimous): EMMC17.64A/ternateEnergyOverlayZone",
"Recommended approval (Unanimous): EMMC16.15ConceptPlans"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1768,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1769,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1791,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/674/files",
"textSource": "minutes (OCR)",
"decisions": [
{
"item": "EMMC17.64A/ternateEnergyOverlayZone",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "EMMC16.15ConceptPlans",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 745,
"date": "2026-05-05",
"body": "Redevelopment Agency",
"name": "Redevelopment Agency Board Meeting",
"upcoming": false,
"summary": [
"1 recorded votes on agenda items (1 unanimous); details under Decisions.",
"Approved (Unanimous): Accepting the RDA Tentative Budget for Fiscal Year 2026-2027 and Setting a Public Hearing and Final Budget Adoption on June 16, 2026"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1756,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1762,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1822,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/745/files",
"textSource": "minutes (OCR)",
"decisions": [
{
"item": "Accepting the RDA Tentative Budget for Fiscal Year 2026-2027 and Setting a Public Hearing and Final Budget Adoption on June 16, 2026",
"outcome": "Approved",
"vote": "Unanimous"
}
]
},
{
"id": 712,
"date": "2026-05-05",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"10 recorded votes on agenda items (9 unanimous); details under Decisions.",
"Approved (4:1): Approving the Spring Run Plaza Master Development Agreement",
"Approved (Unanimous): Utah, Amending the Eagle Mountain Municipal Code 17.72.040 HVAC Screening for Multi-Family Buildings",
"Approved (Unanimous): Accepting the Eagle Mountain City Tentative Budget for Fiscal Year 2026-2027 and Setting a Public Hearing for the Interim Budget on for June 16, 2026 \u2026",
"Discussed: Eagle Mountain Standards of Cover - Unified Fire Authority; Senior Housing Overlay Zone - Long Range Planner, Elizabeth; Future Land Use Map \u2013 Planning Director Brandon Larsen; The Mayor intends to state that the tentative"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1759,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1761,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1779,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/712/files",
"textSource": "minutes",
"decisions": [
{
"item": "Utah, Amending the Eagle Mountain Municipal Code 17.72.040 HVAC Screening for Multi-Family Buildings",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Accepting the Eagle Mountain City Tentative Budget for Fiscal Year 2026-2027 and Setting a Public Hearing for the Interim Budget on for June 16, 2026 \u2026",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Acknowledging the Budget Officer\u2019s Statement of a Proposed Property Tax Increase and Property Tax Impact Schedule (Truth-in- Taxation Compliance)",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Declaring Intent to Increase Property Tax Revenue, Providing Notice, and Setting a Public Hearing Date in Accordance with Truth-in- Taxation Requireme\u2026",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Approving the Parks. Trails, and Open Space Master Plan and Impact Fee Facilities Plan (IFFP)",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Official Zoning Map and Future Land Use Map to Assign Current Zoning Designations to the Brandon Park Area",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code Chapter 17.72 regarding Commercial and Multifamily Design Standards",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain City Code Chapter 17.55 Off-Street Parking and Chapter 17.60 Landscaping, Buffering, Fencing and Transitioning",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Approving the Spring Run Plaza Master Development Agreement",
"outcome": "Approved",
"vote": "4:1"
},
{
"item": "PRELIMINARY PLAT \u2013 Spring Run Plaza",
"outcome": "Approved",
"vote": "Unanimous"
}
]
},
{
"id": 686,
"date": "2026-04-28",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"5 recorded votes on agenda items (5 unanimous); details under Decisions.",
"Approved (Unanimous): Eagle Mountain Planning Commission Meeting \u2013 April 28, 2026 Page 1 of 5",
"Recommended approval (Unanimous): Wildlife Urban Interface Code Amendment",
"Tabled (Unanimous): EMMC Chapter 16.15-Concept Plans Eagle Mountain Planning Commission Meeting \u2013 April 28, 2026 Page 2 of 5"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1748,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1749,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1778,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/686/files",
"textSource": "minutes",
"decisions": [
{
"item": "Eagle Mountain Planning Commission Meeting \u2013 April 28, 2026 Page 1 of 5",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Wildlife Urban Interface Code Amendment",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "EMMC Chapter 16.15-Concept Plans Eagle Mountain Planning Commission Meeting \u2013 April 28, 2026 Page 2 of 5",
"outcome": "Tabled",
"vote": "Unanimous"
},
{
"item": "PRELIMINARY PLAT-Spring Run Plaza (Presented, discussed, and voted on after Item 7.D.)",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Spring Run Plaza Master Development Agreement (Presented, discussed, and voted on before Item 7.C.)",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 744,
"date": "2026-04-28",
"body": "City Council",
"name": "Special Session - Budget Work Session",
"upcoming": false,
"summary": [
"No recorded votes found in the minutes (work/discussion session)."
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1750,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2935,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1766,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/744/files",
"textSource": "minutes",
"decisions": []
},
{
"id": 746,
"date": "2026-04-22",
"body": "City Council",
"name": "Strategic and Budget Planning Retreat",
"upcoming": false,
"summary": [
"No recorded votes found in the minutes (work/discussion session)."
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1744,plainText=false)",
"packet": null,
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1765,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/746/files",
"textSource": "minutes",
"decisions": []
},
{
"id": 724,
"date": "2026-04-21",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"3 recorded votes on agenda items (2 unanimous); details under Decisions.",
"Approved (4:1): Amending the Eagle Mountain Municipal Code 17.60 and 17.10 regarding Fencing",
"Approved (Unanimous): Removed and tabled . Councilmember Wood seconded the motion",
"Tabled (Unanimous): Amending the Eagle Mountain Municipal Code 17.72.040 HVAC Screening for Multi- Family Buildings",
"Discussed: Quarterly Financial Report \u2013 Management Analyst Terrene Dela; Trails at Hidden Valley Subdivision Concept Plan (formerly; Brandon Park Rezone \u2013 Planner Steven Lehmitz; DAI Self - Storage & RV Parking - Joe Salisbury"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1742,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1740,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1764,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/724/files",
"textSource": "minutes",
"decisions": [
{
"item": "Removed and tabled . Councilmember Wood seconded the motion",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code 17.72.040 HVAC Screening for Multi- Family Buildings",
"outcome": "Tabled",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code 17.60 and 17.10 regarding Fencing",
"outcome": "Approved",
"vote": "4:1"
}
]
},
{
"id": 673,
"date": "2026-04-14",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"5 recorded votes on agenda items (4 unanimous); details under Decisions.",
"Recommended approval (4:1): EMMC 17.72 Drive-through and structured parking text Code Amendment",
"Tabled (Unanimous): PRELIMINARY PLAT-Spring Run Plaza",
"Recommended approval (Unanimous): Brandon Park Rezone"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1729,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1724,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1753,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/673/files",
"textSource": "minutes",
"decisions": [
{
"item": "PRELIMINARY PLAT-Spring Run Plaza",
"outcome": "Tabled",
"vote": "Unanimous"
},
{
"item": "Brandon Park Rezone",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "EMMC 17.72 Drive-through and structured parking text Code Amendment",
"outcome": "Recommended approval",
"vote": "4:1"
},
{
"item": "EMMC 17.55 and 17.60Landscape and buffering text Code Amendment",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Flagship Master Development Agreement",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 743,
"date": "2026-04-14",
"body": "City Council",
"name": "Special Session - Budget Work Session",
"upcoming": false,
"summary": [
"No recorded votes found in the minutes (work/discussion session)."
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1727,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=2894,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1747,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/743/files",
"textSource": "minutes",
"decisions": []
},
{
"id": 711,
"date": "2026-04-07",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"7 recorded votes on agenda items (4 unanimous); details under Decisions.",
"Tabled (4:1): Approving the Parks, Trails, and Open Space Master Plan",
"Approved (4:1): Amending the Eagle Mountain Municipal Code Section 8.15 regarding Noise to Modify Maximum Decibel Levels During Hours of Restriction",
"Approved (4:0): UPDATE \u2013 Legislative Priorities List",
"Discussed: Strategic Plan Vision and Mission Updates \u2013; Alternative Energy Overlay Zone \u2013 Director of Legislative; FY 2026 - 2027 City Budget Update \u2013 Director of Administrati ve"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1714,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1722,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1746,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/711/files",
"textSource": "minutes",
"decisions": [
{
"item": "Approving a Land Exchange Agreement with SITLA for the Exchange of Properties in the Overland Area",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Approving a Memorandum of Agreement Concerning Overland",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Approving a Portion of Utah County Parcel #46:489:0159 of Designated \u201cSignificant Real Property\u201d Pursuant to EMMC 3.30.060 and 3.30.070, and",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Approving the Parks, Trails, and Open Space Master Plan",
"outcome": "Tabled",
"vote": "4:1"
},
{
"item": "Amending the Eagle Mountain Municipal Code Section 8.15 regarding Noise to Modify Maximum Decibel Levels During Hours of Restriction",
"outcome": "Approved",
"vote": "4:1"
},
{
"item": "Amending the Eagle Mountain Municipal Code 2.35 (Public Library) and Eagle Mountain Municipal Code 17.15 (Roles and Duties) to modify the Timing of",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "UPDATE \u2013 Legislative Priorities List",
"outcome": "Approved",
"vote": "4:0"
}
]
},
{
"id": 742,
"date": "2026-03-25",
"body": "City Council",
"name": "City Council Special Session",
"upcoming": false,
"summary": [
"3 recorded votes on agenda items (0 unanimous); details under Decisions.",
"Approved (4:0): Approving a Development Agreement with Cadence Homes, LLC for an Amenity Exchange for Hidden Hollow",
"Approved (4:0): Authorizing Extended Hours for Construction Operations for QTS \u2013 SLC1 as Allowed in Eagle Mountain Municipal Code Section 8.15.080(G)",
"Approved (4:0): Approving the 5 Ame ndment to the Amended and Restated Overland Master Development Agreement",
"Discussed: Gateway Park Land Use Plan - Scot Hazard; Soccer Recreation Program \u2013 Recreation Manager, Jason Hall; FY 2026 - 2027 City Budget Updates \u2013 Director of"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1699,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1703,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1725,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/742/files",
"textSource": "minutes",
"decisions": [
{
"item": "Approving a Development Agreement with Cadence Homes, LLC for an Amenity Exchange for Hidden Hollow",
"outcome": "Approved",
"vote": "4:0"
},
{
"item": "Authorizing Extended Hours for Construction Operations for QTS \u2013 SLC1 as Allowed in Eagle Mountain Municipal Code Section 8.15.080(G)",
"outcome": "Approved",
"vote": "4:0"
},
{
"item": "Approving the 5 Ame ndment to the Amended and Restated Overland Master Development Agreement",
"outcome": "Approved",
"vote": "4:0"
}
]
},
{
"id": 685,
"date": "2026-03-24",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"1 recorded votes on agenda items (1 unanimous); details under Decisions.",
"Recommended approval (Unanimous): Amending EMMC 17.72.040. HVAC Screening Requirements",
"Discussed: What every Planning Commissioner should know about health"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1705,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1697,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1733,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/685/files",
"textSource": "minutes",
"decisions": [
{
"item": "Amending EMMC 17.72.040. HVAC Screening Requirements",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 672,
"date": "2026-03-10",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"5 recorded votes on agenda items (5 unanimous); details under Decisions.",
"Approved (Unanimous): Election of Chair and Vice Chair CHAIR VOTE: Commissioner Free nominated Commissioner Hess for Planning Commission Chair",
"Recommended approval (Unanimous): Review \u2014 Firefly NPA 8 Phase B Plat 4 Townhomes",
"Approved (Unanimous): Overland Village 2 Phase B Preliminary Plat",
"Discussed: Planning Commission General Powers and Duties"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1692,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1693,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1707,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/672/files",
"textSource": "minutes",
"decisions": [
{
"item": "Election of Chair and Vice Chair CHAIR VOTE: Commissioner Free nominated Commissioner Hess for Planning Commission Chair",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Review \u2014 Firefly NPA 8 Phase B Plat 4 Townhomes",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Overland Village 2 Phase B Preliminary Plat",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "EMMC Section 8.15 Noise Amendment",
"outcome": "Tabled",
"vote": "Unanimous"
},
{
"item": "EMMC 17.15 (Roles and Duties)",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 741,
"date": "2026-03-05",
"body": "City Council",
"name": "City Council Special Session",
"upcoming": false,
"summary": [
"1 recorded votes on agenda items (0 unanimous); details under Decisions.",
"Approved (4:0): Approving the Form of Preliminary Official Statement Relating to the Sale of the Bonds"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1688,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1691,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1709,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/741/files",
"textSource": "minutes",
"decisions": [
{
"item": "Approving the Form of Preliminary Official Statement Relating to the Sale of the Bonds",
"outcome": "Approved",
"vote": "4:0"
}
]
},
{
"id": 710,
"date": "2026-03-03",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"13 recorded votes on agenda items (12 unanimous); details under Decisions.",
"Tabled (4:1): Amending the Eagle Mountain Municipal Code 17.60 and 17.10 regarding Fencing",
"Approved (Unanimous): Community Services Board Appointments",
"Approved (Unanimous): Senior Advisory Board",
"Discussed: Mortgage Assistance Program Update - Affordable Housing; Setback Exception Request for OpenGov Application"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1680,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1686,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1708,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/710/files",
"textSource": "minutes",
"decisions": [
{
"item": "Community Services Board Appointments",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Senior Advisory Board",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Approving the Real Property Purchase and Sale Agreement with The Church of Jesus Christ of Latter-Day Saints for Well #9",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Approving the 5th Amendment to the Amended and Restated Overland Master Development Agreement",
"outcome": "Tabled",
"vote": "Unanimous"
},
{
"item": "Approving a Professional Services Agreement with Economic & Planning Systems, Inc. for Consulting Related to Eagle's Landing",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code 17.60 and 17.10 regarding Fencing",
"outcome": "Tabled",
"vote": "4:1"
},
{
"item": "Rezoning Certain Lands Known as QTS-SCL 2",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code Sections 15.80, 17.10, 17.25",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain City Consolidated Fee Schedule regarding Site Plan Amendments",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Enacting Chapter",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Approving the Development Agreement with Williams",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Supporting America250 Utah and Recognizing and Approving the Eagle Mountain Utah250 Community Committee",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "UPDATE \u2013 Legislative Priorities List John Magness provided updates rega rding bills at the Hill",
"outcome": "Approved",
"vote": "Unanimous"
}
]
},
{
"id": 684,
"date": "2026-02-24",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"Discussed: Setback Exception for OpenGov Application PLGA-266-8; Future Land Use Map"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1662,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1663,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1695,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/684/files",
"textSource": "minutes",
"decisions": []
},
{
"id": 722,
"date": "2026-02-17",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"5 recorded votes on agenda items (5 unanimous); details under Decisions.",
"Approved (Unanimous): Authorizing Extended Hours for Construction Operations for the 4MG Scarlet Ridge Water Tank, as Allowed in Eagle Mountain Municipal Code Section 8.15.\u2026",
"Approved (Unanimous): Approving the Second Amendment to the Fiscal Year 2025-2026 Annual Budget",
"Approved (Unanimous): Authorizing the Issuance and Sale of Not More Than $220,000,000 Aggregate Principal Amount of Water and Sewer Revenue Bonds, Series 2026; Fixing the M\u2026",
"Discussed: Drive Through Location and Aesthetic Requirements \u2013 Community; Community Development Block Grant (CDBG) \u2013 Affordable; Fifth Amendment to the"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1655,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1657,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1694,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/722/files",
"textSource": "minutes",
"decisions": [
{
"item": "Authorizing Extended Hours for Construction Operations for the 4MG Scarlet Ridge Water Tank, as Allowed in Eagle Mountain Municipal Code Section 8.15.\u2026",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Approving the Second Amendment to the Fiscal Year 2025-2026 Annual Budget",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Authorizing the Issuance and Sale of Not More Than $220,000,000 Aggregate Principal Amount of Water and Sewer Revenue Bonds, Series 2026; Fixing the M\u2026",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending Eagle Mountain Municipal Code Chapter 15.95 and Adopting the Eagle Mountain City Wildland Urban Interface Area Map",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Repealing Chapter",
"outcome": "Approved",
"vote": "Unanimous"
}
]
},
{
"id": 671,
"date": "2026-02-10",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"5 recorded votes on agenda items (5 unanimous); details under Decisions.",
"Recommended approval (Unanimous): One Call Auto Site Plan",
"Recommended approval (Unanimous): Consolidated Fee Schedule for Site Plan Amendment",
"Recommended approval (Unanimous): Overland Master Development Agreement"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1644,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1645,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1671,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/671/files",
"textSource": "minutes",
"decisions": [
{
"item": "One Call Auto Site Plan",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Consolidated Fee Schedule for Site Plan Amendment",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Overland Master Development Agreement",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "QTS-SCL 2 Rezone",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "Code Amendment for the Wildland Urban Interface Area Map",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 735,
"date": "2026-02-03",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"4 recorded votes on agenda items (3 unanimous); details under Decisions.",
"Approved (4:1): MINOR SITE PLAN-Hidden Hollow Amenity Exchange (Minor) Site Plan Amendment",
"Approved (Unanimous): Library Advisory Board",
"Approved (Unanimous): Planning Commission",
"Discussed: Quarterly Financial Report - Management Analyst Terrence; Future Land Use Map - Planning Director Brandon Larsen"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1639,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1643,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1658,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/735/files",
"textSource": "minutes",
"decisions": [
{
"item": "Library Advisory Board",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Planning Commission",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code Section 2.45 regarding Youth Council",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "MINOR SITE PLAN-Hidden Hollow Amenity Exchange (Minor) Site Plan Amendment",
"outcome": "Approved",
"vote": "4:1"
}
]
},
{
"id": 740,
"date": "2026-01-30",
"body": "City Council",
"name": "Annual Visioning Retreat",
"upcoming": false,
"summary": [
"No recorded votes found in the minutes (work/discussion session)."
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1633,plainText=false)",
"packet": null,
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1660,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/740/files",
"textSource": "minutes",
"decisions": []
},
{
"id": 739,
"date": "2026-01-29",
"body": "City Council",
"name": "Annual Visioning Retreat",
"upcoming": false,
"summary": [
"No recorded votes found in the minutes (work/discussion session)."
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1631,plainText=false)",
"packet": null,
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1659,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/739/files",
"textSource": "minutes",
"decisions": []
},
{
"id": 501,
"date": "2026-01-20",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"5 recorded votes on agenda items (4 unanimous); details under Decisions.",
"Tabled (5:1): Repealing and Replacing Eagle Mountain Municipal Code Section 2.10 regarding Power and Duties of Mayor",
"Tabled (Unanimous): INTRODUCTION / RECOGNITION-Utah County Sheriff's Office",
"Approved (Unanimous): Amending the Eagle Mountain Municipal Code Section 17.80.080 regarding directional signage related to data center/large-scale development",
"Discussed: Justice Court - Jim Peters; Energy Project for Meta in Coordination with Williams -; Street Renaming and Addressing Code Amendment - Planner; Community Enhancement Board - Ben Reeves, City Manager"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1622,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1623,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1648,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/501/files",
"textSource": "minutes",
"decisions": [
{
"item": "INTRODUCTION / RECOGNITION-Utah County Sheriff's Office",
"outcome": "Tabled",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code Section 17.80.080 regarding directional signage related to data center/large-scale development",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code Sections 15.80, 17.10",
"outcome": "Tabled",
"vote": "Unanimous"
},
{
"item": "Repealing and Replacing Eagle Mountain Municipal Code Section 2.10 regarding Power and Duties of Mayor",
"outcome": "Tabled",
"vote": "5:1"
},
{
"item": "Repealing and Replacing Various Provisions of Title 2 of the Eagle Mountain Municipal Code Related to City Governance",
"outcome": "Tabled",
"vote": "Unanimous"
}
]
},
{
"id": 738,
"date": "2026-01-15",
"body": "City Council",
"name": "Eagle Mountain City - City Council Interviews",
"upcoming": false,
"summary": [
"1 recorded votes on agenda items (1 unanimous); details under Decisions.",
"Approved (Unanimous): DECLARATION OF INDIVIDUAL \u2013 Declaration of individual to Fill City Council Vacancy Resulting from the Resignation of Councilmember Jared Gray for the \u2026"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1617,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1618,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1646,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/738/files",
"textSource": "minutes",
"decisions": [
{
"item": "DECLARATION OF INDIVIDUAL \u2013 Declaration of individual to Fill City Council Vacancy Resulting from the Resignation of Councilmember Jared Gray for the \u2026",
"outcome": "Approved",
"vote": "Unanimous"
}
]
},
{
"id": 515,
"date": "2026-01-13",
"body": "Planning Commission",
"name": "Planning Commission Meeting",
"upcoming": false,
"summary": [
"3 recorded votes on agenda items (3 unanimous); details under Decisions.",
"Tabled (Unanimous): Eagle Mountain Planning Commission Meeting \u2013 January 13, 2026 Page 1 of 4",
"Recommended approval (Unanimous): Slope Development Code Amendment",
"Recommended approval (Unanimous): City Parks, Trails and Open Space Master Plan ordinance",
"Discussed: Parks, Trails and Open Space Master Plan and IFFP"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1612,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1613,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1651,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/515/files",
"textSource": "minutes",
"decisions": [
{
"item": "Eagle Mountain Planning Commission Meeting \u2013 January 13, 2026 Page 1 of 4",
"outcome": "Tabled",
"vote": "Unanimous"
},
{
"item": "Slope Development Code Amendment",
"outcome": "Recommended approval",
"vote": "Unanimous"
},
{
"item": "City Parks, Trails and Open Space Master Plan ordinance",
"outcome": "Recommended approval",
"vote": "Unanimous"
}
]
},
{
"id": 736,
"date": "2026-01-06",
"body": "Redevelopment Agency",
"name": "Redevelopment Agency Meeting",
"upcoming": false,
"summary": [
"4 recorded votes on agenda items (4 unanimous); details under Decisions.",
"Approved (Unanimous): Appointing and Electing Officers to Serve in the Redevelopment Agency of Eagle Mountain City",
"Approved (Unanimous): Appointing Abby Ivory as Executive Director of the Redevelopment Agency of Eagle Mountain City",
"Approved (Unanimous): Amending the Official Project Area Plan for the Sweetwater #4 Community Reinvestment Area Project Area"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1604,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1606,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1767,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/736/files",
"textSource": "minutes",
"decisions": [
{
"item": "Appointing and Electing Officers to Serve in the Redevelopment Agency of Eagle Mountain City",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Appointing Abby Ivory as Executive Director of the Redevelopment Agency of Eagle Mountain City",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Official Project Area Plan for the Sweetwater #4 Community Reinvestment Area Project Area",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Official Project Area Budget for the Sweetwater #4 Community Reinvestment Area Project Area",
"outcome": "Approved",
"vote": "Unanimous"
}
]
},
{
"id": 488,
"date": "2026-01-06",
"body": "City Council",
"name": "City Council Meeting",
"upcoming": false,
"summary": [
"6 recorded votes on agenda items (5 unanimous); details under Decisions.",
"Tabled (3:2): MINOR SITE PLAN-Hidden Hollow Amenity Exchange (Minor) Site Plan Amendment",
"Approved (Unanimous): Planning Commission Appointments",
"Approved (Unanimous): Senior Advisory Board",
"Discussed: Transit Fresh Look - UTA; Eagle Mountain Recreation Programs - Jason Hall, Recreation Manager; Potential Replacement Options for the Eagle Mountain Blvd Monument -; Traffic Signal at Pony Express and Pole Canyon from QTS traffic \u2013"
],
"agenda": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1607,plainText=false)",
"packet": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1611,plainText=false)",
"minutes": "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId=1627,plainText=false)",
"minutesStatus": "Approved",
"portal": "https://eaglemountainut.portal.civicclerk.com/event/488/files",
"textSource": "minutes",
"decisions": [
{
"item": "Planning Commission Appointments",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Senior Advisory Board",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "From the agenda to be discussed at a later date, and to update the minutes from the December 16, 2025, City Council Meeting to reflect that the motion\u2026",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "Amending the Eagle Mountain Municipal Code Chapter 17.60.120 General Fencing/screening provisions",
"outcome": "Approved",
"vote": "Unanimous"
},
{
"item": "MINOR SITE PLAN-Hidden Hollow Amenity Exchange (Minor) Site Plan Amendment",
"outcome": "Tabled",
"vote": "3:2"
},
{
"item": "MOTION-Appointment of City Councilmember as Mayor Pro Tempore",
"outcome": "Approved",
"vote": "Unanimous"
}
]
}
];

// ---- Campaign promises tracker (compiled Oct 29, 2026). Status: Done / In progress / Stalled / No evidence / Not measurable (excluded from averages).
const CC = id => "https://eaglemountainut.api.civicclerk.com/v1/Meetings/GetMeetingFileStream(fileId="+id+",plainText=false)";
const election = {
  date:"2027-11-02", label:"Municipal general election, Tue Nov 2, 2027 (expected)",
  notes:"Eagle Mountain holds city elections in odd years. Nov 3, 2026 is a state/federal general election with no city offices on the ballot. Candidate filing for 2027 is expected in early June 2027 and a primary (if needed) in August 2027; confirm exact dates with the City Recorder.",
  seats:["City Council seat held by Melissa Clark (term ends Dec 2027)","City Council seat held by Rich Wood (term ends Dec 2027)","City Council seat held by appointee Zachory Huish (originally Jared Gray's 2023 seat; the city's appointment notice says 'through Dec. 2028', which conflicts with the two-year remainder it also cites. Confirm with the city.)"],
  notUp:"Mayor Gray and Council Members Whiting and Wright serve through Dec 2029.",
  src:["https://www.ballotready.org/people/rich-wood-cd305004-b7da-4ddc-9faf-27f2548a7629","https://eaglemountain.gov/city-council-appoints-zachory-huish-to-vacant-seat/","https://eaglemountain.gov/applications-now-open-to-fill-city-council-vacancy/","https://eaglemountain.gov/newly-elected-leaders-take-the-oath-of-office/","https://goodparty.org/elections/position/ut/eagle-mountain/city-legislature"]
};
const candidates2027 = []; // none publicly declared as of Oct 29, 2026
const officials = [
 {name:"Jared Gray",role:"Mayor",term:"Jan 2026 to Dec 2029",run:"2025 mayoral race; won 4,506 to 4,197",runSrc:"https://eaglemountain.gov/municipal-general-election-results-canvassed-tuesday-night/",
  note:"Gray did not answer the Daily Herald's 2025 questionnaire. His priorities below come from his 2026 State of the City, where he says 'Less Talk and More Action' was a campaign theme, and from his site. They are post-election statements of his platform, not campaign documents.",
  promises:[
   {p:"Add six million gallons per day to the sewer treatment plant",src:"https://eaglemountain.gov/2026-state-of-the-city/",status:"In progress",pct:50,why:"Up to $220M in water and sewer revenue bonds authorized Feb 17. Construction bid for the 6.0 MGD expansion awarded Aug 18. Wastewater master plan updated Oct 6. The plant is not built yet.",ev:[["Feb 17 bonds",CC(1694)],["Aug 18 bid award",CC(2951)],["Oct 6 master plan",CC(3010)]]},
   {p:"Dig new wells",src:"https://eaglemountain.gov/2026-state-of-the-city/",status:"In progress",pct:35,why:"Land purchase for Well #9 approved Mar 3; culinary water impact fee plan updated Oct 6. No new well reported as producing yet.",ev:[["Mar 3 Well #9",CC(1708)],["Oct 6 water IFFP",CC(3010)]]},
   {p:"Assess new power solutions",src:"https://eaglemountain.gov/2026-state-of-the-city/",status:"In progress",pct:40,why:"'Assess' is an early-stage commitment. The Alternative Energy Overlay Zone, which sets where power generation may go, passed 4-1 on Jul 7. On Oct 20 the council removed power plant language from the Corrigan Farms agreement (news report; minutes pending).",ev:[["Jul 7 energy overlay","https://eaglemountain.openutah.org/meetings/2026-07-07-eagle-mountain-city-council-to-review-new-senior-housing-and-energy-rules-6ab43f61-5c61-46d6-bf19-04e730721874"],["Oct 20 agenda",CC(3004)]]},
   {p:"Real, measurable progress on traffic congestion through regional and state advocacy",src:"https://eaglemountain.gov/2026-state-of-the-city/",vague:true,status:"In progress",pct:25,why:"Vague, because no target was set. At the 2026 legislative session the planned Lake Mountain Corridor was moved into the state road system, so the state will fund and build it (lobbyist's estimate: construction possibly in 5 to 6 years). Widening Pony Express Pkwy was discussed with Saratoga Springs on Jul 30, with no vote. A citywide speed study was approved Jul 7.",ev:[["Jul 7 legislative update","https://eaglemountain.openutah.org/meetings/2026-07-07-eagle-mountain-city-council-to-review-new-senior-housing-and-energy-rules-6ab43f61-5c61-46d6-bf19-04e730721874"],["Jul 30 joint session",CC(2928)]]},
   {p:"Managed growth: smarter development decisions and stronger coordination with developers",src:"https://eaglemountain.gov/2026-state-of-the-city/",vague:true,status:"Not measurable",pct:null,why:"Too general to score. Related actions: a request to extend the Eagle Quest East development agreement was denied 5-0 (Jul 7), and an updated annexation policy plan was adopted (Jul 7).",ev:[["Jul 7 minutes",CC(2868)]]}
  ]},
 {name:"Melissa Clark",role:"City Council",term:"Jan 2024 to Dec 2027 (up in 2027)",run:"Most recent run: 2025 mayoral race (lost 4,197 to 4,506); still serving her 2023 council term",runSrc:"https://eaglemountain.gov/municipal-general-election-results-canvassed-tuesday-night/",
  promises:[
   {p:"Get a local bus route and speed up microtransit for Eagle Mountain, Saratoga Springs and Lehi",src:"https://www.melissa4mayor.com/resume",status:"Done",pct:90,why:"UTA On Demand microtransit started in parts of Eagle Mountain on Aug 16, 2026 (North Utah County zone). A fixed local bus route has not been reported. UTA delivered the service, so how much credit goes to Clark can't be measured.",ev:[["UTA launch","https://en.rideuta.com/Rider-Info/Digital-Newsroom/UTA-launches-On-Demand-service-in-northern-Utah-County-and-extends-Zero-Fare-on-OGX"]]},
   {p:"Protect wildlife corridors, open space and trails",src:"https://www.melissa4mayor.com/resume",status:"In progress",pct:55,why:"Parks, Trails and Open Space Master Plan and impact fee plan approved unanimously May 5, after being tabled Apr 7. Off-Street Trails Master Plan approved Jul 21.",ev:[["May 5",CC(1779)],["Jul 21",CC(2897)]]},
   {p:"Keep a maximum (35%) rainy-day reserve and prioritize roads, public safety, sewer and water",src:"https://www.melissa4mayor.com/resume",status:"No evidence",pct:0,why:"The FY2026-27 budget ($364M) was adopted Aug 18 (4-1). The reserve level was not checked in the documents reviewed, so there's no evidence either way.",ev:[["Aug 18 budget",CC(2951)]]},
   {p:"Transparency: early review of large proposals, more city communication",src:"https://www.melissa4mayor.com/resume",vague:true,status:"Not measurable",pct:null,why:"An ongoing practice rather than a deliverable. No new 2026 transparency measure was found.",ev:[]}
  ]},
 {name:"Rich Wood",role:"City Council",term:"Jan 2024 to Dec 2027 (up in 2027)",run:"2023 council race (2,068 votes)",runSrc:"https://vote.utahcounty.gov/cms/uploads/2023_General_voting_results_be47c5636c.pdf",
  note:"Only one platform item could be found from his 2023 run.",
  promises:[
   {p:"'Stages of life' housing planning instead of just more, smaller housing types",src:"https://www.ballotready.org/people/rich-wood-cd305004-b7da-4ddc-9faf-27f2548a7629",vague:true,status:"Stalled",pct:30,why:"The closest measure is a Senior Housing Overlay Zone. It was discussed May 5 and recommended by the Planning Commission Jun 9, then the council tabled it 5-0 on Jul 7 for more work-session review. No adoption found since.",ev:[["Jun 9 PC",CC(1849)],["Jul 7 tabled","https://eaglemountain.openutah.org/meetings/2026-07-07-eagle-mountain-city-council-to-review-new-senior-housing-and-energy-rules-6ab43f61-5c61-46d6-bf19-04e730721874"]]}
  ]},
 {name:"Craig Whiting",role:"City Council",term:"Jan 2026 to Dec 2029",run:"2025 council race (4,224 votes, top vote-getter)",runSrc:"https://eaglemountain.gov/municipal-general-election-results-canvassed-tuesday-night/",
  promises:[
   {p:"Make infrastructure a top priority and slow growth until infrastructure supports it",src:"https://www.electcraigwhiting.com/policies",status:"In progress",pct:40,why:"Infrastructure: sewer bonds (Feb 17) and the plant expansion bid (Aug 18). 'Slowing growth' has no measurable action yet.",ev:[["Feb 17",CC(1694)],["Aug 18",CC(2951)]]},
   {p:"Handle vested rights carefully and require big concessions from developers",src:"https://www.electcraigwhiting.com/policies",status:"In progress",pct:35,why:"Council denied an extension of the Eagle Quest East development agreement 5-0 on Jul 7. Power plant language was removed from the Corrigan Farms agreement Oct 20 (minutes pending).",ev:[["Jul 7",CC(2868)],["Oct 20 agenda",CC(3004)]]},
   {p:"Add age-restricted senior housing (the city has none)",src:"https://www.electcraigwhiting.com/policies",status:"Stalled",pct:30,why:"Senior Housing Overlay Zone recommended by the Planning Commission Jun 9, tabled by the council Jul 7.",ev:[["Jun 9 PC",CC(1849)],["Jul 7","https://eaglemountain.openutah.org/meetings/2026-07-07-eagle-mountain-city-council-to-review-new-senior-housing-and-energy-rules-6ab43f61-5c61-46d6-bf19-04e730721874"]]},
   {p:"Recreation and nature in line with the city's outdoor brand",src:"https://www.electcraigwhiting.com/policies",status:"In progress",pct:50,why:"Parks, Trails and Open Space Master Plan (May 5) and Off-Street Trails Master Plan (Jul 21) adopted. The trails plan lists bike park repairs ($0.9M to $1.5M) that have not been funded yet.",ev:[["May 5",CC(1779)],["Jul 21",CC(2897)]]},
   {p:"Economic development: 'live where you work'",src:"https://www.electcraigwhiting.com/policies",vague:true,status:"In progress",pct:30,why:"Vague. The Mid-Valley Community Reinvestment Area plan and budget were adopted Aug 18. No local-jobs measure was found.",ev:[["Aug 18 RDA",CC(2908)]]}
  ]},
 {name:"Brett Wright",role:"City Council",term:"Jan 2026 to Dec 2029 (2nd term)",run:"2025 council race (4,020 votes)",runSrc:"https://eaglemountain.gov/municipal-general-election-results-canvassed-tuesday-night/",
  promises:[
   {p:"Plan and fund critical infrastructure: sewer, power, water, stormwater, transportation",src:"https://cedarvalleysentinel.com/local-government/eagle-mountain-city-hall-2025/brett-wright-runs-for-re-election-citing-record-of-service-and-results/",status:"In progress",pct:45,why:"Sewer bonds and plant bid, the Well #9 land purchase, the energy overlay zone, and the Lake Mountain Corridor moving into the state road system. Nothing was found on stormwater.",ev:[["Feb 17",CC(1694)],["Mar 3",CC(1708)],["Aug 18",CC(2951)]]},
   {p:"Strategic economic development (industrial, commercial, retail)",src:"https://cedarvalleysentinel.com/local-government/eagle-mountain-city-hall-2025/brett-wright-runs-for-re-election-citing-record-of-service-and-results/",status:"In progress",pct:40,why:"Sweetwater #4 reinvestment area plan amended Jan 6, and the Mid-Valley reinvestment area adopted Aug 18. The QTS data center topped out in Apr 2026.",ev:[["Jan 6 RDA",CC(1767)],["Aug 18 RDA",CC(2908)],["QTS","https://eaglemountain.gov/eagle-mountain-city-celebrates-major-milestone-with-qts-topping-out-ceremony/"]]},
   {p:"Balanced development with a variety of housing types",src:"https://cedarvalleysentinel.com/local-government/eagle-mountain-city-hall-2025/brett-wright-runs-for-re-election-citing-record-of-service-and-results/",vague:true,status:"Not measurable",pct:null,why:"Too general to score. Related: the senior housing overlay was tabled Jul 7.",ev:[]},
   {p:"Listen to and elevate citizens' ideas and concerns",src:"https://cedarvalleysentinel.com/local-government/eagle-mountain-city-hall-2025/brett-wright-runs-for-re-election-citing-record-of-service-and-results/",vague:true,status:"Not measurable",pct:null,why:"A value statement with no deliverable attached.",ev:[]}
  ]},
 {name:"Zachory Huish",role:"City Council (appointed)",term:"Appointed Jan 15, 2026",run:"Did not run for this seat. The council appointed him 3-1 from eight applicants.",runSrc:"https://eaglemountain.gov/city-council-appoints-zachory-huish-to-vacant-seat/",
  note:"No campaign platform, so no promises are scored. In his interview he highlighted his career as a certified financial planner and asset manager (summary at utahrecord.org). On Jul 7 he said he supports using RAP tax or utility-sale funds to restore trailheads.",
  promises:[]}
];

// ---- Public opinion (compiled Oct 29, 2026). Not a scientific sample. n = items collected for that topic.
const USU="https://www.usu.edu/utah-wellbeing-project/reports/2026/eaglemountain-wellbeing-survey-findings-2026";
const opinionTopics=[
 {t:"Growth & traffic",s:"Negative",n:5,sum:"Traffic and the pace of growth are the most consistent complaints in every source type. Even the mayor calls traffic 'one of our biggest frustrations.'",q:[
  ["\"88% of respondents felt population growth was too fast; traffic was the top concern (96%).\" USU Utah Wellbeing Survey, 2026",USU],
  ["Reddit post (Sep 2026), \"Stop Eagle Mountain's Overdevelopment for Big Tech and Developers\": cites traffic, $750M in Meta incentives, and the tax hike","https://www.reddit.com/r/EagleMountain/comments/1w9cn47/stop_eagle_mountains_overdevelopment_for_big_tech/"],
  ["2026 State of the City calls traffic \"one of our biggest frustrations\"","https://eaglemountain.gov/2026-state-of-the-city/"]]},
 {t:"Data centers, QTS & power plants",s:"Mixed",n:8,sum:"Organized opposition shows up at hearings on gas plants and new data-center zoning, focused on emissions, noise and calls for a statewide moratorium. Other hearings drew few speakers, and some residents online favor data centers if roads get built.",q:[
  ["\"Public commenters opposed the natural gas plant (emissions, noise, location).\" Utah Ledger, Mar 3 council meeting","https://utahledger.com/regions/utah-county/eagle-mountain/meetings/council-2026-03-03"],
  ["\"Eagle Mountain rezoning for possible data center draws little opposition\" KSL","https://www.ksl.com/article/51627416/eagle-mountain-rezoning-for-possible-data-center-draws-little-opposition"],
  ["Reddit replies split: one says the city \"needs to build more houses not data centers\", another says to \"just build the roads and infrastructure\"","https://www.reddit.com/r/EagleMountain/comments/1w9cn47/stop_eagle_mountains_overdevelopment_for_big_tech/"]]},
 {t:"Taxes",s:"Negative",n:4,sum:"The proposed property tax increase for sheriff's deputies (183% as first adopted) drew a resident referendum application. The council repealed it and adopted a smaller 69.8% increase (about $99 a year for a median home). Referendum sponsors said their main concern was transparency, and they acknowledged some increase was needed.",q:[
  ["\"Following public pushback and the filing of a resident-led referendum...\" Daily Herald, Aug 20","https://www.heraldextra.com/news/2026/aug/20/eagle-mountain-city-council-repeals-initial-property-tax-raise-agrees-on-lower-rate-hike/"],
  ["Residents cited cost of living, young families and fixed incomes at the Aug 6 hearing. Utah Ledger","https://utahledger.com/news/eagle-mountain-property-tax-2026"]]},
 {t:"Water & sewer",s:"Mixed",n:3,sum:"Residents are worried about water supply, including how much water data centers use. The city broke ground on the sewer plant expansion in October.",q:[
  ["Water supply (85%) and water quality (78%) were the No. 2 and No. 3 concerns. USU survey",USU],
  ["\"$120M Utah Wastewater Expansion Targets Rapid Growth, Capacity Crunch\" ENR, Oct 26","https://www.enr.com/articles/64084-120m-utah-wastewater-expansion-targets-rapid-growth-capacity-crunch"]]},
 {t:"Amenities & shopping",s:"Positive",n:5,sum:"Residents want more restaurants and shopping, and half of survey respondents (50%) say economic development is too slow. News of the Smith's and Lowe's approvals and of new restaurants has been received positively.",q:[
  ["Residents \"would like to see more sit-down restaurants, shopping centers, and amenities for kids.\" USU survey",USU],
  ["\"Lowe's, Smith's gain City Council approval\" Eagle Mountain City","https://eaglemountain.gov/lowes-smiths-gain-city-council-approval/"],
  ["\"Huge for Eagle Mountain, exciting to see the city planning for where families will be working...\" X post, Oct 29 (on the aviation hub)","https://x.com/i/status/2115790374501482673"]]},
 {t:"Community & quality of life",s:"Mixed",n:3,sum:"Residents value the quiet, the trails and the family feel, but community-connection scores are among the lowest in the state.",q:[
  ["Community connection ranked 54 of 57 Utah cities surveyed. USU survey",USU],
  ["\"Eagle Mountain is officially a Healthy Utah Community!\" City X post, Oct 27","https://x.com/i/status/2115199956269322699"]]},
 {t:"Schools",s:"Too little data",n:2,sum:"There was little public discussion online. The education rating dropped between 2020 and 2026 in the USU survey. The city held a joint work meeting with the new Lake Mountain School District on Oct 28.",q:[
  ["Education was among the wellbeing domains that declined since 2020. USU survey",USU]]}
];
const opinionPolls=[
 {name:"USU Utah Wellbeing Survey, Eagle Mountain 2026",date:"Apr 2026",n:"359 responses (margin of error about 5%; opt-in, married residents overrepresented)",find:"Personal wellbeing 3.92/5, community wellbeing 3.29/5 (both down from 2020). 88% say growth is too fast; 50% say economic development is too slow. Top concerns: traffic 96%, water supply 85%, water quality 78%.",url:USU},
 {name:"Eagle Mountain City community survey 2026",date:"Opened Oct 7, 2026",n:"Results not yet published",find:"The city's annual resident survey is open now. No 2026 results have been released.",url:"https://eaglemountain.gov/share-your-feedback-in-our-community-survey/"}
];
const opinionNoPoll="No Y2 Analytics or Deseret News/Hinckley poll specific to Eagle Mountain was found for 2026.";
const headlines=[
 ["2026-10-28","Eagle Mountain takes first steps toward an aviation hub","Eagle Mountain City","https://eaglemountain.gov/aam-aviation-hub-zero-gravity-summit/"],
 ["2026-10-26","$120M wastewater expansion targets rapid growth, capacity crunch","ENR","https://www.enr.com/articles/64084-120m-utah-wastewater-expansion-targets-rapid-growth-capacity-crunch"],
 ["2026-10-26","The city wants to allow power lines on farm-zoned land","Eagle Mountain Value","https://emv.soudub.com/issues/valueletter-2026-october-26/"],
 ["2026-10-22","Corrigan Farms can become a data center, but a power plant would need its own approval","Eagle Mountain Value","https://emv.soudub.com/issues/valueletter-2026-october-22/"],
 ["2026-10-21","A woman was arrested while protesting data centers at a Utah County meeting","Salt Lake Tribune","https://www.sltrib.com/news/2026/10/21/woman-was-arrested-while/"],
 ["2026-10-20","Residents cited after altercation over data center discussion in Utah County meeting","KSL","https://www.ksl.com/article/51639227/residents-cited-after-physical-altercation-over-data-center-discussion-in-utah-county-meeting"],
 ["2026-10-07","City opens 2026 community survey","Eagle Mountain City","https://eaglemountain.gov/share-your-feedback-in-our-community-survey/"],
 ["2026-09-25","Postal worker accused of tossing Utah ballots says he had no political motive","Salt Lake Tribune","https://www.sltrib.com/news/politics/2026/09/25/postal-worker-accused-tossing-utah/"],
 ["2026-09","Eagle Mountain rezoning for possible data center draws little opposition","KSL","https://www.ksl.com/article/51627416/eagle-mountain-rezoning-for-possible-data-center-draws-little-opposition"],
 ["2026-09","Utah postal worker accused of throwing away 300 mail-in ballots in church parking lot","KSL","https://www.ksl.com/article/51627290/utah-postal-worker-accused-of-throwing-away-300-mail-in-ballots-in-church-parking-lot"],
 ["2026-09-14","Meta boosts Eagle Mountain investment, $3B+ Utah data center","Utah Business","https://www.utahbusiness.com/industry/2026/09/14/meta-boosts-eagle-mountain-investment-3-billion-utah-data-center/"],
 ["2026-08-20","Council repeals initial property tax raise, agrees on lower rate hike","Daily Herald","https://www.heraldextra.com/news/2026/aug/20/eagle-mountain-city-council-repeals-initial-property-tax-raise-agrees-on-lower-rate-hike/"],
 ["2026-08-20","A canceled tax increase, a confirmed Smith's, and free job help","Eagle Mountain Value","https://www.eaglemountainvalue.com/p/valueletter-2026-august-20"],
 ["2026-08","Council set, repealed and reset its 2026 property tax rate in August","Utah Ledger","https://utahledger.com/news/eagle-mountain-property-tax-2026"],
 ["2026-03-12","2026 State of the City: 'Less Talk & More Action'","Eagle Mountain City","https://eaglemountain.gov/2026-state-of-the-city/"]
];
