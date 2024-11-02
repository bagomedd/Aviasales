export function showTopMenu() {
    let scrollMenu;
    window.addEventListener("load", () => {

        scrollMenu = document.getElementById("top-ui-scroll-menu-id");
        if (!scrollMenu) {
            alert("THERE IS NO TOP SCROLLL!!!!!!!");
        }
    });
    window.onscroll = () => {
        let scrollpos = window.scrollY;
        if (scrollpos > 230) {
            scrollMenu!.style.top = "0px";

        } else {
            scrollMenu!.style.top = "-50px";
        }
    };
}

export function swipeCarouselRight(carouselElementsId: string) {
    let itemWidth = 187;
    let carousel; let childrenCount;
    carousel = document.getElementById(carouselElementsId);
    childrenCount = carousel?.children.length;

    if (!carousel) {
        alert("carousel is null");
    }
    let readStyle = getComputedStyle(carousel!);
    let defaultTransition = readStyle.transition;
    if ((parseInt(readStyle.marginLeft) + itemWidth) > (childrenCount! - 7) * (-itemWidth))
        carousel!.style.marginLeft = (parseInt(readStyle.marginLeft) - itemWidth) + "px";
    else {
        carousel!.style.marginLeft = ((childrenCount! - 7) * (-itemWidth) - 2 * itemWidth) + "px";
        setTimeout(() => {
            requestAnimationFrame(() => {
                carousel!.style.transition = "none"; // Отключаем анимацию
                carousel!.style.marginLeft = -2 * itemWidth + "px"; // Быстро возвращаем в начало

                // Снова используем requestAnimationFrame для восстановления transition
                requestAnimationFrame(() => {
                    carousel!.style.transition = defaultTransition; // Включаем анимацию снова
                });
            });
        }, 200);
    }
}


export function swipeCarouselLeft(carouselElementsId: string) {
    // -187, 8 * 187 + 187

    let itemWidth = 187;
    let carousel; let childrenCount;
    carousel = document.getElementById(carouselElementsId);
    childrenCount = carousel?.children.length;

    if (!carousel) {
        alert("carousel is null");
    }
    let readStyle = getComputedStyle(carousel!);
    let defaultTransition = readStyle.transition;
    if ((parseInt(readStyle.marginLeft)) <= -3 * itemWidth)
        carousel!.style.marginLeft = (parseInt(readStyle.marginLeft) + itemWidth) + "px";
    else {
        carousel!.style.marginLeft = -itemWidth + "px";
        setTimeout(() => {
            requestAnimationFrame(() => {
                carousel!.style.transition = "none"; // Отключаем анимацию
                carousel!.style.marginLeft = ((childrenCount! - 7) * (-itemWidth) - itemWidth) + "px"; // Быстро возвращаем в начало

                // Снова используем requestAnimationFrame для восстановления transition
                requestAnimationFrame(() => {
                    carousel!.style.transition = defaultTransition; // Включаем анимацию снова
                });
            });
        }, 200);
    }
}