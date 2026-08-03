$('.link').hover(
    function () {
        let img = $(this).children(".front").first().children('img').first();
        img.attr('src', getCardImage(img.data('id'), 1));
    },
    function () {
        let img = $(this).children(".front").first().children('img').first();
        img.attr('src', getCardImage(img.data('id'), 0));
    }
);
$(document).ready(function () {
    // Only flip on desktop. Below 800px the cards are a plain tappable grid
    // (see main.css) - initialising flip there would make one tap both flip the
    // card and open the vote site, and the plugin's wrapper fights the grid.
    if (window.matchMedia('(min-width: 801px)').matches) {
        $(".link").flip({
            trigger: 'click'
        });
    }
    $(".link").click(function (e) {
        e.preventDefault();
        const url = $(this).data('url');
        window.open(url, '_blank').focus();
    })
});


function getCardImage($id, $state) {
    if ($state === 0)
        return './assets/media/cards/front_' + $id + '.webp';
    if ($state === 1)
        return './assets/media/cards/front_' + $id + '_G.webp';
}

