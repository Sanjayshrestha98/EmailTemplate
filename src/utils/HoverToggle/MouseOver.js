
export const mouseOver = (e, parent) => {
    // e.preventDefault();
    // e.stopPropagation();

    if (parent) {
        document.getElementById(parent)?.classList.remove('hover:outline');
        document.getElementById(parent)?.classList.remove("group/row");
        document.getElementById(e.target.id)?.classList.add('hover:outline');

    } else {
        document.getElementById(e.target.id)?.classList.add('hover:outline')
        document.getElementById(e.target.id)?.classList.add("group/row")

        // if (!document.getElementById(parent).matches(':hover')) {
        // showoutline(e.target.id); // Add outline to the parent only if mouse is not over the child
        // }
    }
}