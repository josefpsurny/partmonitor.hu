<!DOCTYPE html>
<html lang="cs">
    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Otázky</title>

        <!-- Bootstrap core CSS -->
        <!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"> -->
        <link href="        https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" rel="stylesheet">

        <!-- Custom fonts for this template -->
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    </head>
    <body>

<?php
$parties = ['6', '7', '4', '5', '3', '1', '2'];
$first_row = ['6', '7', '4', '5', '3', '1', '2'];
$qid = $_GET['qid'];
$questions = json_decode(file_get_contents('questions_all.json'));
$q = get_item($qid, $questions);
$answers = json_decode(file_get_contents('answers.json'));
$groups = [
    "-1" => ['first'=>[], 'second'=>[]],
    "0" => ['first'=>[], 'second'=>[]],
    "1" => ['first'=>[], 'second'=>[]]
];
$tmp = new stdClass;
// $tmp->abbreviation = 'Zeman';
// $tmp->id = '9';
// $tmp->picture = 'zeman.jpg';
// $groups['0']['first'][] = $tmp;
foreach ($parties as $pid) {
    $a = get_item($pid, $answers);
    if (in_array($pid, $first_row)) {
        // print_r($a);
        if ($pid == '9') {

        } else {
            $groups[$a->votes->$qid]['first'][] = $a;
        }
    } else {
        $groups[$a->votes->$qid]['second'][] = $a;
    }
}
?>
        <style>
            .logo {
                width: 90px;
                height: 90px;
                border-radius: 50%;
                margin: 10px
            }
            .logo-small {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                margin: 6px
            }
            .logo-text{
                font-size: 1.5em;
            }
            .logo-text-small{
                font-size: 1.25em;
            }
            .flex {
                display: inline-block;
            }
            .col-6, .neutral {
                padding-top: 10px;
            }
            .top {
                width: 100vw;
                padding: 10px;
                color: white
                /*background-color: #fed201;*/
            }
            .hithit {
                font-size: 1.5em;
                width: 100vw;
                /*background-color: #fed201;*/
                padding: 10px;
                height: 100vh;
                color: white;
            }
            .neutral {
                border-bottom: 1px solid #ddd;
            }
            .note {
                padding: 10px;
                font-size: 1.25em;
            }
            h1 {
                margin-bottom: 0!important;
            }
        </style>

        <div>
            <h1 class="text-center top bg-primary">
                <?php echo $q->name; ?><br />
                <small><?php echo $q->question; ?></small>
            </h1>
        </div>
        <div class="row text-center">
            <div class="col-6 table-success">
                <h2><i class="fa fa-check"></i> Egyetért</h2>
                <?php
                foreach ($groups["1"]["first"] as $p) { ?>
                    <span class="flex">
                        <div class="">
                            <img class='logo' src='90x90/<?php echo $p->picture ?>' >
                        </div>
                        <div class="">
                            <span class="logo-text"><?php echo $p->abbreviation; ?></span>
                        </div>
                    </span>
                <?php } ?>
                <?php if (count($groups["1"]["first"] > 0)) echo '<br />'; ?>
                <?php
                foreach ($groups["1"]["second"] as $p) { ?>
                    <span class="flex">
                        <div class="">
                            <img class='logo-small' src='90x90/<?php echo $p->picture ?>' >
                        </div>
                        <div class="">
                            <?php echo $p->abbreviation; ?>
                        </div>
                    </span>
                <?php } ?>
            </div>


            <div class="col-6 table-danger">
                <h2><i class="fa fa-close"></i> Nem ért egyet</h2>
                <?php
                foreach ($groups["-1"]["first"] as $p) { ?>
                    <span class="flex">
                        <div class="">
                            <img class='logo' src='90x90/<?php echo $p->picture ?>' >
                        </div>
                        <div class="">
                            <span class="logo-text"><?php echo $p->abbreviation; ?></span>
                        </div>
                    </span>
                <?php } ?>
                <?php if (count($groups["-1"]["first"] > 0)) echo '<br />'; ?>
                <?php
                foreach ($groups["-1"]["second"] as $p) { ?>
                    <span class="flex">
                        <div class="">
                            <img class='logo-small' src='90x90/<?php echo $p->picture ?>' >
                        </div>
                        <div class="">
                            <?php echo $p->abbreviation; ?>
                        </div>
                    </span>
                <?php } ?>
            </div>
        </div>
        <?php if ((count($groups["0"]["first"]) + count($groups["0"]["second"]) > 0)) { ?>
        <div class="text-center neutral table-secondary">
            <h4><i class="fa fa-question"></i> Nem tudja / nincs egyértelmű válasz</h4>
            <?php
            foreach ($groups["0"]["first"] as $p) { ?>
                <span class="flex">
                    <div class="">
                        <img class='logo' src='90x90/<?php echo $p->picture ?>' >
                    </div>
                    <div class="">
                        <span class="logo-text"><?php echo $p->abbreviation; ?></span>
                    </div>
                </span>
            <?php } ?>
            <?php if (count($groups["-1"]["first"] > 0)) echo '<br />'; ?>
            <?php
            foreach ($groups["0"]["second"] as $p) { ?>
                <span class="flex">
                    <div class="">
                        <img class='logo-small' src='90x90/<?php echo $p->picture ?>' >
                    </div>
                    <div class="">
                        <?php echo $p->abbreviation; ?>
                    </div>
                </span>
            <?php } ?>
        </div>
        <?php } ?>
        <div class="note">
            <i class="fa fa-info-circle"></i> A Voksmonitor 2018-nak adott válaszok alapján.
        </div>
        <div class="hithit text-center bg-primary">
            <h3></h3>
            <h3>Ha fontosnak tartod, amit csinálunk, támogasd a K-Monitor munkáját! </h3>
            <h3>K-Monitor.hu/tamogatas</h3>
        </div>

    </body>
</html>


<?php
function get_item($id, $item) {
    foreach ($item as $q) {
        if ($q->id == $id) {
            return $q;
        }
    }
}

?>
