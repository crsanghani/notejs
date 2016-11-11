describe('NoteListView', function() {

    it('should iterate through a list and convert each notes string to html', function() {
        var note = new Note("I like cheese because it makes me feel like a mouse")
        var note2 = new Note("Cake is good too")
        var notelist = new NoteList();
        notelist.addNote(note);
        notelist.addNote(note2);
        notelist.convertToString();
        var notelistview = new NoteListView(notelist);
        notelistview.convertToHtml(notelist);
        expect(notelistview.converted[0]).toEqual("<ul><li><div><a href='#notes/4'>I like cheese becaus...</a></div></li></ul>");
        expect(notelistview.converted[1]).toEqual("<ul><li><div><a href='#notes/5'>Cake is good too</a></div></li></ul>");
    });


    it('should be able to handle no notes', function() {
        var notelist = new NoteList();
        var notelistview = new NoteListView(notelist);
        expect(notelistview.convertToHtml()).toEqual("You have no notes to convert.");
    });

})
