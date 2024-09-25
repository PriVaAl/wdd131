const input= document.querySelector('#favchap');
const button= document.querySelector('#addChapterButton');
const list = document.querySelector('#list');


button.addEventListener('click', function() {
    console.log('Button clicked!');
    if (input.value.trim() !=='') {
        const li =document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent =  '❌';

        li.append(deleteButton);

        list.append(li);

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
        
        input.value = '';

    } else {
        input.focus();
    }

});

input.addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        button.click();
    }
});









