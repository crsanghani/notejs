(function(exports) {

  function NoteListView(notelist) {
    this.notelist = notelist;
    this.converted = [];
  }

  NoteListView.prototype.convertToHtml = function (notelist) {
    if (this.notelist.notes.length > 0){
      this._isNoteLongerThan20Chars();
    } else if (this.notelist.notes.length === 0){
      return "You have no notes to convert."
    }
  };

  NoteListView.prototype._isNoteLongerThan20Chars = function () {
    for (var i = 0; i < this.notelist.noteStrings.length; i++){
      if (this.notelist.noteStrings[i].length > 20){
        var html = "<ul><li><div><a href='#notes/" + this.notelist.notes[i].id + "'>" + this.notelist.noteStrings[i].slice(0,20) + "..." + "</a></div></li></ul>";
        this.converted.push(html);
      } else {
        var html = "<ul><li><div><a href='#notes/" + this.notelist.notes[i].id + "'>" + this.notelist.noteStrings[i] + "</a></div></li></ul>";
        this.converted.push(html);
      }
    };
  };

  exports.NoteListView = NoteListView;
})(this);
