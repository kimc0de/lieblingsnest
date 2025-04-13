/**
 * Apply active style to navigation link
 */
function applyActiveStyle () {
    const path = window.location.pathname;

    const header = $('#header');
    const links = header.find('a.nav-link');
    const dropdownLinks = header.find('a.dropdown-item');
    const dropdownMenu = header.find('.nav-link.dropdown-toggle');

    // Remove active class from all links
    links.removeClass('active');
    dropdownLinks.removeClass('active');

    // Add active class to current link
    links.each(function () {
        const link = $(this);
        const href = link.attr('href');
        if (path === href) {
            link.addClass('active');
        }
    });

    dropdownLinks.each(function () {
        const link = $(this);
        const href = link.attr('href');
        if (path === href) {
            link.addClass('active');
            dropdownMenu.addClass('active');
        }
    });
}

$(document).ready(applyActiveStyle);
$(window).resize(applyActiveStyle);
