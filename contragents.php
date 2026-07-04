<?php //header('Access-Control-Allow-Origin: *'); ?>
<?php include_once "../define.php"; ?>
<?php
session_start();
// input login functions
require(dirname(__FILE__) . '/../login/db_connect.php');
require(dirname(__FILE__) . '/../login/functions.php');

// test login user
if ((isset($_REQUEST['guid']) && $_REQUEST['guid'] == '2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z') || (login_check($mysqli) == true)) {
    if (isset($_POST['info'])) {
        include "../connect.php";

        $properties = db_select("SELECT * FROM properties");
        $lang = isset($properties[0]['languages']) ? $properties[0]['languages'] : 'bg_BG';
        putenv("LC_ALL=$lang");
        setlocale(LC_ALL, $lang);
        bindtextdomain("maxtrade", "./../languages");
        bind_textdomain_codeset('maxtrade', 'UTF-8');
        textdomain("maxtrade");

        $type = (isset($_POST['info'][0])) ? htmlspecialchars($_POST['info'][0]) : '';
        $contragent_id = (isset($_POST['info'][1])) ? intval($_POST['info'][1]) : 0;
        $category_id = (isset($_POST['info'][2])) ? intval($_POST['info'][2]) : 0;
        $contragent_name = (isset($_POST['info'][3])) ? htmlspecialchars($_POST['info'][3]) : '';
        $contragent_name_sql = db_quote($contragent_name);
        $contragent_address = (isset($_POST['info'][4])) ? htmlspecialchars($_POST['info'][4]) : '';
        $contragent_address_sql = db_quote($contragent_address);
        $contragent_address1 = (isset($_POST['info'][5])) ? htmlspecialchars($_POST['info'][5]) : '';
        $contragent_address1_sql = db_quote($contragent_address1);
        $contragent_city = (isset($_POST['info'][6])) ? htmlspecialchars($_POST['info'][6]) : '';
        $contragent_city_sql = db_quote($contragent_city);
        $contragent_phone = (isset($_POST['info'][7])) ? htmlspecialchars($_POST['info'][7]) : '';
        $contragent_phone_sql = db_quote($contragent_phone);
        $contragent_phone1 = (isset($_POST['info'][8])) ? htmlspecialchars($_POST['info'][8]) : '';
        $contragent_phone1_sql = db_quote($contragent_phone1);
        $contragent_phone_m = (isset($_POST['info'][9])) ? htmlspecialchars($_POST['info'][9]) : '';
        $contragent_phone_m_sql = db_quote($contragent_phone_m);
        $contragent_phone_m_o = (isset($_POST['info'][10])) ? htmlspecialchars($_POST['info'][10]) : '';
        $contragent_phone_m_o_sql = db_quote($contragent_phone_m_o);
        $contragent_mail = (isset($_POST['info'][11])) ? htmlspecialchars($_POST['info'][11]) : '';
        $contragent_mail_sql = db_quote($contragent_mail);
        $contragent_mail_o = (isset($_POST['info'][12])) ? htmlspecialchars($_POST['info'][12]) : '';
        $contragent_mail_o_sql = db_quote($contragent_mail_o);
        $contragent_web = (isset($_POST['info'][13])) ? htmlspecialchars($_POST['info'][13]) : '';
        $contragent_web_sql = db_quote($contragent_web);
        $contragent_info1 = (isset($_POST['info'][14])) ? htmlspecialchars($_POST['info'][14]) : '';
        $contragent_info1_sql = db_quote($contragent_info1);
        $contragent_info2 = (isset($_POST['info'][15])) ? htmlspecialchars($_POST['info'][15]) : '';
        $contragent_info2_sql = db_quote($contragent_info2);
        $o_name = (isset($_POST['info'][16])) ? intval($_POST['info'][16]) : 1;
        $d_name = (isset($_POST['info'][17])) ? intval($_POST['info'][17]) : 1;
        $p_name = (isset($_POST['info'][18])) ? intval($_POST['info'][18]) : 1;
        $f_name = (isset($_POST['info'][19])) ? intval($_POST['info'][19]) : 1;
        $s_name = (isset($_POST['info'][20])) ? intval($_POST['info'][20]) : 1;
        $o_address = (isset($_POST['info'][21])) ? intval($_POST['info'][21]) : 1;
        $d_address = (isset($_POST['info'][22])) ? intval($_POST['info'][22]) : 1;
        $p_address = (isset($_POST['info'][23])) ? intval($_POST['info'][23]) : 1;
        $f_address = (isset($_POST['info'][24])) ? intval($_POST['info'][24]) : 1;
        $s_address = (isset($_POST['info'][25])) ? intval($_POST['info'][25]) : 1;
        $o_address1 = (isset($_POST['info'][26])) ? intval($_POST['info'][26]) : 0;
        $d_address1 = (isset($_POST['info'][27])) ? intval($_POST['info'][27]) : 0;
        $p_address1 = (isset($_POST['info'][28])) ? intval($_POST['info'][28]) : 0;
        $f_address1 = (isset($_POST['info'][29])) ? intval($_POST['info'][29]) : 0;
        $s_address1 = (isset($_POST['info'][30])) ? intval($_POST['info'][30]) : 0;
        $o_city = (isset($_POST['info'][31])) ? intval($_POST['info'][31]) : 1;
        $d_city = (isset($_POST['info'][32])) ? intval($_POST['info'][32]) : 1;
        $p_city = (isset($_POST['info'][33])) ? intval($_POST['info'][33]) : 1;
        $f_city = (isset($_POST['info'][34])) ? intval($_POST['info'][34]) : 1;
        $s_city = (isset($_POST['info'][35])) ? intval($_POST['info'][35]) : 1;
        $o_phone = (isset($_POST['info'][36])) ? intval($_POST['info'][36]) : 0;
        $d_phone = (isset($_POST['info'][37])) ? intval($_POST['info'][37]) : 0;
        $p_phone = (isset($_POST['info'][38])) ? intval($_POST['info'][38]) : 0;
        $f_phone = (isset($_POST['info'][39])) ? intval($_POST['info'][39]) : 0;
        $s_phone = (isset($_POST['info'][40])) ? intval($_POST['info'][40]) : 0;
        $o_phone1 = (isset($_POST['info'][41])) ? intval($_POST['info'][41]) : 0;
        $d_phone1 = (isset($_POST['info'][42])) ? intval($_POST['info'][42]) : 0;
        $p_phone1 = (isset($_POST['info'][43])) ? intval($_POST['info'][43]) : 0;
        $f_phone1 = (isset($_POST['info'][44])) ? intval($_POST['info'][44]) : 0;
        $s_phone1 = (isset($_POST['info'][45])) ? intval($_POST['info'][45]) : 0;
        $o_phone_m = (isset($_POST['info'][46])) ? intval($_POST['info'][46]) : 0;
        $d_phone_m = (isset($_POST['info'][47])) ? intval($_POST['info'][47]) : 0;
        $p_phone_m = (isset($_POST['info'][48])) ? intval($_POST['info'][48]) : 0;
        $f_phone_m = (isset($_POST['info'][49])) ? intval($_POST['info'][49]) : 0;
        $s_phone_m = (isset($_POST['info'][50])) ? intval($_POST['info'][50]) : 0;
        $o_phone_m_o = (isset($_POST['info'][51])) ? intval($_POST['info'][51]) : 1;
        $d_phone_m_o = (isset($_POST['info'][52])) ? intval($_POST['info'][52]) : 1;
        $p_phone_m_o = (isset($_POST['info'][53])) ? intval($_POST['info'][53]) : 1;
        $f_phone_m_o = (isset($_POST['info'][54])) ? intval($_POST['info'][54]) : 1;
        $s_phone_m_o = (isset($_POST['info'][55])) ? intval($_POST['info'][55]) : 1;
        $o_mail = (isset($_POST['info'][56])) ? intval($_POST['info'][56]) : 1;
        $d_mail = (isset($_POST['info'][57])) ? intval($_POST['info'][57]) : 1;
        $p_mail = (isset($_POST['info'][58])) ? intval($_POST['info'][58]) : 1;
        $f_mail = (isset($_POST['info'][59])) ? intval($_POST['info'][59]) : 1;
        $s_mail = (isset($_POST['info'][60])) ? intval($_POST['info'][60]) : 1;
        $o_mail_o = (isset($_POST['info'][61])) ? intval($_POST['info'][61]) : 0;
        $d_mail_o = (isset($_POST['info'][62])) ? intval($_POST['info'][62]) : 0;
        $p_mail_o = (isset($_POST['info'][63])) ? intval($_POST['info'][63]) : 0;
        $f_mail_o = (isset($_POST['info'][64])) ? intval($_POST['info'][64]) : 0;
        $s_mail_o = (isset($_POST['info'][65])) ? intval($_POST['info'][65]) : 0;
        $o_web = (isset($_POST['info'][66])) ? intval($_POST['info'][66]) : 0;
        $d_web = (isset($_POST['info'][67])) ? intval($_POST['info'][67]) : 0;
        $p_web = (isset($_POST['info'][68])) ? intval($_POST['info'][68]) : 0;
        $f_web = (isset($_POST['info'][69])) ? intval($_POST['info'][69]) : 0;
        $s_web = (isset($_POST['info'][70])) ? intval($_POST['info'][70]) : 0;
        $last_name = (isset($_POST['info'][71])) ? htmlspecialchars($_POST['info'][71]) : '';
        $last_name_sql = db_quote($last_name);
        $first_name = (isset($_POST['info'][72])) ? htmlspecialchars($_POST['info'][72]) : '';
        $first_name_sql = db_quote($first_name);
        $dateon = (isset($_POST['info'][73]) && $_POST['info'][73] !== '') ? htmlspecialchars($_POST['info'][73]) : null;
        $dateon_sql = ($dateon === null) ? 'NULL' : db_quote($dateon);
        $nacionalnost = (isset($_POST['info'][74])) ? htmlspecialchars($_POST['info'][74]) : '';
        $nacionalnost_sql = db_quote($nacionalnost);
        $date_razdane = (isset($_POST['info'][75]) && $_POST['info'][75] !== '') ? htmlspecialchars($_POST['info'][75]) : null;
        $date_razdane_sql = ($date_razdane === null) ? 'NULL' : db_quote($date_razdane);
        $licendocument = (isset($_POST['info'][76])) ? htmlspecialchars($_POST['info'][76]) : '';
        $licendocument_sql = db_quote($licendocument);
        $ldnomer = (isset($_POST['info'][77])) ? htmlspecialchars($_POST['info'][77]) : '';
        $ldnomer_sql = db_quote($ldnomer);
        $izdadenot = (isset($_POST['info'][78])) ? htmlspecialchars($_POST['info'][78]) : '';
        $izdadenot_sql = db_quote($izdadenot);
        $izdadenna = (isset($_POST['info'][79]) && $_POST['info'][79] !== '') ? htmlspecialchars($_POST['info'][79]) : null;
        $izdadenna_sql = ($izdadenna === null) ? 'NULL' : db_quote($izdadenna);
        $validendo = (isset($_POST['info'][80]) && $_POST['info'][80] !== '') ? htmlspecialchars($_POST['info'][80]) : null;
        $validendo_sql = ($validendo === null) ? 'NULL' : db_quote($validendo);
        $licen_phone = (isset($_POST['info'][81])) ? htmlspecialchars($_POST['info'][81]) : '';
        $licen_phone_sql = db_quote($licen_phone);
        $licen_mail = (isset($_POST['info'][82])) ? htmlspecialchars($_POST['info'][82]) : '';
        $licen_mail_sql = db_quote($licen_mail);
        $profesia = (isset($_POST['info'][83])) ? htmlspecialchars($_POST['info'][83]) : '';
        $profesia_sql = db_quote($profesia);
        $dogovor = (isset($_POST['info'][84])) ? htmlspecialchars($_POST['info'][84]) : '';
        $dogovor_sql = db_quote($dogovor);
        $date_start = (isset($_POST['info'][85]) && $_POST['info'][85] !== '') ? htmlspecialchars($_POST['info'][85]) : null;
        $date_start_sql = ($date_start === null) ? 'NULL' : db_quote($date_start);
        $date_stop = (isset($_POST['info'][86]) && $_POST['info'][86] !== '') ? htmlspecialchars($_POST['info'][86]) : null;
        $date_stop_sql = ($date_stop === null) ? 'NULL' : db_quote($date_stop);
        if (isset($_POST['info'][87])) {
            $zaplata_raw = htmlspecialchars($_POST['info'][87]);
            $zaplata = ($zaplata_raw === '') ? '0' : $zaplata_raw;
        } else {
            $zaplata = '';
        }
        $zaplata_sql = db_quote($zaplata);
        if (isset($_POST['info'][88])) {
            $zaplata_cas_raw = htmlspecialchars($_POST['info'][88]);
            $zaplata_cas = ($zaplata_cas_raw === '') ? '0' : $zaplata_cas_raw;
        } else {
            $zaplata_cas = '0';
        }
        $zaplata_cas_sql = db_quote($zaplata_cas);
        if (isset($_POST['info'][89])) {
            $nakilometar_raw = htmlspecialchars($_POST['info'][89]);
            $nakilometar = ($nakilometar_raw === '') ? '0' : $nakilometar_raw;
        } else {
            $nakilometar = '';
        }
        $nakilometar_sql = db_quote($nakilometar);
        $med_karta = (isset($_POST['info'][90])) ? htmlspecialchars($_POST['info'][90]) : '';
        $med_karta_sql = db_quote($med_karta);
        $members_id = (isset($_POST['info'][91])) ? intval($_POST['info'][91]) : 0;
        $firm_id = (isset($_POST['info'][92])) ? intval($_POST['info'][92]) : 0;
        $o_last_name = (isset($_POST['info'][93])) ? intval($_POST['info'][93]) : 1;
        $d_last_name = (isset($_POST['info'][94])) ? intval($_POST['info'][94]) : 1;
        $p_last_name = (isset($_POST['info'][95])) ? intval($_POST['info'][95]) : 1;
        $f_last_name = (isset($_POST['info'][96])) ? intval($_POST['info'][96]) : 1;
        $s_last_name = (isset($_POST['info'][97])) ? intval($_POST['info'][97]) : 1;
        $last_name_txt = (isset($_POST['info'][98])) ? htmlspecialchars($_POST['info'][98]) : '';
        $last_name_txt_sql = db_quote($last_name_txt);
        $phone1_txt = (isset($_POST['info'][99])) ? htmlspecialchars($_POST['info'][99]) : '';
        $phone1_txt_sql = db_quote($phone1_txt);
        $address_txt = (isset($_POST['info'][100])) ? htmlspecialchars($_POST['info'][100]) : '';
        $address_txt_sql = db_quote($address_txt);
        $city_txt = (isset($_POST['info'][101])) ? htmlspecialchars($_POST['info'][101]) : '';
        $city_txt_sql = db_quote($city_txt);
        $address1_txt = (isset($_POST['info'][102])) ? htmlspecialchars($_POST['info'][102]) : '';
        $address1_txt_sql = db_quote($address1_txt);
        $name_txt = (isset($_POST['info'][103])) ? htmlspecialchars($_POST['info'][103]) : '';
        $name_txt_sql = db_quote($name_txt);
        $fix_otstapka = (isset($_POST['info'][104])) ? htmlspecialchars($_POST['info'][104]) : '0.00';
        $fix_otstapka_sql = db_quote($fix_otstapka);
        $statusi_id = (isset($_POST['info'][105])) ? intval($_POST['info'][105]) : 0;
        $isgrafik = (isset($_POST['info'][106])) ? intval($_POST['info'][106]) : 0;
        $color = (isset($_POST['info'][107])) ? htmlspecialchars($_POST['info'][107]) : '#FFFFFF';
        $color_sql = db_quote($color);
        $abb = (isset($_POST['info'][108])) ? htmlspecialchars($_POST['info'][108]) : '';
        $abb_sql = db_quote($abb);

        $status = _('Липсва тип на заявката!');
        $newid = $contragent_id;

        if ($type == "SAVE") {
            if ($contragent_id != 0) {
                $user_id = $_SESSION['user_id'];
                $user_rows = db_select("SELECT role FROM members WHERE id = $user_id");
                if ($user_rows[0]["role"] == 'targ' || $user_rows[0]["role"] == 'client') {
                    $update_contragents = db_query("UPDATE contragents SET 
                        category_id = $category_id, 
                        name = $contragent_name_sql, 
                        address = $contragent_address_sql, 
                        address1 = $contragent_address1_sql, 
                        city = $contragent_city_sql, 
                        phone = $contragent_phone_sql, 
                        phone1 = $contragent_phone1_sql, 
                        phone_m = $contragent_phone_m_sql, 
                        phone_m_o = $contragent_phone_m_o_sql, 
                        mail = $contragent_mail_sql, 
                        mail_o = $contragent_mail_o_sql, 
                        web = $contragent_web_sql, 
                        info1 = $contragent_info1_sql, 
                        info2 = $contragent_info2_sql, 
                        o_name = $o_name, 
                        d_name = $d_name, 
                        p_name = $p_name, 
                        f_name = $f_name, 
                        s_name = $s_name, 
                        o_address = $o_address, 
                        d_address = $d_address, 
                        p_address = $p_address, 
                        f_address = $f_address, 
                        s_address = $s_address, 
                        o_address1 = $o_address1, 
                        d_address1 = $d_address1, 
                        p_address1 = $p_address1, 
                        f_address1 = $f_address1, 
                        s_address1 = $s_address1, 
                        o_city = $o_city, 
                        d_city = $d_city, 
                        p_city = $p_city, 
                        f_city = $f_city, 
                        s_city = $s_city, 
                        o_phone = $o_phone, 
                        d_phone = $d_phone, 
                        p_phone = $p_phone, 
                        f_phone = $f_phone, 
                        s_phone = $s_phone, 
                        o_phone1 = $o_phone1, 
                        d_phone1 = $d_phone1, 
                        p_phone1 = $p_phone1, 
                        f_phone1 = $f_phone1, 
                        s_phone1 = $s_phone1, 
                        o_phone_m = $o_phone_m, 
                        d_phone_m = $d_phone_m, 
                        p_phone_m = $p_phone_m, 
                        f_phone_m = $f_phone_m, 
                        s_phone_m = $s_phone_m, 
                        o_phone_m_o = $o_phone_m_o, 
                        d_phone_m_o = $d_phone_m_o, 
                        p_phone_m_o = $p_phone_m_o, 
                        f_phone_m_o = $f_phone_m_o, 
                        s_phone_m_o = $s_phone_m_o, 
                        o_mail = $o_mail, 
                        d_mail = $d_mail, 
                        p_mail = $p_mail, 
                        f_mail = $f_mail, 
                        s_mail = $s_mail, 
                        o_mail_o = $o_mail_o, 
                        d_mail_o = $d_mail_o, 
                        p_mail_o = $p_mail_o, 
                        f_mail_o = $f_mail_o, 
                        s_mail_o = $s_mail_o, 
                        o_web = $o_web, 
                        d_web = $d_web, 
                        p_web = $p_web, 
                        f_web = $f_web, 
                        s_web = $s_web, 
                        last_name = $last_name_sql, 
                        first_name = $first_name_sql, 
                        dateon = $dateon_sql, 
                        nacionalnost = $nacionalnost_sql, 
                        date_razdane = $date_razdane_sql, 
                        licendocument = $licendocument_sql, 
                        ldnomer = $ldnomer_sql, 
                        izdadenot = $izdadenot_sql, 
                        izdadenna = $izdadenna_sql, 
                        validendo = $validendo_sql, 
                        licen_phone = $licen_phone_sql, 
                        licen_mail = $licen_mail_sql, 
                        profesia = $profesia_sql, 
                        dogovor = $dogovor_sql, 
                        date_start = $date_start_sql, 
                        date_stop = $date_stop_sql, 
                        zaplata = $zaplata_sql, 
                        zaplata_cas = $zaplata_cas_sql, 
                        nakilometar = $nakilometar_sql, 
                        med_karta = $med_karta_sql, 
                        firm_id = $firm_id, 
                        o_last_name = $o_last_name, 
                        d_last_name = $d_last_name, 
                        p_last_name = $p_last_name, 
                        f_last_name = $f_last_name, 
                        s_last_name = $s_last_name, 
                        last_name_txt = $last_name_txt_sql, 
                        phone1_txt = $phone1_txt_sql, 
                        address_txt = $address_txt_sql, 
                        city_txt = $city_txt_sql, 
                        address1_txt = $address1_txt_sql, 
                        name_txt = $name_txt_sql, 
                        fix_otstapka = $fix_otstapka_sql, 
                        statusi_id = $statusi_id, 
                        isgrafik = $isgrafik, 
                        color = $color_sql, 
                        abb = $abb_sql 
                        WHERE id = $contragent_id");
                } else {
                    $update_contragents = db_query("UPDATE contragents SET 
                        category_id = $category_id, 
                        name = $contragent_name_sql, 
                        address = $contragent_address_sql, 
                        address1 = $contragent_address1_sql, 
                        city = $contragent_city_sql, 
                        phone = $contragent_phone_sql, 
                        phone1 = $contragent_phone1_sql, 
                        phone_m = $contragent_phone_m_sql, 
                        phone_m_o = $contragent_phone_m_o_sql, 
                        mail = $contragent_mail_sql, 
                        mail_o = $contragent_mail_o_sql, 
                        web = $contragent_web_sql, 
                        info1 = $contragent_info1_sql, 
                        info2 = $contragent_info2_sql, 
                        o_name = $o_name, 
                        d_name = $d_name, 
                        p_name = $p_name, 
                        f_name = $f_name, 
                        s_name = $s_name, 
                        o_address = $o_address, 
                        d_address = $d_address, 
                        p_address = $p_address, 
                        f_address = $f_address, 
                        s_address = $s_address, 
                        o_address1 = $o_address1, 
                        d_address1 = $d_address1, 
                        p_address1 = $p_address1, 
                        f_address1 = $f_address1, 
                        s_address1 = $s_address1, 
                        o_city = $o_city, 
                        d_city = $d_city, 
                        p_city = $p_city, 
                        f_city = $f_city, 
                        s_city = $s_city, 
                        o_phone = $o_phone, 
                        d_phone = $d_phone, 
                        p_phone = $p_phone, 
                        f_phone = $f_phone, 
                        s_phone = $s_phone, 
                        o_phone1 = $o_phone1, 
                        d_phone1 = $d_phone1, 
                        p_phone1 = $p_phone1, 
                        f_phone1 = $f_phone1, 
                        s_phone1 = $s_phone1, 
                        o_phone_m = $o_phone_m, 
                        d_phone_m = $d_phone_m, 
                        p_phone_m = $p_phone_m, 
                        f_phone_m = $f_phone_m, 
                        s_phone_m = $s_phone_m, 
                        o_phone_m_o = $o_phone_m_o, 
                        d_phone_m_o = $d_phone_m_o, 
                        p_phone_m_o = $p_phone_m_o, 
                        f_phone_m_o = $f_phone_m_o, 
                        s_phone_m_o = $s_phone_m_o, 
                        o_mail = $o_mail, 
                        d_mail = $d_mail, 
                        p_mail = $p_mail, 
                        f_mail = $f_mail, 
                        s_mail = $s_mail, 
                        o_mail_o = $o_mail_o, 
                        d_mail_o = $d_mail_o, 
                        p_mail_o = $p_mail_o, 
                        f_mail_o = $f_mail_o, 
                        s_mail_o = $s_mail_o, 
                        o_web = $o_web, 
                        d_web = $d_web, 
                        p_web = $p_web, 
                        f_web = $f_web, 
                        s_web = $s_web, 
                        last_name = $last_name_sql, 
                        first_name = $first_name_sql, 
                        dateon = $dateon_sql, 
                        nacionalnost = $nacionalnost_sql, 
                        date_razdane = $date_razdane_sql, 
                        licendocument = $licendocument_sql, 
                        ldnomer = $ldnomer_sql, 
                        izdadenot = $izdadenot_sql, 
                        izdadenna = $izdadenna_sql, 
                        validendo = $validendo_sql, 
                        licen_phone = $licen_phone_sql, 
                        licen_mail = $licen_mail_sql, 
                        profesia = $profesia_sql, 
                        dogovor = $dogovor_sql, 
                        date_start = $date_start_sql, 
                        date_stop = $date_stop_sql, 
                        zaplata = $zaplata_sql, 
                        zaplata_cas = $zaplata_cas_sql, 
                        nakilometar = $nakilometar_sql, 
                        med_karta = $med_karta_sql, 
                        members_id = $members_id, 
                        firm_id = $firm_id, 
                        o_last_name = $o_last_name, 
                        d_last_name = $d_last_name, 
                        p_last_name = $p_last_name, 
                        f_last_name = $f_last_name, 
                        s_last_name = $s_last_name, 
                        last_name_txt = $last_name_txt_sql, 
                        phone1_txt = $phone1_txt_sql, 
                        address_txt = $address_txt_sql, 
                        city_txt = $city_txt_sql, 
                        address1_txt = $address1_txt_sql, 
                        name_txt = $name_txt_sql, 
                        fix_otstapka = $fix_otstapka_sql, 
                        statusi_id = $statusi_id, 
                        isgrafik = $isgrafik, 
                        color = $color_sql, 
                        abb = $abb_sql 
                        WHERE id = $contragent_id");
                }
                if ($update_contragents) {
                    $status = 1;
                } else {
                    $status = _('Данните от промяната на контрагента не могат да се запишат на сървъра!');
                }
            } else {
                $insert_contragents = db_query("INSERT INTO contragents 
                    (category_id, 
                    name, 
                    address, 
                    address1, 
                    city, 
                    phone, 
                    phone1, 
                    phone_m, 
                    phone_m_o, 
                    mail, 
                    mail_o, 
                    web, 
                    info1, 
                    info2, 
                    o_name, 
                    d_name, 
                    p_name, 
                    f_name, 
                    s_name, 
                    o_address, 
                    d_address, 
                    p_address, 
                    f_address, 
                    s_address, 
                    o_address1, 
                    d_address1, 
                    p_address1, 
                    f_address1, 
                    s_address1, 
                    o_city, 
                    d_city, 
                    p_city, 
                    f_city, 
                    s_city, 
                    o_phone, 
                    d_phone, 
                    p_phone, 
                    f_phone, 
                    s_phone, 
                    o_phone1, 
                    d_phone1, 
                    p_phone1, 
                    f_phone1, 
                    s_phone1, 
                    o_phone_m, 
                    d_phone_m, 
                    p_phone_m, 
                    f_phone_m, 
                    s_phone_m, 
                    o_phone_m_o, 
                    d_phone_m_o, 
                    p_phone_m_o, 
                    f_phone_m_o, 
                    s_phone_m_o, 
                    o_mail, 
                    d_mail, 
                    p_mail, 
                    f_mail, 
                    s_mail, 
                    o_mail_o, 
                    d_mail_o, 
                    p_mail_o, 
                    f_mail_o, 
                    s_mail_o, 
                    o_web, 
                    d_web, 
                    p_web, 
                    f_web,
                    s_web,
                    last_name, 
                    first_name, 
                    dateon, 
                    nacionalnost, 
                    date_razdane, 
                    licendocument, 
                    ldnomer, 
                    izdadenot, 
                    izdadenna, 
                    validendo, 
                    licen_phone, 
                    licen_mail, 
                    profesia, 
                    dogovor, 
                    date_start, 
                    date_stop, 
                    zaplata, 
                    zaplata_cas, 
                    nakilometar, 
                    med_karta,
                    members_id, 
                    firm_id, 
                    o_last_name, 
                    d_last_name, 
                    p_last_name, 
                    f_last_name, 
                    s_last_name, 
                    last_name_txt, 
                    phone1_txt, 
                    address_txt, 
                    city_txt, 
                    address1_txt, 
                    name_txt, 
                    fix_otstapka, 
                    statusi_id, 
                    isgrafik, 
                    color, 
                    abb) 
                    VALUES 
                    ($category_id, 
                    $contragent_name_sql, 
                    $contragent_address_sql, 
                    $contragent_address1_sql, 
                    $contragent_city_sql, 
                    $contragent_phone_sql, 
                    $contragent_phone1_sql, 
                    $contragent_phone_m_sql, 
                    $contragent_phone_m_o_sql, 
                    $contragent_mail_sql, 
                    $contragent_mail_o_sql, 
                    $contragent_web_sql, 
                    $contragent_info1_sql, 
                    $contragent_info2_sql, 
                    $o_name, 
                    $d_name, 
                    $p_name, 
                    $f_name, 
                    $s_name, 
                    $o_address, 
                    $d_address, 
                    $p_address, 
                    $f_address, 
                    $s_address, 
                    $o_address1, 
                    $d_address1, 
                    $p_address1, 
                    $f_address1, 
                    $s_address1, 
                    $o_city, 
                    $d_city, 
                    $p_city, 
                    $f_city, 
                    $s_city, 
                    $o_phone, 
                    $d_phone, 
                    $p_phone, 
                    $f_phone, 
                    $s_phone, 
                    $o_phone1, 
                    $d_phone1, 
                    $p_phone1, 
                    $f_phone1, 
                    $s_phone1, 
                    $o_phone_m, 
                    $d_phone_m, 
                    $p_phone_m, 
                    $f_phone_m, 
                    $s_phone_m, 
                    $o_phone_m_o, 
                    $d_phone_m_o, 
                    $p_phone_m_o, 
                    $f_phone_m_o, 
                    $s_phone_m_o, 
                    $o_mail, 
                    $d_mail, 
                    $p_mail, 
                    $f_mail, 
                    $s_mail, 
                    $o_mail_o, 
                    $d_mail_o, 
                    $p_mail_o, 
                    $f_mail_o, 
                    $s_mail_o, 
                    $o_web, 
                    $d_web, 
                    $p_web, 
                    $f_web,
                    $s_web, 
                    $last_name_sql, 
                    $first_name_sql, 
                    $dateon_sql, 
                    $nacionalnost_sql, 
                    $date_razdane_sql, 
                    $licendocument_sql, 
                    $ldnomer_sql, 
                    $izdadenot_sql, 
                    $izdadenna_sql, 
                    $validendo_sql, 
                    $licen_phone_sql, 
                    $licen_mail_sql, 
                    $profesia_sql, 
                    $dogovor_sql, 
                    $date_start_sql, 
                    $date_stop_sql, 
                    $zaplata_sql, 
                    $zaplata_cas_sql, 
                    $nakilometar_sql, 
                    $med_karta_sql, 
                    $members_id, 
                    $firm_id, 
                    $o_last_name, 
                    $d_last_name, 
                    $p_last_name, 
                    $f_last_name, 
                    $s_last_name, 
                    $last_name_txt_sql, 
                    $phone1_txt_sql, 
                    $address_txt_sql, 
                    $city_txt_sql, 
                    $address1_txt_sql, 
                    $name_txt_sql, 
                    $fix_otstapka_sql, 
                    $statusi_id, 
                    $isgrafik, 
                    $color_sql, 
                    $abb_sql)");
                if ($insert_contragents) {
                    $get_last_ids = db_select("SELECT MAX(id) AS lid FROM contragents");
                    if (sizeof($get_last_ids) > 0) {
                        $newid = $get_last_ids[0]["lid"];
                    }
                    $status = 1;
                } else {
                    $status = _('Данните за новия контрагент не могат да се запишат на сървъра!');
                }
            }
        }

        if ($type === "DELETE") {
            $delete_contragents = db_query("DELETE FROM contragents WHERE id = $contragent_id");
            if ($delete_contragents) {
                $status = 1;
            } else {
                $status = _('Контрагентът не може да бъде изтрит от Сървъра!');
            }
        }

    } else {
        $status = _('Некоректно изпратени данни!');
    }

    echo json_encode(array(
        'status' => $status,
        'newid' => $newid
    ));
}