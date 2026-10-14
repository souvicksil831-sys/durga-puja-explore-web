// ============================================================
// data.js - all content lives here (edit this file to change text, places, food, routes)
// ============================================================
// Short Durga Puja verses shown on the home page (original verses in the spirit of Agomoni songs)
const poems=["আকাশে বাজে ঢাকের বোল,\nকাশের বনে দুলছে দোল।\nমা এসেছেন ঘরের দোরে,\nআলো জ্বলুক সবার ঘরে॥","শিউলি ঝরে শরৎ ভোরে,\nশঙ্খ বাজে ঘরে ঘরে।\nদশভুজার আশিস নিয়ে\nআনন্দ আসুক সবার হিয়ে॥","ধুনুচি নাচে, ধূপের ধোঁয়া,\nসিঁদুর খেলায় রঙিন ছোঁয়া।\nমায়ের চরণ-ছায়ায় সুখে\nকাটুক পুজো হাসিমুখে॥"];

// Blessing pairs [Bengali, English] picked at random inside the lotus wish window
const bl=[["মা দুর্গা তোমার জীবনে শান্তি, শক্তি ও আনন্দ বয়ে আনুন।","May Maa Durga bring you peace, strength and joy."],["সব অশুভ দূর হোক, শুভ আলোয় ভরে উঠুক তোমার জীবন।","May all evil depart and your life fill with auspicious light."],["মায়ের আশীর্বাদে সুখে, স্বাস্থ্যে ও সাফল্যে কাটুক সারাটা বছর।","By Maa's blessings, may the whole year pass in happiness, health and success."]];

// Pandal list: n=name, bn=Bengali name, k=kind, area, st=nearest metro, d=details
const P=[
{n:"Sovabazar Rajbari",bn:"শোভাবাজার রাজবাড়ি",k:"Bonedi",area:"North Kolkata",st:"Sovabazar Sutanuti (Blue Line)",d:"One of Kolkata's most famous bonedi bari pujas, associated with Raja Nabakrishna Deb and dating to the 18th century. Known for old-world rituals and heritage setting."},
{n:"Shibkrishna Daw Bari",bn:"শিবকৃষ্ণ দাঁ বাড়ি",k:"Bonedi",area:"Jorasanko, North",st:"Girish Park / MG Road (Blue Line)",d:"A heritage family puja with traditional idol style and rituals; part of old North Kolkata's household pujas."},
{n:"Baghbazar Sarbojanin",bn:"বাগবাজার সার্বজনীন",k:"North",area:"Baghbazar",st:"Shyambazar (Blue Line)",d:"A community puja among the oldest, loved for its classic 'daker saaj' idol style and the Sindur Khela on Dashami."},
{n:"College Square",bn:"কলেজ স্কোয়ার",k:"North",area:"College Street",st:"Central / MG Road",d:"Famous for its tank-side setting and creative themes near the book-lovers' neighbourhood."},
{n:"Santosh Mitra Square",bn:"সন্তোষ মিত্র স্কোয়ার",k:"North",area:"Sealdah",st:"Sealdah (Green Line) / Girish Park",d:"Known for grand, towering themes and big crowds; a regular on 'must-see' lists."},
{n:"Hatibagan Sarbojanin",bn:"হাতিবাগান সার্বজনীন",k:"North",area:"Hatibagan",st:"Girish Park / Shyambazar",d:"A long-running community puja amid the lively Hatibagan market area."},
{n:"Ekdalia Evergreen",bn:"একডালিয়া এভারগ্রীন",k:"South",area:"Gariahat",st:"Kalighat / Jatin Das Park (Blue Line)",d:"Popular south Kolkata puja noted for elaborate pandal art and lighting."},
{n:"Singhi Park",bn:"সিংহী পার্ক",k:"South",area:"Ballygunge",st:"Rabindra Sadan / Kalighat (nearest)",d:"One of the South's well-known sarbojanin pujas with inventive themes."},
{n:"Maddox Square",bn:"ম্যাডক্স স্কোয়ার",k:"South",area:"Ballygunge",st:"Kalighat / Jatin Das Park",d:"A celebrated neighbourhood puja with a community-fair atmosphere."},
{n:"Kumortuli",bn:"কুমোরটুলি",k:"Heritage",area:"Near Sovabazar",st:"Sovabazar Sutanuti",d:"The potters' quarter where Durga idols are crafted; best seen in the weeks before Mahalaya."}];
// Filter chips for the Pandals tab
const kinds=['All','Bonedi','North','South','Heritage'];

// Schematic map pin positions [x, y] on the 400x420 SVG
const pos={"Sovabazar Rajbari":[190,70],"Shibkrishna Daw Bari":[150,110],"Baghbazar Sarbojanin":[210,45],"College Square":[185,150],"Santosh Mitra Square":[240,165],"Hatibagan Sarbojanin":[215,100],"Ekdalia Evergreen":[215,290],"Singhi Park":[260,330],"Maddox Square":[240,310],"Kumortuli":[170,50]};

// Food cards [title, Bengali title, description]
const F=[["Bhog & Khichuri","ভোগের খিচুড়ি","Sacred offering of khichuri, labra (mixed veg), tomato chutney and payesh served at community pujas."],["Luchi–Alur Dom","লুচি আলুর দম","Puffed fried bread with spicy potato curry — the classic Pujo breakfast."],["Kolkata Biryani & Rolls","বিরিয়ানি ও রোল","Egg/chicken roll and the potato-studded Kolkata biryani are Pujo night staples."],["Phuchka & Ghugni","ফুচকা ও ঘুগনি","Street snacks to eat between pandals."],["Mishti","মিষ্টি","Sandesh, rosogolla, mishti doi, langcha and nolen-gur sweets."],["Ilish & Bengali thali","ইলিশ ও বাঙালি থালি","Shorshe ilish, begun bhaja, shukto, kosha mangsho — for the feast days."]];

// Style cards [title, description]
const S=[["Women","Red-bordered white 'laal-paar' saree, Dhakai jamdani, tant, Baluchari or garad silk; shankha-pola bangles, alta, sindoor and a bold bindi."],["Men","Crisp dhoti–panjabi in white, cream or festive hues; a kantha-stitch or silk stole adds flair."],["Kids","Mini panjabi or ethnic frocks in bright colours; comfy footwear for pandal-hopping!"],["Pandal-hopping tips","Wear breathable cotton, comfortable flats or sandals, carry a small bag, water and a power bank."],["Accessories","Jhumkas, oxidised silver, flowers in the hair, handwoven bags and gamchha-print scarves."]];

// Metro lines -> stations -> pandals nearby
const M={"Blue Line":[["Dakshineswar","Temple visit; start of the line"],["Shyambazar","Baghbazar Sarbojanin, Kumortuli walk"],["Sovabazar Sutanuti","Sovabazar Rajbari, Kumortuli"],["Girish Park","Hatibagan, Shibkrishna Daw Bari area"],["MG Road / Central","College Square"],["Kalighat / Jatin Das Park","Ekdalia, Maddox Sq & Ballygunge pujas (nearest, then local transport)"]],"Green Line":[["Sealdah","Santosh Mitra Square"],["Esplanade / Maidan area","Park Street, Victoria Memorial outings"],["Howrah Maidan","Across the river; ghat & Belur Math side trips"]]};

// Outing ideas [place, description]
const O=[["Prinsep Ghat & Hooghly","Sunset riverside walk and boat ride — perfect for couples."],["Victoria Memorial gardens","Calm evening stroll and photography."],["Rabindra Sarobar","Lake paths, quiet benches, early morning peace."],["Park Street cafés","Food, music and lights for friends."],["Eco Park","Big open green space for family picnics."],["Dakshineswar & Belur Math","Peaceful spiritual visits (go early)."],["Mullick Ghat flower market","Colourful Pujo flowers, great morning photo trip."]];

// Pujo Guide knowledge base: [regex of keywords, reply]
const KB=[[/poem|poetry|writing|souvik|কবিতা/,"Souvik's Pujo poems — মায়ের সংসার and মাতৃরূপেণ — are in the ✍️ Writings tab. Tap a poster to read it full screen."],[/pandal|bonedi|famous|best/,"Top picks: Sovabazar Rajbari & Shibkrishna Daw Bari (bonedi), Baghbazar, College Square, Santosh Mitra Square in the north; Ekdalia, Singhi Park, Maddox Square in the south. Open the Pandals tab to filter!"],[/metro|station|route|train/,"Blue Line is great for the north: Shyambazar → Sovabazar → Girish Park → MG Road. For the south use Kalighat / Jatin Das Park. See the Metro tab."],[/food|eat|khichuri|luchi|bhog/,"Don't miss bhog khichuri, luchi-alur dom, rolls, phuchka and sweets. See the Food tab."],[/dress|wear|saree|panjabi|style/,"Laal-paar white saree or dhoti-panjabi are classic. Wear comfortable footwear! See Style."],[/date|ashtami|dashami|shashthi|saptami|navami|mahalaya|when/,"Durga Puja 2026: Mahalaya Sat 10 Oct, Shashthi Fri 16, Saptami Sat 17 & Sun 18, Ashtami Mon 19, Nabami Tue 20, Bijaya Dashami Wed 21 Oct."],[/family|couple|quiet|date|romantic|hang/,"Try Prinsep Ghat, Victoria gardens, Rabindra Sarobar or Eco Park. See Outings."],[/victoria|memorial|maidan/,"Victoria Memorial's gardens are lovely for a calm evening walk — then continue to Prinsep Ghat for the river breeze. See Outings."],[/kumortuli|kumartuli|idol/,"Kumortuli is the idol-makers' quarter near Sovabazar — visit before Mahalaya to watch idols take shape."],[/hello|hi|namaskar/,"নমস্কার! Ask me about pandals, metro routes, food, outfits or places to relax."]];

// Quick-question buttons in the Pujo Guide
const sug=['Best pandals?','Metro route north','What to eat?','What to wear?'];
