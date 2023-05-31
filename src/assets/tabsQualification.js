/* const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

const activateTab = (tab) => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
        tabContent.classList.remove('qualification__active');
    });

    target.classList.add('qualification__active');

    tabs.forEach((tab) => {
        tab.classList.remove('qualification__active');
    });

    tab.classList.add('qualification__active');
};

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        activateTab(tab);
    });
});

export default activateTab; */

const activateTab = () => {
    const tabs = document.querySelectorAll('[data-target]');
    const tabContents = document.querySelectorAll('[data-content]');

    const handleClick = (tab) => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('qualification__active');
        });

        target.classList.add('qualification__active');

        tabs.forEach((tab) => {
            tab.classList.remove('qualification__active');
        });

        tab.classList.add('qualification__active');
    };

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            handleClick(tab);
        });
    });
};

export default activateTab;

