function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  if (username === '' || password === '') {
    document.getElementById('error').innerText = 'Please fill all fields';
    return;
  }

  // تخزين الدور مؤقتًا
  localStorage.setItem('role', role);
  localStorage.setItem('user', username);

  window.location.href = 'dashboard.html';
}

function checkRole() {
  const role = localStorage.getItem('role');
  const user = localStorage.getItem('user');

  if (!role) {
    window.location.href = 'login.html';
    return;
  }

  document.getElementById('roleText').innerText =
    'Logged in as: ' + role.toUpperCase();

  // إخفاء القوائم حسب الدور
  if (role === 'agent') {
    document.getElementById('procurement').style.display = 'none';
    document.getElementById('reports').style.display = 'none';
  }

  if (role === 'director') {
    document.getElementById('procurement').style.display = 'none';
    document.getElementById('sales').style.display = 'none';
  }

  if (role !== 'manager') {
    alert('Access denied!');
    window.location.href = 'dashboard.html';
  }

  if (role === 'director') {
    alert('Directors cannot record sales');
    window.location.href = 'dashboard.html';
  }
}

function logout() {
  localStorage.clear();
  window.location.href = 'login.html';
}
