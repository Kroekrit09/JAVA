let furniture = ['Table', 'Chairs', 'Couch'];

furniture.forEach(item => {
    console.log(`${item}`);
    item.split('').forEach(letter => console.log(letter));
});
