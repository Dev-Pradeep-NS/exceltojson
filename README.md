# Excel to JSON Converter

This project provides a Node.js script that converts Excel (.xlsx) files to JSON format. It's designed to simplify the process of extracting data from Excel spreadsheets and transforming it into a more developer-friendly JSON structure.

## Features

- Reads data from all sheets in an Excel workbook
- Preserves sheet names and data structure
- Handles multiple rows and columns
- Outputs a well-formatted JSON file
- Easy to use with minimal setup

## Use Case

This tool is particularly useful for:
- Developers working with data that originates in Excel format
- Data migration projects
- Creating API responses from Excel data
- Quick prototyping with existing Excel data

## How It Works

1. The script reads an Excel file named "ProductMaster.xlsx" (configurable)
2. It processes each sheet in the workbook
3. Data is extracted and structured into JSON format
4. The resulting JSON is written to an "output.json" file

## Requirements

- Node.js
- npm (Node Package Manager)
- xlsx package (`npm install xlsx`)

## Usage

1. Clone this repository
2. Place your Excel file in the project directory
3. Run `npm install` to install dependencies
4. Execute the script with `node index.js`
5. Find the resulting JSON in `output.json`
