// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('removeSong',this.remove,this);
    this.on('ended', this.ended, this);
    this.on('add remove', this.updateStorageQueue,this);
  },

  playFirst: function() {
    this.at(0).play();
  },

  enqueue: function(song) {
    this.add(song.clone());

    this.playFirst();
  },

  ended: function() {
    this.shift();
    if (this.length > 0) {
      this.playFirst();
    }
  },

  updateStorageQueue: function() {
    localStorage.setItem('queue', JSON.stringify(this.models));
  }

});
