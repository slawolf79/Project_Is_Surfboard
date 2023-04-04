const openItem = item => {
  const container = item.closest(".teams__item");
  const contentBlock = container.find(".teams__content");
  const textBlock = contentBlock.find(".teams__content-block")
  const reqHeight = textBlock.height()

  container.addClass("active")
  contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
  const items = container.find(".teams__content");
  const itemContainer = container.find(".teams__item");

  itemContainer.removeClass("active");
  items.height(0);
}

$(".teams__title").click (e => {
  const $this = $(e.currentTarget);
  const container = $this.closest(".teams");
  const elemContainer = $this.closest(".teams__item")

  if (elemContainer.hasClass("active")) {
    closeEveryItem(container)
  } else {
    closeEveryItem(container)
    openItem($this)
  }
})