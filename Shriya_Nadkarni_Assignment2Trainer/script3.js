// Dummy data for marks
const dummyMarks = [
    { subject: 'DBMS', marks: 90 },
    { subject: 'Web Technology', marks: 85 },
    { subject: 'Java Programming', marks: 78 },
    { subject: 'Image processing', marks: 92 },
    { subject: 'CCNS', marks: 88 },
    { subject: 'AI', marks: 98 },
    { subject: 'Python', marks: 89 },
    { subject: 'Mobile Comp', marks: 89 },
];

// Function to populate the marks table
function populateMarksTable() {
    const marksTableBody = document.getElementById('marks-body');

    dummyMarks.forEach((mark) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${mark.subject}</td>
            <td>${mark.marks}</td>
        `;
        marksTableBody.appendChild(row);
    });
}

// Populate the marks table when the page loads
window.addEventListener('load', populateMarksTable);
// Function to filter the marks table by subject
function filterTableBySubject() {
    const subjectFilter = document.getElementById('subject-filter');
    const selectedSubject = subjectFilter.value;
    const rows = document.querySelectorAll('#marks-body tr');

    rows.forEach((row) => {
        const subjectCell = row.querySelector('td:first-child');
        if (selectedSubject === 'all' || subjectCell.textContent === selectedSubject) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Event listener for the subject filter
document.getElementById('subject-filter').addEventListener('change', filterTableBySubject);
