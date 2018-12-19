const goodUserInfo = {
  username: "Lesley_McLaughlin5",
  email: "Camilla_Homenick61@hotmail.com",
  password: "Fwn67v3hRQVq4EP",
  uuid: "7ec1c457-3b54-448a-9185-c161edcf43db"
};
const badUserInfo = {
  username: "Lesley_McLaughlin5",
  email: "Camilla_Homenick61@hotmail.com",
  password: "Fwn67v3hRQVq4EP",
  uuid: "7ec1c457-3b54-448a-95-c161edcf43db"
};
const playlistInfo = [
  {
    uuid: "19c74a16-d208-45b5-a243-9d4a171e0778",
    title: "Dynamic Factors Manager",
    user_uuid: "7ec1c457-3b54-448a-9185-c161edcf43db"
  },
  {
    uuid: "4d273796-62da-4a05-a678-c556a124b632",
    title: "Lead Infrastructure Producer",
    user_uuid: "7ec1c457-3b54-448a-9185-c161edcf43db"
  }
];
const badPlaylistInfo = {
  uuid: "19c74a16-d208-45b5-a243-9d4a1e0778",
  title: "Dynamic Factors Manager",
  user_uuid: "7ec1c457-3b54-448a-9185-c161edcf43db"
};
const playlistVideos = [
  {
    playlist_title: "Dynamic Factors Manager",
    playlist_order: 11,
    playlist_creator: "Lesley_McLaughlin5",
    url: "https://youtu.be/R4KkBxv0VpY",
    watch_count: 0,
    posted_by: "Lesley_McLaughlin5",
    video_title: "Rachel Platten - Stand By You (Audio)"
  },
  {
    playlist_title: "Dynamic Factors Manager",
    playlist_order: 20,
    playlist_creator: "Lesley_McLaughlin5",
    url: "https://youtu.be/5fOVXndyjAo",
    watch_count: 0,
    posted_by: "Kailyn.Padberg25",
    video_title: "Raw Run: Zak Maytum"
  },
  {
    playlist_title: "Dynamic Factors Manager",
    playlist_order: 10,
    playlist_creator: "Lesley_McLaughlin5",
    url: "https://youtu.be/d54PyNN1EdU",
    watch_count: 0,
    posted_by: "Kailyn.Padberg25",
    video_title: "Spider bursts out of a Banana"
  },
  {
    playlist_title: "Dynamic Factors Manager",
    playlist_order: 9,
    playlist_creator: "Lesley_McLaughlin5",
    url: "https://youtu.be/TivqZTq5u6Y",
    watch_count: 0,
    posted_by: "Grant_Wiza",
    video_title: "The official full length TV launch trailer - Doctor Who Series 8 2014 - BBC One"
  },
  {
    playlist_title: "Dynamic Factors Manager",
    playlist_order: 8,
    playlist_creator: "Lesley_McLaughlin5",
    url: "https://youtu.be/zHGMZbtdmko",
    watch_count: 0,
    posted_by: "Tyrique.Bernhard62",
    video_title: "Best Father/Daughter Dance Ever!"
  },
  {
    playlist_title: "Dynamic Factors Manager",
    playlist_order: 22,
    playlist_creator: "Lesley_McLaughlin5",
    url: "https://youtu.be/c3F0ZY2VzKc",
    watch_count: 0,
    posted_by: "Vernie_Murazik72",
    video_title: "Orangutan Kisses Pregnant Woman's Belly - Colchester Zoo"
  },
  {
    playlist_title: "Dynamic Factors Manager",
    playlist_order: 17,
    playlist_creator: "Lesley_McLaughlin5",
    url: "https://youtu.be/IQTqfk-HmPk",
    watch_count: 0,
    posted_by: "Vernie_Murazik72",
    video_title: "Watch One Girl Design Her Perfect Guy, And Then Meet Him"
  },
  {
    playlist_title: "Dynamic Factors Manager",
    playlist_order: 13,
    playlist_creator: "Lesley_McLaughlin5",
    url: "https://youtu.be/mlD8A6e0nXI",
    watch_count: 0,
    posted_by: "Vernie_Murazik72",
    video_title: "Prince of Egypt Medley - Peter Hollens"
  },
  {
    playlist_title: "Dynamic Factors Manager",
    playlist_order: 23,
    playlist_creator: "Lesley_McLaughlin5",
    url: "https://youtu.be/nW5PDQb5VW0",
    watch_count: 0,
    posted_by: "Brisa11",
    video_title: "Am I A Narcissist?"
  },
  {
    playlist_title: "Dynamic Factors Manager",
    playlist_order: 19,
    playlist_creator: "Lesley_McLaughlin5",
    url: "https://youtu.be/-ncIVUXZla8",
    watch_count: 0,
    posted_by: "Brisa11",
    video_title: "Avicii - Waiting For Love (Lyric Video)"
  },
  {
    playlist_title: "Dynamic Factors Manager",
    playlist_order: 14,
    playlist_creator: "Lesley_McLaughlin5",
    url: "https://youtu.be/U_pU9YDqQzk",
    watch_count: 0,
    posted_by: "Brisa11",
    video_title: "Exit of the final 9/11 search and rescue dog (Cy Fair, TX Fire Department)."
  },
  {
    playlist_title: "Dynamic Factors Manager",
    playlist_order: 12,
    playlist_creator: "Lesley_McLaughlin5",
    url: "https://youtu.be/aaFZsc6Kgxo",
    watch_count: 0,
    posted_by: "Brisa11",
    video_title: "It's Miller Time"
  },
  {
    playlist_title: "Dynamic Factors Manager",
    playlist_order: 21,
    playlist_creator: "Lesley_McLaughlin5",
    url: "https://youtu.be/nckRlLlyfec",
    watch_count: 0,
    posted_by: "Orrin.Schaefer36",
    video_title: "Ahmed Mohamed talks about being arrested at Irving school over clock"
  },
  {
    playlist_title: "Dynamic Factors Manager",
    playlist_order: 18,
    playlist_creator: "Lesley_McLaughlin5",
    url: "https://youtu.be/G7WGIH35JBE",
    watch_count: 0,
    posted_by: "Orrin.Schaefer36",
    video_title: "Transient orca punts a seal 80 feet into the air near Victoria, BC!"
  },
  {
    playlist_title: "Dynamic Factors Manager",
    playlist_order: 15,
    playlist_creator: "Lesley_McLaughlin5",
    url: "https://youtu.be/0CYVGN98ZLA",
    watch_count: 0,
    posted_by: "Orrin.Schaefer36",
    video_title: "Absolutely Anything - Official Trailer - In Cinemas August 14"
  },
  {
    playlist_title: "Dynamic Factors Manager",
    playlist_order: 16,
    playlist_creator: "Lesley_McLaughlin5",
    url: "https://youtu.be/kw8VCDx399I",
    watch_count: 0,
    posted_by: "Scotty61",
    video_title: "WISH I WAS HERE - Official Teaser Trailer - In Theaters July 2014"
  }
];

module.exports = {
  playlistInfo,
  badPlaylistInfo,
  playlistVideos,
  badUserInfo,
  goodUserInfo
};
