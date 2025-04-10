const dropItems = document.getElementById('drop-items');

new Sortable(dropItems, {
    Animation: 350,
    dragClass: "sortable-drag"
});