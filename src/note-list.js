(function(exports) {
  function NoteList() {
    this.notes = [];
    this.noteStrings = [];
  }

NoteList.prototype.addNote = function (note) {
  this.notes.push(note)
};

NoteList.prototype.showNotes = function () {
  for (var i = 0; i < this.notes.length; i++){
    return this.notes[i].string;
  }
};

NoteList.prototype.convertToString = function () {
  for (var i = 0; i < this.notes.length; i++){
    var item = this.notes[i].string;
    this.noteStrings.push(item);
  }
};

NoteList.prototype.findNoteById = function(id) {
    for (var i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === id) {
        return this.notes[i]
      }
    }
  }

  exports.NoteList = NoteList;
 })(this);
