// ==========================================================
// TEKNİKVOLT - ELEKTRİK HESAPLAMA MODÜLÜ
// ==========================================================


// ==========================================================
// ELEKTRİK SAYFASINI OLUŞTUR
// ==========================================================

function elektrikModuluOlustur() {

    const elektrik = document.getElementById("elektrik");

    if (!elektrik) return;

    elektrik.innerHTML = `

    <div class="card">

        <h2>⚡ Elektrik Hesap Merkezi</h2>

        <p>
            Elektriksel güç, akım, gerilim düşümü, kablo ve
            kompanzasyon hesaplamaları
        </p>

    </div>


    <div class="cards">


        <!-- ================================================= -->
        <!-- kW → AMPER -->
        <!-- ================================================= -->

        <div class="card">

            <h3>⚡ kW → Amper</h3>

            <div class="input-group">

                <label>Güç (kW)</label>

                <input
                    type="number"
                    id="kw"
                    placeholder="Örn: 10"
                    step="0.01"
                >

                <label>Faz</label>

                <select id="faz">

                    <option value="1">
                        Monofaze 230 V
                    </option>

                    <option value="3">
                        Trifaze 400 V
                    </option>

                </select>

                <label>Cosφ</label>

                <input
                    type="number"
                    id="cosfi"
                    value="0.80"
                    min="0.01"
                    max="1"
                    step="0.01"
                >

                <button
                    class="hesaplaBtn"
                    onclick="hesaplaKwAmper()"
                >
                    Hesapla
                </button>

            </div>

            <div id="kwSonuc" class="sonuc"></div>

        </div>



        <!-- ================================================= -->
        <!-- AMPER → kW -->
        <!-- ================================================= -->

        <div class="card">

            <h3>🔄 Amper → kW</h3>

            <div class="input-group">

                <label>Akım (A)</label>

                <input
                    type="number"
                    id="amper"
                    placeholder="Örn: 25"
                    step="0.01"
                >

                <label>Faz</label>

                <select id="faz2">

                    <option value="1">
                        Monofaze 230 V
                    </option>

                    <option value="3">
                        Trifaze 400 V
                    </option>

                </select>

                <label>Cosφ</label>

                <input
                    type="number"
                    id="cosfi2"
                    value="0.80"
                    min="0.01"
                    max="1"
                    step="0.01"
                >

                <button
                    class="hesaplaBtn"
                    onclick="hesaplaKW()"
                >
                    Hesapla
                </button>

            </div>

            <div id="kwSonuc2" class="sonuc"></div>

        </div>



        <!-- ================================================= -->
        <!-- kVA → AMPER -->
        <!-- ================================================= -->

        <div class="card">

            <h3>⚡ kVA → Amper</h3>

            <div class="input-group">

                <label>Güç (kVA)</label>

                <input
                    type="number"
                    id="kva"
                    placeholder="Örn: 100"
                    step="0.01"
                >

                <label>Faz</label>

                <select id="fazKva">

                    <option value="1">
                        Monofaze 230 V
                    </option>

                    <option value="3">
                        Trifaze 400 V
                    </option>

                </select>

                <button
                    class="hesaplaBtn"
                    onclick="hesaplaKvaAmper()"
                >
                    Hesapla
                </button>

            </div>

            <div id="kvaSonuc" class="sonuc"></div>

        </div>



        <!-- ================================================= -->
        <!-- AMPER → kVA -->
        <!-- ================================================= -->

        <div class="card">

            <h3>🔄 Amper → kVA</h3>

            <div class="input-group">

                <label>Akım (A)</label>

                <input
                    type="number"
                    id="akva"
                    placeholder="Örn: 150"
                    step="0.01"
                >

                <label>Faz</label>

                <select id="akvaFaz">

                    <option value="1">
                        Monofaze 230 V
                    </option>

                    <option value="3">
                        Trifaze 400 V
                    </option>

                </select>

                <button
                    class="hesaplaBtn"
                    onclick="hesaplaAmperKva()"
                >
                    Hesapla
                </button>

            </div>

            <div id="akvaSonuc" class="sonuc"></div>

        </div>



        <!-- ================================================= -->
        <!-- kW → kVA -->
        <!-- ================================================= -->

        <div class="card">

            <h3>🔁 kW → kVA</h3>

            <div class="input-group">

                <label>Güç (kW)</label>

                <input
                    type="number"
                    id="kwKva"
                    placeholder="Örn: 50"
                    step="0.01"
                >

                <label>Cosφ</label>

                <input
                    type="number"
                    id="kwKvaCos"
                    value="0.80"
                    min="0.01"
                    max="1"
                    step="0.01"
                >

                <button
                    class="hesaplaBtn"
                    onclick="hesaplaKwKva()"
                >
                    Hesapla
                </button>

            </div>

            <div id="kwKvaSonuc" class="sonuc"></div>

        </div>



        <!-- ================================================= -->
        <!-- VOLTAJ DÜŞÜMÜ -->
        <!-- ================================================= -->

        <div class="card">

            <h3>📉 Gerilim / Voltaj Düşümü</h3>

            <div class="input-group">

                <label>Akım (A)</label>

                <input
                    type="number"
                    id="vdAkım"
                    placeholder="Örn: 32"
                    step="0.01"
                >

                <label>Kablo Uzunluğu (m)</label>

                <input
                    type="number"
                    id="vdUzunluk"
                    placeholder="Tek yön"
                    step="0.1"
                >

                <label>Kablo Kesiti (mm²)</label>

                <input
                    type="number"
                    id="vdKesit"
                    placeholder="Örn: 6"
                    step="0.5"
                >

                <label>Faz</label>

                <select id="vdFaz">

                    <option value="1">
                        Monofaze 230 V
                    </option>

                    <option value="3">
                        Trifaze 400 V
                    </option>

                </select>

                <label>İletken</label>

                <select id="vdMalzeme">

                    <option value="0.0175">
                        Bakır
                    </option>

                    <option value="0.0285">
                        Alüminyum
                    </option>

                </select>

                <label>Cosφ</label>

                <input
                    type="number"
                    id="vdCos"
                    value="0.80"
                    min="0.01"
                    max="1"
                    step="0.01"
                >

                <label>İzin Verilen Düşüm (%)</label>

                <input
                    type="number"
                    id="vdLimit"
                    value="3"
                    step="0.1"
                >

                <button
                    class="hesaplaBtn"
                    onclick="hesaplaVoltajDusumu()"
                >
                    Hesapla
                </button>

            </div>

            <div id="vdSonuc" class="sonuc"></div>

        </div>



        <!-- ================================================= -->
        <!-- KABLO KESİTİ SEÇİMİ -->
        <!-- ================================================= -->

        <div class="card">

            <h3>🔌 Kablo Kesiti Seçimi</h3>

            <div class="input-group">

                <label>Akım (A)</label>

                <input
                    type="number"
                    id="ksAkım"
                    placeholder="Örn: 32"
                    step="0.01"
                >

                <label>Mesafe (m)</label>

                <input
                    type="number"
                    id="ksMesafe"
                    placeholder="Örn: 50"
                    step="0.1"
                >

                <label>Faz</label>

                <select id="ksFaz">

                    <option value="1">
                        Monofaze 230 V
                    </option>

                    <option value="3">
                        Trifaze 400 V
                    </option>

                </select>

                <label>İletken</label>

                <select id="ksMalzeme">

                    <option value="0.0175">
                        Bakır
                    </option>

                    <option value="0.0285">
                        Alüminyum
                    </option>

                </select>

                <label>Cosφ</label>

                <input
                    type="number"
                    id="ksCos"
                    value="0.80"
                    min="0.01"
                    max="1"
                    step="0.01"
                >

                <label>Maksimum Gerilim Düşümü (%)</label>

                <input
                    type="number"
                    id="ksLimit"
                    value="3"
                    step="0.1"
                >

                <button
                    class="hesaplaBtn"
                    onclick="kabloKesitiSec()"
                >
                    Kesit Seç
                </button>

            </div>

            <div id="ksSonuc" class="sonuc"></div>

        </div>



        <!-- ================================================= -->
        <!-- KOMPANZASYON -->
        <!-- ================================================= -->

        <div class="card">

            <h3>🔋 Kompanzasyon / Kondansatör kVAr</h3>

            <div class="input-group">

                <label>Aktif Güç (kW)</label>

                <input
                    type="number"
                    id="kompKw"
                    placeholder="Örn: 100"
                    step="0.01"
                >

                <label>Mevcut Cosφ</label>

                <input
                    type="number"
                    id="cosEski"
                    value="0.80"
                    min="0.01"
                    max="1"
                    step="0.01"
                >

                <label>Hedef Cosφ</label>

                <input
                    type="number"
                    id="cosYeni"
                    value="0.98"
                    min="0.01"
                    max="1"
                    step="0.01"
                >

                <button
                    class="hesaplaBtn"
                    onclick="hesaplaKompanzasyon()"
                >
                    Hesapla
                </button>

            </div>

            <div id="kompSonuc" class="sonuc"></div>

        </div>



        <!-- ================================================= -->
        <!-- ENERJİ TÜKETİMİ -->
        <!-- ================================================= -->

        <div class="card">

            <h3>💡 Enerji Tüketimi / Maliyet</h3>

            <div class="input-group">

                <label>Güç (kW)</label>

                <input
                    type="number"
                    id="enerjiKw"
                    placeholder="Örn: 10"
                    step="0.01"
                >

                <label>Günlük Çalışma (saat)</label>

                <input
                    type="number"
                    id="enerjiSaat"
                    placeholder="Örn: 8"
                    step="0.1"
                >

                <label>Çalışma Günü</label>

                <input
                    type="number"
                    id="enerjiGun"
                    value="30"
                    step="1"
                >

                <label>Birim Fiyat (TL/kWh)</label>

                <input
                    type="number"
                    id="enerjiFiyat"
                    placeholder="Örn: 5"
                    step="0.01"
                >

                <button
                    class="hesaplaBtn"
                    onclick="hesaplaEnerji()"
                >
                    Hesapla
                </button>

            </div>

            <div id="enerjiSonuc" class="sonuc"></div>

        </div>



        <!-- ================================================= -->
        <!-- MOTOR AKIMI -->
        <!-- ================================================= -->

        <div class="card">

            <h3>⚙️ Motor Akımı</h3>

            <div class="input-group">

                <label>Motor Gücü (kW)</label>

                <input
                    type="number"
                    id="motorKw"
                    placeholder="Örn: 15"
                    step="0.01"
                >

                <label>Gerilim (V)</label>

                <input
                    type="number"
                    id="motorV"
                    value="400"
                    step="1"
                >

                <label>Cosφ</label>

                <input
                    type="number"
                    id="motorCos"
                    value="0.85"
                    min="0.01"
                    max="1"
                    step="0.01"
                >

                <label>Motor Verimi (%)</label>

                <input
                    type="number"
                    id="motorVerim"
                    value="90"
                    min="1"
                    max="100"
                    step="0.1"
                >

                <button
                    class="hesaplaBtn"
                    onclick="hesaplaMotorAkimi()"
                >
                    Hesapla
                </button>

            </div>

            <div id="motorSonuc" class="sonuc"></div>

        </div>



        <!-- ================================================= -->
        <!-- KISA DEVRE -->
        <!-- ================================================= -->

        <div class="card">

            <h3>⚠️ Temel Kısa Devre Akımı</h3>

            <div class="input-group">

                <label>Trafo Gücü (kVA)</label>

                <input
                    type="number"
                    id="kdKva"
                    placeholder="Örn: 1000"
                    step="1"
                >

                <label>Sekonder Gerilim (V)</label>

                <input
                    type="number"
                    id="kdV"
                    value="400"
                    step="1"
                >

                <label>Trafo Empedansı (%)</label>

                <input
                    type="number"
                    id="kdUk"
                    value="6"
                    step="0.1"
                >

                <button
                    class="hesaplaBtn"
                    onclick="hesaplaKisaDevre()"
                >
                    Hesapla
                </button>

            </div>

            <div id="kdSonuc" class="sonuc"></div>

        </div>


    </div>

    `;

}



// ==========================================================
// kW → AMPER
// ==========================================================

function hesaplaKwAmper() {

    const kw = parseFloat(document.getElementById("kw").value);

    const faz = document.getElementById("faz").value;

    const cosfi = parseFloat(document.getElementById("cosfi").value);


    if (!gecerli(kw) || !gecerliCos(cosfi)) {

        alert("Güç ve Cosφ değerlerini kontrol edin.");

        return;

    }


    let akim;


    if (faz == 1) {

        akim = (kw * 1000) / (230 * cosfi);

    }

    else {

        akim =
            (kw * 1000) /
            (1.7320508 * 400 * cosfi);

    }


    sonuc(
        "kwSonuc",
        "Akım: " + akim.toFixed(2) + " A"
    );

}



// ==========================================================
// AMPER → kW
// ==========================================================

function hesaplaKW() {

    const amper = parseFloat(document.getElementById("amper").value);

    const faz = document.getElementById("faz2").value;

    const cosfi = parseFloat(document.getElementById("cosfi2").value);


    if (!gecerli(amper) || !gecerliCos(cosfi)) {

        alert("Akım ve Cosφ değerlerini kontrol edin.");

        return;

    }


    let kw;


    if (faz == 1) {

        kw =
            (230 * amper * cosfi) /
            1000;

    }

    else {

        kw =
            (1.7320508 * 400 * amper * cosfi) /
            1000;

    }


    sonuc(
        "kwSonuc2",
        "Güç: " + kw.toFixed(2) + " kW"
    );

}



// ==========================================================
// kVA → AMPER
// ==========================================================

function hesaplaKvaAmper() {

    const kva =
        parseFloat(document.getElementById("kva").value);

    const faz =
        document.getElementById("fazKva").value;


    if (!gecerli(kva)) {

        alert("kVA değerini giriniz.");

        return;

    }


    let akim;


    if (faz == 1) {

        akim =
            (kva * 1000) / 230;

    }

    else {

        akim =
            (kva * 1000) /
            (1.7320508 * 400);

    }


    sonuc(
        "kvaSonuc",
        "Akım: " + akim.toFixed(2) + " A"
    );

}



// ==========================================================
// AMPER → kVA
// ==========================================================

function hesaplaAmperKva() {

    const amper =
        parseFloat(document.getElementById("akva").value);

    const faz =
        document.getElementById("akvaFaz").value;


    if (!gecerli(amper)) {

        alert("Akım değerini giriniz.");

        return;

    }


    let kva;


    if (faz == 1) {

        kva =
            (230 * amper) / 1000;

    }

    else {

        kva =
            (1.7320508 * 400 * amper) /
            1000;

    }


    sonuc(
        "akvaSonuc",
        "Görünür Güç: " + kva.toFixed(2) + " kVA"
    );

}



// ==========================================================
// kW → kVA
// ==========================================================

function hesaplaKwKva() {

    const kw =
        parseFloat(document.getElementById("kwKva").value);

    const cos =
        parseFloat(document.getElementById("kwKvaCos").value);


    if (!gecerli(kw) || !gecerliCos(cos)) {

        alert("kW ve Cosφ değerlerini kontrol edin.");

        return;

    }


    const kva = kw / cos;


    sonuc(
        "kwKvaSonuc",
        "Görünür Güç: " + kva.toFixed(2) + " kVA"
    );

}



// ==========================================================
// VOLTAJ DÜŞÜMÜ
// ==========================================================

function hesaplaVoltajDusumu() {

    const I =
        parseFloat(document.getElementById("vdAkım").value);

    const L =
        parseFloat(document.getElementById("vdUzunluk").value);

    const S =
        parseFloat(document.getElementById("vdKesit").value);

    const faz =
        document.getElementById("vdFaz").value;

    const rho =
        parseFloat(document.getElementById("vdMalzeme").value);

    const cos =
        parseFloat(document.getElementById("vdCos").value);

    const limit =
        parseFloat(document.getElementById("vdLimit").value);


    if (
        !gecerli(I) ||
        !gecerli(L) ||
        !gecerli(S) ||
        !gecerliCos(cos)
    ) {

        alert("Tüm değerleri kontrol edin.");

        return;

    }


    const sin =
        Math.sqrt(1 - Math.pow(cos, 2));


    const R =
        rho * L / S;


    /*
       AC gerilim düşümü:

       Monofaze:
       ΔV = 2 × I × L × (R'cosφ + X'sinφ)

       Trifaze:
       ΔV = √3 × I × L × (R'cosφ + X'sinφ)

       Burada temel hesap için reaktans yaklaşık
       olarak ihmal edilmektedir.
    */


    let dV;


    if (faz == 1) {

        dV =
            2 *
            I *
            R *
            cos;

    }

    else {

        dV =
            1.7320508 *
            I *
            R *
            cos;

    }


    const nominal =
        faz == 1 ? 230 : 400;


    const yuzde =
        (dV / nominal) * 100;


    const sonGerilim =
        nominal - dV;


    let durum;


    if (yuzde <= limit) {

        durum =
            "✅ Gerilim düşümü sınır içinde.";

    }

    else {

        durum =
            "⚠️ Gerilim düşümü izin verilen sınırı aşıyor.";

    }


    document.getElementById("vdSonuc").innerHTML = `

        <h3>Gerilim Düşümü: ${dV.toFixed(2)} V</h3>

        <p>
            Gerilim düşümü:
            <strong>${yuzde.toFixed(2)} %</strong>
        </p>

        <p>
            Yük ucundaki gerilim:
            <strong>${sonGerilim.toFixed(2)} V</strong>
        </p>

        <p>
            Kablo direnci:
            <strong>${R.toFixed(5)} Ω</strong>
        </p>

        <p>${durum}</p>

    `;

}



// ==========================================================
// KABLO KESİTİ SEÇİMİ
// ==========================================================

function kabloKesitiSec() {

    const I =
        parseFloat(document.getElementById("ksAkım").value);

    const L =
        parseFloat(document.getElementById("ksMesafe").value);

    const faz =
        document.getElementById("ksFaz").value;

    const rho =
        parseFloat(document.getElementById("ksMalzeme").value);

    const cos =
        parseFloat(document.getElementById("ksCos").value);

    const limit =
        parseFloat(document.getElementById("ksLimit").value);


    if (
        !gecerli(I) ||
        !gecerli(L) ||
        !gecerliCos(cos)
    ) {

        alert("Akım, mesafe ve Cosφ değerlerini kontrol edin.");

        return;

    }


    const kesitler = [
        1.5,
        2.5,
        4,
        6,
        10,
        16,
        25,
        35,
        50,
        70,
        95,
        120,
        150,
        185,
        240
    ];


    const nominal =
        faz == 1 ? 230 : 400;


    let html =
        "<h3>Uygun Kesitler</h3>";


    let bulundu = false;


    kesitler.forEach(function(S) {

        const R =
            rho * L / S;


        let dV;


        if (faz == 1) {

            dV =
                2 *
                I *
                R *
                cos;

        }

        else {

            dV =
                1.7320508 *
                I *
                R *
                cos;

        }


        const yuzde =
            (dV / nominal) * 100;


        if (yuzde <= limit) {

            bulundu = true;


            html += `

                <p>
                    <strong>${S} mm²</strong>
                    → ${dV.toFixed(2)} V
                    → ${yuzde.toFixed(2)} %
                </p>

            `;

        }

    });


    if (!bulundu) {

        html +=
            "<p>⚠️ Belirtilen kesitler içinde uygun değer bulunamadı.</p>";

    }


    html +=
        "<p>⚠️ Bu sonuç yalnızca gerilim düşümü kriterine göredir. " +
        "Kablo akım taşıma kapasitesi, döşeme şekli, ortam sıcaklığı, " +
        "kablo gruplaması ve koruma cihazı ayrıca kontrol edilmelidir.</p>";


    document.getElementById("ksSonuc").innerHTML =
        html;

}



// ==========================================================
// KOMPANZASYON
// ==========================================================

function hesaplaKompanzasyon() {

    const P =
        parseFloat(document.getElementById("kompKw").value);

    const eski =
        parseFloat(document.getElementById("cosEski").value);

    const yeni =
        parseFloat(document.getElementById("cosYeni").value);


    if (
        !gecerli(P) ||
        !gecerliCos(eski) ||
        !gecerliCos(yeni)
    ) {

        alert("Değerleri kontrol edin.");

        return;

    }


    const Q1 =
        P *
        Math.tan(Math.acos(eski));


    const Q2 =
        P *
        Math.tan(Math.acos(yeni));


    const Qc =
        Q1 - Q2;


    sonuc(
        "kompSonuc",
        "Gerekli kondansatör gücü: " +
        Math.max(Qc, 0).toFixed(2) +
        " kVAr"
    );

}



// ==========================================================
// ENERJİ
// ==========================================================

function hesaplaEnerji() {

    const kw =
        parseFloat(document.getElementById("enerjiKw").value);

    const saat =
        parseFloat(document.getElementById("enerjiSaat").value);

    const gun =
        parseFloat(document.getElementById("enerjiGun").value);

    const fiyat =
        parseFloat(document.getElementById("enerjiFiyat").value);


    if (
        !gecerli(kw) ||
        !gecerli(saat) ||
        !gecerli(gun) ||
        !gecerli(fiyat)
    ) {

        alert("Enerji değerlerini kontrol edin.");

        return;

    }


    const gunluk =
        kw * saat;


    const aylik =
        gunluk * gun;


    const maliyet =
        aylik * fiyat;


    document.getElementById("enerjiSonuc").innerHTML = `

        <h3>Günlük: ${gunluk.toFixed(2)} kWh</h3>

        <p>
            ${gun} günlük tüketim:
            <strong>${aylik.toFixed(2)} kWh</strong>
        </p>

        <p>
            Tahmini enerji maliyeti:
            <strong>${maliyet.toFixed(2)} TL</strong>
        </p>

    `;

}



// ==========================================================
// MOTOR AKIMI
// ==========================================================

function hesaplaMotorAkimi() {

    const P =
        parseFloat(document.getElementById("motorKw").value);

    const V =
        parseFloat(document.getElementById("motorV").value);

    const cos =
        parseFloat(document.getElementById("motorCos").value);

    const verim =
        parseFloat(document.getElementById("motorVerim").value) / 100;


    if (
        !gecerli(P) ||
        !gecerli(V) ||
        !gecerliCos(cos) ||
        verim <= 0
    ) {

        alert("Motor değerlerini kontrol edin.");

        return;

    }


    const I =
        (P * 1000) /
        (1.7320508 * V * cos * verim);


    sonuc(
        "motorSonuc",
        "Motor akımı: " +
        I.toFixed(2) +
        " A"
    );

}



// ==========================================================
// KISA DEVRE
// ==========================================================

function hesaplaKisaDevre() {

    const kva =
        parseFloat(document.getElementById("kdKva").value);

    const V =
        parseFloat(document.getElementById("kdV").value);

    const uk =
        parseFloat(document.getElementById("kdUk").value);


    if (
        !gecerli(kva) ||
        !gecerli(V) ||
        !gecerli(uk)
    ) {

        alert("Trafo değerlerini kontrol edin.");

        return;

    }


    const In =
        (kva * 1000) /
        (1.7320508 * V);


    const Ik =
        In / (uk / 100);


    document.getElementById("kdSonuc").innerHTML = `

        <h3>Nominal Akım: ${In.toFixed(2)} A</h3>

        <p>
            İdealize edilmiş trafo sekonder kısa devre akımı:
            <strong>${Ik.toFixed(0)} A</strong>
        </p>

        <p>
            ⚠️ Bu temel hesap; kablo empedansı,
            şebeke empedansı ve diğer etkileri içermez.
        </p>

    `;

}



// ==========================================================
// YARDIMCI FONKSİYONLAR
// ==========================================================

function gecerli(deger) {

    return (
        !isNaN(deger) &&
        isFinite(deger) &&
        deger > 0
    );

}


function gecerliCos(cos) {

    return (
        !isNaN(cos) &&
        isFinite(cos) &&
        cos > 0 &&
        cos <= 1
    );

}


function sonuc(id, metin) {

    document.getElementById(id).innerHTML =
        "<h3>" + metin + "</h3>";

}



// ==========================================================
// SAYFA AÇ
// ==========================================================

function sayfaAc(id) {

    document.querySelectorAll(".page").forEach(function(sayfa) {

        sayfa.style.display = "none";

    });


    const hedef =
        document.getElementById(id);


    if (hedef) {

        hedef.style.display = "block";

    }


    document.querySelectorAll(".menu").forEach(function(menu) {

        menu.classList.remove("active");

    });

}



// ==========================================================
// SAYFA YÜKLENİNCE ELEKTRİK MODÜLÜNÜ OLUŞTUR
// ==========================================================

document.addEventListener("DOMContentLoaded", function() {

    elektrikModuluOlustur();

});

// ==========================================================
// TEKNİKVOLT - MOTOR HESAPLAMA MODÜLÜ
// ==========================================================


// ==========================================================
// MOTOR SAYFASINI OLUŞTUR
// ==========================================================

function motorModuluOlustur() {

    const motor = document.getElementById("motor");

    if (!motor) return;

    motor.innerHTML = `

        <div class="card">

            <h2>⚙️ Motor Hesap Merkezi</h2>

            <p>
                Motor akımı, kalkış akımı, kablo, koruma,
                kontaktör, termik ve yol verme hesapları
            </p>

        </div>


        <div class="cards">


            <!-- ================================================= -->
            <!-- MOTOR AKIMI -->
            <!-- ================================================= -->

            <div class="card">

                <h3>⚡ Motor Nominal Akımı</h3>

                <div class="input-group">

                    <label>Motor Gücü (kW)</label>

                    <input
                        type="number"
                        id="mGuc"
                        placeholder="Örn: 15"
                        step="0.01"
                    >

                    <label>Gerilim (V)</label>

                    <input
                        type="number"
                        id="mGerilim"
                        value="400"
                        step="1"
                    >

                    <label>Faz</label>

                    <select id="mFaz">

                        <option value="3">
                            Trifaze 400 V
                        </option>

                        <option value="1">
                            Monofaze 230 V
                        </option>

                    </select>

                    <label>Cosφ</label>

                    <input
                        type="number"
                        id="mCos"
                        value="0.85"
                        min="0.01"
                        max="1"
                        step="0.01"
                    >

                    <label>Motor Verimi (%)</label>

                    <input
                        type="number"
                        id="mVerim"
                        value="90"
                        min="1"
                        max="100"
                        step="0.1"
                    >

                    <label>Motor Etiket Akımı (A) - Opsiyonel</label>

                    <input
                        type="number"
                        id="mEtiket"
                        placeholder="Varsa motor etiket değerini gir"
                        step="0.01"
                    >

                    <button
                        class="hesaplaBtn"
                        onclick="hesaplaMotorMerkez()"
                    >
                        Hesapla
                    </button>

                </div>

                <div id="mAkımSonuc" class="sonuc"></div>

            </div>



            <!-- ================================================= -->
            <!-- KALKIŞ AKIMI -->
            <!-- ================================================= -->

            <div class="card">

                <h3>🚀 Motor Kalkış Akımı</h3>

                <div class="input-group">

                    <label>Nominal Motor Akımı (A)</label>

                    <input
                        type="number"
                        id="mkAkım"
                        placeholder="Örn: 28"
                        step="0.01"
                    >

                    <label>Kalkış Akımı Katsayısı</label>

                    <select id="mkKatsayi">

                        <option value="5">
                            5 × In
                        </option>

                        <option value="6" selected>
                            6 × In
                        </option>

                        <option value="7">
                            7 × In
                        </option>

                        <option value="8">
                            8 × In
                        </option>
                        
                    </select>

                    <button
                        class="hesaplaBtn"
                        onclick="hesaplaKalkisAkimi()"
                    >
                        Hesapla
                    </button>

                </div>

                <div id="mkSonuc" class="sonuc"></div>

            </div>



            <!-- ================================================= -->
            <!-- MOTOR KORUMA -->
            <!-- ================================================= -->

            <div class="card">

                <h3>🛡️ Motor Koruma / Termik</h3>

                <div class="input-group">

                    <label>Motor Akımı (A)</label>

                    <input
                        type="number"
                        id="korMotorAkım"
                        placeholder="Örn: 28"
                        step="0.01"
                    >

                    <button
                        class="hesaplaBtn"
                        onclick="hesaplaMotorKoruma()"
                    >
                        Seç
                    </button>

                </div>

                <div id="korMotorSonuc" class="sonuc"></div>

            </div>



            <!-- ================================================= -->
            <!-- KONTAKTÖR -->
            <!-- ================================================= -->

            <div class="card">

                <h3>🔌 Kontaktör Ön Seçimi</h3>

                <div class="input-group">

                    <label>Motor Akımı (A)</label>

                    <input
                        type="number"
                        id="konAkım"
                        placeholder="Örn: 28"
                        step="0.01"
                    >

                    <label>Motor Gücü (kW)</label>

                    <input
                        type="number"
                        id="konKw"
                        placeholder="Örn: 15"
                        step="0.01"
                    >

                    <button
                        class="hesaplaBtn"
                        onclick="hesaplaKontaktör()"
                    >
                        Seç
                    </button>

                </div>

                <div id="konSonuc" class="sonuc"></div>

            </div>



            <!-- ================================================= -->
            <!-- KABLO -->
            <!-- ================================================= -->

            <div class="card">

                <h3>🔌 Motor Kablo Ön Seçimi</h3>

                <div class="input-group">

                    <label>Motor Akımı (A)</label>

                    <input
                        type="number"
                        id="mkabloAkım"
                        placeholder="Örn: 28"
                        step="0.01"
                    >

                    <label>Kablo Uzunluğu (m)</label>

                    <input
                        type="number"
                        id="mkabloMesafe"
                        placeholder="Örn: 50"
                        step="0.1"
                    >

                    <label>Faz</label>

                    <select id="mkabloFaz">

                        <option value="3">
                            Trifaze 400 V
                        </option>

                        <option value="1">
                            Monofaze 230 V
                        </option>

                    </select>

                    <label>İletken</label>

                    <select id="mkabloMalzeme">

                        <option value="0.0175">
                            Bakır
                        </option>

                        <option value="0.0285">
                            Alüminyum
                        </option>

                    </select>

                    <label>Cosφ</label>

                    <input
                        type="number"
                        id="mkabloCos"
                        value="0.85"
                        min="0.01"
                        max="1"
                        step="0.01"
                    >

                    <label>Maksimum Gerilim Düşümü (%)</label>

                    <input
                        type="number"
                        id="mkabloLimit"
                        value="3"
                        step="0.1"
                    >

                    <button
                        class="hesaplaBtn"
                        onclick="motorKabloSec()"
                    >
                        Kesit Seç
                    </button>

                </div>

                <div id="mkabloSonuc" class="sonuc"></div>

            </div>



            <!-- ================================================= -->
            <!-- SİGORTA / TMŞ -->
            <!-- ================================================= -->

            <div class="card">

                <h3>🛡️ Sigorta / TMŞ Ön Seçimi</h3>

                <div class="input-group">

                    <label>Motor Akımı (A)</label>

                    <input
                        type="number"
                        id="sigMotorAkım"
                        placeholder="Örn: 28"
                        step="0.01"
                    >

                    <label>Yol Verme</label>

                    <select id="sigYol">

                        <option value="direkt">
                            Direkt Yol Verme
                        </option>

                        <option value="yildiz">
                            Yıldız-Üçgen
                        </option>

                        <option value="soft">
                            Soft Starter
                        </option>

                        <option value="surucu">
                            Frekans Konvertörü
                        </option>

                    </select>

                    <button
                        class="hesaplaBtn"
                        onclick="hesaplaSigortaTMŞ()"
                    >
                        Ön Seçim
                    </button>

                </div>

                <div id="sigSonuc" class="sonuc"></div>

            </div>



            <!-- ================================================= -->
            <!-- YOL VERME -->
            <!-- ================================================= -->

            <div class="card">

                <h3>🔄 Motor Yol Verme Yöntemi</h3>

                <div class="input-group">

                    <label>Motor Gücü (kW)</label>

                    <input
                        type="number"
                        id="yolKw"
                        placeholder="Örn: 30"
                        step="0.01"
                    >

                    <label>Motor Gücü / Şebeke</label>

                    <select id="yolSecim">

                        <option value="direkt">
                            Direkt Yol Verme
                        </option>

                        <option value="yildiz">
                            Yıldız-Üçgen
                        </option>

                        <option value="soft">
                            Soft Starter
                        </option>

                        <option value="surucu">
                            Frekans Konvertörü
                        </option>

                    </select>

                    <button
                        class="hesaplaBtn"
                        onclick="motorYolVerme()"
                    >
                        Değerlendir
                    </button>

                </div>

                <div id="yolSonuc" class="sonuc"></div>

            </div>



            <!-- ================================================= -->
            <!-- YILDIZ ÜÇGEN -->
            <!-- ================================================= -->

            <div class="card">

                <h3>⭐ Yıldız-Üçgen Hesabı</h3>

                <div class="input-group">

                    <label>Motor Nominal Akımı (A)</label>

                    <input
                        type="number"
                        id="yuAkım"
                        placeholder="Örn: 28"
                        step="0.01"
                    >

                    <button
                        class="hesaplaBtn"
                        onclick="hesaplaYildizUcgen()"
                    >
                        Hesapla
                    </button>

                </div>

                <div id="yuSonuc" class="sonuc"></div>

            </div>



            <!-- ================================================= -->
            <!-- MOTOR GÜÇLERİ -->
            <!-- ================================================= -->

            <div class="card">

                <h3>📊 Motor Güç Analizi</h3>

                <div class="input-group">

                    <label>Aktif Güç (kW)</label>

                    <input
                        type="number"
                        id="mgKw"
                        placeholder="Örn: 15"
                        step="0.01"
                    >

                    <label>Cosφ</label>

                    <input
                        type="number"
                        id="mgCos"
                        value="0.85"
                        min="0.01"
                        max="1"
                        step="0.01"
                    >

                    <button
                        class="hesaplaBtn"
                        onclick="hesaplaMotorGucleri()"
                    >
                        Hesapla
                    </button>

                </div>

                <div id="mgSonuc" class="sonuc"></div>

            </div>


        </div>



        <!-- ================================================= -->
        <!-- ÖNEMLİ NOT -->
        <!-- ================================================= -->

        <div
            class="card"
            style="
                margin-top:20px;
                border-left:5px solid #FFD54F;
                background:#172554;
            "
        >

            <h3 style="color:#FFD54F;">
                ⚠️ Önemli Not
            </h3>

            <p style="margin:0; color:#e2e8f0;">

                Bu bölümde hesaplanan motor akımı, kablo kesiti,
                sigorta, TMŞ, motor koruma şalteri, kontaktör ve
                termik değerleri hesaplama amaçlı başlangıç değerleridir.
                Nihai seçimde motorun üretici/etiket değerleri,
                çalışma koşulları, kalkış yöntemi, kablo döşeme şekli,
                ortam sıcaklığı, kablo gruplaması ve ilgili cihazların
                üretici karakteristikleri dikkate alınmalıdır.

            </p>

        </div>

    `;

}



// ==========================================================
// MOTOR NOMİNAL AKIMI
// ==========================================================

function hesaplaMotorMerkez() {

    const P =
        parseFloat(document.getElementById("mGuc").value);

    const V =
        parseFloat(document.getElementById("mGerilim").value);

    const faz =
        document.getElementById("mFaz").value;

    const cos =
        parseFloat(document.getElementById("mCos").value);

    const verim =
        parseFloat(document.getElementById("mVerim").value) / 100;

    const etiket =
        parseFloat(document.getElementById("mEtiket").value);


    if (
        !gecerliMotor(P) ||
        !gecerliMotor(V) ||
        !gecerliMotorCos(cos) ||
        verim <= 0 ||
        verim > 1
    ) {

        alert("Motor değerlerini kontrol edin.");

        return;

    }


    let I;


    if (faz == "1") {

        I =
            (P * 1000) /
            (V * cos * verim);

    }

    else {

        I =
            (P * 1000) /
            (1.7320508 * V * cos * verim);

    }


    let sonucMetni = `

        <h3>Hesaplanan Motor Akımı: ${I.toFixed(2)} A</h3>

        <p>
            Görünür güç:
            <strong>${(P / cos).toFixed(2)} kVA</strong>
        </p>

    `;


    if (!isNaN(etiket) && etiket > 0) {

        const fark =
            I - etiket;

        const farkYuzde =
            (fark / etiket) * 100;


        sonucMetni += `

            <p>
                Motor etiket akımı:
                <strong>${etiket.toFixed(2)} A</strong>
            </p>

            <p>
                Hesap / etiket farkı:
                <strong>${farkYuzde.toFixed(1)} %</strong>
            </p>

            <p>
                ⚠️ Nihai seçimde motor etiket akımı
                esas alınmalıdır.
            </p>

        `;

    }


    document.getElementById("mAkımSonuc").innerHTML =
        sonucMetni;

}



// ==========================================================
// KALKIŞ AKIMI
// ==========================================================

function hesaplaKalkisAkimi() {

    const I =
        parseFloat(document.getElementById("mkAkım").value);

    const katsayi =
        parseFloat(document.getElementById("mkKatsayi").value);


    if (!gecerliMotor(I)) {

        alert("Motor nominal akımını giriniz.");

        return;

    }


    const kalkis =
        I * katsayi;


    document.getElementById("mkSonuc").innerHTML = `

        <h3>Tahmini Kalkış Akımı: ${kalkis.toFixed(2)} A</h3>

        <p>
            Hesap:
            ${I.toFixed(2)} A × ${katsayi}
        </p>

        <p>
            ⚠️ Gerçek kalkış akımı motor üreticisi
            ve yol verme yöntemine göre değişebilir.
        </p>

    `;

}



// ==========================================================
// MOTOR KORUMA / TERMİK
// ==========================================================

function hesaplaMotorKoruma() {

    const I =
        parseFloat(
            document.getElementById("korMotorAkım").value
        );


    if (!gecerliMotor(I)) {

        alert("Motor akımını giriniz.");

        return;

    }


    const alt =
        I * 0.90;

    const ust =
        I * 1.10;


    const standartlar = [
        1.6,
        2.5,
        4,
        6.3,
        10,
        16,
        20,
        25,
        32,
        40,
        50,
        63,
        80,
        100
    ];


    let uygun = null;


    for (let i = 0; i < standartlar.length; i++) {

        if (standartlar[i] >= I) {

            uygun = standartlar[i];

            break;

        }

    }


    document.getElementById("korMotorSonuc").innerHTML = `

        <h3>Termik Ayar Başlangıç Aralığı</h3>

        <p>
            Yaklaşık alt sınır:
            <strong>${alt.toFixed(2)} A</strong>
        </p>

        <p>
            Yaklaşık üst sınır:
            <strong>${ust.toFixed(2)} A</strong>
        </p>

        <p>
            Motor akımına yakın standart aralık:
            <strong>${uygun ? uygun + " A" : "Kontrol gerekli"}</strong>
        </p>

        <p>
            ⚠️ Motor üretici ayar aralığı ve gerçek etiket akımı
            mutlaka kontrol edilmelidir.
        </p>

    `;

}



// ==========================================================
// KONTAKTÖR
// ==========================================================

function hesaplaKontaktör() {

    const I =
        parseFloat(document.getElementById("konAkım").value);

    const kw =
        parseFloat(document.getElementById("konKw").value);


    if (!gecerliMotor(I)) {

        alert("Motor akımını giriniz.");

        return;

    }


    const kontaktorler = [
        9,
        12,
        18,
        25,
        32,
        40,
        50,
        65,
        80,
        95,
        115,
        150,
        170,
        205,
        245
    ];


    let secilen = null;


    for (let i = 0; i < kontaktorler.length; i++) {

        if (kontaktorler[i] >= I) {

            secilen = kontaktorler[i];

            break;

        }

    }


    document.getElementById("konSonuc").innerHTML = `

        <h3>Ön Seçim: ${secilen ? secilen + " A AC-3" : "Kontrol gerekli"}</h3>

        <p>
            Motor akımı:
            <strong>${I.toFixed(2)} A</strong>
        </p>

        ${
            !isNaN(kw) && kw > 0
            ?
            `<p>Motor gücü: <strong>${kw.toFixed(2)} kW</strong></p>`
            :
            ""
        }

        <p>
            ⚠️ Kontaktör seçiminde üreticinin AC-3
            motor gücü ve kullanım kategorisi kontrol edilmelidir.
        </p>

    `;

}



// ==========================================================
// MOTOR KABLO KESİTİ
// ==========================================================

function motorKabloSec() {

    const I =
        parseFloat(
            document.getElementById("mkabloAkım").value
        );

    const L =
        parseFloat(
            document.getElementById("mkabloMesafe").value
        );

    const faz =
        document.getElementById("mkabloFaz").value;

    const rho =
        parseFloat(
            document.getElementById("mkabloMalzeme").value
        );

    const cos =
        parseFloat(
            document.getElementById("mkabloCos").value
        );

    const limit =
        parseFloat(
            document.getElementById("mkabloLimit").value
        );


    if (
        !gecerliMotor(I) ||
        !gecerliMotor(L) ||
        !gecerliMotorCos(cos)
    ) {

        alert("Motor kablo değerlerini kontrol edin.");

        return;

    }


    const kesitler = [
        1.5,
        2.5,
        4,
        6,
        10,
        16,
        25,
        35,
        50,
        70,
        95,
        120,
        150,
        185,
        240
    ];


    const akimTasima = {

        1.5: 16,
        2.5: 21,
        4: 28,
        6: 36,
        10: 50,
        16: 68,
        25: 89,
        35: 110,
        50: 134,
        70: 171,
        95: 207,
        120: 239,
        150: 272,
        185: 310,
        240: 364

    };


    const nominal =
        faz == "1" ? 230 : 400;


    let uygunlar = [];


    kesitler.forEach(function(S) {

        /*
            Gerilim düşümü temel hesabı.
        */

        const R =
            rho * L / S;


        let dV;


        if (faz == "1") {

            dV =
                2 *
                I *
                R *
                cos;

        }

        else {

            dV =
                1.7320508 *
                I *
                R *
                cos;

        }


        const yuzde =
            (dV / nominal) * 100;


        const tasima =
            akimTasima[S];


        if (
            yuzde <= limit &&
            tasima >= I
        ) {

            uygunlar.push({

                kesit: S,
                dusum: dV,
                yuzde: yuzde,
                tasima: tasima

            });

        }

    });


    let html =
        "<h3>Uygun Ön Seçimler</h3>";


    if (uygunlar.length > 0) {

        uygunlar.forEach(function(k) {

            html += `

                <p>

                    <strong>
                        ${k.kesit} mm²
                    </strong>

                    →
                    ${k.tasima} A taşıma

                    →

                    ${k.dusum.toFixed(2)} V

                    →

                    ${k.yuzde.toFixed(2)} %

                </p>

            `;

        });

        html += `

            <p>
                ⭐ İlk uygun kesit:
                <strong>${uygunlar[0].kesit} mm²</strong>
            </p>

        `;

    }

    else {

        html += `

            <p>
                ⚠️ Girilen şartlarda uygun kesit bulunamadı.
            </p>

        `;

    }


    html += `

        <p>
            ⚠️ Akım taşıma değerleri örnek ön seçim
            değerleridir. Döşeme şekli, ortam sıcaklığı,
            kablo gruplaması ve üretici tabloları ayrıca
            kontrol edilmelidir.
        </p>

    `;


    document.getElementById("mkabloSonuc").innerHTML =
        html;

}



// ==========================================================
// SİGORTA / TMŞ
// ==========================================================

function hesaplaSigortaTMŞ() {

    const I =
        parseFloat(
            document.getElementById("sigMotorAkım").value
        );

    const yol =
        document.getElementById("sigYol").value;


    if (!gecerliMotor(I)) {

        alert("Motor akımını giriniz.");

        return;

    }


    /*
       Motorlarda koruma cihazı seçimi;
       kalkış yöntemi ve cihaz karakteristiğine
       göre değişir.

       Burada yalnızca ön seçim yapıyoruz.
    */


    const standartlar = [
        6,
        10,
        16,
        20,
        25,
        32,
        40,
        50,
        63,
        80,
        100,
        125,
        160,
        200,
        250,
        315,
        400
    ];


    let secilen = null;


    for (let i = 0; i < standartlar.length; i++) {

        if (standartlar[i] >= I * 1.25) {

            secilen =
                standartlar[i];

            break;

        }

    }


    let yolText = "";


    if (yol == "direkt") {

        yolText =
            "Direkt yol verme";

    }

    else if (yol == "yildiz") {

        yolText =
            "Yıldız-üçgen";

    }

    else if (yol == "soft") {

        yolText =
            "Soft starter";

    }

    else {

        yolText =
            "Frekans konvertörü";

    }


    document.getElementById("sigSonuc").innerHTML = `

        <h3>
            Ön TMŞ/Sigorta değeri:
            ${secilen ? secilen + " A" : "Kontrol gerekli"}
        </h3>

        <p>
            Motor akımı:
            <strong>${I.toFixed(2)} A</strong>
        </p>

        <p>
            Yol verme:
            <strong>${yolText}</strong>
        </p>

        <p>
            ⚠️ Bu değer kesin cihaz seçimi değildir.
            Açma karakteristiği, kısa devre seviyesi,
            kalkış akımı ve üretici koordinasyon tabloları
            kontrol edilmelidir.
        </p>

    `;

}



// ==========================================================
// MOTOR YOL VERME
// ==========================================================

function motorYolVerme() {

    const kw =
        parseFloat(
            document.getElementById("yolKw").value
        );

    const secim =
        document.getElementById("yolSecim").value;


    if (!gecerliMotor(kw)) {

        alert("Motor gücünü giriniz.");

        return;

    }


    let baslik = "";
    let aciklama = "";


    if (secim == "direkt") {

        baslik =
            "Direkt Yol Verme";

        aciklama =
            "Basit ve düşük güçlü motorlarda kullanılabilir. " +
            "Kalkış akımı ve şebeke etkisi kontrol edilmelidir.";

    }


    else if (secim == "yildiz") {

        baslik =
            "Yıldız-Üçgen";

        aciklama =
            "Uygun motor bağlantısı ve motor etiket bilgisi " +
            "kontrol edilerek kullanılmalıdır.";

    }


    else if (secim == "soft") {

        baslik =
            "Soft Starter";

        aciklama =
            "Kalkış akımını ve mekanik darbeyi azaltmak " +
            "amacıyla kullanılabilir.";

    }


    else {

        baslik =
            "Frekans Konvertörü";

        aciklama =
            "Hız kontrolü ve kontrollü kalkış/duruş " +
            "gereken uygulamalarda kullanılabilir.";

    }


    document.getElementById("yolSonuc").innerHTML = `

        <h3>${baslik}</h3>

        <p>
            Motor gücü:
            <strong>${kw.toFixed(2)} kW</strong>
        </p>

        <p>${aciklama}</p>

        <p>
            ⚠️ Nihai yol verme seçimi motor,
            yük, kalkış süresi ve şebeke şartlarına
            göre değerlendirilmelidir.
        </p>

    `;

}



// ==========================================================
// YILDIZ - ÜÇGEN
// ==========================================================

function hesaplaYildizUcgen() {

    const I =
        parseFloat(
            document.getElementById("yuAkım").value
        );


    if (!gecerliMotor(I)) {

        alert("Motor nominal akımını giriniz.");

        return;

    }


    /*
        İdeal yaklaşık değerler:

        Yıldız hattı:
        I / √3

        Yıldız-üçgen kontaktör seçiminde
        gerçek üretici bağlantı ve AC-3
        değerleri kontrol edilmelidir.
    */


    const yildiz =
        I / 1.7320508;


    const delta =
        I;


    const kalkisYaklasik =
        I / 3;


    document.getElementById("yuSonuc").innerHTML = `

        <h3>Yıldız-Üçgen Temel Hesap</h3>

        <p>
            Motor nominal akımı:
            <strong>${I.toFixed(2)} A</strong>
        </p>

        <p>
            Yıldız tarafı yaklaşık:
            <strong>${yildiz.toFixed(2)} A</strong>
        </p>

        <p>
            Delta hattı:
            <strong>${delta.toFixed(2)} A</strong>
        </p>

        <p>
            İdeal kalkış akımı yaklaşımı:
            <strong>${kalkisYaklasik.toFixed(2)} A</strong>
        </p>

        <p>
            ⚠️ Bu değerler kontaktörlerin kesin seçimi değildir.
            Motor etiket bağlantısı ve üretici koordinasyon
            tabloları kontrol edilmelidir.
        </p>

    `;

}



// ==========================================================
// MOTOR AKTİF / REAKTİF / GÖRÜNÜR GÜÇ
// ==========================================================

function hesaplaMotorGucleri() {

    const P =
        parseFloat(
            document.getElementById("mgKw").value
        );

    const cos =
        parseFloat(
            document.getElementById("mgCos").value
        );


    if (
        !gecerliMotor(P) ||
        !gecerliMotorCos(cos)
    ) {

        alert("Motor güç ve Cosφ değerlerini kontrol edin.");

        return;

    }


    const S =
        P / cos;


    const Q =
        P *
        Math.tan(Math.acos(cos));


    document.getElementById("mgSonuc").innerHTML = `

        <h3>Motor Güçleri</h3>

        <p>
            Aktif güç:
            <strong>${P.toFixed(2)} kW</strong>
        </p>

        <p>
            Görünür güç:
            <strong>${S.toFixed(2)} kVA</strong>
        </p>

        <p>
            Reaktif güç:
            <strong>${Q.toFixed(2)} kVAr</strong>
        </p>

        <p>
            Cosφ:
            <strong>${cos.toFixed(2)}</strong>
        </p>

    `;

}



// ==========================================================
// MOTOR YARDIMCI FONKSİYONLARI
// ==========================================================

function gecerliMotor(deger) {

    return (
        !isNaN(deger) &&
        isFinite(deger) &&
        deger > 0
    );

}


function gecerliMotorCos(cos) {

    return (
        !isNaN(cos) &&
        isFinite(cos) &&
        cos > 0 &&
        cos <= 1
    );

}



// ==========================================================
// MOTOR MODÜLÜNÜ SAYFA YÜKLENİNCE HAZIRLA
// ==========================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        motorModuluOlustur();

    }
);

// ==========================================================
// TEKNİKVOLT - KORUMA HESAPLAMA MODÜLÜ
// ==========================================================


// ==========================================================
// KORUMA SAYFASINI OLUŞTUR
// ==========================================================

function korumaModuluOlustur() {

    const koruma = document.getElementById("koruma");

    if (!koruma) return;

    koruma.innerHTML = `

        <div class="card">

            <h2>🛡️ Koruma Hesap Merkezi</h2>

            <p>
                Sigorta, MCB, TMŞ, kaçak akım rölesi,
                kısa devre, kablo koruması ve parafudr
                ön seçim hesapları
            </p>

        </div>


        <div class="cards">


            <!-- ================================================= -->
            <!-- MCB / L OTOMAT -->
            <!-- ================================================= -->

            <div class="card">

                <h3>🧯 MCB / L Otomat Ön Seçimi</h3>

                <div class="input-group">

                    <label>Yük Akımı Ib (A)</label>

                    <input
                        type="number"
                        id="mcbIb"
                        placeholder="Örn: 18"
                        step="0.01"
                    >

                    <label>Kablo Taşıma Kapasitesi Iz (A)</label>

                    <input
                        type="number"
                        id="mcbIz"
                        placeholder="Örn: 25"
                        step="0.01"
                    >

                    <label>Karakteristik</label>

                    <select id="mcbKar">

                        <option value="B">
                            B Tipi
                        </option>

                        <option value="C" selected>
                            C Tipi
                        </option>

                        <option value="D">
                            D Tipi
                        </option>

                    </select>

                    <label>Kutup</label>

                    <select id="mcbPol">

                        <option value="1">
                            1P
                        </option>

                        <option value="2">
                            2P
                        </option>

                        <option value="3">
                            3P
                        </option>

                        <option value="4">
                            4P
                        </option>

                    </select>

                    <label>Prospektif Kısa Devre Ik (kA)</label>

                    <input
                        type="number"
                        id="mcbIk"
                        placeholder="Örn: 4"
                        step="0.1"
                    >

                    <button
                        class="hesaplaBtn"
                        onclick="mcbSec()"
                    >
                        Ön Seçim
                    </button>

                </div>

                <div id="mcbSonuc" class="sonuc"></div>

            </div>



            <!-- ================================================= -->
            <!-- TMŞ / MCCB -->
            <!-- ================================================= -->

            <div class="card">

                <h3>🛡️ TMŞ / MCCB Ön Seçimi</h3>

                <div class="input-group">

                    <label>Yük Akımı Ib (A)</label>

                    <input
                        type="number"
                        id="mccbIb"
                        placeholder="Örn: 160"
                        step="0.01"
                    >

                    <label>Kablo Taşıma Kapasitesi Iz (A)</label>

                    <input
                        type="number"
                        id="mccbIz"
                        placeholder="Örn: 190"
                        step="0.01"
                    >

                    <label>Kısa Devre Akımı Ik (kA)</label>

                    <input
                        type="number"
                        id="mccbIk"
                        placeholder="Örn: 20"
                        step="0.1"
                    >

                    <label>TMŞ Ayar Tipi</label>

                    <select id="mccbAyar">

                        <option value="sabit">
                            Sabit Ayarlı
                        </option>

                        <option value="ayarli">
                            Ayarlanabilir
                        </option>

                    </select>

                    <button
                        class="hesaplaBtn"
                        onclick="mccbSec()"
                    >
                        Ön Seçim
                    </button>

                </div>

                <div id="mccbSonuc" class="sonuc"></div>

            </div>



            <!-- ================================================= -->
            <!-- SİGORTA -->
            <!-- ================================================= -->

            <div class="card">

                <h3>🔥 Sigorta Ön Seçimi</h3>

                <div class="input-group">

                    <label>Yük Akımı Ib (A)</label>

                    <input
                        type="number"
                        id="sigIb"
                        placeholder="Örn: 20"
                        step="0.01"
                    >

                    <label>Kablo Taşıma Kapasitesi Iz (A)</label>

                    <input
                        type="number"
                        id="sigIz"
                        placeholder="Örn: 25"
                        step="0.01"
                    >

                    <label>Sigorta Tipi</label>

                    <select id="sigTip">

                        <option value="gG">
                            gG - Genel Amaçlı
                        </option>

                        <option value="aM">
                            aM - Motor
                        </option>

                    </select>

                    <label>Kısa Devre Akımı Ik (kA)</label>

                    <input
                        type="number"
                        id="sigIk"
                        placeholder="Örn: 10"
                        step="0.1"
                    >

                    <button
                        class="hesaplaBtn"
                        onclick="sigortaSec()"
                    >
                        Ön Seçim
                    </button>

                </div>

                <div id="sigortaSonuc" class="sonuc"></div>

            </div>



            <!-- ================================================= -->
            <!-- RCD -->
            <!-- ================================================= -->

            <div class="card">

                <h3>⚡ Kaçak Akım Rölesi</h3>

                <div class="input-group">

                    <label>Yük Akımı (A)</label>

                    <input
                        type="number"
                        id="rcdAkım"
                        placeholder="Örn: 32"
                        step="0.01"
                    >

                    <label>Kaçak Akım Hassasiyeti</label>

                    <select id="rcdHassas">

                        <option value="30">
                            30 mA
                        </option>

                        <option value="100">
                            100 mA
                        </option>

                        <option value="300">
                            300 mA
                        </option>

                    </select>

                    <label>RCD Tipi</label>

                    <select id="rcdTip">

                        <option value="AC">
                            Tip AC
                        </option>

                        <option value="A" selected>
                            Tip A
                        </option>

                        <option value="F">
                            Tip F
                        </option>

                        <option value="B">
                            Tip B
                        </option>

                    </select>

                    <label>Kutup</label>

                    <select id="rcdPol">

                        <option value="2">
                            2P
                        </option>

                        <option value="4">
                            4P
                        </option>

                    </select>

                    <button
                        class="hesaplaBtn"
                        onclick="rcdSec()"
                    >
                        Değerlendir
                    </button>

                </div>

                <div id="rcdSonuc" class="sonuc"></div>

            </div>



            <!-- ================================================= -->
            <!-- KABLO - SİGORTA KOORDİNASYONU -->
            <!-- ================================================= -->

            <div class="card">

                <h3>🔌 Kablo – Sigorta Koordinasyonu</h3>

                <div class="input-group">

                    <label>Yük Akımı Ib (A)</label>

                    <input
                        type="number"
                        id="koordIb"
                        placeholder="Örn: 25"
                        step="0.01"
                    >

                    <label>Sigorta / MCB In (A)</label>

                    <input
                        type="number"
                        id="koordIn"
                        placeholder="Örn: 32"
                        step="0.01"
                    >

                    <label>Kablo Taşıma Kapasitesi Iz (A)</label>

                    <input
                        type="number"
                        id="koordIz"
                        placeholder="Örn: 36"
                        step="0.01"
                    >

                    <button
                        class="hesaplaBtn"
                        onclick="kabloKorumaKontrol()"
                    >
                        Kontrol Et
                    </button>

                </div>

                <div id="koordSonuc" class="sonuc"></div>

            </div>



            <!-- ================================================= -->
            <!-- KESME KAPASİTESİ -->
            <!-- ================================================= -->

            <div class="card">

                <h3>⚠️ Kesme Kapasitesi Kontrolü</h3>

                <div class="input-group">

                    <label>Prospektif Kısa Devre Akımı Ik (kA)</label>

                    <input
                        type="number"
                        id="kesmeIk"
                        placeholder="Örn: 8"
                        step="0.1"
                    >

                    <label>Cihaz Kesme Kapasitesi Icn / Icu (kA)</label>

                    <input
                        type="number"
                        id="kesmeIcn"
                        placeholder="Örn: 10"
                        step="0.1"
                    >

                    <button
                        class="hesaplaBtn"
                        onclick="kesmeKapasitesiKontrol()"
                    >
                        Kontrol Et
                    </button>

                </div>

                <div id="kesmeSonuc" class="sonuc"></div>

            </div>



            <!-- ================================================= -->
            <!-- KISA DEVRE -->
            <!-- ================================================= -->

            <div class="card">

                <h3>💥 Trafo Kısa Devre Akımı</h3>

                <div class="input-group">

                    <label>Trafo Gücü (kVA)</label>

                    <input
                        type="number"
                        id="pkKva"
                        placeholder="Örn: 1000"
                        step="1"
                    >

                    <label>Sekonder Gerilim (V)</label>

                    <input
                        type="number"
                        id="pkV"
                        value="400"
                        step="1"
                    >

                    <label>Trafo Empedansı Uk (%)</label>

                    <input
                        type="number"
                        id="pkUk"
                        value="6"
                        step="0.1"
                    >

                    <button
                        class="hesaplaBtn"
                        onclick="korumaKisaDevre()"
                    >
                        Hesapla
                    </button>

                </div>

                <div id="pkSonuc" class="sonuc"></div>

            </div>



            <!-- ================================================= -->
            <!-- SPD -->
            <!-- ================================================= -->

            <div class="card">

                <h3>⚡ SPD / Parafudr Ön Değerlendirmesi</h3>

                <div class="input-group">

                    <label>Sistem</label>

                    <select id="spdSistem">

                        <option value="tns">
                            TN-S
                        </option>

                        <option value="tnc">
                            TN-C
                        </option>

                        <option value="tt">
                            TT
                        </option>

                    </select>

                    <label>Gerilim</label>

                    <select id="spdGerilim">

                        <option value="230">
                            230 / 400 V
                        </option>

                        <option value="400">
                            400 V
                        </option>

                    </select>

                    <label>SPD Tipi</label>

                    <select id="spdTip">

                        <option value="1">
                            Tip 1
                        </option>

                        <option value="2" selected>
                            Tip 2
                        </option>

                        <option value="3">
                            Tip 3
                        </option>

                        <option value="12">
                            Tip 1+2
                        </option>

                    </select>

                    <label>Yıldırım / Darbe Riski</label>

                    <select id="spdRisk">

                        <option value="normal">
                            Normal
                        </option>

                        <option value="yuksek">
                            Yüksek
                        </option>

                    </select>

                    <button
                        class="hesaplaBtn"
                        onclick="spdDegerlendir()"
                    >
                        Değerlendir
                    </button>

                </div>

                <div id="spdSonuc" class="sonuc"></div>

            </div>



            <!-- ================================================= -->
            <!-- SELEKTİVİTE -->
            <!-- ================================================= -->

            <div class="card">

                <h3>🔄 Basit Selektivite Kontrolü</h3>

                <div class="input-group">

                    <label>Alt Koruma Cihazı In (A)</label>

                    <input
                        type="number"
                        id="selAlt"
                        placeholder="Örn: 32"
                        step="0.01"
                    >

                    <label>Üst Koruma Cihazı In (A)</label>

                    <input
                        type="number"
                        id="selUst"
                        placeholder="Örn: 63"
                        step="0.01"
                    >

                    <button
                        class="hesaplaBtn"
                        onclick="selektiviteKontrol()"
                    >
                        Kontrol Et
                    </button>

                </div>

                <div id="selSonuc" class="sonuc"></div>

            </div>


        </div>



        <!-- ================================================= -->
        <!-- ÖNEMLİ NOT -->
        <!-- ================================================= -->

        <div
            class="card"
            style="
                margin-top:20px;
                border-left:5px solid #FFD54F;
                background:#172554;
            "
        >

            <h3 style="color:#FFD54F;">
                ⚠️ Önemli Not
            </h3>

            <p style="margin:0; color:#e2e8f0;">

                Bu bölümde hesaplanan sigorta, MCB, TMŞ,
                kaçak akım rölesi, kesme kapasitesi,
                SPD ve diğer koruma cihazı değerleri
                ön değerlendirme amaçlıdır. Nihai seçimde
                şebeke kısa devre seviyesi, kablo döşeme
                şekli, ortam sıcaklığı, yük karakteristiği,
                cihaz üreticisinin açma karakteristikleri,
                koordinasyon tabloları ve ilgili standartlar
                kontrol edilmelidir.

            </p>

        </div>

    `;

}



// ==========================================================
// MCB / L OTOMAT
// ==========================================================

function mcbSec() {

    const Ib =
        parseFloat(document.getElementById("mcbIb").value);

    const Iz =
        parseFloat(document.getElementById("mcbIz").value);

    const karakteristik =
        document.getElementById("mcbKar").value;

    const kutup =
        document.getElementById("mcbPol").value;

    const Ik =
        parseFloat(document.getElementById("mcbIk").value);


    if (
        !korumaGecerli(Ib) ||
        !korumaGecerli(Iz)
    ) {

        alert("Ib ve Iz değerlerini giriniz.");

        return;

    }


    if (Ib > Iz) {

        document.getElementById("mcbSonuc").innerHTML = `

            <h3>⚠️ Koordinasyon uygun değil</h3>

            <p>
                Yük akımı:
                <strong>${Ib.toFixed(2)} A</strong>
            </p>

            <p>
                Kablo taşıma kapasitesi:
                <strong>${Iz.toFixed(2)} A</strong>
            </p>

            <p>
                Yük akımı kablonun taşıma kapasitesinden büyük.
                Öncelikle kablo/yük hesabı kontrol edilmelidir.
            </p>

        `;

        return;

    }


    const standartlar = [
        2,
        4,
        6,
        10,
        13,
        16,
        20,
        25,
        32,
        40,
        50,
        63,
        80,
        100,
        125
    ];


    let In = null;


    for (let i = 0; i < standartlar.length; i++) {

        if (
            standartlar[i] >= Ib &&
            standartlar[i] <= Iz
        ) {

            In =
                standartlar[i];

            break;

        }

    }


    let kesme = "";

    if (korumaGecerli(Ik)) {

        if (Ik <= 3) {

            kesme = "En az 3 kA";

        }
        else if (Ik <= 4.5) {

            kesme = "En az 4.5 kA";

        }
        else if (Ik <= 6) {

            kesme = "En az 6 kA";

        }
        else if (Ik <= 10) {

            kesme = "En az 10 kA";

        }
        else {

            kesme = "Daha yüksek kesme kapasitesi gerekli";

        }

    }


    document.getElementById("mcbSonuc").innerHTML = `

        <h3>
            Önerilen başlangıç:
            ${In ? In + " A" : "Uygun standart değer bulunamadı"}
        </h3>

        <p>
            Karakteristik:
            <strong>${karakteristik}</strong>
        </p>

        <p>
            Kutup:
            <strong>${kutup}P</strong>
        </p>

        ${
            kesme
            ?
            `<p>
                Kesme kapasitesi:
                <strong>${kesme}</strong>
            </p>`
            :
            ""
        }

        <p>
            Koordinasyon:
            <strong>Ib ≤ In ≤ Iz</strong>
        </p>

        <p>
            ⚠️ B/C/D açma karakteristiği yükün
            kalkış ve ani akımına göre ayrıca kontrol edilmelidir.
        </p>

    `;

}



// ==========================================================
// TMŞ / MCCB
// ==========================================================

function mccbSec() {

    const Ib =
        parseFloat(document.getElementById("mccbIb").value);

    const Iz =
        parseFloat(document.getElementById("mccbIz").value);

    const Ik =
        parseFloat(document.getElementById("mccbIk").value);

    const ayar =
        document.getElementById("mccbAyar").value;


    if (
        !korumaGecerli(Ib) ||
        !korumaGecerli(Iz)
    ) {

        alert("Ib ve Iz değerlerini giriniz.");

        return;

    }


    const standartlar = [
        16,
        25,
        32,
        40,
        50,
        63,
        80,
        100,
        125,
        160,
        200,
        250,
        320,
        400,
        500,
        630,
        800,
        1000,
        1250,
        1600
    ];


    let In = null;


    for (let i = 0; i < standartlar.length; i++) {

        if (
            standartlar[i] >= Ib &&
            standartlar[i] <= Iz
        ) {

            In =
                standartlar[i];

            break;

        }

    }


    document.getElementById("mccbSonuc").innerHTML = `

        <h3>
            TMŞ ön seçim:
            ${In ? In + " A" : "Kontrol gerekli"}
        </h3>

        <p>
            Yük akımı:
            <strong>${Ib.toFixed(2)} A</strong>
        </p>

        <p>
            Kablo Iz:
            <strong>${Iz.toFixed(2)} A</strong>
        </p>

        <p>
            Ayar tipi:
            <strong>
                ${ayar === "ayarli"
                    ? "Ayarlanabilir"
                    : "Sabit"}
            </strong>
        </p>

        ${
            korumaGecerli(Ik)
            ?
            `<p>
                Prospektif kısa devre:
                <strong>${Ik.toFixed(2)} kA</strong>
            </p>`
            :
            ""
        }

        <p>
            ⚠️ TMŞ'nin Icu/Ics değeri,
            termik-manyetik açma ayarları ve üretici
            koordinasyon tabloları ayrıca kontrol edilmelidir.
        </p>

    `;

}



// ==========================================================
// SİGORTA
// ==========================================================

function sigortaSec() {

    const Ib =
        parseFloat(document.getElementById("sigIb").value);

    const Iz =
        parseFloat(document.getElementById("sigIz").value);

    const tip =
        document.getElementById("sigTip").value;

    const Ik =
        parseFloat(document.getElementById("sigIk").value);


    if (
        !korumaGecerli(Ib) ||
        !korumaGecerli(Iz)
    ) {

        alert("Ib ve Iz değerlerini giriniz.");

        return;

    }


    const standartlar = [
        2,
        4,
        6,
        10,
        13,
        16,
        20,
        25,
        32,
        40,
        50,
        63,
        80,
        100,
        125,
        160,
        200,
        250,
        315,
        355,
        400,
        500,
        630
    ];


    let In = null;


    for (let i = 0; i < standartlar.length; i++) {

        if (
            standartlar[i] >= Ib &&
            standartlar[i] <= Iz
        ) {

            In =
                standartlar[i];

            break;

        }

    }


    document.getElementById("sigortaSonuc").innerHTML = `

        <h3>
            Sigorta ön seçimi:
            ${In ? In + " A" : "Kontrol gerekli"}
        </h3>

        <p>
            Sigorta tipi:
            <strong>${tip}</strong>
        </p>

        <p>
            Koordinasyon:
            <strong>Ib ≤ In ≤ Iz</strong>
        </p>

        ${
            korumaGecerli(Ik)
            ?
            `<p>
                Prospektif kısa devre:
                <strong>${Ik.toFixed(2)} kA</strong>
            </p>`
            :
            ""
        }

        <p>
            ⚠️ Özellikle aM motor sigortalarında
            aşırı yük korumasının ayrıca sağlanması gerekir.
        </p>

    `;

}



// ==========================================================
// KAÇAK AKIM RÖLESİ
// ==========================================================

function rcdSec() {

    const I =
        parseFloat(
            document.getElementById("rcdAkım").value
        );

    const hassas =
        document.getElementById("rcdHassas").value;

    const tip =
        document.getElementById("rcdTip").value;

    const pol =
        document.getElementById("rcdPol").value;


    if (!korumaGecerli(I)) {

        alert("Yük akımını giriniz.");

        return;

    }


    const standartlar = [
        16,
        25,
        40,
        63,
        80,
        100,
        125
    ];


    let In = null;


    for (let i = 0; i < standartlar.length; i++) {

        if (standartlar[i] >= I) {

            In =
                standartlar[i];

            break;

        }

    }


    document.getElementById("rcdSonuc").innerHTML = `

        <h3>
            RCD ön seçimi:
            ${In ? In + " A" : "Kontrol gerekli"}
        </h3>

        <p>
            Hassasiyet:
            <strong>${hassas} mA</strong>
        </p>

        <p>
            RCD tipi:
            <strong>Tip ${tip}</strong>
        </p>

        <p>
            Kutup:
            <strong>${pol}P</strong>
        </p>

        <p>
            ⚠️ 30 mA, 100 mA veya 300 mA seçimi
            devrenin kullanım amacı ve elektriksel
            güvenlik gerekliliklerine göre belirlenmelidir.
        </p>

    `;

}



// ==========================================================
// KABLO - SİGORTA KOORDİNASYONU
// ==========================================================

function kabloKorumaKontrol() {

    const Ib =
        parseFloat(document.getElementById("koordIb").value);

    const In =
        parseFloat(document.getElementById("koordIn").value);

    const Iz =
        parseFloat(document.getElementById("koordIz").value);


    if (
        !korumaGecerli(Ib) ||
        !korumaGecerli(In) ||
        !korumaGecerli(Iz)
    ) {

        alert("Tüm değerleri giriniz.");

        return;

    }


    const uygun =
        Ib <= In &&
        In <= Iz;


    document.getElementById("koordSonuc").innerHTML = `

        <h3>
            ${uygun
                ? "✅ Koordinasyon uygun görünüyor"
                : "⚠️ Koordinasyon uygun değil"}
        </h3>

        <p>
            Ib:
            <strong>${Ib.toFixed(2)} A</strong>
        </p>

        <p>
            In:
            <strong>${In.toFixed(2)} A</strong>
        </p>

        <p>
            Iz:
            <strong>${Iz.toFixed(2)} A</strong>
        </p>

        <p>
            Kontrol:
            <strong>
                Ib ≤ In ≤ Iz
            </strong>
        </p>

    `;

}



// ==========================================================
// KESME KAPASİTESİ
// ==========================================================

function kesmeKapasitesiKontrol() {

    const Ik =
        parseFloat(
            document.getElementById("kesmeIk").value
        );

    const Icn =
        parseFloat(
            document.getElementById("kesmeIcn").value
        );


    if (
        !korumaGecerli(Ik) ||
        !korumaGecerli(Icn)
    ) {

        alert("Kısa devre ve kesme kapasitesi değerlerini giriniz.");

        return;

    }


    const uygun =
        Icn >= Ik;


    document.getElementById("kesmeSonuc").innerHTML = `

        <h3>
            ${
                uygun
                ?
                "✅ Kesme kapasitesi yeterli görünüyor"
                :
                "⚠️ Kesme kapasitesi yetersiz"
            }
        </h3>

        <p>
            Prospektif Ik:
            <strong>${Ik.toFixed(2)} kA</strong>
        </p>

        <p>
            Cihaz kesme kapasitesi:
            <strong>${Icn.toFixed(2)} kA</strong>
        </p>

        <p>
            Kontrol:
            <strong>Icn / Icu ≥ Ik</strong>
        </p>

    `;

}



// ==========================================================
// KISA DEVRE
// ==========================================================

function korumaKisaDevre() {

    const kva =
        parseFloat(
            document.getElementById("pkKva").value
        );

    const V =
        parseFloat(
            document.getElementById("pkV").value
        );

    const uk =
        parseFloat(
            document.getElementById("pkUk").value
        );


    if (
        !korumaGecerli(kva) ||
        !korumaGecerli(V) ||
        !korumaGecerli(uk)
    ) {

        alert("Trafo değerlerini kontrol edin.");

        return;

    }


    const In =
        (kva * 1000) /
        (1.7320508 * V);


    const Ik =
        In /
        (uk / 100);


    document.getElementById("pkSonuc").innerHTML = `

        <h3>
            Yaklaşık kısa devre akımı:
            ${(Ik / 1000).toFixed(2)} kA
        </h3>

        <p>
            Trafo nominal akımı:
            <strong>${In.toFixed(2)} A</strong>
        </p>

        <p>
            Trafo empedansı:
            <strong>${uk.toFixed(2)} %</strong>
        </p>

        <p>
            ⚠️ Bu hesap idealize edilmiş trafo
            sekonder kısa devre hesabıdır.
            Kablo ve şebeke empedansı hesaba dahil değildir.
        </p>

    `;

}



// ==========================================================
// SPD / PARAFUDR
// ==========================================================

function spdDegerlendir() {

    const sistem =
        document.getElementById("spdSistem").value;

    const gerilim =
        document.getElementById("spdGerilim").value;

    const tip =
        document.getElementById("spdTip").value;

    const risk =
        document.getElementById("spdRisk").value;


    let mesaj = "";


    if (tip === "1") {

        mesaj =
            "Tip 1 SPD, yıldırım akımının etkilerinin bulunduğu " +
            "uygulamalar için değerlendirilir.";

    }

    else if (tip === "2") {

        mesaj =
            "Tip 2 SPD, dağıtım panolarında aşırı gerilimlere " +
            "karşı koruma amacıyla yaygın olarak değerlendirilir.";

    }

    else if (tip === "3") {

        mesaj =
            "Tip 3 SPD, hassas cihazlara yakın ek koruma " +
            "amacıyla değerlendirilir.";

    }

    else {

        mesaj =
            "Tip 1+2 SPD, uygulamaya göre birleşik koruma " +
            "çözümü olarak değerlendirilebilir.";

    }


    document.getElementById("spdSonuc").innerHTML = `

        <h3>SPD Ön Değerlendirmesi</h3>

        <p>
            Sistem:
            <strong>${sistem.toUpperCase()}</strong>
        </p>

        <p>
            Sistem gerilimi:
            <strong>${gerilim} V</strong>
        </p>

        <p>
            SPD:
            <strong>Tip ${tip}</strong>
        </p>

        <p>
            Risk:
            <strong>
                ${risk === "yuksek" ? "Yüksek" : "Normal"}
            </strong>
        </p>

        <p>
            ${mesaj}
        </p>

        <p>
            ⚠️ Uc, Up, In/Imax, kısa devre dayanımı,
            topraklama sistemi ve üretici seçim tabloları
            ayrıca kontrol edilmelidir.
        </p>

    `;

}



// ==========================================================
// SELEKTİVİTE
// ==========================================================

function selektiviteKontrol() {

    const alt =
        parseFloat(
            document.getElementById("selAlt").value
        );

    const ust =
        parseFloat(
            document.getElementById("selUst").value
        );


    if (
        !korumaGecerli(alt) ||
        !korumaGecerli(ust)
    ) {

        alert("Alt ve üst cihaz değerlerini giriniz.");

        return;

    }


    const oran =
        ust / alt;


    let değerlendirme;


    if (oran >= 2) {

        değerlendirme =
            "Akım değerleri arasında temel bir kademelendirme var.";

    }

    else {

        değerlendirme =
            "Akım değerleri birbirine yakın; üretici selektivite tabloları mutlaka kontrol edilmelidir.";

    }


    document.getElementById("selSonuc").innerHTML = `

        <h3>
            Alt: ${alt.toFixed(2)} A →
            Üst: ${ust.toFixed(2)} A
        </h3>

        <p>
            Oran:
            <strong>${oran.toFixed(2)}</strong>
        </p>

        <p>
            ${değerlendirme}
        </p>

        <p>
            ⚠️ Gerçek selektivite yalnızca nominal
            akım oranına bakılarak garanti edilemez.
            Üretici selektivite tabloları ve kısa devre
            seviyeleri kontrol edilmelidir.
        </p>

    `;

}



// ==========================================================
// YARDIMCI FONKSİYON
// ==========================================================

function korumaGecerli(deger) {

    return (
        !isNaN(deger) &&
        isFinite(deger) &&
        deger > 0
    );

}



// ==========================================================
// KORUMA MODÜLÜNÜ SAYFA YÜKLENİNCE HAZIRLA
// ==========================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        korumaModuluOlustur();

    }
);

// ==========================================================
// TEKNİKVOLT - HESAP ARA SİSTEMİ
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    const aramaKutusu = document.querySelector(
        '.topbar input[placeholder*="Hesap Ara"]'
    );

    if (!aramaKutusu) return;

    // Sonuç kutusu oluştur
    const sonucKutusu = document.createElement("div");

    sonucKutusu.id = "aramaSonuclari";

    sonucKutusu.style.position = "absolute";
    sonucKutusu.style.top = "55px";
    sonucKutusu.style.left = "0";
    sonucKutusu.style.right = "0";
    sonucKutusu.style.background = "#1e293b";
    sonucKutusu.style.border = "1px solid #334155";
    sonucKutusu.style.borderRadius = "10px";
    sonucKutusu.style.zIndex = "9999";
    sonucKutusu.style.display = "none";
    sonucKutusu.style.maxHeight = "400px";
    sonucKutusu.style.overflowY = "auto";
    sonucKutusu.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    // Topbar'ın pozisyonunu ayarla
    const topbar = aramaKutusu.parentElement;

    if (topbar) {
        topbar.style.position = "relative";
        topbar.appendChild(sonucKutusu);
    }


    // ----------------------------------------------------------
    // TÜRKÇE KARAKTERLERİ NORMALLEŞTİR
    // ----------------------------------------------------------

    function temizle(metin) {

        return metin
            .toLocaleLowerCase("tr-TR")
            .replace(/ç/g, "c")
            .replace(/ğ/g, "g")
            .replace(/ı/g, "i")
            .replace(/ö/g, "o")
            .replace(/ş/g, "s")
            .replace(/ü/g, "u");
    }


    // ----------------------------------------------------------
    // ARAMA
    // ----------------------------------------------------------

    aramaKutusu.addEventListener("input", function () {

        const arama = temizle(this.value.trim());

        sonucKutusu.innerHTML = "";

        if (arama.length < 2) {

            sonucKutusu.style.display = "none";

            return;
        }


        // Sayfalardaki tüm kartları bul
        const kartlar = document.querySelectorAll(
            ".page .card"
        );


        let bulunan = [];


        kartlar.forEach(function (kart) {

            const baslikElementi =
                kart.querySelector("h1, h2, h3, h4");

            if (!baslikElementi) return;


            const baslik =
                baslikElementi.innerText.trim();


            const icerik =
                kart.innerText.trim();


            const aranacakMetin =
                temizle(baslik + " " + icerik);


            if (aranacakMetin.includes(arama)) {

                bulunan.push({
                    kart: kart,
                    baslik: baslik
                });

            }

        });


        // ------------------------------------------------------
        // SONUÇ YOK
        // ------------------------------------------------------

        if (bulunan.length === 0) {

            sonucKutusu.innerHTML = `

                <div style="
                    padding:15px;
                    color:#cbd5e1;
                    text-align:center;
                ">
                    🔍 Sonuç bulunamadı.
                </div>

            `;

            sonucKutusu.style.display = "block";

            return;
        }


        // ------------------------------------------------------
        // SONUÇLARI GÖSTER
        // ------------------------------------------------------

        bulunan.forEach(function (item) {

            const sonuc = document.createElement("div");

            sonuc.style.padding = "14px 16px";
            sonuc.style.cursor = "pointer";
            sonuc.style.borderBottom = "1px solid #334155";
            sonuc.style.color = "white";
            sonuc.style.transition = ".2s";


            sonuc.innerHTML = `

                <strong style="color:#38bdf8;">
                    ${item.baslik}
                </strong>

                <div style="
                    font-size:12px;
                    color:#94a3b8;
                    margin-top:4px;
                ">
                    Sonuca git →
                </div>

            `;


            // Mouse üzerine gelince
            sonuc.addEventListener("mouseenter", function () {

                this.style.background = "#2563eb";

            });


            sonuc.addEventListener("mouseleave", function () {

                this.style.background = "transparent";

            });


            // Sonuca tıklayınca
            sonuc.addEventListener("click", function () {

                const kart = item.kart;

                // Önce bulunduğu sayfayı tespit et
                const sayfa =
                    kart.closest(".page");


                // Sayfayı aç
                if (sayfa) {

                    sayfaAc(sayfa.id);

                }


                // Kartın üzerine git
                setTimeout(function () {

                    kart.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });


                    // Geçici vurgulama
                    kart.style.transition =
                        "box-shadow .3s, transform .3s";

                    kart.style.boxShadow =
                        "0 0 0 3px #38bdf8";

                    kart.style.transform =
                        "translateY(-5px)";


                    setTimeout(function () {

                        kart.style.boxShadow = "";
                        kart.style.transform = "";

                    }, 1800);


                }, 150);


                // Aramayı kapat
                sonucKutusu.style.display =
                    "none";

                aramaKutusu.value = "";

            });


            sonucKutusu.appendChild(sonuc);

        });


        sonucKutusu.style.display = "block";

    });


    // ----------------------------------------------------------
    // ESC TUŞU
    // ----------------------------------------------------------

    aramaKutusu.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            this.value = "";

            sonucKutusu.innerHTML = "";

            sonucKutusu.style.display = "none";

            this.blur();

        }

    });


    // ----------------------------------------------------------
    // DIŞARI TIKLANINCA KAPAT
    // ----------------------------------------------------------

    document.addEventListener("click", function (e) {

        if (
            !topbar.contains(e.target)
        ) {

            sonucKutusu.style.display =
                "none";

        }

    });

});

// ==========================================================
// TEKNİKVOLT - AYARLAR / YÖNETİCİ PANELİ
// MEVCUT AYARLAR SAYFASINI KULLANIR
// ==========================================================

(function () {

    const TV_AYAR_KEY = "teknikvolt_ayarlar";

    const TV_VARSAYILAN = {

        gerilim: 400,

        monofazeGerilim: 230,

        cosfi: 0.80,

        motorCosfi: 0.85,

        motorVerim: 90,

        gerilimDusumu: 3,

        kabloMalzeme: "bakir",

        tema: "dark",

        adminPin: "2468"

    };


    let adminAktif = false;



    // ======================================================
    // AYARLARI GETİR
    // ======================================================

    function ayarlariGetir() {

        try {

            const veri =
                localStorage.getItem(TV_AYAR_KEY);

            if (!veri) {

                return {
                    ...TV_VARSAYILAN
                };

            }

            return {
                ...TV_VARSAYILAN,
                ...JSON.parse(veri)
            };

        }

        catch (e) {

            return {
                ...TV_VARSAYILAN
            };

        }

    }



    // ======================================================
    // AYARLARI KAYDET
    // ======================================================

    function ayarlariKaydet(ayarlar) {

        localStorage.setItem(
            TV_AYAR_KEY,
            JSON.stringify(ayarlar)
        );

    }



    // ======================================================
    // AYARLAR SAYFASINI HAZIRLA
    // ======================================================

    function ayarlarSayfasiniHazirla() {

        const sayfa =
            document.getElementById("ayarlar");

        if (!sayfa) {

            console.log(
                "TeknikVolt: #ayarlar bulunamadı."
            );

            return;

        }


        sayfa.innerHTML = `

            <!-- ==========================================
                 BAŞLIK
            =========================================== -->

            <div class="card">

                <h2>⚙️ TeknikVolt Ayarları</h2>

                <p>
                    TeknikVolt sistem ayarları ve yönetici paneli
                </p>

            </div>



            <!-- ==========================================
                 YÖNETİCİ GİRİŞİ
            =========================================== -->

            <div
                id="tvAyarKilidi"
                class="card"
                style="
                    text-align:center;
                    padding:35px 20px;
                "
            >

                <div style="
                    font-size:50px;
                    margin-bottom:15px;
                ">
                    🔐
                </div>


                <h2>
                    Yönetici Ayarları
                </h2>


                <p style="
                    color:#94a3b8;
                    margin-bottom:25px;
                ">
                    Bu bölüm yalnızca yetkili kullanıcı içindir.
                </p>


                <button
                    id="tvGirisBtn"
                    class="hesaplaBtn"
                    style="
                        min-width:220px;
                    "
                >
                    🔐 Yönetici Girişi
                </button>

            </div>



            <!-- ==========================================
                 AYARLAR İÇERİĞİ
            =========================================== -->

            <div
                id="tvAyarPaneli"
                style="display:none;"
            >


                <!-- ======================================
                     YÖNETİCİ DURUMU
                ======================================= -->

                <div
                    class="card"
                    style="
                        border-left:5px solid #22c55e;
                    "
                >

                    <h3 style="color:#22c55e;">
                        ✅ Yönetici Modu Aktif
                    </h3>

                    <p>
                        TeknikVolt sistem ayarlarına erişiminiz var.
                    </p>

                </div>



                <!-- ======================================
                     GÖRÜNÜM
                ======================================= -->

                <div class="card">

                    <h3>
                        🎨 Görünüm Ayarları
                    </h3>


                    <div class="input-group">

                        <label>
                            Tema
                        </label>


                        <select id="tvTema">

                            <option value="dark">
                                🌙 Koyu Tema
                            </option>


                            <option value="light">
                                ☀️ Açık Tema
                            </option>

                        </select>


                        <button
                            id="tvTemaKaydet"
                            class="hesaplaBtn"
                        >
                            💾 Temayı Kaydet
                        </button>

                    </div>

                </div>



                <!-- ======================================
                     HESAPLAMA AYARLARI
                ======================================= -->

                <div class="card">

                    <h3>
                        ⚡ Varsayılan Hesaplama Ayarları
                    </h3>


                    <div class="input-group">


                        <label>
                            Trifaze Varsayılan Gerilim (V)
                        </label>

                        <input
                            type="number"
                            id="tvGerilim"
                            value="400"
                            step="1"
                        >



                        <label>
                            Monofaze Varsayılan Gerilim (V)
                        </label>

                        <input
                            type="number"
                            id="tvMonoGerilim"
                            value="230"
                            step="1"
                        >



                        <label>
                            Varsayılan Cosφ
                        </label>

                        <input
                            type="number"
                            id="tvCosfi"
                            value="0.80"
                            min="0.01"
                            max="1"
                            step="0.01"
                        >



                        <label>
                            Motor Varsayılan Cosφ
                        </label>

                        <input
                            type="number"
                            id="tvMotorCos"
                            value="0.85"
                            min="0.01"
                            max="1"
                            step="0.01"
                        >



                        <label>
                            Motor Varsayılan Verim (%)
                        </label>

                        <input
                            type="number"
                            id="tvMotorVerim"
                            value="90"
                            min="1"
                            max="100"
                            step="0.1"
                        >



                        <label>
                            Varsayılan Gerilim Düşümü Limiti (%)
                        </label>

                        <input
                            type="number"
                            id="tvDusum"
                            value="3"
                            min="0.1"
                            step="0.1"
                        >



                        <label>
                            Varsayılan Kablo Malzemesi
                        </label>

                        <select id="tvMalzeme">

                            <option value="bakir">
                                🟠 Bakır
                            </option>

                            <option value="aluminyum">
                                ⚪ Alüminyum
                            </option>

                        </select>



                        <button
                            id="tvHesapKaydet"
                            class="hesaplaBtn"
                        >
                            💾 Hesaplama Ayarlarını Kaydet
                        </button>

                    </div>

                </div>



                <!-- ======================================
                     YÖNETİCİ PIN
                ======================================= -->

                <div class="card">

                    <h3>
                        🔑 Yönetici PIN Ayarları
                    </h3>


                    <p style="color:#94a3b8;">
                        Ayarlar bölümüne erişim için kullanılan PIN'i
                        değiştirebilirsiniz.
                    </p>


                    <div class="input-group">


                        <label>
                            Mevcut PIN
                        </label>

                        <input
                            type="password"
                            id="tvEskiPin"
                            placeholder="Mevcut PIN"
                        >



                        <label>
                            Yeni PIN
                        </label>

                        <input
                            type="password"
                            id="tvYeniPin"
                            placeholder="Yeni PIN"
                        >



                        <label>
                            Yeni PIN Tekrar
                        </label>

                        <input
                            type="password"
                            id="tvYeniPinTekrar"
                            placeholder="Yeni PIN tekrar"
                        >



                        <button
                            id="tvPinDegistir"
                            class="hesaplaBtn"
                        >
                            🔑 PIN Değiştir
                        </button>

                    </div>

                </div>



                <!-- ======================================
                     YEDEKLEME
                ======================================= -->

                <div class="card">

                    <h3>
                        💾 Ayarlar ve Yedekleme
                    </h3>


                    <p style="color:#94a3b8;">
                        TeknikVolt ayarlarınızı yedekleyebilir
                        veya daha önce aldığınız yedeği geri
                        yükleyebilirsiniz.
                    </p>


                    <div
                        style="
                            display:flex;
                            flex-wrap:wrap;
                            gap:10px;
                        "
                    >


                        <button
                            id="tvDisariAktar"
                            class="hesaplaBtn"
                        >
                            📤 Ayarları Yedekle
                        </button>



                        <button
                            id="tvIceAktar"
                            class="hesaplaBtn"
                        >
                            📥 Yedek Geri Yükle
                        </button>



                        <input
                            type="file"
                            id="tvDosyaSec"
                            accept=".json"
                            style="display:none;"
                        >



                        <button
                            id="tvVarsayilan"
                            class="hesaplaBtn"
                        >
                            ♻️ Varsayılanlara Dön
                        </button>

                    </div>

                </div>



                <!-- ======================================
                     SİSTEM BİLGİLERİ
                ======================================= -->

                <div class="card">

                    <h3>
                        🛠️ Sistem Bilgileri
                    </h3>


                    <p>
                        <strong>Uygulama:</strong>
                        TeknikVolt
                    </p>


                    <p>
                        <strong>Sürüm:</strong>
                        1.0.0
                    </p>


                    <p>
                        <strong>Platform:</strong>
                        HTML / CSS / JavaScript
                    </p>


                    <p>
                        <strong>Ayar Depolama:</strong>
                        Tarayıcı LocalStorage
                    </p>

                </div>



                <!-- ======================================
                     ÇIKIŞ
                ======================================= -->

                <div class="card">

                    <button
                        id="tvAdminCikis"
                        class="hesaplaBtn"
                        style="
                            width:100%;
                            background:#991b1b;
                        "
                    >
                        🚪 Yönetici Modundan Çık
                    </button>

                </div>


            </div>

        `;


        tvAyarFormDoldur();

        tvEventleriBagla();

    }



    // ======================================================
    // FORMU DOLDUR
    // ======================================================

    function tvAyarFormDoldur() {

        const a =
            ayarlariGetir();


        const gerilim =
            document.getElementById("tvGerilim");

        const mono =
            document.getElementById("tvMonoGerilim");

        const cos =
            document.getElementById("tvCosfi");

        const motorCos =
            document.getElementById("tvMotorCos");

        const motorVerim =
            document.getElementById("tvMotorVerim");

        const dusum =
            document.getElementById("tvDusum");

        const malzeme =
            document.getElementById("tvMalzeme");

        const tema =
            document.getElementById("tvTema");


        if (gerilim)
            gerilim.value = a.gerilim;


        if (mono)
            mono.value = a.monofazeGerilim;


        if (cos)
            cos.value = a.cosfi;


        if (motorCos)
            motorCos.value = a.motorCosfi;


        if (motorVerim)
            motorVerim.value = a.motorVerim;


        if (dusum)
            dusum.value = a.gerilimDusumu;


        if (malzeme)
            malzeme.value = a.kabloMalzeme;


        if (tema)
            tema.value = a.tema;

    }



    // ======================================================
    // EVENTLER
    // ======================================================

    function tvEventleriBagla() {


        document
            .getElementById("tvGirisBtn")
            .addEventListener(
                "click",
                tvYoneticiGiris
            );


        document
            .getElementById("tvTemaKaydet")
            .addEventListener(
                "click",
                tvTemaKaydet
            );


        document
            .getElementById("tvHesapKaydet")
            .addEventListener(
                "click",
                tvHesapKaydet
            );


        document
            .getElementById("tvPinDegistir")
            .addEventListener(
                "click",
                tvPinDegistir
            );


        document
            .getElementById("tvDisariAktar")
            .addEventListener(
                "click",
                tvAyarYedekle
            );


        document
            .getElementById("tvIceAktar")
            .addEventListener(
                "click",
                function () {

                    document
                        .getElementById("tvDosyaSec")
                        .click();

                }
            );


        document
            .getElementById("tvDosyaSec")
            .addEventListener(
                "change",
                tvYedekYukle
            );


        document
            .getElementById("tvVarsayilan")
            .addEventListener(
                "click",
                tvVarsayilanlaraDon
            );


        document
            .getElementById("tvAdminCikis")
            .addEventListener(
                "click",
                tvYoneticiCikis
            );

    }



    // ======================================================
    // YÖNETİCİ GİRİŞİ
    // ======================================================

    function tvYoneticiGiris() {

        const a =
            ayarlariGetir();


        const pin =
            prompt(
                "🔐 TeknikVolt Yönetici PIN'ini giriniz:"
            );


        if (pin === null) return;


        if (pin === a.adminPin) {

            adminAktif = true;


            document
                .getElementById("tvAyarKilidi")
                .style.display = "none";


            document
                .getElementById("tvAyarPaneli")
                .style.display = "block";


            alert(
                "✅ Yönetici girişi başarılı."
            );

        }

        else {

            alert(
                "❌ Hatalı PIN."
            );

        }

    }



    // ======================================================
    // YÖNETİCİ KONTROLÜ
    // ======================================================

    function adminKontrol() {

        if (!adminAktif) {

            alert(
                "🔐 Önce yönetici girişi yapmalısınız."
            );

            return false;

        }

        return true;

    }



    // ======================================================
    // TEMA KAYDET
    // ======================================================

    function tvTemaKaydet() {

        if (!adminKontrol()) return;


        const a =
            ayarlariGetir();


        a.tema =
            document
                .getElementById("tvTema")
                .value;


        ayarlariKaydet(a);

        tvTemaUygula(a.tema);


        alert(
            "🎨 Tema ayarı kaydedildi."
        );

    }



    // ======================================================
    // TEMA UYGULA
    // ======================================================

    function tvTemaUygula(tema) {

        if (tema === "light") {

            document.body.style.background =
                "#f1f5f9";

            document.body.style.color =
                "#0f172a";

        }

        else {

            document.body.style.background =
                "";

            document.body.style.color =
                "";

        }

    }



    // ======================================================
    // HESAPLAMA AYARLARINI KAYDET
    // ======================================================

    function tvHesapKaydet() {

        if (!adminKontrol()) return;


        const gerilim =
            parseFloat(
                document.getElementById(
                    "tvGerilim"
                ).value
            );


        const mono =
            parseFloat(
                document.getElementById(
                    "tvMonoGerilim"
                ).value
            );


        const cos =
            parseFloat(
                document.getElementById(
                    "tvCosfi"
                ).value
            );


        const motorCos =
            parseFloat(
                document.getElementById(
                    "tvMotorCos"
                ).value
            );


        const motorVerim =
            parseFloat(
                document.getElementById(
                    "tvMotorVerim"
                ).value
            );


        const dusum =
            parseFloat(
                document.getElementById(
                    "tvDusum"
                ).value
            );


        const malzeme =
            document.getElementById(
                "tvMalzeme"
            ).value;


        if (
            !gerilim ||
            !mono ||
            !cos ||
            cos > 1 ||
            !motorCos ||
            motorCos > 1 ||
            !motorVerim ||
            motorVerim > 100 ||
            !dusum
        ) {

            alert(
                "⚠️ Girilen değerleri kontrol edin."
            );

            return;

        }


        const a =
            ayarlariGetir();


        a.gerilim =
            gerilim;

        a.monofazeGerilim =
            mono;

        a.cosfi =
            cos;

        a.motorCosfi =
            motorCos;

        a.motorVerim =
            motorVerim;

        a.gerilimDusumu =
            dusum;

        a.kabloMalzeme =
            malzeme;


        ayarlariKaydet(a);


        tvVarsayilanlariUygula();


        alert(
            "⚡ Hesaplama ayarları kaydedildi."
        );

    }



    // ======================================================
    // HESAPLARA UYGULA
    // ======================================================

    function tvVarsayilanlariUygula() {

        const a =
            ayarlariGetir();


        // -----------------------------------------------
        // ELEKTRİK COSφ
        // -----------------------------------------------

        const cos1 =
            document.getElementById("cosfi");

        if (cos1)
            cos1.value = a.cosfi;


        const cos2 =
            document.getElementById("cosfi2");

        if (cos2)
            cos2.value = a.cosfi;


        const kwKvaCos =
            document.getElementById("kwKvaCos");

        if (kwKvaCos)
            kwKvaCos.value = a.cosfi;


        const vdCos =
            document.getElementById("vdCos");

        if (vdCos)
            vdCos.value = a.cosfi;


        const ksCos =
            document.getElementById("ksCos");

        if (ksCos)
            ksCos.value = a.cosfi;


        // -----------------------------------------------
        // GERİLİM DÜŞÜMÜ
        // -----------------------------------------------

        const vdLimit =
            document.getElementById("vdLimit");

        if (vdLimit)
            vdLimit.value =
                a.gerilimDusumu;


        const ksLimit =
            document.getElementById("ksLimit");

        if (ksLimit)
            ksLimit.value =
                a.gerilimDusumu;


        // -----------------------------------------------
        // MOTOR
        // -----------------------------------------------

        const motorCos =
            document.getElementById("motorCos");

        if (motorCos)
            motorCos.value =
                a.motorCosfi;


        const motorVerim =
            document.getElementById("motorVerim");

        if (motorVerim)
            motorVerim.value =
                a.motorVerim;


        const mCos =
            document.getElementById("mCos");

        if (mCos)
            mCos.value =
                a.motorCosfi;


        const mgCos =
            document.getElementById("mgCos");

        if (mgCos)
            mgCos.value =
                a.motorCosfi;


        // -----------------------------------------------
        // KABLO MALZEMESİ
        // -----------------------------------------------

        const vdMalzeme =
            document.getElementById("vdMalzeme");

        const ksMalzeme =
            document.getElementById("ksMalzeme");


        if (
            a.kabloMalzeme ===
            "aluminyum"
        ) {

            if (vdMalzeme)
                vdMalzeme.value =
                    "0.0285";


            if (ksMalzeme)
                ksMalzeme.value =
                    "0.0285";

        }

        else {

            if (vdMalzeme)
                vdMalzeme.value =
                    "0.0175";


            if (ksMalzeme)
                ksMalzeme.value =
                    "0.0175";

        }

    }



    // ======================================================
    // PIN DEĞİŞTİR
    // ======================================================

    function tvPinDegistir() {

        if (!adminKontrol()) return;


        const eski =
            document.getElementById(
                "tvEskiPin"
            ).value;


        const yeni =
            document.getElementById(
                "tvYeniPin"
            ).value;


        const tekrar =
            document.getElementById(
                "tvYeniPinTekrar"
            ).value;


        const a =
            ayarlariGetir();


        if (eski !== a.adminPin) {

            alert(
                "❌ Mevcut PIN yanlış."
            );

            return;

        }


        if (
            !yeni ||
            yeni.length < 4
        ) {

            alert(
                "⚠️ Yeni PIN en az 4 karakter olmalıdır."
            );

            return;

        }


        if (yeni !== tekrar) {

            alert(
                "⚠️ Yeni PIN'ler aynı değil."
            );

            return;

        }


        a.adminPin =
            yeni;


        ayarlariKaydet(a);


        document.getElementById(
            "tvEskiPin"
        ).value = "";


        document.getElementById(
            "tvYeniPin"
        ).value = "";


        document.getElementById(
            "tvYeniPinTekrar"
        ).value = "";


        alert(
            "🔑 Yönetici PIN'i başarıyla değiştirildi."
        );

    }



    // ======================================================
    // AYARLARI YEDEKLE
    // ======================================================

    function tvAyarYedekle() {

        if (!adminKontrol()) return;


        const a =
            ayarlariGetir();


        const veri =
            JSON.stringify(
                a,
                null,
                4
            );


        const blob =
            new Blob(
                [veri],
                {
                    type:
                        "application/json"
                }
            );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href =
            url;


        link.download =
            "TeknikVolt-Ayar-Yedegi.json";


        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);


        URL.revokeObjectURL(url);


        alert(
            "📤 Ayarlar başarıyla yedeklendi."
        );

    }



    // ======================================================
    // YEDEK GERİ YÜKLE
    // ======================================================

    function tvYedekYukle(event) {

        if (!adminKontrol()) return;


        const dosya =
            event.target.files[0];


        if (!dosya) return;


        const okuyucu =
            new FileReader();


        okuyucu.onload =
            function (e) {

                try {

                    const veri =
                        JSON.parse(
                            e.target.result
                        );


                    const mevcut =
                        ayarlariGetir();


                    const yeni = {

                        ...mevcut,

                        ...veri

                    };


                    ayarlariKaydet(yeni);


                    tvAyarFormDoldur();

                    tvVarsayilanlariUygula();

                    tvTemaUygula(
                        yeni.tema
                    );


                    alert(
                        "📥 Yedek başarıyla geri yüklendi."
                    );

                }

                catch (hata) {

                    alert(
                        "❌ Geçersiz TeknikVolt yedek dosyası."
                    );

                }

            };


        okuyucu.readAsText(dosya);


        event.target.value = "";

    }



    // ======================================================
    // VARSAYILANLARA DÖN
    // ======================================================

    function tvVarsayilanlaraDon() {

        if (!adminKontrol()) return;


        const onay =
            confirm(
                "⚠️ Tüm ayarlar varsayılan değerlere döndürülsün mü?"
            );


        if (!onay) return;


        ayarlariKaydet(
            {
                ...TV_VARSAYILAN
            }
        );


        tvAyarFormDoldur();

        tvVarsayilanlariUygula();

        tvTemaUygula("dark");


        alert(
            "♻️ Ayarlar varsayılan değerlere döndürüldü."
        );

    }



    // ======================================================
    // YÖNETİCİDEN ÇIKIŞ
    // ======================================================

    function tvYoneticiCikis() {

        adminAktif = false;


        document
            .getElementById("tvAyarPaneli")
            .style.display = "none";


        document
            .getElementById("tvAyarKilidi")
            .style.display = "block";


        alert(
            "🚪 Yönetici modundan çıkıldı."
        );

    }



    // ======================================================
    // SAYFA AÇILDIĞINDA
    // ======================================================

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            ayarlarSayfasiniHazirla();

            tvTemaUygula(
                ayarlariGetir().tema
            );

            tvVarsayilanlariUygula();

        }
    );


})();