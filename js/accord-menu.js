
 const mesureWidth = item => {
  let reqItemWidth = 0

  const screenWidth = $(window).width();
  const container = item.closest("#verticalMenu");
  const titlesBlocks = container.find(".accord-menu__button");
  const titleWidth = titlesBlocks.width() * titlesBlocks.length;

  const textContainer = item.find(".accord-menu__container");
  const paddingLeft = parseInt(textContainer.css("padding-left"));
  const paddingRight = parseInt(textContainer.css("padding-right"));


  const isTablet = window.matchMedia("(max-width: 768px)").matches;
  const isPhone = window.matchMedia("(max-width: 480px)").matches;

  if (isTablet) {
    reqItemWidth = screenWidth - titleWidth;
  } else {
    reqItemWidth = 500;
  }

  if (isPhone) {
    reqItemWidth = screenWidth ;
  }


  return {
    container: reqItemWidth,
    textContainer: reqItemWidth - paddingRight - paddingLeft
  }
}

const openMenu = item => {
  const hiddenContent = item.find(".accord-menu__content");
  const reqWidth = mesureWidth(item);
  const textBlock =item.find(".accord-menu__container");
  textBlock.width(reqWidth.textContainer);

  item.addClass("active");
  hiddenContent.width(reqWidth.container);
}

const closeEveryItemMenu = container => {
  const items = container.find(".accord-menu__content");
  const itemContainer = container.find(".accord-menu__item");

  itemContainer.removeClass("active");
  items.width(0);
}


$(".accord-menu__button").on("click", e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const item = $this.closest(".accord-menu__item");
  const itemOpen = item.hasClass("active");
  const container = $this.closest(".accord-menu__list")

  if (itemOpen) {
    closeEveryItemMenu(container)
  } else {
    closeEveryItemMenu(container)
    openMenu(item)
  }
})

$(".accord-menu__close"),$(".accord-menu__content").on("click", e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const item = $this.closest(".accord-menu__item");
  const itemOpen = item.hasClass("active");
  const container = $this.closest(".accord-menu__list")

  if (itemOpen) {
    closeEveryItemMenu(container)
  } else {
    closeEveryItemMenu(container)
    openMenu(item)
  }
})
