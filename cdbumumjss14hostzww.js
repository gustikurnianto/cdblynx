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
        
            $('#t-dropdown-input').on('click', function() {
                event.stopPropagation();
            	$(this).parent().next().slideDown('fast');
            	$('#t-dropdown-inputz').hide(function(){
                    $(window).click(function() {
                        $('.t-dropdown-list').slideUp('fast');
                    });
                });
            	var titlebuttonscaling = document.querySelector('.titlebuttonscaling').innerHTML;
            	var titlebuttontambal = document.querySelector('.titlebuttontambal').innerHTML;
            	var titlebuttonbedah = document.querySelector('.titlebuttonbedah').innerHTML;
            	var titlebuttonbehel = document.querySelector('.titlebuttonbehel').innerHTML;
            	var titlebuttongigitiruan = document.querySelector('.titlebuttongigitiruan').innerHTML;
            	var titlebuttonbleaching = document.querySelector('.titlebuttonbleaching').innerHTML;
            	var titlebuttonveneer = document.querySelector('.titlebuttonveneer').innerHTML;
            	var titlebuttontulang = document.querySelector('.titlebuttontulang').innerHTML;
            	var titlebuttonlainnya = document.querySelector('.titlebuttonlainnya').innerHTML;
            	$('#t-dropdown-item2').text(titlebuttonscaling);
            	$('#t-dropdown-item3').text(titlebuttontambal);
            	$('#t-dropdown-item4').text(titlebuttonbedah);
            	$('#t-dropdown-item5').text(titlebuttonbehel);
            	$('#t-dropdown-item6').text(titlebuttongigitiruan);
            	$('#t-dropdown-item7').text(titlebuttonbleaching);
            	$('#t-dropdown-item8').text(titlebuttonveneer);
            	$('#t-dropdown-item9').text(titlebuttontulang);
            	$('#t-dropdown-item10').text(titlebuttonlainnya);
            });
            
            $('.t-select-btn').on('click', function() {
            	event.stopPropagation();
            	$(this).parent().next().slideDown('fast');
            	$('#t-dropdown-inputz').hide(function(){
                    $(window).click(function() {
                        $('.t-dropdown-list').slideUp('fast');
                    });
                });
            	var titlebuttonscaling = document.querySelector('.titlebuttonscaling').innerHTML;
            	var titlebuttontambal = document.querySelector('.titlebuttontambal').innerHTML;
            	var titlebuttonbedah = document.querySelector('.titlebuttonbedah').innerHTML;
            	var titlebuttonbehel = document.querySelector('.titlebuttonbehel').innerHTML;
            	var titlebuttongigitiruan = document.querySelector('.titlebuttongigitiruan').innerHTML;
            	var titlebuttonbleaching = document.querySelector('.titlebuttonbleaching').innerHTML;
            	var titlebuttonveneer = document.querySelector('.titlebuttonveneer').innerHTML;
            	var titlebuttontulang = document.querySelector('.titlebuttontulang').innerHTML;
            	var titlebuttonlainnya = document.querySelector('.titlebuttonlainnya').innerHTML;
            	$('#t-dropdown-item2').text(titlebuttonscaling);
            	$('#t-dropdown-item3').text(titlebuttontambal);
            	$('#t-dropdown-item4').text(titlebuttonbedah);
            	$('#t-dropdown-item5').text(titlebuttonbehel);
            	$('#t-dropdown-item6').text(titlebuttongigitiruan);
            	$('#t-dropdown-item7').text(titlebuttonbleaching);
            	$('#t-dropdown-item8').text(titlebuttonveneer);
            	$('#t-dropdown-item9').text(titlebuttontulang);
            	$('#t-dropdown-item10').text(titlebuttonlainnya);
            });
            
            $('#t-dropdown-input').width($('.t-dropdown-select').width() - $('.t-select-btn').width() - 13);
            
            $('.t-dropdown-list').width($('.t-dropdown-select').width());
            
            $('#t-dropdown-input').val('');
            
            $('li.t-dropdown-item').on('click', function() {
              var text = $(this).html();
              $(this).parent().prev().find('#t-dropdown-input').val(text);
              $('#t-dropdown-inputz').val(text);
              $('#t-dropdown-inputz').trigger('click');
              $('.t-dropdown-list').slideUp('fast');
            });

        $('#time-senin').click(function(event) {
            event.stopPropagation();
            $(".jawabanjamsdokter").prop('disabled', true );
            $(".jawabanjamsdokter").css('cursor', 'none' );
            $(".jawabanjamsdokter").css('color', 'rgb(184, 184, 184)' );
            $(".jawabanjamsdokter").text('pilih dokter');
            $("#jawabanjamssdokter").val('');
            $('#jawabanjamssdokter').trigger('click');
            $(".jawabanjams").text('pilih waktu reservasi');
            $(".jawabanjams").css('color', 'rgb(184, 184, 184)' );
            $('#jawabanjamss').trigger('click');
            $('#time-seninz').show(function(){
                $(window).click(function() {
                    $('#time-seninz').hide();
                });
            });
        });

        $('#time-senindokter').click(function(event) {
            event.stopPropagation();
            setTimeout(function(){
                $('#time-seninzdokter').show(function(){
                    $(window).click(function() {
                        $('#time-seninzdokter').hide();
                    });
                });
            }, 50);
        });

        $('#time-selasa').click(function(event) {
            event.stopPropagation();
            $(".jawabanjamsdokter").prop('disabled', true );
            $(".jawabanjamsdokter").css('cursor', 'none' );
            $(".jawabanjamsdokter").css('color', 'rgb(184, 184, 184)' );
            $(".jawabanjamsdokter").text('pilih dokter');
            $("#jawabanjamssdokter").val('');
            $('#jawabanjamssdokter').trigger('click');
            $(".jawabanjams").text('pilih waktu reservasi');
            $(".jawabanjams").css('color', 'rgb(184, 184, 184)' );
            $('#jawabanjamss').trigger('click');
            $('#time-selasaz').show(function(){
                $(window).click(function() {
                    $('#time-selasaz').hide();
                });
            });
        });

        $('#time-selasadokter').click(function(event) {
            event.stopPropagation();
            setTimeout(function(){
                $('#time-seninzdokter').show(function(){
                    $(window).click(function() {
                        $('#time-seninzdokter').hide();
                    });
                });
            }, 50);
        });

        $('#time-rabu').click(function(event) {
            event.stopPropagation();
            $(".jawabanjamsdokter").prop('disabled', true );
            $(".jawabanjamsdokter").css('cursor', 'none' );
            $(".jawabanjamsdokter").css('color', 'rgb(184, 184, 184)' );
            $(".jawabanjamsdokter").text('pilih dokter');
            $("#jawabanjamssdokter").val('');
            $('#jawabanjamssdokter').trigger('click');
            $(".jawabanjams").text('pilih waktu reservasi');
            $(".jawabanjams").css('color', 'rgb(184, 184, 184)' );
            $('#jawabanjamss').trigger('click');
            $('#time-rabuz').show(function(){
                $(window).click(function() {
                    $('#time-rabuz').hide();
                });
            });
        });   

        $('#time-rabudokter').click(function(event) {
            event.stopPropagation();
            setTimeout(function(){
                $('#time-rabuzdokter').show(function(){
                    $(window).click(function() {
                        $('#time-rabuzdokter').hide();
                    });
                });
            }, 50);
        });     

        $('#time-kamis').click(function(event) {
            event.stopPropagation();
            $(".jawabanjamsdokter").prop('disabled', true );
            $(".jawabanjamsdokter").css('cursor', 'none' );
            $(".jawabanjamsdokter").css('color', 'rgb(184, 184, 184)' );
            $(".jawabanjamsdokter").text('pilih dokter');
            $("#jawabanjamssdokter").val('');
            $('#jawabanjamssdokter').trigger('click');
            $(".jawabanjams").text('pilih waktu reservasi');
            $(".jawabanjams").css('color', 'rgb(184, 184, 184)' );
            $('#jawabanjamss').trigger('click');
            $('#time-kamisz').show(function(){
                $(window).click(function() {
                    $('#time-kamisz').hide();
                });
            });
        });

        $('#time-kamisdokter').click(function(event) {
            event.stopPropagation();
            setTimeout(function(){
                $('#time-kamiszdokter').show(function(){
                    $(window).click(function() {
                        $('#time-kamiszdokter').hide();
                    });
                });
            }, 50);
        });

        $('#time-jumat').click(function(event) {
            event.stopPropagation();
            $(".jawabanjamsdokter").prop('disabled', true );
            $(".jawabanjamsdokter").css('cursor', 'none' );
            $(".jawabanjamsdokter").css('color', 'rgb(184, 184, 184)' );
            $(".jawabanjamsdokter").text('pilih dokter');
            $("#jawabanjamssdokter").val('');
            $('#jawabanjamssdokter').trigger('click');
            $(".jawabanjams").text('pilih waktu reservasi');
            $(".jawabanjams").css('color', 'rgb(184, 184, 184)' );
            $('#jawabanjamss').trigger('click');
            $('#time-jumatz').show(function(){
                $(window).click(function() {
                    $('#time-jumatz').hide();
                });
            });
        });

        $('#time-jumatdokter').click(function(event) {
            event.stopPropagation();
            setTimeout(function(){
                $('#time-jumatzdokter').show(function(){
                    $(window).click(function() {
                        $('#time-jumatzdokter').hide();
                    });
                });
            }, 50);
        });

        $('#time-sabtu').click(function(event) {
            event.stopPropagation();
            $(".jawabanjamsdokter").prop('disabled', true );
            $(".jawabanjamsdokter").css('cursor', 'none' );
            $(".jawabanjamsdokter").css('color', 'rgb(184, 184, 184)' );
            $(".jawabanjamsdokter").text('pilih dokter');
            $("#jawabanjamssdokter").val('');
            $('#jawabanjamssdokter').trigger('click');
            $(".jawabanjams").text('pilih waktu reservasi');
            $(".jawabanjams").css('color', 'rgb(184, 184, 184)' );
            $('#jawabanjamss').trigger('click');
            $('#time-sabtuz').show(function(){
                $(window).click(function() {
                    $('#time-sabtuz').hide();
                });
            });
        });

        $('#time-sabtudokter').click(function(event) {
            event.stopPropagation();
            setTimeout(function(){
                $('#time-sabtuzdokter').show(function(){
                    $(window).click(function() {
                        $('#time-sabtuzdokter').hide();
                    });
                });
            }, 50);
        });

        $('#time-minggu').click(function(event) {
            event.stopPropagation();
            $(".jawabanjamsdokter").prop('disabled', true );
            $(".jawabanjamsdokter").css('cursor', 'none' );
            $(".jawabanjamsdokter").css('color', 'rgb(184, 184, 184)' );
            $(".jawabanjamsdokter").text('pilih dokter');
            $("#jawabanjamssdokter").val('');
            $('#jawabanjamssdokter').trigger('click');
            $(".jawabanjams").text('pilih waktu reservasi');
            $(".jawabanjams").css('color', 'rgb(184, 184, 184)' );
            $('#jawabanjamss').trigger('click');
            $('#time-mingguz').show(function(){
                $(window).click(function() {
                    $('#time-mingguz').hide();
                });
            });
        });

        $('#time-minggudokter').click(function(event) {
            event.stopPropagation();
            setTimeout(function(){
                $('#time-mingguzdokter').show(function(){
                    $(window).click(function() {
                        $('#time-mingguzdokter').hide();
                    });
                });
            }, 50);
        });