let studentInfo = [];

// Capture student info from the table
function captureInput() {
    let firstName = document.getElementById("first-name-input").value;
    let lastName = document.getElementById("last-name-input").value;
    let grade = document.getElementById("grade-input").value;

    return { "firstName": firstName, "lastName": lastName, "grade": grade };
}

// Reset the input fields
function resetInput() {
    document.getElementById("first-name-input").value = "";
    document.getElementById("last-name-input").value = "";
    document.getElementById("grade-input").value = "";
}

// Util function to create table header and data elements
function utilCreateThTdElement(element, innerHTML) {
    const tdThElement = document.createElement(element);
    tdThElement.innerHTML = innerHTML;

    return tdThElement;
}

// Create Output Table
function createOutputTable() {
    let outputContainer = document.getElementById("output-container");

    function createOutputTableTitle() {
        const outputTableTitle = document.createElement("h1");
        outputTableTitle.innerHTML = "Output Information"

        return outputTableTitle;
    }
    outputContainer.appendChild(createOutputTableTitle());

    const outputTable = document.createElement("table");

    function createOutputTableHeader() {
        const outputTableHeader = document.createElement("thead");
        const outputTableHeaderRow = document.createElement("tr");

        const firstNameHeader = utilCreateThTdElement("th", "First Name");
        const lastNameHeader = utilCreateThTdElement("th", "Last Name");
        const gradeHeader = utilCreateThTdElement("th", "Grade");

        outputTableHeaderRow.appendChild(firstNameHeader);
        outputTableHeaderRow.appendChild(lastNameHeader);
        outputTableHeaderRow.appendChild(gradeHeader);

        outputTableHeader.appendChild(outputTableHeaderRow);

        return outputTableHeader;
    }

    outputTable.appendChild(createOutputTableHeader());

    const outputTableBody = document.createElement("tbody");
    outputTableBody.id = "output-table-body";

    const tableRow = document.createElement("tr");

    const firstNameData = utilCreateThTdElement("td", studentInfo[0].firstName);
    const lastNameData = utilCreateThTdElement("td", studentInfo[0].lastName);
    const gradeData = utilCreateThTdElement("td", studentInfo[0].grade);

    tableRow.appendChild(firstNameData);
    tableRow.appendChild(lastNameData);
    tableRow.appendChild(gradeData);

    outputTableBody.appendChild(tableRow);

    outputTable.appendChild(outputTableBody);
    outputContainer.appendChild(outputTable);
}

// Populate Output Table
function populateOutputTable() {
    let outputTableBody = document.getElementById("output-table-body");
    const tableRow = document.createElement("tr");

    const firstNameData = utilCreateThTdElement("td", studentInfo.slice(-1)[0].firstName);
    const lastNameData = utilCreateThTdElement("td", studentInfo.slice(-1)[0].lastName);
    const gradeData = utilCreateThTdElement("td", studentInfo.slice(-1)[0].grade);

    tableRow.appendChild(firstNameData);
    tableRow.appendChild(lastNameData);
    tableRow.appendChild(gradeData);

    outputTableBody.appendChild(tableRow);
}

document.getElementById("grade-input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        let student = captureInput();
        studentInfo.push(student);
        resetInput();

        if (studentInfo.length === 1) createOutputTable();
        else populateOutputTable()
    }
});
