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
            let isilahjawabanlayananDone = $(this).closest('.ctnInfoDone').find('#isilahjawabanlayananDone').val().trim().toUpperCase();
            let judulreservasiDone = $(this).closest('.ctnInfoDone').find('#judulreservasiDone').val().trim().toUpperCase();
            let isilahWaktuDone = $(this).closest('.ctnInfoDone').find('#isilahWaktuDone').val().trim().toUpperCase();
            let pinreservasiDone = $(this).closest('.ctnInfoDone').find('#pinreservasiDone').val().trim().toUpperCase();

            if (isilahjawabannamapasienDone.indexOf(queryDone) !== -1 || isilahjawabanalamatDone.indexOf(queryDone) !== -1 || isilahjawabanjeniskelaminDone.indexOf(queryDone) !== -1 || isilahjawabantanggallahirDone.indexOf(queryDone) !== -1 || isilahjawabanumurDone.indexOf(queryDone) !== -1 || isilahjawabankeluhanDone.indexOf(queryDone) !== -1 || isilahjawabanalergiDone.indexOf(queryDone) !== -1 || isilahjawabanjadwalDone.indexOf(queryDone) !== -1 || isilahjawabanjamDone.indexOf(queryDone) !== -1 || isilahjawabanjamdokterdone.indexOf(queryDone) !== -1 || isilahjawabanhpDone.indexOf(queryDone) !== -1 || judulreservasiDone.indexOf(queryDone) !== -1 || isilahWaktuDone.indexOf(queryDone) !== -1 || pinreservasiDone.indexOf(queryDone) !== -1 || isilahjawabanlayananDone.indexOf(queryDone) !== -1) {
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