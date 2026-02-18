export function addTableRecord(record, type) {
  	const table = document.querySelector('#records_body')
  	const row = document.createElement('tr')

  	for (let key in record) {
    	const cell = document.createElement('td')
    	cell.textContent = record[key]
      cell.setAttribute('data-name', key)
    	row.appendChild(cell)
  	}
  	table.appendChild(row)
}

export function removeTableRecords() {
  const recordsToRemove = []
  const recordsInTable = document.querySelectorAll('.selected')
  for (const recordEl of recordsInTable) {
    const record = {}
    for (const cell of recordEl.children) {
      const key = cell.getAttribute('data-name')
      record[key] = key === 'amount' ? parseInt(cell.textContent) : cell.textContent
    }
    recordsToRemove.push(record)
    recordEl.remove()
  }
  return recordsToRemove
}

export function clearTableBody(tableBody) {
  // While there are child nodes in the tbody, remove them
  const tBody = document.querySelector(tableBody)
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }
}

export function fillTable(records, table) {
    clearTableBody(table)
    for (const transaction of records ){
      addTableRecord(transaction) 
    }
}