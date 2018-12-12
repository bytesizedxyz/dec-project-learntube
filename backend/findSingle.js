const a = require('./db/dummyData/users');
const b = require('./db/dummyData/videos');

const data = {};
const arr = [];
console.log(a.length, b.length)
for(let i = 0; i < a.length; i++) {
  if(!(data[b[i].uuid])){
    data[a[i].uuid] = [];
  }
  b.forEach(e => {
    if(e.user_uuid === a[i].uuid){
      data[a[i].uuid].push(e)
    }
  })
}

// for (let key in data){
//   if (data[key].length === 0){
//     console.log(key)
//   }
// }

// let counter = 0;
// a.forEach(e => {
//   a.forEach(l => {
//     e.playlist_uuid === l.playlist_uuid && e.video_uuid === l.uuid? counter++ : null;
//     console.log(e.playlist_uuid === l.playlist_uuid && e.video_uuid === l.uuid)
//     if(counter > 1){
//       arr.push(e);
//       counter = 0;
//     }
//   })
// });

// console.log("ARR", arr);



// a.forEach(e => {
//   let format = 
// })

