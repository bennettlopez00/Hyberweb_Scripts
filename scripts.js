// Add the classNames of each element to remove
const classNamesToRemove = [
    "rich-section-single-column"
]
// Iterate over each of the elemnets, remove if they have the classname
for (let i = 0; i < classNamesToRemove.length; i++) { 
    var elements = document.getElementsByClassName(classNamesToRemove[i])
    for (let x = 0; x < elements.length; x++) { 
        elements[x].remove();
    }
}