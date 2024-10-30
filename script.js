const badgeForm = document.getElementById('badgeForm');
const downloadBadge = document.getElementById('downBadge');
const createBadge = document.getElementById('createBadge');

badgeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formContainer = document.getElementById('formContainer');
    formContainer.style.display = 'none';

    const eventName = document.getElementById('eventName').value;
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    const company = "@" + document.getElementById('company').value;
    const access = document.getElementById('access').value;

    const id = 'ID' + Math.floor(Math.random() * 100).toString().padStart(4, '0');

    $('#badgeEvent').text(eventName);
    $('#badgeName').text(name);
    $('#badgeDesignation').text(designation);
    $('#badgeContainer').text(company);
    $('#badgeAccess').text(access);

    $('#qrcode').empty();

    $('#qrcode').qrcode({
        text: `ID: ${id}\nEvent: ${eventName}\nDesignation: ${designation}\nCompany: ${company}\nAccess Level: ${access}`,
        width: 128,
        height: 128
    });

    $('#badge').css('display', 'block');
    $('#downBadge').css('display', 'block');
    $('#createBadge').css('display', 'block');
});

createBadge.addEventListener('click', function() {
    $('#badge').css('display', 'none');
    $('#downBadge').css('display', 'none');
    $('#createBadge').css('display', 'none');

    document.getElementById('formContainer').style.display = 'block';
    document.getElementById('badgeForm').reset();
});

downloadBadge.addEventListener('click', function(e) {
    e.preventDefault();

    const badgeElement = document.getElementById('badge');
    htmlToImage.toPng(badgeElement)
        .then(function(dataUrl) {
            const link = document.createElement('a');
            link.download = document.getElementById('name').value + '.png';
            link.href = dataUrl;
            link.click();
        })
        .catch(function(error) {
            console.error('Error Converting HTML To Image:', error);
        });
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(event.key)) {
        event.preventDefault();
    }
    if (event.ctrlKey && event.key === 'U') {
        event.preventDefault();
    }
});

});
