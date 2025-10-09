const dialog = document.getElementById('MyDialog');
const openBtn = document.getElementById('OpenBtn');
const closeBtn = document.getElementById('CloseBtn');
const submitBtn = document.getElementById('SubmitBtn');
const form = document.getElementById('feedbackForm');


openBtn.addEventListener('click', () => {
  dialog.showModal();
});

closeBtn.addEventListener('click', () => {
  dialog.close();
})


// Закрытие по клику на фон
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const clickedOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (clickedOutside) dialog.close();
});

// Отправка формы
submitBtn.addEventListener('click', () => {
  if (!form.checkValidity()) {
    form.reportValidity(); // встроенная браузерная проверка
    return;
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  console.log('Форма отправлена:', data);
  alert('Спасибо, форма успешно отправлена!');

  form.reset();
});
