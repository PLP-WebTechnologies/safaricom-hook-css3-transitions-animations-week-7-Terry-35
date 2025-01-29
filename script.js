
    function calculateArea() {
      const length = parseFloat(document.getElementById('length').value);
      const width = parseFloat(document.getElementById('width').value);
      if (isNaN(length) || isNaN(width)) {
        return 'Please enter valid numbers for length and width.';
      } else {
        return `The area of the rectangle is ${length * width} square units.`;
      }
    }

    function toggleModal() {
      const modal = document.getElementById('modal');
      const spinner = document.getElementById('spinner');
      const resultElement = document.getElementById('areaResult');
      
      if (modal.classList.contains('visible')) {
        modal.style.animation = 'fadeOut 0.5s';
        setTimeout(() => {
          modal.classList.remove('visible');
          resultElement.textContent = '';
        }, 500);
      } else {
        modal.classList.add('visible');
        modal.style.animation = 'fadeIn 0.5s';
        spinner.style.display = 'block';
        resultElement.textContent = '';
        
        setTimeout(() => {
          spinner.style.display = 'none';
          resultElement.textContent = calculateArea();
        }, 2000);
      }
    }
