function disableBody() {
    let body = document.querySelector('body');

    if (body.classList.contains('disable__body')) {
        body.classList.remove('disable__body');
    } else {
        body.classList.add('disable__body');
    }
}