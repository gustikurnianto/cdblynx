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
            let isilahjawabanlayanan = $(this).closest('.ctnInfo').find('#isilahjawabanlayanan').val().trim().toUpperCase();
            let judulreservasi = $(this).closest('.ctnInfo').find('#judulreservasi').val().trim().toUpperCase();
            let isilahWaktu = $(this).closest('.ctnInfo').find('#isilahWaktu').val().trim().toUpperCase();
            let pinreservasi = $(this).closest('.ctnInfo').find('#pinreservasi').val().trim().toUpperCase();

            if (isilahjawabannamapasien.indexOf(query) !== -1 || isilahjawabanalamat.indexOf(query) !== -1 || isilahjawabanjeniskelamin.indexOf(query) !== -1 || isilahjawabantanggallahir.indexOf(query) !== -1 || isilahjawabanumur.indexOf(query) !== -1 || isilahjawabankeluhan.indexOf(query) !== -1 || isilahjawabanalergi.indexOf(query) !== -1 || isilahjawabanjadwal.indexOf(query) !== -1 || isilahjawabanjam.indexOf(query) !== -1 || isilahjawabanjamdokter.indexOf(query) !== -1 || isilahjawabanhp.indexOf(query) !== -1 || judulreservasi.indexOf(query) !== -1 || isilahWaktu.indexOf(query) !== -1 || pinreservasi.indexOf(query) !== -1 || isilahjawabanlayanan.indexOf(query) !== -1) {
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