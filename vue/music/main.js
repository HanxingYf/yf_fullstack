var app = new Vue({
  el: '.music',
  data: {
    query: "",
    musicList: [],
    musicUrl:""
  },
  methods: {
    searchMusic: function () {
      // console.log(this.query);
      var that = this;
      axios.get("https://autumnfish.cn/search?keywords=" + this.query)
        .then(function (res) {
          // console.log(res.data);
          that.musicList = res.data.result.songs
        }, function (err) { })
    },

    playMusic: function (musicId) {
      // console.log(musicId);
      var that = this;
      axios.get('https://autumnfish.cn/song/url?id=' + musicId)
        .then(function(res){
          // console.log(res.data.data[0].url);
          that.musicUrl = res.data.data[0].url
        },function(err){})
    }
  }
})