// turns images in portfolio into link buttons
$(document).on("click", ".image_container", function(projects) {
    projects.preventDefault();
    var href = $(this).attr("href");
    window.open(href);
    return false;
})