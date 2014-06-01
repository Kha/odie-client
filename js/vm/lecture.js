var Lecture = function(baseUrl) {
  this.baseUrl = baseUrl
  ko.track(this)
}

Lecture.prototype = Object.create(Array.prototype);

Lecture.prototype.load = function(name) {
  var self = this;
  var urlName = encodeURIComponent(name);
  $.getJSON(this.baseUrl + '/data/lectures/'+urlName+'/documents', function(data) {
    self.splice(0, self.length)
    for (var i=0; i<data.length; i++) {
      self.push(data[i])
    }
  })
}
