const poi = {
  lng: "1",
  lat: "2",
  link_id: "",
  link_side: "",
  link_start_lng: "",
  link_start_lat: "",
  link_end_lng: "",
  link_end_lat: "",
  tip_color: "04",
  valid_period: [{ start: "00:00:00", end: "23:59:59" }],
  cn: {
    name: "",
    addr: "",
    start_bottom_side_desc: "",
    walk_guide_text: "",
    im_text: "",
    eta: "",
    walk_guide_link: "",
    walk_guide_photo: "",
    arrow: "",
    right_icon: "",
    guide_back_img: "",
    driver_pickup_hint: "",
    driver_complex_inter_sections: {
      start_lng: "",
      start_lat: "",
      end_lng: "",
      end_lat: "",
      hint: "",
      valid_distance: "",
      pic_url: "",
    },
    driver_nearby_hint: "",
  },
  en: {
    name: "",
    addr: "",
    start_bottom_side_desc: "",
    walk_guide_text: "",
    im_text: "",
    eta: "",
    walk_guide_link: "",
    walk_guide_photo: "",
    arrow: "",
    right_icon: "",
    guide_back_img: "",
    driver_pickup_hint: "",
    driver_complex_inter_sections: {
      start_lng: "",
      start_lat: "",
      end_lng: "",
      end_lat: "",
      hint: "",
      valid_distance: "",
      pic_url: "",
    },
    driver_nearby_hint: "",
  },
  local: {
    name: "a",
    addr: "3",
    start_bottom_side_desc: "4",
    walk_guide_text: "",
    im_text: "",
    eta: "",
    walk_guide_link: "",
    walk_guide_photo: "",
    arrow: "",
    right_icon: "",
    guide_back_img: "",
    driver_pickup_hint: "",
    driver_complex_inter_sections: {
      start_lng: "",
      start_lat: "",
      end_lng: "",
      end_lat: "",
      hint: "",
      valid_distance: "",
      pic_url: "",
    },
    driver_nearby_hint: "",
  },
};
let a = '3'
const {lng = a} = poi
console.log(poi.lng);
// Object.keys(poi).forEach(p => {
//     // console.log(p);
//     if(p === 'local' || p === 'cn' || p === 'en'){
//         Object.keys(p).forEach(item => {
//             // if()
//         })
//     }
// })
