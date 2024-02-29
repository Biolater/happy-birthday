const startButton = document.getElementById('start') as HTMLButtonElement;
const inputSection = document.getElementById('input-section') as HTMLInputElement;
const nextButton = document.getElementById('next-button') as HTMLButtonElement;
const nextButton2 = document.getElementById('next-button-2') as HTMLButtonElement;
const datePicker = document.getElementById('date-pick') as HTMLDivElement;
const dateInput = document.getElementById('date-input') as HTMLInputElement;
const onlyLettersRegex = /^[a-zA-Z]+$/;
let enteredName: string;
const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$/;
startButton?.addEventListener('click', (e: any) => {
  e.target?.classList.add('fade-out');
  setTimeout(() => {
    e.target?.classList.add('hidden');
  }, 200)
  setTimeout(() => {
    inputSection?.classList.remove('fade-out')
    inputSection?.classList.add('fade-in');
  }, 400)
});

inputSection?.addEventListener('input', (e: any) => {
  const input = e.target.value;
  if (input.length > 0) {
    nextButton?.classList.remove("fade-out");
    nextButton?.classList.add("fade-in");
  } else {
    nextButton?.classList.add("fade-out");
    nextButton?.classList.remove("fade-in");
  }
})

nextButton?.addEventListener('click', () => {
  const inputSectionText: string | null = (inputSection as HTMLInputElement)?.value.trim();

  const errorContainer = document.querySelector(".error") as HTMLDivElement;
  errorContainer.innerHTML = ''; 

  if (inputSectionText && onlyLettersRegex.test(inputSectionText)) {
    inputSection.classList.remove("fade-in");
    nextButton.classList.remove("fade-in");
    inputSection.classList.add("fade-out");
    nextButton.classList.add("fade-out");
    datePicker.classList.remove("hidden");
    nextButton2.classList.remove("hidden");
    enteredName = inputSectionText;
    setTimeout(() => {
      inputSection.classList.add("hidden");
      datePicker.classList.remove("fade-out");
      nextButton.classList.add("hidden");
      nextButton2.classList.remove("fade-out");
    }, 400);
  } else {
    const errorText = "Please enter a valid name with only letters.";
    const errorElement = document.createElement("p") as HTMLParagraphElement;
    errorElement.textContent = errorText;
    errorElement.id = "error";
    errorElement.className = "mt-2 text-xs text-red-600 dark:text-red-400";

    errorContainer.appendChild(errorElement);
  }
});



nextButton2?.addEventListener('click', () => {
  const dateInputText: string | null = (dateInput as HTMLInputElement)?.value.trim();
  if(dateInputText && dateRegex.test(dateInputText)){
    datePicker.classList.add("fade-out");
    nextButton2.classList.add("fade-out");
    setTimeout(() => {
      datePicker.classList.add("hidden");
      nextButton2.classList.add("hidden");
    }, 400);
  }
})
