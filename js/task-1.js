const categoriesList = document.querySelector('.categories');
const categoriesItem = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach((category) => {
    const categoryTitle = category.querySelector('.title').textContent;
    const categoryItems = category.querySelectorAll('.title-item');
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItems.length}`)
})




