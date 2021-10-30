exports.handler = async (event) => {
  // TODO implement
  const stuff = {
    lessonImageData: [
      { lesson: "1. Stateroom", image: "AZ_139-2021_Stateroom.png" },
      {
        lesson: "2. Stateroom & Wardrobe",
        image: "AZ_140-2021_Wardrobe.png",
      },
      { lesson: "3. The Galley", image: "AZ_141-2021_Galley.png" },
      { lesson: "4. Breakfast", image: "AZ_142-2021_Breakfast.png" },
      { lesson: "5. The Bridge", image: "AZ_143-2021_The_Bridge.png" },
      { lesson: "6. Engineering", image: "AZ_144-2021_Engineering.png" },
      { lesson: "7. The Rec Room", image: "AZ_145-2021_Rec_Room.png" },
      { lesson: "8. Pirate Ship", image: "AZ_146-2021_Pirate_Ship.png" },
      { lesson: "9. Spaceport", image: "AZ_147-2021_Spaceport.png" },
      { lesson: "10. Countryside", image: "AZ_148-2021_The_Countryside.png" },
      { lesson: "11. Marketplace", image: "AZ_151-2021_The_Market.png" },
      { lesson: "12. The Clothier", image: "AZ_153-2021_Clothing_Shop.png" },
      { lesson: "13. The Park", image: "AZ_154-2021_In_The_Park.png" },
      { lesson: "14. The Disco", image: "AZ_157-2021_Clubbing.png" },
      {
        lesson: "15. The Body Parts",
        image: "AZ_160-2021_The_Body_(Me).png",
      },
      { lesson: "16. Colors", image: "AZ_162-2021_Numbers.png" },
      { lesson: "17. Numbers", image: "AZ_161-2021_Numbers.png" },
      { lesson: "18. Seasons", image: "AZ_164-2021_The_Seasons.png" },
    ],
  };
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(stuff),
    isBase64Encoded: false,
  };
  return response;
};
