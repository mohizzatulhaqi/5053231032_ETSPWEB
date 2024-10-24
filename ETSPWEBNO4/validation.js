document.getElementById('memberForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  clearErrors();

  let isValid = true;

  const name = document.getElementById('name').value.trim();
  if (name === '') {
      showError('nameError', 'Nama Lengkap harus diisi.');
      isValid = false;
  }

  const dob = document.getElementById('dob').value.trim();
  if (!isValidDate(dob)) {
      showError('dobError', 'Format tanggal tidak valid. Gunakan DD/MM/YYYY.');
      isValid = false;
  }

  const gender = document.getElementById('gender').value;
  if (gender === '') {
      showError('genderError', 'Jenis Kelamin harus dipilih.');
      isValid = false;
  }

  const address = document.getElementById('address').value.trim();
  if (address === '') {
      showError('addressError', 'Alamat harus diisi.');
      isValid = false;
  }

  const phone = document.getElementById('phone').value.trim();
  if (!/^\d{10,13}$/.test(phone)) {
      showError('phoneError', 'Nomor Telepon harus berupa angka, minimal 10 karakter dan maksimal 13 karakter.');
      isValid = false;
  }

  const email = document.getElementById('email').value.trim();
  if (!validateEmail(email)) {
      showError('emailError', 'Alamat Email tidak valid.');
      isValid = false;
  }

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (password.length < 6) {
      showError('passwordError', 'Kata Sandi harus minimal 6 karakter.');
      isValid = false;
  }
  if (password !== confirmPassword) {
      showError('confirmPasswordError', 'Kata Sandi tidak cocok.');
      isValid = false;
  }

  if (isValid) {
      alert('Pendaftaran berhasil!');
  }
});

function clearErrors() {
  const errors = document.querySelectorAll('.error');
  errors.forEach(error => error.textContent = '');
}

function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

function isValidDate(dateString) {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
  return regex.test(dateString);
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
