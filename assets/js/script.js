document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo e convertendo os valores de entrada
    const weight = parseFloat(document.getElementById('weight').value.replace(',', '.'));
    const height = parseFloat(document.getElementById('height').value.replace(',', '.'));

    // Verificando se os valores são válidos
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Calculando o IMC
    const bmi = (weight / (height * height)).toFixed(2);

    // Atualizando a interface
    const valueElement = document.getElementById('value');
    const descriptionElement = document.getElementById('description');
    const infosElement = document.getElementById('infos');

    // Removendo classes antigas
    valueElement.classList.remove('attention', 'normal');

    // Exibindo o resultado
    infosElement.classList.remove('hidden');
    
    let description = '';

    if (bmi < 18.5) {
        description = "Cuidado! Você está abaixo do peso!";
        valueElement.classList.add('attention');
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = "Você está no peso ideal!";
        valueElement.classList.add('normal');
    } else if (bmi > 25 && bmi <= 30) {
        description = "Cuidado! Você está com sobrepeso!";
        valueElement.classList.add('attention');
    } else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! Você está com obesidade moderada!";
        valueElement.classList.add('attention');
    } else if (bmi > 35 && bmi <= 40) {
        description = "Cuidado! Você está com obesidade severa!";
        valueElement.classList.add('attention');
    } else {
        description = "Cuidado! Você está com obesidade mórbida!";
        valueElement.classList.add('attention');
    }

    // Atualizando o texto do IMC e a descrição
    valueElement.textContent = bmi.replace('.', ',');
    descriptionElement.textContent = description;
});
