$(document).ready(function() {
  $('#tablePdb').hide();
});

$('#submitButton').click(function getAPI() {
  var pdbAPI = "https://pasopatiexdb.herokuapp.com/api";
  var passcode = $('#passcode').val();

  $.post(pdbAPI, {
    "passcode": passcode
  }, "json")
  .done(function renderData(data) {
    if (data.status) {
      $('#formPdb').hide();
      $('#tablePdb').show();

      $.each(data.data["Input_Data_Lembaga_Panahan"], function(key, singledata) {
        // row
        var tr = $(document.createElement('tr'));

        // nama
        var tdNama = $(document.createElement('td'));
        tdNama.html(singledata["Nama_Lembaga_Individu"]);
        tdNama.appendTo(tr);

        // alamat
        var tdAlamat = $(document.createElement('td'));
        tdAlamat.html(singledata["Alamat"]);
        tdAlamat.appendTo(tr);

        // cp
        var tdKontak = $(document.createElement('td'));
        tdKontak.html(singledata["Nama_Lembaga_Individu"]);
        tdKontak.appendTo(tr);

        // nomor telp
        var tdTelp = $(document.createElement('td'));
        tdTelp.html(singledata["Nomor_Telepon_HP"]);
        tdTelp.appendTo(tr);

        // hp
        var tdHP = $(document.createElement('td'));
        tdHP.html(singledata["Nomor_HP"]);
        tdHP.appendTo(tr);

        // email
        var tdEmail = $(document.createElement('td'));
        tdEmail.html(singledata["Email"]);
        tdEmail.appendTo(tr);

        // foto
        var tdFoto = $(document.createElement('td'));
        tdFoto.html(singledata["Foto_Lokasi"]);
        tdFoto.appendTo(tr);

        // info
        var tdInfo = $(document.createElement('td'));
        tdInfo.html(singledata["Informasi_Lain_Selengkapnya"]);
        tdInfo.appendTo(tr);

        // kategori
        var tdKategori = $(document.createElement('td'));
        var tdKategoriKonten = singledata["Kategori"];
        tdKategoriKonten = tdKategoriKonten.replace("[", "");
        tdKategoriKonten = tdKategoriKonten.replace("]", "");
        tdKategori.html(tdKategoriKonten);
        tdKategori.appendTo(tr);

        // sosmed
        var tdSosmed = $(document.createElement('td'));
        tdSosmed.html(singledata["Akun_Social_Media_FB_Line_Twitter_dll"]);
        tdSosmed.appendTo(tr);

        // Final append
        tr.appendTo(document.getElementById("pdb-table-body"));
      });
    } else {
      $('#textError').text("Passcode salah. Silahkan coba lagi");
    }
  });
});
