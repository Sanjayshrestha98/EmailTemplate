
export const mouseOver = (e, parent) => {
    e.preventDefault();
    e.stopPropagation();

    if (parent) {
        console.log('parent', parent)
        document.getElementById(parent)?.classList.remove('hover:outline');
        document.getElementById(e.target.id)?.classList.add('hover:outline');
        
    } else {
        console.log('else.target.id', e.target.id)
        document.getElementById(e.target.id)?.classList.add('hover:outline')

        // if (!document.getElementById(parent).matches(':hover')) {
        // showoutline(e.target.id); // Add outline to the parent only if mouse is not over the child
        // }
    }
}