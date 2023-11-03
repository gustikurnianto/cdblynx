function killCopy(e) {
    return false;
}

function reEnable() {
    return true;
}

document.onselectstart = function() {
    return false;
};

if (window.sidebar) {
    document.onmousedown = killCopy;
    document.onclick = reEnable;
}
