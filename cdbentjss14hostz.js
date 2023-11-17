var nowTemp = new Date();

            var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

            var checkin = $('#jawabantanggallahir').datepicker({

                startView: 2,
                format: "dd M yyyy",
                autoclose: false

            }).on( "change input", function() {
               
                    var jawabantanggallahir = document.getElementById('jawabantanggallahir').value;
                    document.getElementById('jawabantanggallahirz').value = jawabantanggallahir;
                    $("#jawabantanggallahirz").trigger('click');

            });

        $('#jawabanjeniskelamin').click(function(event) {
            event.stopPropagation();
            $('.overlayjeniskelamin').show(function(){
                $(window).click(function() {
                    $('.overlayjeniskelamin').hide();
                });
            });
        });

        $('.jenispria').click(function(){
            $('#jawabanjeniskelamin').val('laki-laki');
            $('#jawabanjeniskelaminz').val('laki-laki');
            $('.overlayjeniskelamin').hide();
            $('#jawabanjeniskelaminz').trigger('click');
        });

        $('.jeniswanita').click(function(){
            $('#jawabanjeniskelamin').val('perempuan');
            $('#jawabanjeniskelaminz').val('perempuan');
            $('.overlayjeniskelamin').hide();
            $('#jawabanjeniskelaminz').trigger('click');
        });

        $('#jawabanlayanan').click(function(event) {
            event.stopPropagation();
            $('.overlaylayanan').show(function(){
                $(window).click(function() {
                    $('.overlaylayanan').hide();
                });
            });
        });

        $('.layananpribadi').click(function(){
            $('#jawabanlayanan').val('pribadi');
            $('#jawabanlayananz').val('pribadi');
            $('.overlaylayanan').hide();
            $('#jawabanlayananz').trigger('click');
            $('#reservasi1layanan').css('outline', 'none');
        });

        $('.layananbpjs').click(function(){
            $('#jawabanlayanan').val('BPJS');
            $('#jawabanlayananz').val('BPJS');
            $('.overlaylayanan').hide();
            $('#jawabanlayananz').trigger('click');
            $('#reservasi1layanan').css('outline', 'none');
        });

        $('#jawabanumurtahunbulan').click(function(eventtahunbulan) {
            eventtahunbulan.stopPropagation();
            $('.overlaytahunbulan').show(function(){
                $(window).click(function() {
                    $('.overlaytahunbulan').hide();
                });
            });
        });

        $('.jenistahun').click(function(){
            var jawabanumurangka = document.getElementById('jawabanumurangka').value;
            var jenistahun = document.querySelector('.jenistahun').innerText;
            document.getElementById('jawabanumur').value = jawabanumurangka+" "+jenistahun;
            document.getElementById('jawabanumurtahunbulan').value = jenistahun;
            $('.overlaytahunbulan').hide();
        });

        $('.jenisbulan').click(function(){
            var jawabanumurangka = document.getElementById('jawabanumurangka').value;
            var jenisbulan = document.querySelector('.jenisbulan').innerText;
            document.getElementById('jawabanumur').value = jawabanumurangka+" "+jenisbulan;
            document.getElementById('jawabanumurtahunbulan').value = jenisbulan;
            $('.overlaytahunbulan').hide();
        });

        $("#jawabanumurangka").on("input", function() {
            var jawabanumurangka = document.getElementById('jawabanumurangka').value;
            var jawabanumurtahunbulan = document.getElementById('jawabanumurtahunbulan').value;
            document.getElementById('jawabanumur').value = jawabanumurangka+" "+jawabanumurtahunbulan;
            $('#jawabanumur').trigger('click');
            $('#reservasi1umur').css('outline', 'none');
        });

        $("#jawabankeluhan").on("input", function() {
            $('#reservasi1keluhan').css('outline', 'none');
        });

        $("#jawabanhp").on("input", function(eventjawabanhp) {
            var stringCantDelete = "+62";
            eventjawabanhp.target.value = `${stringCantDelete}${eventjawabanhp.target.value.substring(stringCantDelete.length)}`;
        });

        $("#jawabanhp").on("focus", function(eventjawabanhp) {
            var stringCantDelete = "+62";
            if (eventjawabanhp.target.value === stringCantDelete || eventjawabanhp.target.value.length === 0) {
                eventjawabanhp.target.value = stringCantDelete;    
            }
        });

        $('#time-senin').click(function(event) {
            event.stopPropagation();
            $('#jawabanjamss').trigger('click');
            $('#time-seninz').show(function(){
                $(window).click(function() {
                    $('#time-seninz').hide();
                });
            });
        });

        $('#time-senindokter').click(function(event) {
            event.stopPropagation();
            $('#time-seninzdokter').show(function(){
                $(window).click(function() {
                    $('#time-seninzdokter').hide();
                });
            });
        });

        $('#time-selasa').click(function(event) {
            event.stopPropagation();
            $('#jawabanjamss').trigger('click');
            $('#time-selasaz').show(function(){
                $(window).click(function() {
                    $('#time-selasaz').hide();
                });
            });
        });

        $('#time-selasadokter').click(function(event) {
            event.stopPropagation();
            $('#time-selasazdokter').show(function(){
                $(window).click(function() {
                    $('#time-selasazdokter').hide();
                });
            });
        });

        $('#time-rabu').click(function(event) {
            event.stopPropagation();
            $('#jawabanjamss').trigger('click');
            $('#time-rabuz').show(function(){
                $(window).click(function() {
                    $('#time-rabuz').hide();
                });
            });
        });   

        $('#time-rabudokter').click(function(event) {
            event.stopPropagation();
            $('#time-rabuzdokter').show(function(){
                $(window).click(function() {
                    $('#time-rabuzdokter').hide();
                });
            });
        });     

        $('#time-kamis').click(function(event) {
            event.stopPropagation();
            $('#jawabanjamss').trigger('click');
            $('#time-kamisz').show(function(){
                $(window).click(function() {
                    $('#time-kamisz').hide();
                });
            });
        });

        $('#time-kamisdokter').click(function(event) {
            event.stopPropagation();
            $('#time-kamiszdokter').show(function(){
                $(window).click(function() {
                    $('#time-kamiszdokter').hide();
                });
            });
        });

        $('#time-jumat').click(function(event) {
            event.stopPropagation();
            $('#jawabanjamss').trigger('click');
            $('#time-jumatz').show(function(){
                $(window).click(function() {
                    $('#time-jumatz').hide();
                });
            });
        });

        $('#time-jumatdokter').click(function(event) {
            event.stopPropagation();
            $('#time-jumatzdokter').show(function(){
                $(window).click(function() {
                    $('#time-jumatzdokter').hide();
                });
            });
        });

        $('#time-sabtu').click(function(event) {
            event.stopPropagation();
            $('#jawabanjamss').trigger('click');
            $('#time-sabtuz').show(function(){
                $(window).click(function() {
                    $('#time-sabtuz').hide();
                });
            });
        });

        $('#time-sabtudokter').click(function(event) {
            event.stopPropagation();
            $('#time-sabtuzdokter').show(function(){
                $(window).click(function() {
                    $('#time-sabtuzdokter').hide();
                });
            });
        });

        $('#time-minggu').click(function(event) {
            event.stopPropagation();
            $('#jawabanjamss').trigger('click');
            $('#time-mingguz').show(function(){
                $(window).click(function() {
                    $('#time-mingguz').hide();
                });
            });
        });

        $('#time-minggudokter').click(function(event) {
            event.stopPropagation();
            $('#time-mingguzdokter').show(function(){
                $(window).click(function() {
                    $('#time-mingguzdokter').hide();
                });
            });
        });