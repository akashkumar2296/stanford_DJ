
<?php
$q = intval($_GET['q']);

$con = mysqli_connect('*********','*******','*******','godj'); # sike bruh u actualy thought
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"Artist");
$sql="SELECT * FROM Artist WHERE cultural='No'";
$result = mysqli_query($con,$sql);
$master_array = array();
$artists = array();


while($row = mysqli_fetch_array($result)) {
    #$artists = array ($row['name'], $row['short_description'], $row['university']);
    $artists[] = array($row['name'], $row['short_description'], $row['photo'], $row['about']);

    #echo json_encode($row['name']);
}

$sql_cultural="SELECT * FROM Artist WHERE cultural='Yes'";
$result_cultural = mysqli_query($con,$sql_cultural);
$artists_cultural = array();


while($row_cultural = mysqli_fetch_array($result_cultural)) {
    #$artists = array ($row['name'], $row['short_description'], $row['university']);
    $artists_cultural[] = array($row_cultural['name'], $row_cultural['short_description'], $row_cultural['photo'], $row_cultural['about']);

    #echo json_encode($row['name']);
}

$master_array[] = $artists;
$master_array[] = $artists_cultural;

echo json_encode($master_array);

mysqli_close($con);
?>

