var XLSX = require("xlsx");
var fs = require("fs");

// TODO: Add the "ProductMaster.xlsx" file to the same directory as this script

// You can change the file name here if needed
var inputFileName = "ProductMaster.xlsx";

var workbook = XLSX.readFile(inputFileName);
var sheet_name_list = workbook.SheetNames;

var allData = [];

sheet_name_list.forEach(function (y) {
    var worksheet = workbook.Sheets[y];
    var headers = {};
    var data = [];

    for (z in worksheet) {
        if (z[0] === "!") continue;
        var col = z.substring(0, 1);
        var row = parseInt(z.substring(1));
        var value = worksheet[z].v;

        if (row == 1) {
            headers[col] = value;
            continue;
        }

        if (!data[row]) data[row] = {};
        data[row][headers[col]] = value;
    }

    data.shift();
    data.shift();

    // Remove empty entries
    data = data.filter(item => item !== null && item !== undefined);

    // Add sheet data to allData array
    allData.push({
        sheetName: y,
        data: data
    });
});

// Convert allData to JSON string
var jsonData = JSON.stringify(allData, null, 2);

// Write JSON data to file
fs.writeFile("output.json", jsonData, (err) => {
    if (err) {
        console.error("An error occurred while writing the file:", err);
    } else {
        console.log("JSON file has been created successfully.");
    }
});
