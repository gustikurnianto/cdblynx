function showNotification() {
    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            new Notification('Notifikasi', {
                body: 'Notifikasi diizinkan',
                icon: 'https://lh3.googleusercontent.com/pw/ADCreHeMyQNLrlCLBwq2ZjmyQWPN3PcPRTs2BYwAd95bSNoA8XKeTH1UXhthvd1rwsBnkoGLnMyehKpe0SjFku3EEhERwA-mvAXJKpnulZVq3UdG_KDawYI=w2400',
                badge: 'https://lh3.googleusercontent.com/pw/ADCreHf-YBEYd1qUrmGBkV5inxbzXHiCaFLT1YQ_0ssGTMpJkFsYGeUyZ_iyoCc-C1C7_qc01lNFM8m0MekdSj3cEp8Iywi5C2W7Nk_1y79VLu6MI6mBhgk=s41-p-k'
            });
        } else if (Notification.permission === 'denied') {
            alert("Notifikasi anda blokir, silahkan klik izinkan/reset permission dibagian kiri url : caredible.net/ -----> icon 🔒");
            $("#izinkan").show();
            $("#kirimkode").remove();
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(function (permission) {
                if (permission === 'granted') {
                    new Notification('Notifikasi', {
                        body: 'Notifikasi diizinkan',
                        icon: 'https://lh3.googleusercontent.com/pw/ADCreHeMyQNLrlCLBwq2ZjmyQWPN3PcPRTs2BYwAd95bSNoA8XKeTH1UXhthvd1rwsBnkoGLnMyehKpe0SjFku3EEhERwA-mvAXJKpnulZVq3UdG_KDawYI=w2400',
                        badge: 'https://lh3.googleusercontent.com/pw/ADCreHf-YBEYd1qUrmGBkV5inxbzXHiCaFLT1YQ_0ssGTMpJkFsYGeUyZ_iyoCc-C1C7_qc01lNFM8m0MekdSj3cEp8Iywi5C2W7Nk_1y79VLu6MI6mBhgk=s41-p-k'
                    });
                }
            });
        }
    }
}

document.getElementById('notifpushbrowser').addEventListener('click', function () {
    showNotification();
});

var gmbrbtn1 = document.querySelector('.checkbox1s');
var gmbrbtn1list = document.querySelector('.checkbox1slist');
var checkboxfont1 = document.querySelector('.checkboxfont1');
var checkboxfont2 = document.querySelector('.checkboxfont2');
var checkboxfont3 = document.querySelector('.checkboxfont3');
var checkboxfont4 = document.querySelector('.checkboxfont4');

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

$(document).on('click', '#htmlpdf', function(e){
    var datePdf = new Date();
    var dayListPdf = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var monthNamesPdf = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
    ];
    var dayNamePdf = dayListPdf[datePdf.getDay()];
    var monthNamePdf = monthNamesPdf[datePdf.getMonth()];
    var todayPDf = `${datePdf.getDate()}${monthNamePdf}${datePdf.getFullYear()}`;
    var timePdf = `${todayPDf}`;

    $('#loadingorder').show();
    $('.ktkimgRcdDone').hide();
    $('.ktkhubungiDone').hide();
    $('.tmblDeletesDone').hide();
    $('.wktDone').css('margin-top', '10px');
    $('.pinreservasiDone').css('margin-top', '0px');
    $('.pinreservasiDone').css('margin-bottom', '20px');
    setTimeout(function(){
        var element = document.getElementById('kotakInfoDone');
        var pdfOptions = {
            margin: [0.52, 0.7, 0.52, 0],
            filename: 'filedone' + timePdf + '.pdf',
            image: { type: 'jpeg', quality: 0.5 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' },
        };
        html2pdf(element, pdfOptions).from(element).toPdf().get('pdf').then(function (pdf) {
            $('#loadingorder').hide();
            $('.ktkimgRcdDone').show();
            $('.ktkhubungiDone').show();
            $('.tmblDeletesDone').show();
            $('.wktDone').css('margin-top', '37px');
            $('.pinreservasiDone').css('margin-top', '8px');
            $('.pinreservasiDone').css('margin-bottom', '0px');
        });
    }, 2000);     
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

    function filterRows() {
        let query = $.trim($('#searchnew').val().toUpperCase());
        setTimeout(function () {
            $('.ctnInfo').each(function () {
                let isilahjawabannamapasien = $(this).closest('.ctnInfo').find('#isilahjawabannamapasien').val().trim().toUpperCase();
                let isilahjawabanalamat = $(this).closest('.ctnInfo').find('#isilahjawabanalamat').val().trim().toUpperCase();
                let isilahjawabanjeniskelamin = $(this).closest('.ctnInfo').find('#isilahjawabanjeniskelamin').val().trim().toUpperCase();
                let isilahjawabantanggallahir = $(this).closest('.ctnInfo').find('#isilahjawabantanggallahir').val().trim().toUpperCase();
                let isilahjawabanumur = $(this).closest('.ctnInfo').find('#isilahjawabanumur').val().trim().toUpperCase();
                let isilahjawabankeluhan = $(this).closest('.ctnInfo').find('#isilahjawabankeluhan').val().trim().toUpperCase();
                let isilahjawabanalergi = $(this).closest('.ctnInfo').find('#isilahjawabanalergi').val().trim().toUpperCase();
                let isilahjawabanjadwal = $(this).closest('.ctnInfo').find('#isilahjawabanjadwal').val().trim().toUpperCase();
                let isilahjawabanjam = $(this).closest('.ctnInfo').find('#isilahjawabanjam').val().trim().toUpperCase();
                let isilahjawabanjamdokter = $(this).closest('.ctnInfo').find('#isilahjawabanjamdokter').val().trim().toUpperCase();
                let isilahjawabanhp = $(this).closest('.ctnInfo').find('#isilahjawabanhp').val().trim().toUpperCase();
                let judulreservasi = $(this).closest('.ctnInfo').find('#judulreservasi').val().trim().toUpperCase();
                let isilahWaktu = $(this).closest('.ctnInfo').find('#isilahWaktu').val().trim().toUpperCase();
                let pinreservasi = $(this).closest('.ctnInfo').find('#pinreservasi').val().trim().toUpperCase();
    
                if (isilahjawabannamapasien.indexOf(query) !== -1 || isilahjawabanalamat.indexOf(query) !== -1 || isilahjawabanjeniskelamin.indexOf(query) !== -1 || isilahjawabantanggallahir.indexOf(query) !== -1 || isilahjawabanumur.indexOf(query) !== -1 || isilahjawabankeluhan.indexOf(query) !== -1 || isilahjawabanalergi.indexOf(query) !== -1 || isilahjawabanjadwal.indexOf(query) !== -1 || isilahjawabanjam.indexOf(query) !== -1 || isilahjawabanjamdokter.indexOf(query) !== -1 || isilahjawabanhp.indexOf(query) !== -1 || judulreservasi.indexOf(query) !== -1 || isilahWaktu.indexOf(query) !== -1 || pinreservasi.indexOf(query) !== -1 ) {
                    $(this).closest('.ctnInfo').show();
                } else {
                    $(this).closest('.ctnInfo').hide();
                } 
    
                if($('#kotakInfo').children(':visible').length == 0) {
                    $('.kosong').show();
                } else {
                    $('.kosong').hide();  
                } 
            });
        }, 500);
    };
    
    $('#searchnew').on('input click', filterRows);

    function filterRowsDone() {
        let queryDone = $.trim($('#searchdone').val().toUpperCase());
        setTimeout(function () {
            $('.ctnInfoDone').each(function () {
                let isilahjawabannamapasienDone = $(this).closest('.ctnInfoDone').find('#isilahjawabannamapasienDone').val().trim().toUpperCase();
                let isilahjawabanalamatDone = $(this).closest('.ctnInfoDone').find('#isilahjawabanalamatDone').val().trim().toUpperCase();
                let isilahjawabanjeniskelaminDone = $(this).closest('.ctnInfoDone').find('#isilahjawabanjeniskelaminDone').val().trim().toUpperCase();
                let isilahjawabantanggallahirDone = $(this).closest('.ctnInfoDone').find('#isilahjawabantanggallahirDone').val().trim().toUpperCase();
                let isilahjawabanumurDone = $(this).closest('.ctnInfoDone').find('#isilahjawabanumurDone').val().trim().toUpperCase();
                let isilahjawabankeluhanDone = $(this).closest('.ctnInfoDone').find('#isilahjawabankeluhanDone').val().trim().toUpperCase();
                let isilahjawabanalergiDone = $(this).closest('.ctnInfoDone').find('#isilahjawabanalergiDone').val().trim().toUpperCase();
                let isilahjawabanjadwalDone = $(this).closest('.ctnInfoDone').find('#isilahjawabanjadwalDone').val().trim().toUpperCase();
                let isilahjawabanjamDone = $(this).closest('.ctnInfoDone').find('#isilahjawabanjamDone').val().trim().toUpperCase();
                let isilahjawabanjamdokterdone = $(this).closest('.ctnInfoDone').find('#isilahjawabanjamdokterdone').val().trim().toUpperCase();
                let isilahjawabanhpDone = $(this).closest('.ctnInfoDone').find('#isilahjawabanhpDone').val().trim().toUpperCase();
                let judulreservasiDone = $(this).closest('.ctnInfoDone').find('#judulreservasiDone').val().trim().toUpperCase();
                let isilahWaktuDone = $(this).closest('.ctnInfoDone').find('#isilahWaktuDone').val().trim().toUpperCase();
                let pinreservasiDone = $(this).closest('.ctnInfoDone').find('#pinreservasiDone').val().trim().toUpperCase();
    
                if (isilahjawabannamapasienDone.indexOf(queryDone) !== -1 || isilahjawabanalamatDone.indexOf(queryDone) !== -1 || isilahjawabanjeniskelaminDone.indexOf(queryDone) !== -1 || isilahjawabantanggallahirDone.indexOf(queryDone) !== -1 || isilahjawabanumurDone.indexOf(queryDone) !== -1 || isilahjawabankeluhanDone.indexOf(queryDone) !== -1 || isilahjawabanalergiDone.indexOf(queryDone) !== -1 || isilahjawabanjadwalDone.indexOf(queryDone) !== -1 || isilahjawabanjamDone.indexOf(queryDone) !== -1 || isilahjawabanjamdokterdone.indexOf(queryDone) !== -1 || isilahjawabanhpDone.indexOf(queryDone) !== -1 || judulreservasiDone.indexOf(queryDone) !== -1 || isilahWaktuDone.indexOf(queryDone) !== -1 || pinreservasiDone.indexOf(queryDone) !== -1 ) {
                    $(this).closest('.ctnInfoDone').show();
                } else {
                    $(this).closest('.ctnInfoDone').hide();
                }
    
                if($('#kotakInfoDone').children(':visible').length == 0) {
                    $('.kosong').show();
                } else {
                    $('.kosong').hide();  
                } 
            });
        }, 500);
    };
    
    $('#searchdone').on('input', filterRowsDone);

    $(document).ready(function(){
        $("#searchnew").blur(function() {
            if(!$(this).val()){
                $('#clearz').hide();
                $('#searchnew').css({ "background-image" : "url('https://lh3.googleusercontent.com/NB_rp1kR9Zum_QsP5SRQMmKQln9UkqGL6-BCctn4kB1-_LZUQExqZjL-UQgZCz6ztrw1qwFaCJhK5fjO4UFim4GRIHgqP9ZKpe22bfOpLY3tB9MWxNPPl5yPhoWh4NTaTU6rrAHMxA=w2400')" });
            }
        })
    });
    
    $(document).ready(function(){
        $("#searchdone").blur(function() {
            if(!$(this).val()){
                $('#clearz').hide();
                $('#searchdone').css({ "background-image" : "url('https://lh3.googleusercontent.com/IZXXpwa87kV1O3BJXdITPnPDAV18no_Erll5N9XqTKDfUhJL87LbvhtSEBtKaH5W5HYS54nnEDksn42EWje5wg3eJL_VtuBhLd8J_5nBSEKcLfAzv7PmRm92IxYMBzfGagkDvalgYg=w2400')" });
            }
        })
    });

    function showDateTime() {
        var myDiv = document.getElementById("waktu");
    
        var date = new Date();
        var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ];
        var dayName = dayList[date.getDay()];
        var monthName = monthNames[date.getMonth()];
        var today = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;
    
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
    
        var time = hour + ":" + min + ":" + sec;
        myDiv.value = `${today}. Time is ${time}`;
      }
      setInterval(showDateTime, 1000);

      $('#searchnew').click(function() {
        $('#clearz').show();  
        $('#clearz').css('left', "60px");
        $('#searchnew').css({ "background-image" : "url('')" });
    });
    
    $('#buttontodaynew').click(function() {
        var datePdf = new Date();
        var DayNamesPdf = datePdf.getDate();
        if (DayNamesPdf < 10) {
            DayNamesPdf = '0'+DayNamesPdf;
        }
        var monthNamesPdf = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
        ];
        var monthNamePdf = monthNamesPdf[datePdf.getMonth()];
        var todayPDf = `${DayNamesPdf} ${monthNamePdf} ${datePdf.getFullYear()}`;
        var timePdf = `${todayPDf}`;
        document.getElementById('searchnew').value = timePdf;
        $('#clearz').show();  
        $('#searchnew').trigger('click');
        $('#searchnew').css({ "background-image" : "url('')" });
    });
    
    $('#searchdone').click(function() {
        $('#clearz').show();  
        $('#clearz').css('left', "131px");
        $('#searchdone').css({ "background-image" : "url('')" });
    });
    
    $('#clearz').click(function() {
        $('#clearz').hide();
        $('.kosong').hide();
        $('#searchnew').val("");
        $('#searchdone').val("");
        $('.ctnInfo').slideDown(400);
        $('.ctnInfoDone').slideDown(400);
        $('#searchnew').css({ "background-image" : "url('https://lh3.googleusercontent.com/NB_rp1kR9Zum_QsP5SRQMmKQln9UkqGL6-BCctn4kB1-_LZUQExqZjL-UQgZCz6ztrw1qwFaCJhK5fjO4UFim4GRIHgqP9ZKpe22bfOpLY3tB9MWxNPPl5yPhoWh4NTaTU6rrAHMxA=w2400')" });
        $('#searchdone').css({ "background-image" : "url('https://lh3.googleusercontent.com/IZXXpwa87kV1O3BJXdITPnPDAV18no_Erll5N9XqTKDfUhJL87LbvhtSEBtKaH5W5HYS54nnEDksn42EWje5wg3eJL_VtuBhLd8J_5nBSEKcLfAzv7PmRm92IxYMBzfGagkDvalgYg=w2400')" });
        if($('#kotakInfo').children(':visible').length > 0) {
            $('#emptyiconkotakInfo').hide();
        }
        if($('#kotakInfoDone').children(':visible').length > 0) {
            $('#emptyiconkotakInfoDone').hide();
        }
        return false;
    });

    var modalreservasi = document.getElementById('modalreservasi');
    var newanddone = document.getElementById('newanddone');

    var modalClosereservasi = document.getElementById('closereservasi');
    modalClosereservasi.addEventListener('click', function() { 
        modalreservasi.style.display = "none";
        $('#newanddone').show();
        $('#menutools').show();
    });

    document.addEventListener('click', function (e) { 
        if (e.target.className.indexOf('imgRcdclass') !== -1) {
            var imgreservasi = e.target;
            var modalImgreservasi = document.getElementById("contentreservasi");
            modalreservasi.style.display = "block";
            modalImgreservasi.src = imgreservasi.src;
            $('#newanddone').hide();
            $('#menutools').hide();
        }
    });

    document.addEventListener('click', function (e) { 
        if (e.target.className.indexOf('imgRcdclassDone') !== -1) {
            var imgreservasi = e.target;
            var modalImgreservasi = document.getElementById("contentreservasi");
            modalreservasi.style.display = "block";
            modalImgreservasi.src = imgreservasi.src;
            $('#newanddone').hide();
            $('#menutools').hide();
        }
    });

    let input = document.getElementById('inputnich');

    WIDTH = 800;

    input.addEventListener("change", (event) => {
        let image_file = event.target.files[0];

        console.log("Original File", image_file)

        let reader = new FileReader();

        reader.readAsDataURL(image_file);

        reader.onload = (event) => {

            highimg = document.querySelector('.highimg');
            highimg.src = event.target.result;

            image_url = event.target.result;
            let image = document.createElement('img');
            image.src = image_url;

            image.onload = (e) => {

                let canvas = document.createElement('canvas');
                let ratio = WIDTH / image.width;
                canvas.width = WIDTH;
                canvas.height = image.height * ratio;
                canvas.id = 'canvas';
                canvas.style.display = "none";

                let context = canvas.getContext('2d');
                context.drawImage(image, 0, 0, canvas.width, canvas.height);

                let new_image_url = canvas.toDataURL('image/jpeg', 98);

                // console.log("Image URL: ", new_image_url)

                let image_file = urlToFile(new_image_url);

                var wrapper = document.getElementById('wrapper');

                wrapper.append(canvas);

                document.getElementById('containerhighlightz').style.display = "block";

                document.getElementById('modalhighlight').style.display = "block";

                document.getElementById('upbtnzzhighlightz').style.display = "block";

                document.getElementById('wrapper').style.marginTop = "10px";

                document.querySelector('#emptyiconhighlightz').style.display = "none";

            } 
        }
    })

    let urlToFile = (url) => {

        let arr = url.split(",");
        // console.log(arr)
        let mime = arr[0].match(/:(.*?);/)[1];
        let data = arr[1];

        let dataStr = atob(data);
        let n = dataStr.length;
        let dataArr = new Uint8Array(n);

        while(n--)
        {
            dataArr[n] = dataStr.charCodeAt(n)
        };

        let file  = new File([dataArr], 'File.jpg', {type: mime});

        var dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        var fileInput = document.querySelector('#inputnyah');
        fileInput.files = dataTransfer.files;

        var databaseuname = ptsft;
        var nomorhlgt =  document.getElementById('nomorhlgt').value;
        var inputnich = document.querySelector('#inputnyah');
        var filesss = inputnich.files[0];
        var namebox = document.querySelector('#nameboxxhighlightz');
        namebox.value = databaseuname+"Highlight"+nomorhlgt;

        return file;

    }

    $('#closehighlight').click(function(){
        $("#modalhighlight").hide();
        $("#containerhighlightz").hide();
        var highimgdelete = document.querySelector('.highimg');
        highimgdelete.src = "";
        var inputnichz = document.querySelector('#inputnich');
        var inputnyahz = document.querySelector('#inputnyah');
        inputnichz.value = "";
        inputnyahz.value = "";
    });

let inputkeluhan = document.getElementById('jawabanfotokeluhan');

    WIDTH = 800;

    inputkeluhan.addEventListener("change", (eventkeluhan) => {
        let image_keluhan = eventkeluhan.target.files[0];

        console.log("Original File", image_keluhan)

        let readerkeluhan = new FileReader();

        readerkeluhan.readAsDataURL(image_keluhan);

        readerkeluhan.onload = (eventkeluhan) => {

            image_url_keluhan = eventkeluhan.target.result;
            let imagekeluhan = document.createElement('img');
            imagekeluhan.src = image_url_keluhan;

            imagekeluhan.onload = (e) => {

                let canvas = document.createElement('canvas');
                let ratio = WIDTH / imagekeluhan.width;
                canvas.width = WIDTH;
                canvas.height = imagekeluhan.height * ratio;
                canvas.id = 'canvaskeluhan';
                canvas.style.display = "none";

                let context = canvas.getContext('2d');
                context.drawImage(imagekeluhan, 0, 0, canvas.width, canvas.height);

                let new_image_url_keluhan = canvas.toDataURL('image/jpeg', 98);

                // console.log("Image URL: ", new_image_url_keluhan)

                let image_keluhan = urlToFileKeluhan(new_image_url_keluhan);

                var wrapperkeluhan = document.getElementById('wrapperkeluhan');

                document.getElementById('wrapperkeluhan').style.display = "block";

                wrapperkeluhan.append(canvas);

            } 
        }
    })

    let urlToFileKeluhan = (url) => {

        let arr = url.split(",");
        // console.log(arr)
        let mime = arr[0].match(/:(.*?);/)[1];
        let data = arr[1];

        let dataStr = atob(data);
        let n = dataStr.length;
        let dataArr = new Uint8Array(n);

        while(n--)
        {
            dataArr[n] = dataStr.charCodeAt(n)
        };

        let filekeluhan  = new File([dataArr], 'FotoKeluhan.jpg', {type: mime});

        var dataTransfer = new DataTransfer();
        dataTransfer.items.add(filekeluhan);

        var fileInput = document.querySelector('#jawabanfotonya');
        fileInput.files = dataTransfer.files;

        var databaseuname = ptsft;
        var nomorreservasi =  document.getElementById('nomorreservasi').value;
        var jawabanfotokeluhan = document.querySelector('#jawabanfotonya');
        var filessskeluhan = jawabanfotokeluhan.files[0];
        var nameboxkeluhan = document.querySelector('#nameboxxkeluhan');
        nameboxkeluhan.value = databaseuname+"Keluhan"+nomorreservasi;

        let readerkeluhanz = new FileReader();

        readerkeluhanz.readAsDataURL(filessskeluhan);

        readerkeluhanz.onload = (eventkeluhanz) => {

            var highimgkeluhan = document.querySelector('.highimgkeluhan');
            highimgkeluhan.src = eventkeluhanz.target.result;

            $('#jawabanfotokeluhanz').text('ubah foto keluhan');
                
        } 

        return filekeluhan;

    }
    
    $('#selbtn').click(function(){
        $("#fotoInputProfilez").trigger('click');
    });
    
    let inputInputProfile = document.getElementById('fotoInputProfilez');
    
    WIDTH = 800;
    
    inputInputProfile.addEventListener("change", (eventInputProfile) => {
        let image_InputProfile = eventInputProfile.target.files[0];
    
        console.log("Original File", image_InputProfile)
    
        let readerInputProfile = new FileReader();
    
        readerInputProfile.readAsDataURL(image_InputProfile);
    
        readerInputProfile.onload = (eventInputProfile) => {
    
            highimgInputProfile = document.querySelector('.highimgInputProfile');
            highimgInputProfile.src = eventInputProfile.target.result;
    
            image_url_InputProfile = eventInputProfile.target.result;
            let imageInputProfile = document.createElement('img');
            imageInputProfile.src = image_url_InputProfile;
    
            imageInputProfile.onload = (e) => {
    
                let canvasInputProfile = document.createElement('canvas');
                let ratio = WIDTH / imageInputProfile.width;
                canvasInputProfile.width = WIDTH;
                canvasInputProfile.height = imageInputProfile.height * ratio;
                canvasInputProfile.id = 'canvasInputProfile';
                canvasInputProfile.style.display = "none";
    
                let context = canvasInputProfile.getContext('2d');
                context.drawImage(imageInputProfile, 0, 0, canvasInputProfile.width, canvasInputProfile.height);
    
                let new_image_url_InputProfile = canvasInputProfile.toDataURL('image/jpeg', 98);
    
                // console.log("Image URL: ", new_image_url_InputProfile)
    
                let image_InputProfile = urlToFileInputProfile(new_image_url_InputProfile);
    
                var wrapperInputProfile = document.getElementById('wrapperInputProfile');
    
                wrapperInputProfile.append(canvasInputProfile);
    
                $('#kotakpreview').css('background-image', 'url('+eventInputProfile.target.result +')');
                $('#logoprofile').css('background-image', 'url('+eventInputProfile.target.result +')');
                $('#logoprofile').css('background-image', 'url('+eventInputProfile.target.result +')');
                $('#gambareditthetools1').css('background-image', 'url('+eventInputProfile.target.result +')');
                $('#gambareditthetools2').css('background-image', 'url('+eventInputProfile.target.result +')');
                $('#selbtn').css('border-top-left-radius', '8px');
                $('#selbtn').css('border-top-right-radius', '8px');
                $('#selbtn').css('border-bottom-left-radius', '0px');
                $('#selbtn').css('border-bottom-right-radius', '0px');
                $('#selbtn').css('border-bottom', '0.25px solid white');
                $('#upbtn').css('border-top-left-radius', '0px');
                $('#upbtn').css('border-top-right-radius', '0px');
                $('#upbtn').css('border-bottom-left-radius', '8px');
                $('#upbtn').css('border-bottom-right-radius', '8px');
                $('#upbtn').css('border-top', '0.25px solid white');
                $('#upbtn').show();
    
            } 
        }
    })
    
    let urlToFileInputProfile = (url) => {
    
        let arr = url.split(",");
        // console.log(arr)
        let mime = arr[0].match(/:(.*?);/)[1];
        let data = arr[1];
    
        let dataStr = atob(data);
        let n = dataStr.length;
        let dataArr = new Uint8Array(n);
    
        while(n--)
        {
            dataArr[n] = dataStr.charCodeAt(n)
        };
    
        let fileInputProfile  = new File([dataArr], 'FotoInputProfile.jpg', {type: mime});
    
        var dataTransfer = new DataTransfer();
        dataTransfer.items.add(fileInputProfile);
    
        var fileInput = document.querySelector('#fotoInputProfilezx');
        fileInput.files = dataTransfer.files;
    
        var databaseuname = ptsft;
        var jawabanfotoInputProfile = document.querySelector('#fotoInputProfilezx');
        var filesssInputProfile = jawabanfotoInputProfile.files[0];
        var nameboxInputProfile = document.querySelector('#nameboxxInputProfile');
        nameboxInputProfile.value = databaseuname+"InputProfile";
    
        return fileInputProfile;
    
    }
    
    $('#selbtnzz').click(function(){
        $("#fotoInputBioz").trigger('click');
    });
    
    let inputInputBio = document.getElementById('fotoInputBioz');
    
    WIDTH = 800;
    
    inputInputBio.addEventListener("change", (eventInputBio) => {
        let image_InputBio = eventInputBio.target.files[0];
    
        console.log("Original File", image_InputBio)
    
        let readerInputBio = new FileReader();
    
        readerInputBio.readAsDataURL(image_InputBio);
    
        readerInputBio.onload = (eventInputBio) => {
    
            highimgInputBio = document.querySelector('.highimgInputBio');
            highimgInputBio.src = eventInputBio.target.result;
    
            image_url_InputBio = eventInputBio.target.result;
            let imageInputBio = document.createElement('img');
            imageInputBio.src = image_url_InputBio;
    
            imageInputBio.onload = (e) => {
    
                let canvasInputBio = document.createElement('canvas');
                let ratio = WIDTH / imageInputBio.width;
                canvasInputBio.width = WIDTH;
                canvasInputBio.height = imageInputBio.height * ratio;
                canvasInputBio.id = 'canvasInputBio';
                canvasInputBio.style.display = "none";
    
                let context = canvasInputBio.getContext('2d');
                context.drawImage(imageInputBio, 0, 0, canvasInputBio.width, canvasInputBio.height);
    
                let new_image_url_InputBio = canvasInputBio.toDataURL('image/jpeg', 98);
    
                // console.log("Image URL: ", new_image_url_InputBio)
    
                let image_InputBio = urlToFileInputBio(new_image_url_InputBio);
    
                var wrapperInputBio = document.getElementById('wrapperInputBio');
    
                wrapperInputBio.append(canvasInputBio);
    
                $('#kotakpreviewz').css('background-image', 'url('+eventInputBio.target.result +')');
                $('.ktksilahkan').css('background-image', 'url('+eventInputBio.target.result +')');
                $('#selbtnzz').css('border-top-left-radius', '8px');
                $('#selbtnzz').css('border-top-right-radius', '8px');
                $('#selbtnzz').css('border-bottom-left-radius', '0px');
                $('#selbtnzz').css('border-bottom-right-radius', '0px');
                $('#selbtnzz').css('border-bottom', '0.25px solid white');
                $('#upbtnzz').css('border-top-left-radius', '0px');
                $('#upbtnzz').css('border-top-right-radius', '0px');
                $('#upbtnzz').css('border-bottom-left-radius', '8px');
                $('#upbtnzz').css('border-bottom-right-radius', '8px');
                $('#upbtnzz').css('border-top', '0.25px solid white');
                $('#upbtnzz').show();
    
            } 
        }
    })
    
    let urlToFileInputBio = (url) => {
    
        let arr = url.split(",");
        // console.log(arr)
        let mime = arr[0].match(/:(.*?);/)[1];
        let data = arr[1];
    
        let dataStr = atob(data);
        let n = dataStr.length;
        let dataArr = new Uint8Array(n);
    
        while(n--)
        {
            dataArr[n] = dataStr.charCodeAt(n)
        };
    
        let fileInputBio  = new File([dataArr], 'FotoInputBio.jpg', {type: mime});
    
        var dataTransfer = new DataTransfer();
        dataTransfer.items.add(fileInputBio);
    
        var fileInput = document.querySelector('#fotoInputBiozx');
        fileInput.files = dataTransfer.files;
    
        var databaseuname = ptsft;
        var jawabanfotoInputBio = document.querySelector('#fotoInputBiozx');
        var filesssInputBio = jawabanfotoInputBio.files[0];
        var nameboxInputBio = document.querySelector('#nameboxxInputBio');
        nameboxInputBio.value = databaseuname+"InputBio";
    
        return fileInputBio;
    
    }
    
$('#inputBG').click(function(){
    $("#fotoInputBGz").trigger('click');
});

let inputInputBG = document.getElementById('fotoInputBGz');

WIDTH = 800;

inputInputBG.addEventListener("change", (eventInputBG) => {
    let image_InputBG = eventInputBG.target.files[0];

    console.log("Original File", image_InputBG)

    let readerInputBG = new FileReader();

    readerInputBG.readAsDataURL(image_InputBG);

    readerInputBG.onload = (eventInputBG) => {

        highimgInputBG = document.querySelector('.highimgInputBG');
        highimgInputBG.src = eventInputBG.target.result;

        $("body").css('background-image', 'url('+eventInputBG.target.result +')');
        $("body").css('background-size', 'cover');
        $("body").css('background-repeat', 'no-repeat');
        $("body").css('background-attachment', 'fixed');

        image_url_InputBG = eventInputBG.target.result;
        let imageInputBG = document.createElement('img');
        imageInputBG.src = image_url_InputBG;

        imageInputBG.onload = (e) => {

            let canvasInputBG = document.createElement('canvas');
            let ratio = WIDTH / imageInputBG.width;
            canvasInputBG.width = WIDTH;
            canvasInputBG.height = imageInputBG.height * ratio;
            canvasInputBG.id = 'canvasInputBG';
            canvasInputBG.style.display = "none";

            let context = canvasInputBG.getContext('2d');
            context.drawImage(imageInputBG, 0, 0, canvasInputBG.width, canvasInputBG.height);

            let new_image_url_InputBG = canvasInputBG.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_InputBG)

            let image_InputBG = urlToFileInputBG(new_image_url_InputBG);

            var wrapperInputBG = document.getElementById('wrapperInputBG');

            wrapperInputBG.append(canvasInputBG);

            $('#ktkInputBG').show();
            $('#uploadfotoInputBG').show();

        } 
    }
})

let urlToFileInputBG = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let fileInputBG  = new File([dataArr], 'FotoInputBG.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(fileInputBG);

    var fileInput = document.querySelector('#fotoInputBGzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var jawabanfotoInputBG = document.querySelector('#fotoInputBGzx');
    var filesssInputBG = jawabanfotoInputBG.files[0];
    var nameboxInputBG = document.querySelector('#nameboxxInputBG');
    nameboxInputBG.value = databaseuname+"InputBG";

    return fileInputBG;

}

let inputdentist = document.getElementById('fotodentistz');

WIDTH = 800;

inputdentist.addEventListener("change", (eventdentist) => {
    let image_dentist = eventdentist.target.files[0];

    console.log("Original File", image_dentist)

    let readerdentist = new FileReader();

    readerdentist.readAsDataURL(image_dentist);

    readerdentist.onload = (eventdentist) => {

        $('.fotodentist').css('background-image', 'url('+eventdentist.target.result +')');

        image_url_dentist = eventdentist.target.result;
        let imagedentist = document.createElement('img');
        imagedentist.src = image_url_dentist;

        imagedentist.onload = (e) => {

            let canvasdentist = document.createElement('canvas');
            let ratio = WIDTH / imagedentist.width;
            canvasdentist.width = WIDTH;
            canvasdentist.height = imagedentist.height * ratio;
            canvasdentist.id = 'canvasdentist';
            canvasdentist.style.display = "none";

            let context = canvasdentist.getContext('2d');
            context.drawImage(imagedentist, 0, 0, canvasdentist.width, canvasdentist.height);

            let new_image_url_dentist = canvasdentist.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_dentist)

            let image_dentist = urlToFiledentist(new_image_url_dentist);

            var wrapperdentist = document.getElementById('wrapperdentist');

            wrapperdentist.append(canvasdentist);

        } 
    }
})

let urlToFiledentist = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let filedentist  = new File([dataArr], 'Fotodentist.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(filedentist);

    var fileInput = document.querySelector('#fotodentistzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomordentist =  document.getElementById('nomordentist').value;
    var jawabanfotodentist = document.querySelector('#fotodentistzx');
    var filesssdentist = jawabanfotodentist.files[0];
    var nameboxdentist = document.querySelector('#nameboxxdentist');
    nameboxdentist.value = databaseuname+"dentist"+nomordentist;

    return filedentist;

}

let inputscaling = document.getElementById('fotoscalingz');

WIDTH = 800;

inputscaling.addEventListener("change", (eventscaling) => {
    let image_scaling = eventscaling.target.files[0];

    console.log("Original File", image_scaling)

    let readerscaling = new FileReader();

    readerscaling.readAsDataURL(image_scaling);

    readerscaling.onload = (eventscaling) => {

        $('#fotoscaling').css('background-image', 'url('+eventscaling.target.result +')');

        image_url_scaling = eventscaling.target.result;
        let imagescaling = document.createElement('img');
        imagescaling.src = image_url_scaling;

        imagescaling.onload = (e) => {

            let canvasscaling = document.createElement('canvas');
            let ratio = WIDTH / imagescaling.width;
            canvasscaling.width = WIDTH;
            canvasscaling.height = imagescaling.height * ratio;
            canvasscaling.id = 'canvasscaling';
            canvasscaling.style.display = "none";

            let context = canvasscaling.getContext('2d');
            context.drawImage(imagescaling, 0, 0, canvasscaling.width, canvasscaling.height);

            let new_image_url_scaling = canvasscaling.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_scaling)

            let image_scaling = urlToFilescaling(new_image_url_scaling);

            var wrapperscaling = document.getElementById('wrapperscaling');

            wrapperscaling.append(canvasscaling);

        } 
    }
})

let urlToFilescaling = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let filescaling  = new File([dataArr], 'Fotoscaling.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(filescaling);

    var fileInput = document.querySelector('#fotoscalingzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomorscaling =  document.getElementById('nomorscaling').value;
    var jawabanfotoscaling = document.querySelector('#fotoscalingzx');
    var filesssscaling = jawabanfotoscaling.files[0];
    var nameboxscaling = document.querySelector('#nameboxxscaling');
    nameboxscaling.value = databaseuname+"scaling"+nomorscaling;

    return filescaling;

}

let inputtambal = document.getElementById('fototambalz');

WIDTH = 800;

inputtambal.addEventListener("change", (eventtambal) => {
    let image_tambal = eventtambal.target.files[0];

    console.log("Original File", image_tambal)

    let readertambal = new FileReader();

    readertambal.readAsDataURL(image_tambal);

    readertambal.onload = (eventtambal) => {

        $('#fototambal').css('background-image', 'url('+eventtambal.target.result +')');

        image_url_tambal = eventtambal.target.result;
        let imagetambal = document.createElement('img');
        imagetambal.src = image_url_tambal;

        imagetambal.onload = (e) => {

            let canvastambal = document.createElement('canvas');
            let ratio = WIDTH / imagetambal.width;
            canvastambal.width = WIDTH;
            canvastambal.height = imagetambal.height * ratio;
            canvastambal.id = 'canvastambal';
            canvastambal.style.display = "none";

            let context = canvastambal.getContext('2d');
            context.drawImage(imagetambal, 0, 0, canvastambal.width, canvastambal.height);

            let new_image_url_tambal = canvastambal.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_tambal)

            let image_tambal = urlToFiletambal(new_image_url_tambal);

            var wrappertambal = document.getElementById('wrappertambal');

            wrappertambal.append(canvastambal);

        } 
    }
})

let urlToFiletambal = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let filetambal  = new File([dataArr], 'Fototambal.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(filetambal);

    var fileInput = document.querySelector('#fototambalzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomortambal =  document.getElementById('nomortambal').value;
    var jawabanfototambal = document.querySelector('#fototambalzx');
    var filessstambal = jawabanfototambal.files[0];
    var nameboxtambal = document.querySelector('#nameboxxtambal');
    nameboxtambal.value = databaseuname+"tambal"+nomortambal;

    return filetambal;

}

let inputbedah = document.getElementById('fotobedahz');

WIDTH = 800;

inputbedah.addEventListener("change", (eventbedah) => {
    let image_bedah = eventbedah.target.files[0];

    console.log("Original File", image_bedah)

    let readerbedah = new FileReader();

    readerbedah.readAsDataURL(image_bedah);

    readerbedah.onload = (eventbedah) => {

        $('#fotobedah').css('background-image', 'url('+eventbedah.target.result +')');

        image_url_bedah = eventbedah.target.result;
        let imagebedah = document.createElement('img');
        imagebedah.src = image_url_bedah;

        imagebedah.onload = (e) => {

            let canvasbedah = document.createElement('canvas');
            let ratio = WIDTH / imagebedah.width;
            canvasbedah.width = WIDTH;
            canvasbedah.height = imagebedah.height * ratio;
            canvasbedah.id = 'canvasbedah';
            canvasbedah.style.display = "none";

            let context = canvasbedah.getContext('2d');
            context.drawImage(imagebedah, 0, 0, canvasbedah.width, canvasbedah.height);

            let new_image_url_bedah = canvasbedah.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_bedah)

            let image_bedah = urlToFilebedah(new_image_url_bedah);

            var wrapperbedah = document.getElementById('wrapperbedah');

            wrapperbedah.append(canvasbedah);

        } 
    }
})

let urlToFilebedah = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let filebedah  = new File([dataArr], 'Fotobedah.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(filebedah);

    var fileInput = document.querySelector('#fotobedahzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomorbedah =  document.getElementById('nomorbedah').value;
    var jawabanfotobedah = document.querySelector('#fotobedahzx');
    var filesssbedah = jawabanfotobedah.files[0];
    var nameboxbedah = document.querySelector('#nameboxxbedah');
    nameboxbedah.value = databaseuname+"bedah"+nomorbedah;

    return filebedah;

}

let inputbehel = document.getElementById('fotobehelz');

WIDTH = 800;

inputbehel.addEventListener("change", (eventbehel) => {
    let image_behel = eventbehel.target.files[0];

    console.log("Original File", image_behel)

    let readerbehel = new FileReader();

    readerbehel.readAsDataURL(image_behel);

    readerbehel.onload = (eventbehel) => {

        $('#fotobehel').css('background-image', 'url('+eventbehel.target.result +')');

        image_url_behel = eventbehel.target.result;
        let imagebehel = document.createElement('img');
        imagebehel.src = image_url_behel;

        imagebehel.onload = (e) => {

            let canvasbehel = document.createElement('canvas');
            let ratio = WIDTH / imagebehel.width;
            canvasbehel.width = WIDTH;
            canvasbehel.height = imagebehel.height * ratio;
            canvasbehel.id = 'canvasbehel';
            canvasbehel.style.display = "none";

            let context = canvasbehel.getContext('2d');
            context.drawImage(imagebehel, 0, 0, canvasbehel.width, canvasbehel.height);

            let new_image_url_behel = canvasbehel.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_behel)

            let image_behel = urlToFilebehel(new_image_url_behel);

            var wrapperbehel = document.getElementById('wrapperbehel');

            wrapperbehel.append(canvasbehel);

        } 
    }
})

let urlToFilebehel = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let filebehel  = new File([dataArr], 'Fotobehel.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(filebehel);

    var fileInput = document.querySelector('#fotobehelzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomorbehel =  document.getElementById('nomorbehel').value;
    var jawabanfotobehel = document.querySelector('#fotobehelzx');
    var filesssbehel = jawabanfotobehel.files[0];
    var nameboxbehel = document.querySelector('#nameboxxbehel');
    nameboxbehel.value = databaseuname+"behel"+nomorbehel;

    return filebehel;

}

let inputgitur = document.getElementById('fotogiturz');

WIDTH = 800;

inputgitur.addEventListener("change", (eventgitur) => {
    let image_gitur = eventgitur.target.files[0];

    console.log("Original File", image_gitur)

    let readergitur = new FileReader();

    readergitur.readAsDataURL(image_gitur);

    readergitur.onload = (eventgitur) => {

        $('#fotogitur').css('background-image', 'url('+eventgitur.target.result +')');

        image_url_gitur = eventgitur.target.result;
        let imagegitur = document.createElement('img');
        imagegitur.src = image_url_gitur;

        imagegitur.onload = (e) => {

            let canvasgitur = document.createElement('canvas');
            let ratio = WIDTH / imagegitur.width;
            canvasgitur.width = WIDTH;
            canvasgitur.height = imagegitur.height * ratio;
            canvasgitur.id = 'canvasgitur';
            canvasgitur.style.display = "none";

            let context = canvasgitur.getContext('2d');
            context.drawImage(imagegitur, 0, 0, canvasgitur.width, canvasgitur.height);

            let new_image_url_gitur = canvasgitur.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_gitur)

            let image_gitur = urlToFilegitur(new_image_url_gitur);

            var wrappergitur = document.getElementById('wrappergitur');

            wrappergitur.append(canvasgitur);

        } 
    }
})

let urlToFilegitur = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let filegitur  = new File([dataArr], 'Fotogitur.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(filegitur);

    var fileInput = document.querySelector('#fotogiturzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomorgitur =  document.getElementById('nomorgitur').value;
    var jawabanfotogitur = document.querySelector('#fotogiturzx');
    var filesssgitur = jawabanfotogitur.files[0];
    var nameboxgitur = document.querySelector('#nameboxxgitur');
    nameboxgitur.value = databaseuname+"gitur"+nomorgitur;

    return filegitur;

}

let inputbleaching = document.getElementById('fotobleachingz');

WIDTH = 800;

inputbleaching.addEventListener("change", (eventbleaching) => {
    let image_bleaching = eventbleaching.target.files[0];

    console.log("Original File", image_bleaching)

    let readerbleaching = new FileReader();

    readerbleaching.readAsDataURL(image_bleaching);

    readerbleaching.onload = (eventbleaching) => {

        $('#fotobleaching').css('background-image', 'url('+eventbleaching.target.result +')');

        image_url_bleaching = eventbleaching.target.result;
        let imagebleaching = document.createElement('img');
        imagebleaching.src = image_url_bleaching;

        imagebleaching.onload = (e) => {

            let canvasbleaching = document.createElement('canvas');
            let ratio = WIDTH / imagebleaching.width;
            canvasbleaching.width = WIDTH;
            canvasbleaching.height = imagebleaching.height * ratio;
            canvasbleaching.id = 'canvasbleaching';
            canvasbleaching.style.display = "none";

            let context = canvasbleaching.getContext('2d');
            context.drawImage(imagebleaching, 0, 0, canvasbleaching.width, canvasbleaching.height);

            let new_image_url_bleaching = canvasbleaching.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_bleaching)

            let image_bleaching = urlToFilebleaching(new_image_url_bleaching);

            var wrapperbleaching = document.getElementById('wrapperbleaching');

            wrapperbleaching.append(canvasbleaching);

        } 
    }
})

let urlToFilebleaching = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let filebleaching  = new File([dataArr], 'Fotobleaching.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(filebleaching);

    var fileInput = document.querySelector('#fotobleachingzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomorbleaching =  document.getElementById('nomorbleaching').value;
    var jawabanfotobleaching = document.querySelector('#fotobleachingzx');
    var filesssbleaching = jawabanfotobleaching.files[0];
    var nameboxbleaching = document.querySelector('#nameboxxbleaching');
    nameboxbleaching.value = databaseuname+"bleaching"+nomorbleaching;

    return filebleaching;

}

let inputveneer = document.getElementById('fotoveneerz');

WIDTH = 800;

inputveneer.addEventListener("change", (eventveneer) => {
    let image_veneer = eventveneer.target.files[0];

    console.log("Original File", image_veneer)

    let readerveneer = new FileReader();

    readerveneer.readAsDataURL(image_veneer);

    readerveneer.onload = (eventveneer) => {

        $('#fotoveneer').css('background-image', 'url('+eventveneer.target.result +')');

        image_url_veneer = eventveneer.target.result;
        let imageveneer = document.createElement('img');
        imageveneer.src = image_url_veneer;

        imageveneer.onload = (e) => {

            let canvasveneer = document.createElement('canvas');
            let ratio = WIDTH / imageveneer.width;
            canvasveneer.width = WIDTH;
            canvasveneer.height = imageveneer.height * ratio;
            canvasveneer.id = 'canvasveneer';
            canvasveneer.style.display = "none";

            let context = canvasveneer.getContext('2d');
            context.drawImage(imageveneer, 0, 0, canvasveneer.width, canvasveneer.height);

            let new_image_url_veneer = canvasveneer.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_veneer)

            let image_veneer = urlToFileveneer(new_image_url_veneer);

            var wrapperveneer = document.getElementById('wrapperveneer');

            wrapperveneer.append(canvasveneer);

        } 
    }
})

let urlToFileveneer = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let fileveneer  = new File([dataArr], 'Fotoveneer.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(fileveneer);

    var fileInput = document.querySelector('#fotoveneerzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomorveneer =  document.getElementById('nomorveneer').value;
    var jawabanfotoveneer = document.querySelector('#fotoveneerzx');
    var filesssveneer = jawabanfotoveneer.files[0];
    var nameboxveneer = document.querySelector('#nameboxxveneer');
    nameboxveneer.value = databaseuname+"veneer"+nomorveneer;

    return fileveneer;

}

let inputlainnya = document.getElementById('fotolainnyaz');

WIDTH = 800;

inputlainnya.addEventListener("change", (eventlainnya) => {
    let image_lainnya = eventlainnya.target.files[0];

    console.log("Original File", image_lainnya)

    let readerlainnya = new FileReader();

    readerlainnya.readAsDataURL(image_lainnya);

    readerlainnya.onload = (eventlainnya) => {

        $('#fotolainnya').css('background-image', 'url('+eventlainnya.target.result +')');

        image_url_lainnya = eventlainnya.target.result;
        let imagelainnya = document.createElement('img');
        imagelainnya.src = image_url_lainnya;

        imagelainnya.onload = (e) => {

            let canvaslainnya = document.createElement('canvas');
            let ratio = WIDTH / imagelainnya.width;
            canvaslainnya.width = WIDTH;
            canvaslainnya.height = imagelainnya.height * ratio;
            canvaslainnya.id = 'canvaslainnya';
            canvaslainnya.style.display = "none";

            let context = canvaslainnya.getContext('2d');
            context.drawImage(imagelainnya, 0, 0, canvaslainnya.width, canvaslainnya.height);

            let new_image_url_lainnya = canvaslainnya.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_lainnya)

            let image_lainnya = urlToFilelainnya(new_image_url_lainnya);

            var wrapperlainnya = document.getElementById('wrapperlainnya');

            wrapperlainnya.append(canvaslainnya);

        } 
    }
})

let urlToFilelainnya = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let filelainnya  = new File([dataArr], 'Fotolainnya.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(filelainnya);

    var fileInput = document.querySelector('#fotolainnyazx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomorlainnya =  document.getElementById('nomorlainnya').value;
    var jawabanfotolainnya = document.querySelector('#fotolainnyazx');
    var filessslainnya = jawabanfotolainnya.files[0];
    var nameboxlainnya = document.querySelector('#nameboxxlainnya');
    nameboxlainnya.value = databaseuname+"lainnya"+nomorlainnya;

    return filelainnya;

}

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

    var modal = document.getElementById('modal');

    var modalClose = document.getElementById('close');
        modalClose.addEventListener('click', function() { 
        modal.style.display = "none";
        $('#newanddone').hide();
    });

    document.addEventListener('click', function (e) { 
        if (e.target.className.indexOf('borderlistz') !== -1) {
            var img = e.target;
            var modalImg = document.getElementById("content");
            modal.style.display = "block";
            modalImg.src = img.src;
            $('#newanddone').hide();
        }
    });

    const mouseWheel = document.querySelector('.scroll');

    mouseWheel.addEventListener('wheel', function(e) {
        const race = 50;

        if (e.deltaY > 0)
            mouseWheel.scrollLeft += race;
        else
            mouseWheel.scrollLeft -= race;
            e.preventDefault();
    });

        const mouseWheelz = document.querySelector('.scrolldrg');

        mouseWheelz.addEventListener('wheel', function(e) {
            const racez = 50;

            if (e.deltaY > 0)
                mouseWheelz.scrollLeft += racez;
            else
                mouseWheelz.scrollLeft -= racez;
                e.preventDefault();
        });

        const mouseWheeljadwal = document.querySelector('.scrolljadwal');

        mouseWheeljadwal.addEventListener('wheel', function(e) {
            const racejadwal = 50;

            if (e.deltaY > 0)
                mouseWheeljadwal.scrollLeft += racejadwal;
            else
                mouseWheeljadwal.scrollLeft -= racejadwal;
                e.preventDefault();
        });

        const mouseWheelpin = document.querySelector('.scrollpin');

        mouseWheelpin.addEventListener('wheel', function(e) {
            const racepin = 50;

            if (e.deltaY > 0)
                mouseWheelpin.scrollLeft += racepin;
            else
                mouseWheelpin.scrollLeft -= racepin;
                e.preventDefault();
        });

        var s1 = document.querySelector('#s1');
        var s2 = document.querySelector('#s2');
        var s3 = document.querySelector('#s3');
        var s4 = document.querySelector('#s4');
        var s5 = document.querySelector('#s5');

        var profileupdate = document.createElement("button");
        profileupdate.id = 'applyubah';
        profileupdate.className = 'cssUpdt';
        profileupdate.innerText = 'update';
        profileupdate.disabled = true;

        var profileloading = document.createElement("button");
        profileloading.id = 'loadingubah';
        profileloading.className = 'cssLdng';
        profileloading.style.display = 'none';
        profileloading.innerHTML = 'loading';

        var profilefotoupdate = document.createElement("button");
        profilefotoupdate.id = 'applyfoto';
        profilefotoupdate.className = 'cssUpdt';
        profilefotoupdate.innerText = 'update';
        profilefotoupdate.style.display = 'none';
        profilefotoupdate.disabled = true;

        var profilefotoloading = document.createElement("button");
        profilefotoloading.id = 'loadingfoto';
        profilefotoloading.className = 'cssLdng';
        profilefotoloading.style.display = 'none';
        profilefotoloading.innerHTML = 'loading';
        
        var themefotoupdate = document.createElement("button");
        themefotoupdate.id = 'applyBG';
        themefotoupdate.className = 'cssUpdt';
        themefotoupdate.innerText = 'update';
        themefotoupdate.style.display = 'none';
        themefotoupdate.disabled = true;

        var themefotoloading = document.createElement("button");
        themefotoloading.id = 'loadingBG';
        themefotoloading.className = 'cssLdng';
        themefotoloading.style.display = 'none';
        themefotoloading.innerHTML = 'loading';

        var themeupdate = document.createElement("button");
        themeupdate.id = 'applyubahs';
        themeupdate.className = 'cssUpdt';
        themeupdate.innerText = 'update';
        themeupdate.disabled = true;

        var themeloading = document.createElement("button");
        themeloading.id = 'loadingubahs';
        themeloading.className = 'cssLdng';
        themeloading.style.display = 'none';
        themeloading.innerHTML = 'loading';

        var sosmedupdate = document.createElement("button");
        sosmedupdate.id = 'applyubahssz';
        sosmedupdate.className = 'cssUpdt';
        sosmedupdate.innerText = 'update';
        sosmedupdate.disabled = true;

        var sosmedloading = document.createElement("button");
        sosmedloading.id = 'loadingubahssz';
        sosmedloading.className = 'cssLdng';
        sosmedloading.style.display = 'none';
        sosmedloading.innerHTML = 'loading';

        s1.append(profileupdate, profileloading);
        s2.append(profilefotoupdate, profilefotoloading);
        s3.append(themefotoupdate, themefotoloading);
        s4.append(themeupdate, themeloading);
        s5.append(sosmedupdate, sosmedloading);

        var protectedInput = document.querySelector(".groupusername");
        var protectedInput2 = document.querySelector("#useRonLyIds");
        var protectedInput3 = document.querySelector("#ubahusername");
        var protectedInput4 = document.querySelector("#emLonLyIds");
        var protectedInput7 = document.querySelector(".layerprofil");
        var protectedInput8 = document.querySelector(".layerprofilfoto");
        var protectedInput9 = document.querySelector(".layerBGfoto");
        var protectedInput10 = document.querySelector(".layertheme");
        var protectedInput11 = document.querySelector(".layermedsos");
        var protectedInput12 = document.querySelector("#menutools");
        var protectedInput13 = document.querySelector("#grouphighlightz");
        var protectedInput14 = document.querySelector("#containerhighlightz");
        var protectedInput15 = document.querySelector("#upbtnzzhighlightz");
        var protectedInput16 = document.querySelector("#updatehighlightz");
        var protectedInput17 = document.querySelector("#groupeditmenu");
        var protectedInput18 = document.querySelector("#containereditmenu");
        var protectedInput19 = document.querySelector("#ktkdentist");
        var protectedInput20 = document.querySelector("#ktkscaling");
        var protectedInput21 = document.querySelector("#ktktambal");
        var protectedInput22 = document.querySelector("#ktkbedah");
        var protectedInput23 = document.querySelector("#ktkbehel");
        var protectedInput24 = document.querySelector("#ktkgitur");
        var protectedInput25 = document.querySelector("#ktkbleaching");
        var protectedInput26 = document.querySelector("#ktkveneer");
        var protectedInput27 = document.querySelector("#groupeditreservasi");
        var protectedInput28 = document.querySelector("#containereditreservasi");
        var protectedInput29 = document.querySelector("#kotakjadwal");
        var protectedInput30 = document.querySelector("#kotakjadwalz");
        var protectedInput31 = document.querySelector("#newanddone");
        var protectedInput32 = document.querySelector("#grouporderreservasi");
        var protectedInput33 = document.querySelector("#kotakInfo");
        var protectedInput34 = document.querySelector("#kotakInfoDone");
        var protectedInput36 = document.querySelector("#ktklainnya");
        var protectedInput37 = document.querySelector("#databaseuser");
        var protectedInput38 = document.querySelector("#databaseuname");  
        var protectedInput39 = document.querySelector("#clockExpired");
        var protectedInput40 = document.querySelector("#databasexpired");
        var protectedInput41 = document.querySelector("#applyubah");
        var protectedInput42 = document.querySelector("#applyfoto");
        var protectedInput43 = document.querySelector("#applyBG");
        var protectedInput44 = document.querySelector("#applyubahs");
        var protectedInput45 = document.querySelector("#applyubahssz");
        var protectedInput46 = document.querySelector("#inputnich");
        var protectedInput47 = document.querySelector("#applyDentists");
        var protectedInput48 = document.querySelector("#applyscalings");
        var protectedInput49 = document.querySelector("#applytambals");
        var protectedInput50 = document.querySelector("#applybedahs");
        var protectedInput51 = document.querySelector("#applybehels");
        var protectedInput52 = document.querySelector("#applygiturs");
        var protectedInput53 = document.querySelector("#applybleachings");
        var protectedInput54 = document.querySelector("#applyveneers");
        var protectedInput55 = document.querySelector("#applylainnyas");
        var protectedInput56 = document.querySelector("#tambahjadwal");
        var protectedInput62 = document.querySelector("#databasedisablereservasi");
        var protectedInput63 = document.querySelector(".groupkeseluruhan");
            var inputObserverz = new MutationObserver(function (mutationsz) {
                mutationsz.forEach(function (mutationz) {
                    if (mutationz.attributeName === "style", "class", "id", "type", "value", "src", "script", "disabled") {
                        var message = '<div class="nice" style="background-color: transparent; height: 400px; width: 400px; padding-top: 40px; margin-top: 100px; background-size: 70%; background-repeat: no-repeat; background-position: center; background-image: url(""); "><img id="myimg" style="max-height: 300px; max-width: 300px;" src="https://lh3.googleusercontent.com/ftSS3H7AM3FsJdEczxfZg_ZR3ExyLItVzM_f8JxTBo0nGFbUK5aHYw8_MwAjbfptYzEq6nk2K0kruG6SBEPNsYeRwhkoEo_lRgFBUoGlFceBlvkW0xaqQZG52Ht1ndwR-cE9Qfg15A=w2400"></div>';
                        protectedInput.parentNode.innerHTML = message;
                    }    
                });
            });
        inputObserverz.observe(protectedInput, {attributes: true});
        inputObserverz.observe(protectedInput2, {attributes: true});
        inputObserverz.observe(protectedInput3, {attributes: true});
        inputObserverz.observe(protectedInput4, {attributes: true});
        inputObserverz.observe(protectedInput7, {attributes: true});
        inputObserverz.observe(protectedInput8, {attributes: true});
        inputObserverz.observe(protectedInput9, {attributes: true});
        inputObserverz.observe(protectedInput10, {attributes: true});
        inputObserverz.observe(protectedInput11, {attributes: true});
        inputObserverz.observe(protectedInput12, {attributes: true});
        inputObserverz.observe(protectedInput13, {attributes: true});
        inputObserverz.observe(protectedInput14, {attributes: true});
        inputObserverz.observe(protectedInput15, {attributes: true});
        inputObserverz.observe(protectedInput16, {attributes: true});
        inputObserverz.observe(protectedInput17, {attributes: true});
        inputObserverz.observe(protectedInput18, {attributes: true});
        inputObserverz.observe(protectedInput19, {attributes: true});
        inputObserverz.observe(protectedInput20, {attributes: true});
        inputObserverz.observe(protectedInput21, {attributes: true});
        inputObserverz.observe(protectedInput22, {attributes: true});
        inputObserverz.observe(protectedInput23, {attributes: true});
        inputObserverz.observe(protectedInput24, {attributes: true});
        inputObserverz.observe(protectedInput25, {attributes: true});
        inputObserverz.observe(protectedInput26, {attributes: true});
        inputObserverz.observe(protectedInput27, {attributes: true});
        inputObserverz.observe(protectedInput28, {attributes: true});
        inputObserverz.observe(protectedInput29, {attributes: true});
        inputObserverz.observe(protectedInput30, {attributes: true});
        inputObserverz.observe(protectedInput31, {attributes: true});
        inputObserverz.observe(protectedInput32, {attributes: true});
        inputObserverz.observe(protectedInput33, {attributes: true});
        inputObserverz.observe(protectedInput34, {attributes: true});
        inputObserverz.observe(protectedInput36, {attributes: true});
        inputObserverz.observe(protectedInput37, {attributes: true});
        inputObserverz.observe(protectedInput38, {attributes: true});
        inputObserverz.observe(protectedInput39, {attributes: true});
        inputObserverz.observe(protectedInput40, {attributes: true});
        inputObserverz.observe(protectedInput41, {attributes: true});
        inputObserverz.observe(protectedInput42, {attributes: true});
        inputObserverz.observe(protectedInput43, {attributes: true});
        inputObserverz.observe(protectedInput44, {attributes: true});
        inputObserverz.observe(protectedInput45, {attributes: true});
        inputObserverz.observe(protectedInput46, {attributes: true});
        inputObserverz.observe(protectedInput47, {attributes: true});
        inputObserverz.observe(protectedInput48, {attributes: true});
        inputObserverz.observe(protectedInput49, {attributes: true});
        inputObserverz.observe(protectedInput50, {attributes: true});
        inputObserverz.observe(protectedInput51, {attributes: true});
        inputObserverz.observe(protectedInput52, {attributes: true});
        inputObserverz.observe(protectedInput53, {attributes: true});
        inputObserverz.observe(protectedInput54, {attributes: true});
        inputObserverz.observe(protectedInput55, {attributes: true});
        inputObserverz.observe(protectedInput56, {attributes: true});
        inputObserverz.observe(protectedInput62, {attributes: true});
        inputObserverz.observe(protectedInput63, {attributes: true});

        $('.settingprofilebutton').click(function(){
            if (this.value == 'hide') {
                this.value = "show";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/s5gVSqIiT9dK6iJzHN_z7JNBNHdXvaTozCSBODlrw9IQYhefLwabkihI2VW5aEP3Fd1KTMHngZzrgZA2NztTR3GyV7blt6Mzgf2HnLGZ2ovvnFt8hN4RYrrOcaQIfgob9HCZgK9sqQ=w2400")');
                $('#kotakeditprofile').slideDown(200);  
            } else {
                this.value = "hide";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/8wxcyLjwjkqm4mAsVrv2bHPAzxP8fwOhNx-oK4l3QSpes5CyiNapYEcv8Eci_jwdrqZIUUlIo48KYXyHz_Q_I15zeC9uV2lsi-_-ShIrmAh6WfrfS6TEt9vpdK7iXB11MdymUQuXZg=w2400")'); 
                $('#kotakeditprofile').slideUp(150);            
            }
        });

        $('#enkripsicsstextbutton').click(function(){
            if (this.value == 'hide') {
                this.value = "show";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/VRKaiRNbD6Xs8TPs5n9H7xFjWRp35dmvy-XxT6eZyVHI---gSl3wz0rUc3ie0C_kkfg6hEAOHKu1gUQYh651ACQSvHS6tUNHDcImgmMq2n6M76nTtJxj2i6WIBl3dCoHiwRdDXiv9Q=w2400")');
                $('#keteranganenkripsi').slideDown(200);    
            } else {
                this.value = "hide";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaUyfzoxukSkZtUUN5gGmeEIBgKwl60_8tllLr9CnYqHPutOfW2NNksRCBlw8nip2rDpylWTxCLNj051zG5o7cg1Stamg0XgHKjHCZN2x9BVK2EI3Kk=w2400")');
                $('#keteranganenkripsi').slideUp(150);   
                  
            }
        });

        $('.enkripsicsstextbuttonnewdone').click(function(){
            if (this.value == 'hide') {
                this.value = "show";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/VRKaiRNbD6Xs8TPs5n9H7xFjWRp35dmvy-XxT6eZyVHI---gSl3wz0rUc3ie0C_kkfg6hEAOHKu1gUQYh651ACQSvHS6tUNHDcImgmMq2n6M76nTtJxj2i6WIBl3dCoHiwRdDXiv9Q=w2400")');
                $('.keteranganenkripsinewdone').slideDown(200);    
            } else {
                this.value = "hide";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaUyfzoxukSkZtUUN5gGmeEIBgKwl60_8tllLr9CnYqHPutOfW2NNksRCBlw8nip2rDpylWTxCLNj051zG5o7cg1Stamg0XgHKjHCZN2x9BVK2EI3Kk=w2400")');
                $('.keteranganenkripsinewdone').slideUp(150);   
                  
            }
        });

        function countdownzenter() {
            timeoutID = window.setTimeout(slowAlertz, 25000);
            timehilang = window.setTimeout(countdownz, 1000);                 
            timeLeft = 25;
        }

        function countdownz() {       
            timeLeft--;
            document.getElementById("seconds").innerHTML = timeLeft;
            if (timeLeft > 0) {
                setTimeout(countdownz, 1000);
            }
        }

        function slowAlertz() {
            $('#clock').hide();
            $('#seconds').remove();
            $('#enteredit').fadeIn();
        }

$("#okgmaps").on("click", function() {
    var z = document.getElementById("usergmaps").value; 
    document.querySelector("#buttonzgmaps").href = z;
    $('#okgmaps').hide().delay(3505).fadeIn(0); 
    $('#loadinggmaps').show().delay(3500).fadeOut(0); 
});

let Mapz = {
    mapContainer: document.getElementById('map'),
    inputAutocomplete: document.getElementById('searchfield'),
    inputLat: $("input[name=lat]"),
    inputLng: $("input[name=lng]"),
    inputlokasi: $("#usergmaps"),
    map: {},
    geocoder: new google.maps.Geocoder(),
    autocomplete: {},
    init: function () {
        let _this = this;

        this.autocomplete = new google.maps.places.Autocomplete(this.inputAutocomplete);

        let latLng = new google.maps.LatLng(-6.2445432, 106.8006869);
        console.log(this.inputLat.val());
        if(this.inputLat.val() && this.inputLng.val()){
            latLng = new google.maps.LatLng(this.inputLat.val(), this.inputLng.val());
        }

        this.map = new google.maps.Map(this.mapContainer, {
            zoom: 15,
            center: latLng
        });

        this.autocomplete.addListener('place_changed', function () {
            let place = _this.autocomplete.getPlace();

            _this.inputlokasi.val('https://www.google.com/maps/place/' + place.geometry.location.lat() + ',' + place.geometry.location.lng());    
            _this.inputLat.val(place.geometry.location.lat());
            _this.inputLng.val(place.geometry.location.lng());

            let latlng = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());

            // create marker
            let marker = new google.maps.Marker({
                position: latlng,
                map: _this.map,
                draggable: true
            });
            _this.map.setCenter(latlng);

            marker.addListener('dragend', function () {
                _this.inputlokasi.val('https://www.google.com/maps/place/' + marker.getPosition().lat() + ',' + marker.getPosition().lng());
                _this.inputLat.val(marker.getPosition().lat());
                _this.inputLng.val(marker.getPosition().lng());
                _this.geocodePosition(marker.getPosition());
                _this.map.setCenter(marker.getPosition());
            })
        })
    },
    geocodePosition: function (pos) {
        let _this = this;

        this.geocoder.geocode({
            latLng: pos
        }, function (responses) {
            if (responses && responses.length > 0) {
                _this.updateMarkerAddress(responses[0].formatted_address);
            } else {
                _this.updateMarkerAddress('');
            }
        });
    },
    updateMarkerAddress: function (str) {
        this.inputAutocomplete.value = str;
    },
    renderMap: function ($el) {
        let _this = this;
        let $markers = $el.find('.marker');

        let args = {
            zoom: 16,
            center: new google.maps.LatLng(0, 0),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            streetViewControl: false,
            mapTypeControl: false
        };

        let map = new google.maps.Map($el[0], args);

        map.markers = [];

        $markers.each(function () {
            _this.add_marker($(this), map);
        });

        _this.center_map(map);
    },
    add_marker: function ($marker, map) {
        let latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));
        let marker = new google.maps.Marker({
            position: latlng,
            map: map
        });
        map.markers.push(marker);
    },
    center_map: function (map) {
        let bounds = new google.maps.LatLngBounds();

        $.each(map.markers, function (i, marker) {
            let latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
            bounds.extend(latlng);
        });

        if (map.markers.length == 1) {
            map.setCenter(bounds.getCenter());
            map.setZoom(16);
        } else {
            map.fitBounds(bounds);
        }
    },

};

$(document).ready(function(){
    Mapz.init();
});

var offlineMsg = document.getElementById("offline-message");

function _showOfflineMessage(){
    $('#klikduakali').remove();
    $('#loadingselesailogin').remove();
    window.getUsername = function() {
        return false;
    }
    window.onload = function() {
        return false;
    }
    document.getElementsByTagName("html")[0].setAttribute("offline",true);
    offlineMsg.setAttribute("aria-hidden","false");
    setTimeout(function(){
        $('#klikduakali').remove();
        $('#loadingselesailogin').remove();
        window.getUsername = function() {
            return false;
        }
        window.onload = function() {
            return false;
        }
        offlineMsg.focus();
    },400);
}

function _hideOfflineMessage(){
    document.getElementsByTagName("html")[0].setAttribute("offline",false);
    offlineMsg.setAttribute("aria-hidden","true");
    $('#online-message').show().delay(3000).fadeOut(300);
}

window.addEventListener("offline", _showOfflineMessage, false);

window.addEventListener("online", _hideOfflineMessage, false);

var gh=[];
$('#kotakbioreservasi').on('change', 'input[type=checkbox]', function() {

var id = $(this).val(); // this gives me null
var index = gh.indexOf(id);

if($(this).is(':checked')){
    gh.push(id);
    document.getElementById("cutilibur").value=''+gh+'';
}
else{
    if (index > -1) {
    gh.splice(index, 1);
    document.getElementById("cutilibur").value=''+gh+'';
    }
}
});

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
    var z = document.getElementById("userfacebook").value; 
    document.querySelector("#userfb").value = "https://www.facebook.com/"+z; 
    document.querySelector("#buttonzfb").href = "https://www.facebook.com/"+z ; 
});

$("#userinstagram").on("input", function() {
    var z = document.getElementById("userinstagram").value; 
    document.querySelector("#userig").value = "https://www.instagram.com/"+z; 
    document.querySelector("#buttonzig").href = "https://www.instagram.com/"+z ; 
});

$("#usertwitter").on("input", function() {
    var z = document.getElementById("usertwitter").value; 
    document.querySelector("#usertwt").value = "https://www.twitter.com/"+z; 
    document.querySelector("#buttonztwitter").href = "https://www.twitter.com/"+z ; 
});

$("#usertiktok").on("input", function() {
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

$(document).ready(function(){
    var future  = Date.parse(databasexpired);
    var now     = new Date();
    var diff    = future - now;

    var days  = Math.floor(diff / (1000*60*60*24));
    var hours = Math.floor(diff / (1000*60*60));
    var mins  = Math.floor(diff / (1000*60));
    var secs  = Math.floor(diff / 1000);

    var d = days;
    var h = hours - days * 24;
    var m = mins - hours * 60;
    var s = secs - mins * 60;
    
    if (d < 1) {
        $('#klikduakali').remove();
        $(".themehome").remove();
        $("#cekreservasi").remove();
        $("#saygreetinginput").remove();
        $("#brand").remove();
        $("#brandotomatis").remove();
        $("#clockExpired").remove();
        $("#menutools").remove();
        $(".cancelmenuz").remove();
        $("#highlightz").remove();
        $("#newanddone").remove();
        $(".groupusername").remove();
        $(".groups").remove();
        $(".groupss").remove();
        $("#offline-message").remove();
        $("#online-message").remove();
        $(".modal").remove();
        $(".setelahmenu").remove();
        $("#overlaybukti").remove();
        $("#overlay").remove();
        $("#kotakeditprofil").remove();
        $("#brandawal").remove();
        $("#inputnich").remove();
        $("#kotakbrand").remove();
        $("#brandz").remove();
        $("#overlaycekreservasi").remove();
        $("#kotakeditcekreservasi").remove();
        $("#settingz").remove();
        $("#inputhighlightz").remove();
        $("#loadingorder").remove();
        $(".kotakloading").append('<div class="ktkldng"></div><div class="loadingawalExpired">inactive account</div><div id="brandExpired"></div>');
    }
});

$('#jamdari').on('input', function () {
    var jamdari = document.getElementById('jamdari').value;
    var jamsampai = document.getElementById('jamsampai').value;
    var jamdari2 = document.getElementById('jamdari2').value;
    var jamsampai2 = document.getElementById('jamsampai2').value;
    document.getElementById('hasiljam').value = jamdari+"."+jamsampai+"-"+jamdari2+"."+jamsampai2;
});

$('#jamsampai').on('input', function () {
    var jamdari = document.getElementById('jamdari').value;
    var jamsampai = document.getElementById('jamsampai').value;
    var jamdari2 = document.getElementById('jamdari2').value;
    var jamsampai2 = document.getElementById('jamsampai2').value;
    document.getElementById('hasiljam').value = jamdari+"."+jamsampai+"-"+jamdari2+"."+jamsampai2;
});

$('#jamdari2').on('input', function () {
    var jamdari = document.getElementById('jamdari').value;
    var jamsampai = document.getElementById('jamsampai').value;
    var jamdari2 = document.getElementById('jamdari2').value;
    var jamsampai2 = document.getElementById('jamsampai2').value;
    document.getElementById('hasiljam').value = jamdari+"."+jamsampai+"-"+jamdari2+"."+jamsampai2;
});

$('#jamsampai2').on('input', function () {
    var jamdari = document.getElementById('jamdari').value;
    var jamsampai = document.getElementById('jamsampai').value;
    var jamdari2 = document.getElementById('jamdari2').value;
    var jamsampai2 = document.getElementById('jamsampai2').value;
    document.getElementById('hasiljam').value = jamdari+"."+jamsampai+"-"+jamdari2+"."+jamsampai2;
});

$('#jawabannamapasien').on('input', function () {
    var z = document.getElementById('jawabannamapasien').value;
    document.getElementById('judulbukti').innerHTML = "hai "+z+",";
});

$('#ubahjadwals').click(function(){
    $('#kotakeditprofils').show();
});

$('#jadwalsenin').click(function(){
    $('#kotakeditprofils').hide();
    $('#ubahjadwals').val('senin');
    $('#ubahjadwals').text('senin');
    $('#hasilhari').val('senin');

    var value = document.getElementById('hasilhari');

    if (value.value == "senin") {
        $('#tambahjadwal').show();
    }  
});

$('#jadwalselasa').click(function(){
    $('#kotakeditprofils').hide();
    $('#ubahjadwals').val('selasa');
    $('#ubahjadwals').text('selasa');
    $('#hasilhari').val('selasa');

    var value = document.getElementById('hasilhari');

    if (value.value == "selasa") {
        $('#tambahjadwal').show();
    }  
});

$('#jadwalrabu').click(function(){
    $('#kotakeditprofils').hide();
    $('#ubahjadwals').val('rabu');
    $('#ubahjadwals').text('rabu');
    $('#hasilhari').val('rabu');

    var value = document.getElementById('hasilhari');

    if (value.value == "rabu") {
        $('#tambahjadwal').show();
    }  
});

$('#jadwalkamis').click(function(){
    $('#kotakeditprofils').hide();
    $('#ubahjadwals').val('kamis');
    $('#ubahjadwals').text('kamis');
    $('#hasilhari').val('kamis');

    var value = document.getElementById('hasilhari');

    if (value.value == "kamis") {
        $('#tambahjadwal').show();
    }  
});

$('#jadwaljumat').click(function(){
    $('#kotakeditprofils').hide();
    $('#ubahjadwals').val('jumat');
    $('#ubahjadwals').text('jumat');
    $('#hasilhari').val('jumat');

    var value = document.getElementById('hasilhari');

    if (value.value == "jumat") {
        $('#tambahjadwal').show();
    }  
});

$('#jadwalsabtu').click(function(){
    $('#kotakeditprofils').hide();
    $('#ubahjadwals').val('sabtu');
    $('#ubahjadwals').text('sabtu');
    $('#hasilhari').val('sabtu');

    var value = document.getElementById('hasilhari');

    if (value.value == "sabtu") {
        $('#tambahjadwal').show();
    }  
});

$('#jadwalminggu').click(function(){
    $('#kotakeditprofils').hide();
    $('#ubahjadwals').val('minggu');
    $('#ubahjadwals').text('minggu');
    $('#hasilhari').val('minggu');

    var value = document.getElementById('hasilhari');

    if (value.value == "minggu") {
        $('#tambahjadwal').show();
    }  
});

let copyText = document.querySelector("#contentbukti");
copyText.querySelector("#selesaibukti").addEventListener("click", function () {
    let input = copyText.querySelector("#kodepinbukti");
    input.select();
    document.execCommand("copy");
    $("#contentbukti").hide();
    $("#clipboardpin").show(setTimeout(function(){
        $("#clipboardpin").hide();
        $("#loadingselesai").show(setTimeout(function(){
            window.location.reload();
        }, 2000)); 
    }, 3000));    
});

$('#reservasipernah').click(function(){
    $('#overlaycekreservasi').show();
    $('#kotakeditcekreservasi').show();
    $('#groupcekreservasi').show();
    $('#groupcekreservasi2').hide();
});

$('#cekreservasi').click(function(){
    $('#overlaycekreservasi').show();
    $('#kotakeditcekreservasi').show();
    $('#groupcekreservasi2').show();
    $('#groupcekreservasi').hide();
});

$('#saygreeting').on("keyup focus", function() {
    $("#the-countsaygreeting").show();
    var characterCountsaygreeting = $(this).val().length;
    var currentsaygreeting = $('#currentsaygreeting');
    currentsaygreeting.text(characterCountsaygreeting);
}).blur(function() {
    $("#the-countsaygreeting").hide();
});

$('#bioprofile').on("keyup focus input", function() {
    var z = document.getElementById("bioprofile").value; 
    document.querySelector(".kalimatsilahkan").innerHTML = z; 
    $("#the-countbioprofile").show();
    var characterCountbioprofile = $(this).val().length;
    var currentbioprofile = $('#currentbioprofile');
    currentbioprofile.text(characterCountbioprofile);
}).blur(function() {
    $("#the-countbioprofile").hide();
});

$('#saygreetinginput').click(function(){
    var saygreetinginput = document.querySelector("#saygreetinginput");
    $(saygreetinginput).css('width', (saygreetinginput.scrollWidth + 1) + 'px');
    setTimeout(function(){
        $("#saygreetinginput").css('width', '110px');
    }, 4000);
});

$('#inputcekreservasi').bind('input', function() {
    var c = this.selectionStart,
        r = /a/gi,
        v = $(this).val();
    if(r.test(v)) {
        $(this).val(v.replace(r, ''));
        c--;
    }
    this.setSelectionRange(c, c);
    $('#entercektidak').show();
    $('#entercekreservasi').hide();
});

$('#inputcekreservasi2').bind('input', function() {
    var c = this.selectionStart,
        r = /a/gi,
        v = $(this).val();
    if(r.test(v)) {
        $(this).val(v.replace(r, ''));
        c--;
    }
    this.setSelectionRange(c, c);
    $('#entercektidak2').show();
    $('#entercekreservasi2').hide();
});

$('#brand').dblclick(function(){
    $('#overlay').show();
    $('#kotakeditprofil').show();
    $('#klikduakali').remove();
});

$('.cancelmenu').click(function(){
    $('#overlay').hide();
    $('#kotakeditprofil').hide();
    $('#overlaycekreservasi').hide();
    $('#kotakeditcekreservasi').hide();
    $('#groupcekreservasi').hide();
    $('#groupcekreservasi2').hide();
    $('#edittoolscekreservasi').show();
    $('#ownertoolscekreservasi').show();
    $('#groupcekreservasi3').hide();
    $('#inputcekreservasi').val("");
    $('#inputcekreservasi2').val("");
    $('#entercekreservasi').hide();
    $('#entercekreservasi2').hide();
    $('#entercektidak').show();
    $('#entercektidak2').show();
    $("#batalreservasi").text('batalkan reservasi');
    $("#batalreservasi").css('background', 'black');
});

$('.canceljadwal').click(function(){
    $('#kotakeditprofils').hide();
});

$('.cancelmenuz').click(function(){
    $("#saygreetinginput").show();
    $('.groupkeseluruhan').hide();
    $('.groupusername').hide();
    $('#grouphighlightz').hide();
    $('#groupeditmenu').hide();
    $('#groupeditreservasi').hide();
    $('#grouporderreservasi').hide();
    $('.cancelmenuz').hide();
    $('#inputhighlightz').hide();
    $('#brandotomatis').show();
    $('#cekreservasi').show();
    $('#saygreetinginput').show();
    $('#brandz').hide();
    $('#menutools').hide();
    $('#highlightz').hide();
    $('#settingz').hide();
    $('.themehome').addClass('animatedzss').show();
    $('#searchnew').hide();
    $('#buttontodaynew').hide();
    $('#searchdone').hide();
    $('#newanddone').hide();
    $('#htmlpdf').hide();
    $('#tambahanorderreservasi').css({ "margin-top" : "20px" });
});

var inputQuantity = [];
$(function() {     
  $(".jamjadwalkiri").on("keyup", function (e) {
    var $field = $(this),
        val=this.value,
        $thisIndex=parseInt($field.data("idx"),10); 
    if (this.validity && this.validity.badInput || isNaN(val) || $field.is(":invalid") ) {
        this.value = inputQuantity[$thisIndex];
        return;
    } 
    if (val.length > Number($field.attr("maxlength"))) {
      val=val.slice(0, 2);
      $field.val(val);
    }
    inputQuantity[$thisIndex]=val;
  });      
});

var inputQuantitys = [];
$(function() {     
  $(".jamjadwalkanan").on("keyup", function (e) {
    var $field = $(this),
        val=this.value,
        $thisIndex=parseInt($field.data("idx"),10); 
    if (this.validity && this.validity.badInput || isNaN(val) || $field.is(":invalid") ) {
        this.value = inputQuantitys[$thisIndex];
        return;
    } 
    if (val.length > Number($field.attr("maxlength"))) {
      val=val.slice(0, 2);
      $field.val(val);
    }
    inputQuantitys[$thisIndex]=val;
  });      
});