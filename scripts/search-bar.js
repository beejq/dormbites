function showBox(id){
    const section = document.getElementById(id);
    section.classList.toggle('active');
}

function collapseFilter(id) {
    const section = document.getElementById(id);
    section.classList.toggle('active');
}