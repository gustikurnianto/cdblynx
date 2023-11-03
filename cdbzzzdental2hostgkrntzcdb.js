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