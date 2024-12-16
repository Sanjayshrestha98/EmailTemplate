export const mouseLeave = (e, parent) => {
    // e.preventDefault();
    // e.stopPropagation();

    if (parent) {
        document.getElementById(e.target.id)?.classList.remove('hover:outline');
        if (!document.getElementById(parent)?.matches(':hover')) {
            document.getElementById(parent)?.classList.add('hover:outline');
            document.getElementById(parent)?.classList.add("group/row");
        }

    } else {
        document.getElementById(e.target.id)?.classList?.remove('hover:outline');

    }


    // Only remove outline from the parent if the mouse is not over the child
    // if (!document.getElementById(e.target.id).matches(':hover')) {
    // }
}   