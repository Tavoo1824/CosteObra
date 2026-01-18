const tableBody = document.querySelector('#leads-table tbody');
const clearBtn = document.getElementById('clear');

function loadLeads() {
    const leads = JSON.parse(localStorage.getItem('costeobra_leads')) || [];
    tableBody.innerHTML = '';

    leads.forEach(lead => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
      <td>${new Date(lead.date).toLocaleString()}</td>
      <td>${lead.user_input?.name || '-'}</td>
      <td>${lead.zona}</td>
      <td>${lead.services.join(', ')}</td>
      <td>${lead.user_input?.description || '-'}</td>
      <td>${lead.urgente ? 'Sí' : 'No'}</td>
      <td>${lead.total} €</td>
    `;

        tableBody.appendChild(tr);
    });
}

clearBtn.addEventListener('click', () => {
    if (confirm('¿Borrar todos los leads?')) {
        localStorage.removeItem('costeobra_leads');
        loadLeads();
    }
});

loadLeads();
