function moblieMenu() {
    if (document.getElementsByClassName('block-header__links')[0].classList.contains("block-header__links--open")) {
        document.getElementsByClassName('block-header__links')[0].classList.remove("block-header__links--open");
        document.getElementsByClassName('block-header__burger')[0].classList.remove("burger--open");
    } else {
        document.getElementsByClassName('block-header__links')[0].classList.add("block-header__links--open");
        document.getElementsByClassName('block-header__burger')[0].classList.add("burger--open");
    }
}