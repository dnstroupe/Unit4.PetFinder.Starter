document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/v1/pets')
        .then(response => response.json())
        .then(pets => {
            const petsList = document.createElement('ul');
            pets.forEach(pet => {
                const petItem = document.createElement('li');
                petItem.textContent = `Name: ${pet.name}, Breed: ${pet.breed}`;
                petsList.appendChild(petItem);
            });
            document.body.appendChild(petsList);
        })
        .catch(error => console.error('Error:', error));
});
