$(function() {
    describe('RSS Feeds', function() {

        //checks that allFeeds variable has been defined and is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //loops through each feed in the allFeeds object and checks it has a URL defined and URL is not empty.
        it('has URLs', function() {
            for (i in allFeeds) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        //loops through each feed in the allFeeds object and checks that it has a name defined and the name is not empty.
        it('has names', function() {
            for (i in allFeeds) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {

        // checks that menu element is hidden by default
        it('is by default hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        //checks that menu appears or disappears when clicked
        it('changes visibility when clicked', function() {
            $(".menu-icon-link").click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $(".menu-icon-link").click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        //checks that there are entries
        it('has entries', function() {
            var entry = $('.feed .entry');
            expect(loadFeed).toBeDefined();
            expect(entry.length).not.toBe(0);
        });
    });

    describe('New Feed Selection', function() {
        var initialFeed;
        var newFeed;

        //checks that when new feed is loaded by the loadFeed function that content changes.
        beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(0, function() {
                initialFeed = $('.feed').text();
                loadFeed(1, function() {
                  newFeed = $('.feed').text();
                  done();
                });
            });
        });

        it('updates new content', function() {
            expect(loadFeed).toBeDefined();
            expect(newFeed).not.toEqual(initialFeed);
        });
    });

}());
