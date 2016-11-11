describe('Note', function() {

    it('can set a text on initialization', function() {
        var text = "My Favourite language is JavaScript";
        var note = new Note(text);
        expect(note.text()).toEqual(text);
    });

    it('has an id', function() {
        var note = new Note("This is less retarderd");
        var note1 = new Note("This is even less retarderd");
        expect(note.id).toEqual(1)
        expect(note1.id).toEqual(2)
    });

})
