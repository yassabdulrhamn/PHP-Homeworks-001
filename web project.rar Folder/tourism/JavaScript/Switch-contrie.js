// JavaScript Document
var Country;
var CountryCode;
var i;
var info = document.getElementById("SlideShow_info");
var placenumber;
var placename = document.getElementById("SlideShow_pacename");
var SlideShow = document.getElementById("SlideShow");
var TheMap = document.getElementById("map");

var SlideShow_thumbnails = document.getElementById("SlideShow_thumbnails");
//var info = document.getElementById("SlideShow_info");
function ShowName(X)
{
	if(X == 'Out')
	{document.getElementById("contrie-name").innerHTML = "Hover on a flag, Please";}
	else
	{document.getElementById("contrie-name").innerHTML = X;}
}
 var PlacesNames = [];
PlacesNames["KWT"]=["Liberation Tower (Kuwait)","Kuwait Towers","Avenues Mall","Entertainment city","Scientific Center"];
PlacesNames["USA"]=["Times Square","Central Park","Statue of Liberty","Golden Gate Bridge","Universal Studios Hollywood"];
PlacesNames["FRA"]=["Eiffel Tower","Notre Dame Cathedral","Louvre Museum","Champs Elysées / Arc of Triumph",'Cruise on the Seine'];
PlacesNames["JPN"]=["Tokyo","Kyoto","Nara","Takayama","Nikko"];
PlacesNames["ESP"]=["Barcelona","Spanish Islands","Madrid","Seville","Valencia"];

 var PlacesInfo = [];
PlacesInfo["KWT"]=['Originally intended to be named The Kuwait Telecommunications Tower, construction of the tower commenced before the Iraqi invasion of Kuwait on August 2, 1990. When the invasion took place, construction, which was almost half-way complete, was put on hold. However, the structure received no damage, and construction resumed after Iraqi forces were expelled on February 27, 1991. Upon completion in 1993, the tower was renamed the Liberation Tower, symbolizing Kuwait\'s liberation from Iraq.','The Kuwait Towers are a group of three slender towers in Kuwait City, standing on a promontory into the Persian Gulf. They were the sixth, and last, group in the larger Kuwait Water Towers system of 34 towers (33 store water, one stores equipment), and were built in a style considerably different from the other five groups. The Kuwait Towers were officially inaugurated in March 1979[1] and are regarded as a landmark and symbol of modern Kuwait.[2] The towers were closed for maintenance from March 2012 to 8 March 2016, with a massive fireworks festival commemorating the re-opening.[3]','The Avenues Mall is the largest shopping mall in Kuwait.[1] The mall is located in the Rai area extending from Fifth Ring Road from the south and Al Ghazali Highway from the east. It opened in April 2007, under the patronage of the Amir of Kuwait Sheikh Sabah Al Ahmed Al Sabah.[1] It was the winner of the ICSC Gold Award for “Best Shopping Center 2013” under the Expansion and Design Category in the Middle East & North Africa.[2] It features more than 800 stores and parking space that fits more than 1,000 cars.[3] Its exteriors are surrounded by fountains.','Kuwait Entertainment City (Arabic: مدينة الكويت الترفيهية) is an amusement park located in the western outskirts of Kuwait City, the capital of Kuwait. It first opened on 14 March 1984[1] and is one of several entertainment properties run by the Kuwait-based Touristic Enterprises Company. Some of the park\'s attractions, such as its large Bolliger & Mabillard inverted roller coaster and its 3 ft (914 mm) narrow gauge[2] railway, are common features in large-scale amusement parks in the United States, but are very rare in amusement parks in the Middle East. Starting on 6 June 2016, the park temporarily closed for renovations.[3]','The Scientific Center of Kuwait, located in Salmiya, Kuwait, serves as a center for environmental education of the Persian Gulf. KSC spans over 80,000 square meters with the building covering over 18,000 square meters. The center also houses the largest aquarium in the Middle East after Dubai, holding over 100 different species of animals. Along with the aquarium, it also contains an IMAX theatre, a harbor of historic dhows, and a gift shop among other contents.'];
PlacesInfo["USA"]=['Times Square is a major commercial intersection, tourist destination, entertainment center and neighborhood in the Midtown Manhattan section of New York City at the junction of Broadway and Seventh Avenue. It stretches from West 42nd to West 47th Streets.[1] Brightly adorned with billboards and advertisements, Times Square is sometimes referred to as "The Crossroads of the World",[2] "The Center of the Universe",[3] "the heart of The Great White Way",[4][5][6] and the "heart of the world".[7] One of the world\'s busiest pedestrian areas,[8] it is also the hub of the Broadway Theater District[9] and a major center of the world\'s entertainment industry.[10] Times Square is one of the world\'s most visited tourist attractions, drawing an estimated 50 million visitors annually.[11] Approximately 330,000 people pass through Times Square daily,[12] many of them tourists,[13] while over 460,000 pedestrians walk through Times Square on its busiest days.[7]','Central Park is an urban park in Manhattan, New York City. It comprises 843 acres (341 ha) between the Upper West Side and Upper East Side, roughly bounded by Fifth Avenue on the east, Central Park West (Eighth Avenue) on the west, Central Park South (59th Street) on the south, and Central Park North (110th Street) on the north. Central Park is the most visited urban park in the United States, with 40 million visitors in 2013, and one of the most filmed locations in the world.','The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States. The copper statue, a gift from the people of France to the people of the United States, was designed by French sculptor Frédéric Auguste Bartholdi and built by Gustave Eiffel. The statue was dedicated on October 28, 1886.<br>The Statue of Liberty is a figure of a robed woman representing Libertas, a Roman goddess. She holds a torch above her head with her right hand, and in her left hand carries a tabula ansata inscribed in Roman numerals with "JULY IV MDCCLXXVI" (July 4, 1776), the date of the U.S. Declaration of Independence. A broken chain lies at her feet. The statue became an icon of freedom and of the United States, and was a welcoming sight to immigrants arriving from abroad.','The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean. The structure links the American city of San Francisco, California – the northern tip of the San Francisco Peninsula – to Marin County, carrying both U.S. Route 101 and California State Route 1 across the strait. The bridge is one of the most internationally recognized symbols of San Francisco, California, and the United States. It has been declared one of the Wonders of the Modern World by the American Society of Civil Engineers.','Universal Studios Hollywood is a film studio and theme park in the San Fernando Valley area of Los Angeles County, California. About 70% of the studio lies within the unincorporated county island known as Universal City while the rest lies within the city limits of Los Angeles, California. It is one of the oldest and most famous Hollywood film studios still in use. Its official marketing headline is "The Entertainment Capital of LA".[1] It was initially created to offer tours of the real Universal Studios sets and is the first of many full-fledged Universal Studios Theme Parks located across the world.'];
PlacesInfo["FRA"]=["What would Paris be without its symbolic Eiffel Tower? Built by Gustave Eiffel to commemorate the centenary of the French Revolution it is presented at the Exposition Universelle in Paris in 1889 324 meters high it is one of the most visited monuments in the world with nearly 7 million visitors a year The first floor houses the Eiffel Tower 58 which extends over two levels 58 meters above the ground as its name suggests On the second floor the view is the best at 115 meters because you have a diving view on the ground below Finally on the 3rd floor at 275 meters you can see what the office of Gustave Eiffel was For the more adventurous one it is possible to use the stairs and climb the steps The ascent of the Eiffel Tower is a must to enjoy the magnificent view of Paris Skip the huge lines of the Eiffel Tower and get to the summit with this VIP Eiffel Tower tickets","One of the most enduring symbols of Paris: Notre-Dame de Paris also known as Notre Dame a Roman Catholic cathedral is located on the eastern half of the Ile de la Cité It is widely considered one of the finest examples of French Gothic architecture in France and Europe Begun in 1163 and completed in 1345 this cathedral is a sight with its portals surrounded by his many sculptures and gargoyles that adorn the roof<br>We advise you to walk around the cathedral then go inside and climb the 387 steps to the top of the towers The climb to the top of the towers can be exhausting but you will get a panoramic view of the region and see the famous gargoyles up close","The Louvre is the most visited art museum in the world Located in the heart of Paris this historic building is a former royal palace with an area of 210000 square meters including 60600 for the exhibitions The museum is housed in the Louvre originally a fortress built in the late 12th century under Philip II The remains of the fortress are visible in the basement of the museum The collection is divided into eight departments:•	Egyptian antiquities:<br>•	Oriental antiquities<br>•	Greek Etruscan and Roman<br>•	Islamic Art<br>•	Sculptures of the Middle Ages Renaissance and Modern Times<br>•	Objects of art<br>•	Paintings<br>•	Graphic arts","Under the spell of ancient Roman architecture Napoleon commissioned Jean Chalgrin the design of a triumphal arch dedicated to the glory of imperial armies Built in the 19th century it is the largest monument of its kind in the world Impressive sculptures adorn its pillars In addition the names of 558 generals and the great victories are engraved on the top of the arc Under the Arc de Triomphe is the Tomb of the Unknown Soldier of France The panoramic terrace above the door offers a beautiful view of Paris 50 meters high 45 meters wide and 22 meters deep the Arc de Triomphe is located on the Place de lEtoile which leads to the Champs Elysees which is nicknamed the most beautiful avenue in the world It stands on 19 km between Place de la Concorde and the Arc de Triomphe There are many luxury boutiques (Louis Vuitton Cartier Guerlain Montblanc …) places of ehntertainment (Lido cinemas) famous cafes and restaurants (Fouquets)",
"Find the best way to visit the City of Light enjoying a cruise on the Seine especially at night When the sun set the monuments are lit slowly You get a panoramic view to the forefront so you can enjoy the beauty of Paris Eiffel Tower Notre Dame Pont Alexandre III and many more You can also enjoy a dinner cruise on the Seine aboard a boat For about two hours you are welcomed"];
PlacesInfo["JPN"]=["Travelers who like to mingle with people will love Tokyo. The Japanese capital’s metropolitan area is the most populous in the world. From viewing spring cherry blossoms in traditional gardens to the fish market at Tuskiji. Tokyo blends the ancient with the new, from shrines to karaoke bars. Just walking the streets of this hyperactive city can be an energizing experience. When Tokyo’s pace gets too frenetic, visitors recommend unwinding at the beautiful Shinjuku Gyoen National Garden.","Kyoto today is the capital only of Kyoto prefecture, but it once served as the imperial capital of Japan for more than 1,000 years. Located on central Honshu Island, this city of 1.5 million people is known as the City of 10,000 Shrines because it has thousands of Shinto shrines, including the top rated Fushimi Inari Shrine, and Buddhist temples. Kyoto also is known for its lovely gardens and the Gion Matsuri festival, a July celebration that is considered one of the best in Japan.","Nara, once known as Heijo, was the first permanent capital of Japan, established in 710. The capital was moved to Nagaoka in 784 when the government was threatened by powerful Buddhist monasteries. Located less than an hour from Kyoto, seeing Japan’s oldest and largest temples is a popular tourist activity. Visitors especially like Todaiji Temple with its cantilevered buildings, manicured lawns and deer strolling the grounds. ","Visitors who long for peace and quiet after the hustling pace of Japan’s big cities may want to head to the tourist town of Hida-Takayama where they can experience life in a rural setting. Located near the northern Japan Alps, Takayama is well known for having one of the best-preserved old towns in Japan. The prettiest section of the old city is called Sanmachi. It consists of three narrow lanes packed with wooden buildings housing sake breweries and little boutiques.","Nikko is a small town at the entrance to Nikko National Park, most famous for Toshogu, Japan’s most lavishly decorated shrine and the mausoleum of Tokugawa Ieyasu. Another popular attraction is the red-lacquered Shin-kyō bridge. One of the popular places to visit in Japan, the national park offers scenic mountainous landscapes, lakes, waterfalls, wild monkeys and many hiking trails. While stunning scenery is available year ‘round, fall is an especially good time to visit Nikko. That’s when leaves transform the landscape with spectacular bursts of color."];
PlacesInfo["ESP"]=["Located in northeastern Spain, Barcelona is one of the country’s top travel destinations because it offers everything tourists look for in a European city from historic architecture to lively shopping, vibrant culture and buzzing nightlife. Unique to Barcelona are the architectural marvels of Spain’s famous architect, Antoni Gaudi, which include the Casa Batllo and the famous Sagrada Familia church. Both of these extraordinary structures feature combinations of fascinating designs, shapes and colors. Popular activities in Barcelona include strolling along La Rambla, a tree-lined pedestrian avenue, and sunbath on Barceloneta, one of the city’s most popular beaches.","Spain has some of the most beautiful islands in Europe. The largest Spanish Islands are equally divided between the Balearic Islands and the Canary Islands. East of the Spanish mainland, the four chief Balearic Islands (Ibiza, Formentera, Mallorca and Menorca) maintain a character distinct from the rest of Spain and from each other. Mallorca is the largest and best-known Balearic island while Ibiza is famous as a party destination. The Canary Islands, also known as the Canaries, are located just off the southern coast of Morocco in the Atlantic. They are popular for their beautiful beaches, mild climate and important natural attractions, especially the Maspalomas Dunes in Gran Canaria and the Teide Volcano in Tenerife.","Spain’s capital and largest city, Madrid, is widely known for its sizzling nightlife scene. The city constitutes a diversity of ethnic groups, making it one of Europe’s most colorful cosmopolitan cities. Located within the city center are most of Madrid’s most popular tourist attractions such as the Royal Palace, the residence of Spain’s monarch. The heart of Madrid (and Spain) is Puerta del Sol, a large plaza serving as the scene of festivals, important gatherings and street performers as well as a hub for the public transportation network. Another important square is Plaza Mayor, known for the lively San Miguel Market.","Exceptional tourist attractions, lively festivals and buzzing nightlife all make Seville one of the best places to visit in Spain. As the capital city of Andalusia, Seville is also the region’s financial and cultural capital. The city is home to many beautiful and important historic landmarks, chief of which is the grand Cathedral of Seville, where it is believed that Christopher Columbus is buried. Another significant building is the Real Alcazar, an extravagant Moorish palace with luxurious gardens.","One of the largest and most important cities in Spain, Valencia is located in the eastern part of the country in the region of Valencia. After redirecting the Turia River, the city constructed its most impressive landmark, a massive cultural and entertainment complex known as the City of Arts and Science. Contained within this complex are several buildings such as a science museum, planetarium and aquarium that are each artistic marvels in and of themselves. Every March, Valencia hosts the Fallas Festival where each neighborhood displays papier-mâché figures of all sizes and colors. At the end of the week, the figures are ceremoniously burned, and the communities party into the night."];

function GetPlaceInfo(X)
 {
	info.innerHTML=PlacesInfo[CountryCode][X]; 
	placename.innerHTML=PlacesNames[CountryCode][X]; 
	placenumber=X;
	
 }

function ShowCountry(X)
{

	Simage1.src='Data/Countries/'+X+'/1.jpg';
	Simage2.src='Data/Countries/'+X+'/2.jpg';
	Simage3.src='Data/Countries/'+X+'/3.jpg';
	Simage4.src='Data/Countries/'+X+'/4.jpg';
	Simage5.src='Data/Countries/'+X+'/5.jpg';
	
	Timage1.src='Data/Countries/'+X+'/1.jpg';
	Timage2.src='Data/Countries/'+X+'/2.jpg';
	Timage3.src='Data/Countries/'+X+'/3.jpg';
	Timage4.src='Data/Countries/'+X+'/4.jpg';
	Timage5.src='Data/Countries/'+X+'/5.jpg';
	
	TheMap.src='Data/Countries/Maps/'+X+'.png';
	
	CountryCode=X;
	GetPlaceInfo(placenumber);
}


ShowCountry('USA');
GetPlaceInfo(1);

 