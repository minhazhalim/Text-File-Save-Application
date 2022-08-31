const textarea = document.querySelector('textarea');
const input = document.querySelector('.file-name input');
const select = document.querySelector('.save-as select');
const saveButton = document.querySelector('.save-button');
select.addEventListener('change',() => {
     const selectedFormat = select.options[select.selectedIndex].text;
     saveButton.innerText = `Save As ${selectedFormat.split(" ")[0]} File`;
});
saveButton.addEventListener('click',() => {
     const blob = new Blob([textarea.value],{type: select.value});
     const objectURL = URL.createObjectURL(blob);
     const a = document.createElement('a');
     a.download = input.value;
     a.href = objectURL;
     a.click();
});