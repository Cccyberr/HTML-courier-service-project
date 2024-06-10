    const packageTitle = document.getElementById('package-title');
    const packageInfo = document.getElementById('package-info');
    const deliveryTitle = document.getElementById('delivery-title');
    const deliveryInfo = document.getElementById('delivery-info');

    packageTitle.addEventListener('mouseover', () => { 
      packageInfo.style.display = 'block';
    });
    packageTitle.addEventListener('mouseout', () => {
      packageInfo.style.display = 'none';
    });

    deliveryTitle.addEventListener('mouseover', () => {
      deliveryInfo.style.display = 'block';
    });
    deliveryTitle.addEventListener('mouseout', () => {
      deliveryInfo.style.display = 'none';
    });