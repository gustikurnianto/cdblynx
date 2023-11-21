$("#okgmaps").on("click", function() {
    var z = document.getElementById("usergmaps").value; 
    document.querySelector("#buttonzgmaps").href = z;
    $('#okgmaps').hide(); 
    $('#loadinggmaps').show();
    setTimeout(function(){
        $('#loadinggmaps').hide();
    }, 2000);
    setTimeout(function(){
        $('#okgmaps').show();
    }, 2000);
});