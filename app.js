var products = ["iPhone", "Mac", "iPad", "Apple Watch"];
var random_products = products[Math.floor(Math.random() * products.length)];

var names = ["Bob", "Gary", "Derek", "Karen", "John", "Jane", "David", "Emily", "William", "Grace", "Michael", "Olivia",
         "Christopher", "Sophia", "Matthew", "Ava", "Jessica", "Isabella", "Daniel", "Mia", "Andrew", "Charlotte",
         "Steven", "Amelia", "Thomas", "Ella", "Timothy", "Madison", "Richard", "Abigail", "Joseph", "Elizabeth",
         "Nicholas", "Chloe", "Jonathan", "Lily", "Samuel", "Makayla", "Benjamin", "Kaylee", "Jacob", "Hannah", "Tyler",
         "Avery", "Nichole", "Alexis", "William", "Victoria", "Liam", "Emma", "Ethan", "Sophia", "Mason", "Olivia",
         "Noah", "Isabella", "James", "Mia", "Alexander", "Charlotte", "Benjamin", "Amelia", "Elijah", "Harper",
         "Daniel", "Evelyn", "William", "Scarlett", "Henry", "Natalie", "Jackson", "Grace", "Ava", "Lily", "Logan",
         "Zoe", "Gabriel", "Ellie", "Caleb", "Violet", "Samuel", "Nora", "Luke", "Penelope", "Owen", "Madison", "Ryan",
         "Addison", "Isaac", "Elizabeth", "Lucas", "Avery", "Landon", "Brooklyn", "Aiden", "Samantha", "Carson",
         "Layla", "Oliver", "Maya", "Sebastian", "Harper", "David", "Leah", "Joseph", "Aubrey", "Adam", "Hazel",
         "Dylan", "Audrey", "Wyatt", "Eva", "Julian", "Claire", "Levi", "Skylar", "Anthony", "Sadie", "Leo", "Paisley",
         "Lincoln", "Ellie", "Jaxon", "Savannah", "Harper", "Camila", "Isaiah", "Caroline", "Eli", "Piper", "Brayden",
         "Audrey", "Evan", "Alexa", "Nolan", "Arianna", "Miles", "Bella", "Brody", "Gabriella", "Colton", "Ruby",
         "Hunter", "Kennedy", "Ethan", "Stella", "Xavier", "Peyton", "Sonnick", "Zack", "Zach", "Clint", "Jason",
         "Jess", "Tonya", "Cal", "Maison", "Monae", "Ro", "Mike", "Courtney", "Christain"];

var random_names = names[Math.floor(Math.random() * names.length)];
var random_names2 = names[Math.floor(Math.random() * names.length)];
var random_names3 = names[Math.floor(Math.random() * names.length)];

var professions = [
    "programmer",
    "musician",
    "video editor",
    "3D designer",
    "real estate agent",
    "student",
    "teacher",
    "writer",
    "chef",
    "nurse",
    "doctor",
    "lawyer",
    "accountant",
    "salesperson",
    "photographer",
    "entrepreneur",
    "scientist",
    "artist",
    "engineer",
    "retired individual",
    "pilot"
];
var random_professions = professions[Math.floor(Math.random() * professions.length)];
var skillLevels = [
    // advanced skills
    "They are an advanced user and have mastered using the device.",
    "They've had the device for a long time and know it inside out.",
    "They are extremely comfortable using the device and its advanced features.",
    "They have explored every nook and cranny of the device's capabilities.",
    "They can troubleshoot and fix complex issues with ease.",
    "They actively seek out and try the latest apps and cutting-edge features.",
    "They possess an in-depth understanding of advanced settings and configurations.",
    "They excel at using shortcuts and advanced techniques to maximize efficiency.",
    "They enjoy sharing their expertise and helping others with the device.",
    "They ensure the device is always up to date with the latest software.",
    "They've customized the device extensively to match their unique needs and style.",
    "They have a meticulous organization system for files and data.",
    "They've implemented robust backup strategies to protect their valuable information.",
    "They've seamlessly integrated the device with a wide range of other devices and services.",
    "They're skilled at diagnosing and resolving complex problems that arise.",
    "They prioritize the device's security and implement advanced privacy measures.",
    "They automate tasks and create intricate workflows to streamline their work.",
    "They actively contribute to online communities, sharing their knowledge and insights.",
    "They've leveraged the device's capabilities to create powerful solutions.",
    "They constantly push the boundaries of what the device can do, seeking new challenges.",

    // intermediate skills
    "They are an intermediate user and have learned a lot about using the device.",
    "They've had the device for a long time and know more than most.",
    "They are very comfortable using the device far beyond the basics.",
    "They have explored many features of the device and can do advanced things.",
    "They've become an expert at fixing problems and getting the device to work.",
    "They enjoy trying out new apps and discovering what the device can do.",
    "They know how to personalize settings and make the device their own.",
    "They're good at finding shortcuts and tricks to use the device faster.",
    "They love sharing their knowledge and helping others with the device.",
    "They make sure to keep the device up to date to access new features.",
    "They've customized the device to match their own style and preferences.",
    "They can keep their files and stuff organized and easy to find.",
    "They understand how to back up their important stuff to keep it safe.",
    "They've connected the device with other devices and made them work together.",
    "They're skilled at troubleshooting common problems that occur with the device.",
    "They prioritize the device's security and know how to keep their information private.",
    "They automate tasks and find ways to make things easier and more efficient.",
    "They enjoy participating in online communities to connect with other device users.",
    "They've integrated the device with other cool gadgets and technologies they have.",
    "They're always excited to learn and explore new possibilities with the device.",

    // beginner skills
    "They are a beginner user and are just starting to explore the device's capabilities.",
    "They've had the device for years but haven't really learned how to use it to the fullest.",
    "They are intimidated and don't consider themselves very tech-savvy.",
    "They are eager to learn and are open to trying new features and functions.",
    "They often rely on friends or family for help with their device.",
    "They feel overwhelmed by the complex settings and options available.",
    "They are slowly getting comfortable with the basic functions of the device.",
    "They are seeking resources and tutorials to enhance their understanding.",
    "They appreciate user-friendly interfaces and intuitive design.",
    "They are excited about the possibilities the device offers and are motivated to learn and improve their skills.",
    "They are exploring different applications to expand their device's capabilities.",
    "They enjoy discovering new features and functionalities of their device.",
    "They sometimes struggle to keep up with software updates and new releases.",
    "They are often amazed by the advanced technology integrated into their device.",
    "They seek recommendations from others on useful apps and settings.",
    "They are interested in learning tips and tricks to optimize their device's performance.",
    "They find the online user community helpful in troubleshooting device issues.",
    "They are gradually building their confidence in using the device independently.",
    "They value simplicity and intuitive navigation in the device's interface.",
    "They are keen on personalizing their device to suit their preferences."
];
var random_skillLevels = skillLevels[Math.floor(Math.random() * skillLevels.length)];

var software = {
    "programmer": ["Visual Studio Code", "Xcode", "Sublime Text", "Atom", "PyCharm", "Eclipse", "Terminal", "Git", "Parallels"],
    "musician": ["Logic Pro X", "GarageBand", "Ableton Live", "Pro Tools", "Sibelius", "Cubase", "Reason", "FL Studio", "Audacity", "Studio One"],
    "video editor": ["Final Cut Pro X", "Adobe Premiere Pro", "Davinci Resolve", "iMovie", "Avid Media Composer", "Blender", "Filmora", "Lightworks"],
    "3D designer": ["Blender", "SketchUp", "Autodesk Maya", "Autodesk 3ds Max", "Cinema 4D", "Rhino", "Fusion 360"],
    "real estate agent": ["Zillow", "Redfin", "Realtor.com", "Trulia", "ZipForms", "Docusign"],
    "student": ["Microsoft Office", "Google Drive", "Notion", "Evernote", "Grammarly", "Quizlet", "Scrivener", "Simplenote", "iWork"],
    "teacher": ["Microsoft Office", "Word", "Powerpoint", "iWork", "Pages", "Numbers", "Keynote", "Excel", "Google Docs", "the Internet", "Google Classroom", "Kahoot!", "Quizlet"],
    "writer": ["Scrivener", "Grammarly", "Hemingway", "Bear", "Evernote", "Notion", "Google Docs", "Microsoft Word", "Pages"],
    "chef": ["Paprika Recipe Manager", "Yummly", "Epicurious", "ChefTap", "SideChef", "Tasty", "Mealime"],
    "nurse": ["Microsoft Office", "Word", "Powerpoint", "iWork", "Pages", "Numbers", "Keynote", "Excel", "Google Docs", "the Internet", "Epocrates", "Medscape", "NurseGrid", "Nursing Central", "Nursing Drug Handbook", "Nursing Essentials", "Nurse's Pocket Guide", "NurseTabs", "Nursing Dictionary by Farlex"],
    "doctor": ["Microsoft Office", "Word", "Powerpoint", "iWork", "Pages", "Numbers", "Keynote", "Excel", "Google Docs", "the Internet", "Medscape", "Prognosis: Your Diagnosis", "Doximity", "MDCalc", "Human Anatomy Atlas"],
    "lawyer": ["Microsoft Office", "Word", "Powerpoint", "iWork", "Pages", "Numbers", "Keynote", "Excel", "Google Docs", "the Internet"],
    "accountant": ["Quickbooks", "Excel", "the Internet", "Paralells", "QuickBooks", "FreshBooks"],
    "salesperson": ["Microsoft Office", "Word", "Powerpoint", "iWork", "Pages", "Numbers", "Keynote", "Excel", "Google Docs", "the Internet", "Salesforce"],
    "photographer": ["Photos", "Canva", "Adobe Creative Cloud", "Lightroom", "Photoshop", "Capture One", "Affinity Photo", "GIMP"],
    "entrepreneur": ["Microsoft Office", "Word", "Powerpoint", "iWork", "Pages", "Numbers", "Keynote", "Excel", "Google Docs", "the Internet", "iMovie", "Final Cut Pro", "GarageBand", "Quickbooks", "Parallels", "Slack", "Trello", "Asana", "Airtable", "Notion", "Evernote", "Google Drive", "Zoom", "Mailchimp", "Stripe"],
    "scientist": ["Microsoft Office", "Word", "Powerpoint", "iWork", "Pages", "Numbers", "Keynote", "Excel", "Google Docs", "the Internet", "RStudio", "MATLAB", "LabVIEW", "Python", "Jupyter Notebook", "Octave", "GNUPlot", "Gwyddion", "ImageJ", "Plotly"],
    "artist": ["Adobe Creative Cloud", "Procreate", "Sketch", "Blender", "Affinity Designer", "Corel Painter", "Krita", "Clip Studio Paint", "GIMP", "Inkscape", "Email", "Microsoft Office", "iWork", "Canva"],
    "engineer": ["AutoCAD", "Python", "Microsoft Office", "Word", "Powerpoint", "iWork", "Pages", "Numbers", "Keynote", "Excel", "Google Docs", "the Internet", "Parallels"],
    "retired individual": ["Microsoft Office", "Internet", "Contacts", "Photos", "Zoom", "Facebook"],
    "pilot": ["ForeFlight", "Garmin Pilot", "WingX Pro7", "LogTen Pro X", "Air Navigation Pro", "AeroWeather", "METARs Aviation Weather"]
};

var random_profession = Object.keys(software)[Math.floor(Math.random() * Object.keys(software).length)];
var random_item = software[random_profession][Math.floor(Math.random() * software[random_profession].length)];

var iPhoneUses = [
    "stay connected with friends and family",
    "enhance productivity",
    "capture high-quality photos and videos",
    "enjoy entertainment on the go",
    "explore new apps and technologies",
    "access social media platforms",
    "seamlessly sync data across devices",
    "conveniently check emails",
    "stay updated with news and current events",
    "navigate using GPS and maps",
    "stream music from various platforms",
    "play immersive mobile games",
    "manage personal finances",
    "make video calls",
    "create and edit documents on the go",
    "scan documents and save them digitally",
    "track fitness activities and goals",
    "use as a remote control for various devices",
    "read e-books and digital magazines",
    "discover and listen to podcasts",
    "monitor and control smart home devices",
    "access and use digital wallets",
    "use as a portable flashlight",
    "capture slow-motion videos",
    "create and edit videos on the device",
    "find and book flights, hotels, and rental cars",
    "make mobile payments",
    "follow and participate in online communities",
    "access language translation tools",
    "order food and groceries online",
    "find nearby restaurants, cafes, and attractions",
    "scan and save business cards",
    "receive and manage voice messages",
    "use as a virtual assistant",
    "track and manage daily tasks and to-do lists",
    "set reminders and alarms",
    "watch online streaming services",
    "securely store and manage passwords",
    "engage in mobile banking",
    "participate in video conferences and online meetings",
    "collaborate with others on shared projects",
    "access and use augmented reality applications",
    "track and monitor sleep patterns",
    "use as a digital notebook or journal",
    "discover and try new recipes",
    "practice and learn musical instruments",
    "create and edit artwork and digital designs",
    "access and control home security systems",
    "stay connected with friends and family",
    "enhance productivity",
    "capture high-quality photos and videos",
    "enjoy entertainment on the go",
    "explore new apps and technologies"
];

var random_iPhone_uses = iPhoneUses[Math.floor(Math.random() * iPhoneUses.length)];
var random_iPhone_uses2 = iPhoneUses[Math.floor(Math.random() * iPhoneUses.length)];
var random_iPhone_uses3 = iPhoneUses[Math.floor(Math.random() * iPhoneUses.length)];

var iPadUses = [
    "enhance productivity",
    "create digital art",
    "read books and articles",
    "watch videos and movies",
    "explore new apps and technologies",
    "take handwritten notes with Apple Pencil",
    "access and edit spreadsheets and presentations",
    "use as a portable second monitor",
    "annotate and markup PDF documents",
    "play graphic-intensive games",
    "compose and record music",
    "access and use virtual meeting platforms",
    "manage and organize digital files and documents",
    "collaborate on group projects",
    "use as a digital recipe book in the kitchen",
    "track and manage personal finances",
    "access and use e-learning platforms",
    "view and edit digital photos",
    "create and edit videos",
    "access and use language learning apps",
    "browse and shop online",
    "stream live events and concerts",
    "access and use augmented reality apps",
    "control and manage smart home devices",
    "practice and learn new languages",
    "take online courses and certifications",
    "create and edit 3D models",
    "access and use meditation and mindfulness apps",
    "participate in virtual museum tours",
    "plan and organize travel itineraries",
    "explore and learn about astronomy",
    "access and use coding and programming apps",
    "create and manage digital scrapbooks",
    "access and use remote desktop applications",
    "take and edit professional-quality photos",
    "access and use workout and fitness apps",
    "read and edit digital sheet music",
    "engage in online social communities",
    "access and use fashion and style apps",
    "create and edit architectural designs",
    "access and use language translation tools",
    "practice yoga and other fitness routines",
    "access and use stock trading apps",
    "take and edit aerial photography",
    "access and use medical reference tools",
    "explore and learn about history and archaeology",
    "access and use podcasting apps",
    "enhance productivity",
    "create digital art",
    "read books and articles",
    "watch videos and movies",
    "explore new apps and technologies"
];

var random_iPadUses = iPadUses[Math.floor(Math.random() * iPadUses.length)];
var random_iPadUses2 = iPadUses[Math.floor(Math.random() * iPadUses.length)];
var random_iPadUses3 = iPadUses[Math.floor(Math.random() * iPadUses.length)];



var macUses = [
    "handle heavy workloads",
    "run resource-intensive software",
    "edit high-resolution videos",
    "develop software and applications",
    "work with large datasets",
    "create music and produce tracks",
    "compose and arrange musical scores",
    "design and edit 3D models",
    "render and animate visual effects",
    "compile and run machine learning algorithms",
    "simulate and analyze scientific data",
    "conduct data mining and analysis",
    "create and edit professional-grade photographs",
    "create and edit digital animations",
    "produce and edit podcasts",
    "design and publish websites",
    "create and edit digital publications",
    "perform complex financial modeling",
    "run virtual machines for testing environments",
    "create and edit architectural designs",
    "run simulations for engineering projects",
    "develop and test mobile applications",
    "create and edit computer-aided designs (CAD)",
    "run data analytics and business intelligence",
    "perform 3D rendering and visualization",
    "create and edit professional presentations",
    "design and edit graphic artwork",
    "run scientific simulations and calculations",
    "conduct statistical analysis",
    "run professional-grade video editing software",
    "compile and debug code in various programming languages",
    "create and edit digital marketing campaigns",
    "run multiple virtual desktops and workspaces",
    "manage and control remote servers",
    "conduct remote collaboration and screen sharing",
    "run advanced statistical modeling",
    "create and edit digital illustrations",
    "run video game development environments",
    "design and print 3D objects",
    "create and edit virtual reality experiences",
    "run network security testing and analysis",
    "perform architectural rendering and visualization",
    "run professional audio recording and editing software",
    "create and edit animated movies",
    "perform advanced mathematical calculations",
    "run advanced database management systems", 
    "play video games"
];

var random_macUses = macUses[Math.floor(Math.random() * macUses.length)];
var random_macUses2 = macUses[Math.floor(Math.random() * macUses.length)];
var random_macUses3 = macUses[Math.floor(Math.random() * macUses.length)];

var fitnessGoals = [
    "track their workouts and activity levels",
    "monitor their heart rate and sleep patterns",
    "receive notifications and stay connected",
    "access health and wellness apps",
    "use it as a stylish accessory",
    "set and achieve daily step goals",
    "improve cardiovascular endurance",
    "increase muscular strength and power",
    "enhance flexibility and mobility",
    "track and improve running performance",
    "participate in virtual fitness challenges",
    "monitor and manage calorie intake",
    "achieve and maintain a healthy body weight",
    "improve balance and stability",
    "train for and complete a marathon or race",
    "increase core strength and stability",
    "practice and improve yoga or Pilates",
    "improve muscular endurance",
    "reduce stress and promote relaxation",
    "participate in group fitness classes",
    "increase vertical jump height",
    "improve agility and quickness",
    "achieve a specific body composition",
    "train for and complete a triathlon",
    "improve anaerobic fitness",
    "participate in high-intensity interval training (HIIT)",
    "improve overall athletic performance",
    "build lean muscle mass",
    "increase vertical jump height",
    "reduce body fat percentage",
    "improve swimming technique and speed",
    "train for and complete a cycling event",
    "improve muscular definition and tone",
    "participate in outdoor adventure races",
    "improve golf swing mechanics",
    "increase walking or hiking distance",
    "practice and improve martial arts skills",
    "reduce sedentary behavior",
    "improve basketball skills and performance",
    "participate in dance or Zumba classes",
    "improve rowing technique and power",
    "increase overall daily activity levels",
    "participate in functional fitness training",
    "improve tennis or racquet sports performance",
    "achieve a specific bodybuilding goal",
    "train for and complete an obstacle course race",
    "improve skiing or snowboarding skills"
];

var random_fitnessGoals = fitnessGoals[Math.floor(Math.random() * fitnessGoals.length)];
var random_fitnessGoals2 = fitnessGoals[Math.floor(Math.random() * fitnessGoals.length)];
var random_fitnessGoals3 = fitnessGoals[Math.floor(Math.random() * fitnessGoals.length)];

var Apple_Watch_Uses = [
    "track daily activity and set fitness goals",
    "monitor heart rate during workouts and improve cardiovascular health",
    "receive personalized coaching and workout recommendations",
    "utilize the built-in GPS for accurate outdoor running or cycling tracking",
    "receive notifications for incoming calls, texts, and emails",
    "use voice commands to send messages or make calls without reaching for your phone",
    "control music playback and adjust volume directly from their wrist",
    "monitor sleep patterns and receive insights for better sleep quality",
    "set reminders and receive gentle nudges to stand up and move throughout the day",
    "track and analyze swimming workouts, including laps and stroke count",
    "follow guided breathing exercises for stress relief and relaxation",
    "access and store boarding passes, event tickets, and loyalty cards digitally",
    "track menstrual cycle and receive fertility insights for women",
    "use the ECG app to monitor heart health and detect irregularities",
    "monitor blood oxygen levels and understand their overall fitness",
    "access weather updates and forecasts directly from their wrist",
    "track and analyze outdoor and indoor running workouts",
    "improve performance in tennis or racquet sports",
    "participate in functional fitness training",
    "join challenges and compete with friends for extra motivation",
    "utilize the altimeter to track elevation changes during hikes or climbs",
    "control compatible smart home devices using Apple Watch as a remote",
    "track calories burned and manage weight loss or gain goals",
    "use the Timer and Stopwatch apps for precise timekeeping",
    "track skiing and snowboarding sessions, including speed and vertical descent",
    "receive high and low heart rate notifications for improved health awareness",
    "access Apple Pay for quick and secure contactless payments",
    "use the compass app for navigation and orientation",
    "monitor noise levels and protect their hearing health",
    "receive and respond to messages and emails right from their wrist",
    "customize watch faces and complications for personalized style and functionality",
    "share your activity and achievements with friends and family",
    "access and control compatible music and streaming apps",
    "track yoga sessions and receive guidance for proper form",
    "use the Find My app to locate your misplaced or lost iPhone",
    "set and achieve daily hydration goals with the WaterMinder app",
    "track cycling workouts and monitor distance, speed, and elevation",
    "follow guided meditations for mindfulness and stress reduction",
    "receive notifications and reminders for medication management",
    "use the camera remote feature to take photos with their iPhone",
    "monitor blood glucose levels for diabetes management",
    "track hiking activities and view detailed route maps",
    "follow workout routines and video demonstrations from fitness apps",
    "monitor UV index levels and receive sun protection recommendations",
    "use the noise app to monitor ambient sound levels and protect hearing",
    "access Siri for voice commands, queries, and smart home control",
    "receive reminders and encouragement to complete their daily activity rings",
    "track wheelchair workouts and monitor distance and speed",
    "use the Home app to control smart devices in their home",
    "receive weather alerts and warnings based on their location"
];

var random_Apple_Watch_Uses = Apple_Watch_Uses[Math.floor(Math.random() * Apple_Watch_Uses.length)];
var random_Apple_Watch_Uses2 = Apple_Watch_Uses[Math.floor(Math.random() * Apple_Watch_Uses.length)];
var random_Apple_Watch_Uses3 = Apple_Watch_Uses[Math.floor(Math.random() * Apple_Watch_Uses.length)];
var iPhone_issues = [
    "turns off randomly",
    "functions slowly",
    "doesn't power on",
    "has a cracked screen",
    "experiences frequent freezing",
    "fails to connect to Wi-Fi",
    "has a faulty camera",
    "doesn't charge properly",
    "has water damage",
    "displays a black screen",
    "doesn't recognize touch input",
    "has a swollen battery",
    "overheats frequently",
    "has a malfunctioning home button",
    "has a non-responsive power button",
    "suffers from poor battery life",
    "experiences frequent app crashes",
    "doesn't play sound",
    "has a faulty microphone",
    "doesn't vibrate",
    "loses cellular signal",
    "doesn't connect to Bluetooth devices",
    "experiences random reboots",
    "has a damaged headphone jack",
    "has a faulty proximity sensor",
    "displays distorted graphics",
    "doesn't update to the latest software",
    "experiences GPS issues",
    "has a faulty speaker",
    "has a non-functional volume button",
    "doesn't recognize SIM card",
    "has a non-responsive screen",
    "suffers from frequent battery drain",
    "has a faulty fingerprint scanner",
    "has a damaged charging port",
    "experiences frequent network drops",
    "doesn't sync with iTunes",
    "has a malfunctioning gyroscope",
    "experiences slow or laggy performance",
    "has a malfunctioning ambient light sensor",
    "displays a blue screen",
    "doesn't connect to the computer",
    "has a damaged power cable",
    "doesn't recognize Face ID",
    "has a non-responsive multitouch screen",
    "experiences random app crashes",
    "has a faulty SIM card tray",
    "has a damaged rear camera",
    "displays a white screen of death",
    "has a broken sleep/wake button",
    "has a malfunctioning accelerometer",
    "experiences frequent system freezes"
];

var random_iphone_issue = iPhone_issues[Math.floor(Math.random() * iPhone_issues.length)];

var mac_issues = [
    "doesn't power on",
    "runs slowly",
    "has a frozen screen",
    "has a faulty keyboard",
    "doesn't boot up",
    "experiences frequent crashes",
    "has a non-functional trackpad",
    "has a broken display",
    "has a damaged charging port",
    "doesn't connect to Wi-Fi",
    "has a malfunctioning battery",
    "displays a black screen",
    "doesn't recognize external devices",
    "has a faulty power adapter",
    "has a non-responsive mouse",
    "has a corrupted operating system",
    "has a faulty speaker",
    "doesn't charge properly",
    "has a malfunctioning fan",
    "has a damaged headphone jack",
    "has a faulty webcam",
    "experiences overheating",
    "has a non-functional USB port",
    "has a malfunctioning microphone",
    "has a slow internet connection",
    "doesn't update to the latest software",
    "has a damaged logic board",
    "experiences kernel panics",
    "has a malfunctioning graphics card",
    "has a corrupted hard drive",
    "has a faulty touch bar",
    "displays distorted graphics",
    "has a non-responsive power button",
    "has a malfunctioning Bluetooth",
    "experiences random restarts",
    "doesn't recognize external displays",
    "has a malfunctioning Ethernet port",
    "has a faulty SD card slot",
    "has a slow startup",
    "experiences frequent beach balling",
    "has a non-functional HDMI port",
    "has a malfunctioning fingerprint scanner",
    "doesn't recognize connected devices",
    "has a damaged cooling system",
    "displays a white screen",
    "has a faulty logic board",
    "has a damaged speaker",
    "experiences frequent system freezes",
    "has a malfunctioning sleep/wake button",
    "has a corrupted file system"
];

var random_Mac_Issues = mac_issues[Math.floor(Math.random() * mac_issues.length)];

var iPad_issues = [
    "doesn't power on",
    "runs slowly",
    "has a cracked screen",
    "experiences frequent freezing",
    "fails to connect to Wi-Fi",
    "has a faulty camera",
    "doesn't charge properly",
    "has water damage",
    "displays a black screen",
    "doesn't recognize touch input",
    "has a swollen battery",
    "overheats frequently",
    "has a malfunctioning home button",
    "has a non-responsive power button",
    "suffers from poor battery life",
    "experiences frequent app crashes",
    "doesn't play sound",
    "has a faulty microphone",
    "doesn't vibrate"
];

var random_iPad_Issues = iPad_issues[Math.floor(Math.random() * iPad_issues.length)];

var apple_watch_issues = [
    "doesn't power on",
    "has a frozen screen",
    "runs slowly",
    "has a cracked display",
    "has a non-responsive touchscreen",
    "fails to sync with iPhone",
    "has a faulty heart rate sensor",
    "doesn't charge properly",
    "experiences frequent app crashes",
    "has a swollen battery",
    "has a non-functional crown button",
    "has a broken strap",
    "has water damage",
    "displays incorrect time",
    "has a faulty microphone",
    "doesn't vibrate",
    "has a damaged display",
    "loses Bluetooth connection",
    "has a faulty speaker",
    "doesn't receive notifications",
    "has a non-functional digital crown",
    "experiences random restarts",
    "has a faulty ambient light sensor",
    "has a scratched casing",
    "has a malfunctioning force touch",
    "doesn't track activity accurately",
    "has a damaged charging cable",
    "experiences battery drain",
    "has a non-responsive side button",
    "doesn't connect to Wi-Fi",
    "has a faulty gyroscope",
    "has a scratched or cracked back",
    "doesn't unlock with iPhone",
    "has a non-functional Siri",
    "experiences inaccurate heart rate monitoring",
    "has a damaged heart rate strap",
    "displays distorted graphics",
    "has a faulty accelerometer",
    "has a scratched or foggy display",
    "doesn't connect to GPS",
    "has a malfunctioning ECG sensor",
    "has a non-responsive tap recognition",
    "experiences slow or laggy performance",
    "has a damaged digital crown",
    "has a faulty haptic feedback",
    "doesn't update to the latest software",
    "has a malfunctioning fall detection",
    "displays a red exclamation mark",
    "has a broken or loose connection",
    "experiences Bluetooth interference",
    "has a malfunctioning compass"
];

var random_Apple_Watch_Issues = apple_watch_issues[Math.floor(Math.random() * apple_watch_issues.length)];


//Budget for iPhone:
function iPhone_Budget() {
    let randomMax = Math.random() < 0.9 ? 1300 : 1800;
    let randomNumber = Math.floor(Math.random() * (randomMax - 450 + 1) + 450);
    let roundedNumber = Math.ceil(randomNumber / 50) * 50;
    return `$${roundedNumber}`;
}




const iPhoneScenarios = [
    `${random_names} is considering buying an iPhone to ${random_iPhone_uses}. As a(n) ${random_profession}, they plan to utilize it for ${random_item}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}. What recommendations do you have?`,
    `A ${random_profession} named ${random_names} wants to purchase an iPhone to ${random_iPhone_uses} and for ${random_item}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}. What solution would you suggest?`,
    `${random_names}, a(n) ${random_profession}, is in the market for an iPhone. They intend to utilize it to ${random_iPhone_uses} and for ${random_item}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}.  What advice can you offer?`,
    `Considering ${random_names}'s ${random_profession} background, they are interested in purchasing an iPhone to ${random_iPhone_uses} and for ${random_item}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}.  What would be your suggested solution?`,
    `${random_names} is actively looking to buy an iPhone. They are a(n) ${random_profession} and have specific requirements to ${random_iPhone_uses} and for ${random_item}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}.  Can you provide a suitable solution?`,
    `In search of an iPhone, ${random_names}, a ${random_profession}, has identified ${random_iPhone_uses} and for ${random_item} as their primary needs. ${random_skillLevels} They have a budget of ${iPhone_Budget()}.  What solution would you recommend?`,
    `Aspires to purchase an iPhone, ${random_names} is keen on utilizing it to ${random_iPhone_uses} and for ${random_item}. They are a ${random_profession}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}.  What would be your suggested solution?`,
    `${random_names}, a(n) ${random_profession}, wants to acquire an iPhone to ${random_iPhone_uses} and for ${random_item}. ${random_skillLevels} How would you suggest addressing their requirements?`,
    `${random_names} is planning to invest in an iPhone to ${random_iPhone_uses}. In their ${random_profession} capacity, they intend to leverage it for ${random_item}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}.  What solution would you suggest?`,
    `Seeking an iPhone, ${random_names}, who works as a(n) ${random_profession}, has specific objectives to ${random_iPhone_uses} and for ${random_item}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}.  Can you propose a suitable solution?`,
    `${random_names} is looking to purchase an iPhone and wants to use it to ${random_iPhone_uses}. They are a(n) ${random_profession} and want to use it for ${random_item}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}.  What solution would you suggest?`,
    `${random_names} has had their iPhone for many years and it ${random_iphone_issue}. They are a(n) ${random_profession} and they plan to use it for ${random_item}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}.  What recommendations do you have?`,
    `${random_names} has owned their iPhone for quite some time, and it's been experiencing several issues, including that it ${random_iphone_issue}. As a(n) ${random_profession}, they rely on their iPhone for ${random_item}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}.  What recommendations do you have for them?`,
    `Having used their iPhone for many years, ${random_names} is now facing multiple issues but primarily it ${random_iphone_issue}. Being a(n) ${random_profession}, they heavily depend on their iPhone for ${random_item}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}.  What suggestions can you provide?`,
    `${random_names} has been the proud owner of their iPhone for an extended period, but it has recently started encountering various problems but the most frustrating is that it ${random_iphone_issue}. Given their profession as a ${random_profession} and their intended use of the device for ${random_item}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}.  What recommendations do you have?`,
    `For years, ${random_names} has cherished their iPhone, but lately, it's been plagued by several issues, but the most annoying is that it ${random_iphone_issue}. As a(n) ${random_profession} who relies on the device for ${random_item}, they seek advice based on their skill level. ${random_skillLevels} They have a budget of ${iPhone_Budget()}. What recommendations can you offer?`,
    `${random_names} has been using their iPhone for an extensive period, and it's now exhibiting numerous problems like it ${random_iphone_issue}. Being a(n) ${random_profession} and utilizing the device for ${random_item}, they wonder what recommendations you have?`,
    `After many years of ownership, ${random_names} finds their iPhone facing various issues, including that it ${random_iphone_issue}. As a(n) ${random_profession} who utilizes the device for ${random_item}, they are interested in your recommendations. ${random_skillLevels} They have a budget of ${iPhone_Budget()}. `,
    `${random_names} has been with their iPhone for an extended period, and it's currently encountering multiple issues such as it ${random_iphone_issue}. They work as a(n) ${random_profession} and rely on their device for ${random_item}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}.  Considering their skill level, what suggestions do you have?`,
    `${random_names} has been using their iPhone for many years and is now dealing with a range of problems, including that it ${random_iphone_issue}. Their profession as a(n) ${random_profession} requires them to depend on their device for ${random_item}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}.  What recommendations can you offer?`,
    `Having owned their iPhone for a considerable amount of time, ${random_names} is now faced with several issues, including that it ${random_iphone_issue}. As a(n) ${random_profession} relying on the device for ${random_item}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}.  They seek recommendations.`,
    `${random_names} has been using their iPhone for an extensive duration and is currently encountering numerous issues, including that it ${random_iphone_issue}. Their profession as a(n) ${random_profession} demands reliance on the device for ${random_item}. ${random_skillLevels} They have a budget of ${iPhone_Budget()}.  What recommendations would you suggest?`
];

const random_iPhone_Scenarios = iPhoneScenarios[Math.floor(Math.random() * iPhoneScenarios.length)];

// changed thed code below
function iPhone_Scenario() {
    return random_iPhone_Scenarios;
}

const scenarioElement_iPhone_one_to_one_scenario = document.getElementById("iPhone_one_to_one_scenario");

// Generate and set the iPhone scenario when the page loads
window.addEventListener("DOMContentLoaded", function() {
  const generatedScenario_iPhone_one_to_one = iPhone_Scenario();
  scenarioElement_iPhone_one_to_one_scenario.textContent = generatedScenario_iPhone_one_to_one;
});
// edited before to this

function Mac_Budget() {
    let randomMax = Math.random() < 0.9 ? 2000 : 5000;
    let randomNumber = Math.floor(Math.random() * (randomMax - 800 + 1) + 800);
    let roundedNumber = Math.ceil(randomNumber / 50) * 50;
    return `$${roundedNumber}`;
}




const mac_Scenarios = [
    `In the search for a Mac, ${random_names} is eager to utilize it to ${random_macUses}. As a(n) ${random_profession}, their goal is to optimize it for ${random_item}. ${random_skillLevels} They have a budget of ${Mac_Budget()}. What solution would you recommend?`,
    `Considering ${random_names}'s intention to purchase a Mac to ${random_macUses}, their ${random_profession} background highlights their desire to leverage it for ${random_item}.  ${random_skillLevels} They have a budget of ${Mac_Budget()}. Any recommendations?`,
    `Seeking a Mac, ${random_names} aspires to employ it to ${random_macUses}. Being a(n) ${random_profession}, their primary objective is to utilize it for ${random_item}. ${random_skillLevels} They have a budget of ${Mac_Budget()}. What solution would you suggest?`,
    `${random_names} intends to buy a Mac, envisioning its utilization to ${random_macUses}. As a(n) ${random_profession}, their primary aim is to leverage it for ${random_item}. ${random_skillLevels} They have a budget of ${Mac_Budget()}. What would be your recommended solution?`,
    `The Mac purchase decision is imminent for ${random_names}, who plans to harness its potential to ${random_macUses}. Being a(n) ${random_profession}, their focus is on utilizing it for ${random_item}. ${random_skillLevels} They have a budget of ${Mac_Budget()}. Can you provide any recommendations?`,
    `${random_names}, a(n) ${random_profession}, is contemplating the acquisition of a Mac to ${random_macUses}. Their intended purpose revolves around ${random_item}. ${random_skillLevels} They have a budget of ${Mac_Budget()}. What solution would you suggest to address their requirements?`,
    `As ${random_names} looks to buy a Mac, their desired application centers to ${random_macUses}. With a(n) ${random_profession} background, their primary focus is on utilizing it for ${random_item}. ${random_skillLevels} They have a budget of ${Mac_Budget()}. Any recommendations?`,
    `${random_names} has set their sights on purchasing a Mac to ${random_macUses}, intending to utilize it to ${random_item}. ${random_skillLevels} What solution would you suggest to cater to their needs?`,
    `In the quest for a Mac, ${random_names} is keen on its utilization to ${random_macUses}. As a(n) ${random_profession}, their primary aim is to optimize it for ${random_item}. ${random_skillLevels} They have a budget of ${Mac_Budget()}. What solution would you recommend?`,
    `Envisioning a Mac purchase, ${random_names} desires to leverage it to ${random_macUses}. They work in the field of ${random_profession} and have specific requirements for ${random_item}. ${random_skillLevels} They have a budget of ${Mac_Budget()}. What solution would you suggest?`,
    `${random_names} has had their Mac for many years and it ${random_Mac_Issues}. They are a(n) ${random_profession} and they plan to use it for ${random_item}. ${random_skillLevels} What recommendations do you have?`,
    `${random_names} has been using their Mac for a long time, and they're unhappy with their computer because it ${random_Mac_Issues}. As a(n) ${random_profession}, they rely on it for ${random_item}. ${random_skillLevels} They have a budget of ${Mac_Budget()}. What recommendations can you provide?`,
    `After years of ownership, ${random_names} is facing various issues with their Mac, and it ${random_Mac_Issues}. They are a(n) ${random_profession} who uses it for ${random_item}. ${random_skillLevels} They have a budget of ${Mac_Budget()}. What solution would you suggest?`,
    `${random_names} has been the proud owner of their Mac for many years, but it's now encountering problems because it ${random_Mac_Issues}. As a(n) ${random_profession} relying on it for ${random_item}, what recommendations can you offer? ${random_skillLevels}`,
    `For a considerable amount of time, ${random_names} has relied on their Mac, but it's recently developed issues because it ${random_Mac_Issues}. As a(n) ${random_profession} using it for ${random_item}, they seek advice. ${random_skillLevels} They have a budget of ${Mac_Budget()}. What recommendations would you suggest?`,
    `${random_names} has been using their Mac for several years, and it's now presenting challenges because it ${random_Mac_Issues}. Being a(n) ${random_profession} and utilizing the device for ${random_item}, they wonder what recommendations you have?`,
    `After many years of ownership, ${random_names} finds their Mac facing various issues, including that it ${random_Mac_Issues}. As a(n) ${random_profession} who utilizes the device for ${random_item}, they are interested in your recommendations. ${random_skillLevels} They have a budget of ${Mac_Budget()}.',
    '${random_names} has been with their Mac for an extended period, and it's currently encountering multiple issues such as it ${random_Mac_Issues}. They work as a(n) ${random_profession} and rely on their device for ${random_item}. ${random_skillLevels} Considering their skill level, what suggestions do you have?`,
    `${random_names} has been using their Mac for many years and is now dealing with a range of problems, including that it ${random_Mac_Issues}. Their profession as a(n) ${random_profession} requires them to depend on their device for ${random_item}. ${random_skillLevels} They have a budget of ${Mac_Budget()}. What recommendations can you offer?`,
    `Having owned their Mac for a considerable amount of time, ${random_names} is now faced with several issues, including that it ${random_Mac_Issues}. As a(n) ${random_profession} relying on the device for ${random_item}. ${random_skillLevels} They seek recommendations. They have a budget of ${Mac_Budget()}.`,
    `${random_names} has been using their Mac for an extensive duration and is currently encountering numerous issues, including that it ${random_Mac_Issues}. Their profession as a(n) ${random_profession} demands reliance on the device for ${random_item}. ${random_skillLevels} They have a budget of ${Mac_Budget()}. What recommendations would you suggest?`
];

const random_Mac_Scenario = mac_Scenarios[Math.floor(Math.random() * mac_Scenarios.length)];

function mac_Scenario() {
    return random_Mac_Scenario;
}

const scenarioElement_Mac_one_to_one_scenario = document.getElementById("Mac_one_to_one_scenario");

// Generate and set the Mac scenario when the page loads
window.addEventListener("DOMContentLoaded", function() {
  const generatedScenario_Mac_one_to_one = mac_Scenario();
  scenarioElement_Mac_one_to_one_scenario.textContent = generatedScenario_Mac_one_to_one;
});
// edited before to this


//iPad budget

function iPad_Budget() {
    let randomMax = Math.random() < 0.9 ? 1100 : 2000;
    let randomNumber = Math.floor(Math.random() * (randomMax - 350 + 1) + 350);
    let roundedNumber = Math.ceil(randomNumber / 50) * 50;
    return `$${roundedNumber}`;
}




const iPad_Scenarios = [
    `${random_names} is looking to purchase an iPad and wants to use it to ${random_iPadUses}. They are a(n) ${random_profession} and want to use it for ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. What solution would you suggest?`,
    `As ${random_names} contemplates buying an iPad to ${random_iPadUses}, their ${random_profession} background drives their intention to utilize it for ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. What solution would you recommend?`,
    `Seeking an iPad, ${random_names} aims to leverage its functionalities to ${random_iPadUses}. Being a(n) ${random_profession}, their primary objective is to utilize it for ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. What solution would you suggest?`,
    `In the market for an iPad, ${random_names} desires to harness its features to ${random_iPadUses}. They work as a(n) ${random_profession} and have a specific requirement for ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. What solution would you recommend?`,
    `${random_names} wants to purchase an iPad to ${random_iPadUses} and use it to ${random_item}. As a(n) ${random_profession}, they have ${random_skillLevels} when it comes to using their iPad. They have a budget of ${iPad_Budget()}. What solution would you suggest to address their needs?`,
    `Considering an iPad purchase, ${random_names}, who is a(n) ${random_profession}, has specific intentions to use it to ${random_iPadUses} and ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. Can you provide a suitable solution?`,
    `Aspires to own an iPad, ${random_names}, who works as a(n) ${random_profession}, aims to utilize it to ${random_iPadUses} and ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. What solution would you suggest?`,
    `In search of an iPad, ${random_names} is a(n) ${random_profession} and needs to ${random_iPadUses} and ${random_item}. ${random_skillLevels} What would be your recommended solution?`,
    `${random_names} is actively looking to purchase an iPad to ${random_iPadUses}. They work as a(n) ${random_profession} and want to use it primarily for ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. Can you provide a suitable solution?`,
    `${random_names}, a ${random_profession}, wants to acquire an iPad to ${random_iPadUses} and ${random_item}. ${random_skillLevels} How would you suggest addressing their requirements?`,
    `Seeking an iPad, ${random_names}, who is a(n) ${random_profession}, has specific goals to ${random_iPadUses} and ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. Can you propose a suitable solution?`,
    `${random_names} has been using their iPad for many years, but recently they've been facing issues with it, because it ${random_iPad_Issues}. They are a(n) ${random_profession} and they plan to use it for ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. What recommendations do you have?`,
    `For years, ${random_names} has been using their trusty iPad, but now they are encountering problems with it, because it ${random_iPad_Issues}. As a(n) ${random_profession}, they heavily depend on their iPad for ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. What would you suggest?`,
    `${random_names} has owned their iPad for an extensive period, but it's been plagued by issues, because it ${random_iPad_Issues}. They work as a ${random_profession} and require their iPad for ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. What solution would you offer?`,
    `After using their iPad for many years, ${random_names} has encountered various issues, including that it ${random_iPad_Issues}. As a(n) ${random_profession}, their work heavily relies on the iPad for ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. What would you recommend?`,
    `${random_names} has been the proud owner of their iPad for quite some time, but recently they've been facing issues with it, because it ${random_iPad_Issues}. Being a ${random_profession}, their iPad is crucial for ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. What solution would you recommend?`,
    `Having had their iPad for many years, ${random_names} is now dealing with issues with it, because it ${random_iPad_Issues}. Their profession as a(n) ${random_profession} requires them to use the iPad for ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. What solution would you suggest?`,
    `${random_names} has been using their beloved iPad for an extended period, but they're currently experiencing issues with it, because it ${random_iPad_Issues}. As a ${random_profession}, they heavily rely on their iPad for ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. What would you suggest?`,
    `After years of use, ${random_names} is facing various issues with their iPad, including that it ${random_iPad_Issues}. Their profession as a(n) ${random_profession} demands the use of the iPad for ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. What would be best for them?`,
    `For an extended duration, ${random_names} has enjoyed using their iPad, but it's currently plagued by issues with it, because it ${random_iPad_Issues}. As a(n) ${random_profession}, their work heavily relies on the iPad for ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. What full solution would you suggest?`,
    `${random_names} has been utilizing their iPad for many years, but lately, they have been experiencing issues with it, because it ${random_iPad_Issues}. Their profession as a(n) ${random_profession} necessitates the use of the iPad for ${random_item}. ${random_skillLevels} They have a budget of ${iPad_Budget()}. What solution would you offer?`
];

const random_iPad_Scenario = iPad_Scenarios[Math.floor(Math.random() * iPad_Scenarios.length)];

function iPad_Scenario() {
return random_iPad_Scenario;
}

const scenarioElement_iPad_one_to_one_scenario = document.getElementById("iPad_one_to_one_scenario");

// Generate and set the iPad scenario when the page loads
window.addEventListener("DOMContentLoaded", function() {
  const generatedScenario_iPad_one_to_one = iPad_Scenario();
  scenarioElement_iPad_one_to_one_scenario.textContent = generatedScenario_iPad_one_to_one;
});
// edited before to this

//Apple Watch budget

function Apple_Watch_Budget() {
    let randomMax = Math.random() < 0.9 ? 600 : 900;
    let randomNumber = Math.floor(Math.random() * (randomMax - 250 + 1) + 250);
    let roundedNumber = Math.ceil(randomNumber / 50) * 50;
    return `$${roundedNumber}`;
}




const Apple_Watch_Scenarios = [
    `If ${random_names} is interested in purchasing an Apple Watch to ${random_Apple_Watch_Uses}. They have a budget of ${Apple_Watch_Budget()}. What solution would you suggest?`,
    `Considering ${random_names}'s intention to buy an Apple Watch and utilize it to ${random_Apple_Watch_Uses}. They have a budget of ${Apple_Watch_Budget()}. What solution do you recommend?`,
    `As ${random_names} looks to purchase an Apple Watch and use it to ${random_Apple_Watch_Uses}. They have a budget of ${Apple_Watch_Budget()}. What solution would you suggest to meet their needs?`,
    `What solution would you recommend to ${random_names}, who wants to purchase an Apple Watch to ${random_Apple_Watch_Uses}? They have a budget of ${Apple_Watch_Budget()}.`,
    `${random_names} is considering purchasing an Apple Watch to ${random_Apple_Watch_Uses}. They have a budget of ${Apple_Watch_Budget()}. What solution would you suggest to address their requirements?`,
    `If ${random_names} intends to use an Apple Watch to ${random_Apple_Watch_Uses}, what solution would be suitable for their needs? They have a budget of ${Apple_Watch_Budget()}.`,
    `Considering ${random_names}'s interest in purchasing an Apple Watch and using it to ${random_Apple_Watch_Uses}. They have a budget of ${Apple_Watch_Budget()}. What solution would you suggest to fulfill their requirements?`,
    `If ${random_names} is looking to buy an Apple Watch and utilize it to ${random_Apple_Watch_Uses}, what solution would best meet their needs? They have a budget of ${Apple_Watch_Budget()}.`,
    `${random_names} wants to purchase an Apple Watch and use it to ${random_Apple_Watch_Uses}. They have a budget of ${Apple_Watch_Budget()}. What solution would you suggest to address their specific requirements?`,
    `What solution would you recommend to ${random_names}, who is looking to purchase an Apple Watch to ${random_Apple_Watch_Uses}? They have a budget of ${Apple_Watch_Budget()}.`,
    `${random_names} has had their Apple Watch for a few years, and it ${random_Apple_Watch_Issues}. They are using it to ${random_Apple_Watch_Uses}. ${random_skillLevels}. They have a budget of ${Apple_Watch_Budget()}. What recommendations do you have?`,
    `${random_names} has been using their Apple Watch for a few years, but recently it has been experiencing ${random_Apple_Watch_Issues}. They rely on it to ${random_Apple_Watch_Uses}. ${random_skillLevels} They have a budget of ${Apple_Watch_Budget()}. What recommendations can you provide?`,
    `${random_names} has owned their Apple Watch for a while now, but it's been giving them trouble as it ${random_Apple_Watch_Issues}. They utilize it to ${random_Apple_Watch_Uses}. ${random_skillLevels} They have a budget of ${Apple_Watch_Budget()}. What recommendations would you suggest?`,
    `${random_names} has been wearing their Apple Watch for a few years, and unfortunately, it has been giving them trouble with ${random_Apple_Watch_Issues}. They use it primarily to ${random_Apple_Watch_Uses}. ${random_skillLevels}. They have a budget of ${Apple_Watch_Budget()}. What recommendations can you offer?`,
    `${random_names} has been the proud owner of their Apple Watch for quite some time, but lately, it has been encountering issues as it ${random_Apple_Watch_Issues}. They use it extensively to ${random_Apple_Watch_Uses}. ${random_skillLevels} They have a budget of ${Apple_Watch_Budget()}. What recommendations do you have?`,
    `After several years of usage, ${random_names} is experiencing issues with their Apple Watch as it ${random_Apple_Watch_Issues}. They actively use it to ${random_Apple_Watch_Uses}. ${random_skillLevels} They have a budget of ${Apple_Watch_Budget()}. What recommendations would you provide?`,
    `${random_names} has been relying on their Apple Watch for a few years, but lately, it has been plagued by issues as it ${random_Apple_Watch_Issues}. They depend on it to ${random_Apple_Watch_Uses}. ${random_skillLevels} They have a budget of ${Apple_Watch_Budget()}. What recommendations can you share?`,
    `Despite using their Apple Watch for a few years, ${random_names} has encountered various issues as it ${random_Apple_Watch_Issues}. They use it to ${random_Apple_Watch_Uses}. ${random_skillLevels} They have a budget of ${Apple_Watch_Budget()}. What recommendations do you have to address the problems?`,
    `${random_names} has been utilizing their Apple Watch for quite some time, but it's currently facing issues as it ${random_Apple_Watch_Issues}. They actively use it to ${random_Apple_Watch_Uses}. ${random_skillLevels} They have a budget of ${Apple_Watch_Budget()}. What recommendations can you provide to resolve the issues?`,
    `${random_names} has had their Apple Watch for a few years, and it's been plagued by issues as it ${random_Apple_Watch_Issues}. They rely on it to ${random_Apple_Watch_Uses}. ${random_skillLevels} They have a budget of ${Apple_Watch_Budget()}. What recommendations do you have to improve their experience?`
];

const random_Apple_Watch_Scenarios = Apple_Watch_Scenarios[Math.floor(Math.random() * Apple_Watch_Scenarios.length)];

function Apple_Watch_Scenario() {
return random_Apple_Watch_Scenarios;
}

const scenarioElement_Apple_Watch_one_to_one_scenario = document.getElementById("Apple_Watch_one_to_one_scenario");

// Generate and set the  Apple Watch scenario when the page loads
window.addEventListener("DOMContentLoaded", function() {
  const generatedScenario_Apple_Watch_one_to_one = Apple_Watch_Scenario();
  scenarioElement_Apple_Watch_one_to_one_scenario.textContent = generatedScenario_Apple_Watch_one_to_one;
});
// edited before to this

const One_to_few_iPhoneScenario = [
    `${random_names} inquires about needing an iPhone to ${random_iPhone_uses}. Then ${random_names2} joins the table and brings up wanting to ${random_iPhone_uses2}. While you're introducing yourself, ${random_names3} joins the conversation and mentions they want to ${random_iPhone_uses3}. How could you turn this conversation into a One to Few?`,
    `${random_names} inquires about needing an iPhone to ${random_iPhone_uses}. Then ${random_names2} joins the table and brings up wanting to ${random_iPhone_uses2}. While you're introducing yourself, ${random_names3} joins the conversation and mentions they want to ${random_iPhone_uses3}. How could you turn this conversation into a One to Few?`,
    `${random_names} asks about the necessity of having an iPhone to ${random_iPhone_uses}. Soon after, ${random_names2} joins the group and expresses their desire to ${random_iPhone_uses2}. As you introduce yourself, ${random_names3} joins in and shares their interest to ${random_iPhone_uses3}. How can this conversation transition into a One to Few interaction?`,
    `${random_names} raises a question regarding the necessity of an iPhone to ${random_iPhone_uses}. Subsequently, ${random_names2} joins the group and expresses their interest in ${random_iPhone_uses2}. Meanwhile, as you introduce yourself, ${random_names3} joins the conversation and shares their desire to ${random_iPhone_uses3}. How can this conversation be converted into a One to Few format?`,
    `${random_names} initiates the conversation by inquiring about the need for an iPhone to ${random_iPhone_uses}. Moments later, ${random_names2} joins the gathering and brings up their desire to ${random_iPhone_uses2}. While introducing yourself, ${random_names3} enters the discussion and reveals their wish to ${random_iPhone_uses3}. How can this exchange be transformed into a One to Few dialogue?`,
    `${random_names} wonders if having an iPhone is necessary to ${random_iPhone_uses}. Shortly after, ${random_names2} joins the gathering and expresses their interest in ${random_iPhone_uses2}. As you introduce yourself, ${random_names3} joins the conversation and mentions their desire to ${random_iPhone_uses3}. How can you steer this discussion towards a One to Few format?`,
    `${random_names} questions the need for an iPhone to ${random_iPhone_uses} and initiates the conversation. Joining the table, ${random_names2} brings up their desire to ${random_iPhone_uses2}. Meanwhile, as you introduce yourself, ${random_names3} joins the dialogue and mentions their wish to ${random_iPhone_uses3}. How can you convert this conversation into a One to Few scenario?`,
    `${random_names} inquires about the necessity of owning an iPhone to ${random_iPhone_uses}. At that moment, ${random_names2} joins the table and expresses their interest in ${random_iPhone_uses2}. While you introduce yourself, ${random_names3} joins the conversation and mentions their desire to ${random_iPhone_uses3}. How can you transform this discussion into a One to Few context?`,
    `${random_names} raises a question about the need for an iPhone to ${random_iPhone_uses}. Just then, ${random_names2} joins the gathering and brings up their aspiration to ${random_iPhone_uses2}. While introducing yourself, ${random_names3} enters the conversation and reveals their wish to ${random_iPhone_uses3}. How can you transition this dialogue into a One to Few exchange?`,
    `Wondering if ${random_iPhone_uses} requires an iPhone, ${random_names} starts the conversation. Joining the group, ${random_names2} mentions their desire to ${random_iPhone_uses2}. While you introduce yourself, ${random_names3} joins the discussion and expresses their interest to ${random_iPhone_uses3}. How can you turn this conversation into a One to Few?`,
    `${random_names} is curious about whether an iPhone is necessary to ${random_iPhone_uses}. Shortly after, ${random_names2} joins the table and brings up their desire to ${random_iPhone_uses2}. While introducing yourself, ${random_names3} joins the conversation and mentions their wish to ${random_iPhone_uses3}. How can you shape this discussion into a One to Few scenario?`
];

const random_One_to_few_iPhoneScenario = One_to_few_iPhoneScenario[Math.floor(Math.random() * One_to_few_iPhoneScenario.length)];

function iPhone_One_to_Few_Scenarios() {
    return random_One_to_few_iPhoneScenario
}

const scenarioElement_iPhone_one_to_few_scenario = document.getElementById("iPhone_one_to_few_scenario");

// Generate and set the iPhone scenario when the page loads
window.addEventListener("DOMContentLoaded", function() {
  const generatedScenario_iPhone_one_to_few = iPhone_One_to_Few_Scenarios();
  scenarioElement_iPhone_one_to_few_scenario.textContent = generatedScenario_iPhone_one_to_few;
});


const One_to_few_MacScenario = [
  `${random_names} inquires about needing a Mac to ${random_macUses}. Then ${random_names2} joins the table and brings up wanting to ${random_macUses2}. While you're introducing yourself, ${random_names3} joins the conversation and mentions they want to ${random_macUses3}. How could you turn this conversation into a One to Few?`,
  `${random_names} asks about the necessity of having a Mac to ${random_macUses}. Shortly after, ${random_names2} joins the discussion and expresses their desire to ${random_macUses2}. Just as you begin to introduce yourself, ${random_names3} joins in and shares their aspiration to ${random_macUses3}. How can you transition this conversation into a One to Few?`,
  `${random_names} raises a question about the need for a Mac in order to ${random_macUses}. As the conversation progresses, ${random_names2} joins the group and mentions their interest in ${random_macUses2}. While you introduce yourself, ${random_names3} enters the conversation and expresses their desire to ${random_macUses3}. How can you leverage this discussion and turn it into a One to Few?`,
  `${random_names} wonders if having a Mac is necessary to ${random_macUses}. Then, ${random_names2} arrives at the table and brings up their intention to ${random_macUses2}. Meanwhile, as you introduce yourself, ${random_names3} joins the conversation and mentions their desire to ${random_macUses3}. How can you transform this dialogue into a One to Few interaction?`,
  `${random_names} is curious about the need for a Mac to ${random_macUses}. At that moment, ${random_names2} joins the group and shares their aspiration to ${random_macUses2}. While you introduce yourself, ${random_names3} becomes part of the conversation and expresses their desire to ${random_macUses3}. How can you transition this conversation into a One to Few format?`,
  `${random_names} wants to know if a Mac is required to ${random_macUses}. Shortly after, ${random_names2} joins the gathering and brings up their desire to ${random_macUses2}. While introducing yourself, ${random_names3} joins in and mentions their wish to ${random_macUses3}. How can you convert this conversation into a One to Few interaction?`,
  `${random_names} ponders the necessity of owning a Mac to ${random_macUses}. Just as the conversation progresses, ${random_names2} joins in and expresses their interest in ${random_macUses2}. Meanwhile, while introducing yourself, ${random_names3} joins the discussion and mentions their desire to ${random_macUses3}. How can you transform this dialogue into a One to Few conversation?`,
  `${random_names} starts a discussion by asking if a Mac is needed to ${random_macUses}. Shortly after, ${random_names2} joins the table and brings up their intention to ${random_macUses2}. While introducing yourself, ${random_names3} enters the conversation and expresses their desire to ${random_macUses3}. How can you turn this conversation into a One to Few exchange?`,
  `${random_names} initiates the conversation with a question about the requirement of a Mac to ${random_macUses}. As the discussion unfolds, ${random_names2} joins the group and shares their interest in ${random_macUses2}. Meanwhile, while introducing yourself, ${random_names3} joins in and mentions their desire to ${random_macUses3}. How can you transition this conversation into a One to Few format?`,
  `${random_names} opens up the conversation by inquiring about the need for a Mac in order to ${random_macUses}. Soon after, ${random_names2} joins the conversation and expresses their desire to ${random_macUses2}. While introducing yourself, ${random_names3} joins the discussion and mentions their aspiration to ${random_macUses3}. How can you leverage this discussion and turn it into a One to Few engagement?`
];

const random_One_to_few_MacScenario = One_to_few_MacScenario[Math.floor(Math.random() * One_to_few_MacScenario.length)];

function Mac_One_to_Few_Scenarios() {
    return random_One_to_few_MacScenario
}

const scenarioElement_Mac_one_to_few_scenario = document.getElementById("Mac_one_to_few_scenario");

// Generate and set the iPhone scenario when the page loads
window.addEventListener("DOMContentLoaded", function() {
  const generatedScenario_Mac_one_to_few = Mac_One_to_Few_Scenarios();
  scenarioElement_Mac_one_to_few_scenario.textContent = generatedScenario_Mac_one_to_few;
});




const One_to_few_iPadScenario = [
  `${random_names} inquires about needing an iPad to ${random_iPadUses}. Then ${random_names2} joins the table and brings up wanting to ${random_iPadUses2}. While you're introducing yourself, ${random_names3} joins the conversation and mentions they want to ${random_iPadUses3}. How could you turn this conversation into a One to Few?`,
  `${random_names} asks if an iPad is necessary to ${random_iPadUses}. Shortly after, ${random_names2} joins the discussion and expresses their desire to ${random_iPadUses2}. Just as you begin to introduce yourself, ${random_names3} joins in and shares their aspiration to ${random_iPadUses3}. How can you transition this conversation into a One to Few?`,
  `${random_names} raises a question about the need for an iPad in order to ${random_iPadUses}. As the conversation progresses, ${random_names2} joins the group and mentions their interest to ${random_iPadUses2}. While you introduce yourself, ${random_names3} enters the conversation and expresses their desire to ${random_iPadUses3}. How can you leverage this discussion and turn it into a One to Few?`,
  `${random_names} wonders if having an iPad is necessary to ${random_iPadUses}. Then, ${random_names2} arrives at the table and brings up their intention to ${random_iPadUses2}. Meanwhile, as you introduce yourself, ${random_names3} joins the conversation and mentions their desire to ${random_iPadUses3}. How can you transform this dialogue into a One to Few interaction?`,
  `${random_names} is curious about the need for an iPad to ${random_iPadUses}. At that moment, ${random_names2} joins the group and shares their aspiration to ${random_iPadUses2}. While you introduce yourself, ${random_names3} becomes part of the conversation and expresses their desire to ${random_iPadUses3}. How can you transition this conversation into a One to Few format?`,
  `${random_names} wants to know if an iPad is required to ${random_iPadUses}. Shortly after, ${random_names2} joins the gathering and brings up their desire to ${random_iPadUses2}. While introducing yourself, ${random_names3} joins in and mentions their wish to ${random_iPadUses3}. How can you convert this conversation into a One to Few interaction?`,
  `${random_names} starts a discussion by asking if an iPad is needed to ${random_iPadUses}. Shortly after, ${random_names2} joins the table and brings up their intention to ${random_iPadUses2}. While introducing yourself, ${random_names3} enters the conversation and expresses their desire to ${random_iPadUses3}. How can you turn this conversation into a One to Few exchange?`,
  `${random_names} initiates the conversation with a question about the requirement of an iPad to ${random_iPadUses}. As the discussion unfolds, ${random_names2} joins the group and shares their interest in ${random_iPadUses2}. Meanwhile, while introducing yourself, ${random_names3} joins in and mentions their desire to ${random_iPadUses3}. How can you transform this dialogue into a One to Few conversation?`,
  `${random_names} opens up the conversation by inquiring about the need for an iPad in order to ${random_iPadUses}. Soon after, ${random_names2} joins the conversation and expresses their desire to ${random_iPadUses2}. While introducing yourself, ${random_names3} joins the discussion and mentions their aspiration to ${random_iPadUses3}. How can you leverage this discussion and turn it into a One to Few engagement?`
];

const random_One_to_few_iPadScenario = One_to_few_iPadScenario[Math.floor(Math.random() * One_to_few_iPadScenario.length)];

function iPad_One_to_Few_Scenarios() {
    return random_One_to_few_iPadScenario
}

const scenarioElement_iPad_one_to_few_scenario = document.getElementById("iPad_one_to_few_scenario");

// Generate and set the iPhone scenario when the page loads
window.addEventListener("DOMContentLoaded", function() {
  const generatedScenario_iPad_one_to_few = iPad_One_to_Few_Scenarios();
  scenarioElement_iPad_one_to_few_scenario.textContent = generatedScenario_iPad_one_to_few;
});


const One_to_few_AppleWatchScenarios = [
  `${random_names} inquires about needing an Apple Watch to ${random_Apple_Watch_Uses}. Then ${random_names2} joins the table and brings up wanting to ${random_Apple_Watch_Uses2}. While you're introducing yourself, ${random_names3} joins the conversation and mentions they want to ${random_Apple_Watch_Uses3}. How could you turn this conversation into a One to Few?`,
  `${random_names} asks if an Apple Watch is necessary to ${random_Apple_Watch_Uses}. Shortly after, ${random_names2} joins the discussion and expresses their desire to ${random_Apple_Watch_Uses2}. Just as you begin to introduce yourself, ${random_names3} joins in and shares their aspiration to ${random_Apple_Watch_Uses3}. How can you transition this conversation into a One to Few?`,
  `${random_names} raises a question about the need for an Apple Watch in order to ${random_Apple_Watch_Uses}. As the conversation progresses, ${random_names2} joins the group and mentions their interest in ${random_Apple_Watch_Uses2}. While you introduce yourself, ${random_names3} enters the conversation and expresses their desire to ${random_Apple_Watch_Uses3}. How can you leverage this discussion and turn it into a One to Few?`,
  `${random_names} wonders if having an Apple Watch is necessary to ${random_Apple_Watch_Uses}. Then, ${random_names2} arrives at the table and brings up their intention to ${random_Apple_Watch_Uses2}. Meanwhile, as you introduce yourself, ${random_names3} joins the conversation and mentions their desire to ${random_Apple_Watch_Uses3}. How can you transform this dialogue into a One to Few interaction?`,
  `${random_names} is curious about the need for an Apple Watch to ${random_Apple_Watch_Uses}. At that moment, ${random_names2} joins the group and shares their aspiration to ${random_Apple_Watch_Uses2}. While you introduce yourself, ${random_names3} becomes part of the conversation and expresses their desire to ${random_Apple_Watch_Uses3}. How can you transition this conversation into a One to Few format?`,
  `${random_names} wants to know if an Apple Watch is required to ${random_Apple_Watch_Uses}. Shortly after, ${random_names2} joins the gathering and brings up their desire to ${random_Apple_Watch_Uses2}. While introducing yourself, ${random_names3} joins in and mentions their wish to ${random_Apple_Watch_Uses3}. How can you convert this conversation into a One to Few interaction?`,
  `${random_names} ponders the necessity of owning an Apple Watch to ${random_Apple_Watch_Uses}. Just as the conversation progresses, ${random_names2} joins in and expresses their interest in ${random_Apple_Watch_Uses2}. Meanwhile, while introducing yourself, ${random_names3} joins the discussion and mentions their desire to ${random_Apple_Watch_Uses3}. How can you transform this dialogue into a One to Few conversation?`,
  `${random_names} starts a discussion by asking if an Apple Watch is needed to ${random_Apple_Watch_Uses}. Shortly after, ${random_names2} joins the table and brings up their intention to ${random_Apple_Watch_Uses2}. While introducing yourself, ${random_names3} enters the conversation and expresses their desire to ${random_Apple_Watch_Uses3}. How can you turn this conversation into a One to Few exchange?`,
  `${random_names} initiates the conversation with a question about the requirement of an Apple Watch to ${random_Apple_Watch_Uses}. As the discussion unfolds, ${random_names2} joins the group and shares their interest in ${random_Apple_Watch_Uses2}. Meanwhile, while introducing yourself, ${random_names3} joins in and mentions their desire to ${random_Apple_Watch_Uses3}. How can you transform this dialogue into a One to Few conversation?`,
  `${random_names} opens up the conversation by inquiring about the need for an Apple Watch to ${random_Apple_Watch_Uses}. Soon after, ${random_names2} joins the conversation and expresses their desire to ${random_Apple_Watch_Uses2}. While introducing yourself, ${random_names3} joins the discussion and mentions their aspiration to ${random_Apple_Watch_Uses3}. How can you leverage this discussion and turn it into a One to Few engagement?`
];

const random_One_to_few_AppleWatchScenarios = One_to_few_AppleWatchScenarios[Math.floor(Math.random() * One_to_few_AppleWatchScenarios.length)];


function Apple_Watch_One_to_Few_Scenarios() {
    return random_One_to_few_AppleWatchScenarios
}

const scenarioElement_Apple_Watch_one_to_few_scenario = document.getElementById("Apple_Watch_one_to_few_scenario");

// Generate and set the iPhone scenario when the page loads
window.addEventListener("DOMContentLoaded", function() {
  const generatedScenario_Apple_Watch_one_to_few = Apple_Watch_One_to_Few_Scenarios();
  scenarioElement_Apple_Watch_one_to_few_scenario.textContent = generatedScenario_Apple_Watch_one_to_few;
});

