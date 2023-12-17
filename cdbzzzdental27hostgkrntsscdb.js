$('.backseting').click(function(){
    $('.ktkinputmenuz').hide();
    $('#ktkinputmenu').addClass('animatedz').show();
});

$('#dentistseting').click(function(){
    $('#ktkinputmenu').hide();
    $('#ktkdentist').addClass('animatedz').show();
});

$('#scalingseting').click(function(){
    $('#ktkinputmenu').hide();
    $('#ktkscaling').addClass('animatedz').show();
});

$('#tambalseting').click(function(){
    $('#ktkinputmenu').hide();
    $('#ktktambal').addClass('animatedz').show();
});

$('#bedahseting').click(function(){
    $('#ktkinputmenu').hide();
    $('#ktkbedah').addClass('animatedz').show();
});

$('#behelseting').click(function(){
    $('#ktkinputmenu').hide();
    $('#ktkbehel').addClass('animatedz').show();
});

$('#giturseting').click(function(){
    $('#ktkinputmenu').hide();
    $('#ktkgitur').addClass('animatedz').show();
});

$('#bleachingseting').click(function(){
    $('#ktkinputmenu').hide();
    $('#ktkbleaching').addClass('animatedz').show();
});

$('#veneerseting').click(function(){
    $('#ktkinputmenu').hide();
    $('#ktkveneer').addClass('animatedz').show();
});

$('#lainnyaseting').click(function(){
    $('#ktkinputmenu').hide();
    $('#ktklainnya').addClass('animatedz').show();
});

$('#healthtools').click(function(){
    $('#healthtools').hide();
    $('#healthtoolsblack').show();
    $('#editthetools').show();
    $('#editthetoolsblack').hide();
    $('#reservationstools').show();
    $('#reservationstoolsblack').hide();
    $('#orderreservasitools').show();
    $('#orderreservasitoolsblack').hide();
    $('#pacaktools').show();
    $('#pacaktoolsblack').hide();
    $('#adopttools').show();
    $('#adopttoolsblack').hide();
    $('.groupusername').hide();
    $('#groupeditreservasi').hide();
    $('#grouporderreservasi').hide();
    $('#grouphighlightz').hide();
    $('#settingz').hide();
    $('#highlightz').hide();
    $('#inputhighlightz').hide();
    $('#groupeditmenu').addClass('animatedz').show();
    $('#groupeditmenu').css('visibility','visible');
    $('#groupeditmenu').css('opacity','1');
    $('#containereditmenu').show();
    $('#clearz').trigger('click');
    $('#clearz').css('left', "60px");
    $('#clearz').css({ "background-image" : "url('https://lh3.googleusercontent.com/VBU8ARG1TdGPhvmdCbPUinHRGT_h5EseHh4eJ5t_rHzC5YF-YGpLrgW1snyTzdpiGNw1qxNdjeq2Y6I-fB0mqkXPbbwVFyRjsxJZaU0se3aQt4o6ZoJsFvEEmJuSxqrlPCWWZsA9RA=w2400')" });
    $('#searchnew').hide();
    $('#buttontodaynew').hide();
    $('#searchdone').hide();
    $('#newanddone').hide();
    $('#htmlpdf').hide();
});

$('#editthetools').click(function(){
    $('#editthetools').hide();
    $('#editthetoolsblack').show();
    $('#healthtools').show();
    $('#healthtoolsblack').hide();
    $('#reservationstools').show();
    $('#reservationstoolsblack').hide();
    $('#orderreservasitools').show();
    $('#orderreservasitoolsblack').hide();
    $('#pacaktools').show();
    $('#pacaktoolsblack').hide();
    $('#adopttools').show();
    $('#adopttoolsblack').hide();
    $('#groupeditmenu').hide();
    $('#groupeditreservasi').hide();
    $('#grouporderreservasi').hide();
    $('.groupusername').show();
    $('#settingz').hide();
    $('#highlightz').show();
    $('#grouphighlightz').hide();
    $('#grouphighlightz').css('visibility','hidden');
    $('#grouphighlightz').css('opacity','0');
    $('#inputhighlightz').hide();
    $('#clearz').trigger('click');
    $('#clearz').css('left', "60px");
    $('#clearz').css({ "background-image" : "url('https://lh3.googleusercontent.com/VBU8ARG1TdGPhvmdCbPUinHRGT_h5EseHh4eJ5t_rHzC5YF-YGpLrgW1snyTzdpiGNw1qxNdjeq2Y6I-fB0mqkXPbbwVFyRjsxJZaU0se3aQt4o6ZoJsFvEEmJuSxqrlPCWWZsA9RA=w2400')" });
    $('#searchnew').hide();
    $('#buttontodaynew').hide();
    $('#searchdone').hide();
    $('#newanddone').hide();
    $('#htmlpdf').hide();
});

$('#reservationstools').click(function(){
    $('#reservationstools').hide();
    $('#reservationstoolsblack').show();
    $('#healthtools').show();
    $('#healthtoolsblack').hide();
    $('#editthetools').show();
    $('#editthetoolsblack').hide();
    $('#orderreservasitools').show();
    $('#orderreservasitoolsblack').hide();
    $('#pacaktools').show();
    $('#pacaktoolsblack').hide();
    $('#adopttools').show();
    $('#adopttoolsblack').hide();
    $('.groupusername').hide();
    $('#grouporderreservasi').hide();
    $('#grouphighlightz').hide();
    $('#inputhighlightz').hide();
    $('#settingz').hide();
    $('#highlightz').hide();
    $('#groupeditmenu').hide();
    $('#groupeditreservasi').addClass('animatedz').show();
    $('#groupeditreservasi').css('visibility','visible');
    $('#groupeditreservasi').css('opacity','1');
    $('#containereditreservasi').show();
    $('#clearz').trigger('click');
    $('#clearz').css('left', "60px");
    $('#clearz').css({ "background-image" : "url('https://lh3.googleusercontent.com/VBU8ARG1TdGPhvmdCbPUinHRGT_h5EseHh4eJ5t_rHzC5YF-YGpLrgW1snyTzdpiGNw1qxNdjeq2Y6I-fB0mqkXPbbwVFyRjsxJZaU0se3aQt4o6ZoJsFvEEmJuSxqrlPCWWZsA9RA=w2400')" });
    $('#searchnew').hide();
    $('#buttontodaynew').hide();
    $('#searchdone').hide();
    $('#newanddone').hide();
    $('#htmlpdf').hide();
});

$('#orderreservasitools').click(function(){
    $('#loadingorder').show(function(){
        $('#orderreservasitools').hide();
        $('#orderreservasitoolsblack').show();   
        $('#healthtools').show();
        $('#healthtoolsblack').hide();
        $('#editthetools').show();
        $('#editthetoolsblack').hide();
        $('#reservationstools').show();
        $('#reservationstoolsblack').hide();
        $('#pacaktools').show();
        $('#pacaktoolsblack').hide();
        $('#adopttools').show();
        $('#adopttoolsblack').hide();
        $('#analitiktools').show();
        $('#analitiktoolsblack').hide();
        $('#containerAnalitik').hide();
        $('#canvasBar').remove();
        $('#canvasDoughnut').remove();
        $('.groupusername').hide();
        $('#groupeditmenu').hide();
        $('#groupeditreservasi').hide();
        $('#grouphighlightz').hide();
        $('#settingz').hide();
        $('#highlightz').hide();
        $('#inputhighlightz').hide();
        $('#grouporderreservasi').addClass('animatedz').show();
        $('#grouporderreservasi').css('visibility','visible');
        $('#grouporderreservasi').css('opacity','1');
        $('#kotakInfo').show();
        $('#kotakInfo').css('visibility','visible');
        $('#kotakInfo').css('opacity','1');
        $('#clearz').trigger('click');
        $('#clearz').css({ "background-image" : "url('https://lh3.googleusercontent.com/VBU8ARG1TdGPhvmdCbPUinHRGT_h5EseHh4eJ5t_rHzC5YF-YGpLrgW1snyTzdpiGNw1qxNdjeq2Y6I-fB0mqkXPbbwVFyRjsxJZaU0se3aQt4o6ZoJsFvEEmJuSxqrlPCWWZsA9RA=w2400')" });
        $('#clearz').css('left', "60px");
        $('#searchnew').show();
        $('#buttontodaynew').show();
        $('#searchdone').hide();
        $('#newanddone').show();
        $('#newtools').hide();
        $('#newtoolsblack').show();
        $('#donetools').show();
        $('#donetoolsblack').hide();
        $('#kotakInfo').show();
        $('#kotakInfoDone').hide();
        $('#htmlpdf').hide();
        $('#tambahanorderreservasi').css({ "margin-top" : "20px" });

        isilah();
        function isilah(){
            var text = $('.isilah');

            text.each(function(){
                $(this).attr('rows',1);
                resize($(this));
            });

            text.on('click', function(){
                resize($(this));
            });
            
            function resize ($text) {
                $text.css('height', 'auto');
                $text.css('height', $text[0].scrollHeight+'px');
            }
        };

        $('#grouporderreservasi').ready(function(){
            $('#loadingorder').hide();
            $('#circlenotif').hide();
        });

        if($('#kotakInfo').children(':visible').length == 0) {
            document.getElementById('emptyiconkotakInfo').style.display = "block";
        } else {
            document.getElementById('emptyiconkotakInfo').style.display = "none"; 
        } 

    });
    
});

$('#newtools').click(function(){

    $('#loadingorder').show(function(){
        $('#newtools').hide();
        $('#newtoolsblack').show();
        $('#donetools').show();
        $('#donetoolsblack').hide();
        $('#analitiktools').show();
        $('#analitiktoolsblack').hide();
        $('#htmlpdf').hide();
        $('#kotakInfoDone').hide();
        $('#containerAnalitik').hide();
        $('#canvasBar').remove();
        $('#canvasDoughnut').remove();
        $('#kotakInfo').show();
        $('#searchdone').hide();
        $('#searchnew').show();
        $('#buttontodaynew').show();
        $('#tambahanorderreservasi').css({ "margin-top" : "20px" });
        $('#clearz').trigger('click');
        $('#clearz').css('left', "60px");
        $('#clearz').css({ "background-image" : "url('https://lh3.googleusercontent.com/VBU8ARG1TdGPhvmdCbPUinHRGT_h5EseHh4eJ5t_rHzC5YF-YGpLrgW1snyTzdpiGNw1qxNdjeq2Y6I-fB0mqkXPbbwVFyRjsxJZaU0se3aQt4o6ZoJsFvEEmJuSxqrlPCWWZsA9RA=w2400')" });

        isilah();
        function isilah(){
            var text = $('.isilah');

            text.each(function(){
                $(this).attr('rows',1);
                resize($(this));
            });

            text.on('click', function(){
                resize($(this));
            });
            
            function resize ($text) {
                $text.css('height', 'auto');
                $text.css('height', $text[0].scrollHeight+'px');
            }
        }

        $('#kotakInfo').ready(function(){
            $('#loadingorder').hide();
        });

        if($('#kotakInfo').children(':visible').length == 0) {
            document.getElementById('emptyiconkotakInfo').style.display = "block";
        } else {
            document.getElementById('emptyiconkotakInfo').style.display = "none"; 
        } 

    });

});

$('#donetools').click(function(){

    $('#loadingorder').show(function(){
        $('#donetools').hide();
        $('#donetoolsblack').show();
        $('#newtools').show();
        $('#newtoolsblack').hide();
        $('#analitiktools').show();
        $('#analitiktoolsblack').hide();
        $('#htmlpdf').show();
        $('#kotakInfo').hide();
        $('#containerAnalitik').hide();
        $('#canvasBar').remove();
        $('#canvasDoughnut').remove();
        $('#kotakInfoDone').show();
        $('#kotakInfoDone').css('visibility','visible');
        $('#kotakInfoDone').css('opacity','1');
        $('#searchdone').show();
        $('#searchnew').hide();
        $('#buttontodaynew').hide();
        $('#tambahanorderreservasi').css({ "margin-top" : "60px" });
        $('#clearz').trigger('click');
        $('#clearz').css('left', "131px");
        $('#clearz').css({ "background-image" : "url('https://lh3.googleusercontent.com/8cARlSy_2sehK_-YRbrJirzFk0Sp7YY06kOV0cx2adurn-p3mjz18g0UTtiQ-e_qxe5ylqZB-CDRNVkwVwOTL317HmoleMQTie6lhlYSks_olkClIpwyL8gP0x17BiJeLERk31NUYg=w2400')" });

        isilahDone();
        function isilahDone(){
            var textDone = $('.isilahDone');

            textDone.each(function(){
                $(this).attr('rows',1);
                resize($(this));
            });

            textDone.on('click', function(){
                resize($(this));
            });
            
            function resize ($textDone) {
                $textDone.css('height', 'auto');
                $textDone.css('height', $textDone[0].scrollHeight+'px');
            }
        };

        $('#kotakInfoDone').ready(function(){
            $('#loadingorder').hide();
        });

        if($('#kotakInfoDone').children(':visible').length == 0) {
            document.getElementById('emptyiconkotakInfoDone').style.display = "block";
        } else {
            document.getElementById('emptyiconkotakInfoDone').style.display = "none";
        } 

    });

});

$('#analitiktools').click(function(){

    $('#loadingorder').show(function(){
        $('#donetools').show();
        $('#donetoolsblack').hide();
        $('#newtools').show();
        $('#newtoolsblack').hide();
        $('#analitiktools').hide();
        $('#analitiktoolsblack').show();
        $('#kotakInfo').hide();
        $('#kotakInfoDone').hide();
        $('#htmlpdf').hide();
        $('#containerAnalitik').show();
        $('#containerAnalitik').css('visibility','visible');
        $('#containerAnalitik').css('opacity','1');
        $('#searchdone').hide();
        $('#searchnew').hide();
        $('#buttontodaynew').hide();
        $('#tambahanorderreservasi').css({ "margin-top" : "20px" });
        $('.clear').hide();
        $('.kosong').hide();

        $('#containerAnalitik').ready(function(){
            $('#loadingorder').hide();
        });

        if($('#kotakInfo').children(':visible').length == 0) {
            document.getElementById('emptyiconkotakInfo').style.display = "block";
        } else {
            document.getElementById('emptyiconkotakInfo').style.display = "none"; 
        } 

        if($('#kotakInfoDone').children(':visible').length == 0) {
            document.getElementById('emptyiconkotakInfoDone').style.display = "block";
        } else {
            document.getElementById('emptyiconkotakInfoDone').style.display = "none";
        } 
        
        let dataReservasi = [0, 0, 0, 0, 0, 0, 0, 0];

        const canvas1 = document.createElement("canvas");
        canvas1.width = 540;
        canvas1.height = 540;
        canvas1.id = 'canvasBar';
        document.getElementById('containerAnalitik').appendChild(canvas1);
                
        const canvas3 = document.createElement("canvas");
        canvas3.width = 540;
        canvas3.height = 540;
        canvas3.id = 'canvasDoughnut';
        canvas3.style.marginTop = '10px';
        canvas3.style.borderTop = '0.5px solid rgb(211, 211, 211)';
        canvas3.style.paddingTop = '10px';
        document.getElementById('containerAnalitik').appendChild(canvas3);
                
        var satu = $('.titlebuttonscaling').text();
        var dua = $('.titlebuttontambal').text();
        var tiga = $('.titlebuttonbedah').text();
        var empat = $('.titlebuttonbehel').text();
        var lima = $('.titlebuttongigitiruan').text();
        var enam = $('.titlebuttonbleaching').text();
        var tujuh = $('.titlebuttonveneer').text();
        var delapan = $('.titlebuttonlainnya').text();
                
        const ctx1 = canvas1.getContext("2d");
        const myChart1 = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: [satu, dua, tiga, empat, lima, enam, tujuh, delapan],
                datasets: [{
                    label: 'jumlah reservasi',
                    data: dataReservasi,
                    backgroundColor: ['rgba(30, 163, 245)', 'green', 'red', 'purple', 'blue', 'orange', 'grey', 'magenta'], 
                    borderRadius: 5
                }]
            },
            options: {
                scales: {
                    x: {
                        ticks: {
                            font: {
                                family: 'Poppins',
                                size: 10,
                                weight: 500
                            }
                        }
                    },
                    y: {
                        ticks: {
                            font: {
                                family: 'Poppins',
                                size: 10,
                                weight: 500
                            }
                        }
                    }
                }
            }
        });
                
        const ctx3 = canvas3.getContext("2d");
        const myChart3 = new Chart(ctx3, {
            type: 'doughnut',
            data: {
                labels: [satu, dua, tiga, empat, lima, enam, tujuh, delapan],
                datasets: [{
                    label: 'jumlah reservasi',
                    data: dataReservasi,
                    backgroundColor: ['rgba(30, 163, 245)', 'green', 'red', 'purple', 'blue', 'orange', 'grey', 'magenta'], 
                    borderRadius: 5
                }]
            },
            options: {
                scales: {
                    x: {
                        ticks: {
                            font: {
                                family: 'Poppins',
                                size: 10,
                                weight: 500
                            }
                        }
                    },
                    y: {
                        ticks: {
                            font: {
                                family: 'Poppins',
                                size: 10,
                                weight: 500
                            }
                        }
                    }
                }
            }
        });
                
        Chart.defaults.font.family = 'Poppins';
        Chart.defaults.font.size = 10;
        Chart.defaults.font.weight = 500;
                
        var reservasiElements = $('.judulreservasi, .judulreservasiDone');
                
        reservasiElements.each(function() {
            var reservasi = $(this).val();
                
            if (reservasi == satu) {
                dataReservasi[0] += 1;
            } else if (reservasi == dua) {
                dataReservasi[1] += 1;
            } else if (reservasi == tiga) {
                dataReservasi[2] += 1;
            } else if (reservasi == empat) {
                dataReservasi[3] += 1;
            } else if (reservasi == lima) {
                dataReservasi[4] += 1;
            } else if (reservasi == enam) {
                dataReservasi[5] += 1;
            } else if (reservasi == tujuh) {
                dataReservasi[6] += 1;
            } else if (reservasi == delapan) {
                dataReservasi[7] += 1;
            }
                
            myChart1.update();
            myChart3.update();
        });

    });

});

$('#pacaktools').click(function(){
    $('#pacaktools').hide();
    $('#pacaktoolsblack').show();
    $('#healthtools').show();
    $('#healthtoolsblack').hide();
    $('#editthetools').show();
    $('#editthetoolsblack').hide();
    $('#reservationstools').show();
    $('#reservationstoolsblack').hide();
    $('#orderreservasitools').show();
    $('#orderreservasitoolsblack').hide();
    $('#adopttools').show();
    $('#adopttoolsblack').hide();
});

$('#adopttools').click(function(){
    $('#adopttools').hide();
    $('#adopttoolsblack').show();
    $('#healthtools').show();
    $('#healthtoolsblack').hide();
    $('#editthetools').show();
    $('#editthetoolsblack').hide();
    $('#reservationstools').show();
    $('#reservationstoolsblack').hide();
    $('#orderreservasitools').show();
    $('#orderreservasitoolsblack').hide();
    $('#pacaktools').show();
    $('#pacaktoolsblack').hide();
});

document.querySelector('.reservasi').addEventListener('click', function() {
    document.querySelector('.reservasi').style.display = 'none';
    document.querySelector('.setelahmenu').style.display = 'block';
    document.querySelector('.setelahmenu').style.visibility = 'visible';
    document.querySelector('.setelahmenu').style.opacity = '1';
    document.querySelector('.cancelmenuss').style.display = 'none';
    document.querySelector('#pagereservasi').classList.add('animatedzzreservasi');
    document.querySelector('#pagereservasi').style.display = 'block';
    document.querySelector('#pagedentist').style.display = 'none';
    document.querySelector('#pagescaling').style.display = 'none';
    document.querySelector('#pagetambal').style.display = 'none';
    document.querySelector('#pagebedah').style.display = 'none';
    document.querySelector('#pagebehel').style.display = 'none';
    document.querySelector('#pagegitur').style.display = 'none';
    document.querySelector('#pagebleaching').style.display = 'none';
    document.querySelector('#pageveneer').style.display = 'none';
    document.querySelector('#pagelainnya').style.display = 'none';
    document.querySelector('.yakinform').disabled = true;
    document.querySelector('.kirimform').disabled = true;
    acakkodepin.click();
    kotakcancelreservasi();
});       

function kotakcancelreservasi(){
    $(".kotakcancel").show();
    $(".judulmenu").addClass('animatedzz').show();
}

$("#acakkodepin").on("click",function(){
var charsNumber   = "0123456789";
var charsLower    = "abcdefghijklmnopqrstuvwxyz";
var charsUpper    = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
var charsAll      = [charsNumber];  
var chars         = charsAll.join('');
var stringLength  = 6;
var randomString  = '';
for (var i=0; i<stringLength; i++) {                               
    var randNum    = Math.floor(Math.random() * chars.length);     
    randomString  += chars.substring(randNum,randNum+1);           
}
document.getElementById('kodepin').size  = stringLength* 1.4;  
document.getElementById('kodepin').value = "CDB"+randomString;
$("#kodepin").trigger('click');
});        

$("#kodepin").on("click",function(){
var z = document.querySelector("#kodepin").value; 
document.getElementById('kodepinbukti').value = z;
});   

$("#drgbutton").on("click",function(){
$("#tabel1z").hide();
$(".kotakcancel").hide();
$(".cancelmenuss").show();
$(".judulmenu").addClass('animatedzz').show();
$("#pagedentist").addClass('animatedzz').show();
$(".klmpbutton").hide();
var z = document.querySelector(".titlebuttondrg").innerHTML; 
document.querySelector(".cancelmenuss").innerHTML = z;
bloknamadentist();
    function bloknamadentist(){
        var text = $('.bloknamadentist');

        text.each(function(){
            $(this).attr('rows',1);
            resize($(this));
        });

        text.on('click', function(){
            resize($(this));
        });
        
        function resize ($text) {
            $text.css('height', 'auto');
            $text.css('height', $text[0].scrollHeight+'px');
        }
    }
});    

$("#healthbutton").on("click",function(){
$("#tabel1z").hide();
$(".kotakcancel").hide();
$(".cancelmenuss").show();
$(".reservasi").show();
$(".tambahanreservasi").show();
$(".judulmenu").addClass('animatedzz').show();
$("#pagescaling").addClass('animatedzz').show();
$(".klmpbutton").hide();
var z = document.querySelector(".titlebuttonscaling").innerHTML; 
document.querySelector(".cancelmenuss").innerHTML = z; 
document.getElementById("judulreservasi").value = z; 
document.getElementById("canceljudul").innerHTML = z; 
});

$("#groombutton").on("click",function(){
$("#tabel1z").hide();
$(".kotakcancel").hide();
$(".cancelmenuss").show();
$(".reservasi").show();
$(".tambahanreservasi").show();
$(".judulmenu").addClass('animatedzz').show();
$("#pagetambal").addClass('animatedzz').show();
$(".klmpbutton").hide();
var z = document.querySelector(".titlebuttontambal").innerHTML; 
document.querySelector(".cancelmenuss").innerHTML = z; 
document.getElementById("judulreservasi").value = z;
document.getElementById("canceljudul").innerHTML = z;  
});

$("#hotelbutton").on("click",function(){
$("#tabel1z").hide();
$(".kotakcancel").hide();
$(".cancelmenuss").show();
$(".reservasi").show();
$(".tambahanreservasi").show();
$(".judulmenu").addClass('animatedzz').show();
$("#pagebedah").addClass('animatedzz').show();
$(".klmpbutton").hide();
var z = document.querySelector(".titlebuttonbedah").innerHTML; 
document.querySelector(".cancelmenuss").innerHTML = z; 
document.getElementById("judulreservasi").value = z;
document.getElementById("canceljudul").innerHTML = z;
});

$("#pacakbutton").on("click",function(){
$("#tabel1z").hide();
$(".kotakcancel").hide();
$(".cancelmenuss").show();
$(".reservasi").show();
$(".tambahanreservasi").show();
$(".judulmenu").addClass('animatedzz').show();
$("#pagebehel").addClass('animatedzz').show();
$(".klmpbutton").hide();
var z = document.querySelector(".titlebuttonbehel").innerHTML; 
document.querySelector(".cancelmenuss").innerHTML = z;
document.getElementById("judulreservasi").value = z;
document.getElementById("canceljudul").innerHTML = z;
});

$("#adoptionbutton").on("click",function(){
$("#tabel1z").hide();
$(".kotakcancel").hide();
$(".cancelmenuss").show();
$(".reservasi").show();
$(".tambahanreservasi").show();
$(".judulmenu").addClass('animatedzz').show();
$("#pagegitur").addClass('animatedzz').show();
$(".klmpbutton").hide();
var z = document.querySelector(".titlebuttongigitiruan").innerHTML; 
document.querySelector(".cancelmenuss").innerHTML = z; 
document.getElementById("judulreservasi").value = z;
document.getElementById("canceljudul").innerHTML = z;
});

$("#bleachbutton").on("click",function(){
$("#tabel1z").hide();
$(".kotakcancel").hide();
$(".cancelmenuss").show();
$(".reservasi").show();
$(".tambahanreservasi").show();
$(".judulmenu").addClass('animatedzz').show();
$("#pagebleaching").addClass('animatedzz').show();
$(".klmpbutton").hide();
var z = document.querySelector(".titlebuttonbleaching").innerHTML; 
document.querySelector(".cancelmenuss").innerHTML = z; 
document.getElementById("judulreservasi").value = z; 
document.getElementById("canceljudul").innerHTML = z;
});

$("#veneerbutton").on("click",function(){
$("#tabel1z").hide();
$(".kotakcancel").hide();
$(".cancelmenuss").show();
$(".reservasi").show();
$(".tambahanreservasi").show();
$(".judulmenu").addClass('animatedzz').show();
$("#pageveneer").addClass('animatedzz').show();
$(".klmpbutton").hide();
var z = document.querySelector(".titlebuttonveneer").innerHTML; 
document.querySelector(".cancelmenuss").innerHTML = z; 
document.getElementById("judulreservasi").value = z;
document.getElementById("canceljudul").innerHTML = z;
});

$("#lainnyabutton").on("click",function(){
$("#tabel1z").hide();
$(".kotakcancel").hide();
$(".cancelmenuss").show();
$(".reservasi").show();
$(".tambahanreservasi").show();
$(".judulmenu").addClass('animatedzz').show();
$("#pagelainnya").addClass('animatedzz').show();
$(".klmpbutton").hide();
var z = document.querySelector(".titlebuttonlainnya").innerHTML; 
document.querySelector(".cancelmenuss").innerHTML = z; 
document.getElementById("judulreservasi").value = z;
document.getElementById("canceljudul").innerHTML = z;
});

$(".kotakcancel").on("click",function(){
$(".kotakcancel").hide();
$(".judulmenu").hide();
$(".cancelmenuss").hide();
$(".pages").hide();
$("#tabel1z").addClass('animatedzz').show();
$(".klmpbutton").fadeIn(1200);
$(".reservasi").hide();
$(".setelahmenu").hide();
$('.setelahmenu').css('visibility','hidden');
$('.setelahmenu').css('opacity','0');
$(".tambahanreservasi").hide();
});

$(".cancelmenuss").on("click",function(){
$(".judulmenu").hide();
$(".cancelmenuss").hide();
$(".pages").hide();
$("#tabel1z").addClass('animatedzz').show();
$(".klmpbutton").fadeIn(1200);
$(".reservasi").hide();
$(".setelahmenu").hide();
$('.setelahmenu').css('visibility','hidden');
$('.setelahmenu').css('opacity','0');
$(".tambahanreservasi").hide();
});

$("#ubahusername").on("input", function() {
    var z = document.getElementById("ubahusername").value; 
    document.getElementById("usernametools").innerHTML = "@"+z; 
});

$("#colorPicker").on("input", function() {
    var z = document.getElementById("colorPicker").value; 
    document.getElementById("inputcolor").value = z; 
    $("#inputcolor").css('background-color', z );
    $("body").css('background-color', z );
});

$("#colorPickerz").on("input", function() {
    var z = document.getElementById("colorPickerz").value; 
    document.getElementById("inputcolorz").value = z; 
    $("#inputcolorz").css('background-color', z );
    $("#usernametools").css('color', z );
});

$("#colorPickerzz").on("input", function() {
    var z = document.getElementById("colorPickerzz").value; 
    document.getElementById("inputcolorzz").value = z; 
    $("#inputcolorzz").css('background-color', z );
    $(".drgbg").css('background-color', z );
    $(".scalingbg").css('background-color', z );
    $(".tambalbg").css('background-color', z );
    $(".bedahbg").css('background-color', z );
    $(".behelbg").css('background-color', z );
    $(".gigitiruanbg").css('background-color', z );
    $(".bleachingbg").css('background-color', z );
    $(".veneerbg").css('background-color', z );
    $(".lainnyabg").css('background-color', z );
    $(".infos").css('background-color', z );
    $(".reservasi").css('background-color', z );
    $(".isiform").css('background-color', z );
    $(".reservasis").css('background-color', z );
    $(".titledentist").css('background-color', z );
    $("#cekreservasi").css('background-color', z );
    $("#saygreetinginput").css('background-color', z );
    $("#googlemaps").css('background-color', z );
    $("#activity").css('background-color', z );
});

$("#colorPickerzzSosmed").on("input", function() {
    var z = document.getElementById("colorPickerzzSosmed").value; 
    document.getElementById("inputcolorzzSosmed").value = z; 
    $("#inputcolorzzSosmed").css('background-color', z );
    $(".WarnaSosmed").attr('fill', z);
});

$("#colorPickerzzz").on("input", function() {
    var z = document.getElementById("colorPickerzzz").value; 
    document.getElementById("inputcolorzzz").value = z; 
    $("#inputcolorzzz").css('background-color', z );
    $(".kalimatsilahkan").css('color', z );
});

$("#checkboxfont1").on("click", function() {

    document.getElementById('fontstyle').value = "Poppins";
    $("#saygreetinginput").css('font-family','Poppins');
    $("#usernametools").css('font-family','Poppins');
    $(".kalimatsilahkan").css('font-family','Poppins');
    $(".list-itemdrg").css('font-family','Poppins');
    $(".list-itemjadwal").css('font-family','Poppins');
    $(".titlebuttoninfo").css('font-family','Poppins');
    $(".titlebuttondrg").css('font-family','Poppins');
    $(".titlebuttonscaling").css('font-family','Poppins');
    $(".titlebuttontambal").css('font-family','Poppins');
    $(".titlebuttonbedah").css('font-family','Poppins');
    $(".titlebuttonbehel").css('font-family','Poppins');
    $(".titlebuttongigitiruan").css('font-family','Poppins');
    $(".titlebuttonbleaching").css('font-family','Poppins');
    $(".titlebuttonveneer").css('font-family','Poppins');
    $(".titlebuttonlainnya").css('font-family','Poppins');
    $(".titleinfos").css('font-family','Poppins');
    $(".readmore").css('font-family','Poppins');
    $("#jawabannamapasien").css('font-family','Poppins');
    $("#jawabanalamat").css('font-family','Poppins');
    $("#jawabanjeniskelamin").css('font-family','Poppins');
    $("#jawabanlayanan").css('font-family','Poppins');
    $("#jawabantanggallahir").css('font-family','Poppins');
    $("#jawabanumurangka").css('font-family','Poppins');
    $("#jawabanumurtahunbulan").css('font-family','Poppins');
    $("#jawabankeluhan").css('font-family','Poppins');
    $("#jawabanalergi").css('font-family','Poppins');
    $("#jawabanfotokeluhanz").css('font-family','Poppins');
    $("#jawabanjadwal").css('font-family','Poppins');
    $(".jawabanjams").css('font-family','Poppins');
    $(".jawabanjamsdokter").css('font-family','Poppins');
    $("#jawabanhp").css('font-family','Poppins');
    $(".cancelmenuss").css('font-family','Poppins');
    $("#cancelreservasi").css('font-family','Poppins');
    $("#canceljudul").css('font-family','Poppins');
    $(".bloknamadentist").css('font-family','Poppins');
    $(".bloknamaMenu").css('font-family','Poppins');
    $(".titledentist").css('font-family','Poppins');
    $(".reservasi").css('font-family','Poppins');
    $(".isiform").css('font-family','Poppins');
    $(".yakinform").css('font-family','Poppins');
    $(".kirimform").css('font-family','Poppins');
    $(".suksesform").css('font-family','Poppins');
    $(".gambarsuksesform").css('font-family','Poppins');
    $(".gambarkiriminfo").css('font-family','Poppins');
    $(".tulisankiriminfo").css('font-family','Poppins');
    $("#googlemaps").css('font-family', 'Poppins');
    $("#activity").css('font-family', 'Poppins');

});

$("#checkboxfont2").on("click", function() {

    document.getElementById('fontstyle').value = "Noto Sans";
    $("#saygreetinginput").css('font-family','Noto Sans');
    $("#usernametools").css('font-family','Noto Sans');
    $(".kalimatsilahkan").css('font-family','Noto Sans');
    $(".list-itemdrg").css('font-family','Noto Sans');
    $(".list-itemjadwal").css('font-family','Noto Sans');
    $(".titlebuttoninfo").css('font-family','Noto Sans');
    $(".titlebuttondrg").css('font-family','Noto Sans');
    $(".titlebuttonscaling").css('font-family','Noto Sans');
    $(".titlebuttontambal").css('font-family','Noto Sans');
    $(".titlebuttonbedah").css('font-family','Noto Sans');
    $(".titlebuttonbehel").css('font-family','Noto Sans');
    $(".titlebuttongigitiruan").css('font-family','Noto Sans');
    $(".titlebuttonbleaching").css('font-family','Noto Sans');
    $(".titlebuttonveneer").css('font-family','Noto Sans');
    $(".titlebuttonlainnya").css('font-family','Noto Sans');
    $(".titleinfos").css('font-family','Noto Sans');
    $(".readmore").css('font-family','Noto Sans');
    $("#jawabannamapasien").css('font-family','Noto Sans');
    $("#jawabanalamat").css('font-family','Noto Sans');
    $("#jawabanjeniskelamin").css('font-family','Noto Sans');
    $("#jawabanlayanan").css('font-family','Noto Sans');
    $("#jawabantanggallahir").css('font-family','Noto Sans');
    $("#jawabanumurangka").css('font-family','Noto Sans');
    $("#jawabanumurtahunbulan").css('font-family','Noto Sans');
    $("#jawabankeluhan").css('font-family','Noto Sans');
    $("#jawabanalergi").css('font-family','Noto Sans');
    $("#jawabanfotokeluhanz").css('font-family','Noto Sans');
    $("#jawabanjadwal").css('font-family','Noto Sans');
    $(".jawabanjams").css('font-family','Noto Sans');
    $(".jawabanjamsdokter").css('font-family','Noto Sans');
    $("#jawabanhp").css('font-family','Noto Sans');
    $(".cancelmenuss").css('font-family','Noto Sans');
    $("#cancelreservasi").css('font-family','Noto Sans');
    $("#canceljudul").css('font-family','Noto Sans');
    $(".bloknamadentist").css('font-family','Noto Sans');
    $(".bloknamaMenu").css('font-family','Noto Sans');
    $(".titledentist").css('font-family','Noto Sans');
    $(".reservasi").css('font-family','Noto Sans');
    $(".isiform").css('font-family','Noto Sans');
    $(".yakinform").css('font-family','Noto Sans');
    $(".kirimform").css('font-family','Noto Sans');
    $(".suksesform").css('font-family','Noto Sans');
    $(".gambarsuksesform").css('font-family','Noto Sans');
    $(".gambarkiriminfo").css('font-family','Noto Sans');
    $(".tulisankiriminfo").css('font-family','Noto Sans');
    $("#googlemaps").css('font-family', 'Noto Sans');
    $("#activity").css('font-family', 'Noto Sans');

});

$("#checkboxfont3").on("click", function() {

    document.getElementById('fontstyle').value = "Open Sans";
    $("#saygreetinginput").css('font-family','Open Sans');
    $("#usernametools").css('font-family','Open Sans');
    $(".kalimatsilahkan").css('font-family','Open Sans');
    $(".list-itemdrg").css('font-family','Open Sans');
    $(".list-itemjadwal").css('font-family','Open Sans');
    $(".titlebuttoninfo").css('font-family','Open Sans');
    $(".titlebuttondrg").css('font-family','Open Sans');
    $(".titlebuttonscaling").css('font-family','Open Sans');
    $(".titlebuttontambal").css('font-family','Open Sans');
    $(".titlebuttonbedah").css('font-family','Open Sans');
    $(".titlebuttonbehel").css('font-family','Open Sans');
    $(".titlebuttongigitiruan").css('font-family','Open Sans');
    $(".titlebuttonbleaching").css('font-family','Open Sans');
    $(".titlebuttonveneer").css('font-family','Open Sans');
    $(".titlebuttonlainnya").css('font-family','Open Sans');
    $(".titleinfos").css('font-family','Open Sans');
    $(".readmore").css('font-family','Open Sans');
    $("#jawabannamapasien").css('font-family','Open Sans');
    $("#jawabanalamat").css('font-family','Open Sans');
    $("#jawabanjeniskelamin").css('font-family','Open Sans');
    $("#jawabanlayanan").css('font-family','Open Sans');
    $("#jawabantanggallahir").css('font-family','Open Sans');
    $("#jawabanumurangka").css('font-family','Open Sans');
    $("#jawabanumurtahunbulan").css('font-family','Open Sans');
    $("#jawabankeluhan").css('font-family','Open Sans');
    $("#jawabanalergi").css('font-family','Open Sans');
    $("#jawabanfotokeluhanz").css('font-family','Open Sans');
    $("#jawabanjadwal").css('font-family','Open Sans');
    $(".jawabanjams").css('font-family','Open Sans');
    $(".jawabanjamsdokter").css('font-family','Open Sans');
    $("#jawabanhp").css('font-family','Open Sans');
    $(".cancelmenuss").css('font-family','Open Sans');
    $("#cancelreservasi").css('font-family','Open Sans');
    $("#canceljudul").css('font-family','Open Sans');
    $(".bloknamadentist").css('font-family','Open Sans');
    $(".bloknamaMenu").css('font-family','Open Sans');
    $(".titledentist").css('font-family','Open Sans');
    $(".reservasi").css('font-family','Open Sans');
    $(".isiform").css('font-family','Open Sans');
    $(".yakinform").css('font-family','Open Sans');
    $(".kirimform").css('font-family','Open Sans');
    $(".suksesform").css('font-family','Open Sans');
    $(".gambarsuksesform").css('font-family','Open Sans');
    $(".gambarkiriminfo").css('font-family','Open Sans');
    $(".tulisankiriminfo").css('font-family','Open Sans');
    $("#googlemaps").css('font-family', 'Open Sans');
    $("#activity").css('font-family', 'Open Sans');

});

$("#checkboxfont4").on("click", function() {

    document.getElementById('fontstyle').value = "Source Serif Pro";
    $("#saygreetinginput").css('font-family','Source Serif Pro');
    $("#usernametools").css('font-family','Source Serif Pro');
    $(".kalimatsilahkan").css('font-family','Source Serif Pro');
    $(".list-itemdrg").css('font-family','Source Serif Pro');
    $(".list-itemjadwal").css('font-family','Source Serif Pro');
    $(".titlebuttoninfo").css('font-family','Source Serif Pro');
    $(".titlebuttondrg").css('font-family','Source Serif Pro');
    $(".titlebuttonscaling").css('font-family','Source Serif Pro');
    $(".titlebuttontambal").css('font-family','Source Serif Pro');
    $(".titlebuttonbedah").css('font-family','Source Serif Pro');
    $(".titlebuttonbehel").css('font-family','Source Serif Pro');
    $(".titlebuttongigitiruan").css('font-family','Source Serif Pro');
    $(".titlebuttonbleaching").css('font-family','Source Serif Pro');
    $(".titlebuttonveneer").css('font-family','Source Serif Pro');
    $(".titlebuttonlainnya").css('font-family','Source Serif Pro');
    $(".titleinfos").css('font-family','Source Serif Pro');
    $(".readmore").css('font-family','Source Serif Pro');
    $("#jawabannamapasien").css('font-family','Source Serif Pro');
    $("#jawabanalamat").css('font-family','Source Serif Pro');
    $("#jawabanjeniskelamin").css('font-family','Source Serif Pro');
    $("#jawabanlayanan").css('font-family','Source Serif Pro');
    $("#jawabantanggallahir").css('font-family','Source Serif Pro');
    $("#jawabanumurangka").css('font-family','Source Serif Pro');
    $("#jawabanumurtahunbulan").css('font-family','Source Serif Pro');
    $("#jawabankeluhan").css('font-family','Source Serif Pro');
    $("#jawabanalergi").css('font-family','Source Serif Pro');
    $("#jawabanfotokeluhanz").css('font-family','Source Serif Pro');
    $("#jawabanjadwal").css('font-family','Source Serif Pro');
    $(".jawabanjams").css('font-family','Source Serif Pro');
    $(".jawabanjamsdokter").css('font-family','Source Serif Pro');
    $("#jawabanhp").css('font-family','Source Serif Pro');
    $(".cancelmenuss").css('font-family','Source Serif Pro');
    $("#cancelreservasi").css('font-family','Source Serif Pro');
    $("#canceljudul").css('font-family','Source Serif Pro');
    $(".bloknamadentist").css('font-family','Source Serif Pro');
    $(".bloknamaMenu").css('font-family','Source Serif Pro');
    $(".titledentist").css('font-family','Source Serif Pro');
    $(".reservasi").css('font-family','Source Serif Pro');
    $(".isiform").css('font-family','Source Serif Pro');
    $(".yakinform").css('font-family','Source Serif Pro');
    $(".kirimform").css('font-family','Source Serif Pro');
    $(".suksesform").css('font-family','Source Serif Pro');
    $(".gambarsuksesform").css('font-family','Source Serif Pro');
    $(".gambarkiriminfo").css('font-family','Source Serif Pro');
    $(".tulisankiriminfo").css('font-family','Source Serif Pro');
    $("#googlemaps").css('font-family', 'Source Serif Pro');
    $("#activity").css('font-family', 'Source Serif Pro');

});

$("#checkboxmetode1").on("click", function() {

    document.getElementById('bentukbutton').value = "10px";
    document.getElementById('bentukbutton1').value = "11px";
    document.getElementById('bentukbutton2').value = "15px";
    document.getElementById('bentukbutton3').value = "7px";
    $("#drgbutton").css('border-radius','10px');
    $("#healthbutton").css('border-radius','10px');
    $("#groombutton").css('border-radius','10px');
    $("#hotelbutton").css('border-radius','10px');
    $("#pacakbutton").css('border-radius','10px');
    $("#adoptionbutton").css('border-radius','10px');
    $("#bleachbutton").css('border-radius','10px');
    $("#veneerbutton").css('border-radius','10px');
    $("#lainnyabutton").css('border-radius','10px');
    $(".blokimagedentist").css('border-radius','11px');
    $(".blokimageMenu").css('border-radius','11px');
    $("#logoprofile").css('border-radius','10px');
    $("#cekreservasi").css('border-radius','10px');
    $("#saygreetinginput").css('border-radius','7px');
    $(".borderlistz").css('border-radius','11px');
    $(".borderlistzpin").css('border-radius','11px');
    $(".list-item").css('border-radius','15px');
    $(".list-itempin").css('border-radius','15px');
    $(".list-itemdrg").css('border-radius','7px');
    $(".list-itemjadwal").css('border-radius','7px');
    $('.reservasi').css('border-radius', '7px');
    $('.isiform').css('border-radius', '7px');
    $('.yakinform').css('border-radius', '7px');
    $('.kirimform').css('border-radius', '7px');
    $('.suksesform').css('border-radius', '7px');
    $("#googlemaps").css('border-radius', '7px' );

});

$("#checkboxmetode2").on("click", function() {

    document.getElementById('bentukbutton').value = "100px";
    document.getElementById('bentukbutton1').value = "100px";
    document.getElementById('bentukbutton2').value = "100px";
    document.getElementById('bentukbutton3').value = "100px";
    $("#drgbutton").css('border-radius','100px');
    $("#healthbutton").css('border-radius','100px');
    $("#groombutton").css('border-radius','100px');
    $("#hotelbutton").css('border-radius','100px');
    $("#pacakbutton").css('border-radius','100px');
    $("#adoptionbutton").css('border-radius','100px');
    $("#bleachbutton").css('border-radius','100px');
    $("#veneerbutton").css('border-radius','100px');
    $("#lainnyabutton").css('border-radius','100px');
    $(".blokimagedentist").css('border-radius','100px');
    $(".blokimageMenu").css('border-radius','100px');
    $("#logoprofile").css('border-radius','100px');
    $("#cekreservasi").css('border-radius','100px');
    $("#saygreetinginput").css('border-radius','100px');
    $(".borderlistz").css('border-radius','100px');
    $(".borderlistzpin").css('border-radius','100px');
    $(".list-item").css('border-radius','100px');
    $(".list-itempin").css('border-radius','100px');
    $(".list-itemdrg").css('border-radius','100px');
    $(".list-itemjadwal").css('border-radius','100px');
    $('.reservasi').css('border-radius', '100px');
    $('.isiform').css('border-radius', '100px');
    $('.yakinform').css('border-radius', '100px');
    $('.kirimform').css('border-radius', '100px');
    $('.suksesform').css('border-radius', '100px');
    $("#googlemaps").css('border-radius', '100px' );

});

$("#checkboxmetode1s").on("click", function() {

    $('.klmpbutton').css('display', '');
    $('.drgbg').css('width', '48px');
    $('.drgbg').css('height', '48px');
    $('.drgbg').css('max-height', '48px');
    $('.drgbg').css('max-width', '48px');

    $('.scalingbg').css('width', '48px');
    $('.scalingbg').css('height', '48px');
    $('.scalingbg').css('max-height', '48px');
    $('.scalingbg').css('max-width', '48px');

    $('.tambalbg').css('width', '48px');
    $('.tambalbg').css('height', '48px');
    $('.tambalbg').css('max-height', '48px');
    $('.tambalbg').css('max-width', '48px');

    $('.bedahbg').css('width', '48px');
    $('.bedahbg').css('height', '48px');
    $('.bedahbg').css('max-height', '48px');
    $('.bedahbg').css('max-width', '48px');

    $('.behelbg').css('width', '48px');
    $('.behelbg').css('height', '48px');
    $('.behelbg').css('max-height', '48px');
    $('.behelbg').css('max-width', '48px');

    $('.gigitiruanbg').css('width', '48px');
    $('.gigitiruanbg').css('height', '48px');
    $('.gigitiruanbg').css('max-height', '48px');
    $('.gigitiruanbg').css('max-width', '48px');

    $('.bleachingbg').css('width', '48px');
    $('.bleachingbg').css('height', '48px');
    $('.bleachingbg').css('max-height', '48px');
    $('.bleachingbg').css('max-width', '48px');

    $('.veneerbg').css('width', '48px');
    $('.veneerbg').css('height', '48px');
    $('.veneerbg').css('max-height', '48px');
    $('.veneerbg').css('max-width', '48px');

    $('.lainnyabg').css('width', '48px');
    $('.lainnyabg').css('height', '48px');
    $('.lainnyabg').css('max-height', '48px');
    $('.lainnyabg').css('max-width', '48px');

    $('.titlebuttoninfo').css('margin-top', "0px");
    $('.titlebuttondrg').css('margin-left', '0px');
    $('.titlebuttondrg').css('margin-right', '0px');
    $('.titlebuttondrg').css('margin-top', '0px');
    $('.titlebuttondrg').css('margin-bottom', '0px');
    $('.titlebuttonscaling').css('margin-left', '0px');
    $('.titlebuttonscaling').css('margin-right', '0px');
    $('.titlebuttonscaling').css('margin-top', '0px');
    $('.titlebuttonscaling').css('margin-bottom', '0px');
    $('.titlebuttontambal').css('margin-left', '0px');
    $('.titlebuttontambal').css('margin-right', '0px');
    $('.titlebuttontambal').css('margin-top', '0px');
    $('.titlebuttontambal').css('margin-bottom', '0px');
    $('.titlebuttonbedah').css('margin-left', '0px');
    $('.titlebuttonbedah').css('margin-right', '0px');
    $('.titlebuttonbedah').css('margin-top', '0px');
    $('.titlebuttonbedah').css('margin-bottom', '0px');
    $('.titlebuttonbehel').css('margin-left', '0px');
    $('.titlebuttonbehel').css('margin-right', '0px');
    $('.titlebuttonbehel').css('margin-top', '0px');
    $('.titlebuttonbehel').css('margin-bottom', '0px');
    $('.titlebuttongigitiruan').css('margin-left', '0px');
    $('.titlebuttongigitiruan').css('margin-right', '0px');
    $('.titlebuttongigitiruan').css('margin-top', '0px');
    $('.titlebuttongigitiruan').css('margin-bottom', '0px');
    $('.titlebuttonbleaching').css('margin-left', '0px');
    $('.titlebuttonbleaching').css('margin-right', '0px');
    $('.titlebuttonbleaching').css('margin-top', '0px');
    $('.titlebuttonbleaching').css('margin-bottom', '0px');
    $('.titlebuttonveneer').css('margin-left', '0px');
    $('.titlebuttonveneer').css('margin-right', '0px');
    $('.titlebuttonveneer').css('margin-top', '0px');
    $('.titlebuttonveneer').css('margin-bottom', '0px');
    $('.titlebuttonlainnya').css('margin-left', '0px');
    $('.titlebuttonlainnya').css('margin-right', '0px');
    $('.titlebuttonlainnya').css('margin-top', '0px');
    $('.titlebuttonlainnya').css('margin-bottom', '0px');

    document.getElementById('drgbutton').className = "drgbutton1";
    document.getElementById('healthbutton').className = "healthbutton1";
    document.getElementById('groombutton').className = "groombutton1";
    document.getElementById('hotelbutton').className = "hotelbutton1";
    document.getElementById('pacakbutton').className = "pacakbutton1";
    document.getElementById('adoptionbutton').className = "adoptionbutton1";
    document.getElementById('bleachbutton').className = "bleachbutton1";
    document.getElementById('veneerbutton').className = "veneerbutton1";
    document.getElementById('lainnyabutton').className = "lainnyabutton1";

    document.getElementById('gambarbutton0').value = "drgbutton1";
    document.getElementById('gambarbutton1').value = "healthbutton1";
    document.getElementById('gambarbutton2').value = "groombutton1";
    document.getElementById('gambarbutton3').value = "hotelbutton1";
    document.getElementById('gambarbutton4').value = "pacakbutton1";
    document.getElementById('gambarbutton5').value = "adoptionbutton1";
    document.getElementById('gambarbutton6').value = "bleachbutton1";
    document.getElementById('gambarbutton7').value = "veneerbutton1";
    document.getElementById('gambarbutton8').value = "lainnyabutton1";

    document.getElementById('gambarbutton').value = "type 1";

});

$("#checkboxmetode1slist").on("click", function() {  

    $('.titlebuttondrg').css('margin-left', "auto");
    $('.titlebuttondrg').css('margin-right', "13px");
    $('.titlebuttondrg').css('margin-top', "13px");
    $('.titlebuttondrg').css('margin-bottom', "auto");
    $('.titlebuttonscaling').css('margin-left', "auto");
    $('.titlebuttonscaling').css('margin-right', "13px");
    $('.titlebuttonscaling').css('margin-top', "13px");
    $('.titlebuttonscaling').css('margin-bottom', "auto");
    $('.titlebuttontambal').css('margin-left', "auto");
    $('.titlebuttontambal').css('margin-right', "13px");
    $('.titlebuttontambal').css('margin-top', "13px");
    $('.titlebuttontambal').css('margin-bottom', "auto");
    $('.titlebuttonbedah').css('margin-left', "auto");
    $('.titlebuttonbedah').css('margin-right', "13px");
    $('.titlebuttonbedah').css('margin-top', "13px");
    $('.titlebuttonbedah').css('margin-bottom', "auto");
    $('.titlebuttonbehel').css('margin-left', "auto");
    $('.titlebuttonbehel').css('margin-right', "13px");
    $('.titlebuttonbehel').css('margin-top', "13px");
    $('.titlebuttonbehel').css('margin-bottom', "auto");
    $('.titlebuttongigitiruan').css('margin-left', "auto");
    $('.titlebuttongigitiruan').css('margin-right', "13px");
    $('.titlebuttongigitiruan').css('margin-top', "13px");
    $('.titlebuttongigitiruan').css('margin-bottom', "auto");
    $('.titlebuttonbleaching').css('margin-left', "auto");
    $('.titlebuttonbleaching').css('margin-right', "13px");
    $('.titlebuttonbleaching').css('margin-top', "13px");
    $('.titlebuttonbleaching').css('margin-bottom', "auto");
    $('.titlebuttonveneer').css('margin-left', "auto");
    $('.titlebuttonveneer').css('margin-right', "13px");
    $('.titlebuttonveneer').css('margin-top', "13px");
    $('.titlebuttonveneer').css('margin-bottom', "auto");
    $('.titlebuttonlainnya').css('margin-left', "auto");
    $('.titlebuttonlainnya').css('margin-right', "13px");
    $('.titlebuttonlainnya').css('margin-top', "13px");
    $('.titlebuttonlainnya').css('margin-bottom', "auto");

    $('.klmpbutton').css('display', 'flex');
    $('.drgbg').css('width', '40px');
    $('.drgbg').css('height', '40px');
    $('.drgbg').css('max-height', '40px');
    $('.drgbg').css('max-width', '40px');

    $('.scalingbg').css('width', '40px');
    $('.scalingbg').css('height', '40px');
    $('.scalingbg').css('max-height', '40px');
    $('.scalingbg').css('max-width', '40px');

    $('.tambalbg').css('width', '40px');
    $('.tambalbg').css('height', '40px');
    $('.tambalbg').css('max-height', '40px');
    $('.tambalbg').css('max-width', '40px');

    $('.bedahbg').css('width', '40px');
    $('.bedahbg').css('height', '40px');
    $('.bedahbg').css('max-height', '40px');
    $('.bedahbg').css('max-width', '40px');

    $('.behelbg').css('width', '40px');
    $('.behelbg').css('height', '40px');
    $('.behelbg').css('max-height', '40px');
    $('.behelbg').css('max-width', '40px');

    $('.gigitiruanbg').css('width', '40px');
    $('.gigitiruanbg').css('height', '40px');
    $('.gigitiruanbg').css('max-height', '40px');
    $('.gigitiruanbg').css('max-width', '40px');

    $('.bleachingbg').css('width', '40px');
    $('.bleachingbg').css('height', '40px');
    $('.bleachingbg').css('max-height', '40px');
    $('.bleachingbg').css('max-width', '40px');

    $('.veneerbg').css('width', '40px');
    $('.veneerbg').css('height', '40px');
    $('.veneerbg').css('max-height', '40px');
    $('.veneerbg').css('max-width', '40px');

    $('.lainnyabg').css('width', '40px');
    $('.lainnyabg').css('height', '40px');
    $('.lainnyabg').css('max-height', '40px');
    $('.lainnyabg').css('max-width', '40px');

    $('.titlebuttoninfo').css('margin-top', "14px");

    $('.healthbutton1list').css('padding-left', '13px');
    $('.hotelbutton1list').css('padding-left', '13px');

    document.getElementById('drgbutton').className = "drgbutton1list";
    document.getElementById('healthbutton').className = "healthbutton1list";
    document.getElementById('groombutton').className = "groombutton1list";
    document.getElementById('hotelbutton').className = "hotelbutton1list";
    document.getElementById('pacakbutton').className = "pacakbutton1list";
    document.getElementById('adoptionbutton').className = "adoptionbutton1list";
    document.getElementById('bleachbutton').className = "bleachbutton1list";
    document.getElementById('veneerbutton').className = "veneerbutton1list";
    document.getElementById('lainnyabutton').className = "lainnyabutton1list";

    document.getElementById('gambarbutton0').value = "drgbutton1list";
    document.getElementById('gambarbutton1').value = "healthbutton1list";
    document.getElementById('gambarbutton2').value = "groombutton1list";
    document.getElementById('gambarbutton3').value = "hotelbutton1list";
    document.getElementById('gambarbutton4').value = "pacakbutton1list";
    document.getElementById('gambarbutton5').value = "adoptionbutton1list";
    document.getElementById('gambarbutton6').value = "bleachbutton1list";
    document.getElementById('gambarbutton7').value = "veneerbutton1list";
    document.getElementById('gambarbutton8').value = "lainnyabutton1list";

    document.getElementById('gambarbutton').value = "type 1 list";

});

$("#checkboxmetode1ss").change(function() {

    if(this.checked) {
        $('#FB').show();
        $('#userfacebookz').slideDown(300);
        $(".switchmetodess").css({
            'border-bottom-left-radius':'0px',
            'border-bottom-right-radius':'0px'
        });
        document.getElementById('fbresult').value = "true";
    } else {
        $('#FB').hide();
        $('#userfacebookz').slideUp(300);
        $(".switchmetodess").css({
            'border-bottom-left-radius':'7px',
            'border-bottom-right-radius':'7px'
        });
        document.getElementById('fbresult').value = "";
    }

});

$("#checkboxmetode2ss").change(function() {

    if(this.checked) {
        $('#IG').show();
        $('#userinstagramz').slideDown(300);
        $(".switchmetode2ss").css({
            'border-bottom-left-radius':'0px',
            'border-bottom-right-radius':'0px'
        });
        document.getElementById('igresult').value = "true";
    } else {
        $('#IG').hide();
        $('#userinstagramz').slideUp(300);
        $(".switchmetode2ss").css({
            'border-bottom-left-radius':'7px',
            'border-bottom-right-radius':'7px'
        });
        document.getElementById('igresult').value = "";
    }

});

$("#checkboxmetode3ss").change(function() {

    if(this.checked) {
        $('#googlemaps').show();
        $('#containernamelokasi').css('padding-top', '0px');
        $(".switchmetode3ss").css({
            'border-bottom-left-radius':'0px',
            'border-bottom-right-radius':'0px'
        });
        $('#map').fadeIn(300);
        $('#usergooglemaps').fadeIn(300);
        $('#searchfieldz').fadeIn(300);
        $('#okgmaps').fadeIn(300);
        $('#kotakqq').slideDown(300);
        document.getElementById('gmapsresult').value = "true";
    } else {
        $('#googlemaps').hide();
        $('#containernamelokasi').css('padding-top', '50px');
        $(".switchmetode3ss").css({
            'border-bottom-left-radius':'7px',
            'border-bottom-right-radius':'7px'
        });
        $('#map').hide();
        $('#usergooglemaps').hide();
        $('#searchfieldz').hide();
        $('#okgmaps').hide();
        $('#kotakqq').slideUp(300);
        document.getElementById('gmapsresult').value = "";
    }

});

$("#checkboxmetode4ss").change(function() {

    if(this.checked) {
        $('#twitter').show();
        $('#usertwitterz').slideDown(300);
        $(".switchmetode4ss").css({
            'border-bottom-left-radius':'0px',
            'border-bottom-right-radius':'0px'
        });
        document.getElementById('twitterresult').value = "true";
    } else {
        $('#twitter').hide();
        $('#usertwitterz').slideUp(300);
        $(".switchmetode4ss").css({
            'border-bottom-left-radius':'7px',
            'border-bottom-right-radius':'7px'
        });
        document.getElementById('twitterresult').value = "";
    }

});

$("#checkboxmetode5ss").change(function() {

    if(this.checked) {
        $('#tiktok').show();
        $('#usertiktokz').slideDown(300);
        $(".switchmetode5ss").css({
            'border-bottom-left-radius':'0px',
            'border-bottom-right-radius':'0px'
        });
        document.getElementById('tiktokresult').value = "true";
    } else {
        $('#tiktok').hide();
        $('#usertiktokz').slideUp(300);
        $(".switchmetode5ss").css({
            'border-bottom-left-radius':'7px',
            'border-bottom-right-radius':'7px'
        });
        document.getElementById('tiktokresult').value = "";
    }

});

$("#checkboxmetode6ss").change(function() {

    if(this.checked) {
        $('#WA').show();
        $('#userwhatsappz').slideDown(300);
        $(".switchmetode6ss").css({
            'border-bottom-left-radius':'0px',
            'border-bottom-right-radius':'0px'
        });
        document.getElementById('waresult').value = "true";
    } else {
        $('#WA').hide();
        $('#userwhatsappz').slideUp(300);
        $(".switchmetode6ss").css({
            'border-bottom-left-radius':'7px',
            'border-bottom-right-radius':'7px'
        });
        document.getElementById('waresult').value = "";
    }

});

$("#userfacebook").on("input", function() {
    var c = this.selectionStart,
        r = /[@]/g, // Hanya simbol @ yang tidak diizinkan
        v = $(this).val();    
    if (r.test(v)) {
        $(this).val(v.replace(r, ''));
        c--;
    }
    this.setSelectionRange(c, c);
    var z = document.getElementById("userfacebook").value; 
    document.querySelector("#userfb").value = "https://www.facebook.com/"+z; 
    document.querySelector("#buttonzfb").href = "https://www.facebook.com/"+z ; 
});

$("#userinstagram").on("input", function() {
    var c = this.selectionStart,
        r = /[@]/g, // Hanya simbol @ yang tidak diizinkan
        v = $(this).val();    
    if (r.test(v)) {
        $(this).val(v.replace(r, ''));
        c--;
    }
    this.setSelectionRange(c, c);
    var z = document.getElementById("userinstagram").value; 
    document.querySelector("#userig").value = "https://www.instagram.com/"+z; 
    document.querySelector("#buttonzig").href = "https://www.instagram.com/"+z ; 
});

$("#usertwitter").on("input", function() {
    var c = this.selectionStart,
        r = /[@]/g, // Hanya simbol @ yang tidak diizinkan
        v = $(this).val();    
    if (r.test(v)) {
        $(this).val(v.replace(r, ''));
        c--;
    }
    this.setSelectionRange(c, c);
    var z = document.getElementById("usertwitter").value; 
    document.querySelector("#usertwt").value = "https://www.twitter.com/"+z; 
    document.querySelector("#buttonztwitter").href = "https://www.twitter.com/"+z ; 
});

$("#usertiktok").on("input", function() {
    var c = this.selectionStart,
        r = /[@]/g, // Hanya simbol @ yang tidak diizinkan
        v = $(this).val();    
    if (r.test(v)) {
        $(this).val(v.replace(r, ''));
        c--;
    }
    this.setSelectionRange(c, c);
    var z = document.getElementById("usertiktok").value; 
    document.querySelector("#usertt").value = "https://www.tiktok.com/@"+z; 
    document.querySelector("#buttonztiktok").href = "https://www.tiktok.com/@"+z ; 
});

$("#userwhatsapp").on("input", function() {
    var z = document.getElementById("userwhatsapp").value; 
    document.querySelector("#userwht").value = "https://wa.me/"+z; 
    document.querySelector("#buttonzwa").href = "https://wa.me/"+z ; 
});

$("#checkboxmetode1sz").on("click", function() {

    document.getElementById('FB').className = "fbdark";
    document.getElementById('IG').className = "igdark";
    document.getElementById('twitter').className = "twitterdark";
    document.getElementById('tiktok').className = "tiktokdark";
    document.getElementById('WA').className = "wadark";

    document.getElementById('gambarbuttonzz').value = "dark";

});

$("#checkboxmetode2sz").on("click", function() {

    document.getElementById('FB').className = "fblight";
    document.getElementById('IG').className = "iglight";
    document.getElementById('twitter').className = "twitterlight";
    document.getElementById('tiktok').className = "tiktoklight";
    document.getElementById('WA').className = "walight";

    document.getElementById('gambarbuttonzz').value = "light";

});

$("#checkboxmetode1ssx").change(function() {

    if(this.checked) {
        document.getElementById('hide1result').value = "hide";
        document.getElementById('buttonz1').style.display = "none";
    } else {
        document.getElementById('hide1result').value = "";
        document.getElementById('buttonz1').style.display = "";
    }

});

$("#checkboxmetode2ssx").change(function() {

    if(this.checked) {
        document.getElementById('hide2result').value = "hide";
        document.getElementById('buttonz2').style.display = "none";
    } else {
        document.getElementById('hide2result').value = "";
        document.getElementById('buttonz2').style.display = "";
    }

});

$("#checkboxmetode3ssx").change(function() {

    if(this.checked) {
        document.getElementById('hide3result').value = "hide";
        document.getElementById('buttonz3').style.display = "none";
    } else {
        document.getElementById('hide3result').value = "";
        document.getElementById('buttonz3').style.display = "";
    }

});

$("#checkboxmetode4ssx").change(function() {

    if(this.checked) {
        document.getElementById('hide4result').value = "hide";
        document.getElementById('buttonz4').style.display = "none";
    } else {
        document.getElementById('hide4result').value = "";
        document.getElementById('buttonz4').style.display = "";
    }

});

$("#checkboxmetode5ssx").change(function() {

    if(this.checked) {
        document.getElementById('hide5result').value = "hide";
        document.getElementById('buttonz5').style.display = "none";
    } else {
        document.getElementById('hide5result').value = "";
        document.getElementById('buttonz5').style.display = "";
    }

});

$("#checkboxmetode6ssx").change(function() {

    if(this.checked) {
        document.getElementById('hide6result').value = "hide";
        document.getElementById('buttonz6').style.display = "none";
    } else {
        document.getElementById('hide6result').value = "";
        document.getElementById('buttonz6').style.display = "";
    }

});

$("#checkboxmetode7ssx").change(function() {

    if(this.checked) {
        document.getElementById('hide7result').value = "hide";
        document.getElementById('buttonz7').style.display = "none";
    } else {
        document.getElementById('hide7result').value = "";
        document.getElementById('buttonz7').style.display = "";
    }

});

$("#checkboxmetode8ssx").change(function() {

    if(this.checked) {
        document.getElementById('hide8result').value = "hide";
        document.getElementById('buttonz8').style.display = "none";
    } else {
        document.getElementById('hide8result').value = "";
        document.getElementById('buttonz8').style.display = "";
    }

});

$("#checkboxmetode9ssx").change(function() {

    if(this.checked) {
        document.getElementById('hide9result').value = "hide";
        document.getElementById('buttonz9').style.display = "none";
    } else {
        document.getElementById('hide9result').value = "";
        document.getElementById('buttonz9').style.display = "";
    }

});

$("#checkboxsenin").change(function() {

    if(this.checked) {
        document.getElementById('inputsenin').value = "libur";
    } else {
        document.getElementById('inputsenin').value = "";
    }
    
});

$("#checkboxselasa").change(function() {

    if(this.checked) {
        document.getElementById('inputselasa').value = "libur";
    } else {
        document.getElementById('inputselasa').value = "";
    }

});

$("#checkboxrabu").change(function() {

    if(this.checked) {
        document.getElementById('inputrabu').value = "libur";
    } else {
        document.getElementById('inputrabu').value = "";
    }

});

$("#checkboxkamis").change(function() {

    if(this.checked) {
        document.getElementById('inputkamis').value = "libur";
    } else {
        document.getElementById('inputkamis').value = "";
    }

});

$("#checkboxjumat").change(function() {

    if(this.checked) {
        document.getElementById('inputjumat').value = "libur";
    } else {
        document.getElementById('inputjumat').value = "";
    }

});

$("#checkboxsabtu").change(function() {

    if(this.checked) {
        document.getElementById('inputsabtu').value = "libur";
    } else {
        document.getElementById('inputsabtu').value = "";
    }

});

$("#checkboxminggu").change(function() {

    if(this.checked) {
        document.getElementById('inputminggu').value = "libur";
    } else {
        document.getElementById('inputminggu').value = "";
    }

});

$("#resetlibur").click(function() {

    $(this).hide();
    $('#updatelibur').show();

    document.getElementById('checkboxsenin').checked = false ;
    $("#checkboxsenin").prop("disabled", false);
    document.getElementById('inputsenin').value = "";
    document.getElementById('checkboxselasa').checked = false ;
    $("#checkboxselasa").prop("disabled", false);
    document.getElementById('inputselasa').value = "";
    document.getElementById('checkboxrabu').checked = false ;
    $("#checkboxrabu").prop("disabled", false);
    document.getElementById('inputrabu').value = "";
    document.getElementById('checkboxkamis').checked = false ;
    $("#checkboxkamis").prop("disabled", false);
    document.getElementById('inputkamis').value = "";
    document.getElementById('checkboxjumat').checked = false ;
    $("#checkboxjumat").prop("disabled", false);
    document.getElementById('inputjumat').value = "";
    document.getElementById('checkboxsabtu').checked = false ;
    $("#checkboxsabtu").prop("disabled", false);
    document.getElementById('inputsabtu').value = "";
    document.getElementById('checkboxminggu').checked = false ;
    $("#checkboxminggu").prop("disabled", false);
    document.getElementById('inputminggu').value = "";
    $("#cutilibur").val('');

});