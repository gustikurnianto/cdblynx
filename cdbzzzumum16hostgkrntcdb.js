$('#jawabanfotokeluhanz').click(function(){
    $('#jawabanfotokeluhan').trigger('click');
});

$(document).on('input change click', '.harusisi', function(e){
    let Disabled = true;
        $(".harusisi").each(function() {
        let value = this.value
        if ((value)&&(value.trim() !=''))
            {
                Disabled = false
            }else{
                Disabled = true
                return false
            }
        });

    if(Disabled){
        $('.isiform').show();
        $('.yakinform').hide();
        $('.yakinform').css('visibility','hidden');
        $('.yakinform').css('opacity','0');
        $('.kirimform').hide();
        $('.kirimform').css('visibility','hidden');
        $('.kirimform').css('opacity','0');
        $('.yakinform').prop("disabled", true);
        $('.kirimform').prop("disabled", true);
    }else{
        $('.isiform').hide();
        $('.yakinform').show();
        $('.yakinform').css('visibility','visible');
        $('.yakinform').css('opacity','1');
        $('.yakinform').prop("disabled", false);
        $('.kirimform').prop("disabled", false);
        $('.yakinform').each(function(){
            var disablecdbcheckbox = document.querySelector('.disablecdbcheckbox');
            var disablewacheckbox = document.querySelector('.disablewacheckbox');
            if(disablecdbcheckbox.checked == true){
                $('.yakinform').css('cursor', 'pointer');
                $('.yakinform').click(function(){
                    $('.yakinform').hide();
                    $('.yakinform').css('visibility','hidden');
                    $('.yakinform').css('opacity','0');
                    $('.kirimform').show();
                    $('.kirimform').css('visibility','visible');
                    $('.kirimform').css('opacity','1');
                });
            } 
            if(disablewacheckbox.checked == true){
                $('.yakinform').css('cursor', 'pointer');
                $('.yakinform').click(function(){
                    $('.yakinform').hide();
                    $('.yakinform').css('visibility','hidden');
                    $('.yakinform').css('opacity','0');
                    $('.kirimform').show();
                    $('.kirimform').css('visibility','visible');
                    $('.kirimform').css('opacity','1');
                });
            } 
        });
    }
});

$(document).on('input change click', '.harusisidokter', function(e){
    let Dokter = true;
        $(".harusisidokter").each(function() {
        let value = this.value
        if ((value)&&(value.trim() !=''))
            {
                Dokter = false
            }else{
                Dokter = true
                return false
            }
        });

    if(Dokter){
        $('#applyDentists').css('background-color', 'rgb(212, 212, 212)');
        $('#applyDentists').css('cursor', 'none');
        $('#applyDentists').prop('disabled', true);
    }else{
        $('#applyDentists').css('background-color', 'rgba(30, 163, 245, 0.913)');
        $('#applyDentists').css('cursor', 'pointer');
        $('#applyDentists').prop('disabled', false);
    }
});

$('#applyDentists').click(function(){
    $('#applyDentists').hide();
    $('.loadingDentist').show();
    $('#uploadfotodentist').trigger('click');
});

$(document).on('input change click', '#fotoscalingz, #namascaling, #pendscaling', function(e){
    let scaling = true;
        $('#fotoscalingz, #namascaling, #pendscaling').each(function() {
        let value = this.value
        if ((value)&&(value.trim() !=''))
            {
                scaling = false
            }else{
                scaling = true
                return false
            }
        });

    if(scaling){
        $('#applyscalings').css('background-color', 'rgb(212, 212, 212)');
        $('#applyscalings').css('cursor', 'none');
        $('#applyscalings').prop('disabled', true);
    }else{
        $('#applyscalings').css('background-color', 'rgba(30, 163, 245, 0.913)');
        $('#applyscalings').css('cursor', 'pointer');
        $('#applyscalings').prop('disabled', false);
    }
});

$('#applyscalings').click(function(){
    $('#applyscalings').hide();
    $('#loadingscalings').show();
    $('#uploadfotoscaling').trigger('click');
});

$(document).on('input change click', '#fototambalz, #namatambal, #pendtambal', function(e){
    let tambal = true;
        $('#fototambalz, #namatambal, #pendtambal').each(function() {
        let value = this.value
        if ((value)&&(value.trim() !=''))
            {
                tambal = false
            }else{
                tambal = true
                return false
            }
        });

    if(tambal){
        $('#applytambals').css('background-color', 'rgb(212, 212, 212)');
        $('#applytambals').css('cursor', 'none');
        $('#applytambals').prop('disabled', true);
    }else{
        $('#applytambals').css('background-color', 'rgba(30, 163, 245, 0.913)');
        $('#applytambals').css('cursor', 'pointer');
        $('#applytambals').prop('disabled', false);
    }
});

$('#applytambals').click(function(){
    $('#applytambals').hide();
    $('#loadingtambals').show();
    $('#uploadfototambal').trigger('click');
});

$(document).on('input change click', '#fotobedahz, #namabedah, #pendbedah', function(e){
    let bedah = true;
        $('#fotobedahz, #namabedah, #pendbedah').each(function() {
        let value = this.value
        if ((value)&&(value.trim() !=''))
            {
                bedah = false
            }else{
                bedah = true
                return false
            }
        });

    if(bedah){
        $('#applybedahs').css('background-color', 'rgb(212, 212, 212)');
        $('#applybedahs').css('cursor', 'none');
        $('#applybedahs').prop('disabled', true);
    }else{
        $('#applybedahs').css('background-color', 'rgba(30, 163, 245, 0.913)');
        $('#applybedahs').css('cursor', 'pointer');
        $('#applybedahs').prop('disabled', false);
    }
});

$('#applybedahs').click(function(){
    $('#applybedahs').hide();
    $('#loadingbedahs').show();
    $('#uploadfotobedah').trigger('click');
});

$(document).on('input change click', '#fotobehelz, #namabehel, #pendbehel', function(e){
    let behel = true;
        $('#fotobehelz, #namabehel, #pendbehel').each(function() {
        let value = this.value
        if ((value)&&(value.trim() !=''))
            {
                behel = false
            }else{
                behel = true
                return false
            }
        });

    if(behel){
        $('#applybehels').css('background-color', 'rgb(212, 212, 212)');
        $('#applybehels').css('cursor', 'none');
        $('#applybehels').prop('disabled', true);
    }else{
        $('#applybehels').css('background-color', 'rgba(30, 163, 245, 0.913)');
        $('#applybehels').css('cursor', 'pointer');
        $('#applybehels').prop('disabled', false);
    }
});

$('#applybehels').click(function(){
    $('#applybehels').hide();
    $('#loadingbehels').show();
    $('#uploadfotobehel').trigger('click');
});

$(document).on('input change click', '#fotogiturz, #namagitur, #pendgitur', function(e){
    let gitur = true;
        $('#fotogiturz, #namagitur, #pendgitur').each(function() {
        let value = this.value
        if ((value)&&(value.trim() !=''))
            {
                gitur = false
            }else{
                gitur = true
                return false
            }
        });

    if(gitur){
        $('#applygiturs').css('background-color', 'rgb(212, 212, 212)');
        $('#applygiturs').css('cursor', 'none');
        $('#applygiturs').prop('disabled', true);
    }else{
        $('#applygiturs').css('background-color', 'rgba(30, 163, 245, 0.913)');
        $('#applygiturs').css('cursor', 'pointer');
        $('#applygiturs').prop('disabled', false);
    }
});

$('#applygiturs').click(function(){
    $('#applygiturs').hide();
    $('#loadinggiturs').show();
    $('#uploadfotogitur').trigger('click');
});

$(document).on('input change click', '#fotobleachingz, #namableaching, #pendbleaching', function(e){
    let bleaching = true;
        $('#fotobleachingz, #namableaching, #pendbleaching').each(function() {
        let value = this.value
        if ((value)&&(value.trim() !=''))
            {
                bleaching = false
            }else{
                bleaching = true
                return false
            }
        });

    if(bleaching){
        $('#applybleachings').css('background-color', 'rgb(212, 212, 212)');
        $('#applybleachings').css('cursor', 'none');
        $('#applybleachings').prop('disabled', true);
    }else{
        $('#applybleachings').css('background-color', 'rgba(30, 163, 245, 0.913)');
        $('#applybleachings').css('cursor', 'pointer');
        $('#applybleachings').prop('disabled', false);
    }
});

$('#applybleachings').click(function(){
    $('#applybleachings').hide();
    $('#loadingbleachings').show();
    $('#uploadfotobleaching').trigger('click');
});

$(document).on('input change click', '#fotoveneerz, #namaveneer, #pendveneer', function(e){
    let veneer = true;
        $('#fotoveneerz, #namaveneer, #pendveneer').each(function() {
        let value = this.value
        if ((value)&&(value.trim() !=''))
            {
                veneer = false
            }else{
                veneer = true
                return false
            }
        });

    if(veneer){
        $('#applyveneers').css('background-color', 'rgb(212, 212, 212)');
        $('#applyveneers').css('cursor', 'none');
        $('#applyveneers').prop('disabled', true);
    }else{
        $('#applyveneers').css('background-color', 'rgba(30, 163, 245, 0.913)');
        $('#applyveneers').css('cursor', 'pointer');
        $('#applyveneers').prop('disabled', false);
    }
});

$('#applyveneers').click(function(){
    $('#applyveneers').hide();
    $('#loadingveneers').show();
    $('#uploadfotoveneer').trigger('click');
});

$(document).on('input change click', '#fototulangz, #namatulang, #pendtulang', function(e){
    let tulang = true;
        $('#fototulangz, #namatulang, #pendtulang').each(function() {
        let value = this.value
        if ((value)&&(value.trim() !=''))
            {
                tulang = false
            }else{
                tulang = true
                return false
            }
        });

    if(tulang){
        $('#applytulangs').css('background-color', 'rgb(212, 212, 212)');
        $('#applytulangs').css('cursor', 'none');
        $('#applytulangs').prop('disabled', true);
    }else{
        $('#applytulangs').css('background-color', 'rgba(30, 163, 245, 0.913)');
        $('#applytulangs').css('cursor', 'pointer');
        $('#applytulangs').prop('disabled', false);
    }
});

$('#applytulangs').click(function(){
    $('#applytulangs').hide();
    $('#loadingtulangs').show();
    $('#uploadfototulang').trigger('click');
});

$(document).on('input change click', '#fotolainnyaz, #namalainnya, #pendlainnya', function(e){
    let lainnya = true;
        $('#fotolainnyaz, #namalainnya, #pendlainnya').each(function() {
        let value = this.value
        if ((value)&&(value.trim() !=''))
            {
                lainnya = false
            }else{
                lainnya = true
                return false
            }
        });

    if(lainnya){
        $('#applylainnyas').css('background-color', 'rgb(212, 212, 212)');
        $('#applylainnyas').css('cursor', 'none');
        $('#applylainnyas').prop('disabled', true);
    }else{
        $('#applylainnyas').css('background-color', 'rgba(30, 163, 245, 0.913)');
        $('#applylainnyas').css('cursor', 'pointer');
        $('#applylainnyas').prop('disabled', false);
    }
});

$('#applylainnyas').click(function(){
    $('#applylainnyas').hide();
    $('#loadinglainnyas').show();
    $('#uploadfotolainnya').trigger('click');
});

$('#highlightz').click(function(){
    $('.groupusername').hide();
    $('#settingz').show();
    $('#highlightz').hide();
    $('#grouphighlightz').addClass('animatedz').show();
    $('#grouphighlightz').css('visibility','visible');
    $('#grouphighlightz').css('opacity','1');
    $('#inputhighlightz').show();
});

$('#settingz').click(function(){
    $('.groupusername').show();
    $('#settingz').hide();
    $('#highlightz').show();
    $('#grouphighlightz').hide();
    $('#grouphighlightz').css('visibility','hidden');
    $('#grouphighlightz').css('opacity','0');
    $('#inputhighlightz').hide();
});

$('#showall').click(function(){
    document.getElementById('scroll').className = "scrollzz";
    document.getElementById('showall').style.display = "none";
    document.getElementById('showall2').style.display = "block";
    $('.borderlistz').css('height','101px');
    $('.borderlistz').css('width','101px');
    $('.borderlistz').css('border-radius','0px');
    $('.borderlistz').css('border','2px solid transparent');
    $('.borderlistz').css('background-color','transparent');
    $('.borderlistz').css('display','block');
    $('.list-item').css('background-color','transparent');
    $('.list-item').css('height','97.5px');
    $('.list-item').css('width','97.5px');
    $('.list-item').css('margin-top','2px');
    $('.list-item').css('margin-left','0px');
    $('.list-item').css('border-radius','0px');
    $('.list-item').css('border','none');
    $('.list-item').css('padding-top','0px');
    $('.list-item').css('position','relative');
    $('.list-item').css('overflow','hidden');
    $('.scroll').css('display','grid');
    $('.scroll').css('grid-template-columns','repeat(3, 100px)');
    $('.scroll').css('gap','10px');
    $('.scroll').css('padding-right','0px');
    $('#showall2').css('margin-top','2px');
    $('#scroll').addClass('animatedz2').show();
});

$('#showall2').click(function(){
    var bentukbutton1 = document.getElementById('bentukbutton1').value;
    var bentukbutton2 = document.getElementById('bentukbutton2').value;
    document.getElementById('scroll').className = "scroll";
    document.getElementById('showall2').style.display = "none";
    document.getElementById('showall').style.display = "block";
    $('.borderlistz').css('height','70px');
    $('.borderlistz').css('width','70px');
    $('.borderlistz').css('border-radius', bentukbutton1);
    $('.borderlistz').css('border','none');
    $('.borderlistz').css('background-color','');
    $('.borderlistz').css('outline','none');
    $('.borderlistz').css('display','flex');
    $('.list-item').css('background-color','');
    $('.list-item').css('height','74px');
    $('.list-item').css('width','74px');
    $('.list-item').css('margin-top','0px');
    $('.list-item').css('margin-bottom','0px');
    $('.list-item').css('margin-left','5px');
    $('.list-item').css('border-radius', bentukbutton2);
    $('.list-item').css('border','3px solid rgba(195, 195, 195, 0.452)');
    $('.list-item').css('background','none');
    $('.list-item').css('position','relative');
    $('.list-item').css('overflow','none');
    $('.scroll').css('display','');
    $('.scroll').css('grid-template-columns','');
    $('.scroll').css('gap','0px');
    $('.scroll').css('padding-left','7px');
    $('.scroll').css('padding-right','12px');
    $('#showall2').css('margin-top','0px');
    $('#scroll').addClass('animatedz3').show();
});