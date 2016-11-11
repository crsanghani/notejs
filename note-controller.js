(function(exports) {

  function NoteController(notelist){
    this.notelist = notelist;
    this.notelistview = new NoteListView(this.notelist);
  }

  NoteController.prototype.changeText = function () {
    appDiv = document.getElementById("app")
    this._conversion()
    for(var i = 0; i < notelist.notes.length; i++){
      appDiv.innerHTML += notelistview.converted[i];
    }
  };

  NoteController.prototype._conversion = function () {
    notelist.convertToString()
    notelistview.convertToHtml(notelist);
  };

  changeNote();

  function changeNote() {
    window.addEventListener("hashchange", showNoteOnPage);
  };

  function showNoteOnPage() {
    showNote(getNoteIdFromUrl(window.location));
  };

  function getNoteIdFromUrl(location) {
     return location.hash.split("#notes/")[1];
   };

   function showNote(note_id) {
     var note = this.notelist.findNoteById(parseInt(note_id));
     var singleNoteView = new SingleNoteView(note);
     document.getElementById("note").innerHTML = singleNoteView.convertToHtml();
   }


  exports.NoteController = NoteController;
})(this);
