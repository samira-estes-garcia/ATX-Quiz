//Need an array: objects, first object is a question number, plus question content, all choices, 
const STORE = [
    {
        question: "Which local coffee shop stays open 24/7?",
        answers: ["Halcyon", "Starbucks", "Bennu", "Houndstooth"],
        correctAnswer: 2,
        icon: "https://assets.simpleviewinc.com/simpleview/image/fetch/q_90/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Bennu-MLK-Sign--d7d7720ac4cc8e3_d7d7740e-b1b5-1308-d68267149af19e87.jpg",
        alt: "Image displaying storefront of Bennu coffe shop"
    },
    {
        question: "Which bridge can you visit to see the bats?",
        answers: ["Lamar Bridge", "Congress Ave. Bridge", "360 Bridge", "Pennybacker Bridge"],
        correctAnswer: 1,
        icon: "https://photos.smugmug.com/Low-Resolution/Congress-Avenue-Bridge-Bats/i-vqVZXJV/5/56d40a35/L/MDT_130825_US3_2174-Edit-Edit-L.jpg",
        alt: "Image displaying the Congress Ave. Bridge at sunset with bats flying out from underneath it"
    }
]
// ,
//     {
//         question: "What iconic street borders the University of Texas at Austin?",
//         answers: ["Guadalupe St.", "51st St.", "Congress Ave.", "Cesar Chavez St."],
//         correctAnswer: 0,
//         icon: "https://archinect.imgix.net/uploads/0c/0cjhxiy56mecfl90.jpg?fit=crop&auto=compress%2Cformat&w=650",
//         alt: "Image displaying students crossing Guadalupe St. to get to campus"
//     },
//     {
//         question: "What is the tallest building in ATX?",
//         answers: ["The Fairmont", "Frost Tower", "The Bowie", "The Austonian"],
//         correctAnswer: 3,
//         icon: "https://b386363e680359b5cc19-97ec1140354919029c7985d2568f0e82.ssl.cf1.rackcdn.com/assets/uploads/luxury_buildings/luxury_pic/photo/29082/optimized_3656213ef7c50fd6b3ad5d60092db4fc.jpg",
//         alt: "Image displaying the Austonian"
//     },
//     {
//         question: "Which local shop is known for selling costumes?",
//         answers: ["Party City", "Lucy in Disguise with Diamonds", "Cathedral of Junk", "Austin Art Garage"],
//         correctAnswer: 1,
//         icon: "https://res.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,h_630,w_1200/v1476832317/venue-391226.jpg",
//         alt: "Image displaying storefront of Lucy in Disguise with Diamonds"
//     },
//     {
//         question: "Which of the following bars is located on West 6th St.?",
//         answers: ["Maggie Mae's", "Whisler's", "Shangri-La", "Violet Crown Social Club"],
//         correctAnswer: 0,
//         icon: "https://i.imgur.com/n4gxPnA.png",
//         alt: "Image displaying the front of Maggie Mae's at night"
//     },
//     {
//         question: "What is the mascot of the University of Texas?",
//         answers: ["Bears", "Roadrunners", "Raiders", "Longhorns"],
//         correctAnswer: 3,
//         icon: "https://snarkburbs.files.wordpress.com/2017/12/f63530eee9e5ca65d2ad3ca66e1ad661.jpg",
//         alt: "Image displaying a burnt orange and white logo with a longhorn"
//     },
//     {
//         question: "What is the name of the famous yearly music festival that is usually held in the Fall?",
//         answers: ["SXSW", "Austin City Limits (ACL)", "F1", "Waterloo Music Festival"],
//         correctAnswer: 1,
//         icon: "https://cdn.vox-cdn.com/thumbor/L-hW1itF_ylCqcgEGE3tB0h3hK0=/0x0:4000x2670/1200x675/filters:focal(1680x1015:2320x1655)/cdn.vox-cdn.com/uploads/chorus_image/image/61638003/Marketing_Beauty_by_Katrina_Barber_16807.0.0.0.0.jpg",
//         alt: "Image displaying a crowd of people in a park with the ACL logo"
//     },
//     {
//         question: "What river cuts through downtown Austin?",
//         answers: ["Rio Grande River", "Guadalupe River", "Colorado River", "San Antonio River"],
//         correctAnswer: 2,
//         icon: "https://i.imgur.com/RpRjg0X.png",
//         alt: "Image displaying the Colorado River and the Austin skyline"
//     },
//     {
//         question: "Where can LGBTQ+ and other similarly identified folks go to party downtown?",
//         answers: ["West 6th", "The Warehouse District", "Rainey St.", "East 6th"],
//         correctAnswer: 1,
//         icon: "https://i.imgur.com/oegbjhI.png",
//         alt: "Image displaying Queer bars in the Warehouse District"
//     }
// ];