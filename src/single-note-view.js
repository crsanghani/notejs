(function(exports){

  function SingleNoteView(note){
    this.string = note.string;
    this.converted = this.convertToHtml(note);
  }


  SingleNoteView.prototype.convertToHtml = function () {
    var html = "<div> " + this.string + " </div>"
    return html
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
