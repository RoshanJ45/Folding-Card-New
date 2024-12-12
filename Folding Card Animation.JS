const task = document.querySelector('.task');
      const abstract = document.querySelector('.abstract');
      const details = document.querySelector('.details');

      task.addEventListener('mouseover', () => {
        abstract.style.transform = 'rotateX(180deg)';
        details.style.transform = 'rotateX(0deg)';
      });

      task.addEventListener('mouseout', () => {
        abstract.style.transform = 'rotateX(0deg)';
        details.style.transform = 'rotateX(-180deg)';
      });
