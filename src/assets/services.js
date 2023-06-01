const setupModal = () => {
    const modalViews = document.querySelectorAll('.services__modal');
    const modalBtns = document.querySelectorAll('.services__button');
    const modalCloses = document.querySelectorAll('.services__modal-close');

    const openModal = (modalClick) => {
        modalViews[modalClick].classList.add('active-modal');
    };

    const closeModal = () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    };

    modalBtns.forEach((modalBtn, i) => {
        modalBtn.addEventListener('click', () => {
            openModal(i);
        });
    });

    modalCloses.forEach((modalClose) => {
        modalClose.addEventListener('click', closeModal);
    });
};

export default setupModal;